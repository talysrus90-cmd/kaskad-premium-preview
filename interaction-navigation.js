/* КАСКАД — поэтапная история переключателей.
   Одна смена фильтра, типа расчёта или законченный перетягиванием выбор
   площади = один шаг браузерной истории. Не хранит данные пользователя,
   не отправляет запросы, не перехватывает выход из браузера. */
(function () {
  'use strict';
  if (!window.history || typeof history.pushState !== 'function') return;
  const area = document.getElementById('area');
  const types = [...document.querySelectorAll('#calcType [data-kind]')];
  const services = [...document.querySelectorAll('[data-filter]')];
  const portfolio = [...document.querySelectorAll('[data-portfolio-filter]')];
  const designs = [...document.querySelectorAll('[data-designer-show]')];
  if (!types.length && !services.length && !portfolio.length && !designs.length) return;

  const selected = (buttons, name) => {
    const node = buttons.find(b => b.classList.contains('active') ||
      b.getAttribute('aria-pressed') === 'true');
    return node ? node.dataset[name] : null;
  };
  const snapshot = () => ({
    kind: selected(types, 'kind'),
    area: area ? Number(area.value) : null,
    service: selected(services, 'filter'),
    portfolio: selected(portfolio, 'portfolioFilter'),
    design: (designs.find(b => b.getAttribute('aria-pressed') === 'true') || {}).dataset?.designerShow || null
  });
  const same = (a,b) => JSON.stringify(a) === JSON.stringify(b);
  const initial = snapshot();
  let previous = initial;
  let replaying = false;
  const stateObject = () => history.state && typeof history.state === 'object' ? history.state : {};

  // Annotate the existing entry instead of creating a phantom step at page load.
  try {
    const base = stateObject();
    history.replaceState({...base, kaskadUi: base.kaskadUi || initial}, '', location.href);
  } catch (error) { /* Browser may block History API in preview contexts. */ }

  function record(section) {
    if (replaying) return;
    const next = snapshot();
    if (same(next, previous)) return;
    const old = stateObject();
    try {
      if (!same(old.kaskadUi, previous)) {
        history.replaceState({...old, kaskadUi: previous}, '', location.href);
      }
      // Do not inherit a stale 'gallery' or modal layer into a normal tab/filter step.
      const nextState = {...stateObject(), kaskadUi: next, kaskadLayer: 'page'};
      const hash = section === 'calculator' ? '#calculator' :
        section === 'portfolio' ? '#inspiration' :
        section === 'services' ? '#services' : '#designer';
      history.pushState(nextState, '', location.pathname + location.search + hash);
    } catch (error) { /* UI still works without writable history. */ }
    previous = next;
  }

  document.addEventListener('click', event => {
    if (replaying || !event.isTrusted) return;
    const target = event.target.closest?.('[data-kind],[data-filter],[data-portfolio-filter],[data-designer-show]');
    if (!target) return;
    if (target.matches('#calcType [data-kind]')) record('calculator');
    else if (target.matches('[data-portfolio-filter]')) record('portfolio');
    else if (target.matches('[data-filter]')) record('services');
    else if (target.matches('[data-designer-show]')) record('designer');
  });
  // Record on release rather than on each pixel of a phone slider drag.
  area?.addEventListener('change', () => record('calculator'));

  function selectButton(buttons, dataName, value) {
    if (value === null || value === undefined) return;
    const button = buttons.find(b => b.dataset[dataName] === value);
    if (!button) return;
    const current = selected(buttons, dataName);
    if (current !== value) button.click();
  }
  window.addEventListener('popstate', event => {
    const wanted = event.state?.kaskadUi || initial;
    replaying = true;
    try {
      selectButton(types, 'kind', wanted.kind);
      if (area && Number.isFinite(Number(wanted.area))) {
        const min = Number(area.min), max = Number(area.max);
        const step = Number(area.step) || 1;
        const value = Math.min(max, Math.max(min, Number(wanted.area)));
        area.value = String(min + Math.round((value - min) / step) * step);
        area.dispatchEvent(new Event('input', {bubbles:true}));
      }
      selectButton(services, 'filter', wanted.service);
      selectButton(portfolio, 'portfolioFilter', wanted.portfolio);
      const designButton = designs.find(b => b.dataset.designerShow === wanted.design);
      if (designButton && designButton.getAttribute('aria-pressed') !== 'true') designButton.click();
      previous = snapshot();
    } finally {
      replaying = false;
    }
  });
  window.addEventListener('pageshow', event => {
    if (event.persisted) previous = snapshot();
  });
})();