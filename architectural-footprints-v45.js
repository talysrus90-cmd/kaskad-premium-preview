/* КАСКАД · three original, visibly different residential footprints.
   Geometry is schematic 3D architecture, not working drawings.
   We build only the selected type, preserve the site's material selectors,
   and never copy external companies' plans or photographs. */
export const DISTINCT_PLANS=new Set(['courtyardL','atriumU','crossGableT']);

export function createDistinctFootprints(THREE,root,{
  brick,foundation,trim,windowFrame,glass,door,roofSystem
}){
 const groups=new Map();
 const facadeFloor=.53,wallH=3.14,roofEave=3.78;
 const stone=new THREE.MeshStandardMaterial({color:'#6b6660',roughness:.89});
 const stepStone=new THREE.MeshStandardMaterial({color:'#968e81',roughness:.79});
 const dark=new THREE.MeshStandardMaterial({color:'#4a4e4b',roughness:.55,metalness:.14});
 const clear=new THREE.MeshStandardMaterial({color:'#a5c2c5',roughness:.25,metalness:.10});
 const box=(g,w,h,d,x,y,z,mat,cast=true)=>{
  const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);
  m.position.set(x,y,z);m.castShadow=cast;m.receiveShadow=true;g.add(m);return m;
 };
 const roofFace=(g,pts)=>{
  const geo=new THREE.BufferGeometry(),pos=[],uv=[];
  for(const [x,y,z] of pts){pos.push(x,y,z);uv.push(x*.25,z*.25+y*.08)}
  const ids=[];for(let i=1;i<pts.length-1;i++)ids.push(0,i,i+1);
  geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
  geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));
  geo.setIndex(ids);geo.computeVertexNormals();
  const m=new THREE.Mesh(geo,roofSystem.getMaterial());
  m.userData.distinctRoof=true;
  m.material.side=THREE.DoubleSide;
  m.castShadow=true;m.receiveShadow=true;g.add(m);
 };
 const plans={
  // Narrow full-depth west wing and a recessed east garden wing.
  courtyardL:{
   blocks:[[-2.73,0,7.34,9.00],[3.65,-2.28,5.40,4.44]],
   windows:[[ -5.2,4.64,0 ],[-3.65,4.64,0],[3.55,-.02,0],
      [-6.51,-2.0,-Math.PI/2],[-6.51,1.9,-Math.PI/2],
      [6.50,-2.30,Math.PI/2],[3.40,-4.65,Math.PI]],
   door:[-.55,4.66],roof:'gable',entrance:'offset'
  },
  // Courtyard open to the street: west, east wings and a transverse rear wing.
  atriumU:{
   blocks:[[-4.50,0,3.80,8.95],[4.50,0,3.80,8.95],[0,-3.02,12.8,2.92]],
   windows:[[-4.50,4.64,0],[4.50,4.64,0],
      [-6.54,-2,-Math.PI/2],[-6.54,1.8,-Math.PI/2],
      [6.54,-2,Math.PI/2],[6.54,1.8,Math.PI/2],
      [-4.50,-4.62,Math.PI],[4.50,-4.62,Math.PI]],
   door:[0,-1.41],roof:'hip',entrance:'court'
  },
  // Deep central gable joined to a broad, shallow cross-bar at the garden side.
  crossGableT:{
   blocks:[[0,0,5.45,8.95],[0,-2.50,12.8,4.0]],
   windows:[[-2.76,1.72,-Math.PI/2],[2.76,1.72,Math.PI/2],
      [-4.35,-.38,0],[4.35,-.38,0],
      [-4.50,-4.64,Math.PI],[4.50,-4.64,Math.PI]],
   door:[0,4.65],roof:'gable',entrance:'center'
  }
 };
 function windowsOn(g,x,z,angle=0,width=1.35){
  const w=new THREE.Group();w.position.set(x,2.0,z);w.rotation.y=angle;g.add(w);
  box(w,width+.22,1.52,.13,0,0,0,trim);
  box(w,width+.09,1.36,.15,0,0,.075,windowFrame);
  box(w,width-.10,1.21,.055,0,0,.165,glass,false);
  box(w,.055,1.29,.07,0,0,.20,windowFrame,false);
  box(w,width+.29,.11,.26,0,-.81,.18,stone);
  box(w,width+.29,.065,.13,0,.78,.15,trim);
  return w;
 }
 function entrance(g,x,z,direction=1){
  const e=new THREE.Group();e.position.set(x,0,z);g.add(e);
  const face=direction>0?1:-1;
  box(e,1.56,2.27,.15,0,1.69,face*.08,door);
  for(const dx of [-.87,.87])box(e,.11,2.44,.19,dx,1.70,face*.16,trim);
  box(e,1.83,.12,.23,0,2.90,face*.13,trim);
  box(e,3.50,.22,2.05,0,.45,face*1.00,stepStone);
  box(e,3.76,.15,.60,0,.23,face*2.0,stone);
  for(const dx of [-1.50,1.50]){
   box(e,.18,2.38,.18,dx,1.75,face*1.83,trim);
   box(e,.32,.12,.32,dx,.55,face*1.83,stone);
  }
  box(e,3.82,.20,2.24,0,3.09,face*1.05,dark);
  box(e,3.82,.085,2.28,0,3.23,face*1.05,trim);
 }
 function roofForSegment(g,segment,shape){
  const [cx,cz,width,depth]=segment;
  const x0=cx-width/2-.30,x1=cx+width/2+.30;
  const z0=cz-depth/2-.31,z1=cz+depth/2+.31;
  const y=roofEave;
  const ridgeY=y+Math.min(2.25,.73*Math.min(width,depth));
  if(shape==='flat'){
   roofFace(g,[[x0,y+.25,z0],[x1,y+.25,z0],[x1,y+.25,z1],[x0,y+.25,z1]]);
   for(const side of [-1,1]){
    box(g,.18,.32,depth+.62,cx+side*(width/2+.30),y+.36,cz,dark);
    box(g,width+.55,.32,.18,cx,y+.36,cz+side*(depth/2+.31),dark);
   }
   return;
  }
  if(shape==='gable'){
   if(depth>=width*.82){
    const rx=cx;
    roofFace(g,[[x0,y,z0],[rx,ridgeY,z0],[rx,ridgeY,z1],[x0,y,z1]]);
    roofFace(g,[[rx,ridgeY,z0],[x1,y,z0],[x1,y,z1],[rx,ridgeY,z1]]);
    for(const z of [cz-depth/2-.05,cz+depth/2+.05]){
     const [xa,xb]=[cx-width/2-.04,cx+width/2+.04];
     // Masonry gable: the roof never floats above a missing end wall.
     roofFace(g,[[xa,y,z],[xb,y,z],[rx,ridgeY-.22,z]]);
    }
   }else{
    roofFace(g,[[x0,y,z0],[x1,y,z0],[x1,ridgeY,cz],[x0,ridgeY,cz]]);
    roofFace(g,[[x0,ridgeY,cz],[x1,ridgeY,cz],[x1,y,z1],[x0,y,z1]]);
    for(const x of [cx-width/2-.05,cx+width/2+.05])
      roofFace(g,[[x,y,z0],[x,y,z1],[x,ridgeY-.20,cz]]);
   }
   return;
  }
  const low=y,upper=shape==='mansard'?Math.min(1.14,ridgeY-y)*.84:0;
  if(shape==='mansard'){
   const inset=.65;
   const aa=[[x0,y,z0],[x1,y,z0],[x1,y,z1],[x0,y,z1]];
   const bb=[[x0+inset,y+upper,z0+inset],[x1-inset,y+upper,z0+inset],
       [x1-inset,y+upper,z1-inset],[x0+inset,y+upper,z1-inset]];
   for(let i=0;i<4;i++){let j=(i+1)%4;roofFace(g,[aa[i],aa[j],bb[j],bb[i]])}
   // Upper slopes converge to a ridge, never a horizontal snow shelf.
   const h=ridgeY+.42;
   roofFace(g,[bb[0],bb[1],[cx,h,cz]]);
   roofFace(g,[bb[2],bb[3],[cx,h,cz]]);
   roofFace(g,[bb[3],bb[0],[cx,h,cz]]);
   roofFace(g,[bb[1],bb[2],[cx,h,cz]]);
   return;
  }
  // Hip roof, ridge aligned with the longest wing.
  if(depth>=width){
   const rz=Math.max(.25,depth*.21);
   roofFace(g,[[x0,low,z0],[x1,low,z0],[cx,ridgeY,cz-rz]]);
   roofFace(g,[[x1,low,z1],[x0,low,z1],[cx,ridgeY,cz+rz]]);
   roofFace(g,[[x0,low,z1],[x0,low,z0],[cx,ridgeY,cz-rz],[cx,ridgeY,cz+rz]]);
   roofFace(g,[[x1,low,z0],[x1,low,z1],[cx,ridgeY,cz+rz],[cx,ridgeY,cz-rz]]);
  }else{
   const rx=Math.max(.25,width*.22);
   roofFace(g,[[x0,low,z0],[x0,low,z1],[cx-rx,ridgeY,cz]]);
   roofFace(g,[[x1,low,z1],[x1,low,z0],[cx+rx,ridgeY,cz]]);
   roofFace(g,[[x1,low,z0],[x0,low,z0],[cx-rx,ridgeY,cz],[cx+rx,ridgeY,cz]]);
   roofFace(g,[[x0,low,z1],[x1,low,z1],[cx+rx,ridgeY,cz],[cx-rx,ridgeY,cz]]);
  }
 }
 function build(id){
  const plan=plans[id],g=new THREE.Group();
  g.name='КАСКАД · собственная объёмная архитектура '+id;
  root.add(g);groups.set(id,g);
  const walls=new THREE.Group();walls.name='Стены и основания';g.add(walls);
  for(const segment of plan.blocks){
   const [x,z,w,d]=segment;
   box(walls,w+.10,.38,d+.10,x,.34,z,foundation);
   box(walls,w,wallH,d,x,facadeFloor+wallH/2,z,brick);
   box(walls,w+.13,.16,d+.13,x,3.67,z,trim);
  }
  for(const [x,z,angle] of plan.windows)windowsOn(walls,x,z,angle);
  const [doorX,doorZ]=plan.door;
  entrance(walls,doorX,doorZ,plan.entrance==='court'?1:1);
  if(id==='atriumU'){
   // Central courtyard is paved only where the wings leave an opening.
   box(g,5.10,.075,5.60,0,.16,1.48,stepStone,false);
   for(const x of [-2.44,2.44])
    box(g,.27,.60,5.6,x,.29,1.5,stone,false);
  }else if(id==='courtyardL'){
   // Open garden terrace occupies the inset created by the second wing.
   box(g,4.25,.13,3.55,3.62,.26,2.47,stepStone,false);
   for(const x of [1.85,5.35])box(g,.17,2.90,.17,x,1.69,3.96,trim);
   box(g,4.20,.15,1.9,3.62,3.20,3.28,dark);
  }else if(id==='crossGableT'){
   for(const x of [-4.55,4.55]){
    box(g,.22,2.85,.22,x,1.98,-.40,trim);
    box(g,.34,.19,.34,x,.57,-.40,stone);
   }
   box(g,10.3,.16,1.72,0,3.36,-.50,dark);
  }
  const roofs=new Map();
  for(const shape of ['gable','hip','mansard','flat']){
   const group=new THREE.Group();group.name='Кровли '+shape;g.add(group);
   for(const part of plan.blocks)roofForSegment(group,part,shape);
   group.visible=false;roofs.set(shape,group);
  }
  g.userData.roofs=roofs;
  g.visible=false;
  return g;
 }
 let selected=null,activeRoof='hip';
 function setStyle(id){
  selected=DISTINCT_PLANS.has(id)?id:null;
  for(const [key,g] of groups)g.visible=key===selected;
  if(selected&&!groups.has(selected))build(selected).visible=true;
  if(selected)setRoof(activeRoof,roofSystem.getMaterial());
  return Boolean(selected);
 }
 function setPlinth(kind){
   const colors={
     graphite:'#55524c',stone:'#77746d',brick:'#6d5148',
     tile:'#6a6e6a',dagestan:'#9c8f7b',decorative:'#5b5b57',
     taupe:'#74675a',light:'#807b72',none:'#5b5752'
   };
   foundation.color.set(colors[kind]||colors.graphite);
   foundation.needsUpdate=true;
 }
 function setRoof(shape,material=roofSystem.getMaterial()){
  activeRoof=['gable','hip','mansard','flat'].includes(shape)?shape:'hip';
  if(!selected)return false;
  const g=groups.get(selected);
  for(const [key,roof] of g.userData.roofs){
   roof.visible=key===activeRoof;
   if(roof.visible)roof.traverse(obj=>{
    if(!obj.userData.distinctRoof)return;
    obj.material=material;
    obj.material.side=THREE.DoubleSide;
   });
  }
  return true;
 }
 return {isDistinct:id=>DISTINCT_PLANS.has(id),setStyle,setRoof,setPlinth,ids:[...DISTINCT_PLANS]};
}
