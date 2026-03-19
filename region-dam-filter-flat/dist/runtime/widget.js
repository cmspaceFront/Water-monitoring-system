System.register(["jimu-core","jimu-core/react"],function(e,t){var r={},o={};return{setters:[function(e){r.DataRecordsSelectionChangeMessage=e.DataRecordsSelectionChangeMessage,r.DataSourceComponent=e.DataSourceComponent,r.MessageManager=e.MessageManager,r.StringSelectionChangeMessage=e.StringSelectionChangeMessage,r.css=e.css,r.getAppStore=e.getAppStore,r.jsx=e.jsx},function(e){o.useEffect=e.useEffect,o.useRef=e.useRef,o.useState=e.useState}],execute:function(){e((()=>{var e={244(e){"use strict";e.exports=r},972(e){"use strict";e.exports=o}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var i={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(i),n.d(i,{__set_webpack_public_path__:()=>f,default:()=>g});var e=n(244),t=n(972),r=function(e,t,r,o){return new(r||(r=Promise))(function(n,i){function l(e){try{s(o.next(e))}catch(e){i(e)}}function a(e){try{s(o.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(l,a)}s((o=o.apply(e,t||[])).next())})};const o={SELECTED_YEAR:"selected-year",SELECTED_DAM:"selected_dam",DAM_SORT_ORDER:"dam-sort-order",SELECTED_REGION:"selected-region"},l={displayType:"flat",showName:!0,showCountNearName:!0,showEndCount:!0,width:"",height:"",buttonWidth:"100%",buttonHeight:"auto",bgColor:"#fff",textColor:"#000",hoverBgColor:"#dbeafe",hoverTextColor:"#000",hoverBorderColor:"#2563eb",borderRadius:8,borderColor:"#e5e7eb",borderWidth:1,borderStyle:"solid",padding:16,margin:0,gap:8,fontSize:15,fontWeight:"normal",fontFamily:"inherit",lineHeight:"1.4",letterSpacing:"normal",position:"relative",defaultBgColor:"#2563eb",defaultTextColor:"#fff",defaultBorderColor:"#2563eb",activeBgColor:"#2563eb",activeTextColor:"#fff",activeBorderColor:"#2563eb"};function a(e){return Object.assign(Object.assign({},l),e)}function s(e){return localStorage.getItem(e)}function u(e,t){t&&localStorage.setItem(e,t)}function c(){try{const e=localStorage.getItem("exb_auth");if(e)try{const t=JSON.parse(e);if(t.email)return t.email;if(t.user&&t.user.email)return t.user.email;if(t.username&&t.username.includes("@"))return t.username}catch(e){}const t=Object.keys(localStorage).filter(e=>e.includes("portalApp")||e.includes("portal")||e.includes("token")||e.includes("credential"));for(const e of t)try{const t=localStorage.getItem(e),r=JSON.parse(t||"{}");if(r.email)return r.email}catch(t){console.error("🔐 Region-Dam Filter: Failed to parse key:",e,"- Error:",t.message);continue}const r=Object.keys(localStorage);for(const e of r)try{const t=localStorage.getItem(e);if(t&&(t.includes('"email"')||t.includes("farhodmf")||t.includes("@"))){const e=JSON.parse(t);if(e.email)return e.email}}catch(t){const r=localStorage.getItem(e);if(r&&r.includes("@")&&r.length<100)return r;continue}return null}catch(e){return console.error("🔐 Region-Dam Filter: Error extracting user email:",e),null}}function d(e){return e?`LOWER(allowed_us) LIKE '%${e.toLowerCase()}%'`:"1=0"}function g(n){var i,l;const[g,f]=(0,t.useState)(),[p,m]=(0,t.useState)([]),[h,y]=(0,t.useState)([]),[v,x]=(0,t.useState)("All"),[E,S]=(0,t.useState)({}),[w,b]=(0,t.useState)(null),[$,C]=(0,t.useState)(null),[D,z]=(0,t.useState)("ru"),[F,_]=(0,t.useState)("light"),[A,j]=(0,t.useState)(null),[T,I]=(0,t.useState)(!0),k=(0,t.useRef)(null),L=null===(i=n.useDataSources)||void 0===i?void 0:i[0],M=n.config,R="dark"===F&&M.darkTheme?a(Object.assign(Object.assign({},M),M.darkTheme)):a(M),{showName:O,showCountNearName:N,showEndCount:B,width:V,height:G,buttonWidth:q,buttonHeight:P,bgColor:W,textColor:H,hoverBgColor:J,hoverTextColor:Q,hoverBorderColor:Y,borderRadius:K,borderColor:U,borderWidth:X,borderStyle:Z,padding:ee,margin:te,gap:re,fontSize:oe,fontWeight:ne,fontFamily:ie,lineHeight:le,letterSpacing:ae,position:se,defaultBgColor:ue,defaultTextColor:ce,defaultBorderColor:de,activeBgColor:ge,activeTextColor:fe,activeBorderColor:pe,buttonDirection:me}=R;(0,t.useEffect)(()=>{!function(){r(this,void 0,void 0,function*(){I(!0);try{const e=yield function(e=3,t=1e3){return r(this,void 0,void 0,function*(){let r=c();if(r)return r;for(let o=1;o<=e;o++)if(yield new Promise(e=>setTimeout(e,t)),r=c(),r)return r;return console.error("🔐 Region-Dam Filter: ❌ All retry attempts exhausted, no email found"),null})}(3,1e3);j(e),e||console.error("🔐 Region-Dam Filter: ❌ Authentication failed after retries")}catch(e){console.error("🔐 Region-Dam Filter: Authentication error:",e),j(null)}finally{I(!1)}})}()},[]),(0,t.useEffect)(()=>{if(A||T)return;const e=setInterval(()=>{const t=c();t&&(j(t),clearInterval(e))},2e3),t=setTimeout(()=>{},3e4);return()=>{clearInterval(e),clearTimeout(t)}},[A,T]);const he=(t,i,l)=>r(this,void 0,void 0,function*(){const a=t===M.damField,s=t===M.regionField;if(a?(b(i),u(o.SELECTED_DAM,i)):s&&(x(i),b(null),u(o.SELECTED_DAM,null),u(o.SELECTED_REGION,i)),!g||!n.id||!A)return;let c=d(A);const f=void 0!==l?l:$;if(f&&"All"!==f){const e=M.yearField||"made_year";c+=` AND ${e} = '${f}'`}if("All"!==i){const e=`${t} = '${i.replace(/'/g,"''")}'`;c+=` AND ${e}`}if(k.current!==c){k.current=c;try{yield g.updateQueryParams({where:c},n.id),setTimeout(()=>r(this,void 0,void 0,function*(){var t,r,o,l;let a=null!==(r=null===(t=(yield g.query({where:c,outFields:["*"],returnGeometry:!0},{widgetId:n.id})).records)||void 0===t?void 0:t.filter(e=>e.getGeometry()))&&void 0!==r?r:[],s=i;if(0===a.length&&"All"!==i){let e=d(A);f&&"All"!==f&&(e+=` AND ${M.yearField||"made_year"} = '${f}'`),yield g.updateQueryParams({where:e},n.id),a=null!==(l=null===(o=(yield g.query({where:e,outFields:["*"],returnGeometry:!0},{widgetId:n.id})).records)||void 0===o?void 0:o.filter(e=>e.getGeometry()))&&void 0!==l?l:[]}if(a.length>0){g.selectRecords({records:a,widgetId:n.id});const t=new e.DataRecordsSelectionChangeMessage(n.id,a);e.MessageManager.getInstance().publishMessage(t)}const u=new e.StringSelectionChangeMessage(n.id,s);u.str=s,e.MessageManager.getInstance().publishMessage(u)}),100)}catch(e){console.error("❌ Selection error:",e)}}}),ye=e=>{C(e),b(null),u(o.SELECTED_DAM,null),x("All"),u(o.SELECTED_REGION,"All"),setTimeout(()=>{he(M.regionField,"All",e)},100)},ve=e=>{if(e&&e!==w){const t=h.find(t=>t.getFieldValue(M.damField)===e);if(t){const r=t.getFieldValue(M.regionField);x(r),b(e),he(M.damField,e)}}else!e&&w&&(b(null),x("All"),he(M.regionField,"All"))};(0,t.useEffect)(()=>{C(s(o.SELECTED_YEAR)),z(s("custom_locale")||"ru"),_(s("customTheme")||"light");const e=s(o.SELECTED_REGION);e&&x(e)},[]),(0,t.useEffect)(()=>{let e,t,r,n,i;function l(e){switch(e.key){case o.SELECTED_YEAR:ye(e.newValue);break;case o.SELECTED_DAM:ve(e.newValue);break;case"custom_locale":z(e.newValue||"ru");break;case"customTheme":_(e.newValue||"light");break;case o.SELECTED_REGION:const t=e.newValue||"All";x(t),b(null),u(o.SELECTED_DAM,null)}}return window.addEventListener("storage",l),e=setInterval(()=>{const e=s(o.SELECTED_YEAR);e!==$&&ye(e)},500),t=setInterval(()=>{const e=s(o.SELECTED_DAM);e!==w&&ve(e)},500),r=setInterval(()=>{const e=s("custom_locale")||"ru";e!==D&&z(e)},500),n=setInterval(()=>{const e=s("customTheme")||"light";e!==F&&_(e)},500),i=setInterval(()=>{const e=s(o.SELECTED_REGION);e&&e!==v&&(x(e),w&&(b(null),u(o.SELECTED_DAM,null)))},500),()=>{window.removeEventListener("storage",l),clearInterval(e),clearInterval(t),clearInterval(void 0),clearInterval(r),clearInterval(n),clearInterval(i)}},[$,w,D,F,v,M.damField,M.regionField]),(0,t.useEffect)(()=>{function e(){u(o.SELECTED_DAM,null),x("All"),he(M.regionField,"All")}return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)},[M.regionField]);const xe=(0,t.useRef)(!1);(0,t.useEffect)(()=>{if(xe.current)return;const e=s(o.SELECTED_DAM);e&&e!==w&&h.length>0&&(xe.current=!0,ve(e))},[h.length,w]),(0,t.useEffect)(()=>{if(!A)return y([]),void S({});const e=M.yearField||"made_year",t=function(e,t){return t?e.filter(e=>function(e,t){if(!t||!e)return!1;const r=e.getFieldValue("allowed_us");return!!r&&r.split(",").map(e=>e.trim().toLowerCase()).includes(t.toLowerCase())}(e,t)):[]}(p,A),r=function(e,t,r){return r&&"All"!==r&&t?e.filter(e=>{const o=e.getFieldValue(t);return o&&o.toString()===r}):e}(t,e,$);y(r);const o=M.regionField,n=M.damField,i=r.reduce((e,t)=>{const r=t.getFieldValue(o),i=t.getFieldValue(n);return r&&i&&(e[r]||(e[r]=new Set),e[r].add(i)),e},{}),l=Object.entries(i).reduce((e,[t,r])=>(e[t]=r.size,e),{});S(l)},[p,$,A,M.yearField,M.regionField]),(0,t.useEffect)(()=>{g&&A&&!T&&Ee()},[g,A,T]),(0,t.useEffect)(()=>{var e,t;const r=null===(e=n.stateProps)||void 0===e?void 0:e.queryString;if(r){const e=r.match(/region\s*=\s*'(.+?)'/i),o=null!==(t=null==e?void 0:e[1])&&void 0!==t?t:"All";x(o)}},[null===(l=n.stateProps)||void 0===l?void 0:l.queryString]),(0,t.useEffect)(()=>{const t=(0,e.getAppStore)().getState().appConfig.theme;document.body.setAttribute("data-theme","themes/darkCustom/"===t?"dark":"light")},[]);const Ee=()=>r(this,void 0,void 0,function*(){const e=M.regionField,t=M.damField,r=M.yearField||"made_year";if(!g||!n.id||!A)return;const o={where:d(A),outFields:[e,t,r,"title_ru","title_uz_c","title_uz_l","allowed_us",...M.localField?[M.localField]:[]],returnGeometry:!0};try{const e=yield g.query(o,{widgetId:n.id});m(e.records||[])}catch(e){console.error("❌ Load failed:",e)}}),Se={"Қорақалпоғистон Республикаси":{ru:"Республика Каракалпакстан",uz:"Qoraqalpogʻiston Respublikasi",uzcryl:"Қорақалпоғистон Республикаси"},"Андижон вилояти":{ru:"Андижанская область",uz:"Andijon viloyati",uzcryl:"Андижон вилояти"},"Бухоро вилояти":{ru:"Бухарская область",uz:"Buxoro viloyati",uzcryl:"Бухоро вилояти"},"Фарғона вилояти":{ru:"Ферганская область",uz:"Fargʻona viloyati",uzcryl:"Фарғона вилояти"},"Жиззах вилояти":{ru:"Джизакская область",uz:"Jizzax viloyati",uzcryl:"Жиззах вилояти"},"Хоразм вилояти":{ru:"Хорезмская область",uz:"Xorazm viloyati",uzcryl:"Хоразм вилояти"},"Наманган вилояти":{ru:"Наманганская область",uz:"Namangan viloyati",uzcryl:"Наманган вилояти"},"Навоий вилояти":{ru:"Навоийская область",uz:"Navoiy viloyati",uzcryl:"Навоий вилояти"},"Қашқадарё вилояти":{ru:"Кашкадарьинская область",uz:"Qashqadaryo viloyati",uzcryl:"Қашқадарё вилояти"},"Самарқанд вилояти":{ru:"Самаркандская область",uz:"Samarqand viloyati",uzcryl:"Самарқанд вилояти"},"Сирдарё вилояти":{ru:"Сырдарьинская область",uz:"Sirdaryo viloyati",uzcryl:"Сирдарё вилояти"},"Сурхондарё вилояти":{ru:"Сурхандарьинская область",uz:"Surxondaryo viloyati",uzcryl:"Сурхондарё вилояти"},"Тошкент вилояти":{ru:"Ташкентская область",uz:"Toshkent viloyati",uzcryl:"Тошкент вилояти"},"Тошкент шаҳри":{ru:"Город Ташкент",uz:"Toshkent shahri",uzcryl:"Тошкент шаҳри"}},we=`\n    border-radius: ${K}px;\n    width: ${q}px;\n    height: ${P}px;\n    transition: all 0.2s;\n    &:hover {\n      border-color: ${Y};\n      background: ${J};\n      color: ${Q};\n    }\n  `;return T?(0,e.jsx)("div",{className:"jimu-widget",css:e.css`
          background: ${W};
          color: ${H};
          width: ${V}px;
          height: ${G}px;
          padding: ${ee}px;
          margin: ${te}px;
          position: ${se};
          font-size: ${oe}px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        `},(0,e.jsx)("div",null,(0,e.jsx)("p",{style:{margin:"0 0 8px 0",fontWeight:600}},"ru"===D?"Проверка авторизации...":"uz"===D?"Avtorizatsiya tekshirilmoqda...":"Авторизация текширилмоқда..."),(0,e.jsx)("small",{style:{opacity:.7}},"ru"===D?"Пожалуйста, подождите":"uz"===D?"Iltimos kuting":"Илтимос кутинг"))):A?(0,e.jsx)("div",{className:"jimu-widget",css:e.css`
        background: ${W};
        color: ${H};
        width: ${V}px;
        height: ${G}px;
        padding: ${ee}px;
        margin: ${te}px;
        position: ${se};
        font-size: ${oe}px;
        font-weight: ${ne};
        line-height: ${"number"==typeof le?le:`'${le}'`};
        letter-spacing: ${"number"==typeof ae?`${ae}px`:ae};
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: ${re}px;
      `},(0,e.jsx)(e.DataSourceComponent,{useDataSource:L,widgetId:n.id,onDataSourceCreated:e=>f(e)}),(0,e.jsx)("div",{css:e.css`
        display: flex;
        flex-direction: ${me||"column"};
        gap: ${re}px;
        align-items: ${"row"===me?"center":"stretch"};
        ${"row"===me?"overflow-x: auto; scrollbar-width: none; -ms-overflow-style: none; &::-webkit-scrollbar { display: none; }":""}
      `},Object.keys(E).length>1&&(0,e.jsx)("div",{css:e.css`
            ${we}
            padding: 10px 14px;
            font-weight: 500;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: ${"All"===v&&null===w?fe:ce};
            background: ${"All"===v&&null===w?ge:ue};
            border: ${X}px ${Z} ${"All"===v&&null===w?pe:de};
            cursor: pointer;
            width: ${"row"===me?"auto":q};
            height: ${P};
            white-space: ${"row"===me?"nowrap":"normal"};
            margin-right: ${"row"===me?"8px":"0"};
          `,onClick:()=>he(M.regionField,"All")},(0,e.jsx)("span",null,"ru"===D?"Все области":"uz"===D?"Barcha hududlar":"Барча ҳудудлар"),(0,e.jsx)("span",{css:e.css`margin-left: 12px;`},(()=>{const e=new Set;return h.forEach(t=>{const r=t.getFieldValue(M.damField);r&&e.add(r)}),e.size})())),Object.entries(E).map(([t,r],o)=>{const n=v===t&&null===w,i=M.regionField,l=M.damField,a=h.filter(e=>e.getFieldValue(i)===t).reduce((e,t)=>{const r=t.getFieldValue(l);return r&&!e.has(r)&&e.add(r),e},new Set).size,s=function(e){const t=Se[e];return t&&t[D]||e}(t);return(0,e.jsx)("div",{key:o,css:e.css`
                display: flex;
                flex-direction: column;
                gap: ${re}px;
              `},(0,e.jsx)("div",{onClick:()=>he(i,t),css:e.css`
                  ${we}
                  border: ${X}px ${Z} ${n?pe:de};
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 10px 14px;
                  background: ${n?ge:ue};
                  color: ${n?fe:ce};
                  cursor: pointer;
                  width: ${"row"===me?"auto":q};
                  height: ${P};
                  white-space: ${"row"===me?"nowrap":"normal"};
                  margin-right: ${"row"===me?"8px":"0"};
                `},(0,e.jsx)("span",null,O&&s,N&&(0,e.jsx)("span",{css:e.css`margin-left: 12px; opacity: 0.6;`},"(",a,")")),(0,e.jsx)("span",{css:e.css`display: flex; align-items: center; gap: 6px;`},B&&(0,e.jsx)("span",{css:e.css`font-weight: 600; margin-left: 12px;`},a))))}))):(0,e.jsx)("div",{className:"jimu-widget",css:e.css`
          background: ${W};
          color: ${H};
          width: ${V}px;
          height: ${G}px;
          padding: ${ee}px;
          margin: ${te}px;
          position: ${se};
          font-size: ${oe}px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        `},(0,e.jsx)("div",null,(0,e.jsx)("p",{style:{margin:"0 0 8px 0",fontWeight:600}},"ru"===D?"Пользователь не авторизован":"uz"===D?"Foydalanuvchi avtorizatsiya qilinmagan":"Фойдаланувчи авторизация қилинмаган"),(0,e.jsx)("small",{style:{opacity:.7}},"ru"===D?"Войдите в систему для доступа к данным":"uz"===D?"Maʼlumotlarga kirish uchun tizimga kiring":"Маълумотларга кириш учун тизимга киринг")))}function f(e){n.p=e}})(),i})())}}});