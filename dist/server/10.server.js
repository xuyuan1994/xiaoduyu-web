exports.ids = [10];
exports.modules = {

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadTips = loadTips;

var _graphql = _interopRequireDefault(__webpack_require__(2));

var _posts = __webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 查询是否有新动态，用于小红点提醒
function loadTips(type) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var user, userInfo, apis, _ref2, _ref3, err, res, homePostsList, posts;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = getState().user;
                userInfo = user.userInfo;
                apis = [];

                if (!type || type == 'discover') {
                  apis.push({
                    aliases: 'home',
                    api: 'posts',
                    args: {
                      sort_by: "sort_by_date",
                      deleted: false,
                      weaken: false,
                      page_size: 1
                    },
                    fields: "sort_by_date"
                  });
                }

                if (userInfo) {
                  if (!type || type == 'notification') {
                    apis.push({
                      aliases: 'userNotification',
                      api: 'fetchUnreadUserNotification',
                      args: {},
                      fields: "ids"
                    });
                  }

                  if (!type) {
                    apis.push({
                      aliases: 'favorite',
                      api: 'posts',
                      args: {
                        method: 'favorite',
                        sort_by: "last_comment_at:-1",
                        deleted: false,
                        weaken: false,
                        page_size: 1
                      },
                      fields: "last_comment_at"
                    });
                  }

                  if (!type || type == 'new-feed') {
                    apis.push({
                      aliases: 'feed',
                      api: 'feed',
                      args: {
                        preference: true,
                        sort_by: "create_at:-1",
                        page_size: 1
                      },
                      fields: "create_at"
                    });
                  }

                  if (!type || type == 'new-session') {
                    apis.push({
                      aliases: 'sessions',
                      api: 'getUnreadSessions',
                      args: {},
                      fields: "count"
                    });
                  }
                }

                _context.next = 7;
                return (0, _graphql["default"])({
                  headers: {
                    accessToken: user.accessToken
                  },
                  apis: apis,
                  multiple: true
                });

              case 7:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                err = _ref3[0];
                res = _ref3[1];

                if (res) {
                  // 通知
                  if (res['userNotification'] && res['userNotification'].ids.length > 0) {
                    dispatch({
                      type: 'SET_UNREAD_NOTICE',
                      unreadNotice: res['userNotification'].ids
                    });
                  } // 首页


                  if (res['home']) {
                    homePostsList = (0, _posts.getPostsListById)(getState(), 'home');
                    posts = homePostsList && homePostsList.data && homePostsList.data[0] ? homePostsList.data[0] : null;

                    if (posts && res['home'][0] && posts.sort_by_date && new Date(posts.sort_by_date).getTime() < new Date(res['home'][0].sort_by_date).getTime()) {
                      dispatch({
                        type: 'SET_TIPS_BY_ID',
                        id: 'home',
                        status: true
                      });
                    } else {
                      dispatch({
                        type: 'SET_TIPS_BY_ID',
                        id: 'home',
                        status: false
                      });
                    }
                  } // 关注


                  if (res['feed']) {
                    if (res['feed'][0] && userInfo.last_find_feed_at && new Date(userInfo.last_find_feed_at).getTime() < new Date(res['feed'][0].create_at).getTime()) {
                      dispatch({
                        type: 'SET_TIPS_BY_ID',
                        id: 'feed',
                        status: true
                      });
                    } else {
                      dispatch({
                        type: 'SET_TIPS_BY_ID',
                        id: 'feed',
                        status: false
                      });
                    }
                  } // 关注


                  if (res['favorite']) {
                    if (res['favorite'][0] && userInfo.last_find_favorite_at && new Date(userInfo.last_find_favorite_at).getTime() < new Date(res['favorite'][0].last_comment_at).getTime()) {
                      dispatch({
                        type: 'SET_TIPS_BY_ID',
                        id: 'favorite',
                        status: true
                      });
                    } else {
                      dispatch({
                        type: 'SET_TIPS_BY_ID',
                        id: 'favorite',
                        status: false
                      });
                    }
                  } // 未读消息累计数


                  if (res['sessions']) {
                    if (res['sessions'].count) {
                      dispatch({
                        type: 'SET_TIPS_BY_ID',
                        id: 'unread-message',
                        status: res['sessions'].count
                      });
                    } else {
                      dispatch({
                        type: 'SET_TIPS_BY_ID',
                        id: 'unread-message',
                        status: 0
                      });
                    }
                  }
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

__webpack_require__(145);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _default(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children;
  (0, _react.useEffect)(function () {
    var obj = FloatFixed({
      // referId: 'right',
      id: 'right-float',
      offsetTop: 60
    });
    return function () {
      obj.remove();
    };
  }, []);
  return _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement("div", {
    className: "_26ovl"
  }, _react["default"].createElement("div", {
    id: "center"
  }, children[0]), _react["default"].createElement("div", {
    className: "_1mclz"
  }, _react["default"].createElement("div", {
    id: "right"
  }, children[1]), _react["default"].createElement("div", null, _react["default"].createElement("div", {
    id: "right-float",
    className: "_3R-zd"
  }, children[2] || null)))));
}

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _config = __webpack_require__(1);

var _adsbygoogle = _interopRequireDefault(__webpack_require__(150));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// config
// modules
function _default(_ref) {
  var width = _ref.width,
      height = _ref.height;
  if (!_config.googleAdSense || !_config.googleAdSense.client || !_config.googleAdSense.slot || !_config.googleAdSense.slot.pc) return null;
  var style = {
    display: 'inline-block',
    width: width,
    height: height
  };
  var props = {
    style: style,
    'data-ad-client': _config.googleAdSense.client,
    'data-ad-slot': _config.googleAdSense.slot.pc
  };
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-body",
    style: {
      padding: '19px'
    }
  }, _react["default"].createElement(_adsbygoogle["default"], props))));
}

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"box": "_26ovl",
	"right": "_1mclz",
	"right-float": "_3R-zd"
};

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _default(props) {
  var dom = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    if (!window.adsbygoogle) {
      var oHead = document.getElementsByTagName('head').item(0);
      var oScript = document.createElement("script");

      oScript.onload = function () {
        (adsbygoogle = window.adsbygoogle || []).push({});
      };

      oScript.type = "text/javascript";
      oScript.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      oHead.appendChild(oScript); // dynamicFile([
      //   '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      // ]).then(()=>{
      //   (adsbygoogle = window.adsbygoogle || []).push({});
      // });
    } else {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }

    setTimeout(function () {
      if (dom && dom.current && dom.current.childNodes && dom.current.childNodes.length == 0) {
        // dom.current.innerHTML = '😢广告被你屏蔽了。'
        // dom.current.style.height = 'auto';
        // dom.current.className = 'd-none';
        // 如果广告被屏蔽了，那么隐藏广告区域
        dom.current.parentNode.className = 'd-none';
      }
    }, 1000);
  }, []);
  return _react["default"].createElement("ins", _extends({
    className: "adsbygoogle"
  }, props, {
    ref: dom
  }));
}

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAudienceCount = exports.addAudienceCount = exports.loadLiveList = void 0;

