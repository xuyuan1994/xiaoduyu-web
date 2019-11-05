exports.ids = [27];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _config = __webpack_require__(1);

var _singleColumns = _interopRequireDefault(__webpack_require__(120));

var _reactRedux = __webpack_require__(7);

var _comment2 = __webpack_require__(138);

var _comment3 = __webpack_require__(32);

var _user = __webpack_require__(8);

var _hasReadPosts = __webpack_require__(171);

var _shell = _interopRequireDefault(__webpack_require__(117));

var _meta = _interopRequireDefault(__webpack_require__(118));

var _commentList = _interopRequireDefault(__webpack_require__(161));

var _htmlText = _interopRequireDefault(__webpack_require__(128));

var _editorComment = _interopRequireDefault(__webpack_require__(147));

var _loading = _interopRequireDefault(__webpack_require__(122));

var _like = _interopRequireDefault(__webpack_require__(162));

var _share = _interopRequireDefault(__webpack_require__(153));

var _moreMenu = _interopRequireDefault(__webpack_require__(152));

var _h = _interopRequireDefault(__webpack_require__(172));

__webpack_require__(236);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CommentDetail = function CommentDetail(_ref) {
  var match = _ref.match,
      setNotFound = _ref.setNotFound;
  var id = match.params.id;

  var _isMember = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });

  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _comment3.getCommentListById)(state, 'single_' + id);
  });

  var _ref2 = list || {},
      _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? [] : _ref2$data,
      loading = _ref2.loading,
      _ref2$more = _ref2.more,
      more = _ref2$more === void 0 ? true : _ref2$more;

  var store = (0, _reactRedux.useStore)();

  var _loadList = function _loadList(args) {
    return (0, _comment2.loadCommentList)(args)(store.dispatch, store.getState);
  };

  var _addHasRead = function _addHasRead(args) {
    return (0, _hasReadPosts.addHasRead)(args)(store.dispatch, store.getState);
  };

  (0, _react.useEffect)(function () {
    if (!loading && !data[0] && more) {
      _loadList({
        id: 'single_' + id,
        args: {
          _id: id,
          deleted: false,
          weaken: false
        },
        fields: "\n          posts_id{\n            _id\n            title\n            content_html\n          }\n          content_html\n          create_at\n          reply_count\n          like_count\n          _id\n          user_id {\n            _id\n            nickname\n            avatar_url\n            brief\n          }\n          like\n        "
      }).then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            err = _ref4[0],
            res = _ref4[1];

        if (res && res.data && !res.data[0]) {
          setNotFound('该评论不存在');
        } else if (res && res.data && res.data[0]) {
          var _comment = res.data[0];

          _addHasRead({
            commentId: _comment._id,
            total: _comment.reply_count
          });
        }
      });
    }
  }, []);
  if (loading || !data[0]) return _react["default"].createElement("div", {
    className: "text-center"
  }, _react["default"].createElement(_loading["default"], null));
  var comment = data[0];
  return _react["default"].createElement(_singleColumns["default"], null, _react["default"].createElement("div", null, _react["default"].createElement(_meta["default"], {
    title: "".concat(comment.posts_id.title)
  }, _react["default"].createElement("meta", {
    name: "description",
    content: "".concat(comment.content_summary)
  }), _react["default"].createElement("link", {
    rel: "canonical",
    href: "".concat(_config.domainName, "/comment/").concat(comment._id)
  }), _react["default"].createElement("link", {
    rel: "amphtml",
    href: "".concat(_config.domainName, "/amp/comment/").concat(comment._id)
  }), _react["default"].createElement("meta", {
    property: "og:locale",
    content: "zh_CN"
  }), _react["default"].createElement("meta", {
    property: "og:type",
    content: "article"
  }), _react["default"].createElement("meta", {
    property: "og:title",
    content: comment.posts_id.title
  }), _react["default"].createElement("meta", {
    property: "og:description",
    content: "".concat(comment.content_summary)
  }), _react["default"].createElement("meta", {
    property: "og:url",
    content: "".concat(_config.domainName, "/comment/").concat(comment._id)
  }), _react["default"].createElement("meta", {
    property: "og:site_name",
    content: _config.name
  }), _react["default"].createElement("meta", {
    property: "og:image",
    content: comment.user_id.avatar_url ? 'https:' + comment.user_id.avatar_url : _config.domainName + '/512x512.png'
  })), _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-body border-bottom"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/posts/".concat(comment.posts_id._id)
  }, _react["default"].createElement("h5", {
    className: "text-dark"
  }, comment.posts_id.title)), comment.posts_id.content_summary ? _react["default"].createElement("div", null, comment.posts_id.content_summary) : null), _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "_3qlnm"
  }, _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/people/".concat(comment.user_id._id)
  }, _react["default"].createElement("img", {
    className: "_2O0cW",
    src: comment.user_id.avatar_url
  }), _react["default"].createElement("b", {
    className: "text-dark"
  }, comment.user_id.nickname))), _react["default"].createElement("div", {
    className: "_225ls"
  }, comment.user_id.brief || '...')), _react["default"].createElement("div", {
    className: "_28jbA"
  }, _react["default"].createElement(_htmlText["default"], {
    content: comment.content_html
  })))), _react["default"].createElement("div", {
    className: "card-footer d-flex justify-content-between"
  }, _react["default"].createElement("div", {
    className: "text-secondary _225ls"
  }, comment._create_at ? _react["default"].createElement("span", null, comment._create_at) : null, comment.like_count ? _react["default"].createElement("span", null, comment.like_count, " \u4EBA\u8D5E") : null), _react["default"].createElement("div", {
    className: "_3hCcW"
  }, _react["default"].createElement(_like["default"], {
    comment: comment
  }), _react["default"].createElement(_share["default"], {
    comment: comment
  }), _react["default"].createElement(_moreMenu["default"], {
    comment: comment
  })))), comment.reply_count ? _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header border-bottom-0"
  }, comment.reply_count, " \u6761\u56DE\u590D"), _react["default"].createElement("div", {
    className: "card-body p-0"
  }, _react["default"].createElement(_commentList["default"], {
    id: id,
    query: {
      parent_id: id,
      page_size: 100
    },
    nothing: "\u8FD8\u672A\u6709\u4EBA\u56DE\u590D"
  }))) : null, _isMember ? _react["default"].createElement("div", {
    className: "card _34oYM"
  }, _react["default"].createElement(_editorComment["default"], {
    posts_id: comment.posts_id._id,
    parent_id: comment._id,
    reply_id: comment._id,
    placeholder: '回复 ' + comment.user_id.nickname
  })) : null, _react["default"].createElement("div", {
    className: "d-block d-lg-none d-xl-none"
  }, _react["default"].createElement(_h["default"], {
    width: "100%",
    height: "200px"
  }))));
};

