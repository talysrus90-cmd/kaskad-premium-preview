/* KASKAD v52: stable, one-way touch handoff from the WebGL iframe to the site.
   One scroll operation per animation frame, no concurrent scene dragging. */
(() => {
  'use strict';
  const frame = document.querySelector('#interactive-home iframe');
  if (window.parent === window) {
    if (!frame) return;
    let queuedY = 0, frameId = 0;
    const renderScroll = () => {
      frameId = 0;
      const y = Math.max(-340, Math.min(340, queuedY));
      queuedY = 0;
      if (Math.abs(y) > .1) {
        // This MUST be instant, even though anchor links use smooth scroll.
        window.scrollBy({top: y, behavior: 'instant'});
      }
    };
    window.addEventListener('message', event => {
      if (event.origin !== location.origin || event.source !== frame.contentWindow) return;
      if (event.data?.type !== 'kaskad-scroll-chain' || event.data?.version !== 1) return;
      const delta = Number(event.data.deltaY);
      if (!Number.isFinite(delta) || Math.abs(delta) < .1) return;
      queuedY = Math.max(-600, Math.min(600, queuedY + delta));
      if (!frameId) frameId = requestAnimationFrame(renderScroll);
    }, {passive: true});
    return;
  }

  const panel = document.querySelector('.controls');
  const scene = document.getElementById('sceneContainer');
  const plan = document.getElementById('builderPlotPlan');
  const house = document.getElementById('builderPlotHouse');
  if (!panel || !scene) return;

  let queuedY = 0, messageFrame = 0;
  const sendFrame = () => {
    messageFrame = 0;
    const deltaY = queuedY; queuedY = 0;
    if (Math.abs(deltaY) > .1) {
      window.parent.postMessage({type:'kaskad-scroll-chain',version:1,deltaY},location.origin);
    }
  };
  const relay = (delta, kind = 'touch') => {
    if (!Number.isFinite(delta) || Math.abs(delta) < .1) return;
    const speed = kind === 'wheel' ? 1.6 : 2.8;
    queuedY = Math.max(-600, Math.min(600, queuedY + delta * speed));
    if (!messageFrame) messageFrame = requestAnimationFrame(sendFrame);
  };
  const panelCanScroll = delta => {
    if (panel.scrollHeight <= panel.clientHeight + 2) return false;
    if (delta > 0) return panel.scrollTop + panel.clientHeight < panel.scrollHeight - 2;
    return panel.scrollTop > 2;
  };
  const sceneAtLimit = delta => {
    const orbit = window.kaskadOrbitControls;
    if (!orbit || !orbit.enabled) return true;
    const phi = orbit.getPolarAngle();
    return delta > 0
      ? phi >= orbit.maxPolarAngle - .035
      : phi <= orbit.minPolarAngle + .035;
  };
  const sceneZoomAtLimit = delta => {
    const orbit = window.kaskadOrbitControls;
    if (!orbit || !orbit.enabled) return true;
    const distance = orbit.getDistance();
    return delta > 0
      ? distance >= orbit.maxDistance - .06
      : distance <= orbit.minDistance + .06;
  };
  const planAtLimit = delta => {
    if (!plan || !house) return false;
    const top = parseFloat(house.style.top);
    const height = parseFloat(house.style.height);
    if (!Number.isFinite(top) || !Number.isFinite(height)) return false;
    return delta > 0 ? top <= .5 : top + height >= 99.5;
  };
  const zone = target => {
    if (!(target instanceof Element)) return 'other';
    if (target.closest('#sceneContainer')) {
      return target.closest('canvas') ? 'scene' : 'other';
    }
    if (target.closest('.builder-plot-plan')) return 'plan';
    if (target.closest('.controls')) return 'panel';
    return 'other';
  };

  let gesture = null;
  const release = () => {
    if (gesture?.pausedOrbit) {
      const orbit = window.kaskadOrbitControls;
      if (orbit) orbit.enableRotate = gesture.orbitRotateEnabled;
    }
    gesture = null;
  };
  document.addEventListener('touchstart', event => {
    release();
    if (event.touches.length !== 1) return;
    const t = event.touches[0];
    gesture = {
      zone: zone(event.target), startX: t.clientX,
      startY: t.clientY, lastY: t.clientY,
      vertical: false, chained: false, pausedOrbit: false
    };
  }, {capture:true,passive:true});

  document.addEventListener('touchmove', event => {
    if (!gesture) return;
    if (event.touches.length !== 1) {release(); return;}
    const t = event.touches[0];
    const travelX = Math.abs(t.clientX - gesture.startX);
    const travelY = Math.abs(t.clientY - gesture.startY);
    if (!gesture.vertical) {
      if (travelY < 8 || travelY <= travelX * 1.15) return;
      gesture.vertical = true;
    }
    const delta = gesture.lastY - t.clientY;
    gesture.lastY = t.clientY;
    if (Math.abs(delta) < .4) return;

    if (!gesture.chained) {
      const atEnd = gesture.zone === 'scene' ? sceneAtLimit(delta)
        : gesture.zone === 'plan' ? planAtLimit(delta)
        : gesture.zone === 'panel' ? !panelCanScroll(delta)
        : true;
      if (!atEnd) return;
      // Commit the rest of THIS touch gesture to the parent. Do not toggle
      // back and forth between WebGL, plan dragging and site scrolling.
      gesture.chained = true;
      if (gesture.zone === 'scene') {
        const orbit = window.kaskadOrbitControls;
        if (orbit) {
          gesture.orbitRotateEnabled = orbit.enableRotate;
          orbit.enableRotate = false;
          gesture.pausedOrbit = true;
        }
      }
    }
    if (event.cancelable) event.preventDefault();
    relay(delta);
  }, {capture:true,passive:false});

  // OrbitControls and the 2D plot use pointermove. Once the parent scroll is
  // handling a touch gesture, stop those handlers from moving the model too.
  document.addEventListener('pointermove', event => {
    if (gesture?.chained && event.pointerType === 'touch') event.stopPropagation();
  }, {capture:true,passive:true});

  for (const name of ['touchend','touchcancel']) {
    document.addEventListener(name, event => {
      if (event.touches.length === 0) release();
    }, {passive:true});
  }
  window.addEventListener('blur', release);

  document.addEventListener('wheel', event => {
    const delta = event.deltaY;
    if (Math.abs(delta) < .2) return;
    const kind = zone(event.target);
    const atEnd = kind === 'scene' ? sceneZoomAtLimit(delta)
      : kind === 'plan' ? true
      : kind === 'panel' ? !panelCanScroll(delta)
      : true;
    if (!atEnd) return;
    if (event.cancelable) event.preventDefault();
    relay(delta, 'wheel');
  }, {capture:true,passive:false});
})();