var _date = __webpack_require__(13);

var _newGraphqlLoadList = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 加工一下数据
var processList = function processList(list, store, id) {
  list.map(function (posts) {
    if (posts.last_time) posts._last_time = (0, _date.dateDiff)(posts.last_time);
  });
  return list;
};

var loadLiveList = (0, _newGraphqlLoadList["default"])({
  reducerName: 'live',
  actionType: 'ADD_LIVE_LIST_BY_ID',
  processList: processList,
  api: 'live',
  fields: "\n    _id\n    user_id{\n      _id\n      nickname\n      avatar_url\n    }\n    title\n    notice\n    cover_image\n    create_at\n    last_time\n    status\n    audience_count\n    view_count\n    talk_count\n  "
});
exports.loadLiveList = loadLiveList;

var addAudienceCount = function addAudienceCount(liveId) {
  return function (dispatch, getState) {
    console.log('=================');
    dispatch({
      type: 'ADD_AUDIENCE_BY_LIVE_ID',
      id: liveId
    });
  };
};

exports.addAudienceCount = addAudienceCount;

var removeAudienceCount = function removeAudienceCount(liveId) {
  return function (dispatch, getState) {
    dispatch({
      type: 'REMOVE_AUDIENCE_BY_LIVE_ID',
      id: liveId
    });
  };
};

exports.removeAudienceCount = removeAudienceCount;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _posts = __webpack_require__(24);

var _posts2 = __webpack_require__(129);

var _tips = __webpack_require__(127);

var _user2 = __webpack_require__(14);

var _tips2 = __webpack_require__(11);

__webpack_require__(205);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default(_ref) {
  var topicId = _ref.topicId;

  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  }),
      hasNew = (0, _reactRedux.useSelector)(function (state) {
    return (0, _tips2.getTipsById)(state, topicId);
  }),
      _getPostsListById = (0, _reactRedux.useSelector)(function (state) {
    return (0, _posts.getPostsListById)(state, topicId);
  }),
      store = (0, _reactRedux.useStore)(),
      _refreshPostsListById = function _refreshPostsListById(args) {
    return (0, _posts2.refreshPostsListById)(args)(store.dispatch, store.getState);
  },
      _loadTips = function _loadTips() {
    return (0, _tips.loadTips)()(store.dispatch, store.getState);
  },
      _loadUserInfo = function _loadUserInfo(args) {
    return (0, _user2.loadUserInfo)(args)(store.dispatch, store.getState);
  }; // const me = useSelector((state: object)=>getUserInfo(state));
  // const hasNew = useSelector((state: object)=>getTipsById(state, topicId));
  // const _getPostsListById = useSelector((state: object)=>getPostsListById(state, topicId));
  // const store = useStore();
  // const _refreshPostsListById = (args:string)=>refreshPostsListById(args)(store.dispatch, store.getState);
  // const _loadTips = ()=>loadTips()(store.dispatch, store.getState);
  // const _loadUserInfo = (args:object)=>loadUserInfo(args)(store.dispatch, store.getState);


  var start =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var date, _ref3, _ref3$data, data;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (me) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", null);

            case 2:
              date = me["last_find_".concat(topicId == 'favorite' ? 'subscribe' : topicId, "_at")] || '';

              if (date) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return");

            case 5:
              _ref3 = _getPostsListById || {}, _ref3$data = _ref3.data, data = _ref3$data === void 0 ? null : _ref3$data; // 如果当前帖子的中数据比当前用户的记录要大，说明已经是最新的，更新用户的数据，以及tips状态

              if (!data) {
                setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _loadUserInfo({});

                        case 2:
                          _loadTips();

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })), 1000);
              }

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function start() {
      return _ref2.apply(this, arguments);
    };
  }();

  var loadNewPosts =
  /*#__PURE__*/
  function () {
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(topicId == 'favorite' || topicId == 'home')) {
                _context3.next = 8;
                break;
              }

              _context3.next = 3;
              return _refreshPostsListById(topicId);

            case 3:
              if (!me) {
                _context3.next = 6;
                break;
              }

              _context3.next = 6;
              return _loadUserInfo({});

            case 6:
              _loadTips();

              $('body,html').animate({
                scrollTop: 0
              }, 500);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function loadNewPosts() {
      return _ref5.apply(this, arguments);
    };
  }();

  var removeTips = function removeTips() {
    store.dispatch({
      type: 'SET_TIPS_BY_ID',
      id: topicId,
      status: false
    });
  };

  (0, _react.useEffect)(function () {
    start();

    if (hasNew) {
      var obj = FloatFixed({
        id: 'new-tips',
        offsetTop: 50
      });
      return function () {
        obj.remove();
      };
    }
  }, [hasNew]);
  if (!hasNew) return null;
  return _react["default"].createElement("div", {
    className: "_3E8ne"
  }, _react["default"].createElement("div", {
    id: "new-tips"
  }, _react["default"].createElement("span", {
    className: "a _22dYZ",
    onClick: loadNewPosts
  }, "\u6709\u65B0\u7684\u52A8\u6001"), _react["default"].createElement("span", {
    className: "a _19CGl",
    onClick: removeTips
  }, "\xD7")));
}

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshFeedListById = exports.loadFeedList = void 0;

var _date = __webpack_require__(13);

var _utils = _interopRequireDefault(__webpack_require__(17));

var _device = _interopRequireDefault(__webpack_require__(125));

