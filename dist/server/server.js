/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		8: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 生产环境配置
var config = {
  // debug 总开关
  debug: false,
  // [必填] 服务端口
  port: 4000,
  // [必填] 网站域名完整地址
  domainName: 'http://ddfantasies.com',
  // [必填] 网站名称
  name: '小度鱼',
  // [必填] 网站描述
  description: '年轻人的交流社区',
  // [选填] 联系我们的邮箱地址
  contactEmail: 'hi@abcd.com',
  // [选填] 备案号
  ICPNumber: '',
  // [选填] 公网安备号
  gongWangAnBei: '',
  // [必填] 身份验证的cookie名称（储存Token）
  authCookieName: 'token',
  // [必填] https://github.com/css-modules/css-modules
  classScopedName: '[hash:base64:5]',
  // [必填] 客户端打包后(dist/client/*)静态资源的前缀域名
  publicPath: '',
  api: {
    // [必填] 域名，第三方登录的时候，跳转使用
    domain: 'api.ddfantasies.com',
    graphql: {
      // [必填] graphql 客户端 api
      client: 'http://api.ddfantasies.com:9002/graphql',
      // [选填] graphql 服务端 api，如果前端和后端api是在同一台服务器的话，建议使用本机127.0.0.1速度会更快，
      // 例如: http://127.0.0.1:3000/graphql
      server: 'http://api.ddfantasies.com:9002/graphql'
    },
    // [必填] websocket 地址
    socket: 'http://ddfantasies.com'
  },
  // [选填] google 分析
  GA: '',
  // [选填] google广告
  googleAdSense: {
    client: '',
    slot: {
      pc: '',
      h5: ''
    }
  },
  // 社交账号登陆，需api支持
  social: {
    weibo: true,
    qq: true,
    github: true,
    wechat: false
  },
  // [选填] 图片文件在public/512x512.png
  favicon: '<link rel="icon" href="/512x512.png" type="image/png" />',
  // [选填] 添加内容到模版的head中
  head: "\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0\">\n    <link rel=\"apple-touch-icon\" href=\"/512x512.png\">\n    <meta content=\"yes\" name=\"apple-touch-fullscreen\">\n    <meta content=\"yes\" name=\"apple-mobile-web-app-capable\">\n  ",
  // [选填] 添加分析统计脚本
  analysisScript: "",
  qiniu: {
    // 七牛上传地址
    uploadUrl: {
      http: 'http://upload.qiniu.com',
      https: 'https://up.qbox.me/'
    }
  },
  // [必填] AMP 页面相关配置
  AMP: {
    logo: {
      // 图片文件在 public/600x60.png
      url: '/600x60.png',
      width: 600,
      height: 60
    }
  }
};
config.head += config.favicon;
config.AMP.logo.url = config.domainName + config.AMP.logo.url;
var localhost = 'localhost'; // 开发环境调试

if (false) {}

module.exports = config;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = __webpack_require__(1);

var _feature = _interopRequireDefault(__webpack_require__(4));

var _to = _interopRequireDefault(__webpack_require__(15));

var _ajax = _interopRequireDefault(__webpack_require__(57));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(_ref) {
    var _ref$type, type, _ref$headers, headers, _ref$cache, cache, apis, _ref$multiple, multiple, sql;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref$type = _ref.type, type = _ref$type === void 0 ? 'query' : _ref$type, _ref$headers = _ref.headers, headers = _ref$headers === void 0 ? {} : _ref$headers, _ref$cache = _ref.cache, cache = _ref$cache === void 0 ? false : _ref$cache, apis = _ref.apis, _ref$multiple = _ref.multiple, multiple = _ref$multiple === void 0 ? false : _ref$multiple;
            sql = '';
            apis.map(function (_ref3) {
              var _ref3$aliases = _ref3.aliases,
                  aliases = _ref3$aliases === void 0 ? '' : _ref3$aliases,
                  api = _ref3.api,
                  _ref3$args = _ref3.args,
                  args = _ref3$args === void 0 ? {} : _ref3$args,
                  _ref3$fields = _ref3.fields,
                  fields = _ref3$fields === void 0 ? '' : _ref3$fields;
              // 将参数转换成字符串
              args = convertParamsFormat(args);
              sql += "".concat(aliases ? aliases + ':' : '').concat(api).concat(args);

              if (fields) {
                sql += "{\n        ".concat(fields, "\n      }\n      ");
              }
            });
            return _context2.abrupt("return", (0, _to["default"])(new Promise(
            /*#__PURE__*/
            function () {
              var _ref4 = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(resolve, reject) {
                var _ref5, _ref6, err, data;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _ajax["default"])({
                          url:  true && _config.api.graphql.server ? _config.api.graphql.server : _config.api.graphql.client,
                          method: 'post',
                          headers: headers,
                          data: {
                            operationName: null,
                            variables: {},
                            query: "".concat(type, "{\n          ").concat(sql, "\n        }")
                          }
                        });

                      case 2:
                        _ref5 = _context.sent;
                        _ref6 = _slicedToArray(_ref5, 2);
                        err = _ref6[0];
                        data = _ref6[1];

                        if (_feature["default"].apiLog) {
                          console.log('### request api');
                          console.log("".concat(type, "{\n        ").concat(sql, "\n      }"));
                          console.log('### request result');
                          console.log(data);
                        } // console.log(err)
                        // console.log(data);


                        if (data && !data.errors) {
                          // 如果只有一个api，那么直接返回结果
                          if (apis.length == 1 && !multiple) {
                            resolve(data.data[apis[0].aliases || apis[0].api]);
                          } else {
                            resolve(data.data);
                          }
                        } else if (data && data.errors) {
                          // 如果有graphql错误，返回graphql的错误
                          if (data.errors.length != 0) {
                            data.errors.map(function (item) {
                              item = converterErrorInfo(item);
                            });
                            reject(data.errors[0]);
                          } else {
                            // 其他错误
                            reject({
                              'message': data.errors || '未知错误'
                            });
                          }
                        } else {
                          console.log(err);
                          reject({
                            'message': '未知错误'
                          });
                        }

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2, _x3) {
                return _ref4.apply(this, arguments);
              };
            }())));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}(); // 字符串中增加转译符


exports["default"] = _default;

