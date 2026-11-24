/* КАСКАД v29 — рабочий запуск 3D-конструктора из любой части сайта.
   Прежняя якорная ссылка лишь прокручивала к изображению, поэтому настройки
   оказывались ниже видимой области. Теперь фокусируем именно каталог 3D. */
(function(){
 'use strict';
 const section=document.getElementById('interactive-home');
 const iframe=section?.querySelector('iframe');
 if(!section||!iframe)return;
 const origin=new URL(iframe.src,location.href).origin;
 // The static preview is visible immediately; remove it once the real editor
 // document has fully loaded. No loading overlay on the parent site.
 const markFrameReady=()=>section.classList.add('kaskad-frame-ready');
 const validFrame=()=>{
   try{return Boolean(iframe.contentDocument?.getElementById('sceneContainer'))}
   catch{return false}
 };
 // The iframe load event can fire even after a failed navigation.
 // Keep the preview unless the real editor document is present.
 iframe.addEventListener('load',()=>{if(validFrame())markFrameReady()});
 if(iframe.contentDocument?.readyState==='complete'&&validFrame())markFrameReady();
 let openRequest=0;
 let builderHistoryActive=false;
 let interiorHistoryActive=false;
 let priorScrollRestoration=null;
 const iframeMessage=(type)=>iframe.contentWindow?.postMessage({type,version:1},origin);
 const sectionTop=()=>{
  const header=document.querySelector('header.header');
  const sticky=header?.getBoundingClientRect().height||70;
  return Math.max(0,section.getBoundingClientRect().top+window.scrollY-sticky-8);
 };
 function markBuilderEntry(){
  if(priorScrollRestoration===null){
    priorScrollRestoration=history.scrollRestoration;
    history.scrollRestoration='manual';
  }
  if(history.state?.kaskadBuilderOpened){builderHistoryActive=true;return;}
  try{
   history.pushState({...history.state,kaskadBuilderOpened:true,
     kaskadBuilderFromScroll:Math.round(window.scrollY)},'',
     location.pathname+location.search+'#interactive-home');
   builderHistoryActive=true;
  }catch(e){}
 }

 function closeMobileMenu(){
  const menu=document.getElementById('mobileMenu');
  const toggle=document.getElementById('menuBtn');
  if(toggle?.getAttribute('aria-expanded')==='true'&&menu?.classList.contains('open')){
   toggle.click();
  }
 }
 function openBuilder(e){
  e?.preventDefault();
  const seq=++openRequest;
  closeMobileMenu();
  section.classList.add('kaskad-builder-active');
  iframe.setAttribute('loading','eager');
  iframe.setAttribute('fetchpriority','high'); // Explicit user action takes priority.
  // An explicit same-site history step makes Android Back return to the
  // KASKAD page, including when it had opened directly at #interactive-home.
  markBuilderEntry();
  const jump=()=>{
   if(seq!==openRequest)return;
   // Position canvas directly below the sticky site header. The 3D frame
   // itself then reveals the real material chooser immediately below the model.
   const header=document.querySelector('header.header');
   const sticky=header?.getBoundingClientRect().height||70;
   const where=Math.max(0,window.scrollY+iframe.getBoundingClientRect().top-sticky-8);
   window.scrollTo({top:where,behavior:'instant'});
  };
  const message=()=>{
   if(seq!==openRequest)return;
   iframe.contentWindow?.postMessage({
    type:'kaskad-builder-open',version:1,step:0
   },origin);
  };
  jump();
  // Lazy iframe may initially have readyState=complete for about:blank.
  // Announce the opening only after the real constructor document is ready.
  if(validFrame()&&iframe.contentDocument?.readyState==='complete'){
   message();
  }else{
   const onRealFrame=()=>{
    if(seq!==openRequest){iframe.removeEventListener('load',onRealFrame);return}
    if(!validFrame())return;
    iframe.removeEventListener('load',onRealFrame);
    jump();
    message();
   };
   iframe.addEventListener('load',onRealFrame);
   if(validFrame()&&iframe.contentDocument?.readyState==='complete')onRealFrame();
  }
  // A late font/layout shift should not move the editor back below the fold.
  requestAnimationFrame(()=>jump());
 }
 window.addEventListener('popstate',event=>{
  // Android Back must first close the interior room, then return to the
  // original 3D section. The user never loses the KASKAD page.
  if(interiorHistoryActive&&!event.state?.kaskadInteriorOpen){
    interiorHistoryActive=false;
    iframeMessage('kaskad-interior-exit');
    // Returning from a room must preserve the visitor's scroll position:
    // the same iframe is already showing the exterior synchronously.
    // Forcing sectionTop() here makes «Вернуться к дому» look like it
    // unexpectedly navigated away from the 3D house on mobile.
    return;
  }
  if(event.state?.kaskadInteriorOpen){
    interiorHistoryActive=true;return;
  }
  if(!builderHistoryActive||event.state?.kaskadBuilderOpened)return;
  builderHistoryActive=false;
  section.classList.remove('kaskad-builder-active');
  // Let the layout and mobile iframe settle, then restore this section.
  // Native automatic history scroll otherwise overrides the position after
  // Android Back, especially when first touching an iframe control.
  const restore=()=>window.scrollTo({top:sectionTop(),behavior:'instant'});
  requestAnimationFrame(()=>requestAnimationFrame(restore));
  window.setTimeout(restore,150);
  window.setTimeout(()=>{
    restore();
    if(priorScrollRestoration!==null){
      history.scrollRestoration=priorScrollRestoration;
      priorScrollRestoration=null;
    }
  },360);
 });
 document.querySelectorAll('[data-kaskad-open-builder]').forEach(control=>{
  control.addEventListener('click',openBuilder);
 });
 // Give visual success feedback only AFTER the embedded configurator confirms.
 window.addEventListener('message',event=>{
  if(event.origin!==origin||event.source!==iframe.contentWindow)return;
  if(event.data?.version!==1)return;
  if(event.data.type==='kaskad-interior-enter'){
    // This extra same-origin history step is above the builder entry,
    // so Back is deterministic even when the visitor enters from a hash URL.
    markBuilderEntry();
    if(history.state?.kaskadInteriorOpen){interiorHistoryActive=true;return}
    try{
      history.pushState({...history.state,kaskadBuilderOpened:true,
        kaskadInteriorOpen:true},'',
        location.pathname+location.search+'#interactive-home');
      interiorHistoryActive=true;
    }catch(e){}
    return;
  }
  if(event.data.type==='kaskad-interior-leave'){
    if(history.state?.kaskadInteriorOpen&&interiorHistoryActive)history.back();
    return;
  }
  if(event.data.type==='kaskad-builder-first-frame'){
    markFrameReady();return;
  }
  if(event.data.type==='kaskad-builder-engaged'){
   markBuilderEntry();return;
  }
  if(event.data.type!=='kaskad-builder-opened')return;
  section.classList.add('kaskad-builder-ready');
  const CTA=section.querySelector('.kaskad-open-builder-cta');
  if(CTA)CTA.textContent='Настройки открыты · выберите вариант ниже ↓';
 });
})();
