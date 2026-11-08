/* КАСКАД PWA – install only after a voluntary click; keep photo gallery unchanged. */
(() => {
  'use strict';
  const buttons=[...document.querySelectorAll('[data-kaskad-install]')];
  let deferredPrompt=null;
  let toastTimeout=0;
  const showHint=(message) => {
    let el=document.getElementById('kaskadInstallHint');
    if (!el) {
      el=document.createElement('div');
      el.id='kaskadInstallHint';
      el.setAttribute('role','status');
      el.style.cssText='position:fixed;z-index:1001;left:12px;right:12px;bottom:20px;margin:0 auto;max-width:430px;background:#253d32;color:#fff;border:1px solid #ad9476;border-radius:8px;padding:13px 18px;font:600 13px/1.6 Manrope,system-ui,sans-serif;box-shadow:0 16px 40px #151b165e';
      document.body.append(el);
    }
    el.textContent=message;
    el.hidden=false;
    clearTimeout(toastTimeout);
    toastTimeout=setTimeout(()=>{el.hidden=true},7500);
  };
  const standalone=() => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone===true;
  const iOS=()=>/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  window.addEventListener('beforeinstallprompt',(e)=>{
    e.preventDefault();
    deferredPrompt=e;
  });
  window.addEventListener('appinstalled',()=>{
    deferredPrompt=null;
    buttons.forEach(b=>{b.hidden=true});
  });
  buttons.forEach(btn=>btn.addEventListener('click',async()=>{
    if (standalone()) {showHint('КАСКАД уже открыт как установленное приложение.');return}
    if (deferredPrompt) {
      const prompt=deferredPrompt;
      deferredPrompt=null;
      try {
        prompt.prompt();
        const outcome=await prompt.userChoice;
        if(outcome?.outcome==='accepted')buttons.forEach(b=>{b.hidden=true});
      }catch{showHint('Откройте меню браузера и выберите «Установить приложение».')}
      return;
    }
    if (iOS())showHint('На iPhone: откройте «Поделиться», затем «На экран Домой» и нажмите «Добавить».');
    else showHint('Откройте меню браузера (⋮) и выберите «Установить приложение» или «Добавить на главный экран».');
  }));
  // A service worker caches only the shell and visited images. Never cache form submissions or personal data.
  if('serviceWorker' in navigator && (location.protocol==='https:' || location.hostname==='localhost' || location.hostname==='127.0.0.1')) {
    window.addEventListener('load',()=>{
      const register=()=>navigator.serviceWorker.register(new URL('service-worker.js',document.baseURI),{
        scope:new URL('./',document.baseURI).pathname,
        updateViaCache:'none'
      }).catch(()=>{/* Fail gracefully: website remains fully usable online. */});
      if('requestIdleCallback' in window) requestIdleCallback(register,{timeout:2200});
      else setTimeout(register,500);
    },{once:true});
  }
})();
