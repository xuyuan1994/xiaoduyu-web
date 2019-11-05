exports.ids = [0];
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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var device = function () {
  var Device =
  /*#__PURE__*/
  function () {
    function Device() {
      _classCallCheck(this, Device);

      _defineProperty(this, "devices", void 0);

      _defineProperty(this, "show", void 0);

      this.devices = {
        1: 'unknow',
        2: 'windows',
        3: 'mac',
        4: 'ipad',
        5: 'iphone',
        6: 'android',
        7: 'ios-app',
        8: 'android-app'
      };
      this.show = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '通过 App iPhone 客户端',
        8: '通过 App Android 客户端'
      };
    }

    _createClass(Device, [{
      key: "getCurrentDeviceId",
      value: function getCurrentDeviceId() {
        // 如果是服务器，那么就不存在 window 和 document 全局变量，因此不继续执行
        if (typeof window == 'undefined' || typeof document == 'undefined') {
          return 1;
        }

        var dvicename = 'unknow';
        var p = navigator.platform;
        var sUserAgent = navigator.userAgent.toLowerCase();
        var system = {
          windows: p.indexOf("Win") == 0,
          mac: p.indexOf("Mac") == 0,
          ipad: sUserAgent.match(/ipad/i) == "ipad",
          iphone: sUserAgent.match(/iphone os/i) == "iphone os",
          android: sUserAgent.match(/android/i) == "android"
        };

        for (var i in system) {
          if (system[i]) {
            dvicename = i;
          }
        }

        for (var i in this.devices) {
          if (this.devices[i] == dvicename) {
            return parseInt(i);
          }
        }

        return 1;
      }
    }, {
      key: "getNameByDeviceId",
      value: function getNameByDeviceId(id) {
        return this.show[id];
      } // 是否是移动设备

    }, {
      key: "isMobileDevice",
      value: function isMobileDevice() {
        var id = this.getCurrentDeviceId();

        if (id == 5 || id == 6) {
          return true;
        }

        return false;
      }
    }]);

    return Device;
  }();

  return new Device();
}();

var _default = device;
exports["default"] = _default;

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

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPosts = addPosts;
exports.viewPostsById = viewPostsById;
exports.updatePosts = updatePosts;
exports.refreshPostsListById = exports.removePostsListById = exports.loadPostsList = void 0;

var _storage = _interopRequireDefault(__webpack_require__(23));

var _date = __webpack_require__(13);

var _device = _interopRequireDefault(__webpack_require__(125));

var _graphql = _interopRequireDefault(__webpack_require__(2));

var _to = _interopRequireDefault(__webpack_require__(15));

var _newGraphqlLoadList = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 加工问题列表
var processPostsList = function processPostsList(list, store, id) {
  list.map(function (posts) {
    if (posts.device) {
      posts._device = _device["default"].getNameByDeviceId(posts.device);
    }

    if (posts.content_html && posts.content_html == '<p><br></p>') {
      posts.content_html = '';
    }

    if (posts.content_html) {
      // posts.content_html = decodeURIComponent(posts.content_html);
      // 提取内容中所有的图片地址
      posts.images = abstractImages(posts.content_html);

      if (posts.images && posts.images.length > 0) {
        posts._coverImage = posts.images[0].split('?')[0] + '?imageView2/2/w/300/auto-orient/format/jpg';
      } // 将内容生产140的简介


      var textContent = posts.content_html; // console.log(textContent);
      // let imgReg = /<img(?:(?:".*?")|(?:'.*?')|(?:[^>]*?))*>/gi;

      var imgReg = /<img(.*?)>/gi;
      var imgs = [];
      var img;

      while (img = imgReg.exec(textContent)) {
        imgs.push(img[0]);
      }

      imgs.map(function (item) {
        textContent = textContent.replace(item, '[图片] ');
      }); // let preReg = /<pre>(.*?)<\/pre>/gi;
      // let pres = [];
      // let pre;
      // while (pre = preReg.exec(textContent)) {
      //   pres.push(pre[0]);
      // }
      // pres.map(item=>{
      //   textContent = textContent.replace(item, '[代码] ');
      // });
      // 删除所有html标签

      textContent = textContent.replace(/<[^>]+>/g, '');
      textContent = textContent.replace(/\r\n/g, '');
      textContent = textContent.replace(/\n/g, '');
      if (textContent.length > 137) textContent = textContent.slice(0, 137) + '...';
      posts.content_summary = textContent; // 获取内容中所有的图片

      posts.content_html = imageOptimization(posts.content_html);
    }

    if (posts.create_at) posts._create_at = (0, _date.dateDiff)(posts.create_at);
    if (posts.sort_by_date) posts._sort_by_date = (0, _date.dateDiff)(posts.sort_by_date);
    if (posts.last_comment_at) posts._last_comment_at = (0, _date.dateDiff)(posts.last_comment_at);
    if (posts.update_at) posts._update_at = (0, _date.dateDiff)(posts.update_at);
  });
  return list;
};