var StringAs = function StringAs(string) {
  // return string;
  // |\t
  return '"' + string.replace(/(\\|\"|\n|\r)/g, "\\$1") + '"';
}; // 将参数对象转换成，GraphQL提交参数的格式


var convertParamsFormat = function convertParamsFormat(params) {
  var arr = [];

  for (var i in params) {
    var v = '';

    switch (_typeof(params[i])) {
      case 'string':
        v = StringAs(params[i]);
        break;

      case 'object':
        v = JSON.stringify(params[i]);
        break;

      default:
        v = params[i];
    }

    arr.push(i + ':' + v);
  }

  var str = '(' + arr.join(',') + ')';
  return arr.length > 0 ? str : '';
};
/**
 * 将字符串中的变量，替换成具体的值
 * @param  {String}  string 需要替换的字符串
 * @param  {String}  key    变量名
 * @param  {String}  value  变量值
 * @return {String}
 */


var synthesis = function synthesis(string, key, value) {
  return string.replace(new RegExp("({" + key + "})", "g"), value);
}; // 将错误信息进行转换


var converterErrorInfo = function converterErrorInfo(err) {
  // 参数替换
  if (err.data && err.data.error_data) {
    for (var n in err.data.error_data) {
      err.message = synthesis(err.message, n, err.data.error_data[n]);
    }
  }

  return err;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mainConfig = __webpack_require__(1);

var config = {
  // 公共debug开关
  debug: false,
  // 启动日志，日志生成在logs文件夹
  logs: true,
  // 是否显示API请求信息与结果在控制台(线上环境建议关闭)
  apiLog: false,
  // 是否显示redux的日志在控制台(线上环境建议关闭)
  reduxLog: false,
  // token在cookie中的有效时间
  tokenMaxAge: 1000 * 60 * 60 * 24 * 30,

  /*
   * 设置缓存有效时间（毫秒单位），0为不缓存
   * 缓存机制：游客所有的请求、会员更新频率低的请求
   */
  cache: 1000 * 60 * 3,
  // [服务端]每秒打印一次内存占用情况，显示在控制台，用于排查内存泄漏的问题
  memoryUsage: false,
  posts: {
    // 帖子在列表时候，内容最大显示高度，0为不限制
    contentMaxHeight: 1024
  },
  comment: {
    // 评论在列表时候，内容最大显示高度，0为不限制
    contentMaxHeight: 450
  }
};

if (mainConfig.debug) {
  config.cache = 0; // config.debug = true;
  // config.logs = false;
  // config.apiLog = true;

  config.reduxLog = true; // config.memoryUsage = true;
}

module.exports = config;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _feature = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LRU = __webpack_require__(61),
    options = {
  max: 100,
  maxAge: _feature["default"].cache
},
    cache = new LRU(options);

if (!_feature["default"].cache) {
  cache = {
    get: function get() {
      return '';
    },
    set: function set() {
      return '';
    }
  };
}

var _default = cache;
exports["default"] = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUnlockToken = exports.getAccessToken = exports.getUserInfo = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {
  userInfo: null,
  accessToken: '',
  expires: 0,
  // 身份验证后，获取的解锁token
  unlockToken: ''
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_ACCESS_TOKEN':
      if (action.access_token) state.accessToken = action.access_token;
      break;

    case 'REMOVE_ACCESS_TOKEN':
      state.accessToken = '';
      state.expires = 0;
      break;

    case 'SET_USER':
      if (action.userinfo) state.userInfo = action.userinfo;
      break;

    case 'ADD_UNLOCK_TOKEN':
      if (action.unlockToken) state.unlockToken = action.unlockToken;
      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
}; // 获取登录用户的信息


exports["default"] = _default;

var getUserInfo = function getUserInfo(state) {
  return state.user.userInfo;
}; // 获取 access token


exports.getUserInfo = getUserInfo;

var getAccessToken = function getAccessToken(state) {
  return state.user.accessToken;
}; // 获取用户身份解锁token


exports.getAccessToken = getAccessToken;

var getUnlockToken = function getUnlockToken(state) {
  return state.user.unlockToken;
};

exports.getUnlockToken = getUnlockToken;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOperatingStatus = exports.getTab = exports.getTopicTab = exports.getUnreadNotice = exports.getOnlineUserCount = exports.getOnline = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {
  online: {
    // 连接数
    connect: 0,
    // 在线会员
    member: 0,
    // 游客
    visitor: 0
  },
  // 网站的数据
  data: {
    users: 0,
    posts: 0,
    comments: 0,
    replys: 0
  },
  onlineUserCount: 0,
  unreadNotice: [],
  // 首页选中的话题，空为首页、follow为关注、其他为话题 ID
  // topicId:'',
  tab: 'home',
  // 首页父话题id
  topicTab: '',
  // 用户是否授权了浏览器通知权限
  notificationPermission: false
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_ONLINE_STATUS':
      state.online = action.online;
      break;

    case 'SET_UNREAD_NOTICE':
      state.unreadNotice = action.unreadNotice;
      break;
    // case 'REMOVE_UNREAD_NOTICE':
    //   if (action.id) {
    //     let { id } = action;
    //     let index = state.unreadNotice.indexOf(id);
    //     if (index != -1) state.unreadNotice.splice(index, 1)
    //   }
    //   break;
    // case 'SET_TOPIC_ID':
    // if (action.topicId) state.topicId = action.topicId;
    // break;

    case 'SET_TOPIC_TAB':
      state.topicTab = action.topicTab;
      break;

    case 'SET_TAB':
      if (action.tab) state.tab = action.tab;
      break;

    case 'SET_NOTIFICATION_PERMISSION':
      if (action.status) state.notificationPermission = action.status;
      break;

    case 'SET_OPERATING_STATUS':
      if (action.data) {
        state.data.posts = action.data.countPosts.count;
        state.data.users = action.data.countUsers.count;
        state.data.comments = action.data.countComments.count;
        state.data.replys = action.data.countReply.count;
      }

      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getOnline = function getOnline(state) {
  return state.website.online;
};

exports.getOnline = getOnline;

var getOnlineUserCount = function getOnlineUserCount(state) {
  return state.website.onlineUserCount;
};

exports.getOnlineUserCount = getOnlineUserCount;

var getUnreadNotice = function getUnreadNotice(state) {
  return state.website.unreadNotice;
}; // export const getTopicId = (state: any) => state.website.topicId


exports.getUnreadNotice = getUnreadNotice;

var getTopicTab = function getTopicTab(state) {
  return state.website.topicTab;
};

exports.getTopicTab = getTopicTab;

var getTab = function getTab(state) {
  return state.website.tab;
};

exports.getTab = getTab;

var getOperatingStatus = function getOperatingStatus(state) {
  return state.website.data;
};

exports.getOperatingStatus = getOperatingStatus;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTipsById = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_TIPS_BY_ID':
      if (action.id) state[action.id] = action.status;
      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getTipsById = function getTipsById(state, id) {
  return state.tips[id] || false;
};

exports.getTipsById = getTipsById;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = set;
exports.get = get;
exports.remove = remove;
var globalData = {};

function set(key, val) {
  globalData[key] = val;
}

function get(key) {
  return globalData[key];
}

function remove(key) {
  delete globalData[key];
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateDiff = exports.getDateArray = exports.getCountdown = void 0;

// 获取两日期时间的倒数时间
var getCountdown = function getCountdown(nowDate, endDate) {
  var lastDate = Math.ceil(new Date(endDate).getTime() / 1000);
  var now = Math.ceil(new Date(nowDate).getTime() / 1000);
  var timeCount = lastDate - now;
  var days = Math.floor(timeCount / (3600 * 24));
  var hours = Math.floor((timeCount - 3600 * 24 * days) / 3600);
  var mintues = Math.floor((timeCount - 3600 * 24 * days - hours * 3600) / 60);
  var seconds = timeCount - 3600 * 24 * days - 3600 * hours - 60 * mintues;
  return {
    days: days,
    hours: hours,
    mintues: mintues,
    seconds: seconds
  };
};

exports.getCountdown = getCountdown;

var pad = function pad(number, digits) {
  return new Array(Math.max(digits - String(number).length + 1, 0)).join('0') + number;
};

var getDateArray = function getDateArray(date) {
  var _date = date ? new Date(date) : new Date();

  return [_date.getFullYear(), pad(_date.getMonth() + 1, 2), pad(_date.getDate(), 2), pad(_date.getHours(), 2), pad(_date.getMinutes(), 2), pad(_date.getSeconds(), 2), pad(_date.getMilliseconds(), 2)];
}; // 计算两个日期的间隔时间


exports.getDateArray = getDateArray;

var dateDiff = function dateDiff(date1, date2) {
  if (!date2) date2 = new Date().getTime();
  var start = Math.ceil(new Date(date1).getTime() / 1000);
  var end = Math.ceil(new Date(date2).getTime() / 1000);
  var timestamp = end - start;
  var time = date1;

  switch (true) {
    // 一秒内
    case timestamp <= 1:
      time = '刚刚';
      break;
    // 一分钟内

    case timestamp <= 60:
      time = timestamp + '秒前';
      break;
    // 一小时内

    case timestamp <= 3600:
      time = Math.floor(timestamp / 60) + '分钟前';
      break;
    // 一天内
    // case timestamp <= 86400:
    // var hours = Math.floor(timestamp / 3600);
    // var minutes = Math.floor( (timestamp - (3600 * hours) ) / 60 );
    // time = hours + '小时前';
    // var dateArr = getDateArray(date1);
    // time = '今天 '+dateArr[3]+':'+dateArr[4];
    // break;

    default:
      var dateArr = getDateArray(date1);
      var nowArr = getDateArray(new Date().getTime()); // 今天

      if (dateArr[0] == nowArr[0] && dateArr[1] == nowArr[1] && nowArr[2] == dateArr[2]) {
        time = '今天 ' + dateArr[3] + ':' + dateArr[4];
      } // 昨天
      else if (dateArr[0] == nowArr[0] && dateArr[1] == nowArr[1] && parseInt(nowArr[2]) - parseInt(dateArr[2]) == 1) {
          time = '昨天 ' + dateArr[3] + ':' + dateArr[4];
        } // 前天
        else if (dateArr[0] == nowArr[0] && dateArr[1] == nowArr[1] && parseInt(nowArr[2]) - parseInt(dateArr[2]) == 2) {
            time = '前天 ' + dateArr[3] + ':' + dateArr[4];
          } // 同年内
          else if (dateArr[0] == nowArr[0]) {
              // time = dateArr[0]+'/'+dateArr[1]+'/'+dateArr[2];
              time = Math.floor(dateArr[1]) + '月' + Math.floor(dateArr[2]) + '日'; // time = Math.floor(dateArr[1])+'月'+Math.floor(dateArr[2])+'日 '+dateArr[3]+':'+dateArr[4];
            } // 不同年
            else {
                time = dateArr[0] + '年' + dateArr[1] + '月' + dateArr[2] + '日';
              }

  }

  return time;
};

exports.dateDiff = dateDiff;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAccessToken = addAccessToken;
exports.removeAccessToken = removeAccessToken;
exports.updateUser = updateUser;
exports.updatePassword = updatePassword;
exports.loadUserInfo = void 0;

var _graphql = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function setUser(userinfo) {
  return {
    type: 'SET_USER',
    userinfo: userinfo
  };
}

function addAccessToken(_ref) {
  var accessToken = _ref.accessToken;
  return function (dispatch, getState) {
    dispatch({
      type: 'ADD_ACCESS_TOKEN',
      access_token: accessToken
    });
  };
}

function removeAccessToken() {
  return function (dispatch, getState) {
    dispatch({
      type: 'REMOVE_ACCESS_TOKEN'
    });
  };
}
/**
 * 获取用户信息
 * @param  {String} accessToken 访问的token
 */


var loadUserInfo = function loadUserInfo(_ref2) {
  var accessToken = _ref2.accessToken;
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve, reject) {
        var _ref4, _ref5, err, res;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _graphql["default"])({
                  apis: [{
                    // aliases,
                    api: 'selfInfo',
                    args: {},
                    fields: "\n          _id\n          nickname_reset_at\n          create_at\n          last_sign_at\n          blocked\n          role\n          avatar\n          brief\n          source\n          posts_count\n          comment_count\n          fans_count\n          like_count\n          follow_people_count\n          follow_topic_count\n          follow_posts_count\n          block_people_count\n          block_posts_count\n          block_comment_count\n          gender\n          nickname\n          banned_to_post\n          avatar_url\n          email\n          weibo\n          qq\n          github\n          phone\n          area_code\n          find_notification_at\n          last_find_feed_at\n          last_find_favorite_at\n          has_password\n          theme\n          user_cover\n          "
                  }],
                  headers: {
                    accessToken: accessToken || getState().user.accessToken
                  }
                });

              case 2:
                _ref4 = _context.sent;
                _ref5 = _slicedToArray(_ref4, 2);
                err = _ref5[0];
                res = _ref5[1];

                if (err) {
                  resolve([err]);
                } else {
                  // res.phone = '';
                  if (dispatch) {
                    dispatch({
                      type: 'SET_USER',
                      userinfo: res
                    });

                    if (accessToken) {
                      dispatch({
                        type: 'ADD_ACCESS_TOKEN',
                        access_token: accessToken
                      });
                    }
                  }

                  resolve([null, res]);
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  };
};
/**
 * 更新用户
 * @param  {Object} args 更新内容，具体更新内容请查看想要的api
 * @return {Array}      err 错误， res 结果
 */


exports.loadUserInfo = loadUserInfo;

function updateUser(args) {
  return (
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(
                /*#__PURE__*/
                function () {
                  var _ref7 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee2(resolve) {
                    var _ref8, _ref9, err, res;

                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            args._id = getState().user.userInfo._id;
                            _context2.next = 3;
                            return (0, _graphql["default"])({
                              type: 'mutation',
                              apis: [{
                                api: 'updateUser',
                                args: args,
                                fields: "success"
                              }],
                              headers: {
                                accessToken: getState().user.accessToken
                              }
                            });

                          case 3:
                            _ref8 = _context2.sent;
                            _ref9 = _slicedToArray(_ref8, 2);
                            err = _ref9[0];
                            res = _ref9[1];
                            resolve([err, res]);

                          case 8:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x5) {
                    return _ref7.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3, _x4) {
        return _ref6.apply(this, arguments);
      };
    }()
  );
}
/**
 * 更新密码
 * @param  {Object} args 更新内容，具体更新内容请查看想要的api
 * @return {Array}      err 错误， res 结果
 */


function updatePassword(args) {
  return (
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise(
                /*#__PURE__*/
                function () {
                  var _ref11 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee4(resolve) {
                    var _ref12, _ref13, err, res;

                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            args.user_id = getState().user.userInfo._id;
                            _context4.next = 3;
                            return (0, _graphql["default"])({
                              type: 'mutation',
                              apis: [{
                                api: 'updatePassword',
                                args: args,
                                fields: "success"
                              }],
                              headers: {
                                accessToken: getState().user.accessToken
                              }
                            });

                          case 3:
                            _ref12 = _context4.sent;
                            _ref13 = _slicedToArray(_ref12, 2);
                            err = _ref13[0];
                            res = _ref13[1];
                            resolve([err, res]);

                          case 8:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x8) {
                    return _ref11.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x6, _x7) {
        return _ref10.apply(this, arguments);
      };
    }()
  );
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = to;

// Peomise 结果处理，返回数组 [err, res]
// err 为错误结果，res 为正确结果
function to(promise) {
  if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
    return new Promise(function (resolve, reject) {
      reject(new Error("requires promises as the param"));
    })["catch"](function (err) {
      return [err, null];
    });
  }

  return promise.then(function (data) {
    return [null, data];
  })["catch"](function (err) {
    return [err];
  });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTopicListById = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var name, data;

  var _ret = function () {
    switch (action.type) {
      case 'SET_TOPICS':
        state = action.state;
        break;

      case 'SET_TOPIC_LIST_BY_ID':
        name = action.name;
        data = action.data;
        if (name && data) state[name] = data;
        break;

      case 'UPDATE_TOPIC':
        for (var i in state) {
          state[i].data.map(function (item) {
            if (item._id == action.id) {
              for (var _i in action.update) {
                item[_i] = action.update[_i];
              }
            }
          });
        }

        break;

      case 'UPDATE_TOPIC_FOLLOW':
        var id = action.id,
            followStatus = action.followStatus;

        var _loop = function _loop(_i2) {
          var nodes = state[_i2];
          nodes = nodes.data;

          var _loop2 = function _loop2(n, length) {
            if (nodes[n]._id == id) {
              state[_i2].data[n].follow_count += followStatus ? 1 : -1;
              state[_i2].data[n].follow = followStatus;
            }

            if (nodes[n].children && nodes[n].children.length > 0) {
              nodes[n].children.map(function (node, key) {
                if (node._id == id) {
                  state[_i2].data[n].children[key].follow_count += followStatus ? 1 : -1;
                  state[_i2].data[n].children[key].follow = followStatus;
                }
              });
            }
          };

          for (var n = 0, length = nodes.length; n < length; n++) {
            _loop2(n, length);
          }
        };

        for (var _i2 in state) {
          _loop(_i2);
        }

        break;

      default:
        return {
          v: state
        };
    }
  }();

  if (_typeof(_ret) === "object") return _ret.v;
  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getTopicListById = function getTopicListById(state, id) {
  return state.topic[id];
};

exports.getTopicListById = getTopicListById;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// const cloneObj = (obj: any) => {
//   return JSON.parse(JSON.stringify(obj))
// }
// 从html字符串中，获取所有图片地址
var abstractImagesFromHTML = function abstractImagesFromHTML(str) {
  var imgReg = /<img(?:(?:".*?")|(?:'.*?')|(?:[^>]*?))*>/gi;
  var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
  var result = [];
  var img;

  while (img = imgReg.exec(str)) {
    var _img = img[0].match(srcReg);

    if (_img && _img[1]) result.push(_img[1]);
  }

  return result;
};
/**
 * html to string
 * @param  {[type]} html [description]
 * @return {[type]}      [description]
 */


var htmlToString = function htmlToString(html) {
  var imgReg = /<img(.*?)>/gi;
  var imgs = [];
  var img;

  while (img = imgReg.exec(html)) {
    imgs.push(img[0]);
  }

  imgs.map(function (item) {
    html = html.replace(item, '[图片] ');
  }); // 删除所有html标签

  html = html.replace(/<[^>]+>/g, "");
  return html;
}; // <img /> to [图片]


var htmlImgToText = function htmlImgToText(html) {
  var imgReg = /<img(.*?)>/gi;
  var imgs = [];
  var img;

  while (img = imgReg.exec(html)) {
    imgs.push(img[0]);
  }

  imgs.map(function (item) {
    html = html.replace(item, '[图片] ');
  }); // 删除所有html标签
  // html = html.replace(/<[^>]+>/g,"");

  return html;
}; // 图像优化，给html中的img图片，增加一些七牛参数，优化最大宽度，格式等


var htmlImageOptimization = function htmlImageOptimization(str) {
  var imgReg = /<img(?:(?:".*?")|(?:'.*?')|(?:[^>]*?))*>/gi;
  var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
  var img;

  while (img = imgReg.exec(str)) {
    var oldImgDom = img[0];

    if (oldImgDom) {
      var _img = oldImgDom.match(srcReg);

      if (_img && _img[1]) {
        var newImg = oldImgDom.replace(_img[1], _img[1] + '?imageView2/2/w/800/auto-orient/format/jpg');
        str = str.replace(oldImgDom, newImg);
      }
    }
  }

  return str;
}; // export {
//   abstractImagesFromHTML,
//   htmlToString,
//   htmlImgToText,
//   htmlImageOptimization
// }
// exports.abstractImagesFromHTML = abstractImagesFromHTML;
// exports.htmlToString = htmlToString;
// exports.htmlImgToText = htmlImgToText;
// exports.htmlImageOptimization = htmlImageOptimization;
// exports.merge = cloneObj;


var _default = {
  abstractImagesFromHTML: abstractImagesFromHTML,
  htmlToString: htmlToString,
  htmlImgToText: htmlImgToText,
  htmlImageOptimization: htmlImageOptimization
};
exports["default"] = _default;

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("use-react-router");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _graphql = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 创建加载列表类型数据的通用方法
function _default(obj) {
  return function (params) {
    return function (dispatch, getState) {
      var _obj = JSON.parse(JSON.stringify(obj));

      _obj.processList = obj.processList;
      if (params.id) _obj.id = params.id;
      if (params.args) _obj.args = params.args;
      if (params.fields) _obj.fields = params.fields;
      if (params.restart) _obj.restart = params.restart;
      return loadList(dispatch, getState)(_obj);
    };
  };
}

var loadList = function loadList(dispatch, getState) {
  return function (_ref) {
    var id = _ref.id,
        reducerName = _ref.reducerName,
        actionType = _ref.actionType,
        _ref$processList = _ref.processList,
        processList = _ref$processList === void 0 ? function (data) {
      return data;
    } : _ref$processList,
        api = _ref.api,
        args = _ref.args,
        fields = _ref.fields,
        _ref$restart = _ref.restart,
        restart = _ref$restart === void 0 ? false : _ref$restart,
        _ref$unshift = _ref.unshift,
        unshift = _ref$unshift === void 0 ? false : _ref$unshift;
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve, reject) {
        var state, list, accessToken, apis, data, err, res, s, _ref3, _ref4, _ref5, _ref6, _data;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                state = getState(), list = state[reducerName][id] || {}, accessToken = state.user.accessToken || ''; // 让列表重新开始

                if (restart) list = {}; // 正在加载中

                if (!list.loading) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", resolve(['loading...']));

              case 4:
                if (!(typeof list.more != 'undefined' && !list.more)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", resolve([null, list]));

              case 6:
                // 如果没有data属性，添加data属性
                // if (!Reflect.has(list, 'data')) list.data = [];
                if (!list.data) list.data = []; // 如果没有filters，添加filters
                // if (!Reflect.has(list, 'filters')) {

                if (typeof list.filters == 'undefined') {
                  if (typeof args.page_number == 'undefined') args.page_number = 1;
                  if (typeof args.page_size == 'undefined') args.page_size = 25; // if (!Reflect.has(args, 'page_number')) args.page_number = 1;
                  // if (!Reflect.has(args, 'page_size')) args.page_size = 25;

                  args.page_number = parseInt(args.page_number);
                  args.page_size = parseInt(args.page_size);
                  list.filters = args;
                } else {
                  // 如果已经存在，那么获取下一页的内容
                  args = list.filters;
                  args.page_number += 1;
                }

                list.loading = true;
                if (actionType) dispatch({
                  type: actionType,
                  name: id,
                  data: list
                });
                apis = [{
                  aliases: 'list',
                  api: api,
                  args: args,
                  fields: fields
                }];
                data = [];

                if (args._id) {
                  _context.next = 23;
                  break;
                }

                // 如果没有count，那么查询count数量
                if (!Reflect.has(list, 'count')) {
                  s = Object.assign({}, args);
                  delete s.page_size;
                  delete s.page_number;
                  delete s.sort_by;
                  apis.push({
                    aliases: 'count',
                    api: 'count' + api.charAt(0).toUpperCase() + api.slice(1),
                    args: s,
                    fields: "count"
                  });
                }

                _context.next = 16;
                return (0, _graphql["default"])({
                  apis: apis,
                  headers: {
                    accessToken: accessToken
                  }
                });

              case 16:
                _ref3 = _context.sent;
                _ref4 = _slicedToArray(_ref3, 2);
                err = _ref4[0];
                res = _ref4[1];

                if (res && res.count) {
                  list.count = res.count.count;
                  data = res.list;
                } else {
                  data = res;
                }

                _context.next = 31;
                break;

              case 23:
                _context.next = 25;
                return (0, _graphql["default"])({
                  apis: apis,
                  headers: {
                    accessToken: accessToken
                  }
                });

              case 25:
                _ref5 = _context.sent;
                _ref6 = _slicedToArray(_ref5, 2);
                err = _ref6[0];
                res = _ref6[1];
                list.count = 1;
                data = res;

              case 31:
                if (!err) {
                  _context.next = 35;
                  break;
                }

                list.loading = false;
                resolve([null, list]);
                return _context.abrupt("return");

              case 35:
                data = JSON.parse(JSON.stringify(data));
                _data = processList(data, {
                  dispatch: dispatch,
                  getState: getState
                }, id);

                if (unshift) {
                  list.data = _data.concat(list.data);
                } else {
                  list.data = list.data.concat(_data);
                }

                list.filters = args;
                list.loading = false;
                list.more = list.filters.page_size * list.filters.page_number > list.count ? false : true;
                if (actionType) dispatch({
                  type: actionType,
                  name: id,
                  data: list
                });
                resolve([null, list]);

              case 43:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-meta-tags");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setScrollPosition = setScrollPosition;
exports.saveScrollPosition = saveScrollPosition;

function setScrollPosition(name) {
  return function (dispatch, getState) {
    dispatch({
      type: 'SET_SCROLL_POSITION',
      name: name
    });
  };
}

function saveScrollPosition(name) {
  return function (dispatch, getState) {
    dispatch({
      type: 'SAVE_SCROLL_POSITION',
      name: name
    });
  };
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNativeStorage = _interopRequireDefault(__webpack_require__(83));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/sunnylqm/react-native-storage/blob/master/README.zh-CN.md
// import AsyncStorage from '@react-native-community/async-storage';
var obj = null;

if (false) {}

var _default = {
  save: function save(data) {
    return new Promise(function (resolve) {
      obj.save(data).then(function (res) {
        resolve(res);
      })["catch"](function (err) {
        // console.log(err);
        resolve();
      });
    });
  },
  load: function load(data) {
    return new Promise(function (resolve) {
      obj.load(data).then(function (res) {
        resolve(res);
      })["catch"](function (err) {
        // console.log(err);
        resolve();
      });
    });
  },
  remove: function remove(data) {
    obj.remove(data);
  }
};
exports["default"] = _default;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPostsListById = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_POSTS':
      state = action.state;
      break;

    case 'SET_POSTS_LIST_BY_ID':
      var name = action.name,
          data = action.data;
      if (name && data) state[name] = data;
      break;

    case 'REMOVE_POSTS_LIST_BY_ID':
      if (action.id && state[action.id]) delete state[action.id];
      break;
    // 更新所有列表中 questionid 的 follow 状态

    case 'UPDATE_POSTS_FOLLOW':
      for (var i in state) {
        var _data = state[i].data;

        if (_data.length > 0) {
          for (var n = 0, max = _data.length; n < max; n++) {
            if (_data[n]._id == action.id) {
              state[i].data[n].follow_count += action.followStatus ? 1 : -1;
              state[i].data[n].follow = action.followStatus;
            }
          }
        }
      }

      break;
    // 更新所有列表中 questionid 的 follow 状态

    case 'UPDATE_POSTS_AUHTOR_FOLLOW':
      for (var _i in state) {
        var _data2 = state[_i].data;

        if (_data2.length > 0) {
          for (var _n = 0, _max = _data2.length; _n < _max; _n++) {
            if (_data2[_n].user_id && _data2[_n].user_id._id == action.peopleId) {
              // state[i].data[n].follow_count += followStatus ? 1 : -1
              state[_i].data[_n].user_id.follow = action.followStatus;
            }
          }
        }
      }

      break;

    /*
    case 'UPDATE_POSTS_COMMENT_LIKE_STATUS':
    // var { id, status } = action
     for (let i in state) {
      let data = state[i].data
       data.map((post: any)=>{
         if (post.comment && post.comment.length) {
           post.comment.map((comment: any)=>{
            if (comment._id == id) {
              comment.like_count += action.status ? 1 : -1
              comment.like = action.status
            }
          })
         }
       })
     }
    break;
    */

    case 'UPDATE_POSTS_LIKE_STATUS':
      var id = action.id,
          status = action.status;

      for (var _i2 in state) {
        var _data3 = state[_i2].data;

        _data3.map(function (post) {
          if (post._id == id) {
            post.like_count += status ? 1 : -1;
            post.like = status;
          }
        });
      }

      break;

    case 'UPDATE_POSTS_VIEW':
      var id = action.id;

      for (var _i3 in state) {
        state[_i3].data.map(function (item) {
          if (item._id == id) {
            item.view_count += 1;
          }
        });
      }

      break;

    case 'UPDATE_POST':
      var id = action.id,
          update = action.update;

      for (var _i4 in state) {
        state[_i4].data.map(function (item) {
          if (item._id == id) {
            for (var _i5 in update) {
              item[_i5] = update[_i5];
            }
          }
        });
      }

      break;

    case 'REMOVE_POSTS_BY_ID':
      var id = action.id;

      for (var _i6 in state) {
        if (_i6 == id) {
          delete state[_i6];
        } else {
          var _data4 = state[_i6].data;

          if (_data4.length > 0) {
            for (var _n2 = 0, _max2 = _data4.length; _n2 < _max2; _n2++) {
              if (_data4[_n2]._id == id) {
                _data4.splice(_n2, 1);

                break;
              }
            }
          }
        }
      }

      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getPostsListById = function getPostsListById(state, id) {
  return state.posts[id];
};

exports.getPostsListById = getPostsListById;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSessionListById = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_SESSION':
      state = action.state;
      break;

    case 'UPDATE_READ_BY_ID':
      for (var i in state) {
        state[i].data.map(function (item) {
          if (item._id == action.id) {
            item.unread_count = 0;
          }
        });
      }

      break;

    case 'SET_SESSION_LIST_BY_ID':
      var name = action.name,
          data = action.data;
      if (name && data) state[name] = data;
      break;

    case 'UPDATE_SESSION':
      var id = action.id,
          update = action.update;

      for (var _i in state) {
        state[_i].data.map(function (item) {
          if (item._id == id) {
            for (var _i2 in update) {
              item[_i2] = update[_i2];
            }
          }
        });
      }

      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getSessionListById = function getSessionListById(state, id) {
  return state.session[id];
};

exports.getSessionListById = getSessionListById;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-react-css-modules/dist/browser/getClassName");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOnlineUserCount = setOnlineUserCount;
exports.saveTopicId = saveTopicId;
exports.saveTab = saveTab;
exports.requestNotificationPermission = requestNotificationPermission;
exports.sendNotification = sendNotification;
exports.loadOperatingStatus = loadOperatingStatus;

var _graphql = _interopRequireDefault(__webpack_require__(2));

var GlobalData = _interopRequireWildcard(__webpack_require__(12));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function setOnlineUserCount(online) {
  return function (dispatch, getState) {
    dispatch({
      type: 'SET_ONLINE_STATUS',
      online: online
    });
  };
}

function saveTopicId(topicId) {
  return function (dispatch, getState) {
    dispatch({
      type: 'SET_TOPIC_ID',
      topicId: topicId
    });
  };
}

function saveTab(tab) {
  return function (dispatch, getState) {
    // if (tab != 'home' && tab != 'follow' && tab != 'favorite' && tab != 'live' && tab != 'topic') tab = 'home';
    dispatch({
      type: 'SET_TAB',
      tab: tab
    });
  };
} // 请求浏览器通知权限


function requestNotificationPermission() {
  return function (dispatch, getState) {
    if ('Notification' in window) {
      Notification.requestPermission(function (result) {
        if (result == 'granted') {
          dispatch({
            type: 'SET_NOTIFICATION_PERMISSION',
            status: true
          });
        }
      });
    }
  };
}

function sendNotification(_ref) {
  var content = _ref.content,
      option = _ref.option;
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var notification, href;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                notification = new Notification(content, option);
                href = '';

                notification.onclick = function (res) {
                  switch (res.target.tag) {
                    case 'message':
                      href = '/sessions';
                      break;

                    case 'comment':
                      href = '/comment/' + (option.data.comment_id.parent_id ? option.data.comment_id.parent_id : option.data.comment_id._id);
                      break;
                  }

                  if (href) {
                    var history = GlobalData.get('history');
                    if (history) history.push(href);
                  }

                  notification.close();
                };

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}
/*
// 查询是否有新动态，用于小红点提醒
export function getNew () {
  return async (dispatch: any, getState: any) => {

    let user = getState().user;
    let userInfo = user.userInfo;

    let [ err, res ] = await graphql({
      headers: { accessToken: user.accessToken },
      apis: [
        {
          aliases: 'userNotification',
          api: 'fetchUnreadUserNotification',
          args: {},
          fields: `ids`
        },

        // {
        //   aliases: 'excellent',
        //   api: 'posts',
        //   args: {
        //     sort_by: "create_at:-1",
        //     deleted: false,
        //     weaken: false,
        //     recommend: true,
        //     page_size:1
        //   },
        //   fields: `create_at`
        // },
        // {
        //   aliases: 'posts',
        //   api: 'posts',
        //   args: {
        //     sort_by: "sort_by_date",
        //     deleted: false,
        //     weaken: false,
        //     page_size:1
        //   },
        //   fields: `create_at`
        // },
        //
        //
        {
          aliases: 'favorite',
          api: 'posts',
          args: {
            method: 'favorite',
            sort_by: "last_comment_at:-1",
            deleted: false,
            weaken: false,
            page_size:1
          },
          fields: `last_comment_at`
        },
        {
          aliases: 'feed',
          api: 'feed',
          args: {
            preference: true,
            sort_by: "create_at:-1",
            page_size:1
          },
          fields: `create_at`
        },
        {
          aliases: 'message',
          api: 'countMessages',
          args: {
            has_read: false
          },
          fields: `count`
        }
      ]
    });

    if (res) {

      // console.log(res);

      // 通知
      if (res['userNotification'] && res['userNotification'].ids.length > 0) {
        dispatch({ type: 'SET_UNREAD_NOTICE', unreadNotice: res['userNotification'].ids });
      }

      // 订阅
      if (res['favorite'] && res['favorite'][0] &&
        userInfo.last_find_favorite_at &&
        new Date(userInfo.last_find_favorite_at).getTime() < new Date(res['favorite'][0].last_comment_at).getTime()
      ) {
        dispatch({ type: 'HAS_NEW_SUBSCRIBE', status: true });
      }

      // 关注
      if (res['feed'] && res['feed'][0] &&
        userInfo.last_find_feed_at &&
        new Date(userInfo.last_find_feed_at).getTime() < new Date(res['feed'][0].create_at).getTime()
      ) {
        dispatch({ type: 'HAS_NEW_FEED', status: true });
      }

      // 优选
      // if (res['excellent'] && res['excellent'][0] &&
      //   userInfo.last_find_excellent_at &&
      //   new Date(userInfo.last_find_excellent_at).getTime() < new Date(res['excellent'][0].create_at).getTime()
      // ) {
      //   dispatch({ type: 'HAS_NEW_EXCELLENT', status: true });
      // }

    }

  }
}
*/
// 加载网站经营状态


function loadOperatingStatus() {
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(resolve) {
        var _ref4, _ref5, err, res;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _graphql["default"])({
                  apis: [{
                    api: 'countPosts',
                    args: {},
                    fields: "count"
                  }, {
                    api: 'countUsers',
                    args: {},
                    fields: "count"
                  }, {
                    api: 'countComments',
                    args: {
                      parent_id: 'not-exists'
                    },
                    fields: "count"
                  }, {
                    api: 'countComments',
                    args: {
                      parent_id: 'exists'
                    },
                    fields: "count",
                    aliases: 'countReply'
                  }]
                });

              case 2:
                _ref4 = _context2.sent;
                _ref5 = _slicedToArray(_ref4, 2);
                err = _ref5[0];
                res = _ref5[1];
                dispatch({
                  type: 'SET_OPERATING_STATUS',
                  data: res
                });
                resolve([err, res]);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
  };
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = exports.signOut = exports.signIn = exports.saveTokenToCookie = void 0;

var _graphql = _interopRequireDefault(__webpack_require__(2));

var _unlockToken = __webpack_require__(43);

var globalData = _interopRequireWildcard(__webpack_require__(12));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import * as ServiceWorker from '../../common/service-worker';
// import * as ServiceWorker from '@app/common/service-worker';
// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// console.log(OfflinePluginRuntime);
// cookie安全措施，在服务端使用 http only 方式储存cookie
var saveTokenToCookie = function saveTokenToCookie(_ref) {
  var access_token = _ref.access_token;
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve, reject) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (true) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                $.ajax({
                  url: '/sign/in',
                  type: 'post',
                  data: {
                    access_token: access_token
                  },
                  async: false,
                  success: function success(res) {
                    if (res && res.success) {
                      resolve(res);
                    } else {
                      reject(res);
                    }
                  },
                  error: function error(err) {
                    console.log(err);
                  }
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  };
}; // 登录


exports.saveTokenToCookie = saveTokenToCookie;

var signIn = function signIn(_ref3) {
  var data = _ref3.data;
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(resolve, reject) {
        var _ref5, _ref6, err, res;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _graphql["default"])({
                  apis: [{
                    api: 'signIn',
                    args: data,
                    fields: "\n            user_id\n            access_token\n          "
                  }]
                });

              case 2:
                _ref5 = _context2.sent;
                _ref6 = _slicedToArray(_ref5, 2);
                err = _ref6[0];
                res = _ref6[1];

                if (!err) {
                  _context2.next = 10;
                  break;
                }

                reject(err ? err.message : '账号或密码错误');
                _context2.next = 16;
                break;

              case 10:
                resolve(res); // 浏览器环境

                if (!(res && res.access_token && typeof document != 'undefined')) {
                  _context2.next = 16;
                  break;
                }

                _context2.next = 14;
                return saveTokenToCookie(res)(dispatch, getState);

              case 14:
                globalData.get('service-worker').uninstall();
                setTimeout(function () {
                  window.location.reload();
                }, 300); // if ('serviceWorker' in navigator) {
                //   navigator.serviceWorker.getRegistrations().then(registrations => {
                //     for (const registration of registrations) {
                //       registration.unregister()
                //     }
                //     window.location.reload();
                //   }).catch(err=>{
                //     window.location.reload();
                //   })
                // } else {
                //   window.location.reload();
                // }
                // setTimeout(()=>{
                //   window.location.reload();
                // }, 10000);
                // window.location.reload();

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  };
};

exports.signIn = signIn;

var signOut = function signOut() {
  return function (dispatch, getState) {
    // return new Promise(async (resolve, reject) => {
    (0, _unlockToken.removeUnlockToken)()(dispatch, getState);
    $.ajax({
      url: '/sign/out',
      type: 'post',
      success: function () {
        var _success = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(res) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (res && res.success) {
                    if (res.success && typeof window != 'undefined') {
                      globalData.get('service-worker').uninstall();
                      setTimeout(function () {
                        window.location.reload();
                      }, 300); // await window._serviceWorker.update();
                      // window.location.reload();

                      /*
                      if ('serviceWorker' in navigator) {
                        navigator.serviceWorker.getRegistrations().then(registrations => {
                          for (const registration of registrations) {
                            registration.unregister()
                          }
                          window.location.reload();
                        }).catch(err=>{
                          window.location.reload();
                        })
                      } else {
                        window.location.reload();
                      }
                      */
                      // OfflinePluginRuntime.update();
                      // 退出成功跳转到首页
                      // setTimeout(()=>{
                      // window.location.reload();
                      // }, 10000);
                    }
                  } else {
                    alert('退出失败');
                  }

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function success(_x5) {
          return _success.apply(this, arguments);
        }

        return success;
      }()
    });
  };
};

exports.signOut = signOut;

var signUp = function signUp(args) {
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(resolve) {
        var _ref8, _ref9, err, res;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _graphql["default"])({
                  type: 'mutation',
                  apis: [{
                    api: 'addUser',
                    args: args,
                    fields: "success"
                  }]
                });

              case 2:
                _ref8 = _context4.sent;
                _ref9 = _slicedToArray(_ref8, 2);
                err = _ref9[0];
                res = _ref9[1];

                if (err) {
                  resolve([err]);
                } else {
                  resolve([null, res]);
                }

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
  };
};

exports.signUp = signUp;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadTopicList = void 0;

var _newGraphqlLoadList = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loadTopicList = (0, _newGraphqlLoadList["default"])({
  reducerName: 'topic',
  actionType: 'SET_TOPIC_LIST_BY_ID',
  api: 'topics',
  fields: "\n    _id\n    name\n    brief\n    description\n    avatar\n    background\n    follow_count\n    posts_count\n    comment_count\n    sort\n    create_at\n    language\n    recommend\n    user_id\n    follow\n    parent_id {\n      _id\n      name\n      brief\n      avatar\n    }\n    children {\n      _id\n      name\n      brief\n      avatar\n    }\n  "
});
exports.loadTopicList = loadTopicList;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNotificationListById = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_NOTIFICATION':
      state = action.state;
      break;

    case 'SET_NOTIFICATION_LIST_BY_ID':
      var name = action.name,
          data = action.data;
      if (name && data) state[name] = data;
      break;

    case 'UPDATE_NOTIFICATION':
      var id = action.id,
          update = action.update;

      for (var i in state) {
        state[i].data.map(function (item) {
          if (item._id == id) {
            for (var _i in update) {
              item[_i] = update[_i];
            }
          }
        });
      }

      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getNotificationListById = function getNotificationListById(state, id) {
  return state.notification[id];
};

exports.getNotificationListById = getNotificationListById;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPeopleListById = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_PEOPLE':
      state = action.state;
      break;

    case 'SET_PEOPLE_LIST_BY_ID':
      var name = action.name,
          data = action.data;
      if (name && data) state[name] = data;
      break;

    case 'UPDATE_PEOPLE':
      var id = action.id,
          update = action.update;

      for (var i in state) {
        state[i].data.map(function (item) {
          if (item._id == id) {
            for (var _i in update) {
              item[_i] = update[_i];
            }
          }
        });
      }

      break;
    // 添加单个人到other
    // case 'ADD_PEOPLE':
    //   var { people } = action
    //   state['other'].data.push(people)
    //   break;

    case 'UPLOAD_PEOPLE_FOLLOW':
      var peopleId = action.peopleId,
          followStatus = action.followStatus,
          selfId = action.selfId;

      for (var _i2 in state) {
        var people = state[_i2].data;
        people.map(function (item) {
          // 更新用户粉丝数量和状态
          if (item._id == peopleId) {
            item.fans_count += followStatus ? 1 : -1;
            item.follow = followStatus;
          } // 更新自己关注用户的累积


          if (item._id == selfId) {
            item.follow_people_count += followStatus ? 1 : -1;
          }
        });
      }

      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getPeopleListById = function getPeopleListById(state, id) {
  return state.people[id];
};

exports.getPeopleListById = getPeopleListById;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommentListById = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_COMMENT_LIST_BY_ID':
      var name = action.name,
          data = action.data;
      if (name && data) state[name] = data;
      break;

    case 'SET_COMMENT':
      return action.state;

    case 'UPDATE_COMMENT':
      var id = action.id,
          update = action.update;

      for (var i in state) {
        state[i].data.map(function (item) {
          if (item._id == id) {
            for (var _i in update) {
              item[_i] = update[_i];
            }
          }

          if (item.reply) {
            item.reply.map(function (reply) {
              if (reply._id == id) {
                for (var _i2 in update) {
                  reply[_i2] = update[_i2];
                }
              }
            });
          }
        });
      }

      break;

    case 'UPDATE_COMMENT_LIKE':
      var id = action.id,
          status = action.status;

      for (var _i3 in state) {
        state[_i3].data.map(function (item) {
          if (item._id == id) {
            if (typeof item.like_count != 'undefined') item.like_count += status ? 1 : -1;
            if (typeof item.like != 'undefined') item.like = status; // if (Reflect.has(item, 'like_count')) item.like_count += status ? 1 : -1
            // if (Reflect.has(item, 'like')) item.like = status
          }

          if (item.reply) {
            item.reply.map(function (item) {
              if (item._id == id) {
                if (typeof item.like_count != 'undefined') item.like_count += status ? 1 : -1;
                if (typeof item.like != 'undefined') item.like = status; // if (Reflect.has(item, 'like_count')) item.like_count += status ? 1 : -1
                // if (Reflect.has(item, 'like')) item.like = status
              }
            });
          }
        });
      }

      break;

    case 'REMOVE_COMMENT_BY_ID':
      var id = action.id;

      var _loop = function _loop(_i4) {
        if (_i4 == id) {
          delete state[_i4];
          return "continue";
        }

        var commentList = state[_i4].data;
        commentList.map(function (comment, index) {
          if (comment._id == id) commentList.splice(index, 1);
          var replyList = comment.reply || [];
          replyList.map(function (reply, index) {
            if (reply._id == id) replyList.splice(index, 1);
          });
        });
      };

      for (var _i4 in state) {
        var _ret = _loop(_i4);

        if (_ret === "continue") continue;
      }

      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getCommentListById = function getCommentListById(state, id) {
  return state.comment[id];
};

exports.getCommentListById = getCommentListById;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountries = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = [];

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_COUNTRIES':
      state = action.countries;
      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
}; // 获取国家列表


exports["default"] = _default;

var getCountries = function getCountries(state) {
  return state.countries;
};

exports.getCountries = getCountries;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFeedListById = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_FEED':
      state = action.state;
      break;

    case 'SET_FEED_LIST_BY_ID':
      var name = action.name,
          data = action.data;
      if (name && data) state[name] = data;
      break;

    case 'UPDATE_COMMENT_LIKE':
      var id = action.id,
          status = action.status;

      var _loop = function _loop(i) {
        state[i].data.map(function (item, key) {
          if (item.comment_id && item.comment_id._id == id) {
            state[i].data[key].comment_id.like = status;
            state[i].data[key].comment_id.like_count += status ? 1 : -1;
          }
        });
      };

      for (var i in state) {
        _loop(i);
      }

      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getFeedListById = function getFeedListById(state, id) {
  return state.feed[id];
};

exports.getFeedListById = getFeedListById;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHasReadByPostsId = getHasReadByPostsId;
exports.getHasReadByCommentId = getHasReadByCommentId;
exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {
  posts: {},
  comments: {}
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INIT_HAS_READ_POSTS_STATE':
      state = action.state;
      break;
    // 设置已读

    case 'ADD_POSTS_HAS_READ':
      var postsId = action.postsId,
          _action$total = action.total,
          total = _action$total === void 0 ? 0 : _action$total;
      if (postsId) state.posts[postsId] = total;
      break;

    case 'ADD_COMMENT_HAS_READ':
      var commentId = action.commentId,
          _action$total2 = action.total,
          total = _action$total2 === void 0 ? 0 : _action$total2;
      if (commentId) state.comments[commentId] = total;
      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

function getHasReadByPostsId(state, _ref) {
  var postsId = _ref.postsId,
      total = _ref.total;

  if (typeof state.hasReadPosts.posts[postsId] != 'undefined') {
    return total - state.hasReadPosts.posts[postsId];
  }

  return -1;
}

function getHasReadByCommentId(state, _ref2) {
  var commentId = _ref2.commentId,
      total = _ref2.total;

  if (typeof state.hasReadPosts.comments[commentId] != 'undefined' && state.hasReadPosts.comments[commentId] >= total) {
    return true;
  }

  return false;
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLiveListById = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_LIVE_LIST_BY_ID':
      var name = action.name,
          data = action.data;
      if (name && data) state[name] = data;
      break;

    case 'ADD_AUDIENCE_BY_LIVE_ID':
      console.log('+1');
      if (action.id) state[action.id].data[0].audience_count += 1;
      break;

    case 'REMOVE_AUDIENCE_BY_LIVE_ID':
      console.log('-1');
      if (action.id) state[action.id].data[0].audience_count += -1;
      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getLiveListById = function getLiveListById(state, id) {
  return state.live[id];
};

exports.getLiveListById = getLiveListById;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCaptchaById = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_CAPTCHA_ID':
      var id = action.id,
          data = action.data;
      if (id && data) state[id] = data;
      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getCaptchaById = function getCaptchaById(state, id) {
  return state.captcha[id] || null;
};

exports.getCaptchaById = getCaptchaById;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFollowListById = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_FOLLOW':
      state = action.state;

    case 'SET_FOLLOW_LIST_BY_ID':
      var name = action.name,
          data = action.data;
      if (name && data) state[name] = data;
      break;
    // 更新所有列表中 questionid 的 follow 状态

    case 'UPDATE_FOLLOW':
      var id = action.id,
          selfId = action.selfId,
          followStatus = action.followStatus;

      for (var i in state) {
        var _data = state[i].data;

        if (_data.length > 0) {
          _data.map(function (item) {
            // 更新用户关注状态
            if (item.people_id && item.people_id._id == id) {
              item.people_id.follow = followStatus;
            } // 更新自己关注用户的累计数


            if (item.people_id && item.people_id._id == selfId) {
              item.people_id.follow_people_count += followStatus ? 1 : -1;
            } // 更新用户关注状态


            if (item.user_id && item.user_id._id == id) {
              item.user_id.follow = followStatus;
            } // 更新自己关注用户的累计数


            if (item.user_id && item.user_id._id == selfId) {
              item.user_id.fans_count += followStatus ? 1 : -1;
            }

            if (item.topic_id && item.topic_id._id == id) {
              item.topic_id.follow = followStatus;
            }

            if (item.posts_id && item.posts_id._id == id) {
              item.posts_id.follow = followStatus;
            }
          });
        }
      }

      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getFollowListById = function getFollowListById(state, id) {
  return state.follow[id];
};

exports.getFollowListById = getFollowListById;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReportTypes = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = [];

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_REPORT_TYPES':
      state = action.types;
      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getReportTypes = function getReportTypes(state) {
  return state.reportTypes;
};

exports.getReportTypes = getReportTypes;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlockListById = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_BLOCK_STATE':
      state = action.state;

    case 'SET_BLOCK_LIST_BY_ID':
      var name = action.name,
          data = action.data;
      if (name && data) state[name] = data;
      break;

    case 'REMOVE_BLOCK_BY_ID':
      for (var i in state) {
        var _data = state[i].data;

        if (_data.length > 0) {
          for (var n = 0, max = _data.length; n < max; n++) {
            if (_data[n]._id == action.id) {
              _data.splice(n, 1);

              break;
            }
          }
        }
      }

      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getBlockListById = function getBlockListById(state, id) {
  return state.block[id] || null;
};

exports.getBlockListById = getBlockListById;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessageListById = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_MESSAGE':
      state = action.state;

    case 'SET_MESSAGE_LIST_BY_ID':
      var name = action.name,
          data = action.data;
      if (name && data) state[name] = data;
      break;

    case 'UPDATE_MESSAGE':
      var id = action.id,
          update = action.update;

      for (var i in state) {
        state[i].data.map(function (item) {
          if (item._id == id) {
            for (var _i in update) {
              item[_i] = update[_i];
            }
          }
        });
      }

      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getMessageListById = function getMessageListById(state, id) {
  return state.message[id];
};

exports.getMessageListById = getMessageListById;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeUnlockToken = exports.initUnlockToken = exports.getUnlockToken = void 0;

var _storage = _interopRequireDefault(__webpack_require__(23));

var _to = _interopRequireDefault(__webpack_require__(15));

var _graphql = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getUnlockToken = function getUnlockToken(_ref) {
  var args = _ref.args;
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve) {
        var _ref3, _ref4, err, res;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _graphql["default"])({
                  apis: [{
                    api: 'getUnlockToken',
                    args: args,
                    fields: "unlock_token"
                  }],
                  headers: {
                    accessToken: getState().user.accessToken
                  }
                });

              case 2:
                _ref3 = _context.sent;
                _ref4 = _slicedToArray(_ref3, 2);
                err = _ref4[0];
                res = _ref4[1];
                resolve([err, res]);

                if (res && res.unlock_token) {
                  _storage["default"].save({
                    key: 'unlock-token',
                    data: res.unlock_token,
                    expires: 1000 * 3600
                  });

                  dispatch({
                    type: 'ADD_UNLOCK_TOKEN',
                    unlockToken: res.unlock_token
                  });
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  };
}; // 从cookie中获取unlock token


exports.getUnlockToken = getUnlockToken;

var initUnlockToken = function initUnlockToken() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch, getState) {
        var _ref6, _ref7, err, unlockToken;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _to["default"])(_storage["default"].load({
                  key: 'unlock-token'
                }));

              case 2:
                _ref6 = _context2.sent;
                _ref7 = _slicedToArray(_ref6, 2);
                err = _ref7[0];
                unlockToken = _ref7[1];
                if (unlockToken) dispatch({
                  type: 'ADD_UNLOCK_TOKEN',
                  unlockToken: unlockToken
                });

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};

exports.initUnlockToken = initUnlockToken;

var removeUnlockToken = function removeUnlockToken() {
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _storage["default"].remove({
                  key: 'unlock-token'
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4, _x5) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
};

exports.removeUnlockToken = removeUnlockToken;

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(48);

__webpack_require__(49);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = _interopRequireDefault(__webpack_require__(5));

var _bodyParser = _interopRequireDefault(__webpack_require__(50));

var _cookieParser = _interopRequireDefault(__webpack_require__(51));

var _compression = _interopRequireDefault(__webpack_require__(52));

var _morgan = _interopRequireDefault(__webpack_require__(53));

var _serveFavicon = _interopRequireDefault(__webpack_require__(54));

var _helmet = _interopRequireDefault(__webpack_require__(55));

var _config = __webpack_require__(1);

var _feature = _interopRequireDefault(__webpack_require__(4));

var _sign = _interopRequireDefault(__webpack_require__(56));

var _amp = _interopRequireDefault(__webpack_require__(59));

__webpack_require__(63);

var _render = _interopRequireDefault(__webpack_require__(66));

var _cache2 = _interopRequireDefault(__webpack_require__(6));

var _log4js = _interopRequireDefault(__webpack_require__(86));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/////////////////////////////////////////////////////////////////////////
var app = (0, _express["default"])(); // 启动日志

if (_feature["default"].logs) (0, _log4js["default"])(app);
app.use((0, _helmet["default"])()); // 开发环境生产,在控制台打印出请求记录

if (_feature["default"].debug) app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].json({
  limit: '20mb'
}));
app.use(_bodyParser["default"].urlencoded({
  limit: '20mb',
  extended: true
}));
app.use((0, _cookieParser["default"])());
app.use((0, _compression["default"])());
app.use((0, _serveFavicon["default"])('./public/favicon.png'));
app.use(_express["default"]["static"]('./dist/client'));
app.use(_express["default"]["static"]('./public'));
app.use(function (req, res, next) {
  // 如果是游客，则优先使用缓存中的数据
  if (!req.cookies[_config.authCookieName]) {
    var _cache = _cache2["default"].get(req.originalUrl);

    if (_cache) {
      res.send(_cache);
      return;
    }
  } // 在服务端发起的请求的ua，传递给api
  // if (req && req.headers && req.headers['user-agent']) {
  // global.ua = req.headers['user-agent'];
  // }
  // 计算页面生成总的花费时间


  var start_at = Date.now();
  var _send = res.send;

  res.send = function () {
    // 发送Header
    res.set('X-Execution-Time', String(Date.now() - start_at) + ' ms'); // console.log(process.memoryUsage().rss/1024/1024);
    // console.log(String(Date.now() - start_at) + ' ms');
    // 调用原始处理函数

    return _send.apply(res, arguments);
  };

  next();
});
app.use('/sign', (0, _sign["default"])());
app.use('/amp', (0, _amp["default"])());
app.get('*',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _ref2, code, redirect, html, meta, reduxState, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _render["default"])(req, res);

          case 2:
            _ref2 = _context.sent;
            code = _ref2.code;
            redirect = _ref2.redirect;
            html = _ref2.html;
            meta = _ref2.meta;
            reduxState = _ref2.reduxState;
            user = _ref2.user;

            if (!(req.path == '/' && req._parsedOriginalUrl && req._parsedOriginalUrl.search && req._parsedOriginalUrl.search.indexOf('?appshell') != -1)) {
              _context.next = 12;
              break;
            }

            // console.log(user);
            res.render('../dist/client/app-shell.ejs', {
              theme: user && user.theme == 2 ? 'dark-theme' : 'light-theme'
            });
            return _context.abrupt("return");

          case 12:
            res.status(code);

            if (redirect) {
              res.redirect(redirect);
            } else {
              res.render('../dist/client/index.ejs', {
                html: html,
                reduxState: reduxState,
                meta: meta,
                theme: user && user.theme == 2 ? 'dark-theme' : 'light-theme'
              }, function (err, html) {
                // 对游客的请求进行缓存
                if (!req.cookies[_config.authCookieName]) {
                  _cache2["default"].set(req.originalUrl, html);
                }

                res.send(html);
              });
            }

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.listen(_config.port);
console.log('server started on port ' + _config.port); // 每秒打印一次内存占用情况，显示在控制台，用于排查内存泄漏的问题

if (_feature["default"].memoryUsage) {
  var timer = function timer() {
    setTimeout(function () {
      console.log(process.memoryUsage().heapUsed / 1024 / 1204);
      timer();
    }, 5000);
  };

  timer();
}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(__webpack_require__(5));

var _config = __webpack_require__(1);

var _feature = _interopRequireDefault(__webpack_require__(4));

var _user = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// (安全实施) 服务端储存 token cookie 设置成httpOnly
var _default = function _default() {
  var router = _express["default"].Router();

  router.post('/in', function (req, res) {
    var access_token = req.body.access_token;
    res.cookie(_config.authCookieName, access_token, {
      path: '/',
      httpOnly: true,
      maxAge: _feature["default"].tokenMaxAge
    });
    res.send({
      success: true
    });
  });
  router.post('/out', function (req, res) {
    res.clearCookie(_config.authCookieName);
    res.send({
      success: true
    });
  }); // 检查是否登录，以及token是否有效

  router.post('/check',
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var accessToken, result, _ref2, _ref3, err, _res;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              accessToken = req.cookies[_config.authCookieName] || '';
              result = {
                success: true,
                signIn: false,
                error: null,
                accessToken: accessToken
              };

              if (!accessToken) {
                _context.next = 10;
                break;
              }

              _context.next = 5;
              return (0, _user.loadUserInfo)({
                accessToken: accessToken
              })(null, null);

            case 5:
              _ref2 = _context.sent;
              _ref3 = _slicedToArray(_ref2, 2);
              err = _ref3[0];
              _res = _ref3[1];

              if (_res) {
                result.signIn = true;
                result.userInfo = _res;
              } else {
                result.error = err;
              }

            case 10:
              res.send(result);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  return router;
};

exports["default"] = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(__webpack_require__(58));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var url = _ref.url,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'get' : _ref$method,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? {} : _ref$headers;
  var option = {
    url: url,
    method: method,
    headers: headers
  };

  if (method == 'get') {
    data._t = new Date().getTime();
    option.params = data;
  } else if (method == 'post') {
    option.data = data;
  }

  return (0, _axios["default"])(option).then(function (resp) {
    if (resp && resp.data) {
      var res = resp.data;
      return [null, res];
    } else {
      return ['return none'];
    }
  })["catch"](function (error) {
    // console.log(Reflect.ownKeys(error));
    // console.log(error)
    if (error.message) {
      return [error.message];
    } else if (error.response && error.response.data) {
      return [error.response.data];
    } else {
      return ['return error'];
    }
  });
};

exports["default"] = _default;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(__webpack_require__(5));

var postsDetail = _interopRequireWildcard(__webpack_require__(60));

var commentDetail = _interopRequireWildcard(__webpack_require__(62));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var router = _express["default"].Router();

  router.get('/posts/:id', postsDetail.show);
  router.get('/comment/:id', commentDetail.show);
  return router;
};

exports["default"] = _default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = void 0;

var _cache = _interopRequireDefault(__webpack_require__(6));

var _config = __webpack_require__(1);

var _utils = _interopRequireDefault(__webpack_require__(17));

var _graphql = _interopRequireDefault(__webpack_require__(2));

var _date = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var abstractImagesFromHTML = _utils["default"].abstractImagesFromHTML;

var show =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var id, _ref2, _ref3, err, posts, arr, _ref4, _ref5, error, commentList;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return (0, _graphql["default"])({
              apis: [{
                api: 'posts',
                args: {
                  _id: id
                },
                fields: "\n        _id\n        comment_count\n        content_html\n        create_at\n        update_at\n        follow_count\n        like_count\n        title\n        topic_id{\n          _id\n          name\n        }\n        user_id{\n          _id\n          nickname\n          brief\n          avatar_url\n        }\n        view_count\n      "
              }]
            });

          case 3:
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 2);
            err = _ref3[0];
            posts = _ref3[1];

            if (!(posts && posts[0])) {
              _context.next = 11;
              break;
            }

            posts = posts[0];
            _context.next = 13;
            break;

          case 11:
            res.send('404 Not Found');
            return _context.abrupt("return");

          case 13:
            posts = JSON.parse(JSON.stringify(posts)); // ================
            // 获取内容中的所有图片

            posts.images = abstractImagesFromHTML(posts.content_html);

            if (posts.images && posts.images.length == 0) {
              posts.images = [_config.domainName + "/512x512.png"];
            } // ================
            // 生产描述


            posts.description = posts.content_html || ''; // 删除所有html标签

            posts.description = posts.description.replace(/<[^>]+>/g, '');
            posts.description = posts.description.replace(/\r\n/g, '');
            posts.description = posts.description.replace(/\n/g, '');
            posts.description = posts.description.replace(/(\\|\"|\n|\r)/g, "\\$1");
            if (posts.description.length > 100) posts.description = posts.description.slice(0, 100) + '...';
            posts.description = "".concat(posts.description); // ==============
            // img 转换成 amp-img

            arr = posts.content_html.match(/<img.*?(?:>|\/>)/gi);

            if (arr && arr.length > 0) {
              arr.map(function (item) {
                var arr = item.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i);

                if (arr && arr[1]) {
                  posts.content_html = posts.content_html.replace(item, "<amp-img width=\"16\" height=\"9\" layout=\"responsive\" src=\"".concat(arr[1], "\"></amp-img>"));
                }
              });
            } // ==============
            // 删除所有的style


            posts.content_html = posts.content_html.replace(/style\s*=(['\"\s]?)[^'\"]*?\1/gi, '');
            posts.content_html = posts.content_html.replace(/style/gi, '');
            posts._create_at = (0, _date.dateDiff)(posts.create_at); // =============================
            // 获取评论

            _context.next = 30;
            return (0, _graphql["default"])({
              apis: [{
                api: 'comments',
                args: {
                  posts_id: id,
                  parent_id: 'not-exists',
                  page_size: 50,
                  weaken: false
                },
                fields: "\n        content_html\n        create_at\n        reply_count\n        like_count\n        _id\n        user_id {\n          _id\n          nickname\n          avatar_url\n        }\n      "
              }]
            });

          case 30:
            _ref4 = _context.sent;
            _ref5 = _slicedToArray(_ref4, 2);
            error = _ref5[0];
            commentList = _ref5[1];
            commentList = JSON.parse(JSON.stringify(commentList));

            if (commentList.length > 0) {
              commentList.map(function (comment) {
                comment._create_at = (0, _date.dateDiff)(comment.create_at);

                if (comment.content_html) {
                  // ==============
                  // img 转换成 amp-img
                  var _arr2 = comment.content_html.match(/<img.*?(?:>|\/>)/gi);

                  if (_arr2 && _arr2.length > 0) {
                    _arr2.map(function (item) {
                      var arr = item.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i);

                      if (arr && arr[1]) {
                        comment.content_html = comment.content_html.replace(item, "<amp-img width=\"16\" height=\"9\" layout=\"responsive\" src=\"".concat(arr[1], "\"></amp-img>"));
                      } else {
                        comment.content_html = comment.content_html.replace(item, "");
                      }
                    });
                  }
                }
              });
            }

            res.render('../dist/server/views/pages/posts-detail.ejs', {
              AMP: _config.AMP,
              website_name: _config.name,
              domainName: _config.domainName,
              posts: posts,
              commentList: commentList,
              favicon: _config.favicon,
              googleAdSense: _config.googleAdSense
            }, function (err, html) {
              _cache["default"].set(req.originalUrl, html);

              res.send(html);
            });

          case 37:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function show(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.show = show;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = void 0;

var _cache = _interopRequireDefault(__webpack_require__(6));

var _config = __webpack_require__(1);

var _utils = _interopRequireDefault(__webpack_require__(17));

var _graphql = _interopRequireDefault(__webpack_require__(2));

var _date = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var abstractImagesFromHTML = _utils["default"].abstractImagesFromHTML;

var show =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var id, _ref2, _ref3, err, comment, arr, _ref4, _ref5, error, commentList;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return (0, _graphql["default"])({
              apis: [{
                api: 'comments',
                args: {
                  _id: id,
                  deleted: false,
                  weaken: false
                },
                fields: "\n        posts_id{\n          _id\n          title\n          content_html\n        }\n        content_html\n        create_at\n        reply_count\n        like_count\n        _id\n        user_id {\n          _id\n          nickname\n          avatar_url\n        }\n      "
              }]
            });

          case 3:
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 2);
            err = _ref3[0];
            comment = _ref3[1];

            if (!(comment && comment[0])) {
              _context.next = 11;
              break;
            }

            comment = comment[0];
            _context.next = 14;
            break;

          case 11:
            res.status(404);
            res.send('404 Not Found');
            return _context.abrupt("return");

          case 14:
            comment = JSON.parse(JSON.stringify(comment)); // ================
            // 获取内容中的所有图片

            comment.images = abstractImagesFromHTML(comment.content_html);

            if (comment.images && comment.images.length == 0) {
              comment.images = [_config.domainName + "/512x512.png"];
            } // ================
            // 生产描述


            comment.description = comment.content_html || ''; // 删除所有html标签
            // comment.description = comment.description.replace(/<[^>]+>/g,"");

            comment.description = comment.description.replace(/<[^>]+>/g, '');
            comment.description = comment.description.replace(/\r\n/g, '');
            comment.description = comment.description.replace(/\n/g, '');
            comment.description = comment.description.replace(/(\\|\"|\n|\r)/g, "\\$1");
            if (comment.description.length > 100) comment.description = comment.description.slice(0, 100) + '...';
            comment.description = "".concat(comment.user_id.nickname, "\u7684\u8BC4\u8BBA: ").concat(comment.description); // 删除所有html标签
            // comment.posts_id.content_html = comment.posts_id.content_html.replace(/<[^>]+>/g,"");

            comment.posts_id.content_html = comment.posts_id.content_html.replace(/<[^>]+>/g, '');
            comment.posts_id.content_html = comment.posts_id.content_html.replace(/\r\n/g, '');
            comment.posts_id.content_html = comment.posts_id.content_html.replace(/\n/g, '');
            comment.posts_id.content_html = comment.posts_id.content_html.replace(/(\\|\"|\n|\r)/g, "\\$1");
            if (comment.posts_id.content_html.length > 100) comment.posts_id.content_html = comment.posts_id.content_html.slice(0, 100) + '...'; // ==============
            // img 转换成 amp-img

            arr = comment.content_html.match(/<img.*?(?:>|\/>)/gi);

            if (arr && arr.length > 0) {
              arr.map(function (item) {
                var arr = item.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i);

                if (arr && arr[1]) {
                  comment.content_html = comment.content_html.replace(item, "<amp-img width=\"16\" height=\"9\" layout=\"responsive\" src=\"".concat(arr[1], "\"></amp-img>"));
                }
              });
            } // ==============
            // 删除所有的style


            comment.content_html = comment.content_html.replace(/style\s*=(['\"\s]?)[^'\"]*?\1/gi, '');
            comment.content_html = comment.content_html.replace(/style/gi, '');
            comment._create_at = (0, _date.dateDiff)(comment.create_at); // =============================
            // 获取评论

            _context.next = 36;
            return (0, _graphql["default"])({
              apis: [{
                api: 'comments',
                args: {
                  // posts_id: comment.posts_id._id,
                  parent_id: comment._id,
                  page_size: 50,
                  weaken: false
                },
                fields: "\n        content_html\n        create_at\n        reply_count\n        like_count\n        _id\n        user_id {\n          _id\n          nickname\n          avatar_url\n        }\n      "
              }]
            });

          case 36:
            _ref4 = _context.sent;
            _ref5 = _slicedToArray(_ref4, 2);
            error = _ref5[0];
            commentList = _ref5[1];
            commentList = JSON.parse(JSON.stringify(commentList));

            if (commentList.length > 0) {
              commentList.map(function (comment) {
                comment._create_at = (0, _date.dateDiff)(comment.create_at);

                if (comment.content_html) {
                  // ==============
                  // img 转换成 amp-img
                  var _arr2 = comment.content_html.match(/<img.*?(?:>|\/>)/gi);

                  if (_arr2 && _arr2.length > 0) {
                    _arr2.map(function (item) {
                      var arr = item.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/i);

                      if (arr && arr[1]) {
                        comment.content_html = comment.content_html.replace(item, "<amp-img width=\"16\" height=\"9\" layout=\"responsive\" src=\"".concat(arr[1], "\"></amp-img>"));
                      } else {
                        comment.content_html = comment.content_html.replace(item, "");
                      }
                    });
                  }
                }
              });
            }

            res.render('../dist/server/views/pages/comment-detail.ejs', {
              AMP: _config.AMP,
              website_name: _config.name,
              domainName: _config.domainName,
              comment: comment,
              commentList: commentList,
              favicon: _config.favicon,
              googleAdSense: _config.googleAdSense
            }, function (err, html) {
              _cache["default"].set(req.originalUrl, html);

              res.send(html);
            });

          case 43:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function show(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.show = show;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sitemap = _interopRequireDefault(__webpack_require__(64));

var _fs = _interopRequireDefault(__webpack_require__(65));

var _graphql = _interopRequireDefault(__webpack_require__(2));

var _config = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createSitemap = function createSitemap(fileName, urls) {
  var sitemap = _sitemap["default"].createSitemap({
    hostname: _config.domainName,
    cacheTime: 1000 * 60 * 60 * 24,
    urls: urls
  });

  var path = process.cwd() + '/public/sitemap/' + fileName;

  if (!_config.debug) {
    console.log("".concat(path, " \u521B\u5EFA\u6210\u529F"));

    _fs["default"].writeFileSync(path, sitemap.toString());
  } else {
    console.log("".concat(path, " \u521B\u5EFA\u6210\u529F\uFF08\u5F00\u53D1\u73AF\u5883\u4E0D\u751F\u6210\u6587\u4EF6\uFF09"));
  }
};

var loadData =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(pageNumber) {
    var err, data, loadMore, _ref2, _ref3, urls, _urls;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loadMore = false;
            _context.next = 3;
            return (0, _graphql["default"])({
              apis: [{
                api: 'sitemap',
                args: {
                  page_number: pageNumber
                },
                fields: "\n        posts{\n          _id\n          update_at\n        }\n        topics{\n          _id\n        }\n      "
              }]
            });

          case 3:
            _ref2 = _context.sent;
            _ref3 = _slicedToArray(_ref2, 2);
            err = _ref3[0];
            data = _ref3[1];

            if (data && data.posts && data.posts.length > 0) {
              urls = [];
              loadMore = true;
              data.posts.map(function (item) {
                var s = {
                  url: '/posts/' + item._id,
                  changefreq: 'daily',
                  priority: 0.8
                };
                if (item.update_at) s.lastmodISO = item.update_at;
                urls.push(s);
              });
              createSitemap("posts-".concat(pageNumber, ".xml"), urls);
            }

            if (data && data.topics && data.topics.length > 0) {
              _urls = [];
              loadMore = true;
              data.topics.map(function (item) {
                var s = {
                  url: '/topic/' + item._id,
                  changefreq: 'daily',
                  priority: 0.8
                };
                if (item.update_at) s.lastmodISO = item.update_at;

                _urls.push(s);
              });
              createSitemap("topics-".concat(pageNumber, ".xml"), _urls);
            }

            if (loadMore) {
              setTimeout(function () {
                loadData(pageNumber + 1);
              }, 5000);
            } else {
              console.log('sitemap.xml 全部创建完成');
            }

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loadData(_x) {
    return _ref.apply(this, arguments);
  };
}();

var run =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var urls;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            urls = [{
              url: '/',
              changefreq: 'daily',
              priority: 1.0
            }, {
              url: '/agreement',
              changefreq: 'monthly',
              priority: 0.1
            }, {
              url: '/privacy',
              changefreq: 'monthly',
              priority: 0.1
            }];
            createSitemap("index.xml", urls);
            loadData(1);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function run() {
    return _ref4.apply(this, arguments);
  };
}();

var start = function start() {
  run();
  setTimeout(function () {
    start();
  }, 1000 * 60 * 60 * 24);
};

start();

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("sitemap");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _server = _interopRequireDefault(__webpack_require__(37));

var _reactRouter = __webpack_require__(67);

var _reactRedux = __webpack_require__(7);

var _server2 = _interopRequireDefault(__webpack_require__(68));

var _reactMetaTags = __webpack_require__(21);

var _redux = _interopRequireDefault(__webpack_require__(69));

var _router = _interopRequireDefault(__webpack_require__(76));

var _initData = _interopRequireDefault(__webpack_require__(85));

var _config = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = function _default(req, res) {
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(resolve) {
      var params, store, _ref2, _ref3, err, _ref3$, user, router, route, match, _ref4, code, redirect, Page, _p, _ref5, _code, _redirect, metaTagsInstance;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = {
                code: 200,
                redirect: '',
                html: '',
                meta: '',
                reduxState: '{}',
                user: null
              }; // 创建新的store

              store = (0, _redux["default"])(); // 准备数据，如果有token，获取用户信息并返回

              _context.next = 4;
              return (0, _initData["default"])(store, req.cookies[_config.authCookieName] || '');

            case 4:
              _ref2 = _context.sent;
              _ref3 = _slicedToArray(_ref2, 2);
              err = _ref3[0];
              _ref3$ = _ref3[1];
              user = _ref3$ === void 0 ? null : _ref3$;
              params.user = user; // 如果是拉黑的用户，阻止登陆，并提示

              if (!(err && err.blocked)) {
                _context.next = 16;
                break;
              }

              res.clearCookie(_config.authCookieName);
              params.code = 403;
              params.redirect = '/notice?notice=block_account';
              resolve(params);
              return _context.abrupt("return");

            case 16:
              if (!(err && err.message && err.message == 'invalid token')) {
                _context.next = 22;
                break;
              }

              res.clearCookie(_config.authCookieName);
              params.code = 403;
              params.redirect = '/notice?notice=invalid_token';
              resolve(params);
              return _context.abrupt("return");

            case 22:
              // 创建路由
              router = (0, _router["default"])({
                user: user
              });
              route = null, match = null; // 获取当前url的路由

              router.list.some(function (_route) {
                // { path: '/', url: '/', isExact: true, params: {} }
                var _match = (0, _reactRouter.matchPath)(req.path, _route);

                if (_match) {
                  _match.search = req._parsedOriginalUrl.search || '';
                  route = _route;
                  match = _match;
                }

                return _match;
              }); // 游客

              if (!(route.enter == 'tourists' && user)) {
                _context.next = 30;
                break;
              }

              params.code = 403;
              params.redirect = '/';
              resolve(params);
              return _context.abrupt("return");

            case 30:
              if (!(route.enter == 'member' && !user)) {
                _context.next = 35;
                break;
              }

              params.code = 403;
              params.redirect = '/';
              resolve(params);
              return _context.abrupt("return");

            case 35:
              if (!route.loadData) {
                _context.next = 43;
                break;
              }

              _context.next = 38;
              return route.loadData({
                store: store,
                match: match,
                res: res,
                req: req,
                user: user
              });

            case 38:
              _ref4 = _context.sent;
              code = _ref4.code;
              redirect = _ref4.redirect;
              params.code = code;
              params.redirect = redirect;

            case 43:
              // 获取路由dom
              Page = router.dom;
              _context.next = 46;
              return route.body.preload();

            case 46:
              _p = _context.sent;

              if (!_p["default"].loadDataOnServer) {
                _context.next = 55;
                break;
              }

              _context.next = 50;
              return _p["default"].loadDataOnServer({
                store: store,
                match: match,
                res: res,
                req: req,
                user: user
              });

            case 50:
              _ref5 = _context.sent;
              _code = _ref5.code;
              _redirect = _ref5.redirect;
              params.code = _code;
              params.redirect = _redirect;

            case 55:
              // console.log(_p);
              // context={params.context}
              metaTagsInstance = (0, _server2["default"])(); // html

              params.html = _server["default"].renderToString(_react["default"].createElement(_reactRedux.Provider, {
                store: store
              }, _react["default"].createElement(_reactMetaTags.MetaTagsContext, {
                extract: metaTagsInstance.extract
              }, _react["default"].createElement(_reactRouter.StaticRouter, {
                location: req.url
              }, _react["default"].createElement(Page, null))))); // 获取页面的meta，嵌套到模版中

              params.meta = metaTagsInstance.renderToString(); // redux

              params.reduxState = JSON.stringify(store.getState()).replace(/</g, '\\x3c'); // 释放store内存

              store = null;
              router = null; // metaTagsInstance = null;

              resolve(params);

            case 62:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports["default"] = _default;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("react-meta-tags/server");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configureStore;

var _redux = __webpack_require__(70);

var _reduxThunk = _interopRequireDefault(__webpack_require__(71));

var _reducers = _interopRequireDefault(__webpack_require__(72));

var _reduxLogger = __webpack_require__(75);

var _feature = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import subscribe from './subscribe';
var middleware = [_reduxThunk["default"]]; // 如果是在客户端环境，那么打印redux日志

if (_feature.reduxLog) middleware.push((0, _reduxLogger.createLogger)());

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = (0, _redux.createStore)((0, _redux.combineReducers)(_reducers["default"]), initialState, (0, _redux.compose)(_redux.applyMiddleware.apply(void 0, middleware))); // reducer = null;

  /*
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  */
  // react native 需要订阅redux更新
  // store.subscribe(subscribe(store));

  return store;
}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _scroll = _interopRequireDefault(__webpack_require__(73));

var _user = _interopRequireDefault(__webpack_require__(8));

var _notification = _interopRequireDefault(__webpack_require__(30));

var _people = _interopRequireDefault(__webpack_require__(31));

var _posts = _interopRequireDefault(__webpack_require__(24));

var _topic = _interopRequireDefault(__webpack_require__(16));

var _comment = _interopRequireDefault(__webpack_require__(32));

var _website = _interopRequireDefault(__webpack_require__(10));

var _countries = _interopRequireDefault(__webpack_require__(33));

var _captcha = _interopRequireDefault(__webpack_require__(38));

var _follow = _interopRequireDefault(__webpack_require__(39));

var _reportTypes = _interopRequireDefault(__webpack_require__(40));

var _block = _interopRequireDefault(__webpack_require__(41));

var _feed = _interopRequireDefault(__webpack_require__(34));

var _tips = _interopRequireDefault(__webpack_require__(11));

var _hasReadPosts = _interopRequireDefault(__webpack_require__(35));

var _message = _interopRequireDefault(__webpack_require__(42));

var _session = _interopRequireDefault(__webpack_require__(25));

var _clientInstalled = _interopRequireDefault(__webpack_require__(74));

var _live = _interopRequireDefault(__webpack_require__(36));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import ad from './ad';
var _default = {
  scroll: _scroll["default"],
  user: _user["default"],
  notification: _notification["default"],
  people: _people["default"],
  topic: _topic["default"],
  posts: _posts["default"],
  comment: _comment["default"],
  website: _website["default"],
  countries: _countries["default"],
  captcha: _captcha["default"],
  follow: _follow["default"],
  reportTypes: _reportTypes["default"],
  block: _block["default"],
  feed: _feed["default"],
  tips: _tips["default"],
  hasReadPosts: _hasReadPosts["default"],
  message: _message["default"],
  session: _session["default"],
  clientInstalled: _clientInstalled["default"],
  live: _live["default"] // ad

};
exports["default"] = _default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SAVE_SCROLL_POSITION':
      if (action.name) {
        state[action.name] = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      }

      break;

    case 'SET_SCROLL_POSITION':
      // if (typeof window != 'undefined' || location.pathname != '/') {
      //   break;
      // }
      // console.log(state);
      // 1、先设置置顶
      // window.scrollTo(0, action.name ? state[action.name] : 0);
      // 2、浏览器会执行自带滚动条的位置记录
      // 3、如果存在位置，则覆盖条浏览器的滚动条位置
      // if (action.name && state[action.name]) {
      // 延迟一点点，覆盖掉浏览器自带的滚动条位置记录
      // setTimeout(()=>{
      // if (action.name && state[action.name]) {
      window.scrollTo(0, action.name && state[action.name] ? state[action.name] : 0); // }
      // });
      // }

      break;
  }

  return (0, _clone["default"])(state); // return state;
};

exports["default"] = _default;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientInstalled = exports["default"] = void 0;

var _clone = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _clone["default"])(initialState);
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'HAS_CLIENT_INSTALLED':
      var name = action.name;
      state[name] = true;
      break;

    default:
      return state;
  }

  return (0, _clone["default"])(state);
};

exports["default"] = _default;

var getClientInstalled = function getClientInstalled(state) {
  return state.clientInstalled;
};

exports.getClientInstalled = getClientInstalled;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _asyncComponent = _interopRequireDefault(__webpack_require__(77));

var _list = _interopRequireDefault(__webpack_require__(78));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 生成异步加载组件
var _default = function _default(_ref) {
  var user = _ref.user,
      _ref$enterEvent = _ref.enterEvent,
      enterEvent = _ref$enterEvent === void 0 ? function () {} : _ref$enterEvent;

  var enter = function enter(role, Layout, props, route) {
    enterEvent();

    switch (role) {
      // 任何人
      case 'everybody':
        return _react["default"].createElement(Layout, props);
      // 游客

      case 'tourists':
        if (user) {
          return _react["default"].createElement(_reactRouterDom.Redirect, {
            to: "/"
          });
        } else {
          return _react["default"].createElement(Layout, props);
        }

      // 注册用户

      case 'member':
        if (!user) {
          return _react["default"].createElement(_reactRouterDom.Redirect, {
            to: "/"
          });
        } else {
          return _react["default"].createElement(Layout, props);
        }

    }
  };

  var dom = function dom(props) {
    return _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Switch, null, _list["default"].map(function (route, index) {
      return _react["default"].createElement(_reactRouterDom.Route, {
        key: index,
        path: route.path,
        exact: route.exact,
        component: route.head
      });
    })), _react["default"].createElement(_reactRouterDom.Switch, null, _list["default"].map(function (route, index) {
      if (!route.body) return;
      return _react["default"].createElement(_reactRouterDom.Route, {
        key: index,
        path: route.path,
        exact: route.exact,
        render: function render(props) {
          return enter(route.enter, route.body, props, route);
        }
      });
    })), _react["default"].createElement(_asyncComponent["default"], {
      load: function load() {
        return Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(11)]).then(__webpack_require__.t.bind(null, 93, 7));
      }
    }, function (Component) {
      return _react["default"].createElement(Component, null);
    }));
  };

  return {
    list: _list["default"],
    dom: dom
  };
};

exports["default"] = _default;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 异步组件（异步加载一些小组件）
 *
 * 使用方法:
 *
 * <Bundle load={() => import('../../components/sidebar')}>
 *  {Sidebar => <Sidebar />}
 * </Bundle>
 */

/*
export default function(props: any) {
  const [ mod, setMod ] = useState(null);
  const load = () => {
   // setMod(null)
   // 注意这里，使用Promise对象; mod.default导出默认
   props.load().then((mod: any) => {
     setMod(mod.default ? mod.default : mod)
   });
 }
  useEffect(()=>{
   load();
 }, []);
  return mod ? props.children(mod) : null;
}
*/
var AsyncComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AsyncComponent, _React$Component);

  function AsyncComponent(props) {
    var _this;

    _classCallCheck(this, AsyncComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AsyncComponent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      mod: null
    });

    _this.load = _this.load.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AsyncComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.load();
    } // componentWillReceiveProps(nextProps: any) {
    //   if (nextProps.load !== this.props.load) this.load();
    // }

  }, {
    key: "load",
    value: function load() {
      var _this2 = this;

      this.setState({
        mod: null
      }); // 注意这里，使用Promise对象; mod.default导出默认

      this.props.load().then(function (mod) {
        _this2.setState({
          mod: mod["default"] ? mod["default"] : mod
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.mod ? this.props.children(this.state.mod) : null;
    }
  }]);

  return AsyncComponent;
}(_react["default"].Component);

exports["default"] = AsyncComponent;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactLoadable = _interopRequireDefault(__webpack_require__(79));

var _head = _interopRequireDefault(__webpack_require__(80));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var exact = true;
var base = {
  exact: exact,
  head: _head["default"]
};

var loading = function loading() {
  return _react["default"].createElement("div", null);
}; // 路由数组


var _default = [_objectSpread({
  path: '/'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.t.bind(null, 97, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/topic'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 19).then(__webpack_require__.t.bind(null, 98, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/topic/:id'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(20)]).then(__webpack_require__.t.bind(null, 99, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/posts/:id'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e(15)]).then(__webpack_require__.t.bind(null, 100, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/comment/:id'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(6), __webpack_require__.e(27)]).then(__webpack_require__.t.bind(null, 101, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/people/:id'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(5)]).then(__webpack_require__.t.bind(null, 44, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/people/:id/:type'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(5)]).then(__webpack_require__.t.bind(null, 44, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/notifications'
}, base, {
  enter: 'member',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.t.bind(null, 45, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/notifications/:type'
}, base, {
  enter: 'member',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.t.bind(null, 45, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/sessions'
}, base, {
  enter: 'member',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 12).then(__webpack_require__.t.bind(null, 102, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/session/:id'
}, base, {
  enter: 'member',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(7), __webpack_require__.e(14)]).then(__webpack_require__.t.bind(null, 103, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/live/:id'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return Promise.all(/* import() */[__webpack_require__.e(7), __webpack_require__.e(16)]).then(__webpack_require__.t.bind(null, 104, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/search'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(18)]).then(__webpack_require__.t.bind(null, 106, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/forgot'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 17).then(__webpack_require__.t.bind(null, 107, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/new-posts'
}, base, {
  enter: 'member',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(13)]).then(__webpack_require__.t.bind(null, 108, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/settings'
}, base, {
  enter: 'member',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 9).then(__webpack_require__.t.bind(null, 109, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/oauth'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 26).then(__webpack_require__.t.bind(null, 111, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/notice'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 25).then(__webpack_require__.t.bind(null, 112, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/block/peoples'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.t.bind(null, 18, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/block/posts'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.t.bind(null, 18, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/block/comments'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 3).then(__webpack_require__.t.bind(null, 18, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/agreement'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 21).then(__webpack_require__.t.bind(null, 113, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/privacy'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 23).then(__webpack_require__.t.bind(null, 114, 7));
    },
    loading: loading
  })
}), _objectSpread({
  path: '/links'
}, base, {
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 22).then(__webpack_require__.t.bind(null, 115, 7));
    },
    loading: loading
  })
}), {
  path: '**',
  head: _head["default"],
  exact: false,
  enter: 'everybody',
  body: (0, _reactLoadable["default"])({
    loader: function loader() {
      return __webpack_require__.e(/* import() */ 24).then(__webpack_require__.t.bind(null, 116, 7));
    },
    loading: loading
  })
}];
exports["default"] = _default;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _getClassName2 = _interopRequireDefault(__webpack_require__(26));

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

var _universalCookie = _interopRequireDefault(__webpack_require__(81));

var _reactGa = _interopRequireDefault(__webpack_require__(82));

var _config = __webpack_require__(1);

var _reactRedux = __webpack_require__(7);

var _sign = __webpack_require__(28);

var _user = __webpack_require__(8);

var _website = __webpack_require__(10);

var _tips = __webpack_require__(11);

var _website2 = __webpack_require__(27);

var _scroll = __webpack_require__(22);

var _topic = __webpack_require__(16);

__webpack_require__(84);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// redux
// style
var _styleModuleImportMap = {
  "./styles/index.scss": {
    "header-space": "_2bqIO",
    "header": "ncTgo",
    "logo": "_22NTI",
    "nav-item": "_3pC16",
    "active": "_2D0w4",
    "arrow": "_3uK3A",
    "topic-avatar": "ztsS2",
    "svg-icon": "gy3SZ",
    "avatar": "_27wGY",
    "edit": "_3WYbH",
    "subscript": "bpHlU",
    "subscript-on-menu": "_19j0F",
    "unread-subscript": "_3Iqk_"
  }
};

function _default() {
  var _useReactRouter = (0, _useReactRouter2["default"])(),
      history = _useReactRouter.history,
      location = _useReactRouter.location,
      match = _useReactRouter.match;

  var store = (0, _reactRedux.useStore)();
  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  var unreadNotice = (0, _reactRedux.useSelector)(function (state) {
    return (0, _website.getUnreadNotice)(state);
  });
  var unreadMessage = (0, _reactRedux.useSelector)(function (state) {
    return (0, _tips.getTipsById)(state, 'unread-message') || 0;
  });
  var followTip = (0, _reactRedux.useSelector)(function (state) {
    return (0, _tips.getTipsById)(state, 'feed');
  });
  var favoriteTip = (0, _reactRedux.useSelector)(function (state) {
    return (0, _tips.getTipsById)(state, 'favorite');
  });
  var interflowTip = (0, _reactRedux.useSelector)(function (state) {
    return (0, _tips.getTipsById)(state, 'home');
  });
  var tab = (0, _reactRedux.useSelector)(function (state) {
    return (0, _website.getTab)(state);
  }) || 'home';

  var _saveTab = function _saveTab(params) {
    return (0, _website2.saveTab)(params)(store.dispatch, store.getState);
  };

  var switchTab = function switchTab(_tab) {
    // 如果是再首页，储存滚动条位置
    if (location.pathname == '/') {
      (0, _scroll.saveScrollPosition)(tab)(store.dispatch, store.getState); // 如果已再当前tab，那么出发置顶
      // if (tab == _tab) {
      //   $('body,html').animate({ scrollTop: 0 }, 500);
      // }
    } else {
      history.push("/");
    }

    var cookies = new _universalCookie["default"]();
    cookies.set('tab', _tab, {
      path: '/',
      expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365)
    });

    _saveTab(_tab);

    if (_config.GA) _reactGa["default"].pageview(window.location.pathname + '?tab=' + _tab);
    setTimeout(function () {
      (0, _scroll.setScrollPosition)(_tab)(store.dispatch, store.getState);
    }, 100);
  };

  var onClickTopicLink = function onClickTopicLink(_id) {
    return function (event) {
      event.preventDefault();
      switchTab(_id);
    };
  };

  var _signOut = function _signOut() {
    switchTab('home');
    (0, _sign.signOut)()(store.dispatch, store.getState);
  };

  // nav item list
  var navList = [{
    _id: 'home',
    name: '发现',
    subscript: interflowTip
  }];

  if (me) {
    navList.push({
      _id: 'follow',
      name: '关注',
      subscript: followTip
    });
    navList.push({
      _id: 'favorite',
      name: '收藏',
      subscript: favoriteTip
    });
  }

  var parentTopicList = (0, _reactRedux.useSelector)(function (state) {
    return (0, _topic.getTopicListById)(state, 'parent-topics');
  });

  if (parentTopicList && parentTopicList.data && parentTopicList.data.length > 0) {
    parentTopicList.data.map(function (item) {
      navList.push({
        _id: item._id,
        topic_id: item._id,
        name: item.name,
        avatar: item.avatar
      });
    });
  }

  navList.push({
    _id: 'live',
    name: '直播'
  });
  (0, _react.useEffect)(function () {
    var cookies = new _universalCookie["default"]();

    var _tab = cookies.get('tab') || 'home';

    _saveTab(_tab); // 第一次进入首页


    if (location.pathname == '/') {
      setTimeout(function () {
        (0, _scroll.setScrollPosition)(tab)(store.dispatch, store.getState);
      }, 100);
    }

    return function () {
      // 首页离开
      if (location.pathname == '/') {
        var _tab2 = (0, _website.getTab)(store.getState());

        (0, _scroll.saveScrollPosition)(_tab2)(store.dispatch, store.getState);
      }
    };
  }, []);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "_2bqIO"
  }), _react["default"].createElement("header", {
    className: "ncTgo"
  }, _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement("div", {
    className: "d-flex justify-content-between"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/",
    className: "_22NTI"
  }), _react["default"].createElement("nav", {
    className: "d-block d-lg-none",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, navList.map(function (_ref) {
    var _id = _ref._id,
        topic_id = _ref.topic_id,
        name = _ref.name,
        subscript = _ref.subscript;

    if (tab === _id) {
      return _react["default"].createElement("a", {
        key: _id,
        href: topic_id ? "/topic/".concat(topic_id) : '/',
        className: "text-dark _3pC16",
        onClick: onClickTopicLink(_id)
      }, name, subscript ? _react["default"].createElement("span", {
        className: "bpHlU"
      }) : null, _react["default"].createElement("div", {
        className: "_3uK3A"
      }, _react["default"].createElement("svg", null, _react["default"].createElement("use", {
        xlinkHref: "/feather-sprite.svg#chevron-down"
      }))));
    }
  })), _react["default"].createElement("div", {
    className: "dropdown-menu dropdown-menu-left"
  }, navList.map(function (_ref2) {
    var _id = _ref2._id,
        topic_id = _ref2.topic_id,
        name = _ref2.name,
        subscript = _ref2.subscript,
        avatar = _ref2.avatar;
    return _react["default"].createElement("a", {
      key: _id,
      href: topic_id ? "/topic/".concat(topic_id) : '/',
      className: "dropdown-item",
      onClick: onClickTopicLink(_id)
    }, avatar ? _react["default"].createElement("img", {
      className: "ztsS2",
      src: avatar,
      alt: name
    }) : _react["default"].createElement("div", {
      className: "ztsS2"
    }), name, subscript ? _react["default"].createElement("span", {
      className: "_19j0F"
    }) : null);
  })), _react["default"].createElement("nav", {
    className: "d-none d-lg-block"
  }, navList.map(function (_ref3) {
    var _id = _ref3._id,
        topic_id = _ref3.topic_id,
        name = _ref3.name,
        subscript = _ref3.subscript;
    return _react["default"].createElement("a", {
      key: _id,
      href: topic_id ? "/topic/".concat(topic_id) : '/',
      onClick: onClickTopicLink(_id),
      className: ((tab === _id && location.pathname == '/' ? 'text-primary' : 'text-dark') ? (tab === _id && location.pathname == '/' ? 'text-primary' : 'text-dark') + " " : "") + (0, _getClassName2["default"])("nav-item ".concat(tab === _id && location.pathname == '/' ? 'active' : ''), _styleModuleImportMap)
    }, name, subscript ? _react["default"].createElement("span", {
      className: "bpHlU"
    }) : null);
  })), _react["default"].createElement("div", {
    className: "ml-auto d-flex justify-content-start"
  }, me ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.NavLink, {
    exact: true,
    to: "/new-posts",
    className: "text-primary gy3SZ"
  }, _react["default"].createElement("svg", null, _react["default"].createElement("use", {
    xlinkHref: "/feather-sprite.svg#edit-3"
  }))), _react["default"].createElement(_reactRouterDom.NavLink, {
    exact: true,
    to: "/search",
    className: "text-secondary gy3SZ"
  }, _react["default"].createElement("svg", null, _react["default"].createElement("use", {
    xlinkHref: "/feather-sprite.svg#search"
  }))), _react["default"].createElement(_reactRouterDom.NavLink, {
    exact: true,
    to: "/notifications",
    className: "text-secondary gy3SZ"
  }, _react["default"].createElement("svg", null, _react["default"].createElement("use", {
    xlinkHref: "/feather-sprite.svg#bell"
  })), unreadNotice.length > 0 ? _react["default"].createElement("span", {
    className: "_3Iqk_"
  }, unreadNotice.length) : null), _react["default"].createElement(_reactRouterDom.NavLink, {
    exact: true,
    to: "/sessions",
    className: "text-secondary gy3SZ"
  }, _react["default"].createElement("svg", null, _react["default"].createElement("use", {
    xlinkHref: "/feather-sprite.svg#message-circle"
  })), unreadMessage > 0 ? _react["default"].createElement("span", {
    className: "_3Iqk_"
  }, unreadMessage) : null), _react["default"].createElement("span", {
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    className: "a _27wGY",
    style: {
      backgroundImage: "url(".concat(me.avatar_url, ")")
    }
  }), _react["default"].createElement("div", {
    className: "dropdown-menu dropdown-menu-left"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    className: "dropdown-item",
    to: "/people/".concat(me._id)
  }, "\u6211\u7684\u4E3B\u9875"), _react["default"].createElement(_reactRouterDom.Link, {
    className: "dropdown-item",
    to: "/settings"
  }, "\u8BBE\u7F6E"), _react["default"].createElement("div", {
    className: "dropdown-divider"
  }), _react["default"].createElement("span", {
    className: "a dropdown-item",
    onClick: _signOut
  }, "\u9000\u51FA"))) : _react["default"].createElement("div", {
    className: "d-flex flex-row"
  }, _react["default"].createElement("a", {
    href: "https://www.xiaoduyu.com/app/xiaoduyu/",
    target: "_blank",
    className: "a text-dark d-block d-lg-none _3pC16"
  }, "\u4E0B\u8F7D"), _react["default"].createElement("span", {
    "data-toggle": "modal",
    "data-target": "#sign",
    "data-type": "sign-up",
    className: "a text-dark _3pC16"
  }, "\u6CE8\u518C\u8D26\u53F7"), _react["default"].createElement("span", {
    "data-toggle": "modal",
    "data-target": "#sign",
    "data-type": "sign-in",
    className: "a text-dark _3pC16"
  }, "\u767B\u5F55")))))));
}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("react-native-storage");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header-space": "_2bqIO",
	"header": "ncTgo",
	"logo": "_22NTI",
	"nav-item": "_3pC16",
	"active": "_2D0w4",
	"arrow": "_3uK3A",
	"topic-avatar": "ztsS2",
	"svg-icon": "gy3SZ",
	"avatar": "_27wGY",
	"edit": "_3WYbH",
	"subscript": "bpHlU",
	"subscript-on-menu": "_19j0F",
	"unread-subscript": "_3Iqk_"
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = __webpack_require__(14);

