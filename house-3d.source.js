/* КАСКАД – independent lightweight demo scene. Bundled Three.js, never loaded on the homepage. */
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js';
import {createFenceSystem} from './fence-market-v16.js';
import {createRoofSystem} from './roof-market-v16.js';
import {createRoofForms} from './roof-forms-v20.js';
import {addNaturalFoliage} from './foliage-v16.js';
import {createArchitectureStyles} from './architecture-styles-v19.js';
import {createRussianHouse} from './russian-home-v26.js';
import {createFrontYard} from './front-yard-v27.js';
import {HOME_VARIANTS} from './house-variants-v27.js';
import {createFacadeMaterials} from './facade-presets-v28.js';
import {createEntranceVariants} from './entrance-v28.js';
import {createExteriorAddons} from './exterior-addons-v30.js';
import {createBlindArea} from './blind-area-v31.js';
import {createVeranda} from './veranda-v31.js';
import {createTwoStoreyStyles} from './two-storey-v31.js';

const container=document.getElementById('sceneContainer');
const fallback=document.getElementById('modelFallback');
const loading=document.getElementById('loading3d');
const hourInput=document.getElementById('hourInput');
const hourLabel=document.getElementById('hourLabel');
const windowsToggle=document.getElementById('windowsToggle');
const facadeSelect=document.getElementById('facadeSelect');
const roofSelect=document.getElementById('roofSelect');
const fenceSelect=document.getElementById('fenceSelect');
const roofColorSelect=document.getElementById('roofColorSelect');
const fenceColorSelect=document.getElementById('fenceColorSelect');
const houseStyleSelect=document.getElementById('houseStyleSelect');
const roofShapeSelect=document.getElementById('roofShapeSelect');
const houseSizeSelect=document.getElementById('houseSizeSelect');
const houseWidthInput=document.getElementById('houseWidthInput');
const houseLengthInput=document.getElementById('houseLengthInput');
const houseFloorsSelect=document.getElementById('houseFloorsSelect');
const frameColorSelect=document.getElementById('frameColorSelect');
const doorColorSelect=document.getElementById('doorColorSelect');
const glassTintSelect=document.getElementById('glassTintSelect');
const landscapeSelect=document.getElementById('landscapeSelect');
const poolToggle=document.getElementById('poolToggle');
const entranceStyleSelect=document.getElementById('entranceStyleSelect');
const plinthSelect=document.getElementById('plinthSelect');
const terraceToggle=document.getElementById('terraceToggle');
const yardStyleSelect=document.getElementById('yardStyleSelect');
const parkingToggle=document.getElementById('parkingToggle');
const gazeboToggle=document.getElementById('gazeboToggle');
const verandaSelect=document.getElementById('verandaSelect');
const blindAreaType=document.getElementById('blindAreaType');
const blindAreaColor=document.getElementById('blindAreaColor');
const blindAreaWidth=document.getElementById('blindAreaWidth');
const blindAreaContour=document.getElementById('blindAreaContour');
const highDetailButton=document.getElementById('highDetailButton');
const qualitySelect=document.getElementById('qualitySelect');
const autoButton=document.getElementById('autoRotate');
const status=document.getElementById('modelFPS');
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const clamp=(value,lo,hi)=>Math.max(lo,Math.min(hi,value));
const brickImage=()=>{
  const c=document.createElement('canvas');
  c.width=512;c.height=512;
  const g=c.getContext('2d',{alpha:false});
  g.fillStyle='#e9d9cd';g.fillRect(0,0,512,512);
  const rows=15, height=512/rows,width=88;
  for(let r=0;r<rows;r++){
    for(let col=-1;col<7;col++){
      const offset=r%2?width/2:0, x=col*width-offset;
      const noise=(r*37+col*59+1000)%8;
      const shades=['#b46f5e','#b97967','#ad6e5e','#bd7c6a','#b67561','#9f6255','#bf8270','#ac7163'];
      g.fillStyle=shades[noise];
      g.fillRect(x+1,r*height+1,width-2,height-2);
      g.fillStyle='rgba(255,233,212,.10)';
      g.fillRect(x+3,r*height+2,width-7,2);
      g.fillStyle='rgba(55,31,25,.10)';
      g.fillRect(x+2,r*height+height-5,width-4,2);
    }
  }
  const tex=new THREE.CanvasTexture(c);
  tex.colorSpace=THREE.SRGBColorSpace;
  tex.wrapS=tex.wrapT=THREE.RepeatWrapping;
  tex.repeat.set(3.25,2.15);
  tex.anisotropy=4;
  return tex;
};
// PBR-friendly procedural materials. Local textures, no remote image requests or tracking.
const makeTexture=(render,repeatX=1,repeatY=1)=>{
  const canvas=document.createElement('canvas');
  canvas.width=512;canvas.height=512;
  const c=canvas.getContext('2d',{alpha:false});
  let seed=29617;
  const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  render(c,random);
  const tex=new THREE.CanvasTexture(canvas);
  tex.colorSpace=THREE.SRGBColorSpace;
  tex.wrapS=tex.wrapT=THREE.RepeatWrapping;
  tex.repeat.set(repeatX,repeatY);
  tex.anisotropy=4;
  return tex;
};
const roofTile=(base)=>{
  const palettes={
    slate:['#354044','#434a4b','#30383d','#4e5353','#44484a','#353a3e'],
    terracotta:['#9b513f','#ad6147','#864333','#b46f53','#a75b42','#8b4a37'],
    graphite:['#282c30','#34393a','#3b3f43','#292e33','#44474b','#343a3d']
  };
  return makeTexture((g,rnd)=>{
    g.fillStyle='#272b2b';g.fillRect(0,0,512,512);
    const colors=palettes[base],w=59,h=33;
    for(let row=-1;row<18;row++)for(let col=-1;col<11;col++){
      const x=col*w+(row%2)*w/2,y=row*h;
      g.fillStyle=colors[Math.floor(rnd()*colors.length)];
      g.fillRect(x+1,y+1,w-2,h-2);
      g.fillStyle='rgba(255,255,255,.075)';g.fillRect(x+3,y+2,w-7,2);
      g.fillStyle='rgba(0,0,0,.11)';g.fillRect(x+1,y+h-5,w-2,3);
    }
    for(let i=0;i<4700;i++){
      g.fillStyle=rnd()>.5?'rgba(255,255,255,.035)':'rgba(0,0,0,.05)';
      g.fillRect(rnd()*512,rnd()*512,1+rnd()*3,1+rnd()*2);
    }
  },3,3);
};
const stoneImage=()=>makeTexture((g,rnd)=>{
  g.fillStyle='#d8c9b4';g.fillRect(0,0,512,512);
  const palettes=['#e6daca','#d3c0a8','#ccbea9','#e5d3bc','#c4b49e'];
  for(let row=0;row<12;row++)for(let col=-1;col<7;col++){
    const w=85,h=44,x=col*w+((row%2)*w/2),y=row*h;
    g.fillStyle=palettes[Math.floor(rnd()*palettes.length)];
    g.fillRect(x+1,y+1,w-2,h-2);
    g.fillStyle='rgba(255,255,255,.13)';g.fillRect(x+3,y+2,w-6,2);
  }
  for(let i=0;i<9400;i++){const v=rnd()>.5?'rgba(67,54,42,.045)':'rgba(255,255,255,.08)';
    g.fillStyle=v;g.fillRect(rnd()*512,rnd()*512,1+rnd()*4,1+rnd()*3);}
},2,1.75);
const plasterImage=()=>makeTexture((g,rnd)=>{
  g.fillStyle='#e7dfd0';g.fillRect(0,0,512,512);
  for(let i=0;i<28000;i++){g.fillStyle=rnd()>.53?'rgba(255,255,255,.12)':'rgba(107,94,74,.09)';
    g.fillRect(rnd()*512,rnd()*512,1+rnd()*3,1+rnd()*3);}
},2,2);
const lawnImage=()=>makeTexture((g,rnd)=>{
  g.fillStyle='#63794e';g.fillRect(0,0,512,512);
  for(let i=0;i<22000;i++){
    g.fillStyle=rnd()>.52?'rgba(173,194,123,.17)':'rgba(35,69,35,.20)';
    g.fillRect(rnd()*512,rnd()*512,1+rnd()*2,2+rnd()*7);
  }
},18,18);
const paverImage=()=>makeTexture((g,rnd)=>{
  g.fillStyle='#c0baab';g.fillRect(0,0,512,512);
  for(let row=0;row<14;row++)for(let col=-1;col<9;col++){
    const w=69,h=38,x=col*w+(row%2?w/2:0),y=row*h;
    const shade=Math.floor(168+rnd()*37);
    g.fillStyle='rgb('+shade+','+(shade-3)+','+(shade-10)+')';
    g.fillRect(x+2,y+2,w-4,h-4);
    g.fillStyle='rgba(255,255,255,.10)';g.fillRect(x+3,y+3,w-6,2);
    for(let i=0;i<6;i++){g.fillStyle='rgba(65,63,50,.04)';g.fillRect(x+rnd()*w,y+rnd()*h,2,2);}
  }
},2,5);

