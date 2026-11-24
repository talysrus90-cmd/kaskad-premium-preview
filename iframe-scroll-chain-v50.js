/* KASKAD v56. Mobile uses ONE native page scroller, like the rest of the site.
   No touchmove interception, no accelerated scrollBy, no parent scroll relay.
   Auto-size the same-origin iframe to its live content instead of creating
   a nested, high-inertia scroll viewport inside the builder. */
(() => {
  'use strict';
  if (!window.matchMedia('(max-width:730px)').matches) return;

  if (window.parent === window) {
    const iframe = document.querySelector('#interactive-home iframe');
    if (!iframe) return;
    let lastHeight = 0;
    const setFrameHeight = value => {
      if (!Number.isFinite(value) || value < 150 || value > 12000) return;
      const height = Math.ceil(value) + 3;
      if (Math.abs(lastHeight - height) < 3) return;
      lastHeight = height;
      iframe.style.setProperty('height', height + 'px', 'important');
      iframe.style.setProperty('min-height', '0', 'important');
      iframe.style.setProperty('max-height', 'none', 'important');
    };
    const sizeFromFrame = () => {
      try {
        const doc = iframe.contentDocument;
        const embed = doc?.querySelector('main.embed');
        if (embed) setFrameHeight(Math.max(embed.scrollHeight,embed.getBoundingClientRect().height));
      } catch { /* Parent keeps the standard, usable fallback height. */ }
    };
    window.addEventListener('message', event => {
      if (event.origin !== location.origin || event.source !== iframe.contentWindow) return;
      if (event.data?.type !== 'kaskad-3d-frame-height') return;
      setFrameHeight(Number(event.data.height));
    }, {passive:true});
    iframe.addEventListener('load', () => {
      requestAnimationFrame(sizeFromFrame);
    });
    requestAnimationFrame(sizeFromFrame);
    return;
  }

  const embed = document.querySelector('main.embed');
  if (!embed) return;
  let previousHeight = 0;
  let pending = 0;
  const measure = () => {
    pending = 0;
    const height = Math.ceil(Math.max(
      embed.scrollHeight, embed.getBoundingClientRect().height
    ));
    if (!Number.isFinite(height) || height < 150) return;
    if (Math.abs(previousHeight - height) < 3) return;
    previousHeight = height;
    window.parent.postMessage({
      type: 'kaskad-3d-frame-height', version: 1, height
    }, location.origin);
  };
  const schedule = () => {
    if (!pending) pending = requestAnimationFrame(measure);
  };
  if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(embed);
  window.addEventListener('load', schedule, {passive:true});
  window.addEventListener('resize', schedule, {passive:true});
  document.fonts?.ready?.then(schedule).catch(() => {});
  requestAnimationFrame(schedule);

  // Up/down gestures scroll the site; sideways gestures still orbit the house.
  // The view-top button keeps the roof accessible without trapping the page.
  const toggle = document.getElementById('sceneTopViewButton');
  const view = document.getElementById('sceneViewSelect');
  if (toggle && view) {
    toggle.addEventListener('click', () => {
      const top = toggle.getAttribute('aria-pressed') !== 'true';
      view.value = top ? 'top' : 'front';
      view.dispatchEvent(new Event('change', {bubbles:true}));
      toggle.setAttribute('aria-pressed', String(top));
      toggle.textContent = top ? 'Главный фасад' : 'Вид сверху';
    });
  }
})();
