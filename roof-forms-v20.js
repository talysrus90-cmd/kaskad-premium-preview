import {METAL_PROFILES,makeStampedSurface} from './roof-relief-v25.js';
/* КАСКАД v25 — roof forms with finished eaves / soffits.
   Concept geometry, not a structural or construction drawing. */
export function createRoofForms(THREE,houseRoot,{roofSystem,roofRidge,gableFacades}){
  const forms=['gable','hip','flat','mansard']; // no single-slope option
  const groups=new Map(),x=7.28,z=5.3,y=7.06;
  const metalTrim=new THREE.MeshStandardMaterial({color:'#ccc7bd',roughness:.68,metalness:.04,side:THREE.DoubleSide});
  const soffit=new THREE.MeshStandardMaterial({color:'#e4dbca',roughness:.87,metalness:0,side:THREE.DoubleSide});
  const fascia=new THREE.MeshStandardMaterial({color:'#d2c6b4',roughness:.74,metalness:.04,side:THREE.DoubleSide});
  const initialRoof=roofSystem.getMaterial();
  const face=(g,v,mat=initialRoof)=>{
    const positions=[],uv=[],indices=[];
    v.forEach(q=>{positions.push(...q);uv.push(q[0]*.24,q[2]*.22+q[1]*.10)});
    for(let i=1;i<v.length-1;i++)indices.push(0,i,i+1);
    const geo=new THREE.BufferGeometry();
    geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
    geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));
    geo.setIndex(indices);geo.computeVertexNormals();
    const mesh=new THREE.Mesh(geo,mat);
    mesh.castShadow=true;mesh.receiveShadow=true;
    if(mat===initialRoof){mesh.userData.isRoofShell=true;mesh.userData.corners=v.map(q=>[...q]);mesh.userData.baseGeometry=geo;}
    g.add(mesh);return mesh;
  };
  const box=(g,w,h,d,px,py,pz,mat=metalTrim)=>{
    const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);
    mesh.position.set(px,py,pz);mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);
    return mesh;
  };
  const group=key=>{
    const g=new THREE.Group();g.name='KASKAD roof '+key;g.visible=false;
    houseRoot.add(g);groups.set(key,g);return g;
  };
  // Inner roof overhang follows the perimeter of the real building walls,
  // outer edge follows the roof, preventing visible through-gaps from below.
  const innerX=6.4,innerZ=4.5;
  const eaves=(g,base,sloping=false)=>{
    const yy=(xx)=>sloping?6.98+2.07*(1-Math.abs(xx)/7.25)-.14:base;
    for(const side of [-1,1]){
      const outer=side*x,inner=side*innerX;
      face(g,[[outer,yy(outer),-innerZ],[inner,yy(inner),-innerZ],
        [inner,yy(inner),innerZ],[outer,yy(outer),innerZ]],soffit);
    }
    for(const end of [-1,1]){
      for(const side of [-1,1]){
        const edge=end*z,inner=end*innerZ,outer=side*x,inside=side*innerX;
        if(sloping){
          face(g,[[0,yy(0),edge],[outer,yy(outer),edge],
            [inside,yy(inside),inner],[0,yy(0),inner]],soffit);
        }else{
          face(g,[[0,base,edge],[outer,base,edge],[inside,base,inner],[0,base,inner]],soffit);
        }
      }
    }
    // Finished continuous eave boards and neat outer metal flashing.
    for(const side of [-1,1])box(g,.18,.22,z*2,side*x,sloping?6.85:base+.10,0,fascia);
    if(!sloping){
      for(const end of [-1,1])box(g,x*2+.18,.22,.18,0,base+.10,end*z,fascia);
    }else{
      // Raking edge boards follow the two slopes of each gable; no open roof section.
      for(const end of [-1,1])for(const side of [-1,1]){
        const dx=x,dy=9.05-6.98,length=Math.hypot(dx,dy);
        const beam=box(g,length,.19,.20,side*x/2,(6.98+9.05)/2-.08,end*z,fascia);
        beam.rotation.z=side===-1?Math.atan2(dy,dx):-Math.atan2(dy,dx);
      }
    }
  };
  const gable=group('gable');
  eaves(gable,6.91,true);
  const hip=group('hip'),r=2.1,hy=8.78;
  face(hip,[[-x,y,-z],[x,y,-z],[0,hy,-r]]);
  face(hip,[[x,y,z],[-x,y,z],[0,hy,r]]);
  face(hip,[[-x,y,z],[-x,y,-z],[0,hy,-r],[0,hy,r]]);
  face(hip,[[x,y,-z],[x,y,z],[0,hy,r],[0,hy,-r]]);
  eaves(hip,6.92);
  const flat=group('flat');
  face(flat,[[-x,7.20,-z],[x,7.20,-z],[x,7.20,z],[-x,7.20,z]]);
  for(const xx of [-x,x])box(flat,.23,.47,z*2+.3,xx,7.37,0);
  for(const zz of [-z,z])box(flat,x*2+.4,.47,.23,0,7.37,zz);
  eaves(flat,7.01);
  const mansard=group('mansard');
  const a=[[-x,y,-z],[x,y,-z],[x,y,z],[-x,y,z]];
  const b=[[-5.55,8.31,-3.91],[5.55,8.31,-3.91],
    [5.55,8.31,3.91],[-5.55,8.31,3.91]];
  const c=[[-4.35,8.77,-2.95],[4.35,8.77,-2.95],
    [4.35,8.77,2.95],[-4.35,8.77,2.95]];
  for(let i=0;i<4;i++){
    const j=(i+1)%4;
    face(mansard,[a[i],a[j],b[j],b[i]]);
    face(mansard,[b[i],b[j],c[j],c[i]]);
  }
  face(mansard,c);
  eaves(mansard,6.92);
  // Flush glazed attic rooflights: old two-storey variant must not have
  // a featureless roof when the customer selects the mansard option.
  const glazing=new THREE.MeshStandardMaterial({color:'#476676',roughness:.32,metalness:.15});
  const outline=new THREE.MeshStandardMaterial({color:'#454f51',roughness:.52,metalness:.24});
  const incline=Math.atan2(8.31-7.06,7.28-5.55);
  for(const side of [-1,1])for(const zz of [-2.15,2.05]){
    const xx=side*6.36,yy=7.06+(7.28-Math.abs(xx))*(8.31-7.06)/(7.28-5.55);
    const unit=new THREE.Group();unit.position.set(xx,yy+.11,zz);
    unit.rotation.z=side===1?-incline:incline;mansard.add(unit);
    box(unit,1.02,.06,1.31,0,0,0,outline);
    box(unit,.88,.045,1.14,0,.055,0,glazing);
    for(const k of [-.48,.48])box(unit,.065,.08,1.35,k,.065,0,fascia);
    for(const k of [-.62,.62])box(unit,1.04,.08,.07,0,.065,k,fascia);
  }
  let selected='gable';
  function setShape(key){
    selected=forms.includes(key)?key:'gable';
    roofSystem.setEnabled(selected==='gable');
    roofRidge.visible=selected==='gable';
    gableFacades.visible=selected==='gable';
    for(const [k,g] of groups)g.visible=k===selected;
    setMaterial();
  }
  function setMaterial(){
    const mat=roofSystem.getMaterial(),kind=roofSystem.getType();
    const g=groups.get(selected);
    if(!g)return;
    for(const m of g.children){
      if(!m.userData.isRoofShell)continue;
      m.material=mat;
      const profile=selected==='flat'||!METAL_PROFILES[kind]?'flat':kind;
      if(m.userData.currentProfile===profile)continue;
      if(m.userData.dynamicGeometry){m.userData.dynamicGeometry.dispose();m.userData.dynamicGeometry=null;}
      if(profile==='flat')m.geometry=m.userData.baseGeometry;
      else {
        const geometry=makeStampedSurface(THREE,m.userData.corners,kind);
        m.geometry=geometry;m.userData.dynamicGeometry=geometry;
      }
      m.userData.currentProfile=profile;
    }
  }
  setShape(selected);
  return {forms,setShape,setMaterial,getShape:()=>selected,
    getVisibleForms:()=>[...groups].filter(([k,g])=>g.visible).map(([k])=>k)};
}
