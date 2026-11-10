(function () {
  'use strict';
  const originalFetch = window.fetch.bind(window);
  const base = new URL('./', document.currentScript.src);
  const demoResponse = (payload, status=200) => Promise.resolve(new Response(JSON.stringify(payload), {
    status,headers:{'Content-Type':'application/json;charset=utf-8'}
  }));
  window.fetch = function(input, options) {
    let url;
    try { url = new URL(input instanceof Request ? input.url : String(input), document.baseURI); }
    catch { return originalFetch(input,options); }
    if (url.origin===location.origin && url.pathname.startsWith('/api/')) {
      const p = url.pathname;
      const method=(options?.method || (input instanceof Request && input.method) || 'GET').toUpperCase();
      if (method==='GET' && p==='/api/bootstrap')
        return demoResponse({csrf:'demo-only',user:null,telegram:false,turnstile_site:'',mode:'local',crm:false,llm:false});
      if (method==='GET' && p==='/api/legal') return originalFetch(new URL('demo-legal.json',base),options);
      if (method==='GET' && p==='/api/catalog') return originalFetch(new URL('smart/catalog.json',base),options);
      return demoResponse({error:'Это демонстрационный сайт. Отправка заявок и вход в кабинет отключены.'},403);
    }
    return originalFetch(input, options);
  };
  const requestForms = '#smartLeadForm,#estimateForm,#constructionForm';
  const fieldLabels = {
    name:'Имя',phone:'Телефон',comment:'Комментарий',client_name:'Имя',client_phone:'Телефон',
    room:'Помещение',level:'Уровень работ',area:'Площадь, м²',height:'Высота потолков, м',
    electric:'Электрика',condition:'Состояние',city:'Город',materials:'Материалы',
    start:'Начало работ',budget:'Бюджет, ₽',notes:'Пожелания',
    contact_method:'Удобный способ связи',contact_time:'Удобное время',
    type:'Тип объекта',floors:'Этажность',bedrooms:'Спальни',wall:'Материал стен',
    scope:'Состав работ',plot:'Участок',project:'Проект',extras:'Дополнительно'
  };
  document.addEventListener('submit',function(e){
    const form=e.target;
    if(form?.matches(requestForms)){
      e.preventDefault();e.stopImmediatePropagation();
      if(!form.reportValidity())return;
      const status=form.querySelector('.request-status,.status,[role=status]');
      const values=new FormData(form);
      if(String(values.get('website')||'').trim()){if(status)status.textContent='Проверьте заполнение формы.';return;}
      const direction=form.id==='estimateForm'?'Ремонт':form.id==='constructionForm'?'Строительство':'Предварительная заявка';
      const body=['ЗАЯВКА НА ПРЕДВАРИТЕЛЬНЫЙ РАСЧЁТ — КАСКАД','Направление: '+direction,''];
      for(const [key,value] of values.entries()){
        if(['website','agreement','consent','turnstile_token'].includes(key))continue;
        const v=String(value||'').trim();
        if(v)body.push((fieldLabels[key]||key)+': '+v);
      }
      body.push('','Согласие на обработку персональных данных: отмечено при заполнении формы.');
      if(window.KaskadEmail&&typeof window.KaskadEmail.open==='function'){
        window.KaskadEmail.open({subject:'КАСКАД — '+direction.toLowerCase(),body:body.join('\n').slice(0,4400)});
        if(status)status.textContent='Письмо подготовлено. Для поступления заявки подтвердите отправку в своей почте.';
      }else if(status)status.textContent='Не удалось открыть редактор письма. Попробуйте ещё раз или позвоните нам.';
      return;
    }
    if(form?.matches('#loginForm,#settingsForm')){
      e.preventDefault();e.stopImmediatePropagation();
      const status=form.querySelector('.request-status,.status,[role=status]');
      if(status) status.textContent='Демонстрационный режим: вход и настройки пока не подключены.';
    }
  },true);
  document.addEventListener('DOMContentLoaded',()=>{
    const message='ПРЕДПРОСМОТР: серверный приём заявок пока не подключён. Заполненные обращения открываются готовым письмом, которое нужно отправить из своей почты.';
    const notice=document.createElement('div');
    notice.textContent=message;
    notice.setAttribute('role','status');
    notice.style.cssText='position:relative;z-index:100;text-align:center;background:#fff1df;color:#653e22;font:700 11px/1.5 system-ui,sans-serif;padding:8px 12px;border-bottom:1px solid #dfbc98';
    document.body.prepend(notice);
    document.querySelectorAll('form').forEach(f=>{if(f.id!=='leadForm')f.setAttribute('data-demo-only','true')});
  });
})();
