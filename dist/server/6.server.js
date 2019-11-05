exports.ids = [6];
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

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// 是否是微信浏览器
var Weixin = {};

Weixin["in"] = function () {
  // 如果是服务器，那么就不存在 window 和 document 全局变量，因此不继续执行
  if (typeof window == 'undefined' || typeof document == 'undefined') {
    return false;
  }

  var ua = navigator.userAgent.toLowerCase();

  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}();

var _default = Weixin;
exports["default"] = _default;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _storage = _interopRequireDefault(__webpack_require__(23));

var _reactRedux = __webpack_require__(7);

var _comment = __webpack_require__(138);

var _device = _interopRequireDefault(__webpack_require__(125));

var _editor = _interopRequireDefault(__webpack_require__(148));

__webpack_require__(159);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(_ref) {
  var _ref$_id = _ref._id,
      _id = _ref$_id === void 0 ? '' : _ref$_id,
      _ref$posts_id = _ref.posts_id,
      posts_id = _ref$posts_id === void 0 ? '' : _ref$posts_id,
      _ref$parent_id = _ref.parent_id,
      parent_id = _ref$parent_id === void 0 ? '' : _ref$parent_id,
      _ref$reply_id = _ref.reply_id,
      reply_id = _ref$reply_id === void 0 ? '' : _ref$reply_id,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '写评论...' : _ref$placeholder,
      _ref$successCallback = _ref.successCallback,
      successCallback = _ref$successCallback === void 0 ? function () {} : _ref$successCallback,
      _ref$getEditor = _ref.getEditor,
      _getEditor = _ref$getEditor === void 0 ? function (editor) {} : _ref$getEditor,
      _ref$forward = _ref.forward,
      forward = _ref$forward === void 0 ? false : _ref$forward;

  var forwardRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      contentJSON = _useState2[0],
      setContentJSON = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      contentHTML = _useState4[0],
      setContentHTML = _useState4[1];

  var _useState5 = (0, _react.useState)(_react["default"].createElement("div", null)),
      _useState6 = _slicedToArray(_useState5, 2),
      content = _useState6[0],
      setContent = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      editor = _useState8[0],
      setEditor = _useState8[1]; // const [ showFooter, setShowFooter ] = useState(false);


  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      submitting = _useState10[0],
      setSubmitting = _useState10[1];

  var store = (0, _reactRedux.useStore)();

  var _addComment = function _addComment(args) {
    return (0, _comment.addComment)(args)(store.dispatch, store.getState);
  };

  var _updateComment = function _updateComment(args) {
    return (0, _comment.updateComment)(args)(store.dispatch, store.getState);
  };

  var _loadCommentList = function _loadCommentList(args) {
    return (0, _comment.loadCommentList)(args)(store.dispatch, store.getState);
  };

  var submit =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var html, str, err, res, _ref3, _ref4, _ref5, _ref6;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!submitting) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (contentJSON) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", editor.focus());

            case 4:
              html = decodeURIComponent(contentHTML); // 判断是否为空

              str = html.replace(/\s/ig, '');
              html = html.replace(/<[^>]+>/g, '');
              html = html.replace(/\r\n/g, '');
              html = html.replace(/\n/g, '');
              str = html.replace(/\&nbsp\;/ig, '');

              if (str) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return", editor.focus());

            case 12:
              if (!(html.indexOf('<img src="">') != -1)) {
                _context.next = 15;
                break;
              }

              Toastify({
                text: '有图片上传中，请等待上传完成后再提交',
                duration: 3000,
                backgroundColor: 'linear-gradient(to right, #0988fe, #1c75fb)'
              }).showToast();
              return _context.abrupt("return");

            case 15:
              setSubmitting(true);

              if (!_id) {
                _context.next = 25;
                break;
              }

              _context.next = 19;
              return _updateComment({
                _id: _id,
                content: contentJSON,
                content_html: contentHTML
              });

            case 19:
              _ref3 = _context.sent;
              _ref4 = _slicedToArray(_ref3, 2);
              err = _ref4[0];
              res = _ref4[1];
              _context.next = 31;
              break;

            case 25:
              _context.next = 27;
              return _addComment({
                posts_id: posts_id,
                parent_id: parent_id,
                reply_id: reply_id,
                contentJSON: contentJSON,
                contentHTML: contentHTML,
                deviceId: _device["default"].getCurrentDeviceId(),
                forward: forwardRef && forwardRef.current ? forwardRef.current.checked : false
              });

            case 27:
              _ref5 = _context.sent;
              _ref6 = _slicedToArray(_ref5, 2);
              err = _ref6[0];
              res = _ref6[1];

            case 31:
              setSubmitting(false);

              if (!err) {
                setContent(_react["default"].createElement("div", {
                  key: new Date().getTime()
                }, _react["default"].createElement(_editor["default"], {
                  syncContent: syncContent,
                  content: '',
                  getEditor: function getEditor(editor) {
                    setEditor(editor);

                    _getEditor(editor);
                  },
                  displayControls: parent_id ? false : true
                })));
                syncContent('', '');
                successCallback();
              } else if (err) {
                Toastify({
                  text: err.message,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              }

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit() {
      return _ref2.apply(this, arguments);
    };
  }();

  var syncContent =
  /*#__PURE__*/
  function () {
    var _ref7 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(contentJSON, contentHTML) {
      var commentsDraft;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setContentJSON(contentJSON);
              setContentHTML(contentHTML);
              _context2.next = 4;
              return _storage["default"].load({
                key: 'comments-draft'
              });

            case 4:
              _context2.t0 = _context2.sent;

              if (_context2.t0) {
                _context2.next = 7;
                break;
              }

              _context2.t0 = {};

            case 7:
              commentsDraft = _context2.t0;
              // 只保留最新的10条草稿
              // let index = []
              // for (let i in commentsDraft) index.push(i)
              // if (index.length > 10) delete commentsDraft[index[0]]
              commentsDraft[reply_id || posts_id] = contentJSON;

              _storage["default"].save({
                key: 'comments-draft',
                data: commentsDraft
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function syncContent(_x, _x2) {
      return _ref7.apply(this, arguments);
    };
  }();

  var run =
  /*#__PURE__*/
  function () {
    var _ref8 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var editComment, _ref9, _ref10, err, res, commentsDraft, params;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              editComment = ''; // 编辑评论

              if (!_id) {
                _context3.next = 9;
                break;
              }

              _context3.next = 4;
              return _loadCommentList({
                name: 'edit_' + _id,
                args: {
                  _id: _id
                },
                fields: "\n          content\n          _id\n        ",
                restart: true
              });

            case 4:
              _ref9 = _context3.sent;
              _ref10 = _slicedToArray(_ref9, 2);
              err = _ref10[0];
              res = _ref10[1];

              if (res && res.data && res.data[0]) {
                editComment = res.data[0].content;
              }

            case 9:
              // 从缓存中获取，评论草稿
              commentsDraft = {};
              _context3.prev = 10;
              _context3.next = 13;
              return _storage["default"].load({
                key: 'comments-draft'
              });

            case 13:
              _context3.t0 = _context3.sent;

              if (_context3.t0) {
                _context3.next = 16;
                break;
              }

              _context3.t0 = {};

            case 16:
              commentsDraft = _context3.t0;
              _context3.next = 23;
              break;

            case 19:
              _context3.prev = 19;
              _context3.t1 = _context3["catch"](10);
              commentsDraft = {};
              console.log(_context3.t1);

            case 23:
              params = {
                content: editComment || commentsDraft[reply_id || posts_id] || '',
                syncContent: syncContent,
                getEditor: function getEditor(editor) {
                  setEditor(editor);

                  _getEditor(editor);
                },
                displayControls: true,
                placeholder: placeholder // getCheckUpload: (checkUpload) =>{
                //   self.checkUpload = checkUpload;
                // }

              };
              setContent(_react["default"].createElement(_editor["default"], params));

            case 25:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[10, 19]]);
    }));

    return function run() {
      return _ref8.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    run();
    if (forward) $('[data-toggle="tooltip"]').tooltip();
  }, []);
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "_2RtMV"
  }, content), _react["default"].createElement("div", {
    className: "d-flex justify-content-between align-items-center _1VRJu"
  }, _react["default"].createElement("div", null, forward ? _react["default"].createElement("label", {
    className: "m-0"
  }, _react["default"].createElement("input", {
    type: "checkbox",
    ref: forwardRef
  }), _react["default"].createElement("span", {
    className: "ml-1",
    "data-toggle": "tooltip",
    "data-placement": "top",
    title: "\u540C\u65F6\u8F6C\u53D1\u7ED9\u6211\u7684\u7C89\u4E1D"
  }, "\u8F6C\u53D1")) : null), _react["default"].createElement("div", null, _react["default"].createElement("button", {
    onClick: submit,
    type: "button",
    className: "btn btn-block btn-primary rounded-pill btn-sm pl-3 pr-3"
  }, submitting ? '提交中...' : '提交'))));
}

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

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _qrcode = _interopRequireDefault(__webpack_require__(91));

