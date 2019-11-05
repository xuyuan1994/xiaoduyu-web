exports.ids = [9];
exports.modules = {

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _shell = _interopRequireDefault(__webpack_require__(117));

var _meta = _interopRequireDefault(__webpack_require__(118));

var _avatar = _interopRequireDefault(__webpack_require__(274));

var _brief = _interopRequireDefault(__webpack_require__(277));

var _email = _interopRequireDefault(__webpack_require__(278));

var _gender = _interopRequireDefault(__webpack_require__(280));

var _nickname = _interopRequireDefault(__webpack_require__(281));

var _oauth = _interopRequireDefault(__webpack_require__(282));

var _password = _interopRequireDefault(__webpack_require__(284));

var _phone = _interopRequireDefault(__webpack_require__(285));

var _block = _interopRequireDefault(__webpack_require__(286));

var _theme = _interopRequireDefault(__webpack_require__(287));

var _userCover = _interopRequireDefault(__webpack_require__(293));

var _singleColumns = _interopRequireDefault(__webpack_require__(120));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// components
// modules
// import ServiceWorker from '@app/modules/settings/service-worker';
// layout
var _default = (0, _shell["default"])(function () {
  return _react["default"].createElement(_singleColumns["default"], null, _react["default"].createElement(_meta["default"], {
    title: "\u8BBE\u7F6E"
  }), _react["default"].createElement(_avatar["default"], null), _react["default"].createElement(_nickname["default"], null), _react["default"].createElement(_brief["default"], null), _react["default"].createElement(_gender["default"], null), _react["default"].createElement(_password["default"], null), _react["default"].createElement(_phone["default"], null), _react["default"].createElement(_email["default"], null), _react["default"].createElement(_oauth["default"], null), _react["default"].createElement(_block["default"], null), _react["default"].createElement(_theme["default"], null), _react["default"].createElement(_userCover["default"], null));
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

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _captcha = __webpack_require__(141);

__webpack_require__(143);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(_ref) {
  var onClick = _ref.onClick;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      countdown = _useState2[0],
      setCountdown = _useState2[1];

  var store = (0, _reactRedux.useStore)();

  var _addCaptcha = function _addCaptcha(args) {
    return (0, _captcha.addCaptcha)(args)(store.dispatch, store.getState);
  };

  var loading = false;

  var handCountdown = function handCountdown() {
    var count = 61; // 发送成功后倒计时

    var run = function run() {
      if (count == 0) return null;
      count--;
      setCountdown(count);
      setTimeout(function () {
        run();
      }, 1000);
    };

    run();
  };

  var add = function add(data) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    if (loading || countdown > 0) return null;
    loading = true;

    _addCaptcha(data).then(
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              callback(true);
              loading = false;
              handCountdown();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })))["catch"](
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(err) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                callback(false);

                if (Toastify) {
                  Toastify({
                    text: err.message,
                    duration: 3000,
                    backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                  }).showToast();
                  loading = false;
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());
  };

  var handle = function handle() {
    onClick(function (data, callback) {
      add(data, callback);
    });
  };

  return _react["default"].createElement("span", {
    className: "a text-primary _27EiP",
    onClick: handle
  }, countdown > 0 ? "\u53D1\u9001\u6210\u529F (".concat(countdown, ")") : "获取验证码");
}

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCaptcha = exports.addCaptcha = void 0;

var _graphql = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * [添加] 验证码
 * @param  {String} id
 * @param  {Object} [args={}]  参数
 * @param  {String} [fields=``] 返回字段
 * @return {Object} promise
 */
var addCaptcha = function addCaptcha(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? new Date().getTime() : _ref$id,
      args = _ref.args,
      _ref$fields = _ref.fields,
      fields = _ref$fields === void 0 ? "success" : _ref$fields;
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve, reject) {
        var accessToken, _ref3, _ref4, err, res;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                accessToken = getState().user.accessToken || '';
                _context.next = 3;
                return (0, _graphql["default"])({
                  type: 'mutation',
                  apis: [{
                    api: 'addCaptcha',
                    args: args,
                    fields: fields
                  }],
                  headers: accessToken ? {
                    'accessToken': accessToken
                  } : {}
                });

              case 3:
                _ref3 = _context.sent;
                _ref4 = _slicedToArray(_ref3, 2);
                err = _ref4[0];
                res = _ref4[1];

                if (res) {
                  if (res._id && res.url) {
                    dispatch({
                      type: 'ADD_CAPTCHA_ID',
                      id: id,
                      data: res
                    });
                  }

                  resolve(res);
                } else {
                  reject(err);
                }

              case 8:
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
/**
 * 通过 captcha id 获取验证码
 * @param {string} id captcha id
 */


exports.addCaptcha = addCaptcha;

var getCaptcha = function getCaptcha(args) {
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(resolve, reject) {
        var _ref6, _ref7, err, res;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _graphql["default"])({
                  apis: [{
                    api: 'getCaptcha',
                    args: args,
                    fields: "captcha"
                  }]
                });

              case 2:
                _ref6 = _context2.sent;
                _ref7 = _slicedToArray(_ref6, 2);
                err = _ref7[0];
                res = _ref7[1];

                if (err) {
                  reject(err);
                } else {
                  resolve(res);
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3, _x4) {
        return _ref5.apply(this, arguments);
      };
    }());
  };
};

exports.getCaptcha = getCaptcha;

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"captcha-button": "_27EiP"
};

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _countries = __webpack_require__(154);

var _countries2 = __webpack_require__(33);

__webpack_require__(155);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(_ref) {
  var _onChange = _ref.onChange;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var countries = (0, _reactRedux.useSelector)(function (state) {
    return (0, _countries2.getCountries)(state);
  });
  var store = (0, _reactRedux.useStore)();

  var _loadCountries = function _loadCountries(args) {
    return (0, _countries.loadCountries)(args)(store.dispatch, store.getState);
  };

  (0, _react.useEffect)(function () {
    if (!value) {
      setValue('+86');

      _onChange('+86');
    }

    if (countries.length == 0) _loadCountries();
  });
  return _react["default"].createElement("select", {
    className: "ANdeR",
    defaultValue: value,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }, countries.map(function (item) {
    return _react["default"].createElement("option", {
      key: item.abbr,
      value: item.code
    }, item.name, " ", item.code);
  }));
}

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _qiniu = _interopRequireDefault(__webpack_require__(156));

var _reactRedux = __webpack_require__(7);

var _qiniu2 = __webpack_require__(158);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? '上传图片' : _ref$text,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? true : _ref$multiple,
      _ref$beforeUpload = _ref.beforeUpload,
      beforeUpload = _ref$beforeUpload === void 0 ? function () {} : _ref$beforeUpload,
      _ref$upload = _ref.upload,
      upload = _ref$upload === void 0 ? function () {} : _ref$upload;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      token = _useState2[0],
      setToken = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      url = _useState4[0],
      setUrl = _useState4[1];

  var store = (0, _reactRedux.useStore)();

  var _getQiNiuToken = function _getQiNiuToken() {
    return (0, _qiniu2.getQiNiuToken)()(store.dispatch, store.getState);
  };

  (0, _react.useEffect)(function () {
    if (token) return;

    _getQiNiuToken().then(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          err = _ref3[0],
          res = _ref3[1];

      if (res) {
        setToken(res.token);
        setUrl(res.url);
      }
    });
  });

  var HandleOnUpload = function HandleOnUpload(files) {
    beforeUpload(files);
    files.map(function (item) {
      item.upload().then(function (res) {
        res.text().then(function (res) {
          res = JSON.parse(res);
          upload(url + '/' + res.key, item);
        });
      });
    });
  };

  if (!token) return _react["default"].createElement("span", null);
  return _react["default"].createElement(_qiniu["default"], {
    text: text // onDrop={this.onDrop}
    // size={100}
    ,
    multiple: multiple,
    accept: "image/*",
    token: token // uploadKey={this.state.uploadKey}
    // maxSize="1Mb"
    ,
    onUpload: HandleOnUpload
  });
}

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCountries = loadCountries;

var _graphql = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 获取国家
function loadCountries() {
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve, reject) {
        var countries, _ref2, _ref3, err, res;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                countries = getState().countries;

                if (!(countries && countries.length > 0)) {
                  _context.next = 4;
                  break;
                }

                resolve([null, countries]);
                return _context.abrupt("return");

              case 4:
                _context.next = 6;
                return (0, _graphql["default"])({
                  apis: [{
                    api: 'countries',
                    fields: "\n          code\n          name\n          abbr\n        "
                  }]
                });

              case 6:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                err = _ref3[0];
                res = _ref3[1];

                if (!err) {
                  dispatch({
                    type: 'SET_COUNTRIES',
                    countries: res
                  });
                  resolve(res);
                } else {
                  reject(err);
                }

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
  };
}

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"select": "ANdeR"
};

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _nodeFetch = _interopRequireDefault(__webpack_require__(92));

var _index = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(_ref) {
  var token = _ref.token,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '上传图片' : _ref$text,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 1024 * 1024 * 2 : _ref$size,
      _ref$accept = _ref.accept,
      accept = _ref$accept === void 0 ? '*' : _ref$accept,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? true : _ref$multiple,
      _ref$onUpload = _ref.onUpload,
      onUpload = _ref$onUpload === void 0 ? function (file) {} : _ref$onUpload;

  var _useState = (0, _react.useState)(_index["default"].qiniu.uploadUrl.http),
      _useState2 = _slicedToArray(_useState, 2),
      uploadUrl = _useState2[0],
      setUploadUrl = _useState2[1];

  (0, _react.useEffect)(function () {
    if (window.location.protocol === 'https:') {
      setUploadUrl(_index["default"].qiniu.uploadUrl.https);
    }
  }, []);

  var upload = function upload(file) {
    if (!file || file.size === 0) return null;
    var key = file.preview.split('/').pop() + '.' + file.name.split('.').pop();
    return new Promise(function (resolve) {
      // const input = document.querySelector('input[type="file"]');
      var data = new FormData();
      data.append('file', file);
      data.append('token', token);
      data.append('key', key);
      data.append('x:filename', file.name);
      data.append('x:size', file.size);
      (0, _nodeFetch["default"])(uploadUrl, {
        method: 'POST',
        body: data
      }).then(function (data) {
        resolve(data);
      })["catch"](function (error) {
        resolve(error);
      });
    });
  };

  var onChange = function onChange(e) {
    e.preventDefault();
    var files;

    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    var maxFiles = multiple ? files.length : 1;
    var arr = [];

    for (var i = 0; i < maxFiles; i++) {
      files[i].preview = URL.createObjectURL(files[i]);

      files[i].upload = function (file) {
        return function () {
          return upload(file);
        };
      }(files[i]);

      arr.push(files[i]);
    }

    onUpload(arr);
  };

  return _react["default"].createElement("span", {
    className: "_1Ic4W"
  }, text, _react["default"].createElement("input", {
    className: "a",
    type: "file",
    accept: accept,
    multiple: multiple,
    onChange: onChange
  }));
}

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"file": "_1Ic4W"
};

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQiNiuToken = getQiNiuToken;

var _graphql = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getQiNiuToken() {
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve, reject) {
        var _ref2, _ref3, err, res;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _graphql["default"])({
                  apis: [{
                    api: 'qiniuToken',
                    // args,
                    fields: "\n            token\n            url\n          "
                  }],
                  headers: {
                    accessToken: getState().user.accessToken
                  },
                  cache: true
                });

              case 2:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                err = _ref3[0];
                res = _ref3[1];

                if (err) {
                  resolve([err]);
                } else {
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
        return _ref.apply(this, arguments);
      };
    }());
  };
}

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPhone = void 0;