// 添加问题
function addPosts(_ref) {
  var title = _ref.title,
      detail = _ref.detail,
      detailHTML = _ref.detailHTML,
      topicId = _ref.topicId,
      device = _ref.device,
      type = _ref.type;
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
                    api: 'addPosts',
                    args: {
                      title: title,
                      content: detail,
                      content_html: detailHTML,
                      topic_id: topicId,
                      device_id: device,
                      type: type
                    },
                    fields: "\n        success\n        _id\n        "
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
}

var loadPostsList = (0, _newGraphqlLoadList["default"])({
  reducerName: 'posts',
  actionType: 'SET_POSTS_LIST_BY_ID',
  processList: processPostsList,
  api: 'posts',
  fields: "\n  _id\n  comment_count\n  reply_count\n  content_html\n  create_at\n  deleted\n  device\n  follow_count\n  last_comment_at\n  like_count\n  recommend\n  sort_by_date\n  title\n  ip\n  topic_id{\n    _id\n    name\n    parent_id {\n      _id\n      name\n    }\n  }\n  type\n  user_id{\n    _id\n    nickname\n    brief\n    avatar_url\n    posts_count\n    comment_count\n    fans_count\n    follow_people_count\n    follow\n  }\n  verify\n  view_count\n  weaken\n  follow\n  like\n  update_at\n  "
}); // comment{
//   user_id{
//     avatar_url
//   }
// }
// 移除list

exports.loadPostsList = loadPostsList;

var removePostsListById = function removePostsListById(id) {
  return function (dispatch, getState) {
    dispatch({
      type: 'REMOVE_POSTS_LIST_BY_ID',
      id: id
    });
  };
}; // 刷新帖子列表


exports.removePostsListById = removePostsListById;

var refreshPostsListById = function refreshPostsListById(id) {
  return function (dispatch, getState) {
    var list = getState().posts[id] || null;
    if (!list || !list.filters) return;
    delete list.filters.page_size;
    delete list.filters.page_number;
    return loadPostsList({
      id: id,
      args: list.filters,
      restart: true
    })(dispatch, getState).then(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          err = _ref6[0],
          res = _ref6[1];

      // 如果是刷新帖子列表，可能评论/回复数等发生了变化，需要将这部分数据与其他帖子数据同步一下
      if (res && res.data && res.data.length > 0) {
        var postList = {};
        res.data.map(function (item) {
          postList[item._id] = item;
        });
        var postsState = getState().posts;
        Reflect.ownKeys(postsState).map(function (item) {
          getState().posts[item].data.map(function (item) {
            if (postList[item._id]) {
              if (postList[item._id].comment_count) item.comment_count = postList[item._id].comment_count;
              if (postList[item._id].reply_count) item.reply_count = postList[item._id].reply_count;
              if (postList[item._id].follow_count) item.follow_count = postList[item._id].follow_count;
              if (postList[item._id].like_count) item.like_count = postList[item._id].like_count;
            }
          });
        });
        dispatch({
          type: 'SET_POSTS',
          state: postsState
        });
      }
    });
  };
};

