exports.ids = [11];
exports.modules = {

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

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? '' : _ref$id,
      _ref$header = _ref.header,
      header = _ref$header === void 0 ? null : _ref$header,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$body = _ref.body,
      body = _ref$body === void 0 ? '' : _ref$body,
      _ref$footer = _ref.footer,
      footer = _ref$footer === void 0 ? '' : _ref$footer,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? '' : _ref$position,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '' : _ref$size;
  var className = 'modal-dialog';

  if (!position) {
    className += ' modal-dialog-centered';
  } else if (position == 'top') {}

  if (size) {
    className += ' modal-lg';
  }

  return _react["default"].createElement("div", {
    className: "modal fade",
    id: id,
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true"
  }, _react["default"].createElement("div", {
    className: className,
    role: "document"
  }, _react["default"].createElement("div", {
    className: "modal-content"
  }, title ? _react["default"].createElement("div", {
    className: "modal-header"
  }, title, _react["default"].createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, _react["default"].createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))) : null, header && _react["default"].createElement("div", {
    className: "modal-header",
    style: {
      border: 'none',
      paddingBottom: '0px'
    }
  }, _react["default"].createElement("div", null, header), _react["default"].createElement("div", null, _react["default"].createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, _react["default"].createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")))), _react["default"].createElement("div", {
    className: "modal-body"
  }, body), footer ? _react["default"].createElement("div", {
    className: "modal-footer"
  }, footer) : null)));
};

exports["default"] = _default;

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addComment = addComment;
exports.loadMoreReply = loadMoreReply;
exports.updateComment = updateComment;
exports.removeCommnetListById = exports.loadCommentList = void 0;

var _date = __webpack_require__(13);

var _graphql = _interopRequireDefault(__webpack_require__(2));

var _newGraphqlLoadList = _interopRequireDefault(__webpack_require__(20));

var _device = _interopRequireDefault(__webpack_require__(125));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import storage from '../../common/storage';
// import To from '../../common/to';
var abstractImages = function abstractImages(str) {
  var imgReg = /<img(?:(?:".*?")|(?:'.*?')|(?:[^>]*?))*>/gi;
  var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
  var result = [];
  var img;

  while (img = imgReg.exec(str)) {
    var _img = img[0].match(srcReg);

    if (_img && _img[1]) {
      _img = _img[1] + '?imageView2/2/w/800/auto-orient/format/jpg';
      result.push(_img);
    }
  }

  return result;
};

var processCommentList = function processCommentList(list) {
  list.map(function (item) {
    if (item.device) {
      item._device = _device["default"].getNameByDeviceId(item.device);
    }

    if (item.create_at) item._create_at = (0, _date.dateDiff)(item.create_at);
    if (item.update_at) item._update_at = (0, _date.dateDiff)(item.update_at);
    item.images = abstractImages(item.content_html);

    if (item.images && item.images.length > 0) {
      item._coverImage = item.images[0].split('?')[0] + '?imageView2/2/w/300/auto-orient/format/jpg';
    }

    if (item.content_html) {
      // let text = item.content_html.replace(/<[^>]+>/g,"");
      var textContent = item.content_html;
      textContent = textContent.replace(/<[^>]+>/g, '');
      textContent = textContent.replace(/\r\n/g, '');
      textContent = textContent.replace(/\n/g, ' ');
      if (textContent.length > 137) textContent = textContent.slice(0, 137) + '...';
      item.content_summary = textContent;
    } else {
      item.content_summary = '';
    }

    if (item.posts_id && item.posts_id.content_html) {
      var _textContent = item.posts_id.content_html; // let preReg = /<pre>(.*?)<\/pre>/g;
      // console.log(textContent.replace(/<pre>(.*?)<\/pre>/gi, ""))
      // let pres = [];
      // let pre;
      // while (pre = preReg.exec(textContent)) {
      //   console.log('pre');
      //   pres.push(pre[0]);
      // }
      // pres.map(item=>{
      //   textContent = textContent.replace(item, '[代码]');
      // });
      // textContent = textContent.replace(/<pre>(.*?)<\/pre>/gi, '[代码]');
      // console.log(textContent);

      _textContent = _textContent.replace(/<[^>]+>/g, '');
      _textContent = _textContent.replace(/\r\n/g, '');
      _textContent = _textContent.replace(/\n/g, ''); // let text = item.posts_id.content_html.replace(/<[^>]+>/g,"");

      if (_textContent.length > 120) _textContent = _textContent.slice(0, 120) + '...';
      item.posts_id.content_summary = _textContent;
    }

    if (item.reply && item.reply.map) {
      item.reply = processCommentList(item.reply);
    }
  });
  return list;
};

