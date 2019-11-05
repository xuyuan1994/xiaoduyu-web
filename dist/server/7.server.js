exports.ids = [7];
exports.modules = {

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _useReactRouter = _interopRequireDefault(__webpack_require__(19));

var GlobalData = _interopRequireWildcard(__webpack_require__(12));

var _reactRedux = __webpack_require__(7);

var _scroll = __webpack_require__(22);

var _parseUrl = _interopRequireDefault(__webpack_require__(119));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(Component) {
  var Page = function Page(_ref) {
    var history = _ref.history,
        location = _ref.location,
        match = _ref.match,
        staticContext = _ref.staticContext;

    // 添加 history 到全局变量中，用于给一些不能使用 useReactRouter 场景的页面跳转
    if (typeof window != 'undefined') {
      GlobalData.set('history', (0, _useReactRouter["default"])().history);
    }

    var _useState = (0, _react.useState)(''),
        _useState2 = _slicedToArray(_useState, 2),
        notFound = _useState2[0],
        setNotFound = _useState2[1];

    var store = (0, _reactRedux.useStore)();
    var pathname = location.pathname,
        search = location.search;
    location.params = search ? (0, _parseUrl["default"])(search) : {};
    (0, _react.useEffect)(function () {
      // 客户端浏览器设置滚动条位置
      if (typeof window != 'undefined' && window.location.pathname != '/') {
        (0, _scroll.setScrollPosition)(pathname + search)(store.dispatch, store.getState);
      }

      return function () {
        if (typeof window != 'undefined') {
          // 客户端浏览器设置滚动条位置
          // saveScrollPosition(pathname + search)(store.dispatch, store.getState);
          // 删除history
          GlobalData.remove('history');
        }
      };
    }, []);

    if (notFound) {
      return _react["default"].createElement("div", {
        className: "container text-center"
      }, notFound);
    }

    return _react["default"].createElement(Component, {
      match: match,
      setNotFound: setNotFound
    });
  };

  Page.loadDataOnServer = Component.loadDataOnServer || function () {
    return {
      code: 200
    };
  };

  return Page;
}

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactMetaTags = _interopRequireWildcard(__webpack_require__(21));

var _reactRedux = __webpack_require__(7);

var _website = __webpack_require__(10);

var _tips = __webpack_require__(11);

var _config = __webpack_require__(1);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// redux
function _default(_ref) {
  var title = _ref.title,
      children = _ref.children;
  var unreadNotice = (0, _reactRedux.useSelector)(function (state) {
    return (0, _website.getUnreadNotice)(state);
  });
  var hasFeed = (0, _reactRedux.useSelector)(function (state) {
    return (0, _tips.getTipsById)(state, 'home') || (0, _tips.getTipsById)(state, 'feed') || (0, _tips.getTipsById)(state, 'favorite') || (0, _tips.getTipsById)(state, 'excellent');
  });
  var hasSessions = (0, _reactRedux.useSelector)(function (state) {
    return (0, _tips.getTipsById)(state, 'unread-message');
  });
  var _title = '';
  if (hasSessions) _title += "(".concat(hasSessions, "\u6761\u79C1\u4FE1) ");
  if (unreadNotice && unreadNotice.length > 0) _title += "(".concat(unreadNotice.length, "\u6761\u901A\u77E5) ");
  if (hasFeed) _title += "(\u6709\u65B0\u52A8\u6001) ";
  _title += title || _config.name;
  if (title) _title += " - ".concat(_config.name);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactMetaTags.ReactTitle, {
    title: _title
  }), children ? _react["default"].createElement(_reactMetaTags["default"], null, children) : null);
}

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var parseUrl = function parseUrl(search) {
  var paramPart = search.substr(1).split('&');
  return paramPart.reduce(function (res, item) {
    if (item) {
      var parts = item.split('=');
      res[parts[0]] = parts[1] || '';
    }

    return res;
  }, {});
};

var _default = parseUrl;
exports["default"] = _default;

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

