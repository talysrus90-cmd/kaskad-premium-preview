/* КАСКАД – independent lightweight demo scene. Bundled Three.js, never loaded on the homepage. */
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const container=document.getElementById('sceneContainer');
const fallback=document.getElementById('modelFallback');
const loading=document.getElementById('loading3d');
const hourInput=document.getElementById('hourInput');
const hourLabel=document.getElementById('hourLabel');
const windowsToggle=document.getElementById('windowsToggle');
const resetButton=document.getElementById('resetCamera');
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
try {
  if(!window.WebGLRenderingContext)throw new Error('WebGL unavailable');
  const scene=new THREE.Scene();
  const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'low-power',alpha:false,stencil:false});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.35;
  renderer.shadowMap.enabled=true;
  renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute('aria-label','Трёхмерная модель двухэтажного кирпичного дома. Вращайте пальцем или мышью');
  container.appendChild(renderer.domElement);

  const camera=new THREE.PerspectiveCamera(48,1,.2,130);
  const initialPos=new THREE.Vector3(20,13,25);
  camera.position.copy(initialPos);
  const controls=new OrbitControls(camera,renderer.domElement);
  controls.enableDamping=true;
  controls.dampingFactor=.085;
  controls.enablePan=false;
  controls.minDistance=13;
  controls.maxDistance=47;
  controls.minPolarAngle=.18;
  controls.maxPolarAngle=Math.PI*.49;
  controls.autoRotate=false;
  controls.autoRotateSpeed=.6;
  controls.target.set(0,3.05,0);
  controls.update();

  const M=(color,roughness=.8,extra={})=>new THREE.MeshStandardMaterial({color,roughness,...extra});
  const brick=M('#ffffff',.88,{map:brickImage()});
  const limestone=M('#e6dece',.79);
  const quartz=M('#ede7da',.57);
  const roofMat=M('#3e4849',.88);
  const doorMat=M('#4a3a31',.67,{metalness:.08});
  const bronze=M('#6f6555',.53,{metalness:.48});
  const rail=M('#a9b2aa',.35,{metalness:.52});
  const gravel=M('#aca99f',.98);
  const meadow=M('#687f53',.97);
  const asphalt=M('#777f7b',.9);
  const water=M('#167f92',.15,{metalness:.14,transparent:true,opacity:.84});
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
  // Foundations, warm brick masonry, cornices, porch with stone columns.
  box(13.6,.42,9.65,limestone,0,.29,0);
  box(12.8,6.45,9,brick,0,3.66,0);
  box(13.2,.18,9.45,quartz,0,3.66,0);
  box(13.4,.28,9.6,limestone,0,6.86,0);
  box(13.0,.16,9.35,quartz,0,7.1,0);
  box(12.2,.31,2.6,limestone,0,4.68,5.25);
  box(12.4,.17,2.8,quartz,0,4.88,5.25);
  for(const x of [-5.1,-2.9,2.9,5.1]){
    cyl(.24,.27,3.92,quartz,x,2.61,6.34,22);
    cyl(.34,.34,.18,limestone,x,.69,6.34,24);
    cyl(.36,.3,.2,limestone,x,4.53,6.34,24);
    box(.74,.19,.75,quartz,x,4.46,6.34);
  }
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
  const roof=new THREE.Mesh(roofGeo,new THREE.MeshStandardMaterial({color:'#434847',roughness:.87,side:THREE.DoubleSide}));
  roof.castShadow=true;roof.receiveShadow=true;scene.add(roof);
  const gableG=new THREE.BufferGeometry();
  gableG.setAttribute('position',new THREE.Float32BufferAttribute([
    -6.43,7.03,4.51, 6.43,7.03,4.51, 0,8.77,4.51,
    -6.43,7.03,-4.51, 0,8.77,-4.51, 6.43,7.03,-4.51
  ],3));
  gableG.computeVertexNormals();
  scene.add(new THREE.Mesh(gableG,new THREE.MeshStandardMaterial({color:'#ac7766',roughness:.85,side:THREE.DoubleSide})));
  box(.2,.24,10.6,roofMat,0,9.03,0);
  // Door, sill, facade windows and balconies.
  box(1.72,2.58,.13,limestone,0,1.58,4.67);
  box(1.52,2.34,.2,doorMat,0,1.54,4.79);
  box(.12,.12,.14,bronze,.55,1.54,4.95);
  const glassMat=new THREE.MeshStandardMaterial({
    color:'#a6bdc7',roughness:.17,metalness:.26,emissive:new THREE.Color('#ffd68c'),emissiveIntensity:0
  });
  const frames=[];
  const windowFrame=(x,y,z,rot=0,w=1.78,h=1.72)=>{
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
    cell(w+.25,h+.32,.13,limestone,0,0,0);
    cell(w+.05,h+.10,.14,bronze,0,0,.09);
    const glass=cell(w-.10,h-.18,.025,glassMat,0,0,.18);
    frames.push(glass);
    cell(.065,h-.04,.055,quartz,0,0,.23);
    cell(w-.04,.065,.055,quartz,0,0,.23);
    cell(w+.30,.16,.35,quartz,0,-h/2-.13,.13);
    return group;
  };
  [-4.55,-2.30,2.30,4.55].forEach(x=>{
    windowFrame(x,2.12,4.58);
    windowFrame(x,5.49,4.58);
  });
  windowFrame(0,5.49,4.58,0,1.54,1.72);
  for(const z of [-2.55,0,2.55]){
    windowFrame(6.49,2.22,z,Math.PI/2,1.55,1.7);
    windowFrame(-6.49,5.43,z,-Math.PI/2,1.55,1.7);
  }
  // Classic balcony railing, modest metal highlights.
  box(7.25,.28,1.2,quartz,0,3.82,5.15);
  for(let i=-9;i<=9;i++){
    const x=i*.38;
    cyl(.024,.024,.85,rail,x,4.39,5.75,7);
  }
  box(7.45,.065,.07,bronze,0,4.83,5.75);
  // Stairs and paved path.
  for(let i=0;i<3;i++)box(3.5+i*.55,.17,.86,quartz,0,.26-i*.07,7.08+i*.83);
  box(3.8,.075,15,gravel,0,.05,13.6,false);
  for(let i=0;i<12;i++)box(3.65,.016,.09,limestone,0,.094,7.9+i*.95,false);
  // Pool and borders on the lawn; do not use video or external heavy textures.
  box(6.4,.21,10.3,quartz,10.45,.15,2.4,false);
  box(5.85,.015,9.82,water,10.45,.269,2.4,false);
  for(const x of [7.28,13.62])box(.2,.24,10.4,limestone,x,.20,2.4,false);
  for(const z of [-2.7,7.5])box(6.5,.24,.2,limestone,10.45,.20,z,false);
  // Evergreen cypress: matte muted green to keep an architectural render style.
  const trunkMat=M('#72644e',1);
  const treeMats=[M('#4d6753',1),M('#597355',1),M('#3f5d4a',1)];
  const tree=(x,z,height=3.8,variant=0)=>{
    cyl(.105,.13,height*.43,trunkMat,x,height*.22,z,8);
    const foliage=new THREE.Mesh(new THREE.ConeGeometry(.46+(variant%2)*.13,height*.85,11),treeMats[variant%3]);
    foliage.position.set(x,height*.62,z);
    foliage.castShadow=true;foliage.receiveShadow=true;scene.add(foliage);
  };
  [[-11.6,4],[-11.2,0],[-10.6,-4],[16.4,-4],[16.4,0],[16.4,4],[5.0,-9],[-6,-10],[-13,-10]].forEach(([x,z],i)=>tree(x,z,3.15+(i%3)*.6,i));
  const sphereG=new THREE.SphereGeometry(.55,11,8);
  for(let i=0;i<14;i++){
    const x= i<7 ? -9.1+(i%7)*.65 : 8.0+(i%7)*.85;
    const z=i<7?8.5:10.5;
    const shrub=new THREE.Mesh(sphereG,treeMats[i%3]);
    shrub.position.set(x,.38,z);
    shrub.scale.set(.9, .5+(i%3)*.1,.9);
    shrub.castShadow=true;scene.add(shrub);
  }
  // Ambient and sunlight respond to user-selected time of day.
  const hemi=new THREE.HemisphereLight('#d8e9ff','#b2a28c',2.1);
  scene.add(hemi);
  const sun=new THREE.DirectionalLight('#fff1d7',3.4);
  sun.position.set(14,17,14);
  sun.castShadow=true;
  sun.shadow.mapSize.set(1024,1024);
  sun.shadow.camera.left=-28;sun.shadow.camera.right=28;
  sun.shadow.camera.top=28;sun.shadow.camera.bottom=-28;
  sun.shadow.camera.near=.5;sun.shadow.camera.far=65;
  sun.shadow.bias=-.00035;
  scene.add(sun,sun.target);
  sun.target.position.set(0,2.4,0);
  const warm=new THREE.PointLight('#ffcc82',0,15,2);
  warm.position.set(0,4.1,5.6);
  scene.add(warm);
  scene.fog=new THREE.Fog('#e7e9e4',38,100);
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
    sun.intensity= Math.max(.06,3.4*sunHeight);
    sun.color.set('#fff6e9').lerp(new THREE.Color('#efaa72'),dusk*.75);
    hemi.intensity=1.05+sunHeight*.85;
    if(t<17)tmpSky.copy(skyDay);
    else if(t<20)tmpSky.copy(skyDay).lerp(skyDusk,(t-17)/3);
    else tmpSky.copy(skyDusk).lerp(skyNight,clamp((t-20)/2,0,1));
    if(t<8)tmpSky.lerp(skyDusk,(8-t)/2*.48);
    scene.background=tmpSky.clone();
    scene.fog.color.copy(tmpSky);
    renderer.toneMappingExposure=t>20?1.0:1.25+sunHeight*.2;
    const on=windowsToggle.checked;
    const warmth=on?(.15+evening*1.9):0;
    glassMat.emissiveIntensity=warmth;
    glassMat.color.set(on&&evening>.5?'#edc69b':'#a6bdc7');
    warm.intensity=on?evening*26:0;
    sun.shadow.needsUpdate=true;
  };
  hourInput.addEventListener('input',updateLighting);
  windowsToggle.addEventListener('change',updateLighting);
  resetButton.addEventListener('click',()=>{
    camera.position.copy(initialPos);
    controls.target.set(0,3.05,0);
    controls.update();
    controls.autoRotate=false;
    autoButton.setAttribute('aria-pressed','false');
    autoButton.textContent='↻ Автоматический обзор';
  });
  autoButton.addEventListener('click',()=>{
    controls.autoRotate=!controls.autoRotate;
    autoButton.setAttribute('aria-pressed',String(controls.autoRotate));
    if(controls.autoRotate)autoButton.textContent='◼ Остановить вращение';
    else autoButton.textContent='↻ Автоматический обзор';
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
  fallback.style.display='none';
  loading.hidden=true;
  status.textContent='3D готов · Вращение 360°';
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
    controls.update();
    renderer.render(scene,camera);
  };
  requestAnimationFrame(draw);
} catch(err) {
  fallback.style.display='block';
  loading.textContent='3D недоступен на этом устройстве. Показываем фотографию дома.';
  loading.style.whiteSpace='normal';
  status.textContent='Фото вместо 3D';
  for(const el of [hourInput,windowsToggle,resetButton,autoButton])if(el)el.disabled=true;
  // The static page, project photo and navigation remain available.
}
