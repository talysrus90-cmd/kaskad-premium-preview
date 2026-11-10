/* КАСКАД – independent lightweight demo scene. Bundled Three.js, never loaded on the homepage. */
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js';

const container=document.getElementById('sceneContainer');
const fallback=document.getElementById('modelFallback');
const loading=document.getElementById('loading3d');
const hourInput=document.getElementById('hourInput');
const hourLabel=document.getElementById('hourLabel');
const windowsToggle=document.getElementById('windowsToggle');
const facadeSelect=document.getElementById('facadeSelect');
const roofSelect=document.getElementById('roofSelect');
const fenceSelect=document.getElementById('fenceSelect');
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
  const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'low-power',alpha:false,stencil:false});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.85));
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.35;
  renderer.shadowMap.enabled=true;
  renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute('aria-label','Трёхмерная модель двухэтажного кирпичного дома. Вращайте пальцем или мышью');
  container.appendChild(renderer.domElement);

  const camera=new THREE.PerspectiveCamera(48,1,.2,130);
  const initialPos=new THREE.Vector3(23,16.5,33);
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
  controls.autoRotateSpeed=2.15;
  controls.target.set(0,3.05,5);
  controls.update();

  const M=(color,roughness=.8,extra={})=>new THREE.MeshStandardMaterial({color,roughness,...extra});
  const facadeTextures={brick:brickImage(),stone:stoneImage(),plaster:plasterImage(),
    tuscan:brickImage(),gray:stoneImage()};
  const roofTextures={slate:roofTile('slate'),terracotta:roofTile('terracotta'),graphite:roofTile('graphite')};
  const brick=M('#ffffff',.82,{map:facadeTextures.brick});
  const limestone=M('#e6dece',.79);
  const quartz=M('#ede7da',.57);
  const roofMat=M('#3e4849',.82);
  const doorMat=M('#4a3a31',.67,{metalness:.08});
  const bronze=M('#6f6555',.53,{metalness:.48});
  const rail=M('#a9b2aa',.35,{metalness:.52});
  const gravel=M('#ffffff',.86,{map:paverImage()});
  const meadow=M('#ffffff',.97,{map:lawnImage()});
  const asphalt=M('#777f7b',.9);
  const water=M('#256d7a',.17,{metalness:.23,transparent:true,opacity:.85});
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
  roofGeo.setAttribute('uv',new THREE.Float32BufferAttribute([
    0,0, 0.5,1, 0.5,0,
    0,0, 0.5,0, 0,1,
    0.5,1, 1,0, 1,1,
    0.5,1, 1,1, 0.5,0
  ],2));
  const roofSurface=new THREE.MeshStandardMaterial({color:'#ffffff',roughness:.78,map:roofTextures.slate,side:THREE.DoubleSide});
  const roof=new THREE.Mesh(roofGeo,roofSurface);
  roof.castShadow=true;roof.receiveShadow=true;scene.add(roof);

  // Actual pressed metal-tile roof geometry, not a flat recolored photograph.
  // Two pitched sheets with repeated transverse profile and stepped courses.
  const pressedRoof=new THREE.Group();pressedRoof.name='Pressed metal-tile roof';
  const metalMat=new THREE.MeshStandardMaterial({
    color:'#50585d',roughness:.42,metalness:.48,side:THREE.DoubleSide
  });
  const metalTileSlope=(side)=>{
    const positions=[],uvs=[],triangles=[];
    const across=32,along=74;
    for(let i=0;i<=across;i++){
      const t=i/across;
      for(let j=0;j<=along;j++){
        const v=j/along;
        const z=-5.30+10.60*v;
        const x=side*7.25*(1-t);
        // Rib lines run from eaves to ridge; raised tile-rows cross the slope.
        const rib=Math.pow(Math.max(0,Math.cos(2*Math.PI*(z+5.3)/.82)),5)*.065;
        const wave=Math.sin(2*Math.PI*(z+5.3)/.82)*.035;
        const tileStep=Math.pow(Math.max(0,Math.sin(2*Math.PI*t*6.0)),9)*.052;
        const y=6.98+2.07*t+.045+rib+wave+tileStep;
        positions.push(x,y,z);
        uvs.push(v*2.5,t*2.3);
      }
    }
    for(let i=0;i<across;i++)for(let j=0;j<along;j++){
      const a=i*(along+1)+j,b=a+along+1;
      triangles.push(a,b,a+1,b,b+1,a+1);
    }
    const g=new THREE.BufferGeometry();
    g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
    g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));
    g.setIndex(triangles);
    g.computeVertexNormals();
    const mesh=new THREE.Mesh(g,metalMat);
    mesh.castShadow=true;mesh.receiveShadow=true;pressedRoof.add(mesh);
  };
  metalTileSlope(-1);metalTileSlope(1);
  scene.add(pressedRoof);
  pressedRoof.visible=false;
  const gableG=new THREE.BufferGeometry();
  gableG.setAttribute('position',new THREE.Float32BufferAttribute([
    -6.43,7.03,4.51, 6.43,7.03,4.51, 0,8.77,4.51,
    -6.43,7.03,-4.51, 0,8.77,-4.51, 6.43,7.03,-4.51
  ],3));
  gableG.computeVertexNormals();
  const gableMaterial=new THREE.MeshStandardMaterial({color:'#ac7766',roughness:.85,side:THREE.DoubleSide});
  scene.add(new THREE.Mesh(gableG,gableMaterial));
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
  const styleGroups={};
  const styleSegments=[
    [[-19,-17],[19,-17]], [[-19,-17],[-19,20.5]], [[19,-17],[19,20.5]],
    [[-19,20.5],[-3.65,20.5]],[[3.65,20.5],[19,20.5]]
  ];
  function buildFence(kind){
    const g=new THREE.Group();g.name='Fence '+kind;scene.add(g);
    const segments=styleSegments;
    const isTuscan=kind==='tuscan',isStone=kind==='stone',isWood=kind==='wood';
    const mat=isTuscan?tuscanBrick:isStone?gardenStone:isWood?timber:fenceIron;
    const install=(w,h,d,material,x,y,z)=>{
      const object=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);
      object.position.set(x,y,z);object.castShadow=true;object.receiveShadow=true;g.add(object);
      return object;
    };
    const pillarPositions=new Map();
    for(const [[x1,z1],[x2,z2]] of segments){
      const length=Math.hypot(x2-x1,z2-z1),alongX=Math.abs(x2-x1)>1;
      const cx=(x1+x2)/2,cz=(z1+z2)/2;
      if(isTuscan){
        install(alongX?length:.28,.22,alongX?.28:length,copingStone,cx,.19,cz);
        install(alongX?length:.23,1.58,alongX?.23:length,tuscanFenceWall,cx,1.09,cz);
        install(alongX?length+.18:.43,.13,alongX?.43:length+.18,copingStone,cx,1.95,cz);
      }else if(isStone){
        install(alongX?length:.23,.85,alongX?.23:length,gardenStone,cx,.48,cz);
        install(alongX?length+.12:.36,.09,alongX?.36:length+.12,copingStone,cx,.96,cz);
      }else if(isWood){
        for(let i=0;i<8;i++) install(alongX?length:.075,.115,alongX?.075:length,timber,cx,.35+i*.183,cz);
      }else{
        for(const y of [.50,1.38])install(alongX?length:.09,.085,alongX?.09:length,fenceIron,cx,y,cz);
        const n=Math.max(1,Math.ceil(length/.35));
        const geom=new THREE.BoxGeometry(.062,1.36,.062);
        const mesh=new THREE.InstancedMesh(geom,fenceIron,n);
        const m=new THREE.Matrix4();
        for(let i=0;i<n;i++){
          const t=(i+.5)/n;
          m.makeTranslation(x1+(x2-x1)*t,.91,z1+(z2-z1)*t);
          mesh.setMatrixAt(i,m);
        }
        mesh.instanceMatrix.needsUpdate=true;mesh.castShadow=true;g.add(mesh);
      }
      const count=Math.max(1,Math.ceil(length/(isTuscan?3.4:3.7)));
      for(let i=0;i<=count;i++){
        const t=i/count,x=x1+(x2-x1)*t,z=z1+(z2-z1)*t;
        pillarPositions.set(x.toFixed(2)+','+z.toFixed(2),[x,z]);
      }
    }
    for(const [x,z] of pillarPositions.values()){
      const height=isTuscan?2.13:1.45;
      const pillarMaterial=isTuscan?tuscanBrick:isStone?gardenStone:postBrick;
      install(isTuscan?.51:.34,height,isTuscan?.51:.34,pillarMaterial,x,height/2+.06,z);
      install(isTuscan?.63:.45,.13,isTuscan?.63:.45,copingStone,x,height+.11,z);
    }
    const frontZ=20.5;
    for(const x of [-3.65,3.65]){
      const height=isTuscan?2.52:1.87;
      install(.76,height,.76,isTuscan?tuscanBrick:postBrick,x,height/2,frontZ);
      install(.94,.16,.94,copingStone,x,height+.08,frontZ);
      const lamp=new THREE.Mesh(new THREE.SphereGeometry(.135,12,8),
        M('#f5d6a5',.27,{emissive:'#b27c4b',emissiveIntensity:.22}));
      lamp.position.set(x,height+.27,frontZ);g.add(lamp);
    }
    if(isStone){
      install(2.9,.12,.6,gardenStone,0,.08,frontZ);
    }else{
      const panel=(side)=>{
        const pivot=new THREE.Group();pivot.position.set(side*3.42,0,frontZ);
        pivot.rotation.y=side*.17;g.add(pivot);
        const gate=(w,h,d,x,y,z,material=fenceIron)=>{
          const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);
          m.position.set(x,y,z);m.castShadow=true;pivot.add(m);
        };
        for(const y of [.47,1.33])gate(3.0,.078,.09,-side*1.5,y,0);
        for(let i=0;i<11;i++){
          gate(.066,1.44,.075,-side*(.11+i*.276),.90,0,isWood?timber:fenceIron);
        }
        gate(.12,1.57,.11,-side*2.96,.95,0);
        if(isTuscan) gate(2.96,.085,.08,-side*1.5,1.63,0);
      };
      panel(-1);panel(1);
    }
    return g;
  }
  styleGroups.iron=buildFence('iron');
  styleGroups.wood=buildFence('wood');
  styleGroups.stone=buildFence('stone');
  styleGroups.tuscan=buildFence('tuscan');
  // Landscaped beds flank the path; rounded crowns avoid toy-like cone trees.
  const bedMat=M('#5e5042',1);
  const bed=(x,z,w,d)=>{
    const m=new THREE.Mesh(new THREE.BoxGeometry(w,.08,d),bedMat);
    m.position.set(x,.09,z);m.receiveShadow=true;scene.add(m);
  };
  bed(-7.85,12,3.7,10.2);bed(6.65,14,2.75,6.8);
  const canopyG=new THREE.SphereGeometry(1,10,7);
  function broadleaf(x,z,size=1.0){
    const h=5.1*size;
    cyl(.22*size,.27*size,h*.75,trunkMat,x,h*.40,z,9);
    for(let i=0;i<8;i++){
      const angle=i/8*Math.PI*2;
      const radius=(i%3===0?.70:1.12)*size;
      const ball=new THREE.Mesh(canopyG,leafGreen[(i+Math.floor(x+z+50))%leafGreen.length]);
      ball.position.set(x+Math.cos(angle)*radius,h*.91+(i%3)*.25*size,z+Math.sin(angle)*radius);
      ball.scale.set(1.45*size,.96*size,1.15*size);
      ball.castShadow=true;ball.receiveShadow=true;scene.add(ball);
    }
  }
  [[-14.8,-10.6,1.1],[13.6,-11.6,.95],[-14.7,13.2,.78],[15.8,14.2,.85],[-6.8,-13,.75]].forEach(args=>broadleaf(...args));
  for(let i=0;i<32;i++){
    const x=i<16?-9.2+(i%4)*.73:5.7+(i%4)*.62;
    const z=i<16?8.2+Math.floor(i/4)*2.5:11+Math.floor((i-16)/4)*1.7;
    const m=new THREE.Mesh(new THREE.SphereGeometry(.43,10,7),leafGreen[i%leafGreen.length]);
    m.scale.set(1,.58,.85);m.position.set(x,.45,z);m.castShadow=true;scene.add(m);
    if(i%2===0){
      const petal=new THREE.Mesh(new THREE.SphereGeometry(.11,8,6),i%4?flowerWhite:flowerPink);
      petal.position.set(x+.15,.75,z+.18);scene.add(petal);
    }
  }
  // House and garden design controls change the 3D scene immediately.
  const updateDesign=()=>{
    const facade=facadeSelect?.value||'brick';
    const roofing=roofSelect?.value||'slate';
    const fencing=fenceSelect?.value||'iron';
    brick.map=facadeTextures[facade]||facadeTextures.brick;brick.needsUpdate=true;
    gableMaterial.color.set(facade==='brick'?'#ac7766':facade==='tuscan'?'#be8061':facade==='gray'?'#938987':facade==='stone'?'#d8c6ae':'#e7ddcd');
    const isMetal=roofing.startsWith('metal');
    pressedRoof.visible=isMetal;roof.visible=!isMetal;
    roofSurface.map=roofTextures[roofing]||roofTextures.slate;roofSurface.needsUpdate=true;
    if(isMetal)metalMat.color.set(roofing==='metalBurgundy'?'#ad5361':'#59666e');
    roofMat.color.set(roofing==='terracotta'?'#9b5844':roofing==='metalBurgundy'?'#873747':roofing==='graphite'||isMetal?'#343a3c':'#464d4c');
    Object.keys(styleGroups).forEach(key=>styleGroups[key].visible=key===fencing);
  };
  [facadeSelect,roofSelect,fenceSelect].forEach(el=>el?.addEventListener('change',updateDesign));
  updateDesign();

  // Licensed CC0 Poly Haven 1K photo textures; stored locally as small WebP files.
  // Real images improve masonry/tile details; procedural maps remain offline fallback.
  const photoLoader=new THREE.TextureLoader();
  const loadPhotoTexture=(file,repeatX,repeatY,accept)=>{
    photoLoader.load(new URL('assets/3d/'+file+'.webp',document.baseURI).href,tex=>{
      tex.colorSpace=THREE.SRGBColorSpace;
      tex.wrapS=tex.wrapT=THREE.RepeatWrapping;
      tex.repeat.set(repeatX,repeatY);
      tex.anisotropy=4;
      accept(tex);
      updateDesign();
    },undefined,()=>{ /* On network/cache failure keep generated texture. */ });
  };
  loadPhotoTexture('red_brick',3.25,2.15,tex=>{
    facadeTextures.brick=tex;
    postBrick.map=tex;postBrick.color.set('#ffffff');postBrick.needsUpdate=true;
  });
  loadPhotoTexture('stone_tile_wall',2,1.75,tex=>{
    facadeTextures.stone=tex;
    gardenStone.map=tex;gardenStone.color.set('#ffffff');gardenStone.needsUpdate=true;
  });
  loadPhotoTexture('roof_tiles',3,3,tex=>{roofTextures.terracotta=tex;});
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
  loadPhotoTexture('metal_roof_base',2.0,2.0,tex=>{metalMat.map=tex;metalMat.needsUpdate=true;});
  normalLoaderLater();
  function normalLoaderLater(){
    // Roughness stays grayscale linear, no colorSpace override.
    new THREE.TextureLoader().load(new URL('assets/3d/metal_roof_rough.webp',document.baseURI).href,
      tex=>{tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.repeat.set(2,2);
        metalMat.roughnessMap=tex;metalMat.needsUpdate=true;},undefined,()=>{});
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
  applyNormal('metal_roof_nor_gl',metalMat);
  // HDR environment supplies actual sky/surrounding light reflections to metal/glass.
  new RGBELoader().load(new URL('assets/3d/rooitou_park_1k.hdr',document.baseURI).href,
    tex=>{tex.mapping=THREE.EquirectangularReflectionMapping;scene.environment=tex;
      scene.environmentIntensity=.52;},undefined,()=>{/* Hemisphere light remains. */});

  // Ambient and sunlight respond to user-selected time of day.
  const hemi=new THREE.HemisphereLight('#d8e9ff','#b2a28c',1.35);
  scene.add(hemi);
  const sun=new THREE.DirectionalLight('#fff1d7',2.65);
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
    sun.intensity= Math.max(.06,2.65*sunHeight);
    sun.color.set('#fff6e9').lerp(new THREE.Color('#efaa72'),dusk*.75);
    hemi.intensity=.68+sunHeight*.64;
    if(t<17)tmpSky.copy(skyDay);
    else if(t<20)tmpSky.copy(skyDay).lerp(skyDusk,(t-17)/3);
    else tmpSky.copy(skyDusk).lerp(skyNight,clamp((t-20)/2,0,1));
    if(t<8)tmpSky.lerp(skyDusk,(8-t)/2*.48);
    scene.background=tmpSky.clone();
    scene.fog.color.copy(tmpSky);
    renderer.toneMappingExposure=t>20?.94:1.07+sunHeight*.12;
    if(scene.environment)scene.environmentIntensity=.12+sunHeight*.45;
    const on=windowsToggle.checked;
    const warmth=on?(.15+evening*1.9):0;
    glassMat.emissiveIntensity=warmth;
    glassMat.color.set(on&&evening>.5?'#edc69b':'#a6bdc7');
    warm.intensity=on?evening*26:0;
    sun.shadow.needsUpdate=true;
  };
  hourInput.addEventListener('input',updateLighting);
  windowsToggle.addEventListener('change',updateLighting);
  autoButton.addEventListener('click',()=>{
    controls.autoRotate=!controls.autoRotate;
    autoButton.setAttribute('aria-pressed',String(controls.autoRotate));
    if(controls.autoRotate)autoButton.textContent='■ Остановить вращение';
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
  for(const el of [hourInput,windowsToggle,facadeSelect,roofSelect,fenceSelect,autoButton])if(el)el.disabled=true;
  // The static page, project photo and navigation remain available.
}