function addComment(_ref) {
  var posts_id = _ref.posts_id,
      parent_id = _ref.parent_id,
      reply_id = _ref.reply_id,
      contentJSON = _ref.contentJSON,
      contentHTML = _ref.contentHTML,
      deviceId = _ref.deviceId,
      forward = _ref.forward;
  return function (dispatch, getState) {
    var accessToken = getState().user.accessToken;
    var commentState = getState().comment;
    var postsState = getState().posts;
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve) {
        var err, res, _ref3, _ref4, result, _result, newComment, i, _i2;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _graphql["default"])({
                  type: 'mutation',
                  apis: [{
                    api: 'addComment',
                    args: {
                      posts_id: posts_id,
                      parent_id: parent_id,
                      reply_id: reply_id,
                      content: contentJSON,
                      content_html: contentHTML,
                      device: deviceId,
                      forward: forward
                    },
                    fields: "\n          success\n          _id\n          "
                  }],
                  headers: {
                    accessToken: accessToken
                  }
                });

              case 2:
                _ref3 = _context.sent;
                _ref4 = _slicedToArray(_ref3, 2);
                err = _ref4[0];
                res = _ref4[1];
                resolve([err, res]);

                if (!(!res || !res.success)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return");

              case 9:
                _context.next = 11;
                return loadCommentList({
                  id: 'cache',
                  args: {
                    _id: res._id
                  },
                  restart: true
                })(dispatch, getState);

              case 11:
                result = _context.sent;
                _result = _slicedToArray(result, 2);
                err = _result[0];
                res = _result[1];
                newComment = res.data[0];

                for (i in commentState) {
                  // 添加评论
                  if (i == posts_id) {
                    if (!newComment.parent_id) {
                      // 评论
                      commentState[i].data.push(newComment);
                    } else {
                      // 回复
                      commentState[i].data.map(function (item) {
                        if (item._id == newComment.parent_id) {
                          item.reply.push(newComment);
                        }
                      });
                    }
                  } else if (i == parent_id) {
                    commentState[i].data.push(newComment);
                  }
                }

                dispatch({
                  type: 'SET_COMMENT',
                  state: commentState
                }); // 如果是评论，那么对该评论的帖子，评论累计数+1

                if (!parent_id) {
                  for (_i2 in postsState) {
                    postsState[_i2].data.map(function (posts) {
                      if (posts._id == posts_id) {
                        posts.comment_count = posts.comment_count ? posts.comment_count + 1 : 1;
                      }
                    });
                  }

                  dispatch({
                    type: 'SET_POSTS',
                    state: postsState
                  });
                }

              case 19:
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

var loadCommentList = (0, _newGraphqlLoadList["default"])({
  reducerName: 'comment',
  actionType: 'SET_COMMENT_LIST_BY_ID',
  api: 'comments',
  fields: "\n    content_html\n    create_at\n    reply_count\n    like_count\n    device\n    ip\n    blocked\n    deleted\n    verify\n    weaken\n    recommend\n    _id\n    update_at\n    like\n    user_id {\n      _id\n      nickname\n      brief\n      avatar_url\n    }\n    posts_id{\n      _id\n      title\n    }\n    parent_id\n    reply_id {\n      _id\n      user_id{\n        _id\n        nickname\n        brief\n        avatar_url\n      }\n    }\n    reply {\n      _id\n      user_id {\n        _id\n        nickname\n        brief\n        avatar\n        avatar_url\n      }\n      posts_id\n      parent_id\n      reply_id {\n        user_id {\n          _id\n          nickname\n          brief\n          avatar\n          avatar_url\n        }\n      }\n      update_at\n      weaken\n      device\n      like_count\n      create_at\n      content_html\n      like\n    }\n  ",
  processList: processCommentList
});
exports.loadCommentList = loadCommentList;

function loadMoreReply(_ref5) {
  var postsId = _ref5.postsId,
      commentId = _ref5.commentId;
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(resolve, reject) {
        var commentList, index, comment, err, res, result, _result2;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commentList = getState().comment[postsId];
                index = 0;
                comment = null;
                commentList.data.map(function (item, key) {
                  if (item._id == commentId) {
                    comment = item;
                    index = key;
                  }
                });
                _context2.next = 6;
                return loadCommentList({
                  id: 'new-reply',
                  args: {
                    parent_id: comment._id,
                    page_size: 10,
                    deleted: false,
                    weaken: false,
                    start_create_at: comment.reply[comment.reply.length - 1].create_at
                  },
                  restart: true
                })(dispatch, getState);

              case 6:
                result = _context2.sent;
                _result2 = _slicedToArray(result, 2);
                err = _result2[0];
                res = _result2[1];

                if (!err) {
                  _context2.next = 13;
                  break;
                }

                resolve();
                return _context2.abrupt("return");

              case 13:
                res.data.map(function (item) {
                  comment.reply.push(item);
                });
                commentList.data[index] = comment;
                dispatch({
                  type: 'SET_COMMENT_LIST_BY_ID',
                  name: postsId,
                  data: commentList
                });
                resolve();

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref6.apply(this, arguments);
      };
    }());
  };
}

function updateComment(filters) {
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(resolve) {
        var _ref8, _ref9, err, res, _id;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _graphql["default"])({
                  type: 'mutation',
                  apis: [{
                    api: 'updateComment',
                    args: JSON.parse(JSON.stringify(filters)),
                    fields: "success"
                  }],
                  headers: {
                    accessToken: getState().user.accessToken
                  }
                });

              case 2:
                _ref8 = _context3.sent;
                _ref9 = _slicedToArray(_ref8, 2);
                err = _ref9[0];
                res = _ref9[1];

                if (!err) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", resolve([err]));

              case 8:
                _id = filters._id;
                delete filters._id;

                if (filters.content_html) {
                  filters.content_html = decodeURIComponent(filters.content_html);
                }

                dispatch({
                  type: 'UPDATE_COMMENT',
                  id: _id,
                  update: processCommentList([filters])[0]
                });
                resolve([null]);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4) {
        return _ref7.apply(this, arguments);
      };
    }());
  };
}

var removeCommnetListById = function removeCommnetListById(_ref10) {
  var id = _ref10.id;
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref11 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(resolve) {
        var comentState;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                comentState = getState().comment;

                if (comentState[id]) {
                  delete comentState[id];
                }

                dispatch({
                  type: 'SET_COMMENT',
                  state: comentState
                });

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x5) {
        return _ref11.apply(this, arguments);
      };
    }());
  };
};

exports.removeCommnetListById = removeCommnetListById;

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

/***/ 159:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "_2RtMV",
	"footer": "_1VRJu"
};

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

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _config = __webpack_require__(1);

var _signIn = _interopRequireDefault(__webpack_require__(176));

var _signUp = _interopRequireDefault(__webpack_require__(178));

var _modal = _interopRequireDefault(__webpack_require__(137));

var _weixin = _interopRequireDefault(__webpack_require__(144));

