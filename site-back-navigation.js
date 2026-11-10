/* КАСКАД — навигация по внутренним раскрывающимся разделам.
   Android/browser Back closes последний открытый раздел, а не уводит
   посетителя с сайта. История не перехватывается бесконечно: при достижении
   реального начала истории браузер остаётся свободен выйти с сайта.
   No tracking, storage or network. */
(function(){
  'use strict';
  const details=[...document.querySelectorAll('main details')];
  if(!details.length)return;
  details.forEach((node,index)=>{
    if(!node.id)node.id='kaskad-section-detail-'+(index+1);
  });
  let seeded=false;
  const skippedToggles=new Set();
  const opened=()=>details.filter(d=>d.open).map(d=>d.id);
  const url=hash=>location.pathname+location.search+(hash?'#'+hash:location.hash);
  const saveState=(detailId,scrollY)=>({
    ...history.state,
    kaskadNav:'detail',
    kaskadActiveDetail:detailId,
    kaskadOpenDetails:opened(),
    kaskadSavedScroll:Math.round(scrollY)
  });
  function seed(){
    if(seeded)return;
    seeded=true;
    try{
      // Keep a meaningful same-page step before the first expanded section.
      // First Back collapses it; next Back returns to the starting page.
      history.pushState({
        ...history.state,kaskadNav:'section',kaskadOpenDetails:opened().filter(id=>id!==openingId),
        kaskadSavedScroll:Math.round(window.scrollY)
      },'',url());
    }catch(e){seeded=false;}
  }
  let openingId=null;
  function changed(el){
    if(skippedToggles.delete(el.id))return;
    const beforeY=window.scrollY;
    if(el.open){
      openingId=el.id;
      seed();
      openingId=null;
      try{history.pushState(saveState(el.id,beforeY),'',url(el.id));}
      catch(e){}
    }else{
      if(history.state?.kaskadNav==='detail'&&history.state.kaskadActiveDetail===el.id){
        history.back();
      }else if(seeded){
        try{history.pushState(saveState(null,beforeY),'',url(''));}catch(e){}
      }
    }
  }
  details.forEach(el=>el.addEventListener('toggle',()=>changed(el)));
  window.addEventListener('popstate',event=>{
    const state=event.state;
    const wanted=new Set(state&&Array.isArray(state.kaskadOpenDetails)?state.kaskadOpenDetails:[]);
    details.forEach(el=>{
      const open=wanted.has(el.id);
      if(el.open!==open){skippedToggles.add(el.id);el.open=open;}
    });
    if(state?.kaskadNav==='section'||state?.kaskadNav==='detail'){
      const y=Number(state.kaskadSavedScroll);
      if(Number.isFinite(y))requestAnimationFrame(()=>window.scrollTo({top:Math.max(0,y),behavior:'instant'}));
    }else if(seeded&&!location.hash){
      requestAnimationFrame(()=>window.scrollTo({top:0,behavior:'instant'}));
    }
  });
})();