var _graphql = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fn = function fn(api) {
  return function (_ref) {
    var _ref$args = _ref.args,
        args = _ref$args === void 0 ? {} : _ref$args,
        _ref$fields = _ref.fields,
        fields = _ref$fields === void 0 ? "success" : _ref$fields;
    return function (dispatch, getState) {
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(resolve) {
          var accessToken, _ref3, _ref4, err, res;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  accessToken = getState().user.accessToken;
                  _context.next = 3;
                  return (0, _graphql["default"])({
                    type: 'mutation',
                    apis: [{
                      api: api,
                      args: args,
                      fields: fields
                    }],
                    headers: accessToken ? {
                      'accessToken': accessToken
                    } : {}
                  });

                case 3:
                  _ref3 = _context.sent;
                  _ref4 = _slicedToArray(_ref3, 2);
                  err = _ref4[0];
                  res = _ref4[1];

                  if (err) {
                    resolve([err]);
                  } else {
                    resolve([null, res]);
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
  };
};

var addPhone = fn('addPhone');
exports.addPhone = addPhone;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _avatarPicker = _interopRequireDefault(__webpack_require__(275));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _user2 = __webpack_require__(14);

var _qiniuUploadImage = _interopRequireDefault(__webpack_require__(149));

__webpack_require__(276);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      fileUpload = _useState2[0],
      setFileUpload = _useState2[1];

  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  if (!me) return null;
  var store = (0, _reactRedux.useStore)();

  var _loadUserInfo = function _loadUserInfo(params) {
    return (0, _user2.loadUserInfo)(params)(store.dispatch, store.getState);
  };

  var _updateUser = function _updateUser(params) {
    return (0, _user2.updateUser)(params)(store.dispatch, store.getState);
  };

  var upload = function upload(url) {
    (0, _avatarPicker["default"])({
      img: url,
      selectAreaScale: 0.9,
      previews: [],
      imgLoadComplete: function imgLoadComplete() {},
      done: function () {
        var _done = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(p) {
          var avatar;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  avatar = url + "?imageMogr2/crop/!" + parseInt(p.width) + "x" + parseInt(p.height) + "a" + parseInt(p.x) + "a" + parseInt(p.y) + "/thumbnail/!200";
                  _context.next = 3;
                  return _updateUser({
                    avatar: avatar
                  });

                case 3:
                  _loadUserInfo({});

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function done(_x) {
          return _done.apply(this, arguments);
        }

        return done;
      }()
    });
  };

  (0, _react.useEffect)(function () {
    setFileUpload(_react["default"].createElement(_qiniuUploadImage["default"], {
      upload: upload,
      text: '上传头像'
    }));
  }, []);
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u5934\u50CF")), _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement("div", {
    className: "_3F3_Y"
  }, _react["default"].createElement("img", {
    src: me.avatar_url.replace('!50', "!200")
  })), _react["default"].createElement("div", {
    className: "_2hscz"
  }, fileUpload))));
}

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * avatarPicker 头像选择器
 *
 * @作者 54sword
 * @Email 54sword@gmail.com
 * @版权归作者所有
 */