__webpack_require__(124);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'sm' : _ref$size,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'center' : _ref$position;
  return _react["default"].createElement("span", {
    className: "_3H7UH"
  });
  var sizeList = {
    sm: 'spinner-border-sm'
  };
  var positionList = {
    center: 'd-flex justify-content-center'
  };
  return _react["default"].createElement("div", {
    className: "".concat(positionList[position] || '')
  }, _react["default"].createElement("div", {
    className: "spinner-border text-primary ".concat(sizeList[size] || ''),
    role: "status"
  }, _react["default"].createElement("span", {
    className: "sr-only"
  }, "\u52A0\u8F7D\u4E2D...")));
}

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loading": "_3H7UH"
};

/***/ }),

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

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSession = getSession;
exports.readSession = readSession;
exports.updateSession = updateSession;
exports.loadSessionList = void 0;

var _graphql = _interopRequireDefault(__webpack_require__(2));

var _date = __webpack_require__(13);

var _tips = __webpack_require__(127);

var _session = __webpack_require__(25);

var _newGraphqlLoadList = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var loadSessionList = (0, _newGraphqlLoadList["default"])({
  reducerName: 'session',
  actionType: 'SET_SESSION_LIST_BY_ID',
  api: 'sessions',
  fields: "\n    _id\n    user_id{\n      _id\n      nickname\n      avatar_url\n    }\n    addressee_id{\n      _id\n      nickname\n      avatar_url\n    }\n    last_message{\n      content_html\n      create_at\n    }\n    unread_count\n    create_at\n    top_at\n  ",
  processList: function processList(list) {
    list.map(function (item) {
      if (item.create_at) item._create_at = (0, _date.dateDiff)(item.create_at);

      if (item.last_message) {
        item.last_message._create_at = (0, _date.dateDiff)(item.last_message.create_at);

        if (item.last_message.content_html) {
          var text = item.last_message.content_html.replace(/<[^>]+>/g, "");
          if (text.length > 200) text = text.slice(0, 200) + '...';
          item.last_message.content_summary = text;
        } else {
          item.last_message.content_summary = '';
        }
      }
    });
    return list;
  }
});
exports.loadSessionList = loadSessionList;

function getSession(_ref) {
  var people_id = _ref.people_id;
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
                    api: 'getSession',
                    args: {
                      people_id: people_id
                    },
                    fields: "_id"
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

                if (res && res._id) {
                  resolve(res._id);
                } else {
                  console.log(err);
                }

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
    }());
  };
}

function readSession(_ref5) {
  var _id = _ref5._id;
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(resolve) {
        var state, list, unreadCount;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                state = getState();
                (0, _graphql["default"])({
                  type: 'mutation',
                  apis: [{
                    api: 'readSession',
                    args: {
                      _id: _id
                    },
                    fields: "success"
                  }],
                  headers: {
                    accessToken: state.user.accessToken
                  }
                });
                dispatch({
                  type: 'UPDATE_READ_BY_ID',
                  id: _id
                }); // ---------------
                // 重新计算私信的未读数

                list = (0, _session.getSessionListById)(state, 'all');

                if (list && list.data) {
                  unreadCount = 0;
                  list.data.map(function (item) {
                    unreadCount += item.unread_count;
                  });
                  dispatch({
                    type: 'SET_TIPS_BY_ID',
                    id: 'unread-message',
                    status: unreadCount
                  });
                } else {
                  (0, _tips.loadTips)()(dispatch, getState);
                }

                resolve();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref6.apply(this, arguments);
      };
    }());
  };
} // 如果session有更新，则更新会话列表


function updateSession(id) {
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(resolve) {
        var err, res, result, _result, list;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return loadSessionList({
                  id: 'new',
                  args: {
                    _id: id,
                    page_size: 1
                  },
                  restart: true
                })(dispatch, getState);

              case 2:
                result = _context3.sent;
                _result = _slicedToArray(result, 2);
                err = _result[0];
                res = _result[1];

                if (res && res.data && res.data[0]) {
                  list = (0, _session.getSessionListById)(getState(), 'all');

                  if (list && list.data) {
                    list.data.some(function (item, index) {
                      if (item._id == id) {
                        list.data.splice(index, 1);
                        return true;
                      } else {
                        return false;
                      }
                    });
                    list.data.unshift(res.data[0]);
                    dispatch({
                      type: 'SET_SESSION_LIST_BY_ID',
                      name: 'all',
                      data: list
                    });
                  }

                  list = getState().session[id];

                  if (list) {
                    list.data = res.data;
                    dispatch({
                      type: 'SET_SESSION_LIST_BY_ID',
                      name: id,
                      data: list
                    });
                  }
                }

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref7.apply(this, arguments);
      };
    }());
  };
}

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMessagesToList = exports.addMessage = exports.loadMessageList = void 0;

