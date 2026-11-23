/* KASKAD: compact illustrated work stages on mobile. No accounts, API, analytics. */
(function(){
  'use strict';
  const section=document.querySelector('#how');
  const track=section&&section.querySelector('.steps');
  if(!track)return;
  const cards=Array.from(track.querySelectorAll(':scope > .step'));
  if(cards.length<2)return;
  const mobile=window.matchMedia('(max-width:600px)');
  const nav=document.createElement('div');
  nav.className='kaskad-process-nav';
  nav.setAttribute('role','group');
  nav.setAttribute('aria-label','Листайте этапы нашей работы');
  const prev=document.createElement('button');
  prev.type='button';
  prev.textContent='← Назад';
  prev.setAttribute('aria-label','Предыдущий этап работы');
  const count=document.createElement('span');
  count.className='process-count';
  count.setAttribute('aria-live','polite');
  const next=document.createElement('button');
  next.type='button';
  next.textContent='Вперёд →';
  next.setAttribute('aria-label','Следующий этап работы');
  nav.append(prev,count,next);
  track.after(nav);
  let current=-1;
  function nearest(){
    const offset=track.scrollLeft;
    // The final card cannot always align to the left on wider phone screens.
    // Detect the scroll boundary instead of incorrectly reporting step 5/6.
    if(offset>=track.scrollWidth-track.clientWidth-2)return cards.length-1;
    if(offset<=2)return 0;
    let found=0,best=Infinity;
    cards.forEach((el,i)=>{
      const distance=Math.abs(el.offsetLeft-cards[0].offsetLeft-offset);
      if(distance<best){best=distance;found=i;}
    });
    return found;
  }
  function sync(){
    if(!mobile.matches){
      track.removeAttribute('tabindex');
      track.removeAttribute('aria-label');
      return;
    }
    track.setAttribute('tabindex','0');
    track.setAttribute('aria-label','Шесть этапов работы. Листайте горизонтально или используйте кнопки ниже.');
    const index=nearest();
    if(index!==current) {
      current=index;
      count.textContent='Этап '+(index+1)+' из '+cards.length;
    }
    prev.disabled=index===0;
    next.disabled=index===cards.length-1;
  }
  function show(index){
    if(!mobile.matches)return;
    const i=Math.min(cards.length-1,Math.max(0,index));
    track.scrollTo({
      left:cards[i].offsetLeft-cards[0].offsetLeft,
      behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'
    });
    current=i;
    count.textContent='Этап '+(i+1)+' из '+cards.length;
    prev.disabled=i===0;
    next.disabled=i===cards.length-1;
  }
  prev.addEventListener('click',()=>show(nearest()-1));
  next.addEventListener('click',()=>show(nearest()+1));
  track.addEventListener('keydown',e=>{
    if(!mobile.matches)return;
    if(e.key==='ArrowRight'||e.key==='ArrowLeft'){
      e.preventDefault();
      show(nearest()+(e.key==='ArrowRight'?1:-1));
    }
  });
  let requested=false;
  track.addEventListener('scroll',()=>{
    if(requested)return;
    requested=true;
    requestAnimationFrame(()=>{requested=false;sync();});
  },{passive:true});
  if(typeof mobile.addEventListener==='function')mobile.addEventListener('change',sync);
  window.addEventListener('resize',sync,{passive:true});
  sync();
})();
