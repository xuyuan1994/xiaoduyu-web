exports.ids = [20];
exports.modules = {

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _follow2 = __webpack_require__(135);

var _user = __webpack_require__(8);

__webpack_require__(140);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(_ref) {
  var posts = _ref.posts,
      user = _ref.user,
      topic = _ref.topic,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'btn btn-outline-primary btn-sm rounded-pill' : _ref$className,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? 'btn btn-outline-secondary btn-sm rounded-pill' : _ref$activeClassName;
  var target = posts || user || topic;
  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  var store = (0, _reactRedux.useStore)();

  var _follow = function _follow(args) {
    return (0, _follow2.follow)(args)(store.dispatch, store.getState);
  };

  var _unfollow = function _unfollow(args) {
    return (0, _follow2.unfollow)(args)(store.dispatch, store.getState);
  }; // 自己的问题，不能关注


  if (me && posts && posts.user_id && posts.user_id._id == me._id || me && user && user._id == me._id) {
    return '';
  }

  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };

  var handleFollow = function handleFollow(e) {
    e.stopPropagation();
    var args = {};
    if (posts) args.posts_id = posts._id;
    if (user) args.user_id = user._id;
    if (topic) args.topic_id = topic._id;

    _follow({
      args: args
    }).then(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          err = _ref3[0],
          res = _ref3[1];

      if (err) {
        $.toast({
          text: err,
          position: 'top-center',
          showHideTransition: 'slide',
          icon: 'info',
          loader: false,
          allowToastClose: false
        });
      }
    });
  };

  var handleUnfollow = function handleUnfollow(e) {
    e.stopPropagation();
    var args = {};
    if (posts) args.posts_id = posts._id;
    if (user) args.user_id = user._id;
    if (topic) args.topic_id = topic._id;

    _unfollow({
      args: args
    }).then(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          err = _ref5[0],
          res = _ref5[1];

      if (err) {
        Toastify({
          text: err,
          duration: 3000,
          backgroundColor: 'linear-gradient(to right, #0988fe, #1c75fb)'
        }).showToast();
      }
    });
  };

  var text = '关注';

  var icon = _react["default"].createElement("svg", {
    width: "15px",
    height: "15px",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    className: "mr-1"
  }, _react["default"].createElement("use", {
    xlinkHref: "/feather-sprite.svg#plus"
  }));

  if (posts) {
    text = '收藏';
    icon = null;
  }

  if (target.follow) {
    icon = null;
  }

  if (!me) {
    return _react["default"].createElement("span", {
      className: className,
      "data-toggle": "modal",
      "data-target": "#sign",
      onClick: stopPropagation
    }, icon, text);
  } else if (target.follow) {
    return _react["default"].createElement("span", {
      className: activeClassName,
      onClick: handleUnfollow
    }, icon, "\u6B63\u5728", text);
  } else {
    return _react["default"].createElement("span", {
      className: className,
      onClick: handleFollow
    }, icon, text);
  }
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

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unfollow = exports.follow = exports.findFollows = void 0;

var _graphql = _interopRequireDefault(__webpack_require__(2));

var _newGraphqlLoadList = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var findFollows = (0, _newGraphqlLoadList["default"])({
  reducerName: 'follow',
  actionType: 'SET_FOLLOW_LIST_BY_ID',
  api: 'findFollows',
  fields: ""
});
exports.findFollows = findFollows;