var _newGraphqlLoadList = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 加工问题列表
var processPostsList = function processPostsList(list) {
  list.map(function (item) {
    if (item.posts_id) {
      var posts = item.posts_id; // item.posts_id.user_id = item.user_id;

      if (posts.device) {
        posts._device = _device["default"].getNameByDeviceId(posts.device);
      }

      if (posts.content_html) {
        // 提取内容中所有的图片地址
        // posts.images = abstractImages(posts.content_html);
        posts.images = _utils["default"].abstractImagesFromHTML(posts.content_html);

        if (posts.images && posts.images.length > 0) {
          posts.coverImage = posts.images[0].split('?')[0] + '?imageView2/2/w/300/auto-orient/format/jpg';
        }

        var textContent = _utils["default"].htmlToString(posts.content_html);

        if (textContent.length > 70) textContent = textContent.slice(0, 70) + '...';
        posts.content_summary = textContent; // 获取内容中所有的图片

        posts.content_html = _utils["default"].htmlImageOptimization(posts.content_html);
      }

      if (posts.create_at) posts._create_at = (0, _date.dateDiff)(posts.create_at);
      if (posts.sort_by_date) posts._sort_by_date = (0, _date.dateDiff)(posts.sort_by_date);
      if (posts.last_comment_at) posts._last_comment_at = (0, _date.dateDiff)(posts.last_comment_at);
      item.posts_id = posts;
    }

    if (item.comment_id) {
      item.comment_id.user_id = item.user_id;
      item.comment_id.images = _utils["default"].abstractImagesFromHTML(item.comment_id.content_html); // if (posts.images && posts.images.length > 0) {
      // posts.coverImage = posts.images[0].split('?')[0]+'?imageView2/2/w/300/auto-orient/format/jpg'
      // }

      var _textContent = _utils["default"].htmlImgToText(item.comment_id.content_html);

      _textContent = _utils["default"].htmlToString(_textContent);
      if (_textContent.length > 70) _textContent = _textContent.slice(0, 70) + '...';
      item.comment_id.content_summary = _textContent;
      if (item.comment_id.create_at) item.comment_id._create_at = (0, _date.dateDiff)(item.comment_id.create_at);

      if (item.comment_id.reply_id) {
        var _textContent2 = _utils["default"].htmlToString(item.comment_id.reply_id.content_html);

        if (_textContent2.length > 70) _textContent2 = _textContent2.slice(0, 70) + '...';
        item.comment_id.reply_id.content_summary = _textContent2;
        item.comment_id.reply_id.images = _utils["default"].abstractImagesFromHTML(item.comment_id.reply_id.content_html);
        if (item.comment_id.reply_id.create_at) item.comment_id.reply_id._create_at = (0, _date.dateDiff)(item.comment_id.reply_id.create_at);
      }

      if (item.comment_id.posts_id) {
        var _posts = item.comment_id.posts_id;

        var _textContent3 = _utils["default"].htmlToString(_posts.content_html);

        if (_textContent3.length > 70) _textContent3 = _textContent3.slice(0, 70) + '...';
        _posts.content_summary = _textContent3;
        if (_posts.create_at) _posts._create_at = (0, _date.dateDiff)(_posts.create_at);
        _posts.images = _utils["default"].abstractImagesFromHTML(_posts.content_html);
        item.comment_id.posts_id = _posts;
      }
    }
  });
  return list;
};

var loadFeedList = (0, _newGraphqlLoadList["default"])({
  reducerName: 'feed',
  actionType: 'SET_FEED_LIST_BY_ID',
  processList: processPostsList,
  api: 'feed',
  fields: "\n    _id\n    create_at\n    user_id{\n      _id\n      nickname\n      brief\n      avatar_url\n    }\n    posts_id{\n      _id\n      comment_count\n      reply_count\n      content_html\n      create_at\n      deleted\n      device\n      follow_count\n      ip\n      last_comment_at\n      like_count\n      recommend\n      sort_by_date\n      title\n      topic_id{\n        _id\n        name\n      }\n      type\n      user_id{\n        _id\n        nickname\n        brief\n        avatar_url\n      }\n      verify\n      view_count\n      weaken\n      follow\n      like\n    }\n    comment_id{\n      _id\n      parent_id\n      like\n      like_count\n      reply_count\n      create_at\n      content_html\n      parent_id\n      reply_id{\n        _id\n        content_html\n        create_at\n        user_id{\n          _id\n          nickname\n          brief\n          avatar\n          avatar_url\n        }\n      }\n    }\n  "
}); // 刷新帖子列表

exports.loadFeedList = loadFeedList;

var refreshFeedListById = function refreshFeedListById(id) {
  return function (dispatch, getState) {
    var list = getState().feed[id] || null;
    if (!list || !list.filters) return;
    delete list.filters.page_size;
    delete list.filters.page_number;
    return loadFeedList({
      id: id,
      args: list.filters,
      restart: true
    })(dispatch, getState);
  };
};

exports.refreshFeedListById = refreshFeedListById;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _twoColumns = _interopRequireDefault(__webpack_require__(134));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _posts = __webpack_require__(129);

var _appDownload = _interopRequireDefault(__webpack_require__(194));

var _sMemory = _interopRequireDefault(__webpack_require__(195));

var _linksExchange = _interopRequireDefault(__webpack_require__(197));

var _operatingStatus = _interopRequireDefault(__webpack_require__(198));

var _slogan = _interopRequireDefault(__webpack_require__(199));

var _footer = _interopRequireDefault(__webpack_require__(200));

var _pc = _interopRequireDefault(__webpack_require__(142));

var _postsList = _interopRequireDefault(__webpack_require__(139));

var _newTips = _interopRequireDefault(__webpack_require__(169));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Discover = function Discover() {
  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_twoColumns["default"], null, _react["default"].createElement("div", null, _react["default"].createElement(_newTips["default"], {
    topicId: "home"
  }), _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("span", {
    className: "card-title"
  }, "\u53D1\u73B0")), _react["default"].createElement("div", {
    className: "card-body p-0"
  }, _react["default"].createElement(_postsList["default"], {
    id: "home",
    query: {
      sort_by: "sort_by_date",
      deleted: false,
      weaken: false
    },
    scrollLoad: true
  })))), _react["default"].createElement("div", null, me ? _react["default"].createElement(_reactRouterDom.Link, {
    to: "/new-posts",
    className: "btn btn-primary btn-block",
    style: {
      marginBottom: '10px'
    }
  }, "\u53D1\u5E03\u8BDD\u9898") : _react["default"].createElement(_slogan["default"], null), _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("span", {
    className: "card-title"
  }, "\u63A8\u8350")), _react["default"].createElement("div", {
    className: "card-body p-0"
  }, _react["default"].createElement(_postsList["default"], {
    id: "excellent",
    itemType: "poor",
    query: {
      sort_by: "sort_by_date",
      deleted: false,
      weaken: false,
      recommend: true
    }
  }))), _react["default"].createElement(_pc["default"], {
    width: "250px",
    height: "250px"
  }), _react["default"].createElement(_linksExchange["default"], null), _react["default"].createElement(_operatingStatus["default"], null), _react["default"].createElement(_appDownload["default"], null), _react["default"].createElement(_sMemory["default"], null), _react["default"].createElement(_footer["default"], null))));
};

