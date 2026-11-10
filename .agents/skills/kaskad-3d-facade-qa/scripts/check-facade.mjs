// Zero-dependency guardrail. Does not replace browser visual regression.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'../../../..');
const src=readFileSync(resolve(root,'house-3d.source.js'),'utf8');
const html=readFileSync(resolve(root,'3d-house-embed.html'),'utf8');
const sw=readFileSync(resolve(root,'service-worker.js'),'utf8');
const checks=[
 ['shared building facade material',/const facadeBody=new THREE\.Mesh\(facadeBodyGeo,brick\)/],
 ['shared front + rear gable material',/const gableFacades=new THREE\.Mesh\(gableG,brick\)/],
 ['physical-scale side UV mapping',/bodyUvs\.setX\(vertex,bodyUvs\.getX\(vertex\)\*\(9\/12\.8\)\)/],
 ['gable UV attribute',/gableG\.setAttribute\('uv',new THREE\.Float32BufferAttribute/],
 ['chosen facade mapped onto shared material',/brick\.map=facadeTextures\[facade\]\|\|facadeTextures\.brick/],
 ['balanced daylight illumination',/rearBounce\.intensity=/]
];
for(const [name,re] of checks){
 assert.match(src,re,'3D facade regression: '+name);
 console.log('PASS',name);
}
assert.doesNotMatch(src,/gableMaterial\.color\.set/,'Do not tint gables independently');
assert.match(html,/id="facadeSelect"/,'Facade selector disappeared');
assert.match(sw,/kaskad-pwa-/,'PWA version missing');
console.log('PASS no independent gable tint');
console.log('PASS UI facade selector and versioned offline shell');
console.log('Facade static guardrails OK. Also inspect 5x4 directions in WebGL.');