var avatarPicker = function () {
  // 如果是服务器，那么就不存在 window 和 document 全局变量，因此不继续执行
  if (typeof window == 'undefined' || typeof document == 'undefined') {
    return;
  } // 创建一个坐标


  function Point(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }

  ; // 创建一个矩形

  function Rectangle(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
  }

  ; // 判断点是否在矩形内

  function pointInRect(a, b) {
    return a.x >= b.x && a.y >= b.y && a.x <= b.x + b.width && a.y <= b.y + b.height;
  }

  ; // 判断矩形是否在另一个矩形的内部

  function rectInRect(a, b) {
    switch (true) {
      case !pointInRect(new Point(a.x, a.y), b):
        break;

      case !pointInRect(new Point(a.x + a.width, a.y + a.height), b):
        break;

      case !pointInRect(new Point(a.x + a.width, a.y), b):
        break;

      case !pointInRect(new Point(a.x, a.y + a.height), b):
        break;

      default:
        return true;
    }

    return false;
  }

  ; // 获取正数，四舍五入

  function parseInt(number) {
    return ~~(0.5 + number);
  }

  ; // 阻止冒泡

  function stopBubble(e) {
    e && e.stopPropagation ? e.stopPropagation() : window.event.cancelBubble = true;
  }

  ; // 添加事件

  function addEvent(el, name, callback) {
    var fc = function fc(event) {
      var point = getMousePosition(event);
      var e = event || window.event; // e.pageX = point.x;
      // e.pageY = point.y;

      callback(e);
      stopBubble(e);
    };

    return el.attachEvent ? el.attachEvent('on' + name, fc) : el.addEventListener(name, fc, false);
  }

  ; // 获取滚动条的位置

  function getScrollPosition() {
    var doc = document.documentElement && document.documentElement.scrollTop ? document.documentElement : document.body;
    return new Point(doc.scrollLeft, doc.scrollTop);
  }

  ;
  /**
   * 获取鼠标在页面的位置
   * @param  {object} event 事件对象
   * @return {object} 坐标
   */

  function getMousePosition(event) {
    var scroll = getScrollPosition();
    var e = event || window.event;
    return new Point(e.pageX || e.clientX + scroll.x, e.clientY + scroll.y);
  }
  /**
   * 给元素添加css样式
   * @param {object} el  元素
   * @param {object} obj 样式列表
   */


  function setCSS(el, obj) {
    for (var i in obj) {
      try {
        el.style[i] = obj[i];

        if (i === 'opacity') {
          el.style['filter'] = 'alpha(opacity=' + obj[i] * 100 + ')';
        }
      } catch (err) {
        console.log('set style error: ' + i + ':' + obj[i]);
      }
    }
  }

  ; // 判断IE或IE版本

  function isIE(ver) {
    var b = document.createElement('b');
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1;
  }

  ; // 是否是移动设备

  var isMobileDevice = function () {
    var sUserAgent = navigator.userAgent.toLowerCase();

    if (sUserAgent.match(/ipad/i) == "ipad" || sUserAgent.match(/iphone os/i) == "iphone os" || sUserAgent.match(/android/i) == "android") {
      return true;
    }

    return false;
  }();

  var body = document.getElementsByTagName('body')[0];

  var picker = function picker() {
    /**
     * 容器
     * @type {Object}
     */
    this.container = document.createElement('div');
    setCSS(this.container, {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'top': '0px',
      'left': '0px',
      'z-index': 9999999
    });
    this.container.style.display = 'none';
    body.appendChild(this.container);
    /**
     * 页面的黑色遮罩
     * @type {Object}
     */

    if (!isIE(6)) {
      var mask = document.createElement('div');
      setCSS(mask, {
        'position': 'absolute',
        'background': '#000',
        'width': '100%',
        'height': '100%',
        'top': '0px',
        'left': '0px',
        'opacity': '0.6'
      });
      this.container.appendChild(mask);
    }
    /**
     * 采集区域
     * @type {Object}
     */


    this.pickerArea = document.createElement('div');
    setCSS(this.pickerArea, {
      'position': 'absolute',
      'backgroundColor': '#000',
      'boxShadow': '0 5px 50px #555'
    });
    this.container.appendChild(this.pickerArea); // 纪录图片的原始尺寸

    this.originalImgSize = new Rectangle();
    /**
     * 原图
     * @type {Object}
     */

    this.img = document.createElement('img');
    setCSS(this.img, {
      'position': 'absolute',
      'opacity': '0.6'
    });
    this.pickerArea.appendChild(this.img); // 原图地址

    this.imgSrc = '';
    /**
     * 裁剪区域
     * @type {Object}
     */

    this.clipArea = document.createElement('div');
    setCSS(this.clipArea, {
      'position': 'absolute'
    });
    this.pickerArea.appendChild(this.clipArea);
    /**
     * 裁裁剪区域内的图片
     * @type {Object}
     */

    this.clipimg = document.createElement('img');
    setCSS(this.clipimg, {
      'position': 'absolute'
    });
    this.clipArea.appendChild(this.clipimg);
    /**
     * 裁切选区矩形的页面元素
     * @type {Object}
     */

    this.select = document.createElement('div');
    setCSS(this.select, {
      'position': 'absolute',
      'width': '0px',
      'height': '0px',
      'backgroundImage': 'url(data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==)',
      'cursor': 'move',
      // 'border': '1px dashed #fff',
      'border': '1px dashed rgba(255, 255, 255, .3)',
      // 'opacity': '0.5',
      'margin': '-1px 0 0 -1px',
      'zIndex': 100
    });
    this.pickerArea.appendChild(this.select);
    /**
     * 控制裁切选区矩形的8个触点
     * @type {Object}
     */

    this.contact = {
      leftTop: document.createElement('div'),
      rightTop: document.createElement('div'),
      rightBottom: document.createElement('div'),
      leftBottom: document.createElement('div'),
      topCenter: document.createElement('div'),
      rightCenter: document.createElement('div'),
      bottomCenter: document.createElement('div'),
      leftCenter: document.createElement('div')
    };

    if (isMobileDevice) {
      this.select.appendChild(this.contact.rightBottom);
      setCSS(this.contact.rightBottom, {
        'position': 'absolute',
        'width': '40px',
        'height': '40px',
        'margin': '-22px 0 0 -22px',
        'background-size': '100% 100%',
        'backgroundImage': 'url("data:image/NGf;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNDREMkIzMEM0MDYxMUU1OEQwM0JDNDIzOTJCMzU5OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNDREMkIzMUM0MDYxMUU1OEQwM0JDNDIzOTJCMzU5OSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY0NEQyQjJFQzQwNjExRTU4RDAzQkM0MjM5MkIzNTk5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY0NEQyQjJGQzQwNjExRTU4RDAzQkM0MjM5MkIzNTk5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LQ0jrQAABtFJREFUeNrsmntMU1ccx3uhtEDhSuuMWMKjoKCwLARHQJYmZogKDXORxIkoIWqciQ/CEOcfEGFkaAsz7A9QTBbfTjISXBhGcKKgogYfI8MxRVoBIWALLY+WvqD7HXddGCLe2x5aN3uSk95buLe/zz2/x/ecewiLxcJ6n5oL6z1rTmAnsBPYCewEfpcbe7Y/EoRtz8NimbTpemt/f7bfdY4wzlZQUOC2efPmGJIkxVwu90MOhyNyc3Ob7+Li4oEGYnJyctxkMimNRqNCp9P9Dr1RKpU9rKg4Zporm4jZpKWVLkXcvXtHFBISsh1AkxEgk4sBfkCj0fwsl8t/WLEi7jl6MDhdGicwcelSrW9MTEwen8+XEAThZstIwOibhoaGqpqbmw+vW/e5igm4PYDZnZ1PNwUEBOSy2WwvnC4ILq9RKBQHw8KWVsOp2eFJa8+ePd4qlbIsODj4MG5Y1CAkfEJDQ0v7+nqlycnJHjbfEI3wmzqM8WydyM/PF4Db1cD/9tmjq1SqH3fs+JJ8i12zMlnt0hkZGeSRI9+dh3iNsmdZUSqVjRs2fLH9+vXrWnvGMLe393m5UChMdEQt7erqqgwKEn2Nkro9Ypj94MH9DEfBohYYGLihuflWijU6gikwUVj4jSgiImKfgwUTERkZmbtr1y5fKnDnTHi4y+WdR0Ui0Zo3XRMfH++r1WpnNALUlqWkpGQoOjraiIP6yZMnP0G5ypnu2rhcmpBKD0eAO8VbWV4shw4dUuOCRQ0e/LqsrKwQJqPMBJgrkUi2gQ5mHDdQny2FhYXquLg4A+YazUlL25SODrED+/n58YOCgj61aobCZrPc3d3nJJhB8KyFDxI3sGtR0bdiHo9HWmOUXq8ncnJy+FevXsVODTpgYXGxLJIuC11g97CwsE9s1MREXl4ev7q62hM3dFRUlBg+ODiBPQQCQRj9lQqCtX///mGYORmmzYBYMpls3qlTp3g4gRcsWLAM2YgV2MfHx5euAbt37x5Zv369DkoQSlT66dp9bGwM60oL2OaPvBAnMMfLy4tW/G7ZsmU0LS1N+6oUSaVS9cqVK/+BTk9PHwPBMIoTmLKNi1N4LDWbTb+6urpaNTLIlSF+ffz9/c07d+4cwx3Do6OjOpKch7L1U1yTh2UAXA/ArrZMQ1FsT2/l5eXeRqORlZmZOTrT3xkAS+DwMTalZTAYbFpYmwmmtLTU+/Tp014XLlzwKioqmoc8YWo7efIkD7dtdIEnh4eHtbhcEI12cXExiUBffVdTU+OJ3H5iYuLl+dmzZ3lnzpzxpnM/sA2FyQQtEUTTRnN/f79q0aJF83EAo9H29vZ+ze9AmHjodDpCLBYbysrKSE9PT1oLd319fS/ornfRHWGDQqHowZloUPKCuB0Gbf6v72/fvu2OajWTnQmdnZ3PkI04gfWNjU2tuLNramqqDtxYgyYXttyntvbSfWQjTmBdRUVFy+DgoBY3dGJi4jjEsxomF1ZB9/T0qKuqqv5ANmJ1aWjKpqamR3Mx40FlyWw2W3VtQ0PDQ/hQvWl9y1pglAGHiotLamESMIETFmKWm5ubywdgxkUYEpxJKpXVwqGaRfPNBBPlpAHjfrty5Uo7LtiWlhbOgQMH+GgmZc31UMpa29vb/0TaYy7WtJBRvkuWLEm6d68llyRJLsuBTaVS6ZYv/7igu7u7Hk5fTB1hXGta6IZDHR0dD8CN6h0JC4rMcvBgfi3AtjJxZ6bALCoxdIEMrL548WK7o4DPnTvXChr8FzjsRmsLjESPFW8ekDoTQhkRX7vWkBUbGyu0JyzkEEViYtL3IEFvwWn/TJIS95sHVD/69Xr9vTVr1lbcuHGj116wdXV1z5KTPzsOsPepuGVcMaxdeXjp2iMjIzcTElYfraysfDyXm1RRzJ44ceJRUpLkGOiBO0hvMHVlW4FZlJRTgAE3N25MPbZ3b2YDKDEjbtiBgYHxrVu31UE/DuDIjRV0RQauGH5t+Qf6QujhQqEwWiaTJqSkpARDjLvaAgqiwgye05Gdva9erVYjF26n3PitI2uXLQ/Q0dw1AC0HLV68+KPs7K9iJRJJgL+/P6MVSrlcPgaCQgGq7k5vb28bBYpcmPac126bWlh/v/IQQPeDLkIPYNWqVaGrVycEhIeHzw8MDCQFAgGXx+O9HH2tVjuhVCr1UE9H2traBi9frnsGer0D5QfoaMrXR9VZE+sd29QyEzhJwX9AdXSMVjg8piw8IJBxavQQmJLqGugjTEEdBTw9KXIoSA/q2G1KspygypyBSoLjVEKyac+iI4Ed0px7LemO8P+xOTeIO4GdwE7g/1T7S4ABACYxlc/6YtCdAAAAAElFTkSuQmCC")'
      });
    } else {
      for (var i in this.contact) {
        this.select.appendChild(this.contact[i]);
        setCSS(this.contact[i], {
          'position': 'absolute',
          'width': isIE(6) || isIE(7) ? '6px' : '4px',
          'height': isIE(6) || isIE(7) ? '6px' : '4px',
          'border': '1px solid #000',
          'background': '#fff',
          'margin': '-3px 0 0 -3px',
          'fontSize': '0px',
          'lineHeight': '0',
          'opacity': '0.5'
        });
      }
    }
    /*
    // 初始化触点
    for (var i in this.contact) {
       setCSS(this.contact[i], {
        'position': 'absolute',
        'width': isIE(6) || isIE(7) ? '6px' : '4px',
        'height': isIE(6) || isIE(7) ? '6px' : '4px',
        'border': '1px solid #000',
        'background': '#fff',
        'margin': '-3px 0 0 -3px',
        'fontSize': '0px',
        'lineHeight': '0'
        // 'opacity': '0.5'
      });
    }
    */


    setCSS(this.contact.leftTop, {
      'top': '0%',
      'left': '0%',
      'cursor': 'nw-resize',
      'z-index': '20'
    });
    setCSS(this.contact.rightTop, {
      'top': '0%',
      'left': '100%',
      'cursor': 'ne-resize',
      'z-index': '20'
    });
    setCSS(this.contact.rightBottom, {
      'top': '100%',
      'left': '100%',
      'cursor': 'se-resize',
      'z-index': '20'
    });
    setCSS(this.contact.leftBottom, {
      'top': '100%',
      'left': '0%',
      'cursor': 'sw-resize',
      'z-index': '20'
    });
    setCSS(this.contact.topCenter, {
      'top': '0%',
      'left': '50%',
      'cursor': 'n-resize',
      'z-index': '10'
    });
    setCSS(this.contact.rightCenter, {
      'top': '50%',
      'left': '100%',
      'cursor': 'e-resize',
      'z-index': '10'
    });
    setCSS(this.contact.bottomCenter, {
      'top': '100%',
      'left': '50%',
      'cursor': 's-resize',
      'z-index': '10'
    });
    setCSS(this.contact.leftCenter, {
      'top': '50%',
      'left': '0%',
      'cursor': 'w-resize',
      'z-index': '10'
    }); // 头像预览图

    this.previews = null; //[{ width:100, height:100 }, { width:50, height:50 }, { width:30, height:30 }];

    this.previewArea = document.createElement('div');
    setCSS(this.previewArea, {
      'position': 'absolute',
      'top': '0%',
      'left': '100%'
    });
    this.pickerArea.appendChild(this.previewArea);
    /**
     * 底部的控制栏
     * @type {[type]}
     */

    this.bottomBar = document.createElement('div');
    setCSS(this.bottomBar, {
      'position': 'absolute',
      'backgroundColor': '#fff',
      'width': '100%',
      'height': '40px',
      'top': '100%',
      'left': '0px',
      'zIndex': isIE(6) || isIE(7) ? '-1' : ''
    });
    var cancel = document.createElement('a');
    var done = document.createElement('a');
    cancel.innerHTML = 'Cancel';
    done.innerHTML = 'Done';
    this.bottomBar.appendChild(cancel);
    this.bottomBar.appendChild(done);
    this.pickerArea.appendChild(this.bottomBar);
    cancel.href = "javascript:;";
    done.href = "javascript:;";
    var that = this;

    done.onclick = function () {
      if (that.doneCallback) {
        var x = parseInt(that.selectArea.x / that.dragArea.width * that.originalImgSize.width);
        var y = parseInt(that.selectArea.y / that.dragArea.height * that.originalImgSize.height);
        var width = parseInt(that.selectArea.width / that.dragArea.width * that.originalImgSize.width);
        var height = parseInt(that.selectArea.height / that.dragArea.height * that.originalImgSize.height);
        that.doneCallback({
          x: x,
          y: y,
          width: width <= 0 ? 1 : width,
          height: height <= 0 ? 1 : height
        });
      }

      that.container.style.display = 'none';
    };

    cancel.onclick = function () {
      that.container.style.display = 'none';
    };

    setCSS(cancel, {
      'position': 'absolute',
      'width': '50%',
      'textAlign': 'center',
      'fontSize': '14px',
      'color': '#333',
      'height': '40px',
      'lineHeight': '40px'
    });
    setCSS(done, {
      'position': 'absolute',
      'left': '50%',
      'width': '50%',
      'textAlign': 'center',
      'fontSize': '14px',
      'color': '#333',
      'height': '40px',
      'lineHeight': '40px'
    });

    done.onmouseover = cancel.onmouseover = function () {
      setCSS(this, {
        'backgroundColor': '#efefef'
      });
    };

    done.onmouseout = cancel.onmouseout = function () {
      setCSS(this, {
        'backgroundColor': '#fff'
      });
    };
    /**
     * 完成后的回调函数
     * @type {Function}
     */


    this.doneCallback = null;
    /**
     * 选区框的缩放模式
     * @type {String}
     *  - free
     *  - 1:1
     */

    this.zoomMode = '1:1';
    /**
     * 头像矩形圆角弧度
     * @type {String}
     */

    this.radian = 0; // 0 - 50;

    /**
     * 选择区域默认比例
     * @type {Float}
     */

    this.selectAreaScale = 0.8; // 0 - 1.0

    /**
     * 拖拽区域的矩形范围
     * @type {Rectangle}
     */

    this.dragArea = new Rectangle(0, 0, 0, 0);
    /**
     * 裁剪的选区矩形
     * @type {Rectangle}
     */

    this.selectArea = new Rectangle(0, 0, 0, 0);
    /**
     * 鼠标在 this.selectArea 矩形内的坐标
     * @type {Point}
     */

    this.mouseInSelectAreaPoint = new Point(0, 0);
    /**
     * 记录鼠标处理选区移动状态
     * @type {Boolean}
     */

    this.handleMoveSelectArea = false;
    /**
     * 调整选区矩形时候的对角固定坐标
     * @type {Point}
     */

    this.fixedPosition = new Point(0, 0);
    this.fixedContact = new Point(0, 0);
    /**
     * 当前的点中的触点
     * @type {String}
     */

    this.currentContact = '';
    /**
     * 记录鼠标处理触点的状态
     * @type {Boolean}
     */

    this.handleContack = false;
  };

  picker.prototype.start = function () {
    this.img.src = this.imgSrc + '?_r=' + new Date().getTime();
    var that = this;

    this.img.onload = function () {
      that.container.style.display = '';
      that.init();
      that.updateRoundElements();
      if (that.imgLoadComplete) that.imgLoadComplete();
    };
  }; // 设置容器的尺寸和绝对坐标


  picker.prototype.updatePickerArea = function () {
    setCSS(this.pickerArea, {
      'width': this.dragArea.width + 'px',
      'height': this.dragArea.height + 'px',
      'left': '50%',
      'top': '50%',
      'margin': -this.dragArea.height / 2 - 30 + 'px 0 0 ' + -this.dragArea.width / 2 + 'px'
    });
  };

  picker.prototype.init = function () {
    this.originalImgSize.width = this.img.width;
    this.originalImgSize.height = this.img.height;
    var scale = 1;
    var minsize = isMobileDevice ? 320 : 500;
    scale = minsize / this.img.width;

    if (scale * this.img.height > minsize) {
      scale = minsize / this.img.height;
    } // 以图片的尺寸作为选区大小


    this.dragArea.width = this.img.width * scale;
    this.dragArea.height = this.img.height * scale;
    var size = this.dragArea.width < this.dragArea.height ? parseInt(this.dragArea.width * this.selectAreaScale) : parseInt(this.dragArea.height * this.selectAreaScale);
    this.selectArea.width = size;
    this.selectArea.height = size; // 选取框在图片的中间位置

    this.selectArea.x = parseInt(this.dragArea.width / 2 - this.selectArea.width / 2);
    this.selectArea.y = parseInt(this.dragArea.height / 2 - this.selectArea.height / 2);
    this.clipimg.src = this.imgSrc + '?_r=' + new Date().getTime();
    this.clipimg.style.width = this.dragArea.width + 'px';
    this.clipimg.style.height = this.dragArea.height + 'px';
    this.img.style.width = this.dragArea.width + 'px';
    this.img.style.height = this.dragArea.height + 'px';
    this.addEvent();
    this.updatePickerArea();
    this.previewArea.innerHTML = ''; // 添加预览效果

    for (var i = 0, max = this.previews.length, top = 0; i < max; i++) {
      var preview = this.previews[i];
      var div = document.createElement('div');
      setCSS(div, {
        'position': 'absolute',
        'top': top + 'px',
        'marginLeft': '15px',
        'width': preview.width + 'px',
        'height': preview.height + 'px',
        'backgroundImage': 'url(' + this.imgSrc + ')',
        'display': isIE(6) || isIE(7) || isIE(8) ? 'none' : ''
      });
      this.previewArea.appendChild(div);
      this.previews[i] = div;
      top += preview.height + 10;
    }

    this.updatePreviews();
    this.updateSelectArea();
    this.updateClipArea();
  };

  picker.prototype.addEvent = function () {
    var that = this;

    if (!isMobileDevice) {
      addEvent(this.select, 'mousedown', function (event) {
        var button = event.button; // IE7 and IE7 following

        if (event.which == null) button--;
        if (button != 0) return;
        that.handleMoveSelectArea = true;
        var p = that.getRelativelyPosition(event);
        that.mouseInSelectAreaPoint.x = p.x - that.selectArea.x;
        that.mouseInSelectAreaPoint.y = p.y - that.selectArea.y;
      });
      addEvent(body, 'mouseup', function (event) {
        that.handleMoveSelectArea = false;
        that.handleContack = false;
      });
      addEvent(body, 'resize', function () {
        that.updatePickerArea();
      });
      addEvent(this.contact.leftTop, 'mousedown', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x + that.selectArea.width,
          y: that.selectArea.y + that.selectArea.height
        }, 'leftTop');
      });
      addEvent(this.contact.rightTop, 'mousedown', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x,
          y: that.selectArea.y + that.selectArea.height
        }, 'rightTop');
      });
      addEvent(this.contact.leftBottom, 'mousedown', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x + that.selectArea.width,
          y: that.selectArea.y
        }, 'leftBottom');
      });
      addEvent(this.contact.rightBottom, 'mousedown', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x,
          y: that.selectArea.y
        }, 'rightBottom');
      });
      addEvent(this.contact.topCenter, 'mousedown', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x + that.selectArea.width / 2,
          y: that.selectArea.y + that.selectArea.height
        }, 'topCenter');
      });
      addEvent(this.contact.rightCenter, 'mousedown', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x,
          y: that.selectArea.y + that.selectArea.height / 2
        }, 'rightCenter');
      });
      addEvent(this.contact.bottomCenter, 'mousedown', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x + that.selectArea.width / 2,
          y: that.selectArea.y
        }, 'bottomCenter');
      });
      addEvent(this.contact.leftCenter, 'mousedown', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x + that.selectArea.width,
          y: that.selectArea.y + that.selectArea.height / 2
        }, 'leftCenter');
      });
      addEvent(body, 'mousemove', function (event) {
        if (that.handleMoveSelectArea) {
          that.mousemove(event);
        }

        if (that.handleContack) {
          if (that.zoomMode === '1:1') {
            that.equalRatio(event);
          } else {
            that.freeSize(event);
          }
        }

        if (that.handleMoveSelectArea || that.handleContack) {
          that.updateSelectArea();
          that.updatePreviews();
          that.updateClipArea();
        }
      });
    } else {
      addEvent(this.select, 'touchstart', function (event) {
        // if (that.container.style.display === 'none') {
        event.preventDefault(); // }

        that.handleMoveSelectArea = true;
        var p = that.getRelativelyPosition(event.touches[0]);
        that.mouseInSelectAreaPoint.x = p.x - that.selectArea.x;
        that.mouseInSelectAreaPoint.y = p.y - that.selectArea.y;
      });
      addEvent(body, 'touchend', function (event) {
        that.handleMoveSelectArea = false;
        that.handleContack = false;
      });
      addEvent(this.contact.leftTop, 'touchstart', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x + that.selectArea.width,
          y: that.selectArea.y + that.selectArea.height
        }, 'leftTop');
      });
      addEvent(this.contact.rightTop, 'touchstart', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x,
          y: that.selectArea.y + that.selectArea.height
        }, 'rightTop');
      });
      addEvent(this.contact.leftBottom, 'touchstart', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x + that.selectArea.width,
          y: that.selectArea.y
        }, 'leftBottom');
      });
      addEvent(this.contact.rightBottom, 'touchstart', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x,
          y: that.selectArea.y
        }, 'rightBottom');
      });
      addEvent(this.contact.topCenter, 'touchstart', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x + that.selectArea.width / 2,
          y: that.selectArea.y + that.selectArea.height
        }, 'topCenter');
      });
      addEvent(this.contact.rightCenter, 'touchstart', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x,
          y: that.selectArea.y + that.selectArea.height / 2
        }, 'rightCenter');
      });
      addEvent(this.contact.bottomCenter, 'touchstart', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x + that.selectArea.width / 2,
          y: that.selectArea.y
        }, 'bottomCenter');
      });
      addEvent(this.contact.leftCenter, 'touchstart', function (event) {
        that.resizeSelectArea(event, {
          x: that.selectArea.x + that.selectArea.width,
          y: that.selectArea.y + that.selectArea.height / 2
        }, 'leftCenter');
      });
      addEvent(body, 'touchmove', function (event) {
        if (that.container.style.display != 'none') {
          event.preventDefault();
        }

        if (that.handleMoveSelectArea) {
          that.mousemove(event.touches[0]);
        }

        if (that.handleContack) {
          if (that.zoomMode === '1:1') {
            that.equalRatio(event.touches[0]);
          } else {
            that.freeSize(event.touches[0]);
          }
        }

        if (that.handleMoveSelectArea || that.handleContack) {
          that.updateSelectArea();
          that.updatePreviews();
          that.updateClipArea();
        }
      });
    } // 在操作的时候，阻止右键菜单、选取、和拖拽


    var interdiction = function interdiction() {
      return that.container.style.display === 'none' ? true : false;
    };

    document.oncontextmenu = interdiction;
    document.onselectstart = interdiction;
    document.ondragstart = interdiction;
  }; // 获取鼠标的在拖拽区域的相对位置


  picker.prototype.getRelativelyPosition = function (event) {
    var position = new Point(event.clientX, event.clientY);
    position.x -= this.pickerArea.offsetLeft;
    position.y -= this.pickerArea.offsetTop;
    position.y = position.y <= 0 ? 0 : position.y;
    position.y = position.y >= this.dragArea.height ? this.dragArea.height : position.y;
    position.x = position.x <= 0 ? 0 : position.x;
    position.x = position.x >= this.dragArea.width ? this.dragArea.width : position.x;
    return position;
  };

  picker.prototype.mousemove = function (event) {
    var p = this.getRelativelyPosition(event);
    p.x -= this.mouseInSelectAreaPoint.x;
    p.y -= this.mouseInSelectAreaPoint.y;
    p.y = p.y <= 0 ? 0 : p.y;
    p.y = p.y >= this.dragArea.height - this.selectArea.height ? this.dragArea.height - this.selectArea.height : p.y;
    p.x = p.x <= 0 ? 0 : p.x;
    p.x = p.x >= this.dragArea.width - this.selectArea.width ? this.dragArea.width - this.selectArea.width : p.x;
    this.selectArea.y = p.y;
    this.selectArea.x = p.x;
  };

  picker.prototype.resizeSelectArea = function (e, position, contack) {
    e.preventDefault();
    this.handleContack = true;
    this.fixedPosition.x = parseInt(position.x);
    this.fixedPosition.y = parseInt(position.y);
    this.currentContact = contack ? contack : '';
    stopBubble(this);
  }; // =================================================================================================
  // 自由尺寸


  picker.prototype.freeSize = function (event) {
    var p = this.getRelativelyPosition(event);
    var width = Math.abs(p.x - this.fixedPosition.x);
    var height = Math.abs(p.y - this.fixedPosition.y);

    if (this.currentContact == 'leftCenter' || this.currentContact == 'rightCenter') {
      this.selectArea.width = width;
      this.selectArea.x = p.x > this.fixedPosition.x ? this.fixedPosition.x : this.fixedPosition.x - width;
      p.y -= this.selectArea.height;
    } else if (this.currentContact == 'topCenter' || this.currentContact == 'bottomCenter') {
      this.selectArea.height = height;
      this.selectArea.y = p.y > this.fixedPosition.y ? this.fixedPosition.y : this.fixedPosition.y - height;
      p.x -= this.selectArea.width;
    } else {
      if (p.x > this.fixedPosition.x) p.x = this.fixedPosition.x;
      if (p.y < this.fixedPosition.y) p.y = this.fixedPosition.y;
      this.selectArea.width = width;
      this.selectArea.height = height;
      p.y -= this.selectArea.height;
      this.selectArea.x = p.x;
      this.selectArea.y = p.y;
    }
  }; // 等比缩放


  picker.prototype.equalRatio = function (event) {
    var p = this.getRelativelyPosition(event); // 上中、下中、左中、右中

    if (this.currentContact === 'leftCenter' || this.currentContact === 'rightCenter' || this.currentContact === 'bottomCenter' || this.currentContact === 'topCenter') {
      var maxSide = this.currentContact == 'leftCenter' || this.currentContact == 'rightCenter' ? Math.abs(p.x - this.fixedPosition.x) : Math.abs(p.y - this.fixedPosition.y);

      if (this.currentContact == 'leftCenter' || this.currentContact == 'rightCenter') {
        // 判断如果高度超出，那么以高度为边长计算
        var d = ~~Math.abs(maxSide / 2);

        if (this.fixedPosition.y - d <= 0) {
          maxSide = this.fixedPosition.y * 2;
        } else if (this.fixedPosition.y + d > this.dragArea.height) {
          maxSide = (this.dragArea.height - this.fixedPosition.y) * 2;
        }
      } else {
        // 判断如果宽度超出，那么以宽度为边长计算
        var d = ~~Math.abs(maxSide / 2);

        if (this.fixedPosition.x - d <= 0) {
          maxSide = this.fixedPosition.x * 2;
        } else if (this.fixedPosition.x + d > this.dragArea.width) {
          maxSide = (this.dragArea.width - this.fixedPosition.x) * 2;
        }
      }

      this.selectArea.width = maxSide;
      this.selectArea.height = maxSide;

      if (this.currentContact == 'leftCenter' || this.currentContact == 'rightCenter') {
        if (p.x > this.fixedPosition.x) {
          this.selectArea.x = this.fixedPosition.x;
        } else {
          this.selectArea.x = this.fixedPosition.x - maxSide;
        }

        this.selectArea.y = this.fixedPosition.y - parseInt(maxSide / 2);
      } else {
        if (p.y >= this.fixedPosition.y) {
          this.selectArea.y = this.fixedPosition.y;
        } else {
          this.selectArea.y = this.fixedPosition.y - maxSide;
        }

        this.selectArea.x = this.fixedPosition.x - parseInt(maxSide / 2);
      }

      return;
    }

    var width = Math.abs(p.x - this.fixedPosition.x);
    var height = Math.abs(p.y - this.fixedPosition.y);
    var maxSide = width > height ? width : height;
    this.selectArea.width = maxSide;
    this.selectArea.height = maxSide;
    this.selectArea.y = this.fixedPosition.y;
    this.selectArea.x = this.fixedPosition.x - maxSide;
    if (p.x > this.fixedPosition.x) this.selectArea.x += this.selectArea.width;
    if (p.y < this.fixedPosition.y) this.selectArea.y = this.fixedPosition.y - this.selectArea.width;

    if (!rectInRect(this.selectArea, this.dragArea)) {
      var left = this.fixedPosition.x;
      var top = this.fixedPosition.y;
      var right = this.dragArea.width - this.fixedPosition.x;
      var bottom = this.dragArea.height - this.fixedPosition.y;

      if (p.x === this.fixedPosition.x && p.y === this.fixedPosition.y) {
        var maxSide = 0;
      } else if (p.x === this.fixedPosition.x) {
        var maxSide = left < right ? left : right;
      } else if (p.y === this.fixedPosition.y) {
        var maxSide = top < bottom ? top : bottom;
      } else if (p.x >= this.fixedPosition.x && p.y >= this.fixedPosition.y) {
        var maxSide = right < bottom ? right : bottom;
      } else if (p.x <= this.fixedPosition.x && p.y >= this.fixedPosition.y) {
        var maxSide = left < bottom ? left : bottom;
      } else if (p.x <= this.fixedPosition.x && p.y <= this.fixedPosition.y) {
        var maxSide = left < top ? left : top;
      } else if (p.x >= this.fixedPosition.x && p.y <= this.fixedPosition.y) {
        var maxSide = right < top ? right : top;
      }

      this.selectArea.width = maxSide;
      this.selectArea.height = maxSide;
      this.selectArea.y = this.fixedPosition.y;
      this.selectArea.x = this.fixedPosition.x - maxSide;
      if (p.x >= this.fixedPosition.x) this.selectArea.x += this.selectArea.width;
      if (p.y <= this.fixedPosition.y) this.selectArea.y = this.fixedPosition.y - this.selectArea.width;
    }
  }; // 更新选区


  picker.prototype.updateSelectArea = function () {
    setCSS(this.select, {
      'left': this.selectArea.x + 'px',
      'top': this.selectArea.y + 'px',
      'width': this.selectArea.width + 'px',
      'height': this.selectArea.height + 'px'
    });
  }; // 更新裁切区域


  picker.prototype.updateClipArea = function () {
    setCSS(this.clipArea, {
      'left': this.selectArea.x + 'px',
      'top': this.selectArea.y + 'px',
      'width': this.selectArea.width + 'px',
      'height': this.selectArea.height + 'px'
    });
    setCSS(this.clipimg, {
      'left': -this.selectArea.x + 'px',
      'top': -this.selectArea.y + 'px',
      'clip': 'rect(' + this.selectArea.y + 'px, ' + (this.selectArea.x + this.selectArea.width) + 'px, ' + (this.selectArea.y + this.selectArea.height) + 'px, ' + this.selectArea.x + 'px)'
    });
  }; // 更新预览图


  picker.prototype.updatePreviews = function () {
    for (var i in this.previews) {
      var preview = this.previews[i];
      var scaleWidth = preview.offsetWidth / this.selectArea.width;
      var scaleHeight = preview.offsetHeight / this.selectArea.height;
      preview.style.backgroundPosition = parseInt(scaleWidth * -this.selectArea.x) + 'px ' + parseInt(scaleHeight * -this.selectArea.y) + 'px';
      preview.style.backgroundSize = parseInt(this.dragArea.width * scaleWidth) + 'px ' + parseInt(this.dragArea.height * scaleHeight) + 'px';
    }
  }; // 更新元素为圆角


  picker.prototype.updateRoundElements = function () {
    if (this.radian === 50) {
      this.contact.leftTop.style.display = 'none';
      this.contact.rightTop.style.display = 'none';
      this.contact.rightBottom.style.display = 'none';
      this.contact.leftBottom.style.display = 'none';
    }

    for (var i in this.previews) {
      this.previews[i].style.borderRadius = this.radian + '%';
    }

    this.clipArea.style.borderRadius = this.radian + '%';
    this.clipArea.style.overflow = 'hidden'; // 选取

    this.select.style.borderRadius = this.radian + '%';
  };

  var _picker = null;
  return function (setting) {
    if (_picker) _picker = null;
    _picker = new picker();
    _picker.imgSrc = setting.img;
    _picker.doneCallback = setting.done; // _picker.cancelCallback = setting.cancel || null;

    _picker.imgLoadComplete = setting.imgLoadComplete || null;
    _picker.radian = setting.radian ? setting.radian : 0;
    _picker.selectAreaScale = setting.selectAreaScale ? setting.selectAreaScale : 0.8;
    _picker.previews = setting.previews ? setting.previews : [{
      width: 100,
      height: 100
    }, {
      width: 50,
      height: 50
    }, {
      width: 30,
      height: 30
    }];
    _picker.zoomMode = setting.zoomMode ? setting.zoomMode : '1:1';

    if (isMobileDevice) {
      _picker.previews = [];
    }

    _picker.start();
  };
}();

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return avatarPicker;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"avatar": "_3F3_Y",
	"upload": "_2hscz"
};

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _user2 = __webpack_require__(14);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var brief = (0, _react.createRef)();
  var store = (0, _reactRedux.useStore)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });

  var submit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var value, err, res, result, _result;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = brief.current.value;

              if (!(value == me.brief)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", setShow(false));

            case 3:
              setLoading(true);
              _context.next = 6;
              return (0, _user2.updateUser)({
                brief: value
              })(store.dispatch, store.getState);

            case 6:
              result = _context.sent;
              _result = _slicedToArray(result, 2);
              err = _result[0];
              res = _result[1];

              if (err) {
                Toastify({
                  text: err.message,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              } else {
                Toastify({
                  text: '修改成功',
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
                }).showToast();
                (0, _user2.loadUserInfo)({})(store.dispatch, store.getState);
                setShow(false);
              }

              setLoading(false);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleShow =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return setShow(true);

            case 2:
              $('#brief').focus();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleShow() {
      return _ref2.apply(this, arguments);
    };
  }();

  var dom = _react["default"].createElement("div", {
    className: "d-flex justify-content-between"
  }, _react["default"].createElement("div", {
    className: "w-75"
  }, me.brief || '未知签名'), _react["default"].createElement("div", null, _react["default"].createElement("span", {
    className: "btn btn-outline-primary rounded-pill btn-sm",
    onClick: handleShow
  }, "\u4FEE\u6539")));

  if (show) {
    dom = _react["default"].createElement("div", null, _react["default"].createElement("div", {
      className: "form-group"
    }, _react["default"].createElement("input", {
      id: "brief",
      className: "form-control",
      defaultValue: me.brief,
      ref: brief
    })), loading ? _react["default"].createElement("span", {
      className: "btn btn-outline-primary rounded-pill btn-sm"
    }, "\u63D0\u4EA4\u4E2D...") : _react["default"].createElement("span", {
      className: "btn btn-outline-primary rounded-pill btn-sm",
      onClick: submit
    }, "\u63D0\u4EA4"));
  }

  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u4E2A\u6027\u7B7E\u540D")), _react["default"].createElement("div", {
    className: "card-body"
  }, dom));
}

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _user2 = __webpack_require__(14);

