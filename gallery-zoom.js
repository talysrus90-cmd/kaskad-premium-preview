/* KASKAD v24 — point-anchored pinch zoom, edge-aware pan and swipe navigation.
   Gesture model: 1 finger navigates at 1x; at >1x it pans the visible image.
   Two fingers zoom at their own midpoint and may pan simultaneously. */
(() => {
  'use strict';
  const modal=document.getElementById('imageModal');
  const img=document.getElementById('bigImage');
  const stage=document.getElementById('photoZoomStage');
  if(!modal||!img||!stage)return;
  const pointers=new Map();
  const MAX=6;
  let zoom=1,x=0,y=0;
  let pinch=null,pan=null,swipe=null,wasPinching=false,lastTap=null;
  const values=()=>[...pointers.values()];
  const point=e=>({x:e.clientX,y:e.clientY});
  const distance=(a,b)=>Math.hypot(b.x-a.x,b.y-a.y);
  const midpoint=(a,b)=>({x:(a.x+b.x)/2,y:(a.y+b.y)/2});

  function geometry(){
    const r=stage.getBoundingClientRect();
    const nw=img.naturalWidth||r.width||1,nh=img.naturalHeight||r.height||1;
    // object-fit:contain means the visible photograph is usually NOT stage-sized.
    const base=Math.min(r.width/nw,r.height/nh);
    return {cx:r.left+r.width/2,cy:r.top+r.height/2,
      w:nw*base,h:nh*base,viewportW:r.width,viewportH:r.height};
  }
  function clampTranslation(){
    const g=geometry();
    const maxX=Math.max(0,(g.w*zoom-g.viewportW)/2);
    const maxY=Math.max(0,(g.h*zoom-g.viewportH)/2);
    x=Math.max(-maxX,Math.min(maxX,x));
    y=Math.max(-maxY,Math.min(maxY,y));
  }
  function render(){
    if(zoom<1.005){zoom=1;x=0;y=0;}
    clampTranslation();
    img.style.transform='translate3d('+x+'px,'+y+'px,0) scale('+zoom+')';
    img.style.transformOrigin='center center';
    img.style.cursor=zoom>1?'grab':'default';
    stage.dataset.zoomed=String(zoom>1.005);
    stage.dataset.zoomLevel=zoom.toFixed(3);
    stage.dataset.panX=x.toFixed(1);
    stage.dataset.panY=y.toFixed(1);
    // No onscreen zoom buttons: mobile touch and desktop mouse wheel/double-click.
    const label=document.getElementById('photoZoomLevel');
    if(label)label.textContent=Math.round(zoom*100)+'%';
  }
  function zoomAt(next,focal){
    const before=zoom;
    const newZoom=Math.max(1,Math.min(MAX,next));
    if(newZoom===1){zoom=1;x=0;y=0;render();return;}
    const g=geometry();
    const scale=newZoom/before;
    x=(focal.x-g.cx)-(focal.x-g.cx-x)*scale;
    y=(focal.y-g.cy)-(focal.y-g.cy-y)*scale;
    zoom=newZoom;
    render();
  }
  function reset(){
    pointers.clear();
    pinch=null;pan=null;swipe=null;wasPinching=false;lastTap=null;
    zoom=1;x=0;y=0;render();
  }
  function nextPhoto(direction){
    document.getElementById(direction>0?'nextImage':'prevImage')?.click();
  }
  function showPhotoSize(){
    if(img.naturalWidth&&img.naturalHeight){
      stage.setAttribute('aria-label','Фотография '+img.naturalWidth+' × '+img.naturalHeight+
        '. Свайп для листания, двумя пальцами увеличение и перемещение.');
    }
    render();
  }
  stage.addEventListener('pointerdown',e=>{
    if(e.pointerType==='mouse'&&e.button!==0)return;
    if(e.cancelable)e.preventDefault();
    pointers.set(e.pointerId,point(e));
    try{stage.setPointerCapture(e.pointerId)}catch{}
    if(pointers.size===1){
      pan={at:point(e),x,y};
      swipe={at:point(e),time:Date.now()};
    }else if(pointers.size===2){
      const [a,b]=values();
      pinch={distance:Math.max(1,distance(a,b)),center:midpoint(a,b),zoom,x,y};
      wasPinching=true;
      lastTap=null;
    }
  });
  stage.addEventListener('pointermove',e=>{
    if(!pointers.has(e.pointerId))return;
    if(e.cancelable)e.preventDefault();
    pointers.set(e.pointerId,point(e));
    if(pointers.size>=2){
      const [a,b]=values();
      if(!pinch){
        pinch={distance:Math.max(1,distance(a,b)),center:midpoint(a,b),zoom,x,y};
      }
      const c=midpoint(a,b);
      const newZoom=Math.max(1,Math.min(MAX,pinch.zoom*distance(a,b)/pinch.distance));
      const g=geometry(),scale=newZoom/pinch.zoom;
      // The world point under the initial fingers stays under their new midpoint.
      x=(c.x-g.cx)-(pinch.center.x-g.cx-pinch.x)*scale;
      y=(c.y-g.cy)-(pinch.center.y-g.cy-pinch.y)*scale;
      zoom=newZoom;
      render();
    }else if(zoom>1&&pan&&!wasPinching){
      x=pan.x+e.clientX-pan.at.x;
      y=pan.y+e.clientY-pan.at.y;
      render();
    }
  });
  function finish(e){
    if(!pointers.has(e.pointerId))return;
    const hadPinch=wasPinching;
    pointers.delete(e.pointerId);
    try{stage.releasePointerCapture(e.pointerId)}catch{}
    if(pointers.size===1){
      const p=values()[0];
      pan={at:p,x,y};
      pinch=null;
      swipe=null;
    }else if(pointers.size===0){
      if(!hadPinch&&swipe&&e.type!=='pointercancel'){
        const dx=e.clientX-swipe.at.x,dy=e.clientY-swipe.at.y;
        const elapsed=Date.now()-swipe.time;
        if(zoom===1&&Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.25&&elapsed<1000){
          lastTap=null;
          nextPhoto(dx<0?1:-1);
        }else if(e.pointerType==='touch'&&Math.abs(dx)<15&&Math.abs(dy)<15&&elapsed<380){
          const now=Date.now();
          if(lastTap&&now-lastTap.time<330&&Math.hypot(e.clientX-lastTap.x,e.clientY-lastTap.y)<36){
            zoomAt(zoom>1?1:2.5,point(e));
            lastTap=null;
          }else lastTap={time:now,x:e.clientX,y:e.clientY};
        }
      }
      pan=null;pinch=null;swipe=null;wasPinching=false;
    }
  }
  stage.addEventListener('pointerup',finish);
  stage.addEventListener('pointercancel',finish);
  stage.addEventListener('lostpointercapture',e=>{if(pointers.has(e.pointerId))finish(e)});
  stage.addEventListener('dblclick',e=>{e.preventDefault();zoomAt(zoom>1?1:2.5,point(e));});
  stage.addEventListener('wheel',e=>{
    if(!modal.classList.contains('open'))return;
    e.preventDefault();
    zoomAt(zoom*(e.deltaY<0?1.23:1/1.23),point(e));
  },{passive:false});
  img.addEventListener('load',()=>{showPhotoSize();stage.classList.remove('photo-changing')});
  // No zoom buttons in the viewer. Keep the ratio label optional for older embeds.
  new MutationObserver(()=>{reset();if(img.complete&&img.naturalWidth)showPhotoSize()})
    .observe(img,{attributes:true,attributeFilter:['src']});
  new MutationObserver(()=>{if(!modal.classList.contains('open'))reset()})
    .observe(modal,{attributes:true,attributeFilter:['class']});
  window.addEventListener('resize',render,{passive:true});
  render();
})();