Discover.loadDataOnServer =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var store, match, res, req, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, match = _ref.match, res = _ref.res, req = _ref.req, user = _ref.user;

            if (!user) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            _context.next = 5;
            return (0, _posts.loadPostsList)({
              id: 'home',
              args: {
                sort_by: "sort_by_date",
                weaken: false
              }
            })(store.dispatch, store.getState);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = Discover;
exports["default"] = _default;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _qrcode = _interopRequireDefault(__webpack_require__(91));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      appsUrl = _useState2[0],
      setAppsUrl = _useState2[1];

  (0, _react.useEffect)(function () {
    setAppsUrl('https://www.xiaoduyu.com/app/xiaoduyu');
  }, []);
  if (!appsUrl) return null;
  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-body d-flex flex-row align-items-center"
  }, _react["default"].createElement("div", {
    className: "mr-3"
  }, appsUrl ? _react["default"].createElement("div", {
    style: {
      border: '4px solid #fff',
      width: '73px',
      height: '73px'
    }
  }, _react["default"].createElement(_qrcode["default"], {
    size: 65,
    value: appsUrl
  })) : null), _react["default"].createElement("div", null, _react["default"].createElement("b", null, "\u5C0F\u5EA6\u9C7CApp"), _react["default"].createElement("div", null, _react["default"].createElement("small", {
    className: "mt-1 text-secondary"
  }, "\u652F\u6301iOS\u3001Android\uFF0C\u626B\u7801\u76F4\u63A5\u4E0B\u8F7D")))));
}

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _qrcode = _interopRequireDefault(__webpack_require__(91));

__webpack_require__(196);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      appsUrl = _useState2[0],
      setAppsUrl = _useState2[1];

  (0, _react.useEffect)(function () {
    setAppsUrl('https://www.xiaoduyu.com/app/1s-memory/');
  }, []);
  if (!appsUrl) return null;
  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-body d-flex flex-row align-items-center"
  }, _react["default"].createElement("div", {
    className: "mr-3"
  }, appsUrl ? _react["default"].createElement("div", {
    style: {
      border: '4px solid #fff',
      width: '73px',
      height: '73px'
    }
  }, _react["default"].createElement(_qrcode["default"], {
    size: 65,
    value: appsUrl
  })) : null), _react["default"].createElement("div", null, _react["default"].createElement("a", {
    href: "https://www.xiaoduyu.com/app/1s-memory/",
    target: "_blank"
  }, _react["default"].createElement("b", {
    className: "text-dark"
  }, "1s Memory")), _react["default"].createElement("div", null, _react["default"].createElement("small", {
    className: "mt-1 text-muted"
  }, "\u4E00\u79D2\u949F\u8BB0\u5FC6\u529B\u6D4B\u8BD5")))));
}

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"icon": "rrGuj"
};

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var cache = [];

function _default() {
  var _useState = (0, _react.useState)(cache),
      _useState2 = _slicedToArray(_useState, 2),
      links = _useState2[0],
      setLinks = _useState2[1];

  (0, _react.useEffect)(function () {
    if (cache.length == 0) {
      $.ajax({
        url: '/links.json',
        type: 'get',
        dataType: "json",
        async: false,
        success: function success(res) {
          setLinks(res);
          cache = res;
        }
      });
    }

    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }, []);
  if (!links.length) return null;
  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u53CB\u60C5\u94FE\u63A5")), _react["default"].createElement("div", {
    className: "card-body row"
  }, links.map(function (item) {
    if (!item.recommend) return null;
    return _react["default"].createElement("div", {
      key: item.domain,
      className: "col-6"
    }, _react["default"].createElement("a", {
      href: item.domain,
      className: "text-dark",
      target: "_blank",
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: item.description || item.name
    }, item.name));
  }), _react["default"].createElement("div", {
    className: "col-12 mt-2"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/links"
  }, "\u67E5\u770B\u5168\u90E8"))));
}

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _website = __webpack_require__(10);

var _website2 = __webpack_require__(27);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      mount = _useState2[0],
      setMount = _useState2[1];

  var store = (0, _reactRedux.useStore)();
  var online = (0, _reactRedux.useSelector)(function (state) {
    return (0, _website.getOnline)(state);
  });
  var operatingStatus = (0, _reactRedux.useSelector)(function (state) {
    return (0, _website.getOperatingStatus)(state);
  });
  var connect = online.connect,
      member = online.member,
      visitor = online.visitor;
  (0, _react.useEffect)(function () {
    if (!operatingStatus.users && !operatingStatus.posts && !operatingStatus.comments && !operatingStatus.replys) {
      (0, _website2.loadOperatingStatus)()(store.dispatch, store.getState);
    }

    setMount(true);
  }, []);
  if (!mount) return null;
  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u8FD0\u8425\u72B6\u6001")), _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement("div", {
    className: "row"
  }, _react["default"].createElement("div", {
    className: "col-6"
  }, _react["default"].createElement("div", null, "\u6CE8\u518C\u4F1A\u5458: ", operatingStatus.users), _react["default"].createElement("div", null, "\u5E16\u5B50: ", operatingStatus.posts), _react["default"].createElement("div", null, "\u8BC4\u8BBA: ", operatingStatus.comments), _react["default"].createElement("div", null, "\u56DE\u590D: ", operatingStatus.replys)), _react["default"].createElement("div", {
    className: "col-6"
  }, _react["default"].createElement("div", null, "\u5728\u7EBF\u4F1A\u5458: ", member), _react["default"].createElement("div", null, "\u5728\u7EBF\u6E38\u5BA2: ", visitor), _react["default"].createElement("div", null, "\u8FDE\u63A5: ", connect)))));
}

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _config = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default() {
  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-body"
  }, _config.description, "\uD83D\uDC1F\uD83D\uDC20\uD83D\uDC21\uD83D\uDC33\uD83D\uDC2C\uD83D\uDC0B\uD83D\uDC19"));
}

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _index = __webpack_require__(1);

