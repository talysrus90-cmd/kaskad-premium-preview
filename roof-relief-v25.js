/* KASKAD v25 — original parametric stamped metal roof geometry.
 * Units are approximate metres, and these are visual analogues, NOT exact
 * branded construction profiles or engineering working drawings.
 */
export const METAL_PROFILES={
 metalGraphite:{pitch:.78,amplitude:.035,step:.35,stepHeight:.012,style:'classic'},
 metalBurgundy:{pitch:.78,amplitude:.035,step:.35,stepHeight:.012,style:'classic'},
 metal3d:{pitch:.91,amplitude:.067,step:.4,stepHeight:.023,style:'high'},
 metalModular:{pitch:.80,amplitude:.044,step:.35,stepHeight:.018,style:'symmetric'},
 metalTramontana:{pitch:.86,amplitude:.062,step:.40,stepHeight:.026,style:'sculpted'},
 composite:{pitch:.61,amplitude:.057,step:.35,stepHeight:.023,style:'classic'},
 profiled:{pitch:.58,amplitude:.075,step:.99,stepHeight:0,style:'symmetric'}
};
const clamp01=v=>Math.max(0,Math.min(1,v));
const fract=v=>v-Math.floor(v);
export function roofRelief(kind,along,down){
 const p=METAL_PROFILES[kind];
 if(!p)return 0;
 const phase=2*Math.PI*along/p.pitch;
 const a=Math.cos(phase);
 let wave;
 if(p.style==='symmetric')wave=Math.pow(Math.abs(a),4)*p.amplitude;
 else if(p.style==='high')wave=Math.pow(Math.max(0,a),2.5)*p.amplitude;
 else if(p.style==='sculpted')wave=(.65*Math.pow(Math.max(0,a),3)+.35*Math.pow(Math.max(0,Math.cos(2*phase+.3)),3))*p.amplitude;
 else wave=Math.pow(Math.max(0,a),1.35)*p.amplitude;
 // Stamped transverse tile steps, rounded over a narrow strip to avoid
 // an infinitely sharp discontinuity that flickers in rasterised scenes.
 const tile=fract(down/p.step);
 const step=p.stepHeight*Math.pow(Math.max(0,Math.cos(2*Math.PI*tile)),6);
 return wave+step;
}
export function makeStampedSurface(THREE,corners,kind){
 const isTriangle=corners.length===3;
 const n=typeof window!=='undefined'&&window.matchMedia('(min-width:850px)').matches?80:56;
 const x=[...corners.map(p=>p[0])],z=[...corners.map(p=>p[2])];
 const xExtent=Math.max(...x)-Math.min(...x),zExtent=Math.max(...z)-Math.min(...z);
 // Corrugations travel along the longer horizontal eave, and stamp lines
 // cross the slope; this applies to hip triangles and mansard quadrilaterals.
 const alongZ=zExtent>=xExtent;
 const pos=[],uv=[],ind=[];
 const interp=(u,v)=>{
  if(isTriangle){
   const a=corners[0],b=corners[1],c=corners[2],w=1-u-v;
   return [a[0]*w+b[0]*u+c[0]*v,
     a[1]*w+b[1]*u+c[1]*v,
     a[2]*w+b[2]*u+c[2]*v];
  }
  const [a,b,c,d]=corners;
  return [a[0]*(1-u)*(1-v)+b[0]*u*(1-v)+c[0]*u*v+d[0]*(1-u)*v,
   a[1]*(1-u)*(1-v)+b[1]*u*(1-v)+c[1]*u*v+d[1]*(1-u)*v,
   a[2]*(1-u)*(1-v)+b[2]*u*(1-v)+c[2]*u*v+d[2]*(1-u)*v];
 };
 const vertex=(u,v)=>{
  const point=interp(u,v);
  const edge=isTriangle?Math.min(u,v,1-u-v):Math.min(u,v,1-u,1-v);
  const blend=clamp01(edge*80); // sealed roof seams near hips, valleys and fascia
  const along=alongZ?point[2]:point[0];
  const down=alongZ?point[0]:point[2];
  point[1]+=roofRelief(kind,along,down)*blend;
  pos.push(...point);
  uv.push(point[0]*.26+point[2]*.13,point[2]*.24+point[1]*.11);
 };
 if(isTriangle){
  const index=(i,j)=>i*(n+1)-i*(i-1)/2+j;
  for(let i=0;i<=n;i++)for(let j=0;j<=n-i;j++)vertex(i/n,j/n);
  for(let i=0;i<n;i++)for(let j=0;j<n-i;j++){
   const a=index(i,j),b=index(i+1,j),c=index(i,j+1);
   ind.push(a,b,c);
   if(j<n-i-1)ind.push(b,index(i+1,j+1),c);
  }
 }else{
  for(let j=0;j<=n;j++)for(let i=0;i<=n;i++)vertex(i/n,j/n);
  for(let j=0;j<n;j++)for(let i=0;i<n;i++){
   const a=j*(n+1)+i,b=a+1,c=a+n+1;
   ind.push(a,b,c,b,c+1,c);
  }
 }
 const geom=new THREE.BufferGeometry();
 geom.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
 geom.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));
 geom.setIndex(ind);
 geom.computeVertexNormals();
 return geom;
}
