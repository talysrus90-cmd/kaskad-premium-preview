/* КАСКАД — интерактивная пробная версия, не отправляет данные. */
(() => {
  'use strict';
  const q = (s, root=document) => root.querySelector(s);
  const qa = (s, root=document) => [...root.querySelectorAll(s)];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const page = document.documentElement;

  // Актуальная позиция чтения. Не влияет на историю, скорость и макет страницы.
  const progress = q('#premiumReadingProgress');
  let scrollTick = false;
  const updateProgress = () => {
    const max = Math.max(0, page.scrollHeight - window.innerHeight);
    const ratio = max ? Math.max(0, Math.min(1, window.scrollY / max)) : 0;
    if (progress) progress.style.setProperty('--read-progress', String(ratio));
    scrollTick = false;
  };
  window.addEventListener('scroll', () => {
    if (!scrollTick) {
      scrollTick = true;
      window.requestAnimationFrame(updateProgress);
    }
  }, {passive: true});
  window.addEventListener('resize', updateProgress, {passive:true});
  updateProgress();

  // До/после: ручной ползунок, поддержка мыши, касания и стрелок с клавиатуры.
  // Фотографии представляют разные пространства — честная пометка на странице.
  const range = q('#premiumCompareRange');
  const compare = q('#premiumCompareWindow');
  const current = q('#premiumCompareValue');
  const updateCompare = () => {
    if (!range || !compare) return;
    compare.style.setProperty('--split', range.value + '%');
    if (current) current.textContent = range.value + '%';
  };
  if (range && compare) {
    range.addEventListener('input', updateCompare);
    range.addEventListener('change', updateCompare);
    updateCompare();
  }

  // Живые появления — только если пользователь не отключил анимацию.
  if (!reduce.matches && 'IntersectionObserver' in window) {
    const candidates=qa('.premium-section .premium-compare-copy,.premium-compare-window,.premium-section h2');
    const obs=new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {rootMargin:'0px 0px -25px 0px',threshold:0.06});
    candidates.forEach(el=>{el.classList.add('premium-reveal');obs.observe(el)});
    page.classList.add('premium-motion-ready');
    // Обеспечиваем доступность при снижении анимации во время посещения.
    reduce.addEventListener('change', () => {
      if (reduce.matches) {
        obs.disconnect();
        page.classList.remove('premium-motion-ready');
      }
    });
  }
})();