var _account = __webpack_require__(279);

var _captchaButton = _interopRequireDefault(__webpack_require__(133));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var newEmail = (0, _react.createRef)();
  var captcha = (0, _react.createRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  var unlockToken = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUnlockToken)(state);
  });
  var store = (0, _reactRedux.useStore)();

  var _addEmail = function _addEmail(args) {
    return (0, _account.addEmail)(args)(store.dispatch, store.getState);
  };

  var _loadUserInfo = function _loadUserInfo(args) {
    return (0, _user2.loadUserInfo)(args)(store.dispatch, store.getState);
  };

  var sendCaptcha = function sendCaptcha(callback) {
    var $newEmail = newEmail.current;
    if (!$newEmail.value) return $newEmail.focus();
    callback({
      id: me.email ? 'reset-email' : 'binding-email',
      args: {
        email: $newEmail.value,
        type: me.email ? 'reset-email' : 'binding-email'
      },
      fields: "success"
    });
  };

  var submitResetEmail =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var $newEmail, $captcha, err, res, result, _result;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $newEmail = newEmail.current;
              $captcha = captcha.current;

              if ($newEmail.value) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", $newEmail.focus());

            case 4:
              if ($captcha.value) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", $captcha.focus());

            case 6:
              setLoading(true);
              _context.next = 9;
              return _addEmail({
                args: {
                  email: $newEmail.value,
                  captcha: $captcha.value,
                  unlock_token: unlockToken || ''
                }
              });

            case 9:
              result = _context.sent;
              _result = _slicedToArray(result, 2);
              err = _result[0];
              res = _result[1];
              setLoading(false);

              if (res && res.success) {
                Toastify({
                  text: '邮箱绑定成功',
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
                }).showToast();

                _loadUserInfo({});

                setShow(false);
              } else {
                Toastify({
                  text: err && err.message ? err.message : err,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              }

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submitResetEmail() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleShow = function handleShow() {
    if (!unlockToken) {
      $('#unlock-token-modal').modal({
        show: true
      }, {
        complete: function complete(res) {
          if (res) setShow(true);
        }
      });
    } else {
      setShow(true);
    }
  };

  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u90AE\u7BB1")), _react["default"].createElement("div", {
    className: "card-body"
  }, function () {
    if (!me.email && !me.phone) {
      return _react["default"].createElement("div", {
        className: "d-flex justify-content-between"
      }, _react["default"].createElement("div", null, "\u672A\u7ED1\u5B9A"), _react["default"].createElement("span", {
        className: "btn btn-outline-primary rounded-pill btn-sm",
        onClick: function onClick() {
          $('#binding-phone').modal({
            show: true
          }, {});
        }
      }, "\u7ED1\u5B9A"));
    } else if (show) {
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "\u8BF7\u8F93\u5165\u65B0\u7684\u90AE\u7BB1",
        ref: newEmail
      })), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
        ref: captcha
      }), _react["default"].createElement("div", null, _react["default"].createElement(_captchaButton["default"], {
        onClick: sendCaptcha
      }))), loading ? _react["default"].createElement("span", {
        className: "btn btn-outline-primary rounded-pill btn-sm"
      }, "\u63D0\u4EA4\u4E2D...") : _react["default"].createElement("span", {
        className: "btn btn-outline-primary rounded-pill btn-sm",
        onClick: submitResetEmail
      }, "\u63D0\u4EA4"));
    } else if (!show) {
      return _react["default"].createElement("div", {
        className: "d-flex justify-content-between"
      }, _react["default"].createElement("div", null, me.email ? me.email : '未绑定'), _react["default"].createElement("span", {
        className: "btn btn-outline-primary rounded-pill btn-sm",
        onClick: handleShow
      }, me.email ? '修改' : '绑定'));
    }
  }())));
}

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addEmail = void 0;

