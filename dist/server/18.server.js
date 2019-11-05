exports.ids = [18];
exports.modules = {

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

var _shell = _interopRequireDefault(__webpack_require__(117));

var _meta = _interopRequireDefault(__webpack_require__(118));

var _postsList = _interopRequireDefault(__webpack_require__(139));

var _peopleList = _interopRequireDefault(__webpack_require__(265));

var _singleColumns = _interopRequireDefault(__webpack_require__(120));

__webpack_require__(268);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = (0, _shell["default"])(function () {
  var _useReactRouter = (0, _useReactRouter2["default"])(),
      history = _useReactRouter.history,
      location = _useReactRouter.location;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      q = _useState2[0],
      setQ = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      type = _useState4[0],
      setType = _useState4[1];

  (0, _react.useEffect)(function () {
    var _ref = location.params || {},
        _ref$q = _ref.q,
        q = _ref$q === void 0 ? '' : _ref$q,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? '' : _ref$type;

    var $search = search.current;
    setQ(decodeURIComponent(q));
    setType(type);
    $search.value = decodeURIComponent(q);
    $search.focus();
  });
  var search = (0, _react.createRef)();

  var handleSearch = function handleSearch(event) {
    event.preventDefault();
    var $search = search.current;
    if (!$search.value) return $search.focus();
    history.push("/search?q=".concat($search.value).concat(type && type == 'user' ? '&type=user' : ''));
    setQ($search.value);
  };

  var switchType = function switchType(type) {
    if (!type) {
      history.push("/search?q=".concat(q));
    } else {
      history.push("/search?q=".concat(q, "&type=").concat(type));
    }
  };

  return _react["default"].createElement(_singleColumns["default"], null, _react["default"].createElement(_meta["default"], {
    title: "\u641C\u7D22"
  }), _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-body pt-0 pb-0 border-bottom"
  }, _react["default"].createElement("form", {
    onSubmit: handleSearch
  }, _react["default"].createElement("div", {
    className: "input-group mt-2 mb-2"
  }, _react["default"].createElement("input", {
    type: "text",
    className: "form-control a3RcY",
    ref: search,
    placeholder: "\u641C\u7D22"
  }), _react["default"].createElement("div", {
    className: "input-group-append"
  }, _react["default"].createElement("button", {
    type: "submit",
    className: "btn btn-outline-primary rounded-pill btn-sm pl-3 pr-3 ml-1"
  }, "\u641C\u7D22"))))), _react["default"].createElement("div", {
    className: "card-body",
    style: {
      fontSize: '18px'
    }
  }, _react["default"].createElement("span", {
    className: "badge mr-3 ".concat(type == '' ? 'badge-primary' : 'badge-light'),
    onClick: function onClick() {
      switchType('');
    }
  }, "\u5E16\u5B50"), _react["default"].createElement("span", {
    className: "badge ".concat(type == 'user' ? 'badge-primary' : 'badge-light'),
    onClick: function onClick() {
      switchType('user');
    }
  }, "\u7528\u6237")), _react["default"].createElement("div", {
    className: "card-body p-0"
  }, function () {
    if (!q) return;

    if (!type) {
      return _react["default"].createElement(_postsList["default"], {
        id: q,
        query: {
          title: q,
          sort_by: "create_at",
          deleted: false,
          weaken: false
        },
        scrollLoad: true
      });
    } else if (type == 'user') {
      return _react["default"].createElement(_peopleList["default"], {
        id: q,
        query: {
          nickname: q
        }
      });
    }
  }())));
});

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

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPeopleList = void 0;

var _date = __webpack_require__(13);