__webpack_require__(201);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import ServiceWorker from '@app/modules/settings/service-worker';
function _default() {
  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-body",
    style: {
      fontSize: '12px'
    }
  }, _react["default"].createElement("div", null, _index.contactEmail && _react["default"].createElement("a", {
    href: "mailto:".concat(_index.contactEmail),
    className: "mr-2 text-secondary"
  }, "\u8054\u7CFB\u7AD9\u957F"), _react["default"].createElement(_reactRouterDom.Link, {
    to: "/agreement",
    className: "mr-2 text-secondary"
  }, "\u7528\u6237\u534F\u8BAE"), _react["default"].createElement(_reactRouterDom.Link, {
    to: "/privacy",
    className: "mr-2 text-secondary"
  }, "\u9690\u79C1\u653F\u7B56"), _react["default"].createElement(_reactRouterDom.Link, {
    to: "/links",
    className: "mr-2 text-secondary"
  }, "\u53CB\u60C5\u94FE\u63A5")), _react["default"].createElement("span", {
    className: "text-muted"
  }, new Date().getFullYear(), " ", _index.name + ' '), _index.ICPNumber ? _react["default"].createElement("a", {
    href: "http://www.miitbeian.gov.cn",
    target: "_blank",
    className: "text-secondary ml-2"
  }, _index.ICPNumber) : null, _index.gongWangAnBei ? _react["default"].createElement("div", {
    className: "_1e2xD"
  }, _react["default"].createElement("a", {
    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34130202000179",
    target: "_blank",
    className: "text-secondary"
  }, "\u516C\u7F51\u5B89\u5907", _index.gongWangAnBei, "\u53F7")) : null));
}

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"beian": "_1e2xD"
};

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "_3E8ne",
	"tips": "_22dYZ",
	"close": "_19CGl"
};

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _twoColumns = _interopRequireDefault(__webpack_require__(134));

var _feedList = _interopRequireDefault(__webpack_require__(207));

var _newTips = _interopRequireDefault(__webpack_require__(211));

var _postsList = _interopRequireDefault(__webpack_require__(139));

var _pc = _interopRequireDefault(__webpack_require__(142));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// layout
// components
var _default = function _default() {
  return _react["default"].createElement(_twoColumns["default"], null, _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u6211\u7684\u5173\u6CE8")), _react["default"].createElement("div", {
    className: "card-body p-0"
  }, _react["default"].createElement(_newTips["default"], {
    topicId: "feed"
  }), _react["default"].createElement(_feedList["default"], {
    id: "feed",
    query: {
      preference: true,
      sort_by: "create_at:-1"
    },
    scrollLoad: true,
    nothing: '关注你感兴趣的人或话题，可以获得ta们的最新动态'
  })))), _react["default"].createElement("div", null), _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("b", null, "\u63A8\u8350")), _react["default"].createElement("div", {
    className: "card-body p-0"
  }, _react["default"].createElement(_postsList["default"], {
    id: "excellent",
    itemType: "poor",
    query: {
      sort_by: "sort_by_date",
      deleted: false,
      weaken: false,
      recommend: true
    }
  }))), _react["default"].createElement(_pc["default"], {
    width: "250px",
    height: "250px"
  })));
};

exports["default"] = _default;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _feed = __webpack_require__(170);

var _feed2 = __webpack_require__(34);

var _itemRich = _interopRequireDefault(__webpack_require__(168));

var _itemComment = _interopRequireDefault(__webpack_require__(208));

var _list = _interopRequireDefault(__webpack_require__(123));

__webpack_require__(210);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _default(props) {
  var id = props.id;
  var store = (0, _reactRedux.useStore)();
  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _feed2.getFeedListById)(state, id);
  });
  return _react["default"].createElement(_list["default"], _extends({}, props, list, {
    load: function load(params) {
      return (0, _feed.loadFeedList)(params)(store.dispatch, store.getState);
    },
    renderItem: function renderItem(item) {
      if (item.comment_id) {
        return _react["default"].createElement(_itemComment["default"], {
          key: item._id,
          posts: item.posts_id,
          comment: item.comment_id
        });
      } else if (item.posts_id) {
        return _react["default"].createElement(_itemRich["default"], {
          key: item._id,
          posts: item.posts_id,
          switchHasRead: false
        });
      }
    }
  }));
}

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _getClassName2 = _interopRequireDefault(__webpack_require__(26));

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

__webpack_require__(209);

var _reactRedux = __webpack_require__(7);

var _hasReadPosts = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// styles
// import { smart } from '@babel/template';
var _styleModuleImportMap = {
  "./styles/index.scss": {
    "item": "_Auq_",
    "active": "_1RXId",
    "posts-title": "_3q3pu",
    "line": "_24XVt",
    "item-active": "-tQWE",
    "fixed": "_3MoCV",
    "head": "_3G6U4",
    "avatar": "_1HImj",
    "people-brief": "_1SJ5k",
    "right": "_3sElI",
    "info": "_2L151",
    "menu": "_1T2uj",
    "title": "_11oHU",
    "posts-avatar": "_2-vR1",
    "nickname": "_1Ilr-",
    "content": "VM8TU",
    "content-have-img": "_2okEm",
    "images": "_20J51",
    "image-item": "_1s_-0",
    "footer": "_3QVDk",
    "actions": "_16wn3",
    "collapse": "_3oY1v",
    "footer-main": "_2AwNz",
    "cover": "_2Ac--",
    "cover-image": "At3Fc",
    "posts-item": "_1kJ7g",
    "posts-item-avatar": "_3VWeG",
    "posts-item-nickname": "_3898T",
    "posts-item-title": "_2z14K",
    "posts-item-reply": "_2Qaca",
    "content_summary": "_2_DeZ",
    "actions-bar": "_3TDDl",
    "create-at": "_1ROlw",
    "reply-item": "xwUUt",
    "comment-list": "_35NTF",
    "other-info": "rPUgX",
    "has-read": "joGSs"
  }
};