var _graphql = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addEmail = function addEmail(_ref) {
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
                  type: 'mutation',
                  apis: [{
                    api: 'addEmail',
                    args: args,
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

exports.addEmail = addEmail;

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _user2 = __webpack_require__(14);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  var store = (0, _reactRedux.useStore)();

  var _loadUserInfo = function _loadUserInfo(args) {
    return (0, _user2.loadUserInfo)(args)(store.dispatch, store.getState);
  };

  var _updateUser = function _updateUser(args) {
    return (0, _user2.updateUser)(args)(store.dispatch, store.getState);
  };

  var submit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(isMale) {
      var err, res, result, _result;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(isMale && me.gender == 1 || !isMale && me.gender == 0)) {
                _context.next = 3;
                break;
              }

              setShow(false);
              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return _updateUser({
                gender: isMale ? 1 : 0
              });

            case 5:
              result = _context.sent;
              _result = _slicedToArray(result, 2);
              err = _result[0];
              res = _result[1];

              if (err) {
                Toastify({
                  text: err.message,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              } else {
                Toastify({
                  text: '修改成功',
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
                }).showToast();

                _loadUserInfo({});

                setShow(false);
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleShow = function handleShow() {
    setShow(true);
  };

  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u6027\u522B")), _react["default"].createElement("div", {
    className: "card-body"
  }, !show ? _react["default"].createElement("div", {
    className: "d-flex justify-content-between"
  }, _react["default"].createElement("div", null, me.gender === 0 ? '女' : null, me.gender === 1 ? '男' : null), _react["default"].createElement("span", {
    className: "btn btn-outline-primary rounded-pill btn-sm",
    onClick: handleShow
  }, "\u4FEE\u6539")) : _react["default"].createElement("div", {
    className: "list-group"
  }, _react["default"].createElement("button", {
    type: "button",
    className: "list-group-item list-group-item-action ".concat(me.gender === 1 ? 'active' : ''),
    onClick: function onClick() {
      submit(true);
    }
  }, "\u7537"), _react["default"].createElement("button", {
    type: "button",
    className: "list-group-item list-group-item-action ".concat(me.gender === 0 ? 'active' : ''),
    onClick: function onClick() {
      submit(false);
    }
  }, "\u5973")))));
}

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _user2 = __webpack_require__(14);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var nickname = (0, _react.createRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  var store = (0, _reactRedux.useStore)();

  var _loadUserInfo = function _loadUserInfo(args) {
    return (0, _user2.loadUserInfo)(args)(store.dispatch, store.getState);
  };

  var _updateUser = function _updateUser(args) {
    return (0, _user2.updateUser)(args)(store.dispatch, store.getState);
  };

  var submit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var $nickname, err, result, _result;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $nickname = nickname.current;

              if ($nickname.value) {
                _context.next = 4;
                break;
              }

              $nickname.focus();
              return _context.abrupt("return");

            case 4:
              if (!(me.nickname == $nickname.value)) {
                _context.next = 7;
                break;
              }

              setShow(false);
              return _context.abrupt("return");

            case 7:
              setLoading(true);
              _context.next = 10;
              return _updateUser({
                nickname: $nickname.value
              });

            case 10:
              result = _context.sent;
              _result = _slicedToArray(result, 1);
              err = _result[0];

              if (err) {
                Toastify({
                  text: err.message,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              } else {
                Toastify({
                  text: '修改成功',
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
                }).showToast();

                _loadUserInfo({});

                setShow(false);
              }

              setLoading(false);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleShow = function handleShow() {
    setShow(true);
  };

  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u540D\u5B57")), _react["default"].createElement("div", {
    className: "card-body"
  }, !show ? _react["default"].createElement("div", {
    className: "d-flex justify-content-between"
  }, _react["default"].createElement("div", null, me.nickname || ''), _react["default"].createElement("span", {
    className: "btn btn-outline-primary rounded-pill btn-sm",
    onClick: handleShow
  }, "\u4FEE\u6539")) : _react["default"].createElement("div", null, _react["default"].createElement("div", null, _react["default"].createElement("input", {
    type: "text",
    className: "form-control",
    defaultValue: me.nickname,
    ref: nickname,
    placeholder: "\u8BF7\u8F93\u5165\u4F60\u7684\u540D\u5B57"
  })), _react["default"].createElement("br", null), loading ? _react["default"].createElement("span", {
    className: "btn btn-outline-primary rounded-pill btn-sm"
  }, "\u63D0\u4EA4\u4E2D...") : _react["default"].createElement("span", {
    className: "btn btn-outline-primary rounded-pill btn-sm",
    onClick: submit
  }, "\u63D0\u4EA4")))));
}

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _index = __webpack_require__(1);

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _user2 = __webpack_require__(14);