__webpack_require__(180);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var _useState = (0, _react.useState)('sign-in'),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var socialLength = 0;

  for (var i in _config.social) {
    if (_config.social[i]) socialLength++;
  }

  var displayComponent = function displayComponent() {
    setType(type == 'sign-up' ? 'sign-in' : 'sign-up');
  };

  (0, _react.useEffect)(function () {
    $('#sign').on('show.bs.modal', function (e) {
      var type = 'sign-in';

      if (e.relatedTarget) {
        type = e.relatedTarget['data-type'] || e.relatedTarget.getAttribute('data-type') || 'sign-in';
      }

      setType(type);
    });
  });

  var body = _react["default"].createElement("div", {
    className: "_3DiEH"
  }, type == 'sign-in' ? _react["default"].createElement("div", null, _react["default"].createElement(_signIn["default"], {
    displayComponent: displayComponent
  }), _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/forgot",
    className: "text-primary",
    onClick: function onClick() {
      $('#sign').modal('hide');
    }
  }, "\u5FD8\u8BB0\u5BC6\u7801\u4E86\uFF1F"))) : null, type == 'sign-up' ? _react["default"].createElement("div", null, _react["default"].createElement(_signUp["default"], {
    displayComponent: displayComponent
  })) : null, _react["default"].createElement("div", {
    className: "_23uUq"
  }, _react["default"].createElement("span", null, "\u4F7F\u7528\u5176\u4ED6\u65B9\u5F0F\u767B\u5F55")), _react["default"].createElement("div", {
    className: "row _1Ca6c"
  }, _config.social.wechat ? _react["default"].createElement("div", {
    className: "col-".concat(12 / socialLength)
  }, _react["default"].createElement("span", {
    className: "a _1QooQ",
    onClick: function onClick() {
      window.location.href = "".concat(_config.api.domain, "/oauth/wechat").concat(_weixin["default"]["in"] ? '' : '-pc');
    }
  }, "\u5FAE\u4FE1")) : null, _config.social.github ? _react["default"].createElement("div", {
    className: "col-".concat(12 / socialLength)
  }, _react["default"].createElement("a", {
    href: "".concat(_config.api.domain, "/oauth/github"),
    className: "text-dark _1y6gq"
  }, "GitHub")) : null, _config.social.qq ? _react["default"].createElement("div", {
    className: "col-".concat(12 / socialLength)
  }, _react["default"].createElement("a", {
    href: "".concat(_config.api.domain, "/oauth/qq"),
    className: "text-dark _2uTWp"
  }, "QQ")) : null, _config.social.weibo ? _react["default"].createElement("div", {
    className: "col-".concat(12 / socialLength)
  }, _react["default"].createElement("a", {
    href: "".concat(_config.api.domain, "/oauth/weibo"),
    className: "text-dark _39fme"
  }, "\u5FAE\u535A")) : null), _react["default"].createElement("div", {
    className: "_2z0kj"
  }, "\u767B\u5F55\u5373\u8868\u793A\u4F60\u540C\u610F\u7F51\u7AD9\u7684", _react["default"].createElement(_reactRouterDom.Link, {
    to: "/agreement",
    className: "text-primary",
    onClick: function onClick() {
      $('#sign').modal('hide');
    }
  }, "\u300A\u7528\u6237\u534F\u8BAE\u300B"), " \u4E0E ", _react["default"].createElement(_reactRouterDom.Link, {
    to: "/privacy",
    className: "text-primary",
    onClick: function onClick() {
      $('#sign').modal('hide');
    }
  }, "\u300A\u9690\u79C1\u653F\u7B56\u300B")));

  return _react["default"].createElement("div", null, _react["default"].createElement(_modal["default"], {
    id: "sign",
    header: type == 'sign-in' ? _react["default"].createElement("div", {
      className: "_2FKy9"
    }, _react["default"].createElement("h4", null, "\u767B\u5F55"), _react["default"].createElement("div", null, "\u6CA1\u6709\u8D26\u53F7\uFF1F ", _react["default"].createElement("span", {
      className: "a text-primary",
      onClick: displayComponent
    }, "\u6CE8\u518C"))) : _react["default"].createElement("div", {
      className: "_2FKy9"
    }, _react["default"].createElement("h4", null, "\u6CE8\u518C\u8D26\u53F7"), _react["default"].createElement("div", {
      className: "mb-3"
    }, _config.description, "\uD83D\uDC1F\uD83D\uDC20\uD83D\uDC21\uD83D\uDC33\uD83D\uDC2C\uD83D\uDC0B\uD83D\uDC19"), _react["default"].createElement("div", null, "\u5DF2\u7ECF\u6709\u8D26\u53F7\u4E86\uFF1F ", _react["default"].createElement("span", {
      className: "a text-primary",
      onClick: displayComponent
    }, "\u767B\u5F55"))),
    body: body
  }));
}

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

__webpack_require__(177);

var _reactRedux = __webpack_require__(7);

var _sign = __webpack_require__(28);

var _captcha2 = __webpack_require__(141);

var _captcha3 = __webpack_require__(38);