var _config = __webpack_require__(1);

var _weixin = _interopRequireDefault(__webpack_require__(144));

__webpack_require__(164);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(_ref) {
  var posts = _ref.posts,
      comment = _ref.comment,
      live = _ref.live,
      styleType = _ref.styleType;

  // const { location, match } = useReactRouter();
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      displayTips = _useState2[0],
      setDisplayTips = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showQrcode = _useState4[0],
      setShowQrcode = _useState4[1];

  var title = '',
      summary = '',
      pics = '',
      url = '';

  if (posts) {
    title = posts.title;
    summary = posts.content_summary;
    pics = posts._coverImage || '';
    url = _config.domainName + '/posts/' + posts._id;
  } else if (comment) {
    title = comment.posts_id.title;
    summary = comment.content_summary;
    pics = comment._coverImage || '';
    url = _config.domainName + '/comment/' + comment._id;
  } else if (live) {
    title = live.user_id.nickname + '的直播间';
    summary = live.title;
    pics = live.cover_image || '';
    url = _config.domainName + '/live/' + live._id;
  }

  var copyLink = function copyLink() {
    url = url + '?from_share=link';
    var element = $("<textarea>" + url + "</textarea>");
    $("body").append(element);
    element[0].select();
    document.execCommand("Copy");
    element.remove();
    Toastify({
      text: '复制成功',
      duration: 3000,
      backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
    }).showToast();
  };

  var shareToWeibo = function shareToWeibo() {
    url = url + '?from_share=weibo';
    window.open("http://service.weibo.com/share/share.php?url=".concat(encodeURIComponent(url), "&title=").concat(encodeURIComponent(title)), '_blank', 'width=550,height=370');
  }; // const shareToTwitter = function(e) {
  //   window.open(`https://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank', 'width=550,height=370');
  // }


  var shareToQzone = function shareToQzone() {
    url = url + '?from_share=qzone';
    window.open("https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=".concat(encodeURIComponent(url), "&title=").concat(encodeURIComponent(title), "&desc=").concat(encodeURIComponent('来自' + _config.name + ' ' + _config.domainName), "&summary=").concat(encodeURIComponent(summary), "&site=").concat(encodeURIComponent(_config.name)), '_blank', 'width=590,height=370');
  };

  var shareToQQ = function shareToQQ() {
    url = url + '?from_share=qq';
    window.open("https://connect.qq.com/widget/shareqq/index.html?url=".concat(encodeURIComponent(url), "&title=").concat(title, "&desc=&summary=").concat(encodeURIComponent(summary), "&site=").concat(encodeURIComponent(_config.name)), '_blank', 'width=770,height=620');
  };

  var shareToFacebook = function shareToFacebook() {
    url = url + '?from_share=facebook';
    window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(url), "&t=").concat(title), '_blank', 'width=770,height=620');
  };

  var shareToTwitter = function shareToTwitter() {
    url = url + '?from_share=twitter';
    window.open("https://twitter.com/intent/tweet?text=".concat(title, "&url=").concat(encodeURIComponent(url)), '_blank', 'width=770,height=620');
  };

  var shareToWeiXin = function shareToWeiXin() {
    if (_weixin["default"]["in"]) {
      setDisplayTips(true);
    } else {
      setShowQrcode(true);
    }
  };

  var handleShowQRcode = function handleShowQRcode(bl) {
    setShowQrcode(bl);
  };

  var handleShowTips = function handleShowTips(bl) {
    setDisplayTips(bl);
  };
  /*
  useEffect(()=>{
     const { path } = match;
    const { _s }: any = location && location.params ? location.params : {};
     if (path == '/posts/:id' && _s == 'weixin') {
      setDisplayTips(true);
    }
   }, [])
  */


  if (styleType == 'icons') {
    return _react["default"].createElement("div", null, _react["default"].createElement("div", {
      className: "_3bezE"
    }, _react["default"].createElement("span", {
      className: "a _1Hb5x",
      onClick: shareToWeiXin
    }), _react["default"].createElement("span", {
      className: "a _33lE4",
      onClick: shareToWeibo
    }), _react["default"].createElement("span", {
      className: "a _384yp",
      onClick: shareToQzone
    }), _react["default"].createElement("span", {
      className: "a _2Tml9",
      onClick: shareToQQ
    }), _react["default"].createElement("span", {
      className: "a _1zLkZ",
      onClick: shareToTwitter
    }), _react["default"].createElement("span", {
      className: "a _3mZlN",
      onClick: shareToFacebook
    })), _react["default"].createElement("div", null, showQrcode ? _react["default"].createElement("div", {
      className: "DsKCT",
      onClick: function onClick() {
        handleShowQRcode(false);
      }
    }) : null, showQrcode ? _react["default"].createElement("div", {
      className: "_2LUT8"
    }, _react["default"].createElement(_qrcode["default"], {
      value: "".concat(url, "?_s=weixin")
    }), _react["default"].createElement("div", null, "\u5FAE\u4FE1\u626B\u4E00\u626B\uFF0C\u5206\u4EAB")) : null, _react["default"].createElement("div", {
      className: "_3hzq5",
      style: {
        display: displayTips ? 'block' : 'none'
      },
      onClick: function onClick() {
        handleShowTips(false);
      }
    }, _react["default"].createElement("div", null, "\u70B9\u51FB\u53F3\u4E0A\u89D2 ... \u6309\u94AE\uFF0C", _react["default"].createElement("br", null), "\u5C06\u6B64\u9875\u9762\u5206\u4EAB\u7ED9\u4F60\u7684\u670B\u53CB\u6216\u670B\u53CB\u5708"))));
  } //  onClick={this.stopPropagation}


  return _react["default"].createElement("div", {
    className: "_1jwjw"
  }, _react["default"].createElement("span", {
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    className: "a text-secondary"
  }, "\u5206\u4EAB"), _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "share-dropdown"
  }, _react["default"].createElement("span", {
    className: "a dropdown-item _1z7AA",
    onClick: copyLink
  }, "\u590D\u5236\u8FDE\u63A5"), _react["default"].createElement("span", {
    className: "a dropdown-item _1Hb5x",
    onClick: shareToWeiXin
  }, "\u5FAE\u4FE1"), _react["default"].createElement("span", {
    className: "a dropdown-item _33lE4",
    onClick: shareToWeibo
  }, "\u5FAE\u535A"), _react["default"].createElement("span", {
    className: "a dropdown-item _384yp",
    onClick: shareToQzone
  }, "QQ\u7A7A\u95F4"), _react["default"].createElement("span", {
    className: "a dropdown-item _2Tml9",
    onClick: shareToQQ
  }, "QQ\u597D\u53CB\u548C\u7FA4\u7EC4"), _react["default"].createElement("span", {
    className: "a dropdown-item _1zLkZ",
    onClick: shareToTwitter
  }, "Twitter"), _react["default"].createElement("span", {
    className: "a dropdown-item _3mZlN",
    onClick: shareToFacebook
  }, "Facebook")), showQrcode ? _react["default"].createElement("div", {
    className: "DsKCT",
    onClick: function onClick() {
      handleShowQRcode(false);
    }
  }) : null, showQrcode ? _react["default"].createElement("div", {
    className: "_2LUT8"
  }, _react["default"].createElement(_qrcode["default"], {
    value: "".concat(url, "?_s=weixin")
  }), _react["default"].createElement("div", null, "\u5FAE\u4FE1\u626B\u4E00\u626B\uFF0C\u5206\u4EAB")) : null, _react["default"].createElement("div", {
    className: "_3hzq5",
    style: {
      display: displayTips ? 'block' : 'none'
    },
    onClick: function onClick() {
      handleShowTips(false);
    }
  }, _react["default"].createElement("div", null, "\u70B9\u51FB\u53F3\u4E0A\u89D2 ... \u6309\u94AE\uFF0C", _react["default"].createElement("br", null), "\u5C06\u6B64\u9875\u9762\u5206\u4EAB\u7ED9\u4F60\u7684\u670B\u53CB\u6216\u670B\u53CB\u5708"))));
}

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "_2RtMV",
	"footer": "_1VRJu"
};

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "_1jwjw",
	"button": "_2azHo",
	"share": "y5Qcu",
	"mark": "DsKCT",
	"qrcode": "_2LUT8",
	"tips-weixin-share": "_3hzq5",
	"icon-box": "_3bezE",
	"icon": "_2wa78",
	"link": "_1z7AA",
	"weibo": "_33lE4",
	"qzone": "_384yp",
	"wechat": "_1Hb5x",
	"facebook": "_3mZlN",
	"twitter": "_1zLkZ",
	"qq": "_2Tml9"
};

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addHasRead = exports.initHasRead = void 0;