function _default(_ref) {
  var comment = _ref.comment,
      posts = _ref.posts;

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      history = _useReactRouter.history,
      location = _useReactRouter.location,
      match = _useReactRouter.match;

  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };

  var hasRead = (0, _reactRedux.useSelector)(function (state) {
    return (0, _hasReadPosts.getHasReadByCommentId)(state, {
      commentId: comment._id,
      total: comment.reply_count
    });
  });
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    onClick: function onClick() {
      history.push("/comment/".concat(comment._id));
    },
    className: "border-bottom " + (0, _getClassName2["default"])(hasRead ? 'item has-read' : 'item', _styleModuleImportMap)
  }, _react["default"].createElement("div", {
    className: "_3G6U4"
  }, _react["default"].createElement("div", {
    className: "d-flex justify-content-between _2L151"
  }, _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/people/".concat(comment.user_id._id),
    onClick: stopPropagation,
    className: "text-dark _1Ilr-"
  }, _react["default"].createElement("i", {
    className: "load-demand _1HImj",
    "data-load-demand": "<img src=\"".concat(comment.user_id.avatar_url, "\" />")
  }), _react["default"].createElement("span", null, comment.user_id.nickname))), _react["default"].createElement("div", null))), comment.content_summary ? _react["default"].createElement("div", {
    className: "d-flex justify-content-between"
  }, _react["default"].createElement("div", {
    className: "VM8TU"
  }, _react["default"].createElement("span", null, comment.content_summary)), comment.reply_count ? _react["default"].createElement("div", {
    className: "_1RXId"
  }, _react["default"].createElement("span", {
    className: "badge badge-pill badge-secondary"
  }, comment.reply_count)) : null) : null, _react["default"].createElement("div", {
    className: "rPUgX"
  }, _react["default"].createElement("small", {
    className: "text-muted"
  }, comment._create_at), comment.like_count ? _react["default"].createElement("small", {
    className: "text-muted"
  }, comment.like_count, " \u4EBA\u70B9\u8D5E") : null), function () {
    if (!comment.parent_id && !posts) {
      return _react["default"].createElement("del", {
        className: "_1kJ7g"
      }, "\u5E16\u5B50\u88AB\u5220\u9664");
    } // 如果有parent_id，表示该条评论是回复，如果不存在reply_id，那么reply被删除


    if (comment.parent_id && !comment.reply_id) {
      return _react["default"].createElement("div", {
        className: "_1kJ7g"
      }, "\u56DE\u590D\u88AB\u5220\u9664");
    }

    if (comment.reply_id) {
      return _react["default"].createElement(_reactRouterDom.Link, {
        onClick: stopPropagation,
        to: "/comment/".concat(comment._id),
        className: "text-dark _1kJ7g"
      }, _react["default"].createElement("img", {
        className: "_2-vR1",
        src: comment.reply_id.user_id.avatar_url
      }), comment.reply_id.content_summary);
    }

    if (posts) {
      return _react["default"].createElement(_reactRouterDom.Link, {
        onClick: stopPropagation,
        to: "/posts/".concat(posts._id),
        className: "text-dark _1kJ7g"
      }, _react["default"].createElement("img", {
        className: "_2-vR1",
        src: posts.user_id.avatar_url
      }), posts.title);
    }
  }()));
}

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "_Auq_",
	"active": "_1RXId",
	"posts-title": "_3q3pu",
	"line": "_24XVt",
	"item-active": "-tQWE",
	"head": "_3G6U4",
	"avatar": "_1HImj",
	"people-brief": "_1SJ5k",
	"right": "_3sElI",
	"info": "_2L151",
	"menu": "_1T2uj",
	"title": "_11oHU",
	"posts-avatar": "_2-vR1",
	"nickname": "_1Ilr-",
	"content": "VM8TU",
	"content-have-img": "_2okEm",
	"images": "_20J51",
	"image-item": "_1s_-0",
	"footer": "_3QVDk",
	"actions": "_16wn3",
	"collapse": "_3oY1v",
	"footer-main": "_2AwNz",
	"cover": "_2Ac--",
	"cover-image": "At3Fc",
	"posts-item": "_1kJ7g",
	"posts-item-avatar": "_3VWeG",
	"posts-item-nickname": "_3898T",
	"posts-item-title": "_2z14K",
	"posts-item-reply": "_2Qaca",
	"content_summary": "_2_DeZ",
	"actions-bar": "_3TDDl",
	"create-at": "_1ROlw",
	"reply-item": "xwUUt",
	"comment-list": "_35NTF",
	"other-info": "rPUgX",
	"has-read": "joGSs"
};

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"bottom-bar": "ibZYZ",
	"bottom-bar-main": "_1NODe"
};

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _feed = __webpack_require__(34);

var _feed2 = __webpack_require__(170);

var _tips = __webpack_require__(127);

var _user2 = __webpack_require__(14);

var _tips2 = __webpack_require__(11);

