/* KASKAD v51: boundary-aware scrolling between the embedded house and the main page.
   Preserve 3D orbit, plan dragging and horizontal sliders. */
(() => {
  'use strict';
  const frame = document.querySelector('#interactive-home iframe');
  if (window.parent === window) {
    if (!frame) return;
    window.addEventListener('message', event => {
      if (event.origin !== location.origin || event.source !== frame.contentWindow) return;
      if (event.data?.type !== 'kaskad-scroll-chain' || event.data?.version !== 1) return;
      const delta = Number(event.data.deltaY);
      if (!Number.isFinite(delta) || Math.abs(delta) < 0.1) return;
      // Explicit instant mode overrides the site's smooth anchor-scroll CSS.
      window.scrollBy({top: Math.max(-340, Math.min(340, delta)), behavior: 'instant'});
    }, {passive: true});
    return;
  }

  const controlsPanel = document.querySelector('.controls');
  const scene = document.getElementById('sceneContainer');
  const plan = document.getElementById('builderPlotPlan');
  const plotHouse = document.getElementById('builderPlotHouse');
  if (!controlsPanel || !scene) return;

  const relay = (deltaY, kind='touch') => {
    if (!Number.isFinite(deltaY) || !deltaY) return;
    window.parent.postMessage({
      type: 'kaskad-scroll-chain', version: 1,
      deltaY: Math.max(-340, Math.min(340, deltaY * (kind==='wheel' ? 1.6 : 2.8)))
    }, location.origin);
  };
  const hasMoreScroll = delta => {
    if (controlsPanel.scrollHeight <= controlsPanel.clientHeight + 2) return false;
    if (delta > 0) return controlsPanel.scrollTop + controlsPanel.clientHeight < controlsPanel.scrollHeight - 2;
    return controlsPanel.scrollTop > 2;
  };
  const orbitAtEnd = delta => {
    const orbit = window.kaskadOrbitControls;
    if (!orbit || !orbit.enabled) return true; // Loading/fallback image: scroll the page.
    const phi = orbit.getPolarAngle();
    // Drag up: camera tilts towards max polar angle. Drag down: towards min.
    return delta > 0
      ? phi >= orbit.maxPolarAngle - 0.035
      : phi <= orbit.minPolarAngle + 0.035;
  };
  const zoomAtEnd = delta => {
    const orbit = window.kaskadOrbitControls;
    if (!orbit || !orbit.enabled) return true;
    const distance = orbit.getDistance();
    return delta > 0
      ? distance >= orbit.maxDistance - 0.06
      : distance <= orbit.minDistance + 0.06;
  };
  const planAtEnd = delta => {
    if (!plan || !plotHouse) return false;
    const top = parseFloat(plotHouse.style.top);
    const height = parseFloat(plotHouse.style.height);
    if (!Number.isFinite(top) || !Number.isFinite(height)) return false;
    return delta > 0 ? top <= 0.5 : top + height >= 99.5;
  };
  const getKind = element => {
    if (!(element instanceof Element)) return 'other';
    if (element.closest('#sceneContainer')) {
      return element.closest('canvas') ? 'scene' : 'other';
    }
    if (element.closest('.builder-plot-plan')) return 'plan';
    if (element.closest('.controls')) return 'panel';
    return 'other';
  };
  let gesture = null;
  document.addEventListener('touchstart', event => {
    if (event.touches.length !== 1) {gesture = null; return;}
    const t = event.touches[0];
    gesture = {
      kind: getKind(event.target),
      firstX: t.clientX, firstY: t.clientY,
      lastY: t.clientY, vertical: false
    };
  }, {capture: true, passive: true});
  document.addEventListener('touchmove', event => {
    if (!gesture || event.touches.length !== 1) return;
    const t = event.touches[0];
    const dx = Math.abs(t.clientX - gesture.firstX);
    const dyTotal = Math.abs(t.clientY - gesture.firstY);
    if (!gesture.vertical) {
      if (dyTotal < 8 || dyTotal <= dx * 1.15) return;
      gesture.vertical = true;
    }
    const delta = gesture.lastY - t.clientY;
    gesture.lastY = t.clientY;
    if (Math.abs(delta) < 0.4) return;
    let atEnd = false;
    if (gesture.kind === 'scene') atEnd = orbitAtEnd(delta);
    else if (gesture.kind === 'plan') atEnd = planAtEnd(delta);
    else if (gesture.kind === 'panel') atEnd = !hasMoreScroll(delta);
    else atEnd = true;
    if (!atEnd) return;
    if (event.cancelable) event.preventDefault();
    relay(delta);
  }, {capture: true, passive: false});
  for (const type of ['touchend', 'touchcancel'])
    document.addEventListener(type, () => {gesture = null;}, {passive: true});

  // Desktop trackpads and mouse wheels also pass on motion at a boundary.
  document.addEventListener('wheel', event => {
    const delta = event.deltaY;
    if (Math.abs(delta) < 0.2) return;
    const kind = getKind(event.target);
    const atEnd = kind === 'scene' ? zoomAtEnd(delta)
      : kind === 'plan' ? true
      : kind === 'panel' ? !hasMoreScroll(delta) : true;
    if (!atEnd) return;
    if (event.cancelable) event.preventDefault();
    relay(delta,'wheel');
  }, {capture: true, passive: false});
})();
