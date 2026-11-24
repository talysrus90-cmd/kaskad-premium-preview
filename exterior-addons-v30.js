/* КАСКАД v30 — независимые детали наружного контура.
   Цоколь и терраса являются эскизом, не расчётом конструкций. */
export function createExteriorAddons(THREE,parent,{stone,brick,wood,metal}={}){
 const root=new THREE.Group();root.name='КАСКАД · отдельные элементы';parent.add(root);
 const plinth=new THREE.Group();plinth.name='Цоколь дома';root.add(plinth);
 const terrace=new THREE.Group();terrace.name='Терраса с опорами';root.add(terrace);
 const mat=(color,roughness=.85,map=null)=>new THREE.MeshStandardMaterial({color,roughness,map});
 const stoneMap=new THREE.TextureLoader().load(new URL('assets/3d/stone_tile_wall.webp',document.baseURI).href);
 stoneMap.colorSpace=THREE.SRGBColorSpace;
 stoneMap.wrapS=stoneMap.wrapT=THREE.RepeatWrapping;stoneMap.repeat.set(4,1);
 const tileCanvas=document.createElement('canvas');tileCanvas.width=256;tileCanvas.height=256;
 const tc=tileCanvas.getContext('2d');tc.fillStyle='#4e5151';tc.fillRect(0,0,256,256);
 for(let y=0;y<4;y++)for(let x=0;x<7;x++){
   tc.fillStyle=['#a9aaa5','#c4c4be','#b5b6b0'][(x*3+y)%3];
   tc.fillRect(x*37+2,y*64+2,34,61);
 }
 const tileMap=new THREE.CanvasTexture(tileCanvas);tileMap.colorSpace=THREE.SRGBColorSpace;
 tileMap.wrapS=tileMap.wrapT=THREE.RepeatWrapping;tileMap.repeat.set(4,1);
 const materialTypes={
  stone:mat('#88837a',.88,stoneMap),
  brick:brick.clone(),
  tile:mat('#878a88',.79,tileMap),
  dagestan:mat('#c0b6a2',.90,stoneMap),
  decorative:mat('#6c6f6d',.92,stoneMap),
  graphite:mat('#454a4d'),
  taupe:mat('#71665b',.89,stoneMap),
  light:mat('#8c8781')
 };
 const box=(group,w,h,depth,x,y,z,material)=>{
  const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,depth),material);
  o.position.set(x,y,z);o.castShadow=h>.25;o.receiveShadow=true;group.add(o);return o;
 };
 // Thin facing material is laid on the four exterior faces over foundation.
 // This deliberately does not recolor all cornices and all window trims.
 // Высота облицовки 28 см, нижний край касается фундаментного пояса.
 for(const z of [-4.57,4.57])box(plinth,13.1,.28,.12,0,.56,z,materialTypes.graphite);
 for(const x of [-6.52,6.52])box(plinth,.12,.28,9.21,x,.56,0,materialTypes.graphite);
 const deck=box(terrace,5.5,.15,2.8,0,.37,-5.86,stone);
 const edging=box(terrace,5.65,.095,2.95,0,.48,-5.86,wood);
 const posts=[-2.45,2.45];
 for(const x of posts){
  box(terrace,.20,2.46,.20,x,1.82,-6.99,wood);
  box(terrace,.33,.12,.33,x,.56,-6.99,stone);
  box(terrace,.17,2.40,.19,x,1.8,-4.74,wood);
 }
 for(let x=-2.48;x<=2.48;x+=.64)box(terrace,.16,.12,2.64,x,3.19,-5.84,wood);
 for(const z of [-7.00,-4.73])box(terrace,5.4,.13,.15,0,3.11,z,wood);
 function setPlinth(kind){
  const material=materialTypes[kind]||materialTypes.graphite;
  plinth.visible=kind!=='none';
  plinth.children.forEach(mesh=>{mesh.material=material});
 }
 function setTerrace(show){terrace.visible=Boolean(show)}
 function setDimensions(w,l){
  const sx=(Number(w)||10)/12.8,sz=(Number(l)||10)/9;
  // Terrace deck maintains an approximately usable size for small houses,
  // and stays connected to the rear elevation while the house grows.
  terrace.scale.x=Math.min(1,Math.max(.7,(Number(w)||10)/6))/sx;
  terrace.scale.z=1/sz;
  terrace.position.z=4.50*(1-sz)/sz;
 }
 setPlinth('graphite');setTerrace(false);
 return {root,plinth,terrace,setPlinth,setTerrace,setDimensions};
}