__webpack_require__(212);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default(_ref) {
  var topicId = _ref.topicId;
  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });

  if (!me) {
    return null;
  }

  var hasNew = (0, _reactRedux.useSelector)(function (state) {
    return (0, _tips2.getTipsById)(state, topicId);
  });

  var _getFeedListById = (0, _reactRedux.useSelector)(function (state) {
    return (0, _feed.getFeedListById)(state, topicId);
  });

  var store = (0, _reactRedux.useStore)(); // const _loadPostsList = (args:object)=>loadPostsList(args)(store.dispatch, store.getState);

  var _refreshPostsListById = function _refreshPostsListById(args) {
    return (0, _feed2.refreshFeedListById)(args)(store.dispatch, store.getState);
  };

  var _loadTips = function _loadTips(params) {
    return (0, _tips.loadTips)(params)(store.dispatch, store.getState);
  };

  var _loadUserInfo = function _loadUserInfo(args) {
    return (0, _user2.loadUserInfo)(args)(store.dispatch, store.getState);
  }; // loadPostsList: bindActionCreators(loadPostsList, dispatch),
  // refreshPostsListById: bindActionCreators(refreshPostsListById, dispatch),
  // loadTips: bindActionCreators(loadTips, dispatch),
  // loadUserInfo: bindActionCreators(loadUserInfo, dispatch)


  var start =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var date, _ref3, _ref3$data, data;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // const { me, topicId, getPostsListById, loadUserInfo, loadTips } = this.props;
              date = me["last_find_".concat(topicId == 'favorite' ? 'subscribe' : topicId, "_at")] || '';

              if (date) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return");

            case 3:
              _ref3 = _getFeedListById || {}, _ref3$data = _ref3.data, data = _ref3$data === void 0 ? null : _ref3$data; //getPostsListById(topicId);
              // if (!data || !data[0]) return;
              // 如果当前帖子的中数据比当前用户的记录要大，说明已经是最新的，更新用户的数据，以及tips状态

              if (!data // topicId == 'favorite' && !data
              // topicId == 'favorite' && data && new Date(date).getTime() < new Date(data[0].last_comment_at).getTime() ||
              // topicId == 'feed' && data && 
              ) {
                  setTimeout(
                  /*#__PURE__*/
                  _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _loadUserInfo({});

                          case 2:
                            _loadTips('new-feed');

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  })), 1000);
                }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function start() {
      return _ref2.apply(this, arguments);
    };
  }();

  var loadNewPosts =
  /*#__PURE__*/
  function () {
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _refreshPostsListById(topicId);

            case 2:
              _context3.next = 4;
              return _loadUserInfo({});

            case 4:
              _loadTips('new-feed'); // }


            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function loadNewPosts() {
      return _ref5.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    start();
  }, []); // let { data = null, filters } = _getFeedListById;
  // if (!data) return null;

  if (!hasNew) return null;
  return _react["default"].createElement("span", {
    className: "a _2i1nS",
    onClick: loadNewPosts
  }, "\u6709\u65B0\u7684\u52A8\u6001");
}

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"bar": "_2i1nS"
};

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _twoColumns = _interopRequireDefault(__webpack_require__(134));

var _postsList = _interopRequireDefault(__webpack_require__(139));

var _newTips = _interopRequireDefault(__webpack_require__(169));

var _pc = _interopRequireDefault(__webpack_require__(142));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// modules
function _default() {
  return _react["default"].createElement(_twoColumns["default"], null, _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u6211\u7684\u6536\u85CF")), _react["default"].createElement("div", {
    className: "card-body p-0"
  }, _react["default"].createElement(_newTips["default"], {
    topicId: "favorite"
  }), _react["default"].createElement(_postsList["default"], {
    id: 'favorite',
    query: {
      method: 'favorite',
      sort_by: "last_comment_at:-1",
      deleted: false,
      weaken: false
    },
    scrollLoad: true,
    nothing: "\u6536\u85CF\u4F60\u611F\u5174\u8DA3\u7684\u5E16\u5B50\uFF0C\u53EF\u4EE5\u83B7\u5F97\u5E16\u5B50\u7684\u6700\u65B0\u52A8\u6001"
  })))), _react["default"].createElement("div", null), _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("b", null, "\u63A8\u8350")), _react["default"].createElement("div", {
    className: "card-body p-0"
  }, _react["default"].createElement(_postsList["default"], {
    id: "excellent",
    itemType: "poor",
    query: {
      sort_by: "sort_by_date",
      deleted: false,
      weaken: false,
      recommend: true
    }
  }))), _react["default"].createElement(_pc["default"], {
    width: "250px",
    height: "250px"
  })));
}

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _live = _interopRequireDefault(__webpack_require__(215));

__webpack_require__(218);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// modules
var _default = function _default() {
  return _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement(_live["default"], {
    id: "lives-online",
    query: {}
  }));
};

exports["default"] = _default;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _live = __webpack_require__(151);

var _live2 = __webpack_require__(36);

var _images = _interopRequireDefault(__webpack_require__(216));

var _list = _interopRequireDefault(__webpack_require__(123));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _default(props) {
  var id = props.id;
  var store = (0, _reactRedux.useStore)();
  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _live2.getLiveListById)(state, id);
  });
  return _react["default"].createElement("div", {
    className: "row"
  }, _react["default"].createElement(_list["default"], _extends({}, props, list, {
    load: function load(params) {
      return (0, _live.loadLiveList)(params)(store.dispatch, store.getState);
    },
    renderItem: function renderItem(item) {
      // return <>
      //   <Item key={item._id} data={item} />
      //   <Item key={item._id} data={item} />
      //   <Item key={item._id} data={item} />
      //   <Item key={item._id} data={item} />
      // </>
      return _react["default"].createElement(_images["default"], {
        key: item._id,
        data: item
      });
    }
  })));
}

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

__webpack_require__(217);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { useSelector } from 'react-redux';
// import { getHasReadByPostsId } from '@app/redux/reducers/has-read-posts';
// styles
function _default(_ref) {
  var data = _ref.data;

  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      history = _useReactRouter.history,
      location = _useReactRouter.location,
      match = _useReactRouter.match;

  var toPostsDetail = function toPostsDetail() {
    return history.push("/live/".concat(data._id));
  };

  return _react["default"].createElement("div", {
    onClick: toPostsDetail,
    className: "col-md-4"
  }, _react["default"].createElement("div", {
    className: "card _1D3j5"
  }, _react["default"].createElement("div", {
    className: "rounded-top _3bErH",
    style: data.status && data.cover_image ? {
      backgroundImage: "url(".concat(data.cover_image, ")")
    } : {}
  }, !data.status ? _react["default"].createElement("div", {
    className: "Th5QP"
  }, _react["default"].createElement("h5", null, "\u9884\u544A"), data.notice) : null), _react["default"].createElement("div", {
    className: "_1iOFu"
  }, _react["default"].createElement("div", {
    className: "_1axQl"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/live/".concat(data._id),
    onClick: stopPropagation,
    className: "text-dark"
  }, data.title)), _react["default"].createElement("div", {
    className: "d-flex justify-content-between _2PfB3"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/people/".concat(data.user_id._id),
    onClick: stopPropagation,
    className: "text-dark _1YDzz"
  }, _react["default"].createElement("i", {
    className: "load-demand _2pGUV",
    "data-load-demand": encodeURIComponent("<img src=\"".concat(data.user_id.avatar_url, "\" />"))
  }), _react["default"].createElement("span", null, data.user_id.nickname)), data.status ? _react["default"].createElement("div", {
    className: "text-secondary _3tIVJ"
  }, data.view_count ? _react["default"].createElement("span", null, _react["default"].createElement("svg", {
    width: "14",
    height: "14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _react["default"].createElement("use", {
    xlinkHref: "/feather-sprite.svg#eye"
  })), data.view_count) : null, data.talk_count ? _react["default"].createElement("span", null, _react["default"].createElement("svg", {
    width: "14",
    height: "14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _react["default"].createElement("use", {
    xlinkHref: "/feather-sprite.svg#message-square"
  })), data.talk_count) : null, data.audience_count ? _react["default"].createElement("span", null, _react["default"].createElement("svg", {
    width: "14",
    height: "14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _react["default"].createElement("use", {
    xlinkHref: "/feather-sprite.svg#user"
  })), data.audience_count) : null) : null))));
}

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"box": "_1D3j5",
	"cover-image": "_3bErH",
	"notice": "Th5QP",
	"main": "_1iOFu",
	"nickname": "_1YDzz",
	"avatar": "_2pGUV",
	"title": "_1axQl",
	"sub-content": "_2PfB3",
	"active-info": "_3tIVJ",
	"heat": "_3zOP0",
	"posts-info": "_2M3Mr",
	"topic": "_3nXRK"
};

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"online": "_2cnlS"
};

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _twoColumns = _interopRequireDefault(__webpack_require__(134));