exports.refreshPostsListById = refreshPostsListById;

function viewPostsById(_ref7) {
  var id = _ref7.id;
  return (
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(dispatch, getState) {
        var _ref9, _ref10, err, res, viewPosts, _ref11, _ref12, _err, _res;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _to["default"])(_storage["default"].load({
                  key: 'view-posts'
                }));

              case 2:
                _ref9 = _context2.sent;
                _ref10 = _slicedToArray(_ref9, 2);
                err = _ref10[0];
                res = _ref10[1];
                viewPosts = res || '';
                viewPosts = viewPosts.split(',');
                if (!viewPosts[0]) viewPosts = [];

                if (!(viewPosts.indexOf(id) == -1)) {
                  _context2.next = 19;
                  break;
                }

                viewPosts.push(id);

                _storage["default"].save({
                  key: 'view-posts',
                  data: viewPosts.join(','),
                  expires: 1000 * 3600
                });

                _context2.next = 14;
                return (0, _graphql["default"])({
                  type: 'mutation',
                  apis: [{
                    api: 'viewPosts',
                    args: {
                      posts_id: id
                    },
                    fields: "success"
                  }]
                });

              case 14:
                _ref11 = _context2.sent;
                _ref12 = _slicedToArray(_ref11, 2);
                _err = _ref12[0];
                _res = _ref12[1];

                if (_res && _res.success) {
                  dispatch({
                    type: 'UPDATE_POSTS_VIEW',
                    id: id
                  });
                }

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref8.apply(this, arguments);
      };
    }()
  );
}

