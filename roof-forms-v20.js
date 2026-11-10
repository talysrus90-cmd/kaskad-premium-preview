/* KASKAD: five independent parametric roof silhouettes, original geometry. */
export function createRoofForms(THREE,houseRoot,{roofSystem,roofRidge,gableFacades}){
 const forms=['gable','hip','flat','shed','mansard'];
 const groups=new Map(),x=7.28,z=5.3,y=7.06;
 const metalTrim=new THREE.MeshStandardMaterial({color:'#ddd9cb',roughness:.65,side:THREE.DoubleSide});
 const material=roofSystem.getMaterial();
 const face=(g,v,mat=material)=>{
   const positions=[],uv=[],indices=[];
   v.forEach(q=>{positions.push(...q);uv.push(q[0]*.24,q[2]*.22+q[1]*.10)});
   for(let i=1;i<v.length-1;i++)indices.push(0,i,i+1);
   const geo=new THREE.BufferGeometry();
   geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
   geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));
   geo.setIndex(indices);geo.computeVertexNormals();
   const mesh=new THREE.Mesh(geo,mat);mesh.castShadow=true;mesh.receiveShadow=true;
   if(mat===material)mesh.userData.isRoofShell=true;
   g.add(mesh);return mesh;
 };
 const box=(g,w,h,d,px,py,pz)=>{
   const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),metalTrim);
   mesh.position.set(px,py,pz);mesh.castShadow=true;g.add(mesh);
 };
 const group=(key)=>{const g=new THREE.Group();g.name='KASKAD roof '+key;g.visible=false;houseRoot.add(g);groups.set(key,g);return g};
 const hip=group('hip'),r=2.1,hy=8.78;
 face(hip,[[-x,y,-z],[x,y,-z],[0,hy,-r]]);
 face(hip,[[x,y,z],[-x,y,z],[0,hy,r]]);
 face(hip,[[-x,y,z],[-x,y,-z],[0,hy,-r],[0,hy,r]]);
 face(hip,[[x,y,-z],[x,y,z],[0,hy,r],[0,hy,-r]]);
 for(const xx of [-x,x])box(hip,.13,.17,z*2,xx,y,0);
 for(const zz of [-z,z])box(hip,x*2,.17,.13,0,y,zz);
 const flat=group('flat');
 face(flat,[[-x,7.20,-z],[x,7.20,-z],[x,7.20,z],[-x,7.20,z]]);
 for(const xx of [-x,x])box(flat,.23,.47,z*2+.3,xx,7.37,0);
 for(const zz of [-z,z])box(flat,x*2+.4,.47,.23,0,7.37,zz);
 const shed=group('shed');
 face(shed,[[-x,8.68,-z],[x,7.17,-z],[x,7.17,z],[-x,8.68,z]]);
 face(shed,[[-x,8.68,-z],[x,7.17,-z],[x,7.00,-z],[-x,8.52,-z]],metalTrim);
 face(shed,[[x,7.17,z],[-x,8.68,z],[-x,8.52,z],[x,7.00,z]],metalTrim);
 box(shed,.14,.17,z*2,-x,8.64,0);box(shed,.14,.17,z*2,x,7.07,0);
 const mansard=group('mansard');
 const a=[[-x,y,-z],[x,y,-z],[x,y,z],[-x,y,z]];
 const b=[[-5.55,8.31,-3.91],[5.55,8.31,-3.91],[5.55,8.31,3.91],[-5.55,8.31,3.91]];
 const c=[[-4.35,8.77,-2.95],[4.35,8.77,-2.95],[4.35,8.77,2.95],[-4.35,8.77,2.95]];
 for(let i=0;i<4;i++){const j=(i+1)%4;face(mansard,[a[i],a[j],b[j],b[i]]);face(mansard,[b[i],b[j],c[j],c[i]])}
 face(mansard,c);
 for(const xx of [-x,x])box(mansard,.13,.17,z*2,xx,y,0);
 for(const zz of [-z,z])box(mansard,x*2,.17,.13,0,y,zz);
 let selected='gable';
 function setShape(key){
  selected=forms.includes(key)?key:'gable';
  roofSystem.setEnabled(selected==='gable');
  roofRidge.visible=selected==='gable';gableFacades.visible=selected==='gable';
  for(const [k,g] of groups)g.visible=k===selected;
 }
 function setMaterial(){
  const mat=roofSystem.getMaterial();
  for(const g of groups.values())for(const m of g.children)if(m.userData.isRoofShell)m.material=mat;
 }
 setShape(selected);
 return {forms,setShape,setMaterial,getShape:()=>selected,getVisibleForms:()=>[...groups].filter(([k,g])=>g.visible).map(([k])=>k)};
}