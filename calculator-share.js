/* КАСКАД — переносимый предварительный расчёт, без регистрации и персональных данных.
   Пользователь может скопировать текст + ссылку, которая восстанавливает тип и площадь.
   Никаких данных на сервер не отправляем. */
(function () {
  'use strict';
  function init() {
    var anchor=document.getElementById('estimateBtn');
    var area=document.getElementById('area');
    var section=document.getElementById('calculator');
    if (!anchor||!area||!section||document.getElementById('kaskadEstimateCopy'))return;
    var row=document.createElement('div');
    row.className='kaskad-estimate-share';
    row.innerHTML='<button type="button" id="kaskadEstimateCopy" class="kaskad-estimate-copy" aria-label="Скопировать предварительный расчёт с ссылкой"> <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg> Сохранить расчёт</button><span id="kaskadEstimateCopyStatus" role="status" aria-live="polite"></span>';
    anchor.insertAdjacentElement('afterend',row);
    var style=document.createElement('style');
    style.textContent='.kaskad-estimate-share{display:flex;align-items:center;flex-wrap:wrap;gap:6px 12px;margin:9px 0 0}.kaskad-estimate-copy{display:inline-flex;align-items:center;gap:7px;padding:7px 0;border:0;background:transparent;color:inherit;text-decoration:underline;text-underline-offset:3px;font:700 12px/1.4 inherit;cursor:pointer}.kaskad-estimate-copy:focus-visible{outline:2px solid currentColor;outline-offset:4px}#kaskadEstimateCopyStatus{font:600 11px/1.5 system-ui,sans-serif;opacity:.86}.kaskad-estimate-share [hidden]{display:none!important}';
    document.head.append(style);
    function selectKind() {
      var active=document.querySelector('#calcType [data-kind].active');
      return active&&active.dataset.kind==='house'?'house':'renovation';
    }
    function restore() {
      var u=new URL(window.location.href),kind=u.searchParams.get('calc'),numeric=u.searchParams.get('area');
      if(!['house','renovation'].includes(kind)||!/^\d{1,3}$/.test(numeric||''))return;
      var btn=document.querySelector('#calcType [data-kind="'+kind+'"]');
      if(!btn)return;
      btn.click();
      var n=Number(numeric),min=Number(area.min),max=Number(area.max),step=Number(area.step)||1;
      n=Math.min(max,Math.max(min,n));
      area.value=String(min+Math.round((n-min)/step)*step);
      area.dispatchEvent(new Event('input',{bubbles:true}));
    }
    restore();
    async function copy(value) {
      try{
        if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(value);return true;}
      }catch(e){}
      var ta=document.createElement('textarea');
      ta.value=value;ta.setAttribute('readonly','');
      ta.style.cssText='position:fixed;left:-9999px;top:0';
      document.body.appendChild(ta);ta.focus();ta.select();
      try{return document.execCommand('copy');}catch(e){return false;}finally{ta.remove();}
    }
    row.querySelector('button').addEventListener('click',async function() {
      var kind=selectKind(),m2=Number(area.value);
      var u=new URL(window.location.href);
      u.search='';u.searchParams.set('calc',kind);u.searchParams.set('area',String(m2));u.hash='calculator';
      var amount=document.getElementById('calcMoney').textContent.trim();
      var rate=document.getElementById('calcRate').textContent.trim();
      var text='КАСКАД — ориентировочная стоимость работ\nОбъект: '+(kind==='house'?'Строительство дома':'Ремонт')+'\nПлощадь: '+m2+' м²\nСтоимость работ: '+amount+'\nТарифный ориентир: '+rate+'\nМатериалы и дополнительные расходы не включены. Сумма предварительная и не является офертой. Точный расчёт — после согласования сметы.\n\nОткрыть этот расчёт:\n'+u.toString();
      var copied=await copy(text);
      var status=document.getElementById('kaskadEstimateCopyStatus');
      if(copied){status.textContent='Скопировано вместе со ссылкой';return;}
      status.textContent='Автокопирование недоступно. Текст показан ниже.';
      var details=document.getElementById('kaskadEstimateCopyFallback');
      if(!details){details=document.createElement('textarea');details.id='kaskadEstimateCopyFallback';details.readOnly=true;details.rows=5;details.style.cssText='width:100%;min-height:100px;margin-top:7px;padding:8px;border-radius:8px;font:12px/1.5 system-ui';row.insertAdjacentElement('afterend',details);}
      details.value=text;details.focus();details.select();
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();