var _follow = function _follow(status) {
  return function (_ref) {
    var args = _ref.args;
    return function (dispatch, getState) {
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(resolve) {
          var me, _ref3, _ref4, err, res;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  args.status = status;
                  me = getState().user.userInfo;
                  _context.next = 4;
                  return (0, _graphql["default"])({
                    type: 'mutation',
                    apis: [{
                      api: 'addFollow',
                      args: args,
                      fields: "success"
                    }],
                    headers: {
                      accessToken: getState().user.accessToken
                    }
                  });

                case 4:
                  _ref3 = _context.sent;
                  _ref4 = _slicedToArray(_ref3, 2);
                  err = _ref4[0];
                  res = _ref4[1];

                  if (!err) {
                    _context.next = 10;
                    break;
                  }

                  return _context.abrupt("return", resolve([err ? err.message : '未知错误']));

                case 10:
                  if (args.posts_id) {
                    dispatch({
                      type: 'UPDATE_FOLLOW',
                      id: args.posts_id,
                      followStatus: status,
                      selfId: me._id
                    });
                    dispatch({
                      type: 'UPDATE_POSTS_FOLLOW',
                      id: args.posts_id,
                      followStatus: status
                    });
                  } else if (args.user_id) {
                    dispatch({
                      type: 'UPDATE_FOLLOW',
                      id: args.user_id,
                      followStatus: status,
                      selfId: me._id
                    });
                    dispatch({
                      type: 'UPDATE_POSTS_AUHTOR_FOLLOW',
                      peopleId: args.user_id,
                      followStatus: status,
                      selfId: me._id
                    });
                    dispatch({
                      type: 'UPLOAD_PEOPLE_FOLLOW',
                      peopleId: args.user_id,
                      followStatus: status,
                      selfId: me._id
                    });
                  } else if (args.topic_id) {
                    dispatch({
                      type: 'UPDATE_FOLLOW',
                      id: args.topic_id,
                      followStatus: status,
                      selfId: me._id
                    });
                    dispatch({
                      type: 'UPDATE_TOPIC_FOLLOW',
                      id: args.topic_id,
                      followStatus: status
                    });
                  }

                  resolve([null, res]);

                case 12:
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
}; // 关注


var follow = _follow(true); // 取消关注


exports.follow = follow;

var unfollow = _follow(false);

exports.unfollow = unfollow;

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hover": "_3kx5s"
};

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

/***/ 222:
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

var _follow = _interopRequireDefault(__webpack_require__(130));

__webpack_require__(223);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// components
function _default(_ref) {
  var topic = _ref.topic;
  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  return _react["default"].createElement("div", null, _react["default"].createElement("img", {
    src: topic.avatar,
    className: "rounded _1Rzja",
    alt: topic.name
  }), _react["default"].createElement("div", null, _react["default"].createElement("div", null, _react["default"].createElement("h6", null, topic.parent_id ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/topic/".concat(topic.parent_id._id),
    className: "text-dark"
  }, _react["default"].createElement("b", null, topic.parent_id.name)), _react["default"].createElement("span", {
    className: "ml-2 mr-2"
  }, "\u203A")) : null, topic ? _react["default"].createElement("b", null, topic.name) : null), _react["default"].createElement("div", {
    className: "_3pjc2"
  }, topic.brief), _react["default"].createElement("div", {
    className: "QPyqz"
  }, topic.posts_count ? _react["default"].createElement("span", null, topic.posts_count, " \u5E16\u5B50") : null, topic.follow_count ? _react["default"].createElement("span", null, topic.follow_count, " \u4EBA\u5173\u6CE8") : null, topic.comment_count ? _react["default"].createElement("span", null, topic.comment_count, " \u6761\u8BC4\u8BBA") : null)), _react["default"].createElement("div", {
    className: "_33qIB"
  }, topic.parent_id && me ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/new-posts?topic_id=".concat(topic._id),
    className: "btn btn-outline-primary btn-sm rounded-pill"
  }, "\u521B\u5EFA\u8BDD\u9898"), _react["default"].createElement(_follow["default"], {
    topic: topic
  })) : null)));
  /*
  return (
    <div styleName="container">
    <div styleName="main">
      <img styleName="avatar" src={topic.avatar} className="align-self-start rounded" width="80" height="80" alt={topic.name} />
      <div className="d-flex justify-content-between">
        <div>
          {topic.parent_id ?
            <>
              <Link to={`/topic/${topic.parent_id._id}`} className="text-primary">{topic.parent_id.name}</Link>
              <span className="ml-1 mr-1">›</span>
            </>
            : null}
          {topic ? topic.name : null}
          <div styleName="brief">{topic.brief}</div>
          {topic.posts_count ? <span className="mr-3" styleName="brief">{topic.posts_count} 帖子</span> : null}
          {topic.follow_count ? <span className="mr-3" styleName="brief">{topic.follow_count} 人关注</span> : null}
          {topic.comment_count ? <span className="mr-3" styleName="brief">{topic.comment_count} 条评论</span> : null}
        </div>
        <div styleName="action">
          {topic.parent_id && me ?
            <>
              <Link to={`/new-posts?topic_id=${topic._id}`} className="btn btn-outline-primary btn-sm rounded-pill">创建话题</Link>
              <div className="mt-2"><Follow topic={topic} /></div>
            </>
            : null}
        </div>
      </div>
    </div>
    </div>
  )
  */
}

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "_3nKav",
	"item": "rqiwV",
	"main": "usbXk",
	"avatar": "_1Rzja",
	"brief": "_3pjc2",
	"action": "_33qIB",
	"info": "QPyqz"
};

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

var _reactRedux = __webpack_require__(7);

var _topic = __webpack_require__(29);

var _topic2 = __webpack_require__(16);

var _posts = __webpack_require__(129);

var _twoColumns = _interopRequireDefault(__webpack_require__(134));

var _shell = _interopRequireDefault(__webpack_require__(117));