var _to = _interopRequireDefault(__webpack_require__(15));

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
  var _captcha = (0, _reactRedux.useSelector)(function (state) {
    return (0, _captcha3.getCaptchaById)(state, 'sign-in');
  });

  var store = (0, _reactRedux.useStore)();

  var _signIn = function _signIn(args) {
    return (0, _sign.signIn)(args)(store.dispatch, store.getState);
  };

  var _addCaptcha = function _addCaptcha() {
    return (0, _captcha2.addCaptcha)({
      id: 'sign-in',
      args: {
        type: 'sign-in'
      },
      fields: "\n      success\n      _id\n      url\n    "
    })(store.dispatch, store.getState);
  };

  var account = (0, _react.createRef)();
  var password = (0, _react.createRef)();
  var submit = (0, _react.createRef)();
  var captcha = (0, _react.createRef)();

  var signin = function signin(event) {
    if (event) event.preventDefault();
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve, reject) {
        var $account, $password, $submit, $captcha, data, _ref2, _ref3, err, result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $account = account.current;
                $password = password.current;
                $submit = submit.current;
                $captcha = captcha.current;

                if ($account.value) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", $account.focus());

              case 6:
                if ($password.value) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", $password.focus());

              case 8:
                if (!($captcha && !$captcha.value)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", $captcha.focus());

              case 10:
                data = {
                  password: $password.value
                };

                if ($account.value.indexOf('@') != -1) {
                  data.email = $account.value;
                } else {
                  data.phone = $account.value;
                }

                if ($captcha) data.captcha = $captcha.value;
                if (_captcha) data.captcha_id = _captcha._id;
                $submit.value = '登录中...';
                $submit.disabled = true;
                _context.next = 18;
                return (0, _to["default"])(_signIn({
                  data: data
                }));

              case 18:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                err = _ref3[0];
                result = _ref3[1];
                $submit.value = '登录';
                $submit.disabled = false;

                if (!err) {
                  _context.next = 31;
                  break;
                }

                if (typeof Toastify != 'undefined') {
                  Toastify({
                    text: err,
                    duration: 3000,
                    backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                  }).showToast();
                }

                _context.next = 28;
                return getCaptcha();

              case 28:
                reject(err);
                _context.next = 32;
                break;

              case 31:
                resolve(result);

              case 32:
                return _context.abrupt("return", false);

              case 33:
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

  var getCaptcha = function getCaptcha() {
    return _addCaptcha();
  };

  (0, _react.useEffect)(function () {
    $('#sign').on('show.bs.modal', function (e) {
      getCaptcha();
    });
  });
  return _react["default"].createElement("form", {
    onSubmit: signin,
    className: "signin",
    "data-testid": "sign-in"
  }, _react["default"].createElement("div", null, _react["default"].createElement("input", {
    type: "text",
    className: "form-control",
    ref: account,
    placeholder: "\u624B\u673A\u53F7/\u90AE\u7BB1\u5730\u5740"
  })), _react["default"].createElement("div", null, _react["default"].createElement("input", {
    type: "password",
    className: "form-control",
    ref: password,
    placeholder: "\u5BC6\u7801",
    onFocus: function onFocus(e) {
      e.target.value = '';
    }
  })), _captcha ? _react["default"].createElement("div", null, _react["default"].createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "\u9A8C\u8BC1\u7801",
    ref: captcha,
    onFocus: function onFocus(e) {
      e.target.value = '';
    }
  }), _react["default"].createElement("img", {
    className: "_2do3n",
    onClick: getCaptcha,
    src: _captcha.url
  })) : null, _react["default"].createElement("div", null, _react["default"].createElement("input", {
    type: "submit",
    ref: submit,
    className: "btn btn-primary",
    value: "\u767B\u5F55"
  })));
}

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"error": "_3KDhx",
	"signup": "_1_60c",
	"captcha-image": "_2do3n",
	"alert": "y4eK8"
};

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _device = _interopRequireDefault(__webpack_require__(125));

var _reactRedux = __webpack_require__(7);

var _sign = __webpack_require__(28);

var _captchaButton = _interopRequireDefault(__webpack_require__(133));

var _countriesSelect = _interopRequireDefault(__webpack_require__(146));

