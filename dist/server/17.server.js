exports.ids = [17];
exports.modules = {

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _shell = _interopRequireDefault(__webpack_require__(117));

var _meta = _interopRequireDefault(__webpack_require__(118));

var _resetPassword = _interopRequireDefault(__webpack_require__(269));

var _singleColumns = _interopRequireDefault(__webpack_require__(120));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// components
var _default = (0, _shell["default"])(function () {
  return _react["default"].createElement(_singleColumns["default"], null, _react["default"].createElement(_meta["default"], {
    title: "\u5FD8\u8BB0\u5BC6\u7801"
  }), _react["default"].createElement(_resetPassword["default"], null));
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

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _useReactRouter = _interopRequireDefault(__webpack_require__(19));

var _reactRedux = __webpack_require__(7);

var _forgot2 = __webpack_require__(270);

var _captchaButton = _interopRequireDefault(__webpack_require__(133));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default() {
  var _userReactRouter = (0, _useReactRouter["default"])(),
      history = _userReactRouter.history,
      location = _userReactRouter.location,
      match = _userReactRouter.match;

  var account = (0, _react.createRef)(),
      captcha = (0, _react.createRef)(),
      newPassword = (0, _react.createRef)(),
      confirmNewPassword = (0, _react.createRef)();
  var store = (0, _reactRedux.useStore)();

  var _forgot = function _forgot(params) {
    return (0, _forgot2.forgot)(params)(store.dispatch, store.getState);
  };

  var submit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(event) {
      var $account, $captcha, $newPassword, $confirmNewPassword, args, _ref2, _ref3, err, res;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              $account = account.current;
              $captcha = captcha.current;
              $newPassword = newPassword.current;
              $confirmNewPassword = confirmNewPassword.current;

              if ($account.value) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", $account.focus());

            case 7:
              if ($captcha.value) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", $captcha.focus());

            case 9:
              if ($newPassword.value) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", $newPassword.focus());

            case 11:
              if ($confirmNewPassword.value) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return", $confirmNewPassword.focus());

            case 13:
              if (!($newPassword.value != $confirmNewPassword.value)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", alert('两次密码输入不一致'));

            case 15:
              args = {
                captcha: $captcha.value,
                new_password: $newPassword.value
              };

              if ($account.value.indexOf('@') != -1) {
                args.email = $account.value;
              } else {
                args.phone = $account.value;
              }

              _context.next = 19;
              return _forgot({
                args: args
              });

            case 19:
              _ref2 = _context.sent;
              _ref3 = _slicedToArray(_ref2, 2);
              err = _ref3[0];
              res = _ref3[1];

              if (err) {
                Toastify({
                  text: err.message,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              } else if (res && res.success) {
                Toastify({
                  text: '修改成功，请登陆',
                  duration: 7000,
                  backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
                }).showToast();
                history.push("/");
                setTimeout(function () {
                  $('#sign').modal({
                    show: true
                  }, {
                    'data-type': 'sign-in'
                  });
                }, 500);
              }

              return _context.abrupt("return", false);

            case 25:
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

  var sendCaptcha = function sendCaptcha(callback) {
    var $account = account.current;
    if (!$account.value) return $account.focus();
    var params = {
      type: 'forgot'
    };

    if ($account.value.indexOf('@') != -1) {
      params.email = $account.value;
    } else {
      params.phone = $account.value;
    }

    callback({
      args: params
    });
  };

  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, "\u91CD\u7F6E\u5BC6\u7801")), _react["default"].createElement("form", {
    onSubmit: submit
  }, _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement("div", {
    className: "form-group"
  }, _react["default"].createElement("label", {
    className: "text-secondary"
  }, "\u5FD8\u8BB0\u5BC6\u7801\u4E86\uFF1F\u586B\u5199\u5982\u4E0B\u8868\u5355\uFF0C\u91CD\u7F6E\u4F60\u8D26\u53F7\u7684\u5BC6\u7801\u3002"), _react["default"].createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "\u4F60\u7684\u8D26\u53F7\u7684\u624B\u673A\u53F7\u6216\u90AE\u7BB1",
    ref: account
  })), _react["default"].createElement("div", {
    className: "form-group"
  }, _react["default"].createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "\u9A8C\u8BC1\u7801",
    ref: captcha
  }), _react["default"].createElement(_captchaButton["default"], {
    onClick: sendCaptcha
  })), _react["default"].createElement("div", {
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
  }))), _react["default"].createElement("div", {
    className: "card-footer text-right"
  }, _react["default"].createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "\u63D0\u4EA4"))));
}

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forgot = void 0;

var _graphql = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var forgot = function forgot(_ref) {
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
                    api: 'forgot',
                    args: args,
                    fields: "success"
                  }]
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

exports.forgot = forgot;

/***/ })

};;