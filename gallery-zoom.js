/* Галерея КАСКАД: pinch zoom, panning, double-tap, mouse wheel. */
(() => {
  'use strict';
  const modal=document.getElementById('imageModal');
  const img=document.getElementById('bigImage');
  const stage=document.getElementById('photoZoomStage');
  const zoomLabel=document.getElementById('photoZoomLevel');
  if(!modal || !img || !stage) return;
  const pointers=new Map();
  let zoom=1,x=0,y=0;
  let pinchDistance=0,pinchStartZoom=1,pinchStartX=0,pinchStartY=0;
  let panStart=null,wasPinching=false,lastTap=0,swipeStart=null;
  const MIN=1,MAX=5;
  const constrain=()=>{
    const rect=stage.getBoundingClientRect();
    const maxX=rect.width*(zoom-1)/2, maxY=rect.height*(zoom-1)/2;
    x=Math.min(maxX,Math.max(-maxX,x));
    y=Math.min(maxY,Math.max(-maxY,y));
  };
  const redraw=()=>{
    constrain();
    img.style.transform='translate3d('+x+'px,'+y+'px,0) scale('+zoom+')';
    img.style.cursor=zoom>1?'grab':'zoom-in';
    if(zoomLabel) zoomLabel.textContent=Math.round(zoom*100)+'%';
    stage.dataset.zoomed=String(zoom>1.01);
  };
  const setZoom=(next)=>{
    zoom=Math.max(MIN,Math.min(MAX,next));
    if(zoom<1.01){zoom=1;x=0;y=0}
    redraw();
  };
  const reset=()=>{pointers.clear();pinchDistance=0;panStart=null;wasPinching=false;zoom=1;x=0;y=0;redraw()};
  const coords=(e)=>({x:e.clientX,y:e.clientY});
  const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
  const values=()=>[...pointers.values()];
  stage.addEventListener('pointerdown',e=>{
    if(e.pointerType==='mouse' && e.button!==0)return;
    if(e.cancelable)e.preventDefault();
    pointers.set(e.pointerId,coords(e));
    try{stage.setPointerCapture(e.pointerId)}catch{}
    if(pointers.size===1){
      panStart={clientX:e.clientX,clientY:e.clientY,x,y};
      swipeStart={x:e.clientX,y:e.clientY,time:Date.now()};
      wasPinching=false;
    }else if(pointers.size===2){
      const [a,b]=values();
      pinchDistance=Math.max(1,dist(a,b));
      pinchStartZoom=zoom;
      pinchStartX=x;pinchStartY=y;
      wasPinching=true;
    }
  });
  stage.addEventListener('pointermove',e=>{
    if(!pointers.has(e.pointerId))return;
    if(e.cancelable)e.preventDefault();
    pointers.set(e.pointerId,coords(e));
    if(pointers.size>=2){
      const [a,b]=values();
      if(!pinchDistance){
        pinchDistance=Math.max(1,dist(a,b));pinchStartZoom=zoom;
      }
      zoom=Math.max(MIN,Math.min(MAX,pinchStartZoom*dist(a,b)/pinchDistance));
      x=pinchStartX;y=pinchStartY;
      if(zoom<1.01){zoom=1;x=0;y=0}
      redraw();
    }else if(zoom>1 && panStart){
      x=panStart.x+(e.clientX-panStart.clientX);
      y=panStart.y+(e.clientY-panStart.clientY);
      redraw();
    }
  });
  const finish=e=>{
    if(!pointers.has(e.pointerId))return;
    const hadMultiple=wasPinching;
    pointers.delete(e.pointerId);
    try{stage.releasePointerCapture(e.pointerId)}catch{}
    if(pointers.size===1){
      const last=values()[0];
      panStart={clientX:last.x,clientY:last.y,x,y};
      pinchDistance=0;
    }else if(pointers.size===0){
      pinchDistance=0;
      panStart=null;
      if(!hadMultiple&&zoom===1&&swipeStart&&e.type!=='pointercancel'){
        const dx=e.clientX-swipeStart.x;
        const dy=e.clientY-swipeStart.y;
        const elapsed=Date.now()-swipeStart.time;
        if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.3&&elapsed<900){
          document.getElementById(dx<0?'nextImage':'prevImage')?.click();
          lastTap=0;
        }else if(e.pointerType==='touch'&&Math.abs(dx)<18&&Math.abs(dy)<18&&elapsed<350){
          const now=Date.now();
          if(now-lastTap<340){setZoom(zoom>1?1:2.25);lastTap=0}
          else lastTap=now;
        }
      }
      wasPinching=false;
      swipeStart=null;
    }
  };
  stage.addEventListener('pointerup',finish);
  stage.addEventListener('pointercancel',finish);
  stage.addEventListener('lostpointercapture',e=>{if(pointers.has(e.pointerId))finish(e)});
  stage.addEventListener('dblclick',e=>{
    e.preventDefault();
    setZoom(zoom>1?1:2.25);
  });
  stage.addEventListener('wheel',e=>{
    if(!modal.classList.contains('open'))return;
    e.preventDefault();
    setZoom(zoom*(e.deltaY<0?1.22:1/1.22));
  },{passive:false});
  // Make the picture stage match the real photo aspect ratio.
  // A 3:2 villa no longer sits in a tall, empty dark frame on portrait screens.
  const fitPhotoToViewport=()=>{
    const naturalW=img.naturalWidth,naturalH=img.naturalHeight;
    if(!naturalW||!naturalH)return;
    const ratio=naturalW/naturalH;
    const availableHeight=Math.max(240,window.innerHeight-(window.innerWidth<560?248:270));
    stage.style.aspectRatio=naturalW+' / '+naturalH;
    stage.style.maxWidth=Math.floor(availableHeight*ratio)+'px';
    stage.style.maxHeight=Math.floor(availableHeight)+'px';
    stage.setAttribute('aria-label','Просмотр фотографии '+naturalW+' на '+naturalH+' пикселей. Увеличение двумя пальцами.');
    redraw();
  };
  img.addEventListener('load',fitPhotoToViewport);
  document.getElementById('zoomIn')?.addEventListener('click',()=>setZoom(zoom*1.5));
  document.getElementById('zoomOut')?.addEventListener('click',()=>setZoom(zoom/1.5));
  document.getElementById('zoomReset')?.addEventListener('click',reset);
  new MutationObserver(()=>{reset();if(img.complete&&img.naturalWidth)fitPhotoToViewport()}).observe(img,{attributes:true,attributeFilter:['src']});
  new MutationObserver(()=>{if(!modal.classList.contains('open')) reset()}).observe(modal,{attributes:true,attributeFilter:['class']});
  window.addEventListener('resize',()=>{fitPhotoToViewport();redraw()},{passive:true});
  redraw();
})();