__webpack_require__(179);

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
  var account = (0, _react.createRef)();
  var nickname = (0, _react.createRef)();
  var password = (0, _react.createRef)();
  var male = (0, _react.createRef)();
  var female = (0, _react.createRef)();
  var captcha = (0, _react.createRef)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      areaCode = _useState2[0],
      setAreaCode = _useState2[1];

  var _useState3 = (0, _react.useState)('phone'),
      _useState4 = _slicedToArray(_useState3, 2),
      type = _useState4[0],
      setType = _useState4[1];

  var store = (0, _reactRedux.useStore)();

  var _signUp = function _signUp(args) {
    return (0, _sign.signUp)(args)(store.dispatch, store.getState);
  };

  var _signIn = function _signIn(args) {
    return (0, _sign.signIn)(args)(store.dispatch, store.getState);
  };

  var submit = function submit(event) {
    var test = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (event) event.preventDefault();
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve, reject) {
        var $account, $nickname, $password, $male, $female, $captcha, data, err, res, result, _result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $account = account.current;
                $nickname = nickname.current;
                $password = password.current;
                $male = male.current;
                $female = female.current;
                $captcha = captcha.current;

                if ($nickname.value) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", $nickname.focus());

              case 8:
                if ($account.value) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", $account.focus());

              case 10:
                if ($captcha.value) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", $captcha.focus());

              case 12:
                if ($password.value) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return", $password.focus());

              case 14:
                if (!(!$male.checked && !$female.checked)) {
                  _context.next = 17;
                  break;
                }

                Toastify({
                  text: '请选择性别',
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
                return _context.abrupt("return");

              case 17:
                data = {
                  nickname: $nickname.value,
                  password: $password.value,
                  gender: $male.checked ? 1 : 0,
                  source: parseInt(_device["default"].getCurrentDeviceId()),
                  captcha: $captcha.value
                };

                if (!(type == 'email')) {
                  _context.next = 22;
                  break;
                }

                data.email = $account.value;
                _context.next = 27;
                break;

              case 22:
                if (areaCode) {
                  _context.next = 25;
                  break;
                }

                Toastify({
                  text: '请选择手机区号',
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
                return _context.abrupt("return");

              case 25:
                data.phone = $account.value;
                data.area_code = areaCode;

              case 27:
                _context.next = 29;
                return _signUp(data);

              case 29:
                result = _context.sent;
                _result = _slicedToArray(result, 2);
                err = _result[0];
                res = _result[1];

                if (!err) {
                  _context.next = 39;
                  break;
                }

                Toastify({
                  text: err && err.message ? err.message : err,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
                if (test) reject(err);
                return _context.abrupt("return");

              case 39:
                Toastify({
                  text: '注册成功',
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
                }).showToast();

                if (location.search == '?from=google-ads' && gtag) {
                  // google 注册转化统计
                  // Event snippet for 注册账号 conversion page
                  gtag('event', 'conversion', {
                    'send_to': 'AW-985399355/PIC-CKeirq4BELuA8NUD',
                    'value': 1.0,
                    'currency': 'CNY'
                  });
                }

                if (test) resolve(err);

              case 42:
                // 登陆
                delete data.nickname;
                delete data.gender;
                delete data.source;
                delete data.captcha;
                delete data.area_code;

                _signIn({
                  data: data
                }).then(function (res) {})["catch"](function (res) {
                  $('#sign').modal('hide');
                  setTimeout(function () {
                    $('#sign').modal({
                      show: true
                    }, {
                      'data-type': 'sign-in'
                    });
                  }, 700);
                });

              case 48:
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

  var sendCaptcha = function sendCaptcha(callback) {
    var $account = account.current;

    if (!$account.value) {
      return $account.focus();
    }

    var params = {
      type: 'sign-up'
    };

    if (type == 'email') {
      params.email = $account.value;
    } else {
      params.area_code = areaCode;
      params.phone = $account.value;
    }

    callback({
      args: params
    });
  };

  return _react["default"].createElement("form", {
    onSubmit: submit
  }, _react["default"].createElement("div", {
    className: "_3-rUd"
  }, _react["default"].createElement("div", null, _react["default"].createElement("input", {
    type: "text",
    className: "form-control",
    ref: nickname,
    placeholder: "\u540D\u5B57"
  })), type == 'phone' ? _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "row"
  }, _react["default"].createElement("div", {
    className: "col-4"
  }, _react["default"].createElement(_countriesSelect["default"], {
    onChange: function onChange(res) {
      setAreaCode(res); // if (this.state.isMount) this.state.areaCode = res;
    }
  })), _react["default"].createElement("div", {
    className: "col-8 pl-0"
  }, _react["default"].createElement("input", {
    type: "text",
    className: "form-control",
    ref: account,
    placeholder: "\u624B\u673A\u53F7"
  })))) : _react["default"].createElement("div", null, _react["default"].createElement("input", {
    type: "text",
    className: "form-control",
    ref: account,
    placeholder: "\u90AE\u7BB1"
  })), _react["default"].createElement("div", null, _react["default"].createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "\u8F93\u5165 6 \u4F4D\u9A8C\u8BC1\u7801",
    ref: captcha
  }), _react["default"].createElement("div", {
    className: "_171A0"
  }, _react["default"].createElement(_captchaButton["default"], {
    onClick: sendCaptcha
  }))), _react["default"].createElement("div", null, _react["default"].createElement("input", {
    type: "password",
    className: "form-control",
    ref: password,
    placeholder: "\u5BC6\u7801"
  })), _react["default"].createElement("div", {
    className: "_3hoe-"
  }, _react["default"].createElement("span", null, "\u6027\u522B"), _react["default"].createElement("div", {
    className: "form-check form-check-inline"
  }, _react["default"].createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: "gender",
    id: "male",
    value: "\u7537",
    ref: male
  }), _react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "male"
  }, "\u7537")), _react["default"].createElement("div", {
    className: "form-check form-check-inline"
  }, _react["default"].createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: "gender",
    id: "female",
    value: "\u5973",
    ref: female
  }), _react["default"].createElement("label", {
    className: "form-check-label",
    htmlFor: "female"
  }, "\u5973"))), _react["default"].createElement("div", null, _react["default"].createElement("input", {
    type: "submit",
    className: "btn btn-primary",
    value: "\u6CE8\u518C"
  })), _react["default"].createElement("div", {
    className: "text-center"
  }, type == 'phone' ? _react["default"].createElement("div", null, _react["default"].createElement("span", {
    className: "a text-primary",
    onClick: function onClick() {
      setType('email');
    }
  }, "\u4F7F\u7528\u90AE\u7BB1\u6CE8\u518C")) : _react["default"].createElement("div", null, _react["default"].createElement("span", {
    className: "a text-primary",
    onClick: function onClick() {
      setType('phone');
    }
  }, "\u4F7F\u7528\u624B\u673A\u6CE8\u518C")))));
}

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"signup": "_3-rUd",
	"gender": "_3hoe-",
	"signin": "_3JJm5",
	"captcha": "_2d0JH",
	"captcha-button": "_171A0"
};

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layer": "_3DiEH",
	"header": "_2FKy9",
	"other-sign-in": "_23uUq",
	"social": "_1Ca6c",
	"icon": "_1Knar",
	"weibo": "_39fme",
	"qq": "_2uTWp",
	"github": "_1y6gq",
	"wechat": "_1QooQ",
	"agreement": "_2z0kj"
};

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _modal = _interopRequireDefault(__webpack_require__(137));

var _editorComment = _interopRequireDefault(__webpack_require__(147));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var modalId = 'editor-comment-modal';

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      comment = _useState4[0],
      setComment = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      type = _useState6[0],
      setType = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      posts = _useState8[0],
      setPosts = _useState8[1];

  (0, _react.useEffect)(function () {
    $('#' + modalId).on('show.bs.modal', function (e) {
      setShow(true);
      setComment(e.relatedTarget.comment || null);
      setPosts(e.relatedTarget.posts || null);
      setType(e.relatedTarget.type);
    });
    $('#' + modalId).on('hidden.bs.modal', function (e) {
      setShow(false);
      setComment(null);
      setPosts(null);
      setType('');
    });
  });

  if (!show) {
    return _react["default"].createElement(_modal["default"], {
      id: modalId,
      title: "\u56DE\u590D",
      body: ''
    });
  }

  var title = '回复';
  var params = {
    displayControls: false,
    successCallback: function successCallback() {
      $('#' + modalId).modal('hide');
    },
    getEditor: function getEditor(editor) {
      setTimeout(function () {
        return editor.focus();
      }, 500);
    }
  };

  if (type == 'reply' || type == 'comment') {
    title = type == 'reply' ? '回复' : '评论';

    if (posts) {
      params = _objectSpread({}, params, {
        posts_id: posts._id
      });
    } else {
      params = _objectSpread({}, params, {
        id: comment._id,
        posts_id: comment.posts_id._id || comment.posts_id,
        parent_id: comment.parent_id || comment._id,
        reply_id: comment._id
      });
    }
  } else if (type == 'edit') {
    title = '编辑';
    params = _objectSpread({}, params, {}, comment);
  }

  return _react["default"].createElement(_modal["default"], {
    id: modalId,
    title: title,
    body: _react["default"].createElement(_editorComment["default"], params)
  });
}

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _modal = _interopRequireDefault(__webpack_require__(137));

