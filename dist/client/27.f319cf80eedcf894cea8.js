(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{771:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t=f();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}}r.default=e,t&&t.set(e,r);return r}(r(0)),o=l(r(277)),a=r(168),u=r(282),i=l(r(779)),c=l(r(780));function l(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}var d=(0,i.default)((function(){var e=(0,o.default)().location,t=(0,a.useStore)();return(0,n.useEffect)((function(){var r,n=e.params,o=n.access_token,a=void 0===o?"":o,i=(n.expires,n.landing_page),c=void 0===i?"/":i;a?(r={access_token:a},(0,u.saveTokenToCookie)(r)(t.dispatch,t.getState)).then((function(e){e&&e.success&&(window.location.href=c)})).catch((function(e){alert("登录失败"),window.location.href="/"})):window.location.href="/"}),[]),n.default.createElement(n.default.Fragment,null,n.default.createElement(c.default,{title:"登陆中..."}),n.default.createElement("div",{style:{textAlign:"center",padding:"30px"}},"登录跳转中..."))}));t.default=d},779:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=function(t){t.history;var r=t.location,l=t.match;t.staticContext;"undefined"!=typeof window&&a.set("history",(0,o.default)().history);var f,d,s=(0,n.useState)(""),p=(d=2,function(e){if(Array.isArray(e))return e}(f=s)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}}(f,d)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),v=p[0],y=p[1],w=(0,u.useStore)(),g=r.pathname,h=r.search;return r.params=h?(0,c.default)(h):{},(0,n.useEffect)((function(){return"undefined"!=typeof window&&"/"!=window.location.pathname&&(0,i.setScrollPosition)(g+h)(w.dispatch,w.getState),function(){"undefined"!=typeof window&&a.remove("history")}}),[]),v?n.default.createElement("div",{className:"container text-center"},v):n.default.createElement(e,{match:l,setNotFound:y})};return t.loadDataOnServer=e.loadDataOnServer||function(){return{code:200}},t};var n=d(r(0)),o=l(r(277)),a=d(r(116)),u=r(168),i=r(278),c=l(r(781));function l(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(e){if(e&&e.__esModule)return e;var t=f();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}}return r.default=e,t&&t.set(e,r),r}},780:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.title,r=e.children,n=(0,u.useSelector)((function(e){return(0,i.getUnreadNotice)(e)})),f=(0,u.useSelector)((function(e){return(0,c.getTipsById)(e,"home")||(0,c.getTipsById)(e,"feed")||(0,c.getTipsById)(e,"favorite")||(0,c.getTipsById)(e,"excellent")})),d=(0,u.useSelector)((function(e){return(0,c.getTipsById)(e,"unread-message")})),s="";d&&(s+="(".concat(d,"条私信) "));n&&n.length>0&&(s+="(".concat(n.length,"条通知) "));f&&(s+="(有新动态) ");s+=t||l.name,t&&(s+=" - ".concat(l.name));return o.default.createElement(o.default.Fragment,null,o.default.createElement(a.ReactTitle,{title:s}),r?o.default.createElement(a.default,null,r):null)};var n,o=(n=r(0))&&n.__esModule?n:{default:n},a=function(e){if(e&&e.__esModule)return e;var t=f();if(t&&t.has(e))return t.get(e);var r={};if(null!=e){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}}r.default=e,t&&t.set(e,r);return r}(r(691)),u=r(168),i=r(169),c=r(170),l=r(77);function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}},781:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return e.substr(1).split("&").reduce((function(e,t){if(t){var r=t.split("=");e[r[0]]=r[1]||""}return e}),{})};t.default=n}}]);