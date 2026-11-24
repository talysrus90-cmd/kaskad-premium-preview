/* КАСКАД v26 — самостоятельная модель востребованного малоэтажного дома.
 * Оригинальная иллюстративная геометрия без копирования чужих проектов.
 * Стеновая высота 3.25 м; мансардный конёк ~6.8 м над планировочным нулём.
 * Не является архитектурным или конструктивным проектом.
 */
import {METAL_PROFILES,makeStampedSurface} from './roof-relief-v25.js';
import {HOME_VARIANTS,createHouseVariations} from './house-variants-v27.js';
import {createEntranceVariants} from './entrance-v28.js';
import {createExteriorAddons} from './exterior-addons-v30.js';
import {createDistinctFootprints,DISTINCT_PLANS} from './architectural-footprints-v45.js';

export function createRussianHouse(THREE,scene,{brick,limestone,quartz,roofSystem,windowFrameMetal,glassMat,doorMat}){
 const root=new THREE.Group();root.name='КАСКАД · малоэтажный семейный дом';scene.add(root);
 const frameTrim=new THREE.MeshStandardMaterial({color:'#ddd9cd',roughness:.66,metalness:.02});
 const timber=new THREE.MeshStandardMaterial({color:'#816347',roughness:.79});
 const darkMetal=new THREE.MeshStandardMaterial({color:'#41494a',roughness:.47,metalness:.37});
 const skylightGlass=new THREE.MeshStandardMaterial({color:'#476676',roughness:.33,metalness:.13,envMapIntensity:.45});
 const windows=[],shells=[],roofCache=new Map();
 const box=(parent,w,h,depth,x,y,z,mat=limestone)=>{
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,depth),mat);
  mesh.position.set(x,y,z);mesh.receiveShadow=true;mesh.castShadow=true;parent.add(mesh);
  return mesh;
 };
 const beam=(parent,a,b,thick,mat=frameTrim)=>{
  const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b);
  const len=start.distanceTo(end),mid=start.clone().add(end).multiplyScalar(.5);
  const m=new THREE.Mesh(new THREE.BoxGeometry(thick,len,thick),mat);
  m.position.copy(mid);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),end.sub(start).normalize());
  m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;
 };
 const face=(parent,corners,mat,roof=false)=>{
  const points=[],index=[],uv=[];
  corners.forEach(p=>{points.push(...p);uv.push(p[0]*.22,p[2]*.22+p[1]*.09)});
  for(let i=1;i<corners.length-1;i++)index.push(0,i,i+1);
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.Float32BufferAttribute(points,3));
  geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(index);geo.computeVertexNormals();
  const mesh=new THREE.Mesh(geo,mat);
  mesh.material.side=THREE.DoubleSide;
  mesh.castShadow=true;mesh.receiveShadow=true;
  if(roof){mesh.userData.baseGeometry=geo;mesh.userData.corners=corners;mesh.userData.profile='none';shells.push(mesh)}
  parent.add(mesh);return mesh;
 };
 const main=new THREE.Group();main.name='Дом · первый этаж';root.add(main);
 const variants=createHouseVariations(THREE,root,{stone:limestone,trim:frameTrim,windowFrame:windowFrameMetal,glass:glassMat,wood:timber,dark:darkMetal});
 const addons=createExteriorAddons(THREE,root,{stone:limestone,brick,wood:timber,metal:darkMetal});
 const architecturalFootprints=createDistinctFootprints(THREE,root,{brick,foundation:new THREE.MeshStandardMaterial({color:'#55524c',roughness:.93}),trim:frameTrim,windowFrame:windowFrameMetal,glass:glassMat,door:doorMat,roofSystem});
 // Real front door and external opening reveals; porch only in front of entrance,
 // never over the first/attic floor windows.
 const foundationFinish=new THREE.MeshStandardMaterial({color:'#55524c',roughness:.93});
 box(main,13.28,.36,9.46,0,.27,0,foundationFinish);
 const wall=box(main,12.8,3.18,9.0,0,1.98,0,brick);
 box(main,13.03,.13,9.24,0,.53,0,foundationFinish);
 box(main,13.05,.16,9.26,0,3.62,0,frameTrim);
 const frontDoorStart=main.children.length;
 const frontDoor=box(main,1.58,2.29,.15,0,1.7,4.64,doorMat);
 box(main,1.74,.13,.25,0,2.87,4.72,frameTrim);
 for(const xx of [-.9,.9])box(main,.14,2.5,.18,xx,1.65,4.73,frameTrim);
 box(main,.1,.13,.16,.58,1.77,4.76,darkMetal);
 const entranceDoor=new THREE.Group();entranceDoor.name='Входная дверь · физический размер';
 for(const part of main.children.slice(frontDoorStart))entranceDoor.add(part);
 main.add(entranceDoor);
 // The original canopy is grouped for backwards compatibility; v28 uses
 // one selectable complete supported entrance at a time.
 const legacyEntryStart=main.children.length;
 // Projecting but structurally legible entrance porch: 3.02m top, not 4.9m.
 const canopy=box(main,3.8,.20,1.82,0,3.03,5.31,frameTrim);
 box(main,3.93,.06,1.94,0,3.17,5.31,darkMetal);
 for(const xx of [-1.70,1.70]){
  box(main,.17,2.46,.17,xx,1.70,6.12,frameTrim);
  box(main,.32,.15,.32,xx,.53,6.12,limestone);
  box(main,.30,.15,.30,xx,2.99,6.12,limestone);
 }
 box(main,3.94,.13,1.93,0,.46,5.35,limestone);
 box(main,4.05,.12,.77,0,.31,6.45,frameTrim);
 box(main,4.15,.10,.78,0,.19,7.17,limestone);
 const legacyEntry=new THREE.Group();legacyEntry.name='Старый вход для совместимости';
 for(const part of main.children.slice(legacyEntryStart))legacyEntry.add(part);
 legacyEntry.visible=false;main.add(legacyEntry);
 const entryVariants=createEntranceVariants(THREE,main,{stone:limestone,trim:frameTrim,wood:timber,metal:darkMetal});
 entryVariants.setStyle('simple');
 // Lower-floor fenestration, no windows hidden under projecting beams.
 function window(x,y,z,rotation=0,w=1.48,h=1.52,owner=main){
  const group=new THREE.Group();group.position.set(x,y,z);group.rotation.y=rotation;owner.add(group);
  box(group,w+.28,h+.30,.12,0,0,0,frameTrim);
  box(group,w+.08,h+.10,.13,0,0,.08,windowFrameMetal);
  box(group,w-.10,h-.16,.035,0,0,.16,glassMat);
  box(group,.055,h-.12,.075,0,0,.205,windowFrameMetal);
  box(group,w-.10,.055,.075,0,0,.205,windowFrameMetal);
  box(group,w+.36,.13,.35,0,-h/2-.14,.15,quartz);
  windows.push(group);return group;
 }
 for(const x of [-4.8,-2.95,2.95,4.8]){
   window(x,1.97,4.63);
   window(x,1.97,-4.63,Math.PI);
 }
 for(const z of [-2.65,0,2.65]){
  window(6.53,1.97,z,Math.PI/2);
  window(-6.53,1.97,z,-Math.PI/2);
 }
 // Four roof families built independently; no one-slope illusion.
 const edgeX=7.13,edgeZ=5.19,eave=3.83;
 const roofTypes=['gable','hip','mansard','flat'];
 const attics=new Map();
 const shapes=new Map();
 const makeRoof=shape=>{
  if(shapes.has(shape))return shapes.get(shape);
  const g=new THREE.Group();g.name='Кровля · '+shape;root.add(g);shapes.set(shape,g);
  const addRoof=v=>face(g,v,roofSystem.getMaterial(),true);
  if(shape==='gable'){
   const ridge=6.55;
   for(const side of [-1,1]){
    addRoof([[side*edgeX,eave,-edgeZ],[0,ridge,-edgeZ],[0,ridge,edgeZ],[side*edgeX,eave,edgeZ]]);
    for(const z of [-edgeZ,edgeZ])beam(g,[side*edgeX,eave,z],[0,ridge,z],.16);
   }
   for(const z of [-4.52,4.52]){
    face(g,[[-6.37,3.68,z],[6.37,3.68,z],[0,6.34,z]],brick);
   }
   beam(g,[0,6.56,-edgeZ],[0,6.56,edgeZ],.13,darkMetal);
   // Front gable: two true vertical attic windows. Only visible for the
   // dedicated gable-attic home, never duplicated on ordinary cottages.
   const gableAtticWindows=new THREE.Group();gableAtticWindows.name='Фронтонные окна мансарды';
   g.add(gableAtticWindows);attics.set('gable',gableAtticWindows);
   for(const xx of [-1.45,1.45]){
     box(gableAtticWindows,1.00,1.16,.16,xx,4.92,4.70,frameTrim);
     box(gableAtticWindows,.83,.95,.055,xx,4.93,4.80,darkMetal);
     box(gableAtticWindows,.72,.85,.032,xx,4.93,4.84,skylightGlass);
     box(gableAtticWindows,.06,.96,.058,xx,4.93,4.89,frameTrim);
     box(gableAtticWindows,1.10,.12,.33,xx,4.29,4.89,limestone);
   }
  }else if(shape==='hip'){
   const ridge=6.02,cut=2.14;
   addRoof([[-edgeX,eave,-edgeZ],[edgeX,eave,-edgeZ],[0,ridge,-cut]]);
   addRoof([[edgeX,eave,edgeZ],[-edgeX,eave,edgeZ],[0,ridge,cut]]);
   addRoof([[-edgeX,eave,edgeZ],[-edgeX,eave,-edgeZ],[0,ridge,-cut],[0,ridge,cut]]);
   addRoof([[edgeX,eave,-edgeZ],[edgeX,eave,edgeZ],[0,ridge,cut],[0,ridge,-cut]]);
   beam(g,[0,ridge,-cut],[0,ridge,cut],.14,darkMetal);
   for(const s of [-1,1])for(const z of [-edgeZ,edgeZ])
    beam(g,[s*edgeX,eave,z],[0,ridge,z>0?cut:-cut],.13,darkMetal);
  }else if(shape==='mansard'){
   // A first floor plus inhabited attic: 3.2m downstairs and ~2.6m
   // conceptual clearance near the centre of the roof (not full across).
   const a=[[-edgeX,eave,-edgeZ],[edgeX,eave,-edgeZ],[edgeX,eave,edgeZ],[-edgeX,eave,edgeZ]];
   const b=[[-5.28,5.53,-4.21],[5.28,5.53,-4.21],[5.28,5.53,4.21],[-5.28,5.53,4.21]];
   const c=[[-3.45,6.71,-2.77],[3.45,6.71,-2.77],[3.45,6.71,2.77],[-3.45,6.71,2.77]];
   for(let i=0;i<4;i++){
    const j=(i+1)%4;
    addRoof([a[i],a[j],b[j],b[i]]);
    addRoof([b[i],b[j],c[j],c[i]]);
   }
   // Four pitched upper faces converge on a short central ridge instead
   // of trapping snow on the previous horizontal rectangular centre.
   const ridgeY=7.58,ridgeZ=1.30;
   addRoof([c[0],c[1],[0,ridgeY,-ridgeZ]]);
   addRoof([c[2],c[3],[0,ridgeY,ridgeZ]]);
   addRoof([c[3],c[0],[0,ridgeY,-ridgeZ],[0,ridgeY,ridgeZ]]);
   addRoof([c[1],c[2],[0,ridgeY,ridgeZ],[0,ridgeY,-ridgeZ]]);
   // Two VERTICAL dormers face the formal entrance (+Z), replacing
   // side-facing skylights. Dormers have real cheeks, lintels and small
   // gable roofs; their walls embed into the front mansard roof pitch.
   const dormers=new THREE.Group();dormers.name='Мансардные окна на парадном фасаде';g.add(dormers);
   attics.set('mansard',dormers);
   for(const xx of [-2.05,2.05]){
    const front=5.02,rear=4.08;
    box(dormers,1.36,1.47,.18,xx,4.82,front,frameTrim);
    box(dormers,.92,1.04,.055,xx,4.92,front+.115,darkMetal);
    box(dormers,.79,.87,.036,xx,4.92,front+.151,skylightGlass);
    box(dormers,.07,1.03,.07,xx,4.92,front+.193,frameTrim);
    box(dormers,1.11,.085,.32,xx,4.23,front+.10,limestone);
    for(const side of [-1,1]){
     const x=xx+side*.64;
     box(dormers,.13,1.41,front-rear+.05,x,4.88,(front+rear)/2,frameTrim);
     // Front-facing dormer roof: two distinct sloping planes.
     face(dormers,[[xx,6.14,rear],[xx+side*.84,5.57,rear],
       [xx+side*.84,5.57,front+.16],[xx,6.14,front+.16]],
       roofSystem.getMaterial());
    }
    // Front triangular tympanum connects the walls to the pitched roof.
    face(dormers,[[xx-.66,5.55,front+.10],[xx+.66,5.55,front+.10],
      [xx,6.03,front+.10]],frameTrim);
    beam(dormers,[xx,6.15,rear],[xx,6.15,front+.17],.12,darkMetal);
   }
  }else{
   addRoof([[-edgeX,3.88,-edgeZ],[edgeX,3.88,-edgeZ],[edgeX,3.88,edgeZ],[-edgeX,3.88,edgeZ]]);
   for(const side of [-1,1])box(g,.24,.37,edgeZ*2+.2,side*edgeX,4.03,0,darkMetal);
   for(const z of [-edgeZ,edgeZ])box(g,edgeX*2+.3,.37,.24,0,4.03,z,darkMetal);
  }
  if(shape!=='flat'){
   // Close to eaves, powder-coated to roof colour.
   const guardMetal=new THREE.MeshStandardMaterial({color:'#424d52',metalness:.50,roughness:.52});
   const gutterMetal=new THREE.MeshStandardMaterial({color:'#434c50',metalness:.40,roughness:.58});
   const slopeX=shape==='mansard'?6.46:6.38;
   const slopeY=shape==='mansard'?4.64:shape==='gable'?4.13:4.02;
   for(const side of [-1,1]){
    for(const rise of [0,.10]){
     box(g,.060,.058,edgeZ*2-.90,side*slopeX,slopeY+rise,0,guardMetal);
    }
    for(const z of [-3.4,0,3.4])box(g,.08,.21,.11,side*slopeX,slopeY-.055,z,guardMetal);
    box(g,.18,.12,edgeZ*2+.03,side*(edgeX+.06),3.75,0,gutterMetal);
    box(g,.11,3.3,.11,side*(edgeX+.06),1.95,side===1?edgeZ-.36:-edgeZ+.36,gutterMetal);
   }
   for(const end of [-1,1])box(g,edgeX*2+.1,.12,.18,0,3.75,end*(edgeZ+.06),gutterMetal);
   g.userData.guardMetal=guardMetal;g.userData.gutterMetal=gutterMetal;
  }
  // Solid ceiling and continuity ring across every exterior wall.
  // Roof surfaces used to float 10-15cm above the cornice in near viewpoints.
  box(g,12.88,.17,9.10,0,3.74,0,frameTrim,false);
  for(const side of [-1,1]){
   box(g,.20,.25,9.12,side*6.38,3.72,0,brick,false);
   box(g,12.83,.25,.20,0,3.72,side*4.48,brick,false);
  }
  // Completely close and finish soffits, eave ends and underlying walls.
  for(const side of [-1,1]){
    face(g,[[side*6.41,3.72,-edgeZ],[side*edgeX,3.72,-edgeZ],
      [side*edgeX,3.72,edgeZ],[side*6.41,3.72,edgeZ]],quartz);
    box(g,.17,.18,edgeZ*2,side*edgeX,3.77,0,darkMetal);
  }
  for(const side of [-1,1]){
    face(g,[[-edgeX,3.72,side*4.52],[edgeX,3.72,side*4.52],
      [edgeX,3.72,side*edgeZ],[-edgeX,3.72,side*edgeZ]],quartz);
    box(g,edgeX*2,.16,.16,0,3.77,side*edgeZ,frameTrim);
  }
  return g;
 };
 let activeShape=null,roofType=null,currentStyle='family';
 function setRoof(shape,kind){
  const safe=roofTypes.includes(shape)?shape:'hip';
  if(DISTINCT_PLANS.has(currentStyle)){
   for(const oldRoof of shapes.values())oldRoof.visible=false;
   architecturalFootprints.setRoof(safe,roofSystem.getMaterial());
   activeShape=safe;roofType=kind;return;
  }
  for(const [key,g] of shapes)g.visible=key===safe;
  const newRoof=makeRoof(safe);newRoof.visible=true;
  if(attics.has('gable'))attics.get('gable').visible=currentStyle==='gableAttic';
  // In mansard style roof windows are meaningful; non-mansard roofs
  // show only complete unbroken roofs without orphaned attic windows.
  activeShape=safe;
  const profile=METAL_PROFILES[kind]&&safe!=='flat'?kind:'flat';
  const mat=roofSystem.getMaterial();
  if(mat?.color&&newRoof.userData.guardMetal){
    newRoof.userData.guardMetal.color.copy(mat.color);
    newRoof.userData.gutterMetal.color.copy(mat.color).multiplyScalar(.74);
  }
  for(const m of newRoof.children){
   if(!m.userData.corners)continue;
   m.material=mat;
   if(m.userData.profile===profile)continue;
   if(m.userData.dynamic){m.userData.dynamic.dispose();m.userData.dynamic=null}
   m.geometry=profile==='flat'?m.userData.baseGeometry:
     makeStampedSurface(THREE,m.userData.corners,kind);
   if(profile!=='flat')m.userData.dynamic=m.geometry;
   m.userData.profile=profile;
  }
  roofType=kind;
 }
 function setEntrance(style){legacyEntry.visible=false;entryVariants.setStyle(style);architecturalFootprints.setEntrance(style)}
 function setStyle(style){
  currentStyle=style;
  root.visible=HOME_VARIANTS.some(item=>item.id===style&&
    (item.group!=='Двухэтажные'||DISTINCT_PLANS.has(style)));
  const independentlyDesigned=architecturalFootprints.setStyle(style);
  main.visible=!independentlyDesigned;
  addons.root.visible=!independentlyDesigned;
  variants.setStyle(independentlyDesigned?'family':style);
  if(independentlyDesigned){
   for(const oldRoof of shapes.values())oldRoof.visible=false;
  }
  if(attics.has('gable'))attics.get('gable').visible=style==='gableAttic';
 }
 function setDimensions(width,length){
  const w=Math.max(5,Math.min(14,Number(width)||10));
  const l=Math.max(8,Math.min(18,Number(length)||10));
  const sx=w/12.8,sz=l/9;
  root.scale.set(sx,1,sz);
  // Keep the entry facade at the same physical line of the plot.
  // The stone path and porch then continue to meet at the public approach.
  root.position.z=4.63*(1-sz);
  // Doors are standard-sized objects; reducing the house to 5 m does not
  // shrink a doorway to a few centimetres.
  entranceDoor.scale.x=1/sx;
  for(const group of entryVariants.styles.values()){
   group.scale.x=1/sx;group.scale.z=1/sz;
   group.position.z=4.63*(sz-1)/sz;
  }
  const frontSlots=w<8.5?2:4;
  for(const group of windows){
   const x=group.userData.baseX??group.position.x;
   const z=group.userData.baseZ??group.position.z;
   group.userData.baseX=x;group.userData.baseZ=z;
   const side=Math.abs(x)>6.2;
   group.scale.x=side?1/sz:1/sx;
   group.scale.z=side?1/sx:1/sz;
   if(side){
    group.position.x=Math.sign(x)*Math.max(.2,(w/2-.11))/sx;
    const desired=z===0?0:Math.sign(z)*Math.max(1.4,l/2-1.35);
    group.position.z=desired/sz;
   }else{
    const outer=Math.abs(x)>4.0;
    group.visible=frontSlots===4||outer;
    const desired=Math.sign(x)*(outer?Math.max(1.25,w/2-1.04):Math.max(.86,w/2-2.87));
    group.position.x=desired/sx;
   }
  }
  addons.setDimensions(w,l);
  architecturalFootprints.setDimensions(w,l);
  root.userData.footprint={width:w,length:l};
 }
 function setSize(size,aspect=1.35,inhabitedAttic=false){
  const floors=inhabitedAttic?1.6:1;
  const footprint=Math.max(65,(Number(size)||150)/floors); // area indicative, not engineering GFA
  const w=Math.sqrt(footprint*aspect),depth=Math.sqrt(footprint/aspect);
  root.scale.set(w/12.8,1,depth/9);
  root.userData.footprint={width:w,depth,floors};
 }
 const setPlinth=(kind)=>{addons.setPlinth(kind);architecturalFootprints.setPlinth(kind)};
 return {root,setStyle,setSize,setDimensions,setRoof,setEntrance,
  setPlinth,setTerrace:addons.setTerrace,isDistinctStyle:architecturalFootprints.isDistinct,
  getShape:()=>activeShape,getRoof:()=>roofType};
}