var _reactRedux = __webpack_require__(7);

var _reportTypes = __webpack_require__(40);

var _report = __webpack_require__(185);

__webpack_require__(186);

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
  var detail = (0, _react.createRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      submitting = _useState2[0],
      setSubmitting = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      posts = _useState4[0],
      setPosts = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      comment = _useState6[0],
      setComment = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      user = _useState8[0],
      setUser = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      type = _useState10[0],
      setType = _useState10[1];

  var types = (0, _reactRedux.useSelector)(function (state) {
    return (0, _reportTypes.getReportTypes)(state);
  });
  var store = (0, _reactRedux.useStore)();

  var _loadReportTypes = function _loadReportTypes() {
    return (0, _report.loadReportTypes)()(store.dispatch, store.getState);
  };

  var _addReport = function _addReport(args) {
    return (0, _report.addReport)(args)(store.dispatch, store.getState);
  };

  (0, _react.useEffect)(function () {
    $("#report").on('show.bs.modal',
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(e) {
        var _e$relatedTarget, posts, comment, user;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!types || types.length == 0)) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return _loadReportTypes();

              case 3:
                _e$relatedTarget = e.relatedTarget, posts = _e$relatedTarget.posts, comment = _e$relatedTarget.comment, user = _e$relatedTarget.user;
                setPosts(posts);
                setComment(comment);
                setUser(user);

              case 7:
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
  });

  var chooseType = function chooseType(type) {
    setType(type.id);
  };

  var submit =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var $detail, data, err, res, result, _result;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              $detail = detail.current;

              if (type) {
                _context2.next = 4;
                break;
              }

              Toastify({
                text: '请选择举报类型',
                duration: 3000,
                backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
              }).showToast();
              return _context2.abrupt("return");

            case 4:
              data = {
                report_id: type
              };
              if ($detail.value) data.detail = $detail.value;

              if (!posts) {
                _context2.next = 10;
                break;
              }

              data.posts_id = posts._id;
              _context2.next = 20;
              break;

            case 10:
              if (!comment) {
                _context2.next = 14;
                break;
              }

              data.comment_id = comment._id;
              _context2.next = 20;
              break;

            case 14:
              if (!user) {
                _context2.next = 18;
                break;
              }

              data.people_id = user._id;
              _context2.next = 20;
              break;

            case 18:
              Toastify({
                text: '举报目标不存在',
                duration: 3000,
                backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
              }).showToast();
              return _context2.abrupt("return");

            case 20:
              setSubmitting(true);
              _context2.next = 23;
              return _addReport({
                data: data
              });

            case 23:
              result = _context2.sent;
              _result = _slicedToArray(result, 2);
              err = _result[0];
              res = _result[1];
              setSubmitting(false);

              if (err) {
                Toastify({
                  text: err.message,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              } else {
                Toastify({
                  text: '提交成功',
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
                }).showToast();
                $("#report").modal('hide'); // 清空内容

                $('#report input:radio').each(function (index, dom) {
                  dom.checked = false;
                });
                $detail.value = '';
              }

            case 29:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function submit() {
      return _ref2.apply(this, arguments);
    };
  }();

  var title = '';

  if (posts) {
    title = _react["default"].createElement("div", null, "\u6211\u8981\u4E3E\u62A5 ", _react["default"].createElement("b", null, posts.user_id.nickname), " \u7684\u5E16\u5B50", _react["default"].createElement("div", null, posts.title));
  } else if (comment) {
    title = _react["default"].createElement("div", null, "\u6211\u8981\u4E3E\u62A5 ", _react["default"].createElement("b", null, comment.user_id.nickname), " \u7684", comment.parent_id ? '回复' : '评论', _react["default"].createElement("div", null, comment.content_summary));
  } else if (user) {
    title = _react["default"].createElement("div", null, "\u6211\u8981\u4E3E\u62A5 ", _react["default"].createElement("b", null, user.nickname), " \u7528\u6237");
  }

  return _react["default"].createElement("div", null, _react["default"].createElement(_modal["default"], {
    id: "report",
    title: '举报',
    body: _react["default"].createElement("div", {
      className: "_1QCo6"
    }, _react["default"].createElement("div", {
      className: "_3k6jt"
    }, title), _react["default"].createElement("div", {
      className: "xtkhq"
    }, types && types.map(function (item) {
      return _react["default"].createElement("label", {
        key: item.id
      }, _react["default"].createElement("input", {
        type: "radio",
        name: "report",
        onClick: function onClick() {
          return chooseType(item);
        }
      }), item.text);
    })), _react["default"].createElement("div", {
      className: "gQ6GE"
    }, _react["default"].createElement("textarea", {
      placeholder: "\u8865\u5145\u4E3E\u62A5\u8BF4\u660E",
      className: "border",
      ref: detail
    })), _react["default"].createElement("div", null, _react["default"].createElement("button", {
      onClick: submit,
      type: "button",
      className: "btn btn-primary"
    }, submitting ? '提交中...' : '提交')))
  }));
}

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadReportTypes = loadReportTypes;
exports.addReport = addReport;

var _graphql = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function loadReportTypes() {
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
                    api: 'fetchReportTypes',
                    fields: "\n            success\n            data {\n              id\n              text\n            }\n          "
                  }],
                  cache: true
                });

              case 2:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                err = _ref3[0];
                res = _ref3[1];
                if (res) dispatch({
                  type: 'ADD_REPORT_TYPES',
                  types: res.data
                });
                resolve();

              case 8:
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