CommentDetail.loadDataOnServer =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref5) {
    var store, match, res, req, user, id, _ref7, _ref8, err, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref5.store, match = _ref5.match, res = _ref5.res, req = _ref5.req, user = _ref5.user;

            if (!user) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", {
              code: 200
            });

          case 3:
            id = match.params.id;
            _context.next = 6;
            return (0, _comment2.loadCommentList)({
              id: 'single_' + id,
              args: {
                _id: id,
                deleted: false,
                weaken: false
              },
              fields: "\n      posts_id{\n        _id\n        title\n        content_html\n      }\n      content_html\n      create_at\n      reply_count\n      like_count\n      _id\n      user_id {\n        _id\n        nickname\n        avatar_url\n      }\n    "
            })(store.dispatch, store.getState);

          case 6:
            _ref7 = _context.sent;
            _ref8 = _slicedToArray(_ref7, 2);
            err = _ref8[0];
            data = _ref8[1];

            if (!(data && data.data && data.data.length > 0)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", {
              code: 200
            });

          case 14:
            return _context.abrupt("return", {
              code: 404
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref6.apply(this, arguments);
  };
}();

var _default = (0, _shell["default"])(CommentDetail);

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

/***/ 236:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"head": "_3qlnm",
	"active": "_2O0cW",
	"info": "_225ls",
	"content": "_28jbA",
	"editor": "_34oYM",
	"actions": "_3hCcW"
};

/***/ })

};;