var _oauth = __webpack_require__(283);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default() {
  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  var accessToken = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getAccessToken)(state);
  });
  var store = (0, _reactRedux.useStore)();

  var _loadUserInfo = function _loadUserInfo(args) {
    return (0, _user2.loadUserInfo)(args)(store.dispatch, store.getState);
  };

  var _oAuthUnbinding = function _oAuthUnbinding(args) {
    return (0, _oauth.oAuthUnbinding)(args)(store.dispatch, store.getState);
  };

  var submit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(name) {
      var err, res, result, _result;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!me[name]) {
                _context.next = 13;
                break;
              }

              if (!confirm("\u60A8\u786E\u8BA4\u89E3\u9664 ".concat(name, " \u7684\u7ED1\u5B9A\u5417\uFF1F"))) {
                _context.next = 11;
                break;
              }

              _context.next = 4;
              return _oAuthUnbinding({
                args: {
                  name: name
                }
              });

            case 4:
              result = _context.sent;
              _result = _slicedToArray(result, 2);
              err = _result[0];
              res = _result[1];
              _context.next = 10;
              return _loadUserInfo({});

            case 10:
              Toastify({
                text: '解除成功',
                duration: 3000,
                backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
              }).showToast();

            case 11:
              _context.next = 14;
              break;

            case 13:
              if (confirm("\u60A8\u786E\u8BA4\u7ED1\u5B9A ".concat(name, " \u5417\uFF1F"))) {
                window.location.href = "".concat(_index.api.domain, "/oauth/").concat(name, "?access_token=").concat(accessToken);
              }

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var doms = [];

  if (_index.social.weibo) {
    doms.push(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, "\u5FAE\u535A"), _react["default"].createElement("div", null, _react["default"].createElement("span", {
      className: "a",
      onClick: function onClick() {
        submit('weibo');
      }
    }, me.weibo ? '已绑定' : '未绑定'))));
  }

  if (_index.social.qq) {
    doms.push(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, "QQ"), _react["default"].createElement("div", null, _react["default"].createElement("span", {
      className: "a",
      onClick: function onClick() {
        submit('qq');
      }
    }, me.qq ? '已绑定' : '未绑定'))));
  }

  if (_index.social.github) {
    doms.push(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, "GitHub"), _react["default"].createElement("div", null, _react["default"].createElement("span", {
      className: "a",
      onClick: function onClick() {
        submit('github');
      }
    }, me.github ? '已绑定' : '未绑定'))));
  }

  if (_index.social.wechat) {
    doms.push(_react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", null, "\u5FAE\u4FE1"), _react["default"].createElement("div", null, _react["default"].createElement("span", {
      className: "a",
      onClick: function onClick() {
        submit('wechat');
      }
    }, me.wechat ? '已绑定' : '未绑定'))));
  }

  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u7B2C\u4E09\u65B9\u5E10\u53F7")), _react["default"].createElement("div", {
    className: "card-body",
    style: {
      overflow: 'hidden'
    }
  }, _react["default"].createElement("div", {
    className: "row"
  }, doms.map(function (item, index) {
    return _react["default"].createElement("div", {
      key: index,
      className: "col-".concat(12 / doms.length)
    }, item);
  }))));
}

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QQOAuth = exports.oAuthUnbinding = void 0;

var _graphql = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var oAuthUnbinding = function oAuthUnbinding(_ref) {
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
                  type: 'mutation',
                  apis: [{
                    api: 'oAuthUnbinding',
                    args: args,
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

                if (err) {
                  resolve([err]);
                } else {
                  resolve([null, res]);
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
};

exports.oAuthUnbinding = oAuthUnbinding;

var QQOAuth = function QQOAuth(args) {
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(resolve) {
        var _ref6, _ref7, err, res;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _graphql["default"])({
                  type: 'mutation',
                  apis: [{
                    api: 'QQOAuth',
                    args: {
                      access_token: args.access_token,
                      expires_in: parseInt(args.expires_in) + '',
                      oauth_consumer_key: args.oauth_consumer_key,
                      openid: args.openid
                    },
                    fields: "\n            success\n            access_token\n            expires\n          "
                  }],
                  headers: {
                    accessToken: getState().user.accessToken
                  }
                });

              case 2:
                _ref6 = _context2.sent;
                _ref7 = _slicedToArray(_ref6, 2);
                err = _ref7[0];
                res = _ref7[1];

                if (err) {
                  resolve([err]);
                } else {
                  resolve([null, res]);
                }

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref5.apply(this, arguments);
      };
    }());
  };
};

exports.QQOAuth = QQOAuth;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(14);

var _user2 = __webpack_require__(8);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var newPassword = (0, _react.createRef)();
  var confirmNewPassword = (0, _react.createRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var store = (0, _reactRedux.useStore)();

  var _updatePassword = function _updatePassword(args) {
    return (0, _user.updatePassword)(args)(store.dispatch, store.getState);
  };

  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user2.getUserInfo)(state);
  });
  var unlockToken = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user2.getUnlockToken)(state);
  });

  var submit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(event) {
      var $newPassword, $confirmNewPassword, err, res, result, _result;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $newPassword = newPassword.current;
              $confirmNewPassword = confirmNewPassword.current;

              if ($newPassword.value) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", $newPassword.focus());

            case 4:
              if ($confirmNewPassword.value) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", $confirmNewPassword.focus());

            case 6:
              if (!($newPassword.value != $confirmNewPassword.value)) {
                _context.next = 9;
                break;
              }

              alert('新密码两次输入不相同');
              return _context.abrupt("return");

            case 9:
              setLoading(true);
              _context.next = 12;
              return _updatePassword({
                new_password: $newPassword.value,
                unlock_token: unlockToken || ''
              });

            case 12:
              result = _context.sent;
              _result = _slicedToArray(result, 2);
              err = _result[0];
              res = _result[1];
              setLoading(false);

              if (res && res.success) {
                Toastify({
                  text: '密码修改成功',
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #18c31a, #14a22f)'
                }).showToast();
                $newPassword.value = '';
                $confirmNewPassword.value = '';
                setShow(false);
              } else {
                Toastify({
                  text: err,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              }

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleShow = function handleShow() {
    if (!unlockToken) {
      $('#unlock-token-modal').modal({
        show: true
      }, {
        complete: function complete(res) {
          if (res) setShow(true);
        }
      });
    } else {
      setShow(true);
    }
  };

  if (!me.phone && !me.email) return '';
  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u5BC6\u7801")), _react["default"].createElement("div", {
    className: "card-body"
  }, show && _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "form-group"
  }, _react["default"].createElement("input", {
    type: "password",
    className: "form-control",
    placeholder: "\u65B0\u5BC6\u7801",
    ref: newPassword
  })), _react["default"].createElement("div", {
    className: "form-group"
  }, _react["default"].createElement("input", {
    type: "password",
    className: "form-control",
    placeholder: "\u91CD\u590D\u65B0\u5BC6\u7801",
    ref: confirmNewPassword
  })), _react["default"].createElement("div", null, loading ? _react["default"].createElement("span", {
    className: "btn btn-outline-primary rounded-pill btn-sm"
  }, "\u63D0\u4EA4\u4E2D...") : _react["default"].createElement("span", {
    className: "btn btn-outline-primary rounded-pill btn-sm",
    onClick: submit
  }, "\u63D0\u4EA4"))), !show && _react["default"].createElement("div", {
    className: "d-flex justify-content-between"
  }, _react["default"].createElement("div", null, me.has_password ? '已设置' : '未设置'), _react["default"].createElement("span", {
    className: "btn btn-outline-primary rounded-pill btn-sm",
    onClick: handleShow
  }, me.has_password ? '修改' : '设置'))));
}

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _user2 = __webpack_require__(14);