var _storage = _interopRequireDefault(__webpack_require__(23));

var _to = _interopRequireDefault(__webpack_require__(15));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 初始化已读数据
var initHasRead = function initHasRead() {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var err, posts, comments, _ref2, _ref3, _ref3$, _ref4, _ref5, _ref5$;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _to["default"])(_storage["default"].load({
                  key: 'has-read-posts'
                }));

              case 2:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                err = _ref3[0];
                _ref3$ = _ref3[1];
                posts = _ref3$ === void 0 ? '{}' : _ref3$;
                _context.next = 9;
                return (0, _to["default"])(_storage["default"].load({
                  key: 'has-read-comments'
                }));

              case 9:
                _ref4 = _context.sent;
                _ref5 = _slicedToArray(_ref4, 2);
                err = _ref5[0];
                _ref5$ = _ref5[1];
                comments = _ref5$ === void 0 ? '{}' : _ref5$;
                posts = JSON.parse(posts);
                comments = JSON.parse(comments);
                dispatch({
                  type: 'INIT_HAS_READ_POSTS_STATE',
                  state: {
                    posts: posts,
                    comments: comments
                  }
                });

              case 17:
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
};
/**
 * 添加已读
 */


exports.initHasRead = initHasRead;

var addHasRead = function addHasRead(_ref6) {
  var postsId = _ref6.postsId,
      commentId = _ref6.commentId,
      total = _ref6.total;
  return function (dispatch, getState) {
    if (postsId) {
      dispatch({
        type: 'ADD_POSTS_HAS_READ',
        postsId: postsId,
        total: total
      });

      _storage["default"].save({
        key: 'has-read-posts',
        data: JSON.stringify(getState().hasReadPosts.posts),
        expires: 1000 * 60 * 60 * 24 * 30
      });
    } else {
      dispatch({
        type: 'ADD_COMMENT_HAS_READ',
        commentId: commentId,
        total: total
      });

      _storage["default"].save({
        key: 'has-read-comments',
        data: JSON.stringify(getState().hasReadPosts.comments),
        expires: 1000 * 60 * 60 * 24 * 30
      });
    }
  };
};

exports.addHasRead = addHasRead;

/***/ }),

/***/ 172:
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
  if (!_config.googleAdSense || !_config.googleAdSense.client || !_config.googleAdSense.slot || !_config.googleAdSense.slot.h5) return null;
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
  return _react["default"].createElement(_adsbygoogle["default"], props);
}

/***/ })

};;