try {
  if(!window.WebGLRenderingContext)throw new Error('WebGL unavailable');
  const scene=new THREE.Scene();
  const desktopGPU=window.matchMedia('(min-width:850px) and (pointer:fine)').matches;
  const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:desktopGPU?'high-performance':'low-power',alpha:false,stencil:false});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.95));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.35;
  renderer.shadowMap.enabled=true;
  renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute('aria-label','Трёхмерная модель частного дома. Вращайте пальцем или мышью');
  container.appendChild(renderer.domElement);

  const camera=new THREE.PerspectiveCamera(48,1,.2,130);
  const mobileView=window.matchMedia('(max-width:730px)').matches;
  const initialPos=mobileView?new THREE.Vector3(14,8.3,19.5):new THREE.Vector3(18.5,10.2,25);
  camera.position.copy(initialPos);
  const controls=new OrbitControls(camera,renderer.domElement);
  controls.enableDamping=true;
  controls.dampingFactor=.085;
  controls.enablePan=false;
  controls.minDistance=13;
  controls.maxDistance=75; // Whole-plot view on narrow phones
  controls.minPolarAngle=.18;
  controls.maxPolarAngle=Math.PI*.475;
  controls.autoRotate=false;
  controls.autoRotateSpeed=2.15;
  controls.target.set(0,2.75,3);
  controls.update();
  // Contextual viewpoint: show the house (not just the fence) when selecting
  // architecture, but reveal the whole plot when editing the fence.
  const focusViews={
    front:mobileView?{camera:[11.8,7.3,21.8],target:[0,2.68,2.4]}:{camera:[15.1,8.2,26],target:[0,2.72,2.6]},
    side:{camera:[31,9,2.5],target:[0,2.8,0]},
    back:{camera:[12,8,-28],target:[0,2.7,0]},
    // Plot-wide top view centers the house and the reserved pool zone together,
    // including on narrow phone screens where the pool used to be cropped.
    top:mobileView?{camera:[17,62,15],target:[8,1.0,3]}:{camera:[13,49,12],target:[5,1.0,3]},
    yard:{camera:[20,14.5,36],target:[2.4,1.5,9]},
    facade:mobileView?{camera:[9.7,6.4,16.3],target:[0,2.45,2.4]}:{camera:[12.5,7.2,20],target:[0,2.5,2.7]},
    roof:mobileView?{camera:[10.2,10.0,17],target:[0,3.8,1.7]}:{camera:[14.3,12.1,20],target:[0,4.0,1.7]},
    fence:{camera:[23,16.5,33],target:[0,3.05,5]},
    presets:mobileView?{camera:[13.9,7.8,19.0],target:[0,2.75,1.8]}:{camera:[16.1,8.8,23.3],target:[0,2.75,1.8]}
  };
  let focusTransition=null;
  window.addEventListener('kaskad:focus-view',event=>{
    if(typeof isSitePreview!=='undefined'&&isSitePreview)return;
    const cfg=focusViews[event.detail?.tab];
    if(!cfg)return;
    focusTransition={
      camera:new THREE.Vector3(...cfg.camera),
      target:new THREE.Vector3(...cfg.target)
    };
  });
  controls.addEventListener('start',()=>{focusTransition=null});
  const viewpointSelect=document.getElementById('sceneViewSelect');
  function setView(key){
    const cfg=focusViews[key]||focusViews.front;
    focusTransition={camera:new THREE.Vector3(...cfg.camera),target:new THREE.Vector3(...cfg.target)};
    controls.autoRotate=false;
    autoButton.setAttribute('aria-pressed','false');autoButton.textContent='↻ Автообзор';
    if(viewpointSelect)viewpointSelect.value=key in focusViews?key:'front';
  }
  viewpointSelect?.addEventListener('change',()=>setView(viewpointSelect.value));
  setView('front');

  const M=(color,roughness=.8,extra={})=>new THREE.MeshStandardMaterial({color,roughness,...extra});
  const facadeTextures={brick:brickImage(),stone:stoneImage(),plaster:plasterImage(),
    tuscan:brickImage(),gray:stoneImage(),...createFacadeMaterials(THREE)};
  const roofTextures={slate:roofTile('slate'),terracotta:roofTile('terracotta'),graphite:roofTile('graphite')};
  // MeshBasicMaterial gives ALL walls the EXACT same sampled masonry color,
  // regardless of whether one wall faces the sunlight. The 3D trim, windows,
  // roof and landscape continue to use PBR shading and physical shadows.
  const brick=new THREE.MeshBasicMaterial({
    color:'#ffffff',map:facadeTextures.brick,toneMapped:true
  });
  const limestone=M('#e6dece',.79);
  const quartz=M('#ede7da',.57);
  const roofMat=M('#3e4849',.82);
  const doorMat=M('#4a3a31',.67,{metalness:.08});
  const bronze=M('#6f6555',.53,{metalness:.48});
  const windowFrameMetal=M('#6f6555',.46,{metalness:.47});
  const rail=M('#a9b2aa',.35,{metalness:.52});
  const gravel=M('#ffffff',.86,{map:paverImage()});
  const meadow=M('#ffffff',.97,{map:lawnImage()});
  const asphalt=M('#777f7b',.9);
  const water=new THREE.MeshPhysicalMaterial({color:'#4f9eaa',roughness:.075,metalness:.04,transparent:true,opacity:.88,clearcoat:.95,clearcoatRoughness:.09,envMapIntensity:1.1,side:THREE.DoubleSide});
  const grass=new THREE.Mesh(new THREE.PlaneGeometry(135,135),meadow);
  grass.rotation.x=-Math.PI/2;
  grass.receiveShadow=true;
  scene.add(grass);
  const box=(w,h,d,mat,x,y,z,cast=true)=>{
    const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);
    b.position.set(x,y,z);
    b.castShadow=cast;
    b.receiveShadow=true;
    scene.add(b);
    return b;
  };
  const cyl=(rt,rb,h,mat,x,y,z,segments=16)=>{
    const b=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,segments),mat);
    b.position.set(x,y,z);
    b.castShadow=true;
    b.receiveShadow=true;
    scene.add(b);
    return b;
  };
  // Capture only the building's geometry, not plot, trees, pool or fence.
  const houseStart=scene.children.length;
  // Foundations, warm brick masonry, cornices, porch with stone columns.
  box(13.6,.42,9.65,limestone,0,.29,0);
  // A single facade material is shared by all four walls and BOTH roof gables.
  // Side UV is scaled to its actual 9m width (front/back 12.8m), so the
  // masonry pattern has the same physical size around every corner.
  const facadeBodyGeo=new THREE.BoxGeometry(12.8,6.45,9);
  const bodyUvs=facadeBodyGeo.getAttribute('uv');
  for(let vertex=0;vertex<8;vertex++)bodyUvs.setX(vertex,bodyUvs.getX(vertex)*(9/12.8));
  bodyUvs.needsUpdate=true;
  const facadeBody=new THREE.Mesh(facadeBodyGeo,brick);
  facadeBody.name='КАСКАД · единый кирпичный фасад 4 стороны';
  facadeBody.position.set(0,3.66,0);
  facadeBody.castShadow=true;facadeBody.receiveShadow=true;scene.add(facadeBody);
  box(13.2,.18,9.45,quartz,0,3.66,0);
  box(13.4,.28,9.6,limestone,0,6.86,0);
  box(13.0,.16,9.35,quartz,0,7.1,0);
  const porchStart=scene.children.length;
  // Low, supported entrance canopy: below the upper windows (starts ~4.7 m),
  // not the previous 4.7–4.9 m full-width slab intersecting their sills.
  box(3.85,.20,1.85,limestone,0,3.06,5.42);
  box(3.94,.07,1.96,quartz,0,3.18,5.42);
  for(const x of [-1.72,1.72]){
    cyl(.14,.15,2.35,quartz,x,1.83,6.20,14);
    cyl(.23,.23,.13,limestone,x,.65,6.20,16);
    cyl(.22,.22,.12,limestone,x,3.03,6.20,16);
  }
  const porchElements=scene.children.slice(porchStart);
  // Brick gable and slate pitched roof: one mesh for both slopes, very few triangles.
  const roofGeo=new THREE.BufferGeometry();
  const roofPoints=new Float32Array([
    -7.25,6.98,-5.25,  0,9.05,-5.25,  0,9.05,5.25,
    -7.25,6.98,-5.25,  0,9.05,5.25, -7.25,6.98,5.25,
     0,9.05,-5.25,  7.25,6.98,-5.25,  7.25,6.98,5.25,
     0,9.05,-5.25,  7.25,6.98,5.25,  0,9.05,5.25
  ]);
  roofGeo.setAttribute('position',new THREE.BufferAttribute(roofPoints,3));
  roofGeo.computeVertexNormals();
  roofGeo.setAttribute('uv',new THREE.Float32BufferAttribute([
    0,0, 0.5,1, 0.5,0,
    0,0, 0.5,0, 0,1,
    0.5,1, 1,0, 1,1,
    0.5,1, 1,1, 0.5,0
  ],2));
  const roofSurface=new THREE.MeshStandardMaterial({color:'#ffffff',roughness:.78,map:roofTextures.slate,side:THREE.DoubleSide});
  const roof=new THREE.Mesh(roofGeo,roofSurface);
  roof.castShadow=true;roof.receiveShadow=true;scene.add(roof);

  // Dedicated geometry per roofing family: classic, 3D, modular, seam, profiled.
  const roofSystem=createRoofSystem(THREE,scene,{tileRoof:roof,roofSurface});
  const metalMat=roofSystem.metalMat;
  const gableG=new THREE.BufferGeometry();
  gableG.setAttribute('position',new THREE.Float32BufferAttribute([
    -6.43,7.03,4.51, 6.43,7.03,4.51, 0,8.77,4.51,
    -6.43,7.03,-4.51, 0,8.77,-4.51, 6.43,7.03,-4.51
  ],3));
  // The original gables were SOLID-COLORED regardless of selected brick.
  // That caused the visible mismatch when turning from front to side.
  // Continue the facade texture upward with UVs aligned to the wall scale.
  const bottomGableV=(7.03-(3.66-6.45/2))/6.45;
  const topGableV=(8.77-(3.66-6.45/2))/6.45;
  gableG.setAttribute('uv',new THREE.Float32BufferAttribute([
    0,bottomGableV, 1,bottomGableV, .5,topGableV,
    1,bottomGableV, .5,topGableV, 0,bottomGableV
  ],2));
  gableG.computeVertexNormals();
  const gableFacades=new THREE.Mesh(gableG,brick);
  gableFacades.name='КАСКАД · фронтоны того же материала';
  gableFacades.castShadow=true;gableFacades.receiveShadow=true;
  scene.add(gableFacades);
  const roofRidge=box(.2,.24,10.6,roofMat,0,9.03,0);
  // Architectural ornaments: gutters, downspouts, stone quoins and cornices.
  // These details are visible in close-up instead of relying on an enlarged photo.
  for(const x of [-6.6,6.6]){
    for(const z of [-4.45,4.45]){
      for(let k=0;k<13;k++){
        const y=.84+k*.455;
        const corner=new THREE.Mesh(new THREE.BoxGeometry(.43,.31,.53),k%2?quartz:limestone);
        corner.position.set(x,y,z);corner.castShadow=true;corner.receiveShadow=true;scene.add(corner);
      }
    }
  }
  const gutterMat=M('#616767',.38,{metalness:.57});
  for(const x of [-7.22,7.22]){
    const gutter=new THREE.Mesh(new THREE.CylinderGeometry(.105,.105,10.65,12),gutterMat);
    gutter.rotation.x=Math.PI/2;gutter.position.set(x,6.96,0);gutter.castShadow=true;scene.add(gutter);
  }
  for(const x of [-6.54,6.54]){
    cyl(.068,.068,6.28,gutterMat,x,3.71,4.69,10);
    box(.34,.12,.20,gutterMat,x,6.98,4.70,false);
    box(.34,.12,.20,gutterMat,x,.53,4.70,false);
  }
  for(const z of [-3.45,0,3.45]){
    box(13.02,.11,.08,limestone,0,3.60,z,false);
  }
  // Door, sill, facade windows and balconies.
  box(1.72,2.58,.13,limestone,0,1.58,4.67);
  box(1.52,2.34,.2,doorMat,0,1.54,4.79);
  box(.12,.12,.14,bronze,.55,1.54,4.95);
  const glassMat=new THREE.MeshStandardMaterial({
    color:'#a6bdc7',roughness:.17,metalness:.26,emissive:new THREE.Color('#ffd68c'),emissiveIntensity:0
  });
  const frames=[];
  const windowGroups=[];
  const windowFrame=(x,y,z,rot=0,w=1.48,h=1.58)=>{
    const group=new THREE.Group();
    group.position.set(x,y,z);
    group.rotation.y=rot;
    scene.add(group);
    const cell=(a,b,c,mat,xx,yy,zz)=>{
      const m=new THREE.Mesh(new THREE.BoxGeometry(a,b,c),mat);
      m.position.set(xx,yy,zz);
      m.castShadow=true;
      group.add(m);return m;
    };
    // Backing around every window is the SAME facade texture, not a white
    // decorative panel that makes the front appear to use another material.
    cell(w+.25,h+.32,.13,brick,0,0,0);
    cell(w+.05,h+.10,.14,windowFrameMetal,0,0,.09);
    const glass=cell(w-.10,h-.18,.025,glassMat,0,0,.18);
    frames.push(glass);
    cell(.065,h-.04,.055,quartz,0,0,.23);
    cell(w-.04,.065,.055,quartz,0,0,.23);
    cell(w+.30,.16,.35,quartz,0,-h/2-.13,.13);
    cell(.043,h-.22,.055,windowFrameMetal,-w*.26,0,.243);
    cell(.043,h-.22,.055,windowFrameMetal,w*.26,0,.243);
    cell(w-.11,.032,.055,windowFrameMetal,0,-h*.23,.245);
    cell(w-.11,.032,.055,windowFrameMetal,0,h*.23,.245);
    windowGroups.push({group,x,y,z,rot});
    return group;
  };
  [-4.55,-2.30,2.30,4.55].forEach(x=>{
    windowFrame(x,2.12,4.58);
    windowFrame(x,5.49,4.58);
  });
  windowFrame(0,5.49,4.58,0,1.54,1.72);
  for(const x of [-4.5,-2.3,2.3,4.5]){
    windowFrame(x,2.12,-4.58,Math.PI);
    windowFrame(x,5.49,-4.58,Math.PI);
  }
  // Balanced side elevations: matching fenestration on both floors.
  for(const z of [-2.65,0,2.65])for(const level of [2.18,5.43]){
    windowFrame(6.49,level,z,Math.PI/2,1.45,1.64);
    windowFrame(-6.49,level,z,-Math.PI/2,1.45,1.64);
  }
  // Removed orphaned railing and second-floor balcony: their old geometry
  // crossed the window openings and had no credible load-bearing slab.
  const balconyElements=[];
  const architectureSystem=createArchitectureStyles(THREE,scene,{
    limestone,quartz,bronze,doorMat,roofMat,porchElements,balconyElements
  });
  const applyHouseStyle=()=>{
    const style=houseStyleSelect?.value||'classic';
    houseRoot.visible=!oneStoreyStyles.has(style);
    russianHome.setStyle(style);
    const arch={twoClassic:'classic',twoBrick:'practical',twoColumns:'classic',
      twoModern:'modern',twoBalcony:'classic',twoTerrace:'classic',
      twoEstate:'estate',twoFamily:'practical'}[style]||style;
    if(houseRoot.visible)architectureSystem.setStyle(arch);
    twoStoryStyles.setStyle(style);
    for(const window of windowGroups){
      const onFront=Math.abs(window.z-4.58)<.2;
      const onBack=Math.abs(window.z+4.58)<.2;
      const upper=window.y>4;
      const center=Math.abs(window.x)<2.7;
      // Do not render classical fenestration through the glass curtain wall.
      const modernOccluded=style==='modern'&&onFront&&upper;
      const minimalOccluded=style==='coastal'&&onFront&&upper&&center;
      const practicalOccluded=style==='practical'&&
        ((onFront||onBack)&&Math.abs(window.x)>4||!onFront&&!onBack&&Math.abs(window.z)<.1);
      const gardenOccluded=style==='craft'&&onFront&&upper&&Math.abs(window.x)<3;
      window.group.visible=!(modernOccluded||minimalOccluded||practicalOccluded||gardenOccluded);
    }
  };
  // House footprint uses a coherent x/z scale across facade, all windows,
  // ornaments and roofs. Plot, fence and pool retain their real dimensions.
  const houseRoot=new THREE.Group();
  houseRoot.name='KASKAD parametric house volume';
  for(const component of scene.children.slice(houseStart))houseRoot.add(component);
  scene.add(houseRoot);
  const roofForms=createRoofForms(THREE,houseRoot,{
    roofSystem,roofRidge,gableFacades
  });
  const russianHome=createRussianHouse(THREE,scene,{
    brick,limestone,quartz,roofSystem,windowFrameMetal,glassMat,doorMat
  });
  const oneStoreyStyles=new Set(HOME_VARIANTS.filter(item=>item.group!=='Двухэтажные').map(item=>item.id));
  const woodAccent=M('#806447',.81);
  const twoStoryAddons=createExteriorAddons(THREE,houseRoot,{stone:limestone,brick,wood:woodAccent,metal:roofMat});
