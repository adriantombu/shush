!function(e){var r={};function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,r){if(1&r&&(e=s(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)s.d(t,n,function(r){return e[r]}.bind(null,n));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="",s(s.s=2)}([function(e,r,s){var t,n,a;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,n=[e],void 0===(a="function"==typeof(t=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const r="The message port closed before a response was received.",s="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",t=e=>{const t={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(t).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class n extends WeakMap{constructor(e,r){super(r),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const a=(r,s)=>(...t)=>{e.runtime.lastError?r.reject(e.runtime.lastError):s.singleCallbackArg||t.length<=1&&!1!==s.singleCallbackArg?r.resolve(t[0]):r.resolve(t)},g=e=>1==e?"argument":"arguments",o=(e,r,s)=>new Proxy(r,{apply:(r,t,n)=>s.call(t,e,...n)});let m=Function.call.bind(Object.prototype.hasOwnProperty);const i=(e,r={},s={})=>{let t=Object.create(null),n={has:(r,s)=>s in e||s in t,get(n,l,A){if(l in t)return t[l];if(!(l in e))return;let c=e[l];if("function"==typeof c)if("function"==typeof r[l])c=o(e,e[l],r[l]);else if(m(s,l)){let r=((e,r)=>function(s,...t){if(t.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${g(r.minArgs)} for ${e}(), got ${t.length}`);if(t.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${g(r.maxArgs)} for ${e}(), got ${t.length}`);return new Promise((n,g)=>{if(r.fallbackToNoCallback)try{s[e](...t,a({resolve:n,reject:g},r))}catch(a){console.warn(`${e} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",a),s[e](...t),r.fallbackToNoCallback=!1,r.noCallback=!0,n()}else r.noCallback?(s[e](...t),n()):s[e](...t,a({resolve:n,reject:g},r))})})(l,s[l]);c=o(e,e[l],r)}else c=c.bind(e);else if("object"==typeof c&&null!==c&&(m(r,l)||m(s,l)))c=i(c,r[l],s[l]);else{if(!m(s,"*"))return Object.defineProperty(t,l,{configurable:!0,enumerable:!0,get:()=>e[l],set(r){e[l]=r}}),c;c=i(c,r[l],s["*"])}return t[l]=c,c},set:(r,s,n,a)=>(s in t?t[s]=n:e[s]=n,!0),defineProperty:(e,r,s)=>Reflect.defineProperty(t,r,s),deleteProperty:(e,r)=>Reflect.deleteProperty(t,r)},l=Object.create(e);return new Proxy(l,n)},l=e=>({addListener(r,s,...t){r.addListener(e.get(s),...t)},hasListener:(r,s)=>r.hasListener(e.get(s)),removeListener(r,s){r.removeListener(e.get(s))}});let A=!1;const c=new n(e=>"function"!=typeof e?e:function(r,t,n){let a,g,o=!1,m=new Promise(e=>{a=function(r){A||(console.warn(s,(new Error).stack),A=!0),o=!0,e(r)}});try{g=e(r,t,a)}catch(e){g=Promise.reject(e)}const i=!0!==g&&(l=g)&&"object"==typeof l&&"function"==typeof l.then;var l;if(!0!==g&&!i&&!o)return!1;const c=e=>{e.then(e=>{n(e)},e=>{let r;r=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",n({__mozWebExtensionPolyfillReject__:!0,message:r})}).catch(e=>{console.error("Failed to send onMessage rejected reply",e)})};return c(i?g:m),!0}),d=({reject:s,resolve:t},n)=>{e.runtime.lastError?e.runtime.lastError.message===r?t():s(e.runtime.lastError):n&&n.__mozWebExtensionPolyfillReject__?s(new Error(n.message)):t(n)},x=(e,r,s,...t)=>{if(t.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${g(r.minArgs)} for ${e}(), got ${t.length}`);if(t.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${g(r.maxArgs)} for ${e}(), got ${t.length}`);return new Promise((e,r)=>{const n=d.bind(null,{resolve:e,reject:r});t.push(n),s.sendMessage(...t)})},u={runtime:{onMessage:l(c),onMessageExternal:l(c),sendMessage:x.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:x.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},f={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return t.privacy={network:{"*":f},services:{"*":f},websites:{"*":f}},i(e,u,t)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=t(chrome)}else e.exports=browser})?t.apply(r,n):t)||(e.exports=a)},,function(e,r,s){e.exports=s(3)},function(e,r,s){"use strict";var t,n,a,g=this&&this.__awaiter||function(e,r,s,t){return new(s||(s=Promise))((function(n,a){function g(e){try{m(t.next(e))}catch(e){a(e)}}function o(e){try{m(t.throw(e))}catch(e){a(e)}}function m(e){var r;e.done?n(e.value):(r=e.value,r instanceof s?r:new s((function(e){e(r)}))).then(g,o)}m((t=t.apply(e,r||[])).next())}))};const o=s(0),m=e=>g(void 0,void 0,void 0,(function*(){const r=e.currentTarget,s=((null==r?void 0:r.getAttribute("data-value"))||"").toLowerCase().trim();""!==s&&(yield i(s,"delete"),window.location.reload())})),i=(e,r)=>new Promise(s=>{o.storage.local.get().then(t=>{let n=t.words||new Set;"add"===r?n.add(e):n.delete(e),o.storage.local.set({words:n}).then(s)})});document.addEventListener("DOMContentLoaded",()=>{o.storage.local.get().then(e=>{var r;const s=e.words||new Set;for(const e of s){const s=document.createElement("input");s.type="button",s.value="x",s.classList.add("delete"),s.setAttribute("data-value",e);const t=document.createElement("span");t.textContent=e;const n=document.createElement("li");n.appendChild(s),n.appendChild(t),null===(r=document.getElementById("words"))||void 0===r||r.append(n),s.addEventListener("click",m)}})}),null===(t=document.getElementById("add"))||void 0===t||t.addEventListener("click",()=>g(void 0,void 0,void 0,(function*(){const e=document.getElementById("add-value"),r=e.value.toLowerCase().trim();e.value="",""!==r&&(yield i(r,"add"),window.location.reload())}))),document.querySelectorAll(".delete").forEach(e=>{e.addEventListener("click",m)}),null===(n=document.getElementById("import"))||void 0===n||n.addEventListener("click",()=>{const e=document.getElementById("import-value").value.toLowerCase().trim();""!==e&&(e=>{g(void 0,void 0,void 0,(function*(){try{const r=yield fetch(e),s=(yield r.text()).split(",");for(const e of s){const r=e.toLowerCase().trim();""!==r&&(yield i(r,"add"))}window.location.reload()}catch(e){console.error("Could not fetch or parse the muted list")}}))})(e)}),null===(a=document.getElementById("reset"))||void 0===a||a.addEventListener("click",()=>{confirm("This will permanently delete all your muted words")&&o.storage.local.set({words:new Set}).then(()=>window.location.reload())})}]);