function addReport(_ref4) {
  var data = _ref4.data;
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
                  type: 'mutation',
                  headers: {
                    accessToken: getState().user.accessToken
                  },
                  apis: [{
                    api: 'addReport',
                    args: data,
                    fields: "success"
                  }]
                });

              case 2:
                _ref6 = _context2.sent;
                _ref7 = _slicedToArray(_ref6, 2);
                err = _ref7[0];
                res = _ref7[1];
                resolve([err, res]);

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
}

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"box": "_1QCo6",
	"report-content": "_3k6jt",
	"types": "xtkhq",
	"detail": "gQ6GE"
};

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _storage = _interopRequireDefault(__webpack_require__(23));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(14);

var _phone = __webpack_require__(160);

var _user2 = __webpack_require__(8);

var _captchaButton = _interopRequireDefault(__webpack_require__(133));

var _countriesSelect = _interopRequireDefault(__webpack_require__(146));

var _modal = _interopRequireDefault(__webpack_require__(137));

__webpack_require__(188);

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
  var phone = (0, _react.createRef)();
  var captcha = (0, _react.createRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      areaCode = _useState4[0],
      setAreaCode = _useState4[1];

  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user2.getUserInfo)(state);
  });
  var store = (0, _reactRedux.useStore)();

  var _addPhone = function _addPhone(args) {
    return (0, _phone.addPhone)(args)(store.dispatch, store.getState);
  };

  var _loadUserInfo = function _loadUserInfo(args) {
    return (0, _user.loadUserInfo)(args)(store.dispatch, store.getState);
  };

  var submit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var $phone, $captcha, _ref2, _ref3, err, res;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $phone = phone.current;
              $captcha = captcha.current;

              if ($phone.value) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", $phone.focus());

            case 4:
              if ($captcha.value) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", $captcha.focus());

            case 6:
              _context.next = 8;
              return _addPhone({
                args: {
                  phone: $phone.value,
                  captcha: $captcha.value,
                  area_code: areaCode
                }
              });

            case 8:
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
              } else {
                Toastify({
                  text: '修改成功',
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
                }).showToast();

                _loadUserInfo({});

                $("#binding-phone").modal('hide');
              }

            case 13:
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

  var sendCaptcha = function sendCaptcha(callback) {
    var $phone = phone.current;
    if (!$phone.value) return $phone.focus();
    callback({
      id: 'phone',
      args: {
        phone: $phone.value,
        area_code: areaCode,
        type: 'binding-phone'
      },
      fields: "success"
    });
  };

  var componentsDidMount =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var timestamps, nowTimestamps;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(me && me.phone)) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              _context2.next = 4;
              return _storage["default"].load({
                key: 'binding-phone-tips'
              });

            case 4:
              _context2.t0 = _context2.sent;

              if (_context2.t0) {
                _context2.next = 7;
                break;
              }

              _context2.t0 = 0;

            case 7:
              timestamps = _context2.t0;
              nowTimestamps = new Date().getTime();
              $('#binding-phone').on('show.bs.modal', function (e) {
                _storage["default"].save({
                  key: 'binding-phone-tips',
                  data: nowTimestamps
                });

                setShow(true);
              });
              $('#binding-phone').on('hide.bs.modal', function (e) {
                setShow(false);
              });

              if (!(nowTimestamps - timestamps < 1000 * 60 * 60 * 24 * 2)) {
                _context2.next = 13;
                break;
              }

              return _context2.abrupt("return");

            case 13:
              setTimeout(function () {
                $('#binding-phone').modal({
                  show: true
                }, {});
              }, 2000);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function componentsDidMount() {
      return _ref4.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    componentsDidMount();
  });
  return _react["default"].createElement(_modal["default"], {
    id: "binding-phone",
    title: "\u7ED1\u5B9A\u624B\u673A",
    body: _react["default"].createElement("div", {
      className: "_1ZhpB"
    }, _react["default"].createElement("div", null, "\u4EB2\u7231\u7684\u7528\u6237\uFF0C\u5E942017\u5E7410\u67081\u65E5\u8D77\u5B9E\u65BD\u7684\u300A\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u7F51\u7EDC\u5B89\u5168\u6CD5\u300B\u8981\u6C42\uFF0C\u7F51\u7AD9\u987B\u5F3A\u5316\u7528\u6237\u5B9E\u540D\u8BA4\u8BC1\u673A\u5236\u3002\u60A8\u9700\u8981\u9A8C\u8BC1\u624B\u673A\u65B9\u53EF\u4F7F\u7528\u793E\u533A\u529F\u80FD\uFF0C\u70E6\u8BF7\u60A8\u5C06\u8D26\u53F7\u4E0E\u624B\u673A\u8FDB\u884C\u7ED1\u5B9A\u3002"), _react["default"].createElement("br", null), _react["default"].createElement("div", {
      className: "form-group"
    }, _react["default"].createElement("div", {
      className: "row"
    }, _react["default"].createElement("div", {
      className: "col-4"
    }, show ? _react["default"].createElement(_countriesSelect["default"], {
      onChange: function onChange(areaCode) {
        setAreaCode(areaCode);
      }
    }) : null), _react["default"].createElement("div", {
      className: "col-8 pl-0"
    }, _react["default"].createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7",
      ref: phone
    })))), _react["default"].createElement("div", {
      className: "form-group"
    }, _react["default"].createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "\u8F93\u51656\u4F4D\u6570\u9A8C\u8BC1\u7801",
      ref: captcha
    }), _react["default"].createElement("div", null, _react["default"].createElement(_captchaButton["default"], {
      onClick: sendCaptcha
    })))),
    footer: _react["default"].createElement("div", null, _react["default"].createElement("span", {
      className: "btn btn-primary",
      onClick: submit
    }, "\u63D0\u4EA4"))
  });
}

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"body": "_1ZhpB",
	"form": "_2m8AV",
	"footer": "_3NFRJ"
};

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _unlockToken = __webpack_require__(43);

