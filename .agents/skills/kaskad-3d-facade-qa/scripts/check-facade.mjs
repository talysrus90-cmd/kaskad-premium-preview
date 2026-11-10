// КАСКАД: no-dependency guardrails for color consistency, architecture and mobile UI.
// Also run WebGL screenshots in Chromium; static checks don't replace visual review.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'../../../..');
const src=readFileSync(resolve(root,'house-3d.source.js'),'utf8');
const html=readFileSync(resolve(root,'3d-house-embed.html'),'utf8');
const standalone=readFileSync(resolve(root,'3d-house.html'),'utf8');
const gallery=readFileSync(resolve(root,'builder-gallery.js'),'utf8');
const sw=readFileSync(resolve(root,'service-worker.js'),'utf8');
const archive=readFileSync(resolve(root,'architecture-styles-v19.js'),'utf8');

const checks=[
 ['all walls same material',/const facadeBody=new THREE\.Mesh\(facadeBodyGeo,brick\)/],
 ['roof gables same material',/const gableFacades=new THREE\.Mesh\(gableG,brick\)/],
 ['facade ignores directional brightness',/const brick=new THREE\.MeshBasicMaterial\(/],
 ['physical scale of side texture',/bodyUvs\.setX\(vertex,bodyUvs\.getX\(vertex\)\*\(9\/12\.8\)\)/],
 ['texture chosen once per facade',/const tex=facadeTextures\[facade\]\|\|facadeTextures\.brick/],
 ['same map on shared material',/brick\.map=tex;/],
 ['window backing same facade material',/cell\(w\+\.25,h\+\.32,\.13,brick,0,0,0\)/],
 ['independent fence handler',/\[fenceSelect,fenceColorSelect\]\.forEach\(el=>el\?\.addEventListener\('change',applyFence\)\)/],
 ['distinct architecture system',/createArchitectureStyles\(THREE,scene/],
 ['style change handler separate',/houseStyleSelect\?\.addEventListener\('change',applyWholeStyle\)/]
];
for(const [name,re] of checks){
 assert.match(src,re,'3D regression: '+name);
 console.log('PASS',name);
}
for(const key of ['classic','italian','modern','estate','kavkaz','coastal','practical','craft']){
 assert.match(archive,new RegExp("add\\('"+key+"',g=>"),'Missing distinct architectural theme '+key);
 assert.match(gallery,new RegExp("image:'preset_"+key+"_v20'"),'Missing updated preview for '+key);
}
assert.match(gallery,/key:'presets',label:'Стили домов'/,'Styles tab missing');
assert.match(gallery,/new CustomEvent\('kaskad:focus-view'/,'Missing style-focused camera event');
assert.match(src,/window\.addEventListener\('kaskad:focus-view'/,'3D camera focus listener missing');
assert.match(gallery,/for\(const \[key,value\] of Object\.entries\(item\.set\)\)/,'Style presets must apply only their explicitly named fields');
for(const id of ['classic','italian','modern','estate','kavkaz','coastal','practical','craft']){
 const m=gallery.match(new RegExp("value:'"+id+"'[^\\n]*set:\\{([^}]*)\\}"));
 assert.ok(m,'Missing preset configuration for '+id);
 assert.doesNotMatch(m[1],/(?:^|,)fence(?:Color)?:/,'A house style must NOT change the fence: '+id);
}

assert.match(html,/id="houseStyleSelect"/,'No architecture style selector');
assert.match(standalone,/id="houseStyleSelect"/,'No standalone style selector');
assert.doesNotMatch(src,/brick\.emissiveMap/,'Emissive front-side tint must not return');
assert.doesNotMatch(html,/id="builderDiscuss"/,'Removed discussion button reappeared in 3D block');
assert.doesNotMatch(standalone,/id="builderDiscuss"/,'Removed standalone 3D button reappeared');
assert.doesNotMatch(gallery,/builderDiscuss/,'Dead CTA listener reappeared');
assert.match(sw,/kaskad-pwa-/);
console.log('PASS 8 distinct architectural themes and previews');
console.log('PASS no 3D discussion button; independent controls preserved');
console.log('PASS facade and style guardrails. Also inspect browser screenshots on mobile.');
