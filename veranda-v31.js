/* КАСКАД — отдельная веранда, геометрия связана с задним фасадом. */
export function createVeranda(THREE,scene){
 const root=new THREE.Group();root.name='КАСКАД · веранда';scene.add(root);
 const mat=(color,roughness=.81)=>new THREE.MeshStandardMaterial({color,roughness});
 const stone=mat('#8c8680'),tile=mat('#929188'),wood=mat('#806951');
 const metal=mat('#47504f'),glass=new THREE.MeshStandardMaterial({color:'#829fa9',roughness:.23,metalness:.1,transparent:true,opacity:.80});
 const groups=new Map();
 const b=(g,w,h,d,x,y,z,m)=>{
   const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);
   mesh.position.set(x,y,z);mesh.castShadow=h>.3;mesh.receiveShadow=true;g.add(mesh);return mesh;
 };
 function create(key){
  const g=new THREE.Group();g.name='Веранда · '+key;root.add(g);groups.set(key,g);
  b(g,6.2,.24,3.10,0,.29,-1.47,tile); // top = 0.41
  b(g,6.28,.09,3.16,0,.45,-1.47,key==='modern'?metal:stone);
  b(g,4.1,.15,.77,0,.185,-3.45,stone); // step to the lawn
  b(g,1.59,2.20,.11,0,1.65,-.09,metal); // access door at rear facade
  b(g,1.34,1.88,.04,0,1.65,-.17,glass);
  b(g,.065,1.93,.10,0,1.65,-.20,metal);
  if(key==='open'||key==='garden'){
    for(const x of [-2.93,2.93]){
      b(g,.12,.93,.13,x,.93,-2.76,wood);
      b(g,.12,.93,.13,x,.93,-.43,wood);
      b(g,.12,.10,2.35,x,1.37,-1.60,wood);
    }
  }else{
    const postsMat=key==='modern'?metal:key==='columns'?stone:wood;
    const count=key==='columns'?[-2.82,-1.98,1.98,2.82]:[-2.82,2.82];
    for(const x of count){
      b(g,key==='columns'?.24:.20,2.62,.20,x,1.79,-2.80,postsMat);
      b(g,.36,.13,.38,x,.49,-2.80,stone);
      b(g,.36,.12,.38,x,3.11,-2.80,postsMat);
    }
    b(g,6.4,.19,3.25,0,3.26,-1.50,key==='modern'?metal:wood);
    b(g,6.55,.08,3.32,0,3.39,-1.50,key==='modern'?metal:stone);
    if(key!=='modern'){
      for(let x=-2.85;x<=2.85;x+=.65)b(g,.12,.14,3.14,x,3.17,-1.55,wood);
    }
  }
  return g;
 }
 for(const k of ['open','covered','columns','modern','garden'])create(k);
 let kind='none';
 function setStyle(value){
   kind=groups.has(value)?value:'none';
   root.visible=kind!=='none';
   for(const [k,g] of groups)g.visible=k===kind;
 }
 function setDimensions(width,length){
   const w=Math.max(5,Math.min(14,Number(width)||10));
   const l=Math.max(8,Math.min(18,Number(length)||10));
   const deck=Math.min(6.2,w-.55);
   root.scale.set(deck/6.2,1,1);
   root.position.set(0,0,4.63-l);
 }
 setDimensions(10,10);setStyle('none');
 return {root,setStyle,setDimensions,getStyle:()=>kind};
}
