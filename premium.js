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

  // Палитра отделки — только наглядная имитация, не обещаем точного PBR-рендера.
  const matWindow = q('#premiumMaterialVisual');
  const matSample = q('#premiumMaterialSample');
  const matTitle = q('#premiumMaterialTitle');
  const matCaption = q('#premiumMaterialCaption');
  const matButtons = qa('.premium-material-button');
  const surfaceButtons = qa('.premium-surface-button');
  let currentMat = 'wood';
  let currentSurface = 'floor';
  const materials = {
    wood: {name:'Дубовая доска', note:'Тёплая натуральная фактура'},
    microcement: {name:'Микроцемент', note:'Современная матовая поверхность'},
    stone: {name:'Светлый камень', note:'Выразительная минеральная фактура'}
  };
  const updateMaterial = () => {
    if (!matWindow) return;
    matWindow.dataset.material = currentMat;
    matWindow.dataset.surface = currentSurface;
    if (matSample) matSample.dataset.material = currentMat;
    if (matTitle) matTitle.textContent = materials[currentMat].name;
    if (matCaption) matCaption.textContent = currentSurface==='floor'
      ? 'Наглядный эффект материала пола'
      : 'Наглядный эффект отделки стены';
    matButtons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.material===currentMat)));
    surfaceButtons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.surface===currentSurface)));
  };
  matButtons.forEach(b => b.addEventListener('click', () => {currentMat = b.dataset.material;updateMaterial()}));
  surfaceButtons.forEach(b => b.addEventListener('click', () => {currentSurface = b.dataset.surface;updateMaterial()}));
  updateMaterial();

  // Деликатный навигационный помощник, не выдаём его за настоящего менеджера или AI.
  const tip = q('#premiumChatTip');
  const launcher = q('#premiumChatLauncher');
  const panel = q('#premiumChatPanel');
  let chatUsed = false;
  const hideTip = () => {if (tip) tip.hidden = true;};
  const closePanel = () => {
    if (panel) panel.hidden = true;
    launcher?.setAttribute('aria-expanded','false');
  };
  const openPanel = () => {
    chatUsed = true;
    hideTip();
    if (!panel) return;
    panel.hidden = false;
    launcher?.setAttribute('aria-expanded','true');
    q('#premiumChatClose')?.focus();
  };
  launcher?.addEventListener('click', () => {
    if (panel && !panel.hidden) {closePanel();launcher.focus();}
    else openPanel();
  });
  launcher?.addEventListener('mouseenter', () => { if (!chatUsed && tip) tip.hidden = false; });
  q('#premiumTipClose')?.addEventListener('click', () => {chatUsed = true;hideTip();});
  q('#premiumChatClose')?.addEventListener('click', () => {closePanel();launcher?.focus();});
  qa('[data-premium-go]').forEach(b => b.addEventListener('click', () => {
    const dest = q(b.dataset.premiumGo);
    closePanel();
    if (dest) dest.scrollIntoView({behavior:reduce.matches?'instant':'smooth',block:'start'});
  }));
  document.addEventListener('keydown',e => {
    if (e.key==='Escape') {hideTip();closePanel();}
  });
  window.setTimeout(() => {
    if (chatUsed || !panel?.hidden || !tip || document.hidden || window.scrollY < 100) return;
    tip.hidden = false;
  },15000);

  // Живые появления — только если пользователь не отключил анимацию.
  if (!reduce.matches && 'IntersectionObserver' in window) {
    const candidates=qa('.premium-section .premium-compare-copy,.premium-compare-window,.premium-material-grid > div,.premium-section h2');
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