var _phone = __webpack_require__(160);

var _captchaButton = _interopRequireDefault(__webpack_require__(133));

var _countriesSelect = _interopRequireDefault(__webpack_require__(146));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      areaCode = _useState2[0],
      setAreaCode = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var newPhone = (0, _react.createRef)();
  var captcha = (0, _react.createRef)();
  var store = (0, _reactRedux.useStore)();
  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  var unlockToken = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUnlockToken)(state);
  });

  var _loadUserInfo = function _loadUserInfo(args) {
    return (0, _user2.loadUserInfo)(args)(store.dispatch, store.getState);
  };

  var _addPhone = function _addPhone(args) {
    return (0, _phone.addPhone)(args)(store.dispatch, store.getState);
  };

  var submit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var $newPhone, $captcha, err, res, result, _result;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $newPhone = newPhone.current;
              $captcha = captcha.current;

              if ($newPhone.value) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", $newPhone.focus());

            case 4:
              if ($captcha.value) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", $captcha.focus());

            case 6:
              setLoading(true);
              _context.next = 9;
              return _addPhone({
                args: {
                  phone: $newPhone.value,
                  captcha: $captcha.value,
                  area_code: areaCode,
                  unlock_token: unlockToken || ''
                }
              });

            case 9:
              result = _context.sent;
              _result = _slicedToArray(result, 2);
              err = _result[0];
              res = _result[1];
              setLoading(false);

              if (res && res.success) {
                Toastify({
                  text: '手机号绑定成功',
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
                }).showToast();

                _loadUserInfo({});

                setShow(false);
              } else {
                Toastify({
                  text: err && err.message ? err.message : err,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              }

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submit() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleShow = function handleShow() {
    if (!unlockToken) {
      $('#unlock-token-modal').modal({
        show: true
      }, {
        complete: function complete(res) {
          if (res) setShow(true);
        }
      });
    } else {
      setShow(true);
    }
  };

  var sendCaptcha = function sendCaptcha(callback) {
    var $newPhone = newPhone.current;
    if (!$newPhone.value) return $newPhone.focus();
    callback({
      id: me.phone ? 'reset-phone' : 'binding-phone',
      args: {
        phone: $newPhone.value,
        area_code: areaCode,
        type: me.phone ? 'reset-phone' : 'binding-phone'
      },
      fields: "success"
    });
  };

  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header d-flex justify-content-between"
  }, _react["default"].createElement("span", {
    className: "card-title"
  }, "\u624B\u673A\u53F7"), _react["default"].createElement("span", null)), _react["default"].createElement("div", {
    className: "card-body"
  }, function () {
    if (!me.phone) {
      return _react["default"].createElement("div", {
        className: "d-flex justify-content-between"
      }, _react["default"].createElement("div", null, "\u672A\u7ED1\u5B9A"), _react["default"].createElement("span", {
        className: "btn btn-outline-primary rounded-pill btn-sm",
        onClick: function onClick() {
          $('#binding-phone').modal({
            show: true
          }, {});
        }
      }, "\u7ED1\u5B9A"));
    } else if (show) {
      return _react["default"].createElement("div", null, _react["default"].createElement("form", null, _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", {
        htmlFor: "exampleInputEmail1"
      }, "\u624B\u673A\u53F7"), _react["default"].createElement("div", {
        className: "row"
      }, _react["default"].createElement("div", {
        className: "col-3"
      }, _react["default"].createElement(_countriesSelect["default"], {
        onChange: function onChange(areaCode) {
          setAreaCode(areaCode);
        }
      })), _react["default"].createElement("div", {
        className: "col-9 pl-0"
      }, _react["default"].createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "\u8BF7\u8F93\u5165\u65B0\u7684\u624B\u673A\u53F7",
        ref: newPhone
      })))), _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("label", {
        htmlFor: "exampleInputEmail1"
      }, "\u9A8C\u8BC1\u7801"), _react["default"].createElement("input", {
        className: "form-control",
        type: "text",
        placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
        ref: captcha
      }), _react["default"].createElement("div", null, _react["default"].createElement(_captchaButton["default"], {
        onClick: sendCaptcha
      }))), _react["default"].createElement("div", {
        className: "form-group"
      }, loading ? _react["default"].createElement("span", {
        className: "btn btn-outline-primary rounded-pill btn-sm"
      }, "\u63D0\u4EA4\u4E2D...") : _react["default"].createElement("span", {
        className: "btn btn-outline-primary rounded-pill btn-sm",
        onClick: submit
      }, "\u63D0\u4EA4"))));
    } else if (!show) {
      return _react["default"].createElement("div", {
        className: "d-flex justify-content-between"
      }, _react["default"].createElement("div", null, me.phone ? me.phone : null), _react["default"].createElement("span", {
        className: "btn btn-outline-primary rounded-pill btn-sm",
        onClick: handleShow
      }, "\u4FEE\u6539"));
    }
  }())));
}

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default() {
  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u5C4F\u853D\u7BA1\u7406")), _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement("div", {
    className: "row"
  }, _react["default"].createElement("div", {
    className: "col-4"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/block/posts"
  }, "\u5C4F\u853D", me.block_posts_count, "\u4E2A\u8BDD\u9898")), _react["default"].createElement("div", {
    className: "col-4"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/block/peoples"
  }, "\u5C4F\u853D", me.block_people_count, "\u4F4D\u7528\u6237")), _react["default"].createElement("div", {
    className: "col-4"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/block/comments"
  }, "\u5C4F\u853D", me.block_comment_count, "\u6761\u8BC4\u8BBA")))));
}

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var globalData = _interopRequireWildcard(__webpack_require__(12));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _user2 = __webpack_require__(14);

var _theme = _interopRequireDefault(__webpack_require__(288));

var _light = _interopRequireDefault(__webpack_require__(289));

var _dark = _interopRequireDefault(__webpack_require__(290));

var _lightAndDark = _interopRequireDefault(__webpack_require__(291));