var _graphql = _interopRequireDefault(__webpack_require__(2));

var _newGraphqlLoadList = _interopRequireDefault(__webpack_require__(20));

var _date = __webpack_require__(13);

var _website = __webpack_require__(27);

var _user = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import loadList from '../../common/new-graphql-load-list';
var loadMessageList = (0, _newGraphqlLoadList["default"])({
  reducerName: 'message',
  actionType: 'SET_MESSAGE_LIST_BY_ID',
  api: 'messages',
  unshift: true,
  fields: "\n    _id\n    user_id {\n      _id\n      nickname\n      avatar_url\n    }\n    addressee_id {\n      _id\n      nickname\n      avatar_url\n    }\n    type\n    content_html\n    create_at\n  ",
  processList: function processList(list) {
    var lastItem = null;
    list.map(function (item) {
      if (!lastItem || new Date(lastItem.create_at).getTime() - new Date(item.create_at).getTime() > 1000 * 60 * 5) {
        item._create_at = (0, _date.dateDiff)(item.create_at);
        lastItem = item;
      }
    });
    list.reverse();
    return list;
  }
});
exports.loadMessageList = loadMessageList;

var addMessage = function addMessage(_ref) {
  var addressee_id = _ref.addressee_id,
      type = _ref.type,
      content = _ref.content,
      content_html = _ref.content_html,
      device = _ref.device;
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
                  type: 'mutation',
                  apis: [{
                    api: 'addMessage',
                    args: {
                      addressee_id: addressee_id,
                      type: type,
                      content: content,
                      content_html: content_html,
                      device: device
                    },
                    fields: "success"
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
    }());
  };
};

exports.addMessage = addMessage;

// 添加新的消息到消息列表
var addMessagesToList = function addMessagesToList(_ref5) {
  var sessionId = _ref5.sessionId,
      messageId = _ref5.messageId;
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(resolve) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                loadMessageList({
                  id: messageId,
                  args: {
                    _id: messageId
                  }
                })(dispatch, getState).then(function (_ref7) {
                  var _ref8 = _slicedToArray(_ref7, 2),
                      err = _ref8[0],
                      res = _ref8[1];

                  var message = res.data[0];
                  var me = (0, _user.getUserInfo)(getState());

                  if (me._id == message.addressee_id._id) {
                    var body = message.content_html;
                    body = body.replace(/<[^>]+>/g, '');
                    body = body.replace(/\r\n/g, '');
                    body = body.replace(/\n/g, '');
                    (0, _website.sendNotification)({
                      content: message.user_id.nickname || '私信',
                      option: {
                        body: body,
                        icon: 'https:' + message.user_id.avatar_url,
                        image: 'https:' + message.user_id.avatar_url,
                        tag: 'message',
                        data: {
                          message: message
                        }
                      }
                    })(dispatch, getState);
                  }

                  var list = getState().message[sessionId];

                  if (list && list.data) {
                    list.data.push(res.data[0]);
                    dispatch({
                      type: 'SET_MESSAGE_LIST_BY_ID',
                      name: sessionId,
                      data: list
                    });
                    /*
                    // 如果当前页面是对话消息页面，并且会话相同，则设置session已读状态
                    let router = navigatorService.getCurrentRoute();
                     if (router && router.routeName == "sessionsDetail" &&
                        router.params.id == sessionId
                    ) {
                      readSession({
                        _id: router.params.id
                      })(dispatch, getState);
                    }
                    */
                  }
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref6.apply(this, arguments);
      };
    }());
  };
};

exports.addMessagesToList = addMessagesToList;

/***/ })

};;