function updatePosts(_ref13) {
  var id = _ref13.id,
      title = _ref13.title,
      detail = _ref13.detail,
      detailHTML = _ref13.detailHTML,
      topicId = _ref13.topicId,
      topicName = _ref13.topicName;
  return (
    /*#__PURE__*/
    function () {
      var _ref14 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(dispatch, getState) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise(
                /*#__PURE__*/
                function () {
                  var _ref15 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee3(resolve, reject) {
                    var args, _ref16, _ref17, err, res;

                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            args = {
                              _id: id,
                              title: title,
                              content: detail,
                              content_html: detailHTML,
                              topic_id: topicId
                            };
                            _context3.next = 3;
                            return (0, _graphql["default"])({
                              type: 'mutation',
                              apis: [{
                                api: 'updatePosts',
                                args: JSON.parse(JSON.stringify(args)),
                                fields: "success"
                              }],
                              headers: {
                                accessToken: getState().user.accessToken
                              }
                            });

                          case 3:
                            _ref16 = _context3.sent;
                            _ref17 = _slicedToArray(_ref16, 2);
                            err = _ref17[0];
                            res = _ref17[1];

                            if (!err) {
                              _context3.next = 9;
                              break;
                            }

                            return _context3.abrupt("return", reject(err));

                          case 9:
                            loadPostsList({
                              id: id,
                              args: {
                                _id: id
                              },
                              restart: true
                            })(dispatch, getState).then(function (_ref18) {
                              var _ref19 = _slicedToArray(_ref18, 2),
                                  err = _ref19[0],
                                  res = _ref19[1];

                              var posts = res && res.data && res.data[0] ? res.data[0] : null;

                              if (!posts) {
                                resolve(res);
                              } else {
                                dispatch({
                                  type: 'UPDATE_POST',
                                  id: id,
                                  update: posts
                                });
                              }

                              resolve(res);
                            }); // args.topic_id = {
                            //   _id: topicId,
                            //   name: topicName
                            // }

                            /*
                            if (args.content_html) {
                              args.content_html = decodeURIComponent(args.content_html);
                            }
                             dispatch({ type: 'UPDATE_POST', id: id, update: args });
                            let postsList = getState().posts;
                             for (let i in postsList) {
                              if (postsList[i].data) {
                                postsList[i].data = processPostsList(postsList[i].data)
                              }
                            }
                              dispatch({ type: 'UPDATE_POST', state: postsList })
                            */

                          case 10:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x6, _x7) {
                    return _ref15.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4, _x5) {
        return _ref14.apply(this, arguments);
      };
    }()
  );
}

var abstractImages = function abstractImages(str) {
  var imgReg = /<img(?:(?:".*?")|(?:'.*?')|(?:[^>]*?))*>/gi;
  var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
  var result = [];
  var img;

  while (img = imgReg.exec(str)) {
    var _img = img[0].match(srcReg);

    if (_img && _img[1]) {
      _img = _img[1];

      if (_img[1].indexOf('xiaoduyu.com') != -1) {
        _img = _img[1] + '?imageView2/2/w/800/auto-orient/format/jpg';
      }

      result.push(_img);
    }
  }

  return result;
}; // 图像优化，给html中的img图片，增加一些七牛参数，优化最大宽度，格式等


var imageOptimization = function imageOptimization(str) {
  var imgReg = /<img(?:(?:".*?")|(?:'.*?')|(?:[^>]*?))*>/gi;
  var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
  var result = [];
  var img;

  while (img = imgReg.exec(str)) {
    var oldImgDom = img[0];

    if (oldImgDom) {
      var _img = oldImgDom.match(srcReg);

      if (_img && _img[1] && _img[1].indexOf('xiaoduyu.com') != -1) {
        var newImg = oldImgDom.replace(_img[1], _img[1] + '?imageView2/2/w/800/auto-orient/format/jpg');
        str = str.replace(oldImgDom, newImg);
      }
    }
  }

  return str;
};

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _posts = __webpack_require__(129);

var _posts2 = __webpack_require__(24);

var _itemRich = _interopRequireDefault(__webpack_require__(168));

var _itemPoor = _interopRequireDefault(__webpack_require__(203));

var _list = _interopRequireDefault(__webpack_require__(123));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _default(props) {
  var id = props.id,
      itemType = props.itemType;
  var store = (0, _reactRedux.useStore)();
  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _posts2.getPostsListById)(state, id);
  });
  return _react["default"].createElement(_list["default"], _extends({}, props, list, {
    load: function load(params) {
      return (0, _posts.loadPostsList)(params)(store.dispatch, store.getState);
    },
    renderItem: function renderItem(item) {
      if (itemType == 'poor') {
        return _react["default"].createElement(_itemPoor["default"], {
          key: item._id,
          posts: item
        });
      }

      return _react["default"].createElement(_itemRich["default"], {
        key: item._id,
        posts: item
      });
    }
  }));
}

/***/ }),

/***/ 168:
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

var _reactRedux = __webpack_require__(7);

var _hasReadPosts = __webpack_require__(35);

__webpack_require__(202);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// styles
var _styleModuleImportMap = {
  "./styles/index.scss": {
    "box": "_2hxUU",
    "nickname": "_2eBCL",
    "avatar": "KTV99",
    "title": "_1gd48",
    "active": "sh9wT",
    "posts-info": "H_D6Y",
    "has-read": "_1KIY2",
    "badge-secondary": "_2zsKE"
  }
};

