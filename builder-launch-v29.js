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
 let builderHistoryActive=false;
 const sectionTop=()=>{
  const header=document.querySelector('header.header');
  const sticky=header?.getBoundingClientRect().height||70;
  return Math.max(0,section.getBoundingClientRect().top+window.scrollY-sticky-8);
 };
 function markBuilderEntry(){
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
 window.addEventListener('popstate',event=>{
  if(!builderHistoryActive||event.state?.kaskadBuilderOpened)return;
  builderHistoryActive=false;
  section.classList.remove('kaskad-builder-active');
  // Return exactly to the 3D section in the main page. The visitor can
  // continue scrolling down rather than being sent back out of the website.
  const restore=()=>window.scrollTo({top:sectionTop(),behavior:'instant'});
  requestAnimationFrame(()=>requestAnimationFrame(restore));
 });
 document.querySelectorAll('[data-kaskad-open-builder]').forEach(control=>{
  control.addEventListener('click',openBuilder);
 });
 // Give visual success feedback only AFTER the embedded configurator confirms.
 window.addEventListener('message',event=>{
  if(event.origin!==origin||event.source!==iframe.contentWindow)return;
  if(event.data?.version!==1)return;
  if(event.data.type==='kaskad-builder-engaged'){
   markBuilderEntry();return;
  }
  if(event.data.type!=='kaskad-builder-opened')return;
  section.classList.add('kaskad-builder-ready');
  const CTA=section.querySelector('.kaskad-open-builder-cta');
  if(CTA)CTA.textContent='Настройки открыты · выберите вариант ниже ↓';
 });
})();