var _user = __webpack_require__(8);

var _captchaButton = _interopRequireDefault(__webpack_require__(133));

var _modal = _interopRequireDefault(__webpack_require__(137));

__webpack_require__(190);

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
  var select = (0, _react.createRef)();
  var captcha = (0, _react.createRef)();
  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  var store = (0, _reactRedux.useStore)();

  var _getUnlockToken = function _getUnlockToken(args) {
    return (0, _unlockToken.getUnlockToken)(args)(store.dispatch, store.getState);
  };

  var complete = function complete(res) {};

  var submit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var $select, $captcha, _ref2, _ref3, err, res;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              $select = select.current;
              $captcha = captcha.current;

              if ($captcha.value) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", $captcha.focus());

            case 4:
              _context.next = 6;
              return _getUnlockToken({
                args: {
                  type: $select.value,
                  captcha: $captcha.value
                }
              });

            case 6:
              _ref2 = _context.sent;
              _ref3 = _slicedToArray(_ref2, 2);
              err = _ref3[0];
              res = _ref3[1];

              if (err) {
                complete(false);
                Toastify({
                  text: err.message,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              } else {
                complete(true);
                Toastify({
                  text: '提交成功',
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
                }).showToast();
                $("#unlock-token-modal").modal('hide');
              }

            case 11:
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

  var sendCaptcha = function sendCaptcha(callback) {
    var $select = select.current;
    callback({
      id: 'unlock-token',
      args: {
        type: $select.value == 'phone' ? 'phone-unlock-token' : 'email-unlock-token'
      },
      fields: "success"
    }, function (result) {});
  };

  (0, _react.useEffect)(function () {
    $('#unlock-token-modal').on('show.bs.modal', function (e) {
      complete = e.relatedTarget.complete || function () {};
    });
  });
  return _react["default"].createElement(_modal["default"], {
    id: "unlock-token-modal",
    title: "\u8EAB\u4EFD\u9A8C\u8BC1",
    body: _react["default"].createElement("div", {
      className: "_1zvk5"
    }, _react["default"].createElement("div", null, "\u4E3A\u4E86\u4FDD\u62A4\u4F60\u7684\u5E10\u53F7\u5B89\u5168\uFF0C\u8BF7\u9A8C\u8BC1\u8EAB\u4EFD\uFF0C\u9A8C\u8BC1\u6210\u529F\u540E\u8FDB\u884C\u4E0B\u4E00\u6B65\u64CD\u4F5C"), _react["default"].createElement("br", null), _react["default"].createElement("div", {
      className: "form-group"
    }, _react["default"].createElement("div", {
      className: "container"
    }, _react["default"].createElement("div", {
      className: "row"
    }, _react["default"].createElement("select", {
      className: "form-control",
      id: "exampleFormControlSelect1",
      ref: select
    }, me.phone ? _react["default"].createElement("option", {
      value: "phone"
    }, "\u4F7F\u7528 ", me.phone, " \u9A8C\u8BC1") : null, me.email ? _react["default"].createElement("option", {
      value: "email"
    }, "\u4F7F\u7528 ", me.email, " \u9A8C\u8BC1") : null)))), _react["default"].createElement("div", {
      className: "form-group"
    }, _react["default"].createElement("input", {
      className: "form-control",
      type: "text",
      placeholder: "\u8F93\u51656\u4F4D\u6570\u9A8C\u8BC1\u7801",
      ref: captcha
    }), _react["default"].createElement("div", null, _react["default"].createElement(_captchaButton["default"], {
      onClick: sendCaptcha
    })))),
    footer: _react["default"].createElement("div", null, _react["default"].createElement("span", {
      className: "btn btn-primary",
      onClick: submit
    }, "\u63D0\u4EA4"))
  });
}

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"body": "_1zvk5",
	"form": "_3aHwP",
	"footer": "_3ooWd"
};

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

__webpack_require__(192);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// style
function _default() {
  (0, _react.useEffect)(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });

    if ($(window).scrollTop() > 0) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  var top = function top() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
  };

  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "d-none d-lg-block"
  }, _react["default"].createElement("span", {
    id: "back-to-top",
    onClick: top,
    className: "a _2hUu4"
  }, _react["default"].createElement("svg", {
    width: "24",
    height: "24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _react["default"].createElement("use", {
    xlinkHref: "/feather-sprite.svg#arrow-up"
  })))));
}

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"top": "_2hUu4"
};

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _signModal = _interopRequireDefault(__webpack_require__(175));

var _editorCommentModal = _interopRequireDefault(__webpack_require__(181));

var _reportModal = _interopRequireDefault(__webpack_require__(184));

var _bindingPhoneModal = _interopRequireDefault(__webpack_require__(187));

var _unlockTokenModal = _interopRequireDefault(__webpack_require__(189));

var _backToTop = _interopRequireDefault(__webpack_require__(191));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// redux
// components
function _default() {
  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  if (!me) return _react["default"].createElement(_signModal["default"], null);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_backToTop["default"], null), !me ? _react["default"].createElement(_signModal["default"], null) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_editorCommentModal["default"], null), _react["default"].createElement(_reportModal["default"], null), _react["default"].createElement(_bindingPhoneModal["default"], null), _react["default"].createElement(_unlockTokenModal["default"], null)));
}

/***/ })

};;