var _newGraphqlLoadList = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loadPeopleList = (0, _newGraphqlLoadList["default"])({
  reducerName: 'people',
  actionType: 'SET_PEOPLE_LIST_BY_ID',
  api: 'users',
  fields: "\n    _id\n    nickname_reset_at\n    create_at\n    last_sign_at\n    blocked\n    role\n    avatar\n    brief\n    source\n    posts_count\n    comment_count\n    fans_count\n    like_count\n    follow_people_count\n    follow_topic_count\n    follow_posts_count\n    block_people_count\n    block_posts_count\n    access_token\n    gender\n    nickname\n    banned_to_post\n    avatar_url\n    follow\n    user_cover\n  ",
  processList: function processList(list) {
    list.map(function (posts) {
      posts._last_sign_at = (0, _date.dateDiff)(posts.last_sign_at);
      posts._create_at = (0, _date.dateDiff)(posts.create_at);
      posts._nickname_reset_at = (0, _date.dateDiff)(posts.nickname_reset_at);
      posts._create_at = (0, _date.dateDiff)(posts.create_at);
    });
    return list;
  }
});
exports.loadPeopleList = loadPeopleList;

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _people = __webpack_require__(166);

var _people2 = __webpack_require__(31);

var _listItem = _interopRequireDefault(__webpack_require__(266));

var _list = _interopRequireDefault(__webpack_require__(123));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _default(props) {
  var id = props.id;
  var store = (0, _reactRedux.useStore)();
  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _people2.getPeopleListById)(state, id);
  });
  return _react["default"].createElement(_list["default"], _extends({}, props, list, {
    load: function load(params) {
      return (0, _people.loadPeopleList)(params)(store.dispatch, store.getState);
    },
    renderItem: function renderItem(item) {
      return _react["default"].createElement("div", {
        key: item._id
      }, _react["default"].createElement(_listItem["default"], {
        people: item
      }));
    } // renderHead={({ loadData }: any)=>{
    //   if (list && list.more) {
    //     return (<div className="text-center pt-3 pb-3">
    //         <span className="a" onClick={()=> { loadData(); }}>加载更多</a>
    //       </div>)
    //   } else {
    //     return null
    //   }
    // }}

  }));
}

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

__webpack_require__(267);

var _follow = _interopRequireDefault(__webpack_require__(130));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var people = _ref.people;
  return _react["default"].createElement("div", {
    key: people._id,
    className: "card-body border-top"
  }, _react["default"].createElement("div", {
    className: "_2CyfL"
  }, _react["default"].createElement("img", {
    className: "_3ZVlW",
    src: people.avatar_url
  }), _react["default"].createElement("div", {
    className: "row"
  }, _react["default"].createElement("div", {
    className: "col-sm-12 col-md-8"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/people/".concat(people._id),
    className: "text-dark"
  }, people.nickname), people.brief ? _react["default"].createElement("div", {
    className: "text-secondary"
  }, people.brief) : null, _react["default"].createElement("div", {
    className: "text-muted"
  }, _react["default"].createElement("small", null, "\u6CE8\u518C\u4E8E ", people._create_at)), _react["default"].createElement("div", {
    className: "text-muted _2D0Ln"
  }, people.posts_count ? _react["default"].createElement("small", null, "\u5E16\u5B50 ", people.posts_count) : null, people.comment_count ? _react["default"].createElement("small", null, "\u8BC4\u8BBA ", people.comment_count) : null, people.fans_count ? _react["default"].createElement("small", null, "\u7C89\u4E1D ", people.fans_count) : null, people.follow_people_count ? _react["default"].createElement("small", null, "\u5173\u6CE8\u7528\u6237 ", people.follow_people_count) : null)), _react["default"].createElement("div", {
    className: "col-sm-12 col-md-4 text-right"
  }, _react["default"].createElement(_follow["default"], {
    user: people
  })))));
};

exports["default"] = _default;

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"people-item": "_2CyfL",
	"avatar": "_3ZVlW",
	"people-status": "_2D0Ln"
};

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tab-bar": "_3PLbs",
	"search-button": "_2fOIB",
	"input": "a3RcY"
};

/***/ })

};;