__webpack_require__(292);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default() {
  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  var store = (0, _reactRedux.useStore)();

  var _updateUser = function _updateUser(args) {
    return (0, _user2.updateUser)(args)(store.dispatch, store.getState);
  };

  var _loadUserInfo = function _loadUserInfo(args) {
    return (0, _user2.loadUserInfo)(args)(store.dispatch, store.getState);
  };

  var onChange =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(theme) {
      var err, res, result, _result;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _updateUser({
                theme: theme
              });

            case 2:
              result = _context.sent;
              _result = _slicedToArray(result, 2);
              err = _result[0];
              res = _result[1];

              if (err) {
                $.toast({
                  text: err.message,
                  position: 'top-center',
                  showHideTransition: 'slide',
                  icon: 'error',
                  loader: false,
                  allowToastClose: false
                });
              } else {
                _loadUserInfo({});

                (0, _theme["default"])({
                  theme: theme
                });
                globalData.get('service-worker').uninstall();
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u5916\u89C2")), _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement("span", {
    className: ((me.theme == 0 ? 'bg-primary' : 'a') ? (me.theme == 0 ? 'bg-primary' : 'a') + " " : "") + "_2N9YY",
    onClick: function onClick() {
      return onChange(0);
    }
  }, _react["default"].createElement("img", {
    src: _lightAndDark["default"]
  }), _react["default"].createElement("br", null), "\u81EA\u52A8\u6A21\u5F0F"), _react["default"].createElement("span", {
    className: ((me.theme == 1 ? 'bg-primary' : 'a') ? (me.theme == 1 ? 'bg-primary' : 'a') + " " : "") + "_2N9YY",
    onClick: function onClick() {
      return onChange(1);
    }
  }, _react["default"].createElement("img", {
    src: _light["default"]
  }), _react["default"].createElement("br", null), "\u6D45\u8272\u6A21\u5F0F"), _react["default"].createElement("span", {
    className: ((me.theme == 2 ? 'bg-primary' : 'a') ? (me.theme == 2 ? 'bg-primary' : 'a') + " " : "") + "_2N9YY",
    onClick: function onClick() {
      return onChange(2);
    }
  }, _react["default"].createElement("img", {
    src: _dark["default"]
  }), _react["default"].createElement("br", null), "\u6697\u8272\u6A21\u5F0F"), _react["default"].createElement("div", {
    className: "mt-2 text-muted"
  }, _react["default"].createElement("small", null, "\u81EA\u52A8\u6A21\u5F0F\u65F6\u95F4\u8303\u56F4\uFF0C\u65E9\u4E0A7\u70B9 - \u665A\u4E0A8\u70B9\u4E3A\u6D45\u8272\u6A21\u5F0F\uFF0C\u665A\u4E0A9\u70B9 - \u65E9\u4E0A6\u70B9\u6697\u8272\u6A21\u5F0F"))));
}

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _sunriseSunsetJs = __webpack_require__(110);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default(_x) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(userinfo) {
    var night, res, darkTime, hours, theme;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            night = false;

            if (!userinfo || userinfo && userinfo.theme == 0) {
              /*
              try {
                res = await getLocation();
              } catch(err) {
                console.log(err);
              }
              */
              if (res && res.latitude && res.longitude) {
                // 日落后的2.5个小时，启动夜间主题
                darkTime = new Date((0, _sunriseSunsetJs.getSunset)(res.latitude, res.longitude)).getTime() + 1000 * 60 * 2.5;

                if (new Date().getTime() > darkTime) {
                  night = true;
                }
              } else {
                hours = new Date().getHours(); // console.log(hours);

                if (hours >= 21 || hours <= 6) {
                  night = true;
                }
              }
            }

            if (userinfo) {
              theme = 'light-theme';

              if (userinfo.theme == 0) {
                theme = night ? 'dark-theme' : 'light-theme';
              } else if (userinfo.theme == 2) {
                theme = 'dark-theme';
              }

              $('html').attr('id', theme);
            } else {
              $('html').attr('id', night ? 'dark-theme' : 'light-theme');
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABYCAYAAAA+yDPkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNjg4MTYxZC1mM2IzLTQ2MTktOWRiYi0zM2Y0MmU0YjYyMGMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDc2MTdFNjVFMkMwMTFFOUI5ODU5NDU4REE4NzRDREIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDc2MTdFNjRFMkMwMTFFOUI5ODU5NDU4REE4NzRDREIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NWM5Yzc5ODYtODZhYi00YmFjLWIxYWUtN2E3ZjMxNDQ2MmRkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmI2ODgxNjFkLWYzYjMtNDYxOS05ZGJiLTMzZjQyZTRiNjIwYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlSevXQAAAPMSURBVHja7J3fatNQHMdP0rRNm271QuaNzAsR3PYSzgfwUp0gXnkneCEieOfVEBHfQPxzMSaCb7A9hE6vpkO9KYXS2aVb0/zx98sSmGszE9qeNsn3A9+Vdhk5PZ+dk5PTk0ZrNFviDBYpdyirlBXKAqUowDSxKQ3KN8oWZZPyPWpjJUIwi31OuUlRUaczjUv5SHlC2Tv9y2HyblC+UG5DbipQg4b4mXL3f4IfUj5R5lBvqaNGeUt5FCX4FuUVWm2qUSgvTrbk8BjMx9yd4L8ApB+TcpXyO2yt65CbKQzKs7AFX6LHXUoB9ZIpHMoVNTj2Qm72YKdrGv24nvhIrii5qSXP89Jc/FUWvBJ366KmiVqt4j/mBdtxhGkeip7Vj9xGL5dEtaoLrTDZjtC2qSzds8tyimXuos/HlXuuPpcruQxLq8/XRLlUjJQ7P2dMXK5fFu24LKVi7NniBRasxxqWGbrIUc88OItgVIfXS7UyhbLE3qcWe1Ijby13YMRSUIWqqgNjEX5delm0+L1F7NIpeW6+YR2ksByYlsw4EAzBAIIBBIPxkWRyDYJHqmhPOI4jfb+2Y0OwLA66R/L3aR7G3laDotHo9SzRppZsVHR/AkKZWG8h/N6C56L7fRuCZWJZfT8YZAEIBhAMIBhgkDVG+EN//lx40h8dOo5Lp0jdJCs60IJHpaKX/RUdMj4X5n34KzpKRQiWBa/Fkk0twSoSCB4Bf0WHKr8KtUms6AAYRQMIBhAMIBhAMIBgCAYQDCAYQDCAYADB+cGDYEkV7S98d6Xv17EdCJYFr1OWDRa+S+SoZ/mPMr+Exer3IVi25FA0BlkAggEEAwgGGGSNiXK55C9lxcL3DMJXNdSx8D27GFj4nm0KBflftY2F7wCCIRhAMIBgAMEAggEEAwiGYADBAIIBBAMIBhAMIBhAMAQfk/IbJY8FT3gzUo4JCLYS3Agii/B1Qa47WLX2FG6rk/Tqwl6cDfku2HltxfyuO2Z3eL3M9m11bBbcjLUl/ae22h1/TW5eRPP75Cv52vS+o25lw7fV2e+YUloy9yL7fw6SXF3Y5IXvO5SLsboG53gHYFBybzavLvzKLXgbijLLFgvepLioi8zBx4wNFrxH+YD6yBzvKD+URrPFTxa5v6YYqJdMYFKWKL/C8+CflPsJz6HB7PKA5YbnwSEblMeQnHqeUt6ET07PZL2k3ONzadRT6ugG7tZPvjhsqvI9ZZnyGqPrVOAGLXYpGFj9QzjIiuIyZY1yjbJCucB/gzqdKnwIbQSD4u3g0LobtfFfAQYAxRAcIzGypXQAAAAASUVORK5CYII="

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABYCAYAAAA+yDPkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNjg4MTYxZC1mM2IzLTQ2MTktOWRiYi0zM2Y0MmU0YjYyMGMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTlBRDFENkFFMkJBMTFFOUI5ODU5NDU4REE4NzRDREIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTlBRDFENjlFMkJBMTFFOUI5ODU5NDU4REE4NzRDREIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NWM5Yzc5ODYtODZhYi00YmFjLWIxYWUtN2E3ZjMxNDQ2MmRkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmI2ODgxNjFkLWYzYjMtNDYxOS05ZGJiLTMzZjQyZTRiNjIwYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmxuCHQAAAPXSURBVHja7J1PbxJBHIaHZSFY/ihsSyuxtYlpounRL2C9ePNqalJvxouJh578It6MiZdGj5682H4K9VQ1tpaWAk1K+SMU8PcjW626lNnADuzs+yQvJMvS3c7DLDPD7G5IXMwC5SFlhbJMyVIiAoyTU8oB5TNlk/KG8sXtH2GxG5Q2pYtMdNq25EVZufcpxyg436VCWRsk9xlqra/Toaz3k/vAXgEF5X/Jv2ty6Nx37kdKAm0YLahSblJ2w/aCF5TbKBdtiFKuUN5xDb5O2aaEUS5awW2pJcP+7oVc/WCnqyY93HX7TsMwzn1960xXdDodP/8DK2xph3JNZu1YLCYsK9t7DgrN5k9RKhVFrVbtu04ikRLpdEZEo1HP96VcLolq9UT2LXssuM7uZOTmcvMiFAqJILK/v+dYsMlkSmSzc0r3JZ/fpQ9cTWpY05CRy2Qy04GVy1jWjOPydNpSvi+ZzIzsqqYhu2YsdinQLZZIJCLCYfOvZfyB5+XK+0AuvgqkBQe59v4pg8koEzfbNQTQGgiGYADBAIJ1pNvtTvx2IXjIgm61msq3yyNaEKwIHsZUTbF4KL2uCUXDwcOX+fyP3lh0JBIVXnWN+ajcbDbF0VFJNBp1CFYJ/xBx0Y8RaGQBCAYQDCA4eKCRNQISiaSwrGlhmt7+dMh9bu6WuZjRgRo8LKnUZTE7e9VzuQx3w+bmcmJqKg7BquD+r2r4aAHBCuAf3lXUXKeaDMGKBE/6diEY3SQAwQCCAQQDCAYQDCAYggEEAwgGEOxvMPE9AIJbrZby7fL0WQhWBM9TVk25jInvyqhUjns1mS/l4OVFWM5Ok+GLsEhenwOCR8XJSaUXNLIABAMIBhAM0MgaIfF4onehNK+vmYWJ72OAL2XIk9FVXBANE9/HACa+a46bSejj2CYE+xBMfAcQDMEAggEEAwgGEAwgGEAwBAMIBhAMIBhAMIBgAMFAWrDPb5Q8EsZ1NuEw+yEtuF6vBVou38qm3W47LB/HbXXcnV0odROecrkY2FrMNaZYLDi+NuFnF56G6eEJJTVoTf708nxc0zR7CcLtZlks38KmUNin50bf2sTzlfnMwn/vLzzqfeHtHB4W3Nzh5YAtvafcQ3NESz7wIXoL5aAtm1yDFynb6DJpB7cIl1jqN8pblId2vKZ8PWspLVA+UeIoFy3gVtgtys7ZYfk75TE31lA2WvCU5Tq9sE7p2KIRf+b5IPtrlAoKynfhw/Ij2So+T3lpt8RQeJMddvTKbkf9x6DhqBuUVcodyjJlVuI9wOMBNh6hshvFPIaxYXdzHfklwAA0OwslQH101QAAAABJRU5ErkJggg=="

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABYCAYAAAA+yDPkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNjg4MTYxZC1mM2IzLTQ2MTktOWRiYi0zM2Y0MmU0YjYyMGMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDc2MTdFNjlFMkMwMTFFOUI5ODU5NDU4REE4NzRDREIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDc2MTdFNjhFMkMwMTFFOUI5ODU5NDU4REE4NzRDREIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NWM5Yzc5ODYtODZhYi00YmFjLWIxYWUtN2E3ZjMxNDQ2MmRkIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmI2ODgxNjFkLWYzYjMtNDYxOS05ZGJiLTMzZjQyZTRiNjIwYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjS5LnIAAAQZSURBVHja7J1NbxJBHMZnYaEvvFSglFYbTdN4sPVDWC/ePKo1MZ68mXgwpokX46kxxnj0Yowvh6bGxKsX64fQ9FZtNKZpga2RQisU8P+nkCAu7dJ2B2b2+SVPUDpkYX7M7swwu2uspy2xD6cp1ykzlPOUEYopFCaVjAvF2aVsUJYpS5RFytd2hY02glnsI8oVik9ohAaCW6lQ3lHmKKutf7STd5nyhXJNN7ma4qs3xM+UGwcJvkN5T4mg3pQjTHlFudtO8FXKU7RapTEoj5tbsq/pmPu8XgCoL/kZZbxZ8Hy9iQM9CFEeNnrRZ+hxheL3wifXsBfdjjLlrK9+7PXjS68d7HSWJy0udryTN9Q9VPt8nXyXq6JSqagseYYFTzstHTBNEQ4P1B5VZWJisqPyxeIfkc1mRKGQbz8+CUdFLBYXwWDQ1ffO78WysiKf33L6kineRQ87lXtiKKK03MMQDPaJsbFTIhSy74NGIlGRSo26LrfxXkZHT4rBwUGnLxlhwf2OumWhfmF4eBCVSCRtn4/FEtLfSzyedFrUdDyp4bWW+9/nDwSE32/+1xfh5+XvVZzvLRwLNgzMgbRWQbfqpJPtYlpScyAYggEEAwjWkWq12vPbheAjVnSpVJS+XZ7RgmBJ8DSmbDKZtOOyJhQdDZ4XXlv7WZuLDgSCrs328V65WCyKzc2s2NnZhmCZ8A8R+/0YgU4WgGAAwQCCvQc6WcdAOBwRicSwME13fzrkMTcPyzpY0YEWfFSi0SGRSo25LpfhYdjeio4QBMuCx7+y4b0FBEuAf3iX0XLtWjIESxLc69uFYAyTAAQDCAYQDCAYQDCAYAgGEAwgGECw2mDhuwcEl0ol6dvl5bMQLAlepywby8LCd2nkcr9rLZkv5eDmdToap8nwRVgKhQIEy2RrK1cLOlkAggEEAwgG6GQdI3wVPL5QmtvXzMLC9y7AlzLkxegyLoiGhe9dAAvfNaeTRejd2CYEKwgWvgMIhmAAwQCCAQQDCAYQDCAYggEEAwgGEAwgGEAwgGDgWHC3zqTrJXqlDlw5u7BY2vW0XL6VTblctnm+G7fV6ezsQkc34cnntz3bivlzZzIbtn/r8bMLd3ldNJceP7AkfXutXzkRDg2IYMD0xO1mWSzfwsayMvS4Y1umcdLZ3i3e+1x9L4c4uzBtrKetD/SPS15pjalkXHiIj7yL/oS+prYsseBFSgV1oR3cI1xgwauUt6gP7XhN+dYYJs1xRxl1og3s8kHzOPg75RZ31lA3WnCb8qNZMLNAuQfJynOf8rLxn9aZrCeUmzy8Qz0pR6Hubr75SbupyjeUKcoL9K6VoFJvsefqHat/4ImO/V48SZmlXKBM8zwBv0bl2tBgooMPoeuUZbE3h8GH1pV2hf8KMAAAyBrBp/tGGwAAAABJRU5ErkJggg=="

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "_2N9YY"
};

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _user2 = __webpack_require__(14);

var _qiniuUploadImage = _interopRequireDefault(__webpack_require__(149));

__webpack_require__(294);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      fileUpload = _useState2[0],
      setFileUpload = _useState2[1];

  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  if (!me) return null;
  var store = (0, _reactRedux.useStore)();

  var _loadUserInfo = function _loadUserInfo(params) {
    return (0, _user2.loadUserInfo)(params)(store.dispatch, store.getState);
  };

  var _updateUser = function _updateUser(params) {
    return (0, _user2.updateUser)(params)(store.dispatch, store.getState);
  };

  var upload =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(url) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _updateUser({
                user_cover: url
              });

            case 2:
              _loadUserInfo({}); // avatarPicker({
              //   img: url,
              //   selectAreaScale: 0.9,
              //   previews: [],
              //   imgLoadComplete: function() {},
              //   done: async function(p: any){
              //     let avatar = url + "?imageMogr2/crop/!"+parseInt(p.width)+"x"+parseInt(p.height)+"a"+parseInt(p.x)+"a"+parseInt(p.y)+"/thumbnail/!200"
              //     await _updateUser({ avatar: avatar });
              //     _loadUserInfo({});
              //   }
              // })


            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function upload(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    setFileUpload(_react["default"].createElement(_qiniuUploadImage["default"], {
      upload: upload,
      text: '上传封面'
    }));
  }, []);
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u5C01\u9762")), _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement("div", {
    className: "_2-TNZ",
    style: me.user_cover ? {
      backgroundImage: "url('".concat(me.user_cover, "')")
    } : null
  }), _react["default"].createElement("div", {
    className: "_2-RiN"
  }, fileUpload))));
}

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"avatar": "_1XNUE",
	"upload": "_2-RiN",
	"cover": "_2-TNZ"
};

/***/ })

};;