var _topic = __webpack_require__(29);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 首次打开时候初始化数据
// 如果有token，获取用户信息并返回, resolve([ err, user ]);
var _default = function _default(store, accessToken) {
  return new Promise(
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(resolve) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _topic.loadTopicList)({
                id: 'parent-topics',
                args: {
                  parent_id: "not-exists",
                  sort_by: 'sort:-1',
                  recommend: true
                }
              })(store.dispatch, store.getState);

            case 2:
              _context.prev = 2;

              if (!accessToken) {
                _context.next = 10;
                break;
              }

              _context.next = 6;
              return (0, _user.loadUserInfo)({
                accessToken: accessToken
              })(store.dispatch, store.getState);

            case 6:
              res = _context.sent;
              resolve(res);
              _context.next = 11;
              break;

            case 10:
              resolve([]);

            case 11:
              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              resolve([]);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports["default"] = _default;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _log4js = _interopRequireDefault(__webpack_require__(87));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://github.com/log4js-node/log4js-node
var _default = function _default(app) {
  // ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
  _log4js["default"].configure({
    appenders: {
      // console: {
      //   type: "console"
      // },
      // 输出trace、debug
      _trace: {
        type: 'file',
        filename: 'logs/trace',
        pattern: "yyyy-MM-dd.log",
        alwaysIncludePattern: true,
        maxLogSize: 31457280
      },
      trace: {
        type: "logLevelFilter",
        appender: "_trace",
        level: "trace",
        maxLevel: "debug"
      },
      // 输出 info。请求日志
      _info: {
        type: 'file',
        filename: 'logs/info',
        pattern: "yyyy-MM-dd.log",
        alwaysIncludePattern: true,
        maxLogSize: 31457280
      },
      info: {
        type: "logLevelFilter",
        appender: "_info",
        level: "info",
        maxLevel: "info"
      },
      // 输出 warn、error、fatal
      _error: {
        type: 'file',
        filename: 'logs/error',
        pattern: "yyyy-MM-dd.log",
        alwaysIncludePattern: true,
        maxLogSize: 31457280
      },
      error: {
        type: "logLevelFilter",
        appender: "_error",
        level: "warn",
        maxLevel: "fatal"
      }
    },
    categories: {
      "default": {
        // 在控制台显示
        appenders: ['trace', 'info', 'error'],
        level: 'all'
      }
    }
  });

  app.use(_log4js["default"].connectLogger(_log4js["default"].getLogger("http"), {
    level: 'auto'
  })); // var log = log4js.getLogger("app");
  // log.trace('Entering cheese testing');
  // log.debug('Got cheese.');
  // log.info('Cheese is Comté.');
  // log.warn('Cheese is quite smelly.');
  // log.error('Cheese is too ripe!');
  // log.fatal('Cheese was breeding ground for listeria.');
};

exports["default"] = _default;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("log4js");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("pangu");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/highlight");

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/javascript");

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("qrcode.react");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 93 */,
/* 94 */
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("draft-js-export-html");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("showdown");

/***/ }),
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, exports) {

module.exports = require("sunrise-sunset-js");

/***/ })
/******/ ]);