exports.ids = [12];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _shell = _interopRequireDefault(__webpack_require__(117));

var _meta = _interopRequireDefault(__webpack_require__(118));

var _sessionList = _interopRequireDefault(__webpack_require__(249));

var _singleColumns = _interopRequireDefault(__webpack_require__(120));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// modules
// layout
var _default = (0, _shell["default"])(function () {
  return _react["default"].createElement(_singleColumns["default"], null, _react["default"].createElement(_meta["default"], {
    title: "\u79C1\u4FE1"
  }), _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u6211\u7684\u79C1\u4FE1")), _react["default"].createElement("div", {
    className: "card-body p-0"
  }, _react["default"].createElement(_sessionList["default"], {
    id: "all",
    scrollLoad: true,
    query: {
      sort_by: 'last_message:-1'
    }
  }))));
});

exports["default"] = _default;

/***/ }),

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

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

__webpack_require__(121);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(_ref) {
  var children = _ref.children;
  return _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement("div", {
    className: "_3RUsQ"
  }, children));
}

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"box": "_3RUsQ"
};

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

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = List;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _loading = _interopRequireDefault(__webpack_require__(122));

var _pagination = _interopRequireDefault(__webpack_require__(126));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// components
// import ContentLoading from '@app/components/ui/content-loading';
function List(_ref) {
  var id = _ref.id,
      query = _ref.query,
      _ref$fields = _ref.fields,
      fields = _ref$fields === void 0 ? '' : _ref$fields,
      load = _ref.load,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? true : _ref$loading,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 0 : _ref$count,
      _ref$more = _ref.more,
      more = _ref$more === void 0 ? true : _ref$more,
      _ref$showPagination = _ref.showPagination,
      showPagination = _ref$showPagination === void 0 ? false : _ref$showPagination,
      _ref$scrollLoad = _ref.scrollLoad,
      scrollLoad = _ref$scrollLoad === void 0 ? false : _ref$scrollLoad,
      _ref$nothing = _ref.nothing,
      nothing = _ref$nothing === void 0 ? '--- 无数据 ---' : _ref$nothing,
      filters = _ref.filters,
      renderItem = _ref.renderItem,
      renderHead = _ref.renderHead,
      renderFooter = _ref.renderFooter;

  var loadData = function loadData() {
    var restart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    load({
      id: id,
      args: query,
      fields: fields,
      restart: restart
    }); // load({ id, filters: { variables: query, select: fields }, restart });
  };

  (0, _react.useEffect)(function () {
    if (data.length == 0 && more) loadData();
    if (scrollLoad) ArriveFooter.add(id, loadData);
    return function () {
      if (scrollLoad) ArriveFooter.remove(id);
    };
  }, [id]); // 没有数据

  if (!loading && data && data.length == 0 && !more && nothing) {
    return _react["default"].createElement("div", {
      className: "text-center text-secondary pt-3 pb-3"
    }, nothing);
  }

  return _react["default"].createElement(_react["default"].Fragment, null, renderHead ? renderHead({
    loadData: loadData
  }) : null, data.map(function (item) {
    return renderItem(item);
  }), loading && showPagination || more && scrollLoad ? _react["default"].createElement("div", {
    className: "text-center pt-3 pb-3"
  }, _react["default"].createElement(_loading["default"], null)) : null, showPagination && filters ? _react["default"].createElement(_pagination["default"], {
    count: count || 0,
    pageSize: filters.page_size || 0,
    pageNumber: filters.page_number || 0,
    onSelect: function onSelect(s) {
      query.page_number = s;
      loadData(true);
    }
  }) : null, renderFooter ? renderFooter({
    loadData: loadData
  }) : null);
}

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loading": "_3H7UH"
};

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(_ref) {
  var _ref$count = _ref.count,
      count = _ref$count === void 0 ? 0 : _ref$count,
      _ref$pageSize = _ref.pageSize,
      pageSize = _ref$pageSize === void 0 ? 0 : _ref$pageSize,
      _ref$pageNumber = _ref.pageNumber,
      pageNumber = _ref$pageNumber === void 0 ? 0 : _ref$pageNumber,
      onSelect = _ref.onSelect;
  var pageNumberTotal = Math.ceil(count / pageSize);
  if (!count || pageNumberTotal == 1) return null;
  var previous = pageNumber > 1 ? pageNumber - 1 : 0;
  var Next = pageNumber + 1 <= pageNumberTotal ? pageNumber + 1 : 0;
  return _react["default"].createElement("nav", {
    "aria-label": "Page navigation",
    className: "mt-3"
  }, _react["default"].createElement("ul", {
    className: "pagination justify-content-center mb-3"
  }, _react["default"].createElement("li", {
    className: "page-item ".concat(previous ? '' : 'disabled')
  }, _react["default"].createElement("div", {
    className: "page-link",
    "aria-label": "Previous",
    onClick: function onClick() {
      onSelect(previous);
    }
  }, _react["default"].createElement("span", {
    "aria-hidden": "true"
  }, "\xAB"), _react["default"].createElement("span", {
    className: "sr-only"
  }, "Previous"))), function () {
    var arr = [];
    var min = pageNumber - 5 >= 1 ? pageNumber - 5 : 0,
        max = pageNumber + 4 >= pageNumberTotal ? pageNumberTotal : pageNumber + 4;

    var _loop = function _loop(i) {
      arr.push(_react["default"].createElement("li", {
        className: "page-item ".concat(pageNumber - 1 == i ? 'active' : ''),
        key: i
      }, _react["default"].createElement("div", {
        className: "page-link",
        onClick: function onClick() {
          onSelect(i + 1);
        }
      }, i + 1)));
    };

    for (var i = min; i < max; i++) {
      _loop(i);
    }

    return arr;
  }(), _react["default"].createElement("li", {
    className: "page-item ".concat(Next ? '' : 'disabled')
  }, _react["default"].createElement("div", {
    className: "page-link",
    "aria-label": "Next",
    onClick: function onClick() {
      onSelect(Next);
    }
  }, _react["default"].createElement("span", {
    "aria-hidden": "true"
  }, "\xBB"), _react["default"].createElement("span", {
    className: "sr-only"
  }, "Next")))));
}

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

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _session = __webpack_require__(136);

