(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{761:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t=d();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}}n.default=e,t&&t.set(e,n);return n}(n(0)),a=s(n(277)),o=s(n(779)),l=s(n(780)),u=s(n(797)),i=s(n(869)),c=s(n(782));function s(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n(763);var p=(0,o.default)((function(){var e=(0,a.default)(),t=e.history,n=e.location,o=f((0,r.useState)(""),2),s=o[0],d=o[1],p=f((0,r.useState)(""),2),_=p[0],m=p[1];(0,r.useEffect)((function(){var e=n.params||{},t=e.q,r=void 0===t?"":t,a=e.type,o=void 0===a?"":a,l=v.current;d(decodeURIComponent(r)),m(o),l.value=decodeURIComponent(r),l.focus()}));var v=(0,r.createRef)(),y=function(e){e?t.push("/search?q=".concat(s,"&type=").concat(e)):t.push("/search?q=".concat(s))};return r.default.createElement(c.default,null,r.default.createElement(l.default,{title:"搜索"}),r.default.createElement("div",{className:"card"},r.default.createElement("div",{className:"card-body pt-0 pb-0 border-bottom"},r.default.createElement("form",{onSubmit:function(e){e.preventDefault();var n=v.current;if(!n.value)return n.focus();t.push("/search?q=".concat(n.value).concat(_&&"user"==_?"&type=user":"")),d(n.value)}},r.default.createElement("div",{className:"input-group mt-2 mb-2"},r.default.createElement("input",{type:"text",className:"form-control a3RcY",ref:v,placeholder:"搜索"}),r.default.createElement("div",{className:"input-group-append"},r.default.createElement("button",{type:"submit",className:"btn btn-outline-primary rounded-pill btn-sm pl-3 pr-3 ml-1"},"搜索"))))),r.default.createElement("div",{className:"card-body",style:{fontSize:"18px"}},r.default.createElement("span",{className:"badge mr-3 ".concat(""==_?"badge-primary":"badge-light"),onClick:function(){y("")}},"帖子"),r.default.createElement("span",{className:"badge ".concat("user"==_?"badge-primary":"badge-light"),onClick:function(){y("user")}},"用户")),r.default.createElement("div",{className:"card-body p-0"},function(){if(s)return _?"user"==_?r.default.createElement(i.default,{id:s,query:{nickname:s}}):void 0:r.default.createElement(u.default,{id:s,query:{title:s,sort_by:"create_at",deleted:!1,weaken:!1},scrollLoad:!0})}())))}));t.default=p},782:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.children;return a.default.createElement("div",{className:"container"},a.default.createElement("div",{className:"_3RUsQ"},t))};var r,a=(r=n(0))&&r.__esModule?r:{default:r};n(692)},789:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t){var n=t.posts,r=t.user,c=t.topic,s=t.className,d=void 0===s?"btn btn-outline-primary btn-sm rounded-pill":s,f=t.activeClassName,p=void 0===f?"btn btn-outline-secondary btn-sm rounded-pill":f,_=n||r||c,m=(0,o.useSelector)((function(e){return(0,u.getUserInfo)(e)})),v=(0,o.useStore)();if(m&&n&&n.user_id&&n.user_id._id==m._id||m&&r&&r._id==m._id)return"";var y="关注",b=a.default.createElement("svg",{width:"15px",height:"15px",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",fill:"none",className:"mr-1"},a.default.createElement("use",{xlinkHref:"/feather-sprite.svg#plus"}));n&&(y="收藏",b=null);_.follow&&(b=null);return m?_.follow?a.default.createElement("span",{className:p,onClick:function(e){e.stopPropagation();var t={};n&&(t.posts_id=n._id),r&&(t.user_id=r._id),c&&(t.topic_id=c._id),function(e){return(0,l.unfollow)(e)(v.dispatch,v.getState)}({args:t}).then((function(e){var t=i(e,2),n=t[0];t[1];n&&Toastify({text:n,duration:3e3,backgroundColor:"linear-gradient(to right, #0988fe, #1c75fb)"}).showToast()}))}},b,"正在",y):a.default.createElement("span",{className:d,onClick:function(t){t.stopPropagation();var a={};n&&(a.posts_id=n._id),r&&(a.user_id=r._id),c&&(a.topic_id=c._id),function(e){return(0,l.follow)(e)(v.dispatch,v.getState)}({args:a}).then((function(t){var n=i(t,2),r=n[0];n[1];r&&e.toast({text:r,position:"top-center",showHideTransition:"slide",icon:"info",loader:!1,allowToastClose:!1})}))}},b,y):a.default.createElement("span",{className:d,"data-toggle":"modal","data-target":"#sign",onClick:function(e){e.stopPropagation()}},b,y)};var r,a=(r=n(0))&&r.__esModule?r:{default:r},o=n(168),l=n(794),u=n(78);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n(699)}).call(this,n(68))},794:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unfollow=t.follow=t.findFollows=void 0;var r=a(n(48));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(e,t,n,r,a,o,l){try{var u=e[o](l),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,a)}var u=(0,a(n(117)).default)({reducerName:"follow",actionType:"SET_FOLLOW_LIST_BY_ID",api:"findFollows",fields:""});t.findFollows=u;var i=function(e){return function(t){var n=t.args;return function(t,a){return new Promise(function(){var u,i=(u=regeneratorRuntime.mark((function l(u){var i,c,s,d,f;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return n.status=e,i=a().user.userInfo,l.next=4,(0,r.default)({type:"mutation",apis:[{api:"addFollow",args:n,fields:"success"}],headers:{accessToken:a().user.accessToken}});case 4:if(c=l.sent,s=o(c,2),d=s[0],f=s[1],!d){l.next=10;break}return l.abrupt("return",u([d?d.message:"未知错误"]));case 10:n.posts_id?(t({type:"UPDATE_FOLLOW",id:n.posts_id,followStatus:e,selfId:i._id}),t({type:"UPDATE_POSTS_FOLLOW",id:n.posts_id,followStatus:e})):n.user_id?(t({type:"UPDATE_FOLLOW",id:n.user_id,followStatus:e,selfId:i._id}),t({type:"UPDATE_POSTS_AUHTOR_FOLLOW",peopleId:n.user_id,followStatus:e,selfId:i._id}),t({type:"UPLOAD_PEOPLE_FOLLOW",peopleId:n.user_id,followStatus:e,selfId:i._id})):n.topic_id&&(t({type:"UPDATE_FOLLOW",id:n.topic_id,followStatus:e,selfId:i._id}),t({type:"UPDATE_TOPIC_FOLLOW",id:n.topic_id,followStatus:e})),u([null,f]);case 12:case"end":return l.stop()}}),l)})),function(){var e=this,t=arguments;return new Promise((function(n,r){var a=u.apply(e,t);function o(e){l(a,n,r,o,i,"next",e)}function i(e){l(a,n,r,o,i,"throw",e)}o(void 0)}))});return function(e){return i.apply(this,arguments)}}())}}},c=i(!0);t.follow=c;var s=i(!1);t.unfollow=s},817:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadPeopleList=void 0;var r,a=n(171);var o=(0,((r=n(117))&&r.__esModule?r:{default:r}).default)({reducerName:"people",actionType:"SET_PEOPLE_LIST_BY_ID",api:"users",fields:"\n    _id\n    nickname_reset_at\n    create_at\n    last_sign_at\n    blocked\n    role\n    avatar\n    brief\n    source\n    posts_count\n    comment_count\n    fans_count\n    like_count\n    follow_people_count\n    follow_topic_count\n    follow_posts_count\n    block_people_count\n    block_posts_count\n    access_token\n    gender\n    nickname\n    banned_to_post\n    avatar_url\n    follow\n    user_cover\n  ",processList:function(e){return e.map((function(e){e._last_sign_at=(0,a.dateDiff)(e.last_sign_at),e._create_at=(0,a.dateDiff)(e.create_at),e._nickname_reset_at=(0,a.dateDiff)(e.nickname_reset_at),e._create_at=(0,a.dateDiff)(e.create_at)})),e}});t.loadPeopleList=o},869:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.id,n=(0,a.useStore)(),c=(0,a.useSelector)((function(e){return(0,l.getPeopleListById)(e,t)}));return r.default.createElement(i.default,s({},e,c,{load:function(e){return(0,o.loadPeopleList)(e)(n.dispatch,n.getState)},renderItem:function(e){return r.default.createElement("div",{key:e._id},r.default.createElement(u.default,{people:e}))}}))};var r=c(n(0)),a=n(168),o=n(817),l=n(285),u=c(n(870)),i=c(n(784));function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},870:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=n(115);n(762);var o=l(n(789));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.people;return r.default.createElement("div",{key:t._id,className:"card-body border-top"},r.default.createElement("div",{className:"_2CyfL"},r.default.createElement("img",{className:"_3ZVlW",src:t.avatar_url}),r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-sm-12 col-md-8"},r.default.createElement(a.Link,{to:"/people/".concat(t._id),className:"text-dark"},t.nickname),t.brief?r.default.createElement("div",{className:"text-secondary"},t.brief):null,r.default.createElement("div",{className:"text-muted"},r.default.createElement("small",null,"注册于 ",t._create_at)),r.default.createElement("div",{className:"text-muted _2D0Ln"},t.posts_count?r.default.createElement("small",null,"帖子 ",t.posts_count):null,t.comment_count?r.default.createElement("small",null,"评论 ",t.comment_count):null,t.fans_count?r.default.createElement("small",null,"粉丝 ",t.fans_count):null,t.follow_people_count?r.default.createElement("small",null,"关注用户 ",t.follow_people_count):null)),r.default.createElement("div",{className:"col-sm-12 col-md-4 text-right"},r.default.createElement(o.default,{user:t})))))}}}]);