/* КАСКАД · distinct architectural details for house style presets.
   Style affects the HOUSE geometry, never changes a fence when selecting it.
   All geometry is original and procedural. */
export function createArchitectureStyles(THREE,scene,{limestone,quartz,bronze,doorMat,roofMat,porchElements,balconyElements}){
  const styles=['classic','italian','modern','estate','kavkaz','coastal','practical','craft'];
  const groups=new Map();
  const materials={
    graphite:new THREE.MeshStandardMaterial({color:'#414f4c',roughness:.45,metalness:.22}),
    timber:new THREE.MeshStandardMaterial({color:'#886348',roughness:.82}),
    pale:new THREE.MeshStandardMaterial({color:'#e7ddc8',roughness:.85}),
    stone:new THREE.MeshStandardMaterial({color:'#bcad92',roughness:.87}),
    copper:new THREE.MeshStandardMaterial({color:'#9a6342',roughness:.52,metalness:.25}),
    glass:new THREE.MeshStandardMaterial({color:'#a4c6cf',roughness:.18,metalness:.16,transparent:true,opacity:.72}),
    white:new THREE.MeshStandardMaterial({color:'#e9e8e1',roughness:.86})
  };
  const block=(g,mat,w,h,d,x,y,z,rot=0)=>{
    const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);
    mesh.position.set(x,y,z);mesh.rotation.y=rot;
    mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);return mesh;
  };
  const arch=(g,x,y,z,r,mat=limestone)=>{
    const curve=new THREE.Mesh(new THREE.TorusGeometry(r,.10,10,36,Math.PI),mat);
    curve.position.set(x,y,z);curve.castShadow=true;g.add(curve);
    block(g,mat,.20,1.15,.19,x-r, y-.55,z);
    block(g,mat,.20,1.15,.19,x+r, y-.55,z);
  };
  const add=(name,fn)=>{
    const g=new THREE.Group();g.name='КАСКАД Архитектура · '+name;
    fn(g);g.visible=false;scene.add(g);groups.set(name,g);
  };
  add('classic',g=>{
    // Classical masonry cornice, symmetrical grand entrance and balustrades.
    for(const y of [3.43,6.62]){
      block(g,materials.white,13.25,.10,.23,0,y,4.58);
      for(const x of [-6.55,6.55])block(g,materials.white,.19,.10,9.25,x,y,0);
    }
    block(g,materials.copper,3.15,.19,.78,0,6.8,4.78);
  });
  add('italian',g=>{
    // Italian villa: three arched bays, terra-coloured window caps and a balcony loggia.
    for(const x of [-3.7,0,3.7])arch(g,x,3.0,6.59,1.0,materials.pale);
    for(const x of [-4.6,-2.2,2.2,4.6])block(g,materials.copper,1.96,.12,.37,x,6.53,4.77);
    for(const x of [-6.55,6.55])block(g,materials.copper,.26,5.68,.25,x,3.90,4.54);
    block(g,materials.copper,13.25,.17,.42,0,6.88,4.67);
  });
  add('modern',g=>{
    // Modern architecture: strong horizontal glazing, slender vertical fins,
    // detached graphite canopy, no classical porch/balcony.
    block(g,materials.graphite,13.40,.38,.55,0,6.72,4.75);
    block(g,materials.graphite,8.20,.17,2.5,0,3.52,5.52);
    block(g,materials.glass,7.35,.85,.14,0,4.03,4.64);
    for(const x of [-5.65,-5.12,-4.59,4.59,5.12,5.65]){
      block(g,materials.graphite,.19,5.85,.23,x,3.71,4.74);
    }
    for(const z of [-3.6,-3.1,3.1,3.6]){
      block(g,materials.graphite,.16,4.60,.24,6.52,3.75,z,Math.PI/2);
    }
    block(g,materials.glass,4.95,2.17,.09,0,2.10,4.74);
    block(g,materials.graphite,2.9,.10,2.2,0,3.20,5.46);
  });
  add('estate',g=>{
    // Estate: thick ornamented entrance and projecting stone pediment.
    for(const x of [-5.15,5.15]){
      block(g,materials.white,.75,6.20,.40,x,3.56,4.73);
      block(g,materials.white,1.07,.30,.55,x,6.65,4.76);
    }
    for(const x of [-4.45,-2.95,2.95,4.45]){
      block(g,materials.pale,.17,2.15,.15,x,4.15,5.84);
    }
    block(g,materials.white,10.9,.35,1.37,0,6.91,5.15);
    block(g,materials.copper,7.1,.10,1.45,0,7.17,5.0);
  });
  add('kavkaz',g=>{
    // Caucasian style: prominent stone porch arch, rusticated piers,
    // heavy caps, and rhythmic stonework down the two sides.
    arch(g,0,3.30,6.52,1.42,materials.stone);
    for(const x of [-5.98,5.98]){
      block(g,materials.stone,.72,5.90,.37,x,3.90,4.77);
      for(let i=0;i<10;i++)block(g,materials.pale,.80,.16,.42,x,1.00+i*.52,4.81);
    }
    for(const z of [-3.55,3.55]){
      block(g,materials.stone,.28,5.78,.75,6.46,3.73,z);
      block(g,materials.pale,.28,5.78,.75,-6.46,3.73,z);
    }
    block(g,materials.stone,12.85,.23,.82,0,7.01,4.92);
  });
  add('coastal',g=>{
    // Minimalism with light wood cladding and long detached horizontal canopy.
    block(g,materials.pale,13.1,.25,.25,0,6.72,4.62);
    block(g,materials.graphite,7.1,.15,2.5,0,3.29,5.41);
    for(const x of [-4.4,-4.02,-3.64,-3.26,3.26,3.64,4.02,4.4])
      block(g,materials.timber,.14,2.35,.18,x,5.23,4.72);
    for(const z of [-2.8,-2.42,-2.04,2.04,2.42,2.8])
      block(g,materials.timber,.18,2.6,.18,6.45,5.2,z,Math.PI/2);
  });
  add('practical',g=>{
    // Practical country home: modest porch roof and metal corner casings.
    block(g,materials.graphite,3.8,.15,2.4,0,3.1,5.68);
    for(const x of [-2.0,2.0])block(g,materials.graphite,.16,3.12,.19,x,1.58,6.45);
    block(g,materials.graphite,12.85,.12,.20,0,6.83,4.65);
  });
  add('craft',g=>{
    // Garden cottage with distinct timber braces, raised canopy and shutters.
    for(const x of [-5.7,-3.3,-1.0,1.0,3.3,5.7]){
      block(g,materials.timber,.13,5.82,.16,x,3.82,4.64);
    }
    for(const x of [-4.9,-2.64,2.64,4.9]){
      block(g,materials.timber,.26,1.55,.18,x-.96,5.39,4.78);
      block(g,materials.timber,.26,1.55,.18,x+.96,5.39,4.78);
    }
    block(g,materials.timber,5.1,.20,2.65,0,3.35,5.56);
    for(const x of [-2.5,2.5])block(g,materials.timber,.2,2.9,.17,x,1.65,6.27);
    for(const z of [-3.5,3.5])block(g,materials.timber,.19,5.6,.19,6.51,3.66,z);
  });
  const withoutClassic=new Set(['modern','coastal','practical','craft']);
  return{
    styles,
    setStyle(next){
      const selected=groups.has(next)?next:'classic';
      for(const [key,g] of groups)g.visible=key===selected;
      const isSimple=withoutClassic.has(selected);
      for(const m of porchElements)m.visible=!isSimple;
      for(const m of balconyElements)m.visible=!isSimple;
      return selected;
    }
  };
}