/* КАСКАД v29 — рабочий запуск 3D-конструктора из любой части сайта.
   Прежняя якорная ссылка лишь прокручивала к изображению, поэтому настройки
   оказывались ниже видимой области. Теперь фокусируем именно каталог 3D. */
(function(){
 'use strict';
 const section=document.getElementById('interactive-home');
 const iframe=section?.querySelector('iframe');
 if(!section||!iframe)return;
 const origin=new URL(iframe.src,location.href).origin;
 let openRequest=0;
 let previousSectionScroll=null;
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
  const wasAt=window.scrollY;
  // Preserve section navigation as one normal browser-history step.
  if(location.hash!=='#interactive-home'){
   previousSectionScroll=wasAt;
   try{
    history.pushState({...history.state,kaskadBuilderOpened:true,
     kaskadBuilderFromScroll:Math.round(wasAt)},'',
     location.pathname+location.search+'#interactive-home');
   }catch{}
  }
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
  if(iframe.contentDocument?.readyState==='complete'){
   message();
  }else{
   iframe.addEventListener('load',()=>{
    jump();
    message();
   },{once:true});
  }
  // A late font/layout shift should not move the editor back below the fold.
  requestAnimationFrame(()=>jump());
 }
 window.addEventListener('popstate',()=>{
  if(previousSectionScroll===null||location.hash==='#interactive-home')return;
  const y=previousSectionScroll;previousSectionScroll=null;
  requestAnimationFrame(()=>window.scrollTo({top:Math.max(0,y),behavior:'instant'}));
 });
 document.querySelectorAll('[data-kaskad-open-builder]').forEach(control=>{
  control.addEventListener('click',openBuilder);
 });
 // Give visual success feedback only AFTER the embedded configurator confirms.
 window.addEventListener('message',event=>{
  if(event.origin!==origin||event.source!==iframe.contentWindow)return;
  if(event.data?.type!=='kaskad-builder-opened'||event.data?.version!==1)return;
  section.classList.add('kaskad-builder-ready');
  const CTA=section.querySelector('.kaskad-open-builder-cta');
  if(CTA)CTA.textContent='Настройки открыты · выберите вариант ниже ↓';
 });
})();