var _session2 = __webpack_require__(25);

var _listItem = _interopRequireDefault(__webpack_require__(250));

var _list = _interopRequireDefault(__webpack_require__(123));

__webpack_require__(252);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _default(props) {
  var id = props.id;
  var store = (0, _reactRedux.useStore)();
  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _session2.getSessionListById)(state, id);
  });
  return _react["default"].createElement(_list["default"], _extends({}, props, list, {
    load: function load(params) {
      return (0, _session.loadSessionList)(params)(store.dispatch, store.getState);
    },
    renderItem: function renderItem(item) {
      return _react["default"].createElement(_listItem["default"], {
        key: item._id,
        message: item
      });
    }
  }));
}

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

__webpack_require__(251);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// style
function _default(_ref) {
  var message = _ref.message;
  return _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/session/".concat(message._id),
    className: "_1C39h"
  }, _react["default"].createElement("div", {
    className: "d-flex bd-highlight"
  }, _react["default"].createElement("div", {
    className: "w-100 bd-highlight"
  }, _react["default"].createElement("div", {
    className: "_3tm1t"
  }, message.unread_count ? _react["default"].createElement("div", {
    className: "_2-yPl"
  }, message.unread_count) : null, _react["default"].createElement("div", {
    className: "ylheL"
  }, _react["default"].createElement("img", {
    src: message.user_id.avatar_url
  })), _react["default"].createElement("div", {
    className: "text-dark _2Bbzz"
  }, message.user_id.nickname))), _react["default"].createElement("div", {
    className: "flex-shrink-1 bd-highlight"
  }, _react["default"].createElement("div", {
    className: "OvEI6"
  }, message.last_message ? message.last_message._create_at : message._create_at))), message.last_message ? _react["default"].createElement("div", {
    className: "text-secondary ohhnS"
  }, message.last_message.content_summary) : null), _react["default"].createElement("div", {
    className: "border-bottom _9YMlf"
  }));
}

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "_1C39h",
	"main": "_3tm1t",
	"avatar": "ylheL",
	"unread": "_2-yPl",
	"nickname": "_2Bbzz",
	"content": "ohhnS",
	"create-at": "OvEI6",
	"line": "_9YMlf"
};

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"bottom-bar": "_1ZfHn",
	"bottom-bar-main": "_33oyP"
};

/***/ })

};;