var _meta = _interopRequireDefault(__webpack_require__(118));

var _loading = _interopRequireDefault(__webpack_require__(122));

var _topicCard = _interopRequireDefault(__webpack_require__(222));

var _postsList = _interopRequireDefault(__webpack_require__(139));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var topicDetail = (0, _shell["default"])(function (_ref) {
  var setNotFound = _ref.setNotFound;

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      history = _useReactRouter.history,
      location = _useReactRouter.location,
      match = _useReactRouter.match;

  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _topic2.getTopicListById)(state, match.params.id);
  });

  var _ref2 = list || {},
      _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? [] : _ref2$data,
      _ref2$loading = _ref2.loading,
      loading = _ref2$loading === void 0 ? false : _ref2$loading;

  var topic = data[0] || null;
  var store = (0, _reactRedux.useStore)();

  var _loadTopics = function _loadTopics(args) {
    return (0, _topic.loadTopicList)(args)(store.dispatch, store.getState);
  };

  (0, _react.useEffect)(function () {
    if (loading) return;
    var id = match.params.id;

    if (!topic) {
      _loadTopics({
        id: id,
        args: {
          _id: id
        }
      }).then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            err = _ref4[0],
            res = _ref4[1];

        if (!res || res && res.data && !res.data[0]) {
          setNotFound('话题不存在');
        }
      });
    }
  }, [match.params.id]);
  if (!topic || loading) return _react["default"].createElement("div", {
    className: "text-center"
  }, _react["default"].createElement(_loading["default"], null));
  var topic_id = [];

  if (topic.children && topic.children.length > 0) {
    topic.children.map(function (item) {
      topic_id.push(item._id);
    });
  } else {
    topic_id.push(topic._id);
  }

  topic_id = topic_id.join(',');
  return _react["default"].createElement(_twoColumns["default"], null, _react["default"].createElement("div", null, _react["default"].createElement(_meta["default"], {
    title: topic.name
  }), _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header p-4"
  }, _react["default"].createElement(_topicCard["default"], {
    topic: topic
  })), _react["default"].createElement("div", {
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
  })))), _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("b", null, "\u6700\u70ED")), _react["default"].createElement("div", {
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
  })))));
});

topicDetail.loadDataOnServer =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref5) {
    var store, match, res, req, user, id, err, topic, _ref7, _ref8, searchParams, ids;

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
            return (0, _topic.loadTopicList)({
              id: id,
              args: {
                _id: id
              }
            })(store.dispatch, store.getState);

          case 6:
            _ref7 = _context.sent;
            _ref8 = _slicedToArray(_ref7, 2);
            err = _ref8[0];
            topic = _ref8[1];

            if (!(!err && topic && topic.data && topic.data[0])) {
              _context.next = 20;
              break;
            }

            topic = topic.data[0];
            searchParams = analyzeUrlParams(match.search);
            ids = [];

            if (topic.children && topic.children.length > 0) {
              topic.children.map(function (item) {
                ids.push(item._id);
              });
            } else {
              ids.push(topic._id);
            }

            _context.next = 17;
            return (0, _posts.loadPostsList)({
              id: topic._id,
              args: _objectSpread({
                sort_by: "sort_by_date:-1",
                deleted: false,
                weaken: false,
                page_size: 30,
                topic_id: ids.join(',')
              }, searchParams)
            })(store.dispatch, store.getState);

          case 17:
            return _context.abrupt("return", {
              code: 200
            });

          case 20:
            return _context.abrupt("return", {
              code: 404,
              text: '该话题不存在'
            });

          case 21:
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

var _default = topicDetail;
/**
 * 分析url上面的参数
 * @param  {String} search location.search
 * @return {Object}        符合的参数对象
 */

exports["default"] = _default;

var analyzeUrlParams = function analyzeUrlParams(search) {
  var params = {};
  (search.split('?')[1] || '').split('&').map(function (item) {
    var s = item.split('=');
    params[s[0]] = s[1];
  });
  var whiteParams = {};
  var whiteList = {
    // sort_by: (s)=>s,
    // recommend: (s)=>true,
    // deleted: (s)=>true,
    // weaken: (s)=>true,
    page_number: function page_number(s) {
      return parseInt(s);
    } // page_size: (s)=>parseInt(s)
    // start_create_at: (s)=>s,
    // end_create_at: (s)=>s,
    // topic_id: (s)=>s,
    // user_id: (s)=>s,
    // _id: (s)=>s

  };

  for (var i in params) {
    if (whiteList[i]) whiteParams[i] = whiteList[i](params[i]);
  }

  return whiteParams;
};

/***/ })

};;