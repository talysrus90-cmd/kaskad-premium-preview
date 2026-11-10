/* КАСКАД — письмо без первого системного диалога Android.
   Ввод на странице; пользователь выбирает свою почту один раз.
   Сайт НЕ отправляет письмо самостоятельно, не хранит содержимое и не узнаёт аккаунты.
   Передача только по прямому действию пользователя в его почтовое приложение. */
(function () {
  'use strict';
  var TO = 'kaskad123ai@mail.ru';
  var PREFIX = 'kaskad-email-service-v1';
  var providers = [
    {id:'gmail',label:'Gmail',package:'com.google.android.gm'},
    {id:'mailru',label:'Mail.ru',package:'ru.mail.mailapp'},
    {id:'outlook',label:'Outlook',package:'com.microsoft.office.outlook'},
    {id:'yandex',label:'Яндекс Почта',package:'ru.yandex.mail'},
    {id:'other',label:'Другая почта',package:''}
  ];
  var chosen = null, root = null, subjectField = null, bodyField = null, mainBtn = null, providerList = null, help = null;
  function preferred() {
    try {var s = localStorage.getItem(PREFIX);return providers.some(function(p){return p.id===s;})?s:null;}catch(e){return null;}
  }
  function remember(id) { try {localStorage.setItem(PREFIX,id);}catch(e){} }
  function getProvider(id) { return providers.find(function(p){return p.id===id;}); }
  function makeMailto(subject,body) {
    return 'mailto:'+TO+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  }
  function webURL(id,subject,body) {
    var to=encodeURIComponent(TO),su=encodeURIComponent(subject),text=encodeURIComponent(body);
    if(id==='gmail') return 'https://mail.google.com/mail/?view=cm&fs=1&to='+to+'&su='+su+'&body='+text;
    if(id==='mailru') return 'https://e.mail.ru/compose/?to='+to+'&subject='+su+'&body='+text;
    if(id==='outlook') return 'https://outlook.live.com/mail/0/deeplink/compose?to='+to+'&subject='+su+'&body='+text;
    if(id==='yandex') return 'https://mail.yandex.ru/compose?to='+to+'&subject='+su+'&body='+text;
    return makeMailto(subject,body);
  }
  function linkFor(id,subject,body) {
    if(id==='other') return makeMailto(subject,body);
    var web = webURL(id,subject,body);
    var ua = navigator.userAgent || '';
    // Chrome (including Android Custom Tabs) can hand a mailto Intent directly
    // to the chosen app, rather than let Android offer an unrelated chooser.
    if(/Android/i.test(ua)&&/Chrome\/\d+/i.test(ua)&&!/Firefox|FxiOS|OPR\//i.test(ua)) {
      var mailto = makeMailto(subject,body);
      return 'intent:'+mailto.slice('mailto:'.length)+
        '#Intent;scheme=mailto;action=android.intent.action.SENDTO;package='+getProvider(id).package+
        ';S.browser_fallback_url='+encodeURIComponent(web)+';end';
    }
    return web;
  }
  function contentFor(a) {
    var subject='Вопрос с сайта КАСКАД',body='';
    try{
      var href=a.getAttribute('href')||'';
      var query=href.includes('?')?href.slice(href.indexOf('?')+1):'';
      var params=new URLSearchParams(query);
      if(params.get('subject'))subject=params.get('subject');
      if(params.get('body'))body=params.get('body');
    }catch(e){}
    return {subject:subject,body:body};
  }
  function launch(id) {
    if(!subjectField.value.trim()||!bodyField.value.trim()){
      if(!subjectField.value.trim())subjectField.focus();else bodyField.focus();
      help.textContent='Напишите тему и текст письма.';
      return;
    }
    remember(id);
    chosen=id;
    var dest=linkFor(id,subjectField.value.trim(),bodyField.value.trim());
    help.textContent='Открываем почту. Письмо будет отправлено только после вашего нажатия «Отправить» в почтовом приложении.';
    // Direct navigation on user gesture keeps external-app intents supported.
    window.location.href=dest;
  }
  function syncOptions() {
    var p=getProvider(chosen);
    if(p){
      mainBtn.hidden=false;
      mainBtn.textContent='Продолжить в '+p.label+' ↗';
      providerList.hidden=true;
      root.querySelector('#kaskadMailChange').hidden=false;
    }else{
      mainBtn.hidden=true;
      providerList.hidden=false;
      root.querySelector('#kaskadMailChange').hidden=true;
    }
  }
  function openDraft(draft) {
    if(!root)initialize();
    chosen=preferred();
    subjectField.value=draft&&draft.subject || 'Вопрос с сайта КАСКАД';
    bodyField.value=draft&&draft.body || '';
    help.textContent='Адрес получателя уже указан. Выберите вашу почту один раз; после перехода нажмите «Отправить» в почтовом приложении.';
    syncOptions();
    if(typeof root.showModal==='function') root.showModal(); else root.setAttribute('open','');
    setTimeout(function(){bodyField.focus({preventScroll:true});},60);
  }
  function initialize() {
    if(root)return;
    var css=document.createElement('style');
    css.textContent=
      '#kaskadMailDlg{border:0;padding:0;max-width:min(510px,calc(100vw - 28px));width:100%;max-height:min(90dvh,850px);overflow:auto;border-radius:20px;background:#fdfbf6;color:#263d32;box-shadow:0 22px 65px rgba(12,27,21,.24);font:inherit}'+
      '#kaskadMailDlg::backdrop{background:rgba(11,22,18,.65)}'+
      '#kaskadMailDlg .km-inner{padding:26px 24px 22px}'+
      '#kaskadMailDlg h2{font-size:24px;line-height:1.25;margin:0 35px 8px 0;font-family:inherit}'+
      '#kaskadMailDlg p{font-size:13px;line-height:1.6;color:#53665b;margin:6px 0 14px}'+
      '#kaskadMailDlg label{display:block;margin:12px 0 6px;font-size:13px;font-weight:700}'+
      '#kaskadMailDlg input,#kaskadMailDlg textarea{font:inherit;font-size:16px;color:#24382e;background:#fff;width:100%;border:1px solid #cdd9cc;border-radius:10px;padding:13px 14px;box-sizing:border-box;outline-offset:3px}'+
      '#kaskadMailDlg textarea{min-height:135px;resize:vertical}'+
      '#kaskadMailDlg .km-to{display:block;font-size:14px;color:#315943;font-weight:750;overflow-wrap:anywhere}'+
      '#kaskadMailDlg .km-close{position:absolute;right:16px;top:13px;border:0;border-radius:10px;background:#ebeee6;color:#304638;font-size:25px;line-height:1;padding:5px 11px;cursor:pointer}'+
      '#kaskadMailDlg .km-action{width:100%;min-height:50px;background:#244c38;color:#fff;border:0;border-radius:10px;cursor:pointer;font-size:14px;font-weight:700;line-height:1.4;font-family:inherit;padding:12px 14px;box-sizing:border-box;margin-top:10px}'+
      '#kaskadMailDlg .km-options{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:12px}'+
      '#kaskadMailDlg .km-options button{min-height:49px;background:#e9f0e8;color:#264938;border:1px solid #c9dac9;border-radius:10px;font-size:13px;font-weight:700;line-height:1.25;font-family:inherit;padding:10px;cursor:pointer}'+
      '#kaskadMailDlg .km-options button:last-child{grid-column:1/-1}'+
      '#kaskadMailDlg .km-change{display:block;background:none;border:0;color:#315d46;text-decoration:underline;text-underline-offset:3px;font-size:12px;font-weight:700;line-height:1.5;font-family:inherit;cursor:pointer;margin:12px auto 0}'+
      '#kaskadMailDlg .km-note{font-size:12px!important;margin-top:12px!important;color:#61766a!important}'+
      '#kaskadMailDlg [hidden]{display:none!important}'+
      '@media(max-width:420px){#kaskadMailDlg .km-inner{padding:23px 17px 17px}#kaskadMailDlg h2{font-size:21px}}';
    document.head.appendChild(css);
    root=document.createElement('dialog');root.id='kaskadMailDlg';root.setAttribute('aria-labelledby','kaskadMailTitle');
    root.innerHTML=
      '<div class="km-inner"><button id="kaskadMailClose" class="km-close" aria-label="Закрыть письмо" type="button">×</button>'+
      '<h2 id="kaskadMailTitle">Написать в КАСКАД</h2>'+
      '<p>Напишите письмо здесь. Окно выбора приложений Android не появится при открытии этой формы.</p>'+
      '<div class="km-to">Кому: '+TO+'</div>'+
      '<label for="kaskadMailSubject">Тема</label><input id="kaskadMailSubject" maxlength="180" autocomplete="off">'+
      '<label for="kaskadMailText">Ваше письмо</label><textarea id="kaskadMailText" maxlength="4500" placeholder="Здравствуйте! Хочу узнать о строительстве или ремонте…"></textarea>'+
      '<button class="km-action" id="kaskadMailSend" type="button" hidden>Продолжить в почте ↗</button>'+
      '<div id="kaskadMailProviders"><p><strong>Выберите свою почту:</strong></p><div class="km-options" id="kaskadMailOptions"></div></div>'+
      '<button type="button" class="km-change" id="kaskadMailChange" hidden>Выбрать другую почту</button>'+
      '<p id="kaskadMailHelp" class="km-note" role="status" aria-live="polite"></p></div>';
    document.body.appendChild(root);
    subjectField=root.querySelector('#kaskadMailSubject');
    bodyField=root.querySelector('#kaskadMailText');
    mainBtn=root.querySelector('#kaskadMailSend');
    providerList=root.querySelector('#kaskadMailProviders');
    help=root.querySelector('#kaskadMailHelp');
    var options=root.querySelector('#kaskadMailOptions');
    providers.forEach(function(p){
      var btn=document.createElement('button');btn.type='button';btn.textContent=p.label;
      btn.addEventListener('click',function(){launch(p.id);});options.appendChild(btn);
    });
    mainBtn.addEventListener('click',function(){if(chosen)launch(chosen);});
    root.querySelector('#kaskadMailChange').addEventListener('click',function(){chosen=null;syncOptions();});
    root.querySelector('#kaskadMailClose').addEventListener('click',function(){root.close();});
    root.addEventListener('click',function(e){if(e.target===root)root.close();});
  }
  window.KaskadEmail={open:openDraft};
  document.addEventListener('click',function(event){
    var a=event.target&&event.target.closest&&event.target.closest('a[href^="mailto:kaskad123ai@mail.ru"]');
    if(!a)return;
    event.preventDefault();
    openDraft(contentFor(a));
  });
})();