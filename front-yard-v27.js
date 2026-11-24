/* КАСКАД v27 — согласованное благоустройство парадного двора.
   Калитка x=0, з=20.5 → крыльцо x=0, з≈7.4;
   ворота x=9.5 → парковка справа. Это визуальный концепт,
   не нормативный генплан и не проект уклонов/дренажа. */
export function createFrontYard(THREE,scene,{lawnMaterial}={}){
 const root=new THREE.Group();root.name='КАСКАД · мощение, парковка и цветники';scene.add(root);
 const paver=new THREE.MeshStandardMaterial({color:'#d3d0c4',roughness:.86});
 const concrete=new THREE.MeshStandardMaterial({color:'#b6afa2',roughness:.93});
 const grout=new THREE.MeshStandardMaterial({color:'#817f75',roughness:1});
 const mulch=new THREE.MeshStandardMaterial({color:'#604c3b',roughness:1});
 const leaf=new THREE.MeshStandardMaterial({color:'#376b36',roughness:.89,side:THREE.DoubleSide});
 const leaf2=new THREE.MeshStandardMaterial({color:'#567e3c',roughness:.93});
 const petals=['#e8dbbc','#b77d95','#edc999','#b2a5d7','#d87576'].map(color=>new THREE.MeshStandardMaterial({color,roughness:.85}));
 const path=new THREE.Group();path.name='Главная дорожка от калитки';root.add(path);
 const parking=new THREE.Group();parking.name='Парковка и автомобильный въезд';root.add(parking);
 const classic=new THREE.Group();classic.name='Симметричные клумбы';root.add(classic);
 const family=new THREE.Group();family.name='Семейные клумбы';root.add(family);
 const modern=new THREE.Group();modern.name='Минималистичные посадки';root.add(modern);
 const garden=new THREE.Group();garden.name='Загородный сад';root.add(garden);
 const gazebo=new THREE.Group();gazebo.name='Беседка/пергола';root.add(gazebo);
 const g=(parent,w,h,depth,x,y,z,mat)=>{
  const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,depth),mat);
  m.position.set(x,y,z);m.receiveShadow=true;m.castShadow=h>.09;parent.add(m);return m;
 };
 // Pavers have genuine recessed joints and differentiated stone colors.
 // A single instanced draw call per paving area protects mobile FPS.
 function tiles(parent,{x0,z0,width,length,unitX=.39,unitZ=.28}){
  g(parent,width,.08,length,x0,.075,z0,grout);
  const nx=Math.max(1,Math.floor(width/unitX)),nz=Math.max(1,Math.floor(length/unitZ));
  const matrix=new THREE.Matrix4(),quaternion=new THREE.Quaternion(),scale=new THREE.Vector3();
  const positions=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),paver,nx*nz);
  const shades=['#d8d4c8','#c3c2b6','#e1dcd0','#bbb9ad','#d0cec2'];
  const color=new THREE.Color();
  let i=0;
  for(let zz=0;zz<nz;zz++)for(let xx=0;xx<nx;xx++){
   const w=width/nx-.016,depth=length/nz-.016;
   const x=x0-width/2+(xx+.5)*width/nx;
   const z=z0-length/2+(zz+.5)*length/nz;
   scale.set(w,.065,depth);
   matrix.compose(new THREE.Vector3(x,.133,z),quaternion,scale);
   positions.setMatrixAt(i,matrix);
   color.set(shades[(xx*7+zz*11+Math.floor(zz/2))%shades.length]);
   positions.setColorAt(i,color);
   i++;
  }
  positions.instanceMatrix.needsUpdate=true;
  if(positions.instanceColor)positions.instanceColor.needsUpdate=true;
  positions.receiveShadow=true;positions.castShadow=false;parent.add(positions);
  return positions;
 }
 // The front-facing door is at +Z: stone path ends exactly at steps.
 tiles(path,{x0:0,z0:14.1,width:2.5,length:13.5});
 tiles(path,{x0:0,z0:7.5,width:4.2,length:1.8,unitX:.45,unitZ:.3});
 // A contrasting edge makes the straight route legible from the roof view.
 for(const x of [-1.34,1.34])g(path,.12,.09,12.8,x,.116,14.15,concrete);
 // Independent drive gate centered at x=9.5, z=20.5.
 tiles(parking,{x0:9.5,z0:15.1,width:4.5,length:11.2,unitX:.43,unitZ:.34});
 tiles(parking,{x0:9.5,z0:9.55,width:5.3,length:4.2,unitX:.44,unitZ:.30});
 for(const x of [7.14,11.86])g(parking,.14,.08,11.2,x,.11,15.1,concrete);
 // Planting beds with individual stems, five petals and greenery,
 // instead of hovering dot sprites on brown rectangles.
 const petalsGeometry=new THREE.SphereGeometry(1,6,5);
 const leafGeometry=new THREE.IcosahedronGeometry(1,0);
 const trunk=new THREE.MeshStandardMaterial({color:'#46713f',roughness:.95});
 function flowerBed(parent,x,z,w,len,seed,kind='flower'){
  const bed=new THREE.Group();bed.name='Клумба с живыми цветами';parent.add(bed);
  g(bed,w,.105,len,x,.11,z,mulch);
  for(const dx of [-1,1])g(bed,.14,.19,len+.17,x+dx*(w/2+.04),.17,z,concrete);
  for(const dz of [-1,1])g(bed,w+.16,.19,.14,x,.17,z+dz*(len/2+.04),concrete);
  const columns=Math.max(2,Math.floor(w/.62)),rows=Math.max(2,Math.floor(len/.83));
  let n=seed;
  const rand=()=>{n=(Math.imul(n,1664525)+1013904223)>>>0;return n/4294967296};
  for(let a=0;a<columns;a++)for(let b=0;b<rows;b++){
   const px=x-w/2+(a+.5)*w/columns+(rand()-.5)*.11;
   const pz=z-len/2+(b+.5)*len/rows+(rand()-.5)*.17;
   const height=kind==='bush'?.32+rand()*.20:.30+rand()*.24;
   g(bed,.023,height,.023,px,.24+height/2,pz,trunk);
   const tuft=new THREE.Mesh(leafGeometry,rand()>.5?leaf:leaf2);
   tuft.scale.set(.24,.17,.25);tuft.position.set(px,.28+height*.57,pz);bed.add(tuft);
   if(kind==='bush')continue;
   const petalMat=petals[(a*3+b+seed)%petals.length];
   const bloomY=.25+height;
   const centre=new THREE.Mesh(petalsGeometry,petals[2]);
   centre.scale.set(.065,.03,.065);centre.position.set(px,bloomY,pz);bed.add(centre);
   for(let k=0;k<5;k++){
    const angle=2*Math.PI*k/5;
    const petal=new THREE.Mesh(petalsGeometry,petalMat);
    petal.scale.set(.09,.035,.065);
    petal.position.set(px+.095*Math.cos(angle),bloomY,pz+.095*Math.sin(angle));
    petal.rotation.y=-angle;bed.add(petal);
   }
  }
 }
 for(const side of [-1,1]){
  flowerBed(classic,side*3.2,13.0,2.3,8.1,37+(side+1)*7);
  flowerBed(family,side*3.3,13.2,2.6,6.7,123+(side+1)*13,side>0?'bush':'flower');
  flowerBed(modern,side*3.25,13.4,1.65,7.5,222+(side+1)*19,'bush');
  flowerBed(garden,side*4.15,12.5,3.0,7.6,471+(side+1)*11);
 }
 // Gazebo has honest grounded posts and a roof, not floating elements.
 const timber=new THREE.MeshStandardMaterial({color:'#746047',roughness:.81});
 const canopy=new THREE.MeshStandardMaterial({color:'#b4aa92',roughness:.88});
 g(gazebo,4.5,.12,3.6,-12.0,.20,-1.5,concrete);
 for(const x of [-13.95,-10.05])for(const z of [-2.95,-.05]){
  g(gazebo,.19,2.60,.19,x,1.54,z,timber);
 }
 for(const x of [-13.95,-10.05])g(gazebo,.19,.18,3.15,x,2.84,-1.5,timber);
 for(let z=-2.9;z<=-.1;z+=.54)g(gazebo,4.23,.12,.14,-12.0,2.92,z,canopy);
 g(gazebo,3.9,.15,.48,-12.0,.37,-1.5,timber);
 function setStyle(mode){
  classic.visible=mode==='classic';
  family.visible=mode==='family';
  modern.visible=mode==='modern';
  garden.visible=mode==='garden';
 }
 function setParking(on){parking.visible=!!on}
 function setGazebo(on){gazebo.visible=!!on}
 setStyle('family');setParking(true);setGazebo(false);
 return {root,path,parking,classic,family,modern,garden,gazebo,setStyle,setParking,setGazebo,
  getState:()=>({style:classic.visible?'classic':family.visible?'family':modern.visible?'modern':'garden',
    parking:parking.visible,gazebo:gazebo.visible})};
}
