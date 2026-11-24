/* KASKAD v62: hand off scene gestures only at the *actual* camera limits; controls unchanged.
 * No scroll frame auto-resizing, no source-document clientY coordinates,
 * no double scrolling. Parent page moves at 1:1 finger speed only at bounds.
 */
(() => {
  'use strict';
  const MOBILE = '(max-width:730px), (max-width:1080px) and (hover:none) and (pointer:coarse)';
  if (!window.matchMedia(MOBILE).matches) return;
  const sameOriginParent = window.parent !== window;
  const query = sameOriginParent ? window.parent.location.search : location.search;
  const safe = new URLSearchParams(query).get('safe') === '1';
  const type = 'kaskad-boundary-gesture-v62';

  if (!sameOriginParent) {
    const frame = document.querySelector('#interactive-home iframe');
    if (!frame || safe) return;
    let active = null;
    let queued = 0;
    let raf = 0;
    const flush = () => {
      raf = 0;
      const pixels = Math.max(-85, Math.min(85, queued));
      queued = 0;
      if (Math.abs(pixels) >= .5) {
        window.scrollBy({top: pixels, behavior: 'instant'});
      }
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(flush); };
    window.addEventListener('message', e => {
      if (e.origin !== location.origin || e.source !== frame.contentWindow) return;
      const data = e.data;
      if (!data || data.type !== type || data.version !== 1) return;
      const y = Number(data.screenY);
      if (!Number.isFinite(y)) return;
      if (data.phase === 'start') {
        active = {id:data.id, lastY:y, sign:data.sign};
        queued = 0;
        return;
      }
      if (!active || active.id !== data.id) return;
      if (data.phase === 'end') {active = null; return;}
      if (data.phase !== 'move') return;
      const delta = active.lastY - y;
      active.lastY = y;
      // Reject synthetic jumps and the reversed deltas that made v51-v53 flicker.
      if (Math.abs(delta) > 110 || Math.abs(delta) < .25) return;
      if (Math.sign(delta) !== active.sign) return;
      queued = Math.max(-130, Math.min(130, queued + delta));
      schedule();
    }, {passive:true});
    return;
  }

  const scene = document.getElementById('sceneContainer');
  const panel = document.querySelector('aside.controls');
  const plotHouse = document.getElementById('builderPlotHouse');
  if (!scene || !panel) return;
  let sequence = 0;
  let gesture = null;
  let momentum = 0;
  const stopMomentum = () => {
    if (momentum) cancelAnimationFrame(momentum);
    momentum = 0;
  };
  const orbit = () => window.kaskadOrbitControls || null;
  const message = (phase, touch, g) => {
    if (safe || !g) return;
    window.parent.postMessage({
      type, version:1, phase, id:g.id,
      screenY:touch.screenY, sign:g.sign
    }, location.origin);
  };
  const kind = node => {
    if (!(node instanceof Element)) return 'other';
    if (node.closest('#sceneContainer')) return 'scene';
    if (node.closest('#builderPlotHouse')) return 'plan';
    if (node.closest('aside.controls')) return 'panel';
    return 'other';
  };
  const panelLimit = () => Math.max(0, panel.scrollHeight - panel.clientHeight);
  const scrollPanel = (dy, g, touch) => {
    const maximum = panelLimit();
    const previous = panel.scrollTop;
    const desired = previous + dy * 1.38;
    panel.scrollTop = Math.max(0, Math.min(maximum, desired));
    const rem = desired - panel.scrollTop;
    if (Math.abs(rem) > 1.2 && (dy > 0
      ? panel.scrollTop >= maximum - 1
      : panel.scrollTop <= 1)) beginPage(g, touch, dy);
  };
  const tiltAtLimit = dy => {
    const c = orbit();
    if (!c || !c.enabled) return false;
    // Only the camera's CURRENT, rendered polar angle qualifies as an edge.
    // Checking the damped future angle handed the scroll to the website early.
    const phi = c.getPolarAngle();
    const margin = .015;
    return dy > 0
      ? phi >= c.maxPolarAngle - margin
      : phi <= c.minPolarAngle + margin;
  };
  const planAtLimit = dy => {
    if (!plotHouse) return false;
    const top = parseFloat(plotHouse.style.top);
    const height = parseFloat(plotHouse.style.height);
    if (!Number.isFinite(top) || !Number.isFinite(height)) return false;
    return dy > 0 ? top <= .6 : top + height >= 99.4;
  };
  function beginPage(g, touch, dy) {
    if (g.chained || !dy) return;
    g.chained = true;
    g.sign = Math.sign(dy);
    if (g.kind === 'scene') {
      const c = orbit();
      if (c) {
        g.restoreRotate = c.enableRotate;
        c.enableRotate = false;
        if (c._sphericalDelta) c._sphericalDelta.phi = 0;
      }
    }
    message('start', touch, g);
  }
  const release = (event, canceled) => {
    if (!gesture) return;
    const g = gesture;
    if (g.restoreRotate !== undefined) {
      const c = orbit();
      if (c) c.enableRotate = g.restoreRotate;
    }
    if (g.chained) {
      const touch = event?.changedTouches?.[0] || {screenY:g.lastY};
      message('end', touch, g);
    } else if (!canceled && g.kind === 'panel' && g.axis === 'vertical') {
      // Light, bounded momentum for natural, quick scrolling INSIDE options.
      let speed = Math.max(-2.5, Math.min(2.5, g.velocity));
      let previous = performance.now();
      const tick = now => {
        const elapsed = Math.min(32, now - previous);
        previous = now;
        const before = panel.scrollTop;
        const max = panelLimit();
        panel.scrollTop = Math.max(0, Math.min(max, before + speed * elapsed));
        const stuck = Math.abs(panel.scrollTop - before) < .25;
        speed *= Math.pow(.88, elapsed / 16);
        if (!stuck && Math.abs(speed) > .13) momentum = requestAnimationFrame(tick);
        else momentum = 0;
      };
      if (Math.abs(speed) > .35) momentum = requestAnimationFrame(tick);
    }
    gesture = null;
  };

  document.addEventListener('touchstart', e => {
    stopMomentum();
    if (gesture) release(e, true);
    if (e.touches.length !== 1) return;
    const t = e.touches[0];
    gesture = {
      id:++sequence, kind:kind(e.target), axis:null, chained:false, sign:0,
      startX:t.screenX, startY:t.screenY,
      lastY:t.screenY, lastTime:e.timeStamp, velocity:0
    };
  }, {capture:true,passive:true});

  document.addEventListener('touchmove', e => {
    const g = gesture;
    if (!g || e.touches.length !== 1) return;
    const t = e.touches[0];
    const dx = Math.abs(t.screenX - g.startX);
    const totalY = Math.abs(t.screenY - g.startY);
    if (!g.axis) {
      if (totalY < 7 && dx < 7) return;
      g.axis = totalY > dx * 1.18 ? 'vertical' : 'horizontal';
    }
    if (g.axis !== 'vertical') return;
    const dy = g.lastY - t.screenY;
    const elapsed = Math.max(5, e.timeStamp - g.lastTime);
    g.lastY = t.screenY;
    g.lastTime = e.timeStamp;
    if (Math.abs(dy) < .35 || Math.abs(dy) > 110) return;
    if (g.chained) {
      if (e.cancelable) e.preventDefault();
      if (Math.sign(dy) === g.sign) message('move', t, g);
      return;
    }
    if (g.kind === 'scene') {
      // A vertical drag belongs EXCLUSIVELY to the 3D camera until it
      // actually reaches an orbit limit. Prevent the top-level page from
      // drifting behind the camera while the model is still moving.
      if (e.cancelable) e.preventDefault();
      if (!tiltAtLimit(dy)) return;
      beginPage(g, t, dy);
      return;
    }
    if (g.kind === 'plan' && !planAtLimit(dy)) return;
    // The plan reaches its own edge before passing the gesture to controls.
    if (g.kind === 'plan') g.kind = 'panel';
    if (g.kind === 'panel') {
      if (e.cancelable) e.preventDefault();
      g.velocity = dy * 1.38 / elapsed;
      scrollPanel(dy, g, t);
      return;
    }
    if (e.cancelable) e.preventDefault();
    beginPage(g, t, dy);
  }, {capture:true,passive:false});

  // OrbitControls uses pointermove at document level. Once the parent site
  // owns a gesture, a second handler must never rotate or drag anything.
  document.addEventListener('pointermove', e => {
    if (gesture?.chained && e.pointerType === 'touch') e.stopImmediatePropagation();
  }, {capture:true});

  document.addEventListener('touchend', e => {
    if (e.touches.length === 0) release(e, false);
  }, {capture:true,passive:true});
  document.addEventListener('touchcancel', e => release(e, true),
    {capture:true,passive:true});
  window.addEventListener('blur', () => release(null, true));

  // Keep the optional roof camera control introduced in v56.
  const toggle = document.getElementById('sceneTopViewButton');
  const view = document.getElementById('sceneViewSelect');
  if (toggle && view) {
    toggle.addEventListener('click', () => {
      view.value = view.value === 'top' ? 'front' : 'top';
      view.dispatchEvent(new Event('change', {bubbles:true}));
    });
    view.addEventListener('change', () => {
      const top = view.value === 'top';
      toggle.setAttribute('aria-pressed', String(top));
      toggle.textContent = top ? 'Главный фасад' : 'Вид сверху';
    });
  }
})();
