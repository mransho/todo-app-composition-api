(function(){"use strict";var e={5373:function(e,t,n){var o=n(5130),r=n(6768),i=n(144),u=n(4232),a=n(1387);const c={class:"comp"};var f={__name:"MyNav",setup(e){const t=(0,a.rd)();return(e,n)=>{const o=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",c,[(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)((0,i.R1)(t).options.routes,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.name},[(0,r.bF)(o,{to:{name:e.name}},{default:(0,r.k6)((()=>[(0,r.eW)((0,u.v_)(e.meta.title.toUpperCase()),1)])),_:2},1032,["to"])])))),128))])])}}},s=n(1241);const l=(0,s.A)(f,[["__scopeId","data-v-869e1b42"]]);var d=l,p={__name:"App",setup(e){return(e,t)=>{const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)((0,i.R1)(d)),(0,r.bF)(n)],64)}}};const m=p;var v=m;const h=[{name:"home",path:"/",component:()=>n.e(1).then(n.bind(n,7001)),meta:{title:"home"}},{name:"ShowTodos",path:"/Show-Todos",component:()=>n.e(122).then(n.bind(n,7122)),meta:{title:"Show Todos"}}],b=(0,a.aE)({history:(0,a.LA)(),routes:h});b.beforeEach(((e,t,n)=>{document.title=e.meta.title,n()}));var g=b,y=n(595);const _=(0,y.A)(),k=(0,o.Ef)(v);k.provide("emitter",_).use(g).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var u=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var f=r();void 0!==f&&(t=f)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{1:"35c5be4d",122:"f34b02be"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{1:"dac6e95f",122:"60b70fed"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="todo-app-composition-api:";n.l=function(o,r,i,u){if(e[o])e[o].push(r);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=o),e[o]=[r];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/todo-app-composition-api/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,r,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",n.nc&&(u.nonce=n.nc);var a=function(n){if(u.onerror=u.onload=null,"load"===n.type)r();else{var o=n&&n.type,a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+a+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=a,u.parentNode&&u.parentNode.removeChild(u),i(c)}};return u.onerror=u.onload=a,u.href=t,o?o.parentNode.insertBefore(u,o.nextSibling):document.head.appendChild(u),u},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){r=u[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var u=n.miniCssF(o),a=n.p+u;if(t(u,a))return r();e(o,a,null,r,i)}))},r={524:0};n.f.miniCss=function(e,t){var n={1:1,122:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var u=n.p+n.u(t),a=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,u=o[0],a=o[1],c=o[2],f=0;if(u.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var s=c(n)}for(t&&t(o);f<u.length;f++)i=u[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(s)},o=self["webpackChunktodo_app_composition_api"]=self["webpackChunktodo_app_composition_api"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(5373)}));o=n.O(o)})();
//# sourceMappingURL=app.8d060596.js.map