function _default(_ref) {
  var posts = _ref.posts;

  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      history = _useReactRouter.history,
      location = _useReactRouter.location,
      match = _useReactRouter.match;

  var total = posts.comment_count;
  var hasRead = (0, _reactRedux.useSelector)(function (state) {
    return (0, _hasReadPosts.getHasReadByPostsId)(state, {
      postsId: posts._id,
      total: total // lastCommentAt: posts.last_comment_at

    });
  });

  var toPostsDetail = function toPostsDetail() {
    return history.push("/posts/".concat(posts._id));
  };

  return _react["default"].createElement("div", {
    onClick: toPostsDetail,
    className: "border-bottom hand " + (0, _getClassName2["default"])(hasRead == 0 ? 'has-read' : null, _styleModuleImportMap)
  }, _react["default"].createElement("div", {
    className: "_2hxUU",
    style: !posts.user_id ? {
      paddingLeft: '20px'
    } : null
  }, posts.user_id ? _react["default"].createElement("div", {
    className: "d-flex justify-content-between"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    className: "text-dark _2eBCL",
    to: "/people/".concat(posts.user_id._id),
    onClick: stopPropagation
  }, _react["default"].createElement("i", {
    className: "load-demand KTV99",
    "data-load-demand": encodeURIComponent("<img src=\"".concat(posts.user_id.avatar_url, "\" />"))
  }), _react["default"].createElement("span", null, posts.user_id.nickname))) : null, _react["default"].createElement("div", {
    className: "d-flex justify-content-between"
  }, _react["default"].createElement("div", {
    className: "_1gd48"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/posts/".concat(posts._id),
    className: "text-dark",
    onClick: stopPropagation
  }, posts.title)), posts.comment_count ? _react["default"].createElement("div", {
    className: "sh9wT"
  }, hasRead > 0 ? _react["default"].createElement("span", {
    className: "badge badge-pill badge-primary"
  }, "+", hasRead) : _react["default"].createElement("span", {
    className: "badge badge-pill badge-secondary"
  }, posts.comment_count ? posts.comment_count : null, posts.reply_count ? '/' + posts.reply_count : null)) // <div styleName="active">
  //   <span className="text-secondary">
  //     {posts.comment_count ? posts.comment_count : null}
  //     {posts.reply_count ? '/'+posts.reply_count: null}
  //   </span>
  // </div>
  : null), _react["default"].createElement("div", {
    className: "H_D6Y"
  }, posts.topic_id.parent_id ? _react["default"].createElement("small", null, _react["default"].createElement(_reactRouterDom.Link, {
    className: "text-muted",
    to: "/topic/".concat(posts.topic_id.parent_id._id),
    onClick: stopPropagation
  }, posts.topic_id.parent_id.name)) : null, _react["default"].createElement("small", null, _react["default"].createElement(_reactRouterDom.Link, {
    className: "text-muted",
    to: "/topic/".concat(posts.topic_id._id),
    onClick: stopPropagation
  }, posts.topic_id.name)), _react["default"].createElement("small", {
    className: "text-muted"
  }, posts._create_at), posts.view_count ? _react["default"].createElement("small", {
    className: "text-muted"
  }, posts.view_count, "\u6B21\u9605\u8BFB") : null, posts.like_count ? _react["default"].createElement("small", {
    className: "text-muted"
  }, posts.like_count, "\u4EBA\u70B9\u8D5E") : null, posts.follow_count ? _react["default"].createElement("small", {
    className: "text-muted"
  }, posts.follow_count, "\u4EBA\u6536\u85CF") : null)));
}

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"box": "_2hxUU",
	"nickname": "_2eBCL",
	"avatar": "KTV99",
	"title": "_1gd48",
	"active": "sh9wT",
	"posts-info": "H_D6Y",
	"has-read": "_1KIY2",
	"heat": "_14z-j"
};

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

__webpack_require__(204);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var posts = _ref.posts;
  return _react["default"].createElement("div", {
    className: "list-group-item _394qz"
  }, _react["default"].createElement("span", {
    className: "load-demand",
    "data-load-demand": "<img src=\"".concat(posts.user_id.avatar_url, "\" alt=\"").concat(posts.user_id.nickname, "\" />")
  }), _react["default"].createElement(_reactRouterDom.Link, {
    to: "/posts/".concat(posts._id),
    className: "text-dark"
  }, posts.title));
};

exports["default"] = _default;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"a": "_394qz"
};

/***/ })

};;