(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(779)),i=o(n(780)),c=o(n(858)),l=o(n(782));function o(e){return e&&e.__esModule?e:{default:e}}var u=(0,r.default)((function(){return a.default.createElement(l.default,null,a.default.createElement(i.default,{title:"通知"}),a.default.createElement(c.default,null))}));t.default=u},779:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=function(t){t.history;var n=t.location,u=t.match;t.staticContext;"undefined"!=typeof window&&i.set("history",(0,r.default)().history);var d,s,f=(0,a.useState)(""),m=(s=2,function(e){if(Array.isArray(e))return e}(d=f)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}}(d,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),p=m[0],_=m[1],v=(0,c.useStore)(),h=n.pathname,y=n.search;return n.params=y?(0,o.default)(y):{},(0,a.useEffect)((function(){return"undefined"!=typeof window&&"/"!=window.location.pathname&&(0,l.setScrollPosition)(h+y)(v.dispatch,v.getState),function(){"undefined"!=typeof window&&i.remove("history")}}),[]),p?a.default.createElement("div",{className:"container text-center"},p):a.default.createElement(e,{match:u,setNotFound:_})};return t.loadDataOnServer=e.loadDataOnServer||function(){return{code:200}},t};var a=s(n(0)),r=u(n(277)),i=s(n(116)),c=n(168),l=n(278),o=u(n(781));function u(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function s(e){if(e&&e.__esModule)return e;var t=d();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}}return n.default=e,t&&t.set(e,n),n}},780:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.title,n=e.children,a=(0,c.useSelector)((function(e){return(0,l.getUnreadNotice)(e)})),d=(0,c.useSelector)((function(e){return(0,o.getTipsById)(e,"home")||(0,o.getTipsById)(e,"feed")||(0,o.getTipsById)(e,"favorite")||(0,o.getTipsById)(e,"excellent")})),s=(0,c.useSelector)((function(e){return(0,o.getTipsById)(e,"unread-message")})),f="";s&&(f+="(".concat(s,"条私信) "));a&&a.length>0&&(f+="(".concat(a.length,"条通知) "));d&&(f+="(有新动态) ");f+=t||u.name,t&&(f+=" - ".concat(u.name));return r.default.createElement(r.default.Fragment,null,r.default.createElement(i.ReactTitle,{title:f}),n?r.default.createElement(i.default,null,n):null)};var a,r=(a=n(0))&&a.__esModule?a:{default:a},i=function(e){if(e&&e.__esModule)return e;var t=d();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(691)),c=n(168),l=n(169),o=n(170),u=n(77);function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}},781:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return e.substr(1).split("&").reduce((function(e,t){if(t){var n=t.split("=");e[n[0]]=n[1]||""}return e}),{})};t.default=a},782:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.children;return r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"_3RUsQ"},t))};var a,r=(a=n(0))&&a.__esModule?a:{default:a};n(692)},783:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.size,e.position;return r.default.createElement("span",{className:"_3H7UH"})};var a,r=(a=n(0))&&a.__esModule?a:{default:a};n(693)},784:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.id,n=e.query,c=e.fields,l=void 0===c?"":c,o=e.load,u=e.data,d=void 0===u?[]:u,s=e.loading,f=void 0===s||s,m=e.count,p=void 0===m?0:m,_=e.more,v=void 0===_||_,h=e.showPagination,y=void 0!==h&&h,g=e.scrollLoad,b=void 0!==g&&g,w=e.nothing,E=void 0===w?"--- 无数据 ---":w,k=e.filters,N=e.renderItem,O=e.renderHead,S=e.renderFooter,j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];o({id:t,args:n,fields:l,restart:e})};if((0,a.useEffect)((function(){return 0==d.length&&v&&j(),b&&ArriveFooter.add(t,j),function(){b&&ArriveFooter.remove(t)}}),[t]),!f&&d&&0==d.length&&!v&&E)return a.default.createElement("div",{className:"text-center text-secondary pt-3 pb-3"},E);return a.default.createElement(a.default.Fragment,null,O?O({loadData:j}):null,d.map((function(e){return N(e)})),f&&y||v&&b?a.default.createElement("div",{className:"text-center pt-3 pb-3"},a.default.createElement(r.default,null)):null,y&&k?a.default.createElement(i.default,{count:p||0,pageSize:k.page_size||0,pageNumber:k.page_number||0,onSelect:function(e){n.page_number=e,j(!0)}}):null,S?S({loadData:j}):null)};var a=function(e){if(e&&e.__esModule)return e;var t=l();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(0)),r=c(n(783)),i=c(n(786));function c(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}},786:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.count,n=void 0===t?0:t,a=e.pageSize,i=void 0===a?0:a,c=e.pageNumber,l=void 0===c?0:c,o=e.onSelect,u=Math.ceil(n/i);if(!n||1==u)return null;var d=l>1?l-1:0,s=l+1<=u?l+1:0;return r.default.createElement("nav",{"aria-label":"Page navigation",className:"mt-3"},r.default.createElement("ul",{className:"pagination justify-content-center mb-3"},r.default.createElement("li",{className:"page-item ".concat(d?"":"disabled")},r.default.createElement("div",{className:"page-link","aria-label":"Previous",onClick:function(){o(d)}},r.default.createElement("span",{"aria-hidden":"true"},"«"),r.default.createElement("span",{className:"sr-only"},"Previous"))),function(){for(var e=[],t=l+4>=u?u:l+4,n=function(t){e.push(r.default.createElement("li",{className:"page-item ".concat(l-1==t?"active":""),key:t},r.default.createElement("div",{className:"page-link",onClick:function(){o(t+1)}},t+1)))},a=l-5>=1?l-5:0;a<t;a++)n(a);return e}(),r.default.createElement("li",{className:"page-item ".concat(s?"":"disabled")},r.default.createElement("div",{className:"page-link","aria-label":"Next",onClick:function(){o(s)}},r.default.createElement("span",{"aria-hidden":"true"},"»"),r.default.createElement("span",{className:"sr-only"},"Next")))))};var a,r=(a=n(0))&&a.__esModule?a:{default:a}},787:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t){var n=t.content,o=t.maxHeight;if(!n)return null;var u=d((0,a.useState)(n),2),s=u[0],f=u[1],m=d((0,a.useState)(!1),2),p=m[0],_=m[1],v=d((0,a.useState)(0),2),h=v[0],y=v[1],g=(0,a.createRef)();return(0,a.useEffect)((function(){f((0,i.default)(n)),c.default.registerLanguage("javascript",l.default),e(".markdown-body pre").each((function(e,t){c.default.highlightBlock(t)})),r.default.spacingElementByClassName("markdown-body"),h||y(g&&g.current?g.current.offsetHeight:0)}),[n]),a.default.createElement("div",null,a.default.createElement("div",{ref:g,style:!p&&o&&h>o?{maxHeight:"".concat(o,"px"),overflow:"hidden"}:null,className:"markdown-body _1_Fpd",dangerouslySetInnerHTML:{__html:s}}),function(){return p||!o||h<o?null:a.default.createElement("div",{className:"_2GBbo"},a.default.createElement("span",{className:"btn btn-outline-primary btn-block btn-sm mt-3",onClick:function(e){e.stopPropagation(),_(!p)}},!p&&o&&h>o?"展开全部":"收起"))}())};var a=function(e){if(e&&e.__esModule)return e;var t=u();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}}n.default=e,t&&t.set(e,n);return n}(n(0)),r=o(n(695));n(696);var i=o(n(790)),c=o(n(697)),l=o(n(698));function o(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}}).call(this,n(68))},790:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;function a(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=t.length,a="",r=0;r<e;r++)a+=t.charAt(Math.floor(Math.random()*n));return a}t.default=function(e){return e?e=function(e){var t=e.match(/\<img(.*?)>/g),n=function(e){var t=/src=[\'\"]?([^\'\"]*)[\'\"]?/i,n=[],a=e.match(/\<img(.*?)>/g);return a&&a.length>0&&a.map((function(e){var a=e.match(t);a&&a[1]&&n.push(a[1])})),n}(e);return n.map((function(e,t){n[t]=e.split("?")[0]})),n="['"+n.join("','")+"']",t&&t.length>0&&t.map((function(t,a){var r=t;r=r.replace(/\?/g,"\\?"),e=e.replace(new RegExp(r,"gm"),'<div onclick="webPictureViewer('+n+","+a+');">'+t+"</div>")})),e}(e=function(e){if(!e)return"";e=e.replace("&nbsp;"," ");var t=/(<a(.*?)>(.*?)<\/a>|<img(.*?)>|<ifram(.*?)>)/gi,n=[],r=e.match(t);r&&r.length>0&&e.match(t).map((function(t){var r="#"+a(18)+"#";n.push({id:r,value:t}),e=e.replace(t,r)}));var i=e.match(/(http:\/\/>http:\/\/|http:\/\/|https:\/\/|www\.|magnet\:\?xt\=)(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|\"|\'|$)/gi);if(i&&i.length>0){i=i.sort((function(e,t){return t.length-e.length}));var c=[];i.map((function(t){var n="#"+a(18)+"#";c.push({id:n,value:t}),e=e.replace(t,n)})),c.map((function(t){var n=-1==t.value.indexOf("http")?"http:"+t.value:t.value;e=e.replace(t.id,"<a href=".concat(n,' target="_blank" rel="nofollow">').concat(t.value,"</a>"))}))}return n.length>0&&n.map((function(t){e=e.replace(t.id,t.value)})),e}(e=function(e){var t=e.match(/(https:\/\/v\.|http:\/\/v\.|v\.)qq\.com\/x\/(page|cover)\/(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi);return t&&0!=t.length?(t.map((function(t){var n;try{var a=t.split("?")[0].split(".");a=a[a.length-2].split("/"),n=t.split("?")[0].split("/").pop().split(".")[0]}catch(e){console.log(e)}if(n){var r="//v.qq.com/txp/iframe/player.html?vid=".concat(n);e=e.replace(t,'<iframe frameborder="0" src="'.concat(r,'" allowFullScreen="true"></iframe>'))}})),e):e}(e=function(e){var t=e.match(/(https:\/\/www\.youtube\.com|https:\/\/youtube\.com|http:\/\/www.youtube\.com|http:\/\/youtube\.com|www\.youtube\.com|youtube\.com)\/watch\?v\=(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi);return t&&0!=t.length?(t.map((function(t){var n;try{t.split("?")[1].split("&").map((function(e){var t=e.split("=");t&&"v"==t[0]&&(n=t[1])}))}catch(e){console.log(e)}if(n){var a="//www.youtube.com/embed/".concat(n);e=e.replace(t,'<iframe width="100%" style="background:#f9f9f9;" src="'.concat(a,'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'))}})),e):e}(e=function(e){var t=e.match(/(https:\/\/www\.acfun\.cn|https:\/\/acfun\.cn|http:\/\/www.acfun\.cn|http:\/\/acfun\.cn|www\.acfun\.cn|acfun\.cn)\/v\/(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi);return t&&0!=t.length?(t.map((function(t){var n;try{n=(n=t.split("acfun.cn/v/")[1].split("/")[0]).split("?")[0]}catch(e){console.log(e)}if(n){var a="https://www.acfun.cn/player/".concat(n);e=e.replace(t,'<iframe src="'.concat(a,'" id="ACFlashPlayer-re"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>'))}})),e):e}(e=function(e){var t=e.match(/(https:\/\/www\.bilibili\.com|https:\/\/bilibili\.com|http:\/\/www.bilibili\.com|http:\/\/bilibili\.com|www\.bilibili\.com|bilibili\.com)\/video\/av(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi);return t&&0!=t.length?(t.map((function(t){var n;try{n=(n=t.split("bilibili.com/video/av")[1].split("/")[0]).split("?")[0]}catch(e){console.log(e)}if(n){var a="//player.bilibili.com/player.html?aid=".concat(n);e=e.replace(t,'<iframe src="'.concat(a,'" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>'))}})),e):e}(e=function(e){var t=e.match(/(http:\/\/v\.youku\.com|https:\/\/v\.youku\.com|v\.youku\.com)\/v\_show\/id\_(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi);return t&&0!=t.length?(t.map((function(t){var n;try{n=(n=t.split("v.youku.com/v_show/id_")[1].split(".")[0]).split("?")[0]}catch(e){console.log(e)}if(n){var a="//player.youku.com/embed/".concat(n);e=e.replace(t,"<iframe width='100%' src='".concat(a,"' frameborder=0 'allowfullscreen'></iframe>"))}})),e):e}(e=function(e){var t=e.match(/(http:\/\/music\.163\.com|https:\/\/music\.163\.com|music\.163\.com)\/(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi);return t&&t.length>0&&t.map((function(t){var n,a=-1;-1!=t.indexOf("/song?")?a=2:-1!=t.indexOf("/playlist?")?a=0:-1!=t.indexOf("/album?")?a=1:-1!=t.indexOf("/dj?")?a=3:-1!=t.indexOf("/radio/?")&&(a=4);try{t.split("?")[1].split("&").map((function(e){var t=e.split("=");"id"==t[0]&&(n=t[1])}))}catch(e){console.log(e)}if(-1!=a&&n)if(2==a){var r="//music.163.com/outchain/player?type=2&id=".concat(n,"&auto=0&height=66");e=e.replace(t,'<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="'.concat(r,'"></iframe>'))}else if(3==a){var i="//music.163.com/outchain/player?type=3&id=".concat(n,"&auto=1&height=66");e=e.replace(t,'<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="'.concat(i,'"></iframe>'))}else if(4==a){var c="//music.163.com/outchain/player?type=4&id=".concat(n,"&auto=1&height=430");e=e.replace(t,'<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="'.concat(c,'"></iframe>'))}else{var l="//music.163.com/outchain/player?type=".concat(a,"&id=").concat(n,"&height=430");e=e.replace(t,'<iframe type="music" src="'.concat(l,'" height="430"></iframe>'))}})),e}(e=function(e){var t=e.match(/\<pre>(.*?)<\/pre>/g),n=[];t&&t.length>0&&t.map((function(t){var r="#"+a(18)+"#";n.push({id:r,value:t}),e=e.replace(t,r)}));var r=(e=e.replace(/([\r\n])/g,"")).split("<p><br></p>");return r=function(e){for(var t=[],n=0;n<e.length;n++)-1==t.indexOf(e[n])&&t.push(e[n]);return t.length>0&&!t[0]&&t.splice(0,1),t.length>0&&!t[t.length-1]&&t.splice(t.length-1,1),t}(r),e=r.join("<p><br></p>"),n.length>0&&n.map((function(t){e=e.replace(t.id,t.value)})),e}(e))))))))):""}},821:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadNewNotifications=t.loadNotifications=void 0;var a,r=(a=n(117))&&a.__esModule?a:{default:a};function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t,n,a,r,i,c){try{var l=e[i](c),o=l.value}catch(e){return void n(e)}l.done?t(o):Promise.resolve(o).then(a,r)}var l=function(e,t){var n=t.dispatch,a=(0,t.getState)(),r=a.website.unreadNotice,i=a.comment,c=a.posts,l=a.follow,o=a.user.userInfo;i=u(i,e),c=d(c,e),l=s(l,o._id,e),e.map((function(e){var t=r.indexOf(e._id);-1!=t&&r.splice(t,1)})),l.count>0&&(o.fans_count=o.fans_count+l.count,n({type:"SET_USER",userinfo:o}),n({type:"SET_FOLLOW_PEOPLE",state:l.state})),n({type:"SET_POSTS",state:c}),n({type:"SET_COMMENT",state:i}),n({type:"SET_UNREAD_NOTICE",unreadNotice:r})},o=(0,r.default)({reducerName:"notification",actionType:"SET_NOTIFICATION_LIST_BY_ID",api:"userNotifications",fields:"\n    has_read\n    deleted\n    create_at\n    _id\n    type\n    comment_id {\n      _id\n      content_html\n      posts_id {\n        _id\n        title\n        content_html\n      }\n      reply_id {\n        _id\n        content_html\n      }\n      parent_id {\n        _id\n        content_html\n      }\n    }\n    sender_id {\n      create_at\n      avatar\n      _id\n      nickname\n      avatar_url\n      id\n    }\n    addressee_id {\n      create_at\n      avatar\n      _id\n      nickname\n      avatar_url\n      id\n    }\n    posts_id {\n      title\n      content_html\n      _id\n    }\n  ",processList:function(e,t){var n=t.dispatch,a=t.getState;return e.map((function(e){var t;e.comment_id&&((t=(t=e.comment_id.content_html).replace(/<[^>]+>/g,"")).length>100&&(t=t.substring(0,100)+"..."),e.comment_id.content_trim=t);e.comment_id&&e.comment_id.parent_id&&((t=(t=e.comment_id.parent_id.content_html).replace(/<[^>]+>/g,"")).length>100&&(t=t.substring(0,100)+"..."),e.comment_id.parent_id.content_trim=t);e.comment_id&&e.comment_id.reply_id&&((t=(t=e.comment_id.reply_id.content_html).replace(/<[^>]+>/g,"")).length>100&&(t=t.substring(0,100)+"..."),e.comment_id.reply_id.content_trim=t);e.comment_id&&e.comment_id.answer_id&&((t=(t=e.comment_id.answer_id.content_html).replace(/<[^>]+>/g,"")).length>100&&(t=t.substring(0,100)+"..."),e.comment_id.answer_id.content_html=t);return e})),l(e,{dispatch:n,getState:a}),e}});t.loadNotifications=o;var u=function(e,t){return t.map((function(t){if(!t.has_read)if("comment"==t.type||"like-comment"==t.type||"new-comment"==t.type){var n=t.comment_id.posts_id._id;e[n]&&delete e[n]}else if("reply"==t.type||"like-reply"==t.type){var a=t.comment_id.posts_id._id,r=t.comment_id.parent_id._id;e[a]&&delete e[a],e[r]&&delete e[r]}})),e},d=function(e,t){return t.map((function(t){if(!t.has_read&&"follow-posts"==t.type)for(var n in e){var a=e[n].data;if(a.length>0)for(var r=0,i=a.length;r<i;r++)a[r]._id==t.posts_id._id&&(e[n].data[r].follow_count+=1)}})),e},s=function(e,t,n){var a=0;return n.map((function(n){n.has_read||"follow-you"==n.type&&(a+=1,e["fans-"+t]&&delete e["fans-"+t])})),{state:e,count:a}};t.loadNewNotifications=function(e){var t=e.name;return(function(){var e,n=(e=regeneratorRuntime.mark((function e(n,a){var r,c,u,d,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a(),c=r.notification[t]||null,0!=(u=r.website.unreadNotice).length&&c&&c.data){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,o({id:"new",args:{page_size:20,_id:u.join(","),sort_by:"create_at:1"},restart:!0})(n,a);case 6:d=e.sent,(s=i(d,2))[0],s[1].data.map((function(e){c.data.unshift(e)})),n({type:"SET_NOTIFICATION_LIST_BY_ID",name:t,data:c}),l(c.data,{dispatch:n,getState:a});case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function l(e){c(i,a,r,l,o,"next",e)}function o(e){c(i,a,r,l,o,"throw",e)}l(void 0)}))});return function(e,t){return n.apply(this,arguments)}}())}},858:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(0)),r=p(n(277)),i=n(115),c=n(168),l=n(78),o=n(169),u=n(821),d=n(284),s=p(n(783)),f=p(n(859)),m=p(n(782));function p(e){return e&&e.__esModule?e:{default:e}}n(750);t.default=function(){var e,t=(0,r.default)(),n=(t.history,t.location),p=(t.match,(0,c.useSelector)(l.getUserInfo)),_=(0,c.useSelector)(o.getUnreadNotice),v=(0,c.useSelector)((function(e){return(0,d.getNotificationListById)(e,"new")})),h=(0,c.useStore)(),y={unread:{name:"未读",filters:{has_read:!1,sort_by:"create_at:-1"}},all:{name:"全部",filters:{sort_by:"create_at:-1"}},comment:{name:"评论",filters:{type:"comment",sort_by:"create_at:-1"}},reply:{name:"回复",filters:{type:"reply",sort_by:"create_at:-1"}},follow:{name:"关注",filters:{type:"follow-you",sort_by:"create_at:-1"}},like:{name:"赞",filters:{type:"like-comment,like-reply,like-posts",sort_by:"create_at:-1"}}},g=(n||{}).pathname,b=void 0===g?"notifications":g,w={};return(e="/notifications"==b?y.unread:y[b.replace("/notifications/","")])?((w=e.filters).addressee_id=p._id,a.default.createElement(m.default,null,a.default.createElement("div",{className:"card"},a.default.createElement("div",{className:"card-body border-bottom"},a.default.createElement("ul",null,Reflect.ownKeys(y).map((function(t){var n=y[t];return a.default.createElement(i.Link,{to:"/notifications".concat("unread"==t?"":"/"+t),key:t,className:"mr-4 ".concat(e.name==n.name?"text-primary":"text-dark")},n.name)})))),function(){if("/notifications"==b)return v&&v.loading?a.default.createElement(s.default,null):_.length>0?a.default.createElement("div",{onClick:function(){var e;e={name:"/notifications"},(0,u.loadNewNotifications)(e)(h.dispatch,h.getState)},className:"jI6l8"},"你有 ",_.length," 未读通知"):void 0}(),a.default.createElement(f.default,{id:b,query:w,scrollLoad:!0})))):a.default.createElement("div",null,"没有该分类")}},859:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.id,n=(0,r.useStore)(),u=(0,r.useSelector)((function(e){return(0,c.getNotificationListById)(e,t)}));return a.default.createElement(o.default,d({},e,u,{load:function(e){return(0,i.loadNotifications)(e)(n.dispatch,n.getState)},renderItem:function(e){return a.default.createElement(l.default,{notification:e,key:e._id})}}))};var a=u(n(0)),r=n(168),i=n(821),c=n(284),l=u(n(860));n(749);var o=u(n(784));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}},860:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=n(115),i=o(n(747)),c=n(171),l=o(n(787));function o(e){return e&&e.__esModule?e:{default:e}}n(748);t.default=function(e){var t=e.notification,n=null,o=null;if(t.sender_id&&t.sender_id.avatar_url){var u=a.default.createElement("img",{className:"_36G0z",src:t.sender_id.avatar_url});o=a.default.createElement("i",{className:"load-demand","data-load-demand":i.default.renderToString(u)})}switch(t.type){case"follow-you":n=a.default.createElement("div",null,a.default.createElement("div",{className:"DmSYt"},a.default.createElement(r.Link,{to:"/people/".concat(t.sender_id._id),className:"text-dark"},o,t.sender_id.nickname),(0,c.dateDiff)(t.create_at)," 关注了你"));break;case"follow-posts":n=a.default.createElement("div",null,a.default.createElement("div",{className:"DmSYt"},a.default.createElement(r.Link,{to:"/people/".concat(t.sender_id._id),className:"text-dark"},o,t.sender_id.nickname),(0,c.dateDiff)(t.create_at)," 收藏了你的",a.default.createElement(r.Link,{to:"/posts/".concat(t.posts_id._id),className:"text-dark"},t.posts_id.title)));break;case"like-posts":n=a.default.createElement("div",null,a.default.createElement("div",{className:"DmSYt"},a.default.createElement(r.Link,{to:"/people/".concat(t.sender_id._id),className:"text-dark"},o,t.sender_id.nickname),(0,c.dateDiff)(t.create_at)," 赞了你的",a.default.createElement(r.Link,{to:"/posts/".concat(t.posts_id._id),className:"text-dark"},t.posts_id.title)));break;case"reply":n=a.default.createElement("div",null,a.default.createElement("div",{className:"DmSYt"},a.default.createElement(r.Link,{to:"/people/".concat(t.sender_id._id),className:"text-dark"},o,t.sender_id.nickname),(0,c.dateDiff)(t.create_at)," 回复了你的",a.default.createElement(r.Link,{to:"/comment/".concat(t.comment_id.parent_id._id),className:"text-dark"},t.comment_id.reply_id?t.comment_id.reply_id.content_trim:t.comment_id.parent_id.content_trim),t.comment_id.reply_id?"回复":"评论"),a.default.createElement("div",{className:"_2yAXD"},a.default.createElement(l.default,{content:t.comment_id.content_html})));break;case"comment":n=a.default.createElement("div",null,a.default.createElement("div",{className:"DmSYt"},a.default.createElement(r.Link,{to:"/people/".concat(t.sender_id._id),className:"text-dark"},o,t.sender_id.nickname),(0,c.dateDiff)(t.create_at)," 评论了你的",a.default.createElement(r.Link,{to:"/posts/".concat(t.comment_id.posts_id._id),className:"text-dark"},t.comment_id.posts_id.title)),a.default.createElement("div",{className:"_2yAXD"},a.default.createElement(l.default,{content:t.comment_id.content_html})));break;case"like-reply":var d=t.comment_id.parent_id?t.comment_id.parent_id._id:t.comment_id._id;n=a.default.createElement("div",null,a.default.createElement("div",{className:"DmSYt"},a.default.createElement(r.Link,{to:"/people/".concat(t.sender_id._id),className:"text-dark"},o,t.sender_id.nickname),(0,c.dateDiff)(t.create_at)," 赞了你的",a.default.createElement(r.Link,{to:"/comment/".concat(d),className:"text-dark"},t.comment_id.content_trim),"回复"));break;case"like-comment":n=a.default.createElement("div",null,a.default.createElement("div",{className:"DmSYt"},a.default.createElement(r.Link,{to:"/people/".concat(t.sender_id._id),className:"text-dark"},o,t.sender_id.nickname),(0,c.dateDiff)(t.create_at)," 赞了你的",a.default.createElement(r.Link,{to:"/comment/".concat(t.comment_id._id),className:"text-dark"},t.comment_id.content_trim),"评论"));break;case"new-comment":n=a.default.createElement("div",null,a.default.createElement("div",{className:"DmSYt"},a.default.createElement(r.Link,{to:"/people/".concat(t.sender_id._id),className:"text-dark"},o,t.sender_id.nickname),(0,c.dateDiff)(t.create_at)," 评论了",a.default.createElement(r.Link,{to:"/posts/".concat(t.comment_id.posts_id._id),className:"text-dark"},t.comment_id.posts_id.title)),a.default.createElement("div",{className:"_2yAXD"},a.default.createElement(r.Link,{to:"/comment/".concat(t.comment_id._id),className:"text-dark"},t.comment_id.content_trim)))}return n&&(n=t.deleted?a.default.createElement("div",{key:t._id},a.default.createElement("del",{className:"_3io1t"},n)):a.default.createElement("div",{key:t._id},n)),a.default.createElement("div",{className:"card-body border-bottom"},n)}}}]);