var _pc = _interopRequireDefault(__webpack_require__(142));

var _postsList = _interopRequireDefault(__webpack_require__(139));

__webpack_require__(220);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// layout
// components
// styles
var _default = function _default(_ref) {
  var topic = _ref.topic;
  var topic_id = [];

  if (topic.children && topic.children.length > 0) {
    topic.children.map(function (item) {
      topic_id.push(item._id);
    });
  }

  topic_id = topic_id.join(',');
  return _react["default"].createElement(_twoColumns["default"], null, _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, topic.children && topic.children.length > 0 ? _react["default"].createElement("div", {
    className: "_272xL"
  }, topic.children.map(function (_ref2) {
    var _id = _ref2._id,
        name = _ref2.name;
    return _react["default"].createElement(_reactRouterDom.Link, {
      key: _id,
      to: "/topic/".concat(_id),
      className: "text-dark"
    }, name);
  })) : null), _react["default"].createElement("div", {
    className: "card-body p-0"
  }, _react["default"].createElement(_postsList["default"], {
    id: topic._id,
    query: {
      sort_by: "sort_by_date:-1",
      deleted: false,
      weaken: false,
      page_size: 30,
      topic_id: topic_id
    },
    scrollLoad: true
  })))), _react["default"].createElement("div", null), _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u6700\u70ED")), _react["default"].createElement("div", {
    className: "card-body p-0"
  }, _react["default"].createElement(_postsList["default"], {
    id: 'hot-' + topic._id,
    itemType: "poor",
    query: {
      topic_id: topic_id,
      sort_by: "comment_count:-1,like_count:-1,sort_by_date:-1",
      start_create_at: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7) + '',
      deleted: false,
      weaken: false,
      page_size: 10
    }
  }))), _react["default"].createElement(_pc["default"], {
    width: "250px",
    height: "250px"
  })));
};

exports["default"] = _default;

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"child-topic": "_272xL"
};

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _config = __webpack_require__(1);

var _reactRedux = __webpack_require__(7);

var _website = __webpack_require__(10);

var _topic = __webpack_require__(16);

var _website2 = __webpack_require__(27);

var _shell = _interopRequireDefault(__webpack_require__(117));

var _meta = _interopRequireDefault(__webpack_require__(118));

var _discover = _interopRequireDefault(__webpack_require__(193));

var _follow = _interopRequireDefault(__webpack_require__(206));

var _favorite = _interopRequireDefault(__webpack_require__(213));

var _live = _interopRequireDefault(__webpack_require__(214));

var _topic2 = _interopRequireDefault(__webpack_require__(219));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Home = function Home() {
  var tab = (0, _reactRedux.useSelector)(function (state) {
    return (0, _website.getTab)(state);
  });
  var parentTopicList = (0, _reactRedux.useSelector)(function (state) {
    return (0, _topic.getTopicListById)(state, 'parent-topics');
  });
  var topicIds = {};

  if (parentTopicList && parentTopicList.data && parentTopicList.data.length > 0) {
    parentTopicList.data.map(function (item) {
      topicIds[item._id] = item;
    });
  }

  return _react["default"].createElement("div", null, _react["default"].createElement(_meta["default"], null, _react["default"].createElement("meta", {
    name: "description",
    content: _config.description
  }), _react["default"].createElement("meta", {
    property: "og:locale",
    content: "zh_CN"
  }), _react["default"].createElement("meta", {
    property: "og:type",
    content: "website"
  }), _react["default"].createElement("meta", {
    property: "og:title",
    content: _config.name
  }), _react["default"].createElement("meta", {
    property: "og:description",
    content: _config.description
  }), _react["default"].createElement("meta", {
    property: "og:url",
    content: _config.domainName
  }), _react["default"].createElement("meta", {
    property: "og:site_name",
    content: _config.name
  }), _react["default"].createElement("meta", {
    property: "og:image",
    content: _config.domainName + '/512x512.png'
  }), _react["default"].createElement("meta", {
    property: "og:image:width",
    content: "512"
  }), _react["default"].createElement("meta", {
    property: "og:image:height",
    content: "512"
  })), function () {
    var content = null;

    if (tab == 'follow') {
      content = _react["default"].createElement(_follow["default"], null);
    } else if (tab == 'favorite') {
      content = _react["default"].createElement(_favorite["default"], null);
    } else if (tab == 'live') {
      content = _react["default"].createElement(_live["default"], null);
    } else if (topicIds[tab]) {
      content = _react["default"].createElement(_topic2["default"], {
        topic: topicIds[tab]
      });
    } else {
      content = _react["default"].createElement(_discover["default"], null);
    }

    return _react["default"].createElement("div", null, content);
  }());
};

Home.loadDataOnServer =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var store, match, res, req, user, topic;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref.store, match = _ref.match, res = _ref.res, req = _ref.req, user = _ref.user;
            topic = req.cookies['tab'] || 'home';
            (0, _website2.saveTab)(topic)(store.dispatch, store.getState);

            if (!(topic == 'home')) {
              _context.next = 6;
              break;
            }

            _context.next = 6;
            return _discover["default"].loadDataOnServer({
              store: store,
              match: match,
              res: res,
              req: req,
              user: user
            });

          case 6:
            return _context.abrupt("return", {
              code: 200
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = (0, _shell["default"])(Home);

exports["default"] = _default;

/***/ })

};;