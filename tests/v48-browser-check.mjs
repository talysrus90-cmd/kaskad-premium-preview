// Real Chromium smoke tests for the KASKAD configurator.
// Run: npm install --no-save playwright@1.57.0 && npx playwright install chromium
// Then serve the repository: python3 -m http.server 8765
// Finally: node tests/v48-browser-check.mjs
import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import { PNG } from 'pngjs';

const BASE='http://127.0.0.1:8765/3d-house-embed.html?v=49';
const browser=await chromium.launch({
  headless:true,
  args:['--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader']
});
const results=[];
await fs.mkdir('test-results',{recursive:true});

async function runScenario(name,viewport,isMobile=false){
  const context=await browser.newContext({viewport,isMobile,deviceScaleFactor:1});
  const page=await context.newPage();
  const errors=[];
  page.on('pageerror',err=>errors.push(String(err?.message||err)));
  const check=async(test,label)=>{
    if(!test)throw new Error(name+': '+label);
    results.push('PASS '+name+' — '+label);
  };
  try{
    await page.goto(BASE,{waitUntil:'domcontentloaded',timeout:30000});
    await page.locator('#builderStepNav button').first().waitFor({state:'attached',timeout:15000});
    await page.locator('#builderGallery .builder-material-card').first().waitFor({timeout:15000});
    // Select facade, repeat it, then select a different finish.
    const facade=isMobile ? page.locator('#builderQuickTabs button[data-builder-step="2"]')
      : page.locator('#builderStepNav button').nth(2);
    await check(await facade.isVisible(),'Кнопка фасада видима в этом режиме');
    await facade.evaluate(el=>el.click());
    await page.waitForTimeout(100);
    await check(await page.locator('#builderGallery .builder-facade-choice').count()>=8,
      'Фасад имеет не меньше 8 вариантов');
    await check(await page.locator('#builderGallery').isVisible(),
      'Галерея фасада видима');
    await page.evaluate(()=>{
      window.__originalFacadeCard=document.querySelector('#builderGallery .builder-material-card');
    });
    await facade.evaluate(el=>el.click());
    await check(await page.evaluate(()=>window.__originalFacadeCard===
      document.querySelector('#builderGallery .builder-material-card')),
      'Повторный выбор вкладки не пересоздаёт карточки');
    const finish=page.locator('#builderGallery .builder-material-card').nth(1);
    await finish.evaluate(el=>el.click());
    await check(await page.evaluate(()=>window.__originalFacadeCard===
      document.querySelector('#builderGallery .builder-material-card')),
      'Смена отделки не перезагружает фото');
    await check(await finish.getAttribute('aria-pressed')==='true',
      'Выбранный фасад отмечен');
    await page.screenshot({path:'test-results/'+name+'-facade.png',fullPage:false});
    // WebGL engine needs to initialize before its button click listeners exist.
    await page.waitForFunction(()=>document.getElementById('modelFPS')?.textContent
      ?.includes('3D готов'),null,{timeout:30000});
    const button=page.locator('#sceneEnterInterior');
    await button.evaluate(el=>el.click());
    const picker=page.locator('#sceneRoomPicker');
    await check(await picker.isVisible(),'Панель комнат видима');
    await check(await page.locator('#sceneRoomPicker [data-room]').count()===5,
      'Пять помещений доступны');
    for(const room of ['hall','living','kitchen','bedroom','bath']){
      await page.locator('#sceneRoomPicker [data-room="'+room+'"]').evaluate(el=>el.click());
      await check(await page.locator('#sceneRoomPicker [data-room="'+room+'"]')
        .getAttribute('aria-pressed')==='true','Переключение: '+room);
    }
    // The previous smoke test passed with an entirely blank WebGL interior.
    // The scene must render in the SAME interaction frame, without waiting
    // for the idle 6 FPS loop. Inspect the actual WebGL canvas pixels.
    // A uniform clear-color frame must fail QA.
    const image=await page.locator('#sceneContainer canvas').screenshot({
      path:'test-results/'+name+'-interior-canvas.png'
    });
    const decoded=PNG.sync.read(image);
    const colors=new Set();
    for(let y=Math.floor(decoded.height*.2);y<Math.floor(decoded.height*.75);y+=13){
      for(let x=Math.floor(decoded.width*.2);x<Math.floor(decoded.width*.8);x+=13){
        const offset=(y*decoded.width+x)*4;
        colors.add((decoded.data[offset]>>4)+':'+(decoded.data[offset+1]>>4)+':'+(decoded.data[offset+2]>>4));
      }
    }
    await check(colors.size>=12,
      'В интерьере видна геометрия и материалы (различимых оттенков: '+colors.size+')');
    await page.screenshot({path:'test-results/'+name+'-interior.png',fullPage:false});
    await button.evaluate(el=>el.click());
    await check(await button.getAttribute('aria-pressed')==='false',
      'Вернуться к дому закрывает экскурсию');
    await check(await picker.isHidden(),'После возврата панель комнат скрыта');
    await check(await page.locator('#builderGallery').isVisible(),
      'Настройки фасада остались доступными');
    await check(errors.length===0,'Нет необработанных ошибок страницы'+
      (errors.length?' ('+errors.join('; ')+')':''));
  }finally{
    await context.close();
  }
}
async function runEmbeddedReturnScenario(){
  const context=await browser.newContext({viewport:{width:393,height:850},isMobile:true,deviceScaleFactor:1});
  const page=await context.newPage();
  try{
    await page.goto('http://127.0.0.1:8765/index.html',{waitUntil:'domcontentloaded',timeout:30000});
    const embedded=page.frameLocator('#interactive-home iframe');
    await embedded.locator('#sceneEnterInterior').waitFor({state:'attached',timeout:30000});
    await page.locator('[data-kaskad-open-builder]').first().evaluate(el=>el.click());
    await page.waitForTimeout(250);
    const interior=embedded.locator('#sceneEnterInterior');
    await interior.evaluate(el=>el.click());
    await embedded.locator('body.kaskad-interior-active').waitFor({timeout:10000});
    const before=await page.evaluate(()=>window.scrollY);
    await interior.evaluate(el=>el.click());
    await embedded.locator('body.kaskad-interior-active').waitFor({state:'hidden',timeout:10000});
    await page.waitForTimeout(450);
    const after=await page.evaluate(()=>window.scrollY);
    if(Math.abs(after-before)>80)throw new Error('Return scrolled the outer page: '+before+' → '+after);
    results.push('PASS embedded Android — Вернуться к дому не сбрасывает прокрутку');
    // The browser/Android Back should also leave the tour instead of
    // navigating from the 3D section to an unrelated section of the site.
    await interior.evaluate(el=>el.click());
    await embedded.locator('body.kaskad-interior-active').waitFor({timeout:10000});
    const beforeBack=await page.evaluate(()=>window.scrollY);
    await page.evaluate(()=>history.back());
    await embedded.locator('body.kaskad-interior-active').waitFor({state:'hidden',timeout:10000});
    await page.waitForTimeout(200);
    const afterBack=await page.evaluate(()=>window.scrollY);
    if(Math.abs(afterBack-beforeBack)>80)throw new Error('Android Back scrolled page: '+beforeBack+' → '+afterBack);
    results.push('PASS embedded Android — системная Назад закрывает интерьер без переноса страницы');
    await page.screenshot({path:'test-results/android-embedded-return.png',fullPage:false});
  }finally{await context.close()}
}
try{
  await runScenario('desktop',{width:1365,height:840});
  await runScenario('android',{width:393,height:850},true);
  await runEmbeddedReturnScenario();
  console.log(results.join('\n'));
  console.log('PASS: KASKAD desktop and Android facade/room regression');
}catch(error){
  console.error(results.join('\n'));
  console.error('FAIL: '+String(error?.stack||error));
  process.exitCode=1;
}finally{
  await browser.close();
}