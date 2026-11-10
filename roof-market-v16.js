/* КАСКАД · обобщённые геометрические профили кровли; не копия фирменных изделий. */
export function createRoofSystem(THREE,scene,{tileRoof,roofSurface}){
  const metalMat=new THREE.MeshStandardMaterial({color:'#666d70',roughness:.43,metalness:.53,side:THREE.DoubleSide});
  const compositeMat=new THREE.MeshStandardMaterial({color:'#72736d',roughness:.83,metalness:.07,side:THREE.DoubleSide});
  const flexibleMat=new THREE.MeshStandardMaterial({color:'#737577',roughness:.94,metalness:0,side:THREE.DoubleSide});
  const seamMat=new THREE.MeshStandardMaterial({color:'#70797b',roughness:.4,metalness:.62,side:THREE.DoubleSide});
  const colorable=[metalMat,compositeMat,flexibleMat,seamMat,roofSurface];
  const roofGroups=new Map();
  const types=['slate','terracotta','graphite','ceramic','metalGraphite','metalBurgundy','metal3d','metalModular','standingSeam','flexible','composite','profiled'];
  let current='slate';

  function makeSlope(side,kind,material){
    const nAcross=45,nLong=80,positions=[],uvs=[],indices=[];
    const settings={
      metalGraphite:{wave:.050,step:.028,period:.78,courses:6},
      metalBurgundy:{wave:.050,step:.028,period:.78,courses:6},
      metal3d:{wave:.098,step:.115,period:.79,courses:6},
      metalModular:{wave:.073,step:.082,period:1.05,courses:4},
      standingSeam:{wave:.13,step:0,period:1.13,courses:0},
      composite:{wave:.070,step:.060,period:.58,courses:7},
      flexible:{wave:.003,step:.018,period:.46,courses:9},
      profiled:{wave:.14,step:0,period:.64,courses:0}
    }[kind];
    for(let i=0;i<=nAcross;i++){
      const t=i/nAcross;
      for(let j=0;j<=nLong;j++){
        const v=j/nLong,z=-5.3+10.6*v,phase=(z+5.3)*2*Math.PI/settings.period;
        const course=settings.courses===0?0:Math.pow(Math.max(0,Math.sin(2*Math.PI*t*settings.courses)),10)*settings.step;
        const rib=kind==='standingSeam'?Math.pow(Math.max(0,Math.cos(phase)),18)*settings.wave:
          kind==='profiled'?Math.sin(phase)*settings.wave:Math.pow(Math.max(0,Math.cos(phase)),5)*settings.wave;
        positions.push(side*7.25*(1-t),6.98+2.07*t+.052+course+rib,z);
        uvs.push(v*2.75,t*3.4);
      }
    }
    for(let i=0;i<nAcross;i++)for(let j=0;j<nLong;j++){
      const a=i*(nLong+1)+j,b=a+nLong+1;
      indices.push(a,b,a+1,b,b+1,a+1);
    }
    const g=new THREE.BufferGeometry();
    g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
    g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));
    g.setIndex(indices);g.computeVertexNormals();
    const object=new THREE.Mesh(g,material);
    object.castShadow=true;object.receiveShadow=true;
    return object;
  }
  for(const kind of types){
    if(['slate','terracotta','graphite','ceramic'].includes(kind))continue;
    const group=new THREE.Group();group.name='Roof '+kind;
    const material=kind==='standingSeam'?seamMat:kind==='composite'?compositeMat:kind==='flexible'?flexibleMat:metalMat;
    group.add(makeSlope(-1,kind,material),makeSlope(1,kind,material));
    group.visible=false;scene.add(group);roofGroups.set(kind,group);
  }
  return {
    types,metalMat,compositeMat,flexibleMat,seamMat,
    setType(kind){
      const safe=types.includes(kind)?kind:'slate';current=safe;
      tileRoof.visible=['slate','terracotta','graphite','ceramic'].includes(safe);
      for(const [value,group] of roofGroups)group.visible=value===safe;
    },
    setColor(hex){for(const material of colorable)material.color.set(hex)},
    setPhotoMap(map){for(const material of [metalMat,seamMat]){material.map=map;material.needsUpdate=true}},
    setMetalNormal(map){for(const material of [metalMat,seamMat]){material.normalMap=map;material.normalScale.set(.20,.20);material.needsUpdate=true}},
    setMetalRoughness(map){for(const material of [metalMat,seamMat]){material.roughnessMap=map;material.needsUpdate=true}},
    setTileMap(map){roofSurface.map=map;roofSurface.needsUpdate=true},
    getType(){return current}
  };
}