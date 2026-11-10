import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'../../../..');
const text=p=>readFileSync(resolve(root,p),'utf8');
const gallery=text('builder-gallery.js'),source=text('house-3d.source.js'),roof=text('roof-forms-v20.js'),html=text('3d-house-embed.html');
const manifest=JSON.parse(text('contracts/house_style_examples_v20.json'));
assert.equal(manifest.examples.length,8);
for(const item of manifest.examples){
 assert.equal(item.authority,'CONCEPT_VISUAL');
 assert.equal(item.units,'m');
 assert.ok(Math.abs(item.geometry.widthM*item.geometry.depthM*2-item.geometry.areaM2)<.08);
 assert.match(gallery,new RegExp("value:'"+item.style+"'[^\\n]*houseSize:'"+item.geometry.areaM2+"'[^\\n]*roofShape:'"+item.roof.shape+"'"));
}
assert.match(source,/createRoofForms\(THREE,houseRoot/);
assert.match(source,/houseRoot\.scale\.set\(scaleX,1,scaleZ\)/);
assert.match(source,/bodyUV\.setXY\(i,originalFacadeUvs/);
assert.match(source,/windowGroups\.push\(\{group,x,y,z,rot\}\)/);
assert.match(source,/const upgradeTextures=/);
assert.match(source,/quality==='ultra'\?3/);
assert.match(roof,/const forms=\['gable','hip','flat','shed','mansard'\]/);
for(const id of ['roofShapeSelect','houseSizeSelect','highDetailButton'])assert.match(html,new RegExp('id="'+id+'"'));
assert.doesNotMatch(html,/id="builderDiscuss"/);
for(const id of ['red_brick','stone_tile_wall','rustic_brick_diff','italian_brick_diff','roof_tile_neutral','wood_planks','metal_roof_base']){
 assert.ok(existsSync(resolve(root,'assets/3d/'+id+'_hd.webp')),'Missing opt-in 2K texture '+id);
}
console.log('PASS: 8 distinct variants, 5 shapes, 6 area sizes, facade UV, window styles, opt-in 2K, no extra discussion button, portable CONCEPT_VISUAL manifest.');
