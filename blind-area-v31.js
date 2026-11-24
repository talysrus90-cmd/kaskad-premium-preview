/* КАСКАД — самостоятельная отмостка. Эскизное благоустройство, не конструктивный проект. */
export function createBlindArea(THREE,scene){
 const root=new THREE.Group();root.name='КАСКАД · отмостка по контуру';scene.add(root);
 const colors={graphite:'#51575b',gray:'#8d8980',sand:'#a69a82',brown:'#746d62'};
 const mat={concrete:'#858682',tile:'#6e7470',pavers:'#918778',stone:'#888073',wide:'#6d6e68'};
 const material=new THREE.MeshStandardMaterial({color:mat.concrete,roughness:.91});
 const pattern=(kind)=>{
   const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;
   const ctx=canvas.getContext('2d');ctx.fillStyle='#565b59';ctx.fillRect(0,0,256,256);
   const cols=kind==='tile'?4:7,rows=kind==='tile'?4:9;
   for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
     const dx=kind==='pavers'&&r%2?-256/cols/2:0;
     const x=c*256/cols+dx,y=r*256/rows;
     ctx.fillStyle=['#e4e1d9','#cbc9c0','#b9b8b0','#d2d0c7'][(c*7+r*11)%4];
     ctx.fillRect(x+2,y+2,256/cols-4,256/rows-4);
     if(x<0)ctx.fillRect(x+256+2,y+2,256/cols-4,256/rows-4);
   }
   const tex=new THREE.CanvasTexture(canvas);
   tex.colorSpace=THREE.SRGBColorSpace;tex.wrapS=tex.wrapT=THREE.RepeatWrapping;
   tex.repeat.set(3,3);return tex;
 };
 const pavement=new THREE.TextureLoader().load(new URL('assets/3d/concrete_pavement_02_1k.webp',document.baseURI).href);
 pavement.colorSpace=THREE.SRGBColorSpace;pavement.wrapS=pavement.wrapT=THREE.RepeatWrapping;pavement.repeat.set(3,3);
 const stone=new THREE.TextureLoader().load(new URL('assets/3d/stone_tile_wall.webp',document.baseURI).href);
 stone.colorSpace=THREE.SRGBColorSpace;stone.wrapS=stone.wrapT=THREE.RepeatWrapping;stone.repeat.set(3,3);
 const textures={concrete:pavement,tile:pattern('tile'),pavers:pattern('pavers'),stone,wide:pattern('pavers')};
 const slabs=[];
 const add=()=>{
   const mesh=new THREE.Mesh(new THREE.BoxGeometry(1,.12,1),material);
   mesh.castShadow=false;mesh.receiveShadow=true;root.add(mesh);slabs.push(mesh);return mesh;
 };
 // Front face has a central break for steps and the main pedestrian path.
 for(let i=0;i<6;i++)add();
 const position=(index,x,y,z,w,depth)=>{
   const mesh=slabs[index];
   mesh.visible=w>.08&&depth>.08;
   mesh.position.set(x,y,z);
   mesh.scale.set(Math.max(w,.01),1,Math.max(depth,.01));
 };
 function setLayout({houseWidth=10,houseLength=10,type='concrete',color='graphite',width=0.9,contour='all',verandaOn=false}={}){
   const w=Math.max(5,Math.min(14,Number(houseWidth)||10));
   const l=Math.max(8,Math.min(18,Number(houseLength)||10));
   const span=Math.max(type==='wide'?1.20:.60,Math.min(1.60,Number(width)||.9));
   material.color.set(colors[color]||mat[type]||mat.concrete);
   const nextMap=textures[type]||null;
   if(material.map!==nextMap){material.map=nextMap;material.needsUpdate=true}
   root.visible=type!=='none';
   // В реальности внешняя линия переднего фасада остаётся постоянной.
   const front=4.63,back=front-l;
   const left=-w/2,right=w/2;
   const gap=Math.min(4.4,w-0.6);
   const seg=(w-gap)/2;
   position(0,left+seg/2,.095,front+span/2,seg,span);
   position(1,right-seg/2,.095,front+span/2,seg,span);
   const rearGap=verandaOn?Math.min(w-.25,6.2*(Math.min(6.2,w-.55)/6.2)+.16):0;
   if(rearGap>0){
     const remain=(w+2*span-rearGap)/2;
     position(2,left-span+remain/2,.095,back-span/2,remain,span);
     position(5,right+span-remain/2,.095,back-span/2,remain,span);
   }else{
     position(2,0,.095,back-span/2,w+2*span,span);
     slabs[5].visible=false;
   }
   position(3,left-span/2,.095,(front+back)/2,span,l);
   position(4,right+span/2,.095,(front+back)/2,span,l);
   const all=contour==='all',frontOnly=contour==='front',rearOnly=contour==='rear';
   slabs[0].visible=slabs[0].visible&&(all||frontOnly);
   slabs[1].visible=slabs[1].visible&&(all||frontOnly);
   slabs[2].visible=slabs[2].visible&&(all||rearOnly);
   slabs[5].visible=slabs[5].visible&&(all||rearOnly);
   slabs[3].visible=slabs[3].visible&&all;
   slabs[4].visible=slabs[4].visible&&all;
 }
 setLayout();
 return {root,setLayout};
}