const twoStoryStyles=createTwoStoreyStyles(THREE,houseRoot,{
  stone:limestone,brick,trim:quartz,wood:woodAccent,dark:roofMat,glass:glassMat
});
const blindArea=createBlindArea(THREE,scene);
const veranda=createVeranda(THREE,scene);
  const updateExteriorDetails=()=>{
    const plinth=plinthSelect?.value||'graphite';
    // Старый независимый навес террасы не используется: одна веранда — одна модель.
    twoStoryAddons.setPlinth(plinth);twoStoryAddons.setTerrace(false);
    russianHome.setPlinth(plinth);russianHome.setTerrace(false);
    const width=Number(houseWidthInput?.value)||10,length=Number(houseLengthInput?.value)||10;
    // Задний балкон уже занимает эту конструктивную зону; не накладываем
    // на него отдельную кровлю веранды.
    if(houseStyleSelect?.value==='twoBalcony'&&verandaSelect?.value!=='none'){
      verandaSelect.value='none';
      verandaSelect.dispatchEvent(new Event('change',{bubbles:true}));
      const note=document.getElementById('siteCompatibilityNote');
      if(note)note.textContent='Веранда отключена: задний балкон занимает ту же зону.';
    }
    veranda.setStyle(verandaSelect?.value||'none');
    veranda.setDimensions(width,length);
    blindArea.setLayout({
      houseWidth:width,houseLength:length,
      type:blindAreaType?.value||'concrete',
      color:blindAreaColor?.value||'graphite',
      width:Number(blindAreaWidth?.value)||.9,
      contour:blindAreaContour?.value||'all',
      verandaOn:(verandaSelect?.value||'none')!=='none'
    });
  };
  [plinthSelect,verandaSelect,blindAreaType,blindAreaColor,blindAreaWidth,blindAreaContour].forEach(el=>el?.addEventListener('change',updateExteriorDetails));
  updateExteriorDetails();
  const twoStoryEntrance=createEntranceVariants(THREE,houseRoot,{
    stone:limestone,trim:quartz,wood:woodAccent,metal:roofMat
  });
  const updateEntrance=()=>{
    const chosen=entranceStyleSelect?.value||'simple';
    porchElements.forEach(part=>{part.visible=false});
    twoStoryEntrance.setStyle(chosen);
    russianHome.setEntrance(chosen);
  };
  entranceStyleSelect?.addEventListener('change',updateEntrance);
  updateEntrance();
  const styleAspects={classic:1.42,italian:1.50,modern:1.85,estate:1.56,
    kavkaz:1.40,coastal:1.70,practical:1.36,craft:1.30};
  const originalFacadeUvs=Float32Array.from(facadeBodyGeo.getAttribute('uv').array);
  const originalGableUvs=Float32Array.from(gableG.getAttribute('uv').array);
  const applyHouseSize=()=>{
    const width=Math.max(5,Math.min(14,Number(houseWidthInput?.value)||10));
    const length=Math.max(8,Math.min(18,Number(houseLengthInput?.value)||10));
    const sx=width/12.8,sz=length/9;
    houseRoot.scale.set(sx,1,sz);
    houseRoot.position.z=4.58*(1-sz);
    // Keep doors and window openings a believable physical size while
    // changing the facade width / house depth (not only a number label).
    for(const entry of twoStoryEntrance.styles.values()){
      entry.scale.x=1/sx;entry.scale.z=1/sz;
      entry.position.z=4.58*(sz-1)/sz;
    }
    const layout=width<8.5?2:4;
    for(const view of windowGroups){
      const {group,x,z,rot}=view;
      const side=Math.abs(x)>6.0;
      const front=!side&&z>0,back=!side&&z<0;
      const atCorner=Math.abs(x)>4;
      group.visible=!(width<8.5&&!side&&!atCorner);
      // Preserve windows' real physical width even if building is narrower.
      group.scale.x=side?1/sz:1/sx;
      group.scale.z=side?1/sx:1/sz;
      if(side){
        group.position.x=Math.sign(x)*(width/2-.10)/sx;
        group.position.z=(z===0?0:Math.sign(z)*Math.max(1.5,length/2-1.4))/sz;
      }else if(front||back){
        const distance=atCorner?width/2-1.05:width/2-2.87;
        group.position.x=Math.sign(x)*Math.max(.87,distance)/sx;
      }
      // The central upper window is not shown through neighbouring windows
      // on the 5 m conceptual narrow house.
      if(width<8&&Math.abs(x)<.1&&front)group.visible=false;
    }
    // Preserve approximate brick size when stretching a house volume.
    const bodyUV=facadeBodyGeo.getAttribute('uv');
    for(let i=0;i<bodyUV.count;i++){
      const multiplier=i<8?sz:i>=16?sx:1;
      bodyUV.setXY(i,originalFacadeUvs[i*2]*multiplier,originalFacadeUvs[i*2+1]);
    }
    bodyUV.needsUpdate=true;
    const gableUV=gableG.getAttribute('uv');
    for(let i=0;i<gableUV.count;i++)gableUV.setXY(i,originalGableUvs[i*2]*sx,originalGableUvs[i*2+1]);
    gableUV.needsUpdate=true;
    const floors=houseFloorsSelect?.value||'one';
    houseRoot.userData.footprint={width,length,floors};
    russianHome.setDimensions(width,length);
    twoStoryAddons.setDimensions(width,length);
    updateExteriorDetails();
  };
  window.addEventListener('kaskad:dimensions-changed',()=>applyHouseSize());
  for(const el of [houseWidthInput,houseLengthInput,houseFloorsSelect])
    el?.addEventListener('change',applyHouseSize);
  const applyRoofShape=()=>{
    let shape=roofShapeSelect?.value||'hip';
    const modern=['modernOne','minimal','coastal','twoModern'].includes(houseStyleSelect?.value);
    if(shape==='flat'&&!modern){
      shape='hip';
      if(roofShapeSelect)roofShapeSelect.value=shape;
      roofShapeSelect?.dispatchEvent(new CustomEvent('kaskad:roof-guard'));
    }
    roofForms.setShape(shape);
    russianHome.setRoof(shape,roofSystem.getType());
  };
  const applyWholeStyle=()=>{applyHouseStyle();applyHouseSize();applyRoofShape();};
  houseStyleSelect?.addEventListener('change',()=>{applyWholeStyle();setView('front');});
  houseSizeSelect?.addEventListener('change',applyHouseSize);
  roofShapeSelect?.addEventListener('change',applyRoofShape);
  applyWholeStyle();
  // Connected entrance steps and a single central walkway, separate vehicle gate.
  for(let i=0;i<3;i++)box(3.35+i*.42,.16,.69,quartz,0,.34-i*.09,6.54+i*.55);
  const frontYard=createFrontYard(THREE,scene,{lawnMaterial:meadow});
  // Pool and borders on the lawn; do not use video or external heavy textures.
  const poolStart=scene.children.length;
  // Каменный борт-кольцо вместо сплошного блока под водой.
  // Зеркало ниже борта на 11 см; визуально читается чаша с бортиком.
  const poolCoping=M('#a6a29b',.83),poolLiner=M('#8eb7b6',.72,{metalness:.03});
  box(5.88,.065,9.85,poolLiner,14.35,.04,.50,false);
  box(5.84,.015,9.79,water,14.35,.145,.50,false);
  for(const x of [11.20,17.50])box(.32,.22,10.42,poolCoping,x,.175,.50,false);
  for(const z of [-4.63,5.63])box(6.52,.22,.31,poolCoping,14.35,.175,z,false);
  const poolStep=M('#d2d3ce',.64);
  for(let i=0;i<3;i++)box(3.3-i*.25,.035,.55,poolStep,14.35,.123-i*.012,-4.04+i*.38,false);
  const poolGroup=new THREE.Group();poolGroup.name='КАСКАД · бассейн';
  for(const part of scene.children.slice(poolStart))poolGroup.add(part);
  scene.add(poolGroup);
  const trunkMat=M('#6b5847',.96);
  const foliageStart=scene.children.length;
  addNaturalFoliage(THREE,scene,{trunkMat});
  const foliageGroup=new THREE.Group();foliageGroup.name='КАСКАД · деревья и кустарники';
  for(const part of scene.children.slice(foliageStart)){
    if(part.isInstancedMesh)part.userData.defaultCount=part.count;
    foliageGroup.add(part);
  }
  scene.add(foliageGroup);

  // Complete landscaped plot: low foundation walls, operable-looking gates,
  // detailed planting and three alternative fence treatments. All drawn on device.
  const gardenStone=M('#e1d8c6',.84,{map:stoneImage()});
  const fenceIron=M('#262c2c',.54,{metalness:.63});
  const timber=M('#665747',.73,{metalness:.05});
  const postBrick=M('#b07c67',.85,{map:facadeTextures.brick});
  // Decorative Tuscan-style brick, not an identified imported Italian brand.
  const tuscanBrick=M('#ffffff',.88,{map:brickImage()});
  const tuscanFenceWall=M('#ffffff',.88,{map:brickImage()});
  const copingStone=M('#e2d6c2',.64);
  const leafGreen=[M('#466c45',.94),M('#5b7c51',.96),M('#3a6549',.96),M('#7b8355',.97)];
  const flowerPink=M('#b88c82',.95);
  const flowerWhite=M('#ded4b9',.96);
  // Lazy-loaded real fence geometry avoids eleven fence meshes at startup on Redmi.
  const fenceSystem=createFenceSystem(THREE,scene,{
    gardenStone,postBrick,tuscanBrick,tuscanFenceWall,copingStone,fenceIron,timber
  });
  // Measured site preview: independent plot perimeter in metres. Existing
  // decorative fixed-layout yard is hidden only while editing the site.
  // House modules move together as one rigid body, keeping material sizes and
  // columns, porch, veranda and blind area tied to the real chosen footprint.
  const plotHousePivot=new THREE.Group();plotHousePivot.name='Участок · положение дома';scene.add(plotHousePivot);
  for(const model of [houseRoot,russianHome.root,veranda.root,blindArea.root])plotHousePivot.add(model);
  const plotOutline=new THREE.Group();plotOutline.name='Участок · границы в масштабе';scene.add(plotOutline);
  const boundaryMat=M('#3b6849',.86),edgeMat=M('#c6b89b',.9);
  const plotEdges=[];
  for(let i=0;i<4;i++){
    const edge=new THREE.Mesh(new THREE.BoxGeometry(1,.22,1),boundaryMat);
    edge.position.y=.16;plotOutline.add(edge);plotEdges.push(edge);
  }
  const plotCornerPosts=[];
  for(let i=0;i<4;i++){
    const post=new THREE.Mesh(new THREE.BoxGeometry(.28,1.15,.28),boundaryMat);
    post.position.y=.60;plotOutline.add(post);plotCornerPosts.push(post);
  }
  const measuredPlotGround=new THREE.Mesh(new THREE.PlaneGeometry(1,1),
    new THREE.MeshStandardMaterial({color:'#adc79d',transparent:true,opacity:.22,roughness:1,depthWrite:false}));
  measuredPlotGround.rotation.x=-Math.PI/2;measuredPlotGround.position.y=.018;plotOutline.add(measuredPlotGround);
  plotOutline.visible=false;
  let isSitePreview=false,plotDetails=null;
  const refreshSitePreview=()=>{
    if(!plotDetails)return;
    const {width,depth,houseX,houseZ,houseWidth,houseLength,fits}=plotDetails;
    const frontage=20.5,rear=frontage-depth,left=-width/2,right=width/2,mid=(frontage+rear)/2;
    const edge=(e,w,l,x,z)=>{e.scale.set(w,1,l);e.position.x=x;e.position.z=z};
    edge(plotEdges[0],width,.12,0,frontage);
    edge(plotEdges[1],width,.12,0,rear);
    edge(plotEdges[2],.12,depth,left,mid);
    edge(plotEdges[3],.22,depth,right,mid);
    [[left,frontage],[right,frontage],[left,rear],[right,rear]].forEach(([x,z],i)=>plotCornerPosts[i].position.set(x,.60,z));
    measuredPlotGround.scale.set(width,depth,1);measuredPlotGround.position.set(0,.018,mid);
    const deltaX=-width/2+houseX+houseWidth/2;
    const deltaZ=frontage-houseZ-4.63;
    plotHousePivot.position.set(isSitePreview?deltaX:0,0,isSitePreview?deltaZ:0);
    plotOutline.visible=isSitePreview;
    if(isSitePreview){
      frontYard.root.visible=false;foliageGroup.visible=false;poolGroup.visible=false;
      const selected=fenceSystem.setType(fenceSelect?.value||'iron');selected.visible=false;
      const topHeight=Math.max(40,Math.max(width,depth)*2.6);
      focusTransition={camera:new THREE.Vector3(width*.16,topHeight,mid+depth*.1),
        target:new THREE.Vector3(0,1.2,mid)};
      controls.maxDistance=Math.max(75,topHeight*1.3);
    }
    plotEdges.forEach(e=>e.material.color.set(fits?'#3b6849':'#a85243'));
  };
  window.addEventListener('kaskad:plot-changed',event=>{plotDetails=event.detail;refreshSitePreview()});
  window.addEventListener('kaskad:site-preview',event=>{
    isSitePreview=event.detail?.active===true;
    if(isSitePreview){refreshSitePreview()}
    else{
      plotHousePivot.position.set(0,0,0);plotOutline.visible=false;
      frontYard.root.visible=true;
      fenceSystem.setType(fenceSelect?.value||'iron');
      updateLandscape();
    }
  });
  // The old random floating dots and rectangular beds are removed.
  // Front-yard flowers are stems/petals/bushes in raised bordered beds.
  const frameColors={bronze:'#6f6555',graphite:'#394348',white:'#f4eee2',wood:'#7b4b2d'};
  const doorColors={walnut:'#4a3a31',graphite:'#373d3e',oak:'#c29c6b',white:'#f4eee2'};
  const glassColors={clear:'#a6bdc7',smoke:'#768a91',blue:'#8ebdcc'};
  const updateOpenings=()=>{
    windowFrameMetal.color.set(frameColors[frameColorSelect?.value]||frameColors.bronze);
    doorMat.color.set(doorColors[doorColorSelect?.value]||doorColors.walnut);
  };
  const updateLandscape=()=>{
    if(isSitePreview)return;
    const mode=landscapeSelect?.value||'lush';
    poolGroup.visible=poolToggle?.checked!==false;
    foliageGroup.visible=mode!=='open';
    frontYard.setStyle(mode==='open'?'none':(yardStyleSelect?.value||'family'));
    frontYard.setParking(parkingToggle?.checked!==false);
    frontYard.setPool(poolGroup.visible);
    fenceSystem.setVehicleAccess(parkingToggle?.checked!==false);
    frontYard.setGazebo(gazeboToggle?.checked===true);
    for(let i=0;i<foliageGroup.children.length;i++){
      const part=foliageGroup.children[i];
      part.visible=mode==='lush'||mode==='modern'&&i%4!==0;
      if(part.isInstancedMesh)part.count=mode==='modern'?Math.ceil(part.userData.defaultCount*.72):part.userData.defaultCount;
    }
  };
  [frameColorSelect,doorColorSelect].forEach(el=>el?.addEventListener('change',updateOpenings));
  [landscapeSelect,poolToggle,yardStyleSelect,parkingToggle,gazeboToggle].forEach(el=>el?.addEventListener('change',updateLandscape));
  // Revealing the pool also reveals its actual location, without forcing users
  // to drag the camera across the plot on a narrow phone.
  poolToggle?.addEventListener('change',()=>{if(poolToggle.checked)setView('top')});
  updateOpenings();updateLandscape();

  // Color swatches reference common RAL-like palettes, with no claims of exact screen color.
  const palette={
    graphite:'#52595e',chocolate:'#594438',burgundy:'#873c48',green:'#426047',
    black:'#252b30',gray:'#898f93',terracotta:'#bd7254',sand:'#beb3a0'
  };
  // Independent model branches. Selecting a fence must NOT reapply the facade.
  // Presets deliberately update multiple branches and are labeled as such.
  let activeFacade=null;
  const applyFacade=(force=false)=>{
    const facade=facadeSelect?.value||'brick';
    const tex=facadeTextures[facade]||facadeTextures.brick;
    if(!force&&activeFacade===facade&&brick.map===tex)return;
    activeFacade=facade;
    brick.map=tex;
    // No separate per-face lighting multiplier or emissive map:
    // one photograph = one identical color on all four sides.
    brick.needsUpdate=true;
  };
  const applyRoof=()=>{
    const roofStyle=roofSelect?.value||'slate';
    const roofColor=palette[roofColorSelect?.value]||palette.graphite;
    roofSystem.setType(roofStyle);roofSystem.setColor(roofColor);
    roofForms.setMaterial();
    russianHome.setRoof(roofShapeSelect?.value||'hip',roofStyle);
    roofMat.color.set(roofColor);
  };
  const applyFence=()=>{
    const fenceStyle=fenceSelect?.value||'iron';
    const fenceColor=palette[fenceColorSelect?.value]||palette.graphite;
    fenceSystem.setType(fenceStyle);fenceSystem.setColor(fenceColor);
  };
  facadeSelect?.addEventListener('change',()=>applyFacade());
  [roofSelect,roofColorSelect].forEach(el=>el?.addEventListener('change',applyRoof));
  [fenceSelect,fenceColorSelect].forEach(el=>el?.addEventListener('change',applyFence));
  applyFacade();applyRoof();applyFence();

  // Licensed CC0 Poly Haven 1K photo textures; stored locally as small WebP files.
  // Real images improve masonry/tile details; procedural maps remain offline fallback.
  const photoLoader=new THREE.TextureLoader();
  // Suppress the procedural-to-photo mid-interaction jump: reveal the 3D only
  // after all facade photo maps have resolved (or use the procedural fallback).
  const criticalFacadeFiles=new Set(['red_brick','stone_tile_wall','rustic_brick_diff','italian_brick_diff']);
  let facadePending=criticalFacadeFiles.size,facadeReady=false;
  const revealFacade=()=>{
    if(facadeReady)return;
    facadeReady=true;
    applyFacade(true);
    renderer.domElement.style.visibility='visible';
    fallback.style.display='none';
    loading.hidden=true;
    status.textContent='3D готов · Вращение 360°';
  };
  const finishCritical=(file)=>{
    if(!criticalFacadeFiles.has(file))return;
    criticalFacadeFiles.delete(file);facadePending--;
    if(facadePending<=0)revealFacade();
  };
  const loadPhotoTexture=(file,repeatX,repeatY,accept)=>{
    photoLoader.load(new URL('assets/3d/'+file+'.webp',document.baseURI).href,tex=>{
      tex.colorSpace=THREE.SRGBColorSpace;
      tex.wrapS=tex.wrapT=THREE.RepeatWrapping;
      tex.repeat.set(repeatX,repeatY);
      tex.anisotropy=4;
      accept(tex);
      if(criticalFacadeFiles.has(file))applyFacade(true);
      finishCritical(file);
    },undefined,()=>{finishCritical(file);});
  };
  // 2K CC0 texture upgrade only when the visitor explicitly selects HD/Ultra.
  // Normal mobile traffic keeps the small 1K local copies and quick load time.
  let hiResStarted=false;
  const upgradeTextures=()=>{
    if(hiResStarted)return;
    hiResStarted=true;
    const refresh=(key,texture)=>{
      facadeTextures[key]=texture;
      if(activeFacade===key)applyFacade(true);
    };
    loadPhotoTexture('red_brick_hd',3.25,2.15,tex=>{
      refresh('brick',tex);
      postBrick.map=tex;postBrick.needsUpdate=true;
    });
    loadPhotoTexture('stone_tile_wall_hd',2,1.75,tex=>{refresh('stone',tex);gardenStone.map=tex;gardenStone.needsUpdate=true;});
    loadPhotoTexture('rustic_brick_diff_hd',3.2,2.2,tex=>{
      refresh('tuscan',tex);
      tuscanBrick.map=tex.clone();
      tuscanBrick.map.wrapS=tuscanBrick.map.wrapT=THREE.RepeatWrapping;
      tuscanBrick.map.repeat.set(1.9,2.4);
      tuscanBrick.map.needsUpdate=true;tuscanBrick.needsUpdate=true;
      tuscanFenceWall.map=tex.clone();
      tuscanFenceWall.map.wrapS=tuscanFenceWall.map.wrapT=THREE.RepeatWrapping;
      tuscanFenceWall.map.repeat.set(12,2.9);
      tuscanFenceWall.map.needsUpdate=true;tuscanFenceWall.needsUpdate=true;
    });
    loadPhotoTexture('italian_brick_diff_hd',3.1,2.2,tex=>{refresh('gray',tex);});
    loadPhotoTexture('roof_tile_neutral_hd',3,3,tex=>roofSystem.setTileMap(tex));
    loadPhotoTexture('wood_planks_hd',1,1,tex=>{timber.map=tex;timber.needsUpdate=true;});
    loadPhotoTexture('metal_roof_base_hd',2,2,tex=>roofSystem.setPhotoMap(tex));
    loadPhotoTexture('concrete_pavement_02_2k',2,5,tex=>{gravel.map=tex;gravel.needsUpdate=true});
    // The new raised flower beds use lightweight modeled blossoms, not flat sprites.
  };
  // CC0 landscape textures load only after the 3D constructor is visited.
  // Leafy ground cover is used in flowerbeds; the lawn stays green.
  loadPhotoTexture('concrete_pavement_02_1k',2,5,tex=>{gravel.map=tex;gravel.needsUpdate=true});
  // Green lawn remains untouched; flowers use geometry, not brown textures.
  renderer.domElement.style.visibility='hidden';
  window.setTimeout(revealFacade,4500);
  loadPhotoTexture('red_brick',3.25,2.15,tex=>{
    facadeTextures.brick=tex;
    postBrick.map=tex;postBrick.color.set('#ffffff');postBrick.needsUpdate=true;
  });
  loadPhotoTexture('stone_tile_wall',2,1.75,tex=>{
    facadeTextures.stone=tex;
    gardenStone.map=tex;gardenStone.color.set('#ffffff');gardenStone.needsUpdate=true;
  });
  loadPhotoTexture('roof_tile_neutral',3,3,tex=>{roofSystem.setTileMap(tex);});
  loadPhotoTexture('wood_planks',1,1,tex=>{
    timber.map=tex;timber.color.set('#ffffff');timber.needsUpdate=true;
  });
  loadPhotoTexture('rustic_brick_diff',3.2,2.2,tex=>{
    facadeTextures.tuscan=tex;
    tuscanBrick.map=tex.clone();
    tuscanBrick.map.wrapS=tuscanBrick.map.wrapT=THREE.RepeatWrapping;
    tuscanBrick.map.repeat.set(1.9,2.4);
    tuscanBrick.map.needsUpdate=true;tuscanBrick.needsUpdate=true;
    tuscanFenceWall.map=tex.clone();
    tuscanFenceWall.map.wrapS=tuscanFenceWall.map.wrapT=THREE.RepeatWrapping;
    tuscanFenceWall.map.repeat.set(12,2.9);
    tuscanFenceWall.map.needsUpdate=true;tuscanFenceWall.needsUpdate=true;
  });
  loadPhotoTexture('italian_brick_diff',3.1,2.2,tex=>{facadeTextures.gray=tex;});
  loadPhotoTexture('metal_roof_base',2.0,2.0,tex=>{roofSystem.setPhotoMap(tex);});
  normalLoaderLater();
  function normalLoaderLater(){
    // Roughness stays grayscale linear, no colorSpace override.
    new THREE.TextureLoader().load(new URL('assets/3d/metal_roof_rough.webp',document.baseURI).href,
      tex=>{tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.repeat.set(2,2);
        roofSystem.setMetalRoughness(tex);},undefined,()=>{});
  }
  // Normal maps are linear data; preserve the right light response.
  const normalLoader=new THREE.TextureLoader();
  const applyNormal=(file,mat)=>{
    normalLoader.load(new URL('assets/3d/'+file+'.webp',document.baseURI).href,tex=>{
      tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.repeat.set(2.3,2);
      mat.normalMap=tex;mat.normalScale.set(.36,.36);mat.needsUpdate=true;
    },undefined,()=>{});
  };
  applyNormal('rustic_brick_nor_gl',tuscanBrick);
  normalLoader.load(new URL('assets/3d/metal_roof_nor_gl.webp',document.baseURI).href,tex=>{
    tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.repeat.set(2,2);
    roofSystem.setMetalNormal(tex);
  },undefined,()=>{});
  // HDR environment supplies actual sky/surrounding light reflections to metal/glass.
  new RGBELoader().load(new URL('assets/3d/rooitou_park_1k.hdr',document.baseURI).href,
    tex=>{tex.mapping=THREE.EquirectangularReflectionMapping;scene.environment=tex;
      scene.environmentIntensity=.52;},undefined,()=>{/* Hemisphere light remains. */});

  // Ambient and sunlight respond to user-selected time of day.
  const hemi=new THREE.HemisphereLight('#d8e9ff','#b2a28c',1.35);
  scene.add(hemi);
  const sun=new THREE.DirectionalLight('#fff1d7',2.15);
  sun.position.set(14,17,14);
  sun.castShadow=true;
  sun.shadow.mapSize.set(1024,1024);
  sun.shadow.camera.left=-28;sun.shadow.camera.right=28;
  sun.shadow.camera.top=28;sun.shadow.camera.bottom=-28;
  sun.shadow.camera.near=.5;sun.shadow.camera.far=65;
  sun.shadow.bias=-.00035;
  scene.add(sun,sun.target);
  // Neutral reflected sky from the rear. A single harsh sun previously made
  // an identical brick texture look like a different facade color on the back.
  const rearBounce=new THREE.DirectionalLight('#eef3fa',0.4);
  rearBounce.position.set(-19,14,-19);
  rearBounce.castShadow=false;
  scene.add(rearBounce);
  sun.target.position.set(0,2.4,0);
  const warm=new THREE.PointLight('#ffcc82',0,15,2);
  warm.position.set(0,4.1,5.6);
  scene.add(warm);
  scene.fog=new THREE.Fog('#e7e9e4',50,110);
  const skyDay=new THREE.Color('#e0e9ea'),skyDusk=new THREE.Color('#bb8d80'),skyNight=new THREE.Color('#151e2c');
  const tmpSky=new THREE.Color();
  const timeLabel=(time)=>{
    const h=Math.floor(time),m=Math.round((time-h)*60);
    return String(h).padStart(2,'0')+':'+String(m).padStart(2,'0');
  };
  const updateLighting=()=>{
    const t=Number(hourInput.value);
    hourLabel.textContent=timeLabel(t);
    const sunHeight=Math.max(0,Math.sin((t-6)/16*Math.PI));
    const evening=clamp((t-17)/5,0,1);
    const dusk=clamp((t-15)/3,0,1)*(1-clamp((t-20)/2,0,1));
    sun.position.set(Math.cos((t-6)/16*Math.PI)*22, 1.5+sunHeight*27,Math.sin((t-6)/16*Math.PI)*22);
    sun.intensity= Math.max(.06,2.15*sunHeight);
    sun.color.set('#fff6e9').lerp(new THREE.Color('#efaa72'),dusk*.75);
    hemi.intensity=.78+sunHeight*.78;
    if(t<17)tmpSky.copy(skyDay);
    else if(t<20)tmpSky.copy(skyDay).lerp(skyDusk,(t-17)/3);
    else tmpSky.copy(skyDusk).lerp(skyNight,clamp((t-20)/2,0,1));
    if(t<8)tmpSky.lerp(skyDusk,(8-t)/2*.48);
    scene.background=tmpSky.clone();
    scene.fog.color.copy(tmpSky);
    renderer.toneMappingExposure=t>20?.94:1.07+sunHeight*.12;
    rearBounce.intensity=.15+sunHeight*1.20;
    if(scene.environment)scene.environmentIntensity=.20+sunHeight*.47;
    const on=windowsToggle.checked;
    const warmth=on?(.15+evening*1.9):0;
    glassMat.emissiveIntensity=warmth;
    glassMat.color.set(on&&evening>.5?'#edc69b':(glassColors[glassTintSelect?.value]||glassColors.clear));
    warm.intensity=on?evening*26:0;
    sun.shadow.needsUpdate=true;
  };
  hourInput.addEventListener('input',updateLighting);
  windowsToggle.addEventListener('change',updateLighting);
  glassTintSelect?.addEventListener('change',updateLighting);
  autoButton.addEventListener('click',()=>{
    controls.autoRotate=!controls.autoRotate;
    autoButton.setAttribute('aria-pressed',String(controls.autoRotate));
    if(controls.autoRotate)autoButton.textContent='■ Стоп';
    else autoButton.textContent='↻ Автообзор';
  });
  // Higher detail is opt-in, avoiding permanent heavy GPU use on mobile.
  qualitySelect?.addEventListener('change',()=>{
    const quality=qualitySelect.value;
    const maxDpr=quality==='ultra'?3:quality==='high'?2.4:quality==='economy'?1:1.95;
    const dpr=window.devicePixelRatio||1;
    // In opt-in modes supersample above the physical DPR when performance permits.
    // High-resolution desktop: allow true supersampling on powerful GPUs;
    // phones keep the existing memory-conscious DPR budget.
    const budget=desktopGPU?(quality==='ultra'?Math.max(3,dpr):quality==='high'?Math.max(2.25,dpr):dpr):
      (quality==='ultra'?dpr*1.5:quality==='high'?dpr*1.25:dpr);
    renderer.setPixelRatio(Math.min(maxDpr,budget));
    if(quality==='high'||quality==='ultra')upgradeTextures();
    const shadowSize=quality==='ultra'?2048:quality==='high'?1536:quality==='economy'?512:1024;
    sun.shadow.mapSize.set(shadowSize,shadowSize);
    if(sun.shadow.map){sun.shadow.map.dispose();sun.shadow.map=null;}
    resize();
    renderer.render(scene,camera);
  });
  highDetailButton?.addEventListener('click',()=>{
    qualitySelect.value=qualitySelect.value==='high'?'balanced':'high';
    qualitySelect.dispatchEvent(new Event('change',{bubbles:true}));
    highDetailButton.setAttribute('aria-pressed',String(qualitySelect.value==='high'));
    highDetailButton.textContent=qualitySelect.value==='high'?'HD ✓':'HD';
  });
  // Start with the same time of day as the UI. Model loaded only on this separate page.
  updateLighting();
  const resize=()=>{
    const w=Math.max(200,container.clientWidth);
    const h=Math.max(250,container.clientHeight);
    renderer.setSize(w,h,false);
    camera.aspect=w/h;
    camera.updateProjectionMatrix();
  };
  const observer=new ResizeObserver(resize);
  observer.observe(container);
  resize();
  // The renderer is shown by revealFacade() once the critical textures settle.
  let last=0;
  let viewerVisible=true;
  const visibilityObserver=new IntersectionObserver(entries=>{
    viewerVisible=entries.some(entry=>entry.isIntersecting);
  },{threshold:.01});
  visibilityObserver.observe(container);
  const draw=(time)=>{
    requestAnimationFrame(draw);
    if(document.hidden||!viewerVisible)return;
    if(time-last<31)return;
    last=time;
    if(focusTransition){
      const speed=reduceMotion?1:.17;
      camera.position.lerp(focusTransition.camera,speed);
      controls.target.lerp(focusTransition.target,speed);
      if(camera.position.distanceToSquared(focusTransition.camera)<.01&&
         controls.target.distanceToSquared(focusTransition.target)<.01){
        camera.position.copy(focusTransition.camera);
        controls.target.copy(focusTransition.target);
        focusTransition=null;
      }
    }
    controls.update();
    renderer.render(scene,camera);
  };
  requestAnimationFrame(draw);
} catch(err) {
  fallback.style.display='block';
  loading.textContent='3D недоступен на этом устройстве. Показываем фотографию дома.';
  loading.style.whiteSpace='normal';
  status.textContent='Фото вместо 3D';
  for(const el of [hourInput,windowsToggle,facadeSelect,roofSelect,fenceSelect,roofColorSelect,fenceColorSelect,houseStyleSelect,houseSizeSelect,roofShapeSelect,qualitySelect,autoButton,highDetailButton])if(el)el.disabled=true;
  // The static page, project photo and navigation remain available.
}
