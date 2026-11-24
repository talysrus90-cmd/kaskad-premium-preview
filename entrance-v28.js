/* KASKAD v28: Reusable supported entry groups.
 * All canopies have columns or load-bearing wall connections.
 * Coordinates match centered entrance x=0 on front elevation z≈4.6.
 */
export function createEntranceVariants(THREE,parent,{stone,trim,wood,metal}){
 const styles=new Map();
 const box=(g,w,h,depth,x,y,z,mat=trim)=>{
  const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,depth),mat);
  m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;g.add(m);return m;
 };
 const cylinder=(g,r,h,x,y,z,mat)=>{
  const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r*1.04,h,18),mat);
  m.position.set(x,y,z);m.castShadow=true;g.add(m);return m;
 };
 const stepTexture=new THREE.TextureLoader().load(new URL('assets/3d/concrete_pavement_02_1k.webp',document.baseURI).href);
 stepTexture.colorSpace=THREE.SRGBColorSpace;
 stepTexture.wrapS=stepTexture.wrapT=THREE.RepeatWrapping;stepTexture.repeat.set(2.2,1.4);
 const stoneSteps=new THREE.MeshStandardMaterial({color:'#a5a094',roughness:.77,map:stepTexture});
 const make=(id)=>{
  const g=new THREE.Group();g.name='Входная группа · '+id;parent.add(g);styles.set(id,g);
  // Все опоры опираются на общую неподвижную площадку, а не на газон или воздух.
  const width=id==='columns'?5.55:id==='modern'?5.10:5.12;
  box(g,width,.21,2.38,0,.405,5.55,stoneSteps);
  box(g,width+.13,.075,2.52,0,.548,5.55,stoneSteps);
  box(g,width+.17,.13,.74,0,.275,7.03,stoneSteps);
  if(id==='simple'){
    box(g,3.65,.19,1.69,0,3.03,5.38,trim);
    box(g,3.80,.075,1.80,0,3.18,5.38,metal);
    for(const x of [-1.55,1.55]){
      box(g,.15,2.44,.15,x,1.77,6.07,trim);
      box(g,.30,.13,.30,x,.54,6.07,stone);
    }
  }
  if(id==='columns'){
    // Classical entrance with physical pillars, capitals and a supported lintel.
    box(g,5.15,.27,2.06,0,3.31,5.41,stone);
    box(g,5.34,.075,2.19,0,3.48,5.41,trim);
    for(const x of [-2.04,2.04]){
      cylinder(g,.20,2.66,x,1.89,6.37,stone);
      box(g,.46,.17,.47,x,.56,6.37,stone);
      box(g,.48,.17,.49,x,3.26,6.37,stone);
    }
    for(const x of [-2.47,2.47])box(g,.19,3.02,.21,x,2.00,4.80,trim);
  }
  if(id==='timber'){
    box(g,4.85,.19,2.08,0,3.08,5.46,wood);
    for(const x of [-2.16,2.16]){
      box(g,.22,2.46,.22,x,1.78,6.38,wood);
      box(g,.31,.13,.31,x,.53,6.38,stone);
    }
    for(let x=-2.1;x<2.15;x+=.62)box(g,.14,.13,2.22,x,3.30,5.46,wood);
  }
  if(id==='modern'){
    box(g,4.65,.24,1.86,0,3.18,5.36,metal);
    box(g,4.85,.065,2.06,0,3.34,5.36,trim);
    // Парные стойки одинаковы по материалу, высоте и расположению.
    for(const x of [-2.14,2.14]){
      box(g,.20,2.63,.20,x,1.87,6.18,metal);
      box(g,.34,.15,.34,x,.57,6.18,stone);
      box(g,.34,.12,.34,x,3.19,6.18,metal);
    }
  }
  return g;
 };
 function setStyle(kind){
  const id=['simple','columns','timber','modern'].includes(kind)?kind:'simple';
  for(const [key,g] of styles)g.visible=key===id;
  (styles.get(id)||make(id)).visible=true;
 }
 return {setStyle,styles};
}
