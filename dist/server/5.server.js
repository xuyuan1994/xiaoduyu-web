exports.ids = [5];
exports.modules = {

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

/***/ 140:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hover": "_3kx5s"
};

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _session = __webpack_require__(136);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// redux
function _default(_ref) {
  var people_id = _ref.people_id,
      className = _ref.className;

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      history = _useReactRouter.history;

  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  var store = (0, _reactRedux.useStore)();

  var _getSession = function _getSession(args) {
    return (0, _session.getSession)(args)(store.dispatch, store.getState);
  }; // 自己的问题，不能关注


  if (me && me._id && me._id == people_id) {
    return '';
  }

  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };

  var handle = function handle(e) {
    e.stopPropagation();

    _getSession({
      people_id: people_id
    }).then(function (res) {
      if (res) {
        history.push("/session/".concat(res));
      }
    });
  };

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
    xlinkHref: "/feather-sprite.svg#message-circle"
  }));

  if (!me) {
    return _react["default"].createElement("span", {
      className: className,
      "data-toggle": "modal",
      "data-target": "#sign",
      onClick: stopPropagation
    }, icon, "\u79C1\u4FE1");
  } else {
    return _react["default"].createElement("span", {
      className: className,
      onClick: handle
    }, icon, "\u79C1\u4FE1");
  }
}

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

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

var _followList = _interopRequireDefault(__webpack_require__(238));

var _postsList = _interopRequireDefault(__webpack_require__(139));

var _commentList = _interopRequireDefault(__webpack_require__(161));

__webpack_require__(240);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// components
var _default = function _default(_ref) {
  var people = _ref.people;

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      history = _useReactRouter.history,
      location = _useReactRouter.location,
      match = _useReactRouter.match;

  var id = people._id;
  var typeList = {
    '/comments': _react["default"].createElement(_commentList["default"], {
      id: id + '-people',
      itemType: "text",
      query: {
        user_id: id,
        sort_by: "create_at",
        parent_id: 'not-exists',
        deleted: false,
        weaken: false
      },
      fields: "\n        content_html\n        create_at\n        reply_count\n        like_count\n        _id\n        posts_id{\n          _id\n          title\n        }\n      ",
      showPagination: true
    }),
    '/fans': _react["default"].createElement(_followList["default"], {
      id: 'fans-' + id,
      query: {
        people_id: id,
        sort_by: 'create_at',
        deleted: false
      },
      fields: "\n        user_id {\n          _id\n          nickname\n          create_at\n          fans_count\n          comment_count\n          follow_people_count\n          follow\n          avatar_url\n          brief\n        }\n      ",
      scrollLoad: true
    }),
    "/follow-peoples": _react["default"].createElement(_followList["default"], {
      id: 'people-' + id,
      query: {
        user_id: id,
        people_id: 'exists',
        sort_by: 'create_at',
        deleted: false
      },
      fields: "\n        people_id {\n          _id\n          nickname\n          create_at\n          fans_count\n          comment_count\n          follow_people_count\n          follow\n          avatar_url\n          brief\n        }\n      ",
      scrollLoad: true
    }),
    "/follow-topics": _react["default"].createElement(_followList["default"], {
      id: 'topic-' + id,
      query: {
        user_id: id,
        topic_id: 'exists',
        sort_by: 'create_at',
        deleted: false
      },
      fields: "\n        topic_id {\n          _id\n          avatar\n          name\n          follow\n        }\n      ",
      scrollLoad: true
    }),
    "/follow-posts": _react["default"].createElement(_followList["default"], {
      id: 'posts-' + id,
      query: {
        user_id: id,
        posts_id: 'exists',
        sort_by: 'create_at',
        deleted: false
      },
      fields: "\n        posts_id {\n          _id\n          title\n          follow\n        }\n      ",
      scrollLoad: true
    }),
    "/": _react["default"].createElement(_postsList["default"], {
      id: id,
      query: {
        user_id: id,
        sort_by: "create_at",
        deleted: false
      } // itemType="text"
      ,
      fields: "\n      _id\n      comment_count\n      reply_count\n      create_at\n      follow_count\n      like_count\n      title\n      topic_id{\n        _id\n        name\n      }\n      view_count\n      ",
      scrollLoad: true
    })
  };
  var pathname = location.pathname;
  pathname = pathname.replace('/people/' + people._id, '');
  if (!pathname) pathname = '/'; // nav nav-tabs nav-justified justify-content-center

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "card mb-0 border-top-0  border-bottom-0 rounded-0"
  }, _react["default"].createElement("div", {
    className: "card-body p-0 pt-2 pb-2"
  }, _react["default"].createElement("ul", {
    className: "nav justify-content-center"
  }, _react["default"].createElement("li", {
    className: "nav-item"
  }, _react["default"].createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-dark",
    exact: true,
    to: "/people/".concat(people._id)
  }, "\u5E16\u5B50 ", people.posts_count || '')), _react["default"].createElement("li", {
    className: "nav-item"
  }, _react["default"].createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-dark",
    exact: true,
    to: "/people/".concat(people._id, "/comments")
  }, "\u8BC4\u8BBA ", people.comment_count || '')), _react["default"].createElement("li", {
    className: "nav-item"
  }, _react["default"].createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-dark",
    exact: true,
    to: "/people/".concat(people._id, "/fans")
  }, "\u7C89\u4E1D ", people.fans_count || '')), _react["default"].createElement("li", {
    className: "nav-item"
  }, _react["default"].createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-dark",
    exact: true,
    to: "/people/".concat(people._id, "/follow-peoples")
  }, "\u5173\u6CE8 ", people.follow_people_count || '')), _react["default"].createElement("li", {
    className: "nav-item"
  }, _react["default"].createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-dark",
    exact: true,
    to: "/people/".concat(people._id, "/follow-posts")
  }, "\u6536\u85CF ", people.follow_posts_count || '')), _react["default"].createElement("li", {
    className: "nav-item"
  }, _react["default"].createElement(_reactRouterDom.NavLink, {
    className: "nav-link text-dark",
    exact: true,
    to: "/people/".concat(people._id, "/follow-topics")
  }, "\u8BDD\u9898 ", people.follow_topic_count || ''))))), _react["default"].createElement("div", {
    className: "card border-top _3fWML"
  }, typeList[pathname] || null));
};

exports["default"] = _default;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _reactRedux = __webpack_require__(7);

var _follow = __webpack_require__(135);

var _follow2 = __webpack_require__(39);

var _follow3 = _interopRequireDefault(__webpack_require__(130));

var _list = _interopRequireDefault(__webpack_require__(123));

__webpack_require__(239);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _default(props) {
  var id = props.id;
  var store = (0, _reactRedux.useStore)();
  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _follow2.getFollowListById)(state, id);
  });
  return _react["default"].createElement(_list["default"], _extends({}, props, list, {
    load: function load(params) {
      return (0, _follow.findFollows)(params)(store.dispatch, store.getState);
    },
    renderItem: function renderItem(item) {
      var people = item.people_id || item.user_id || null;
      var posts = item.posts_id || null;
      var topic = item.topic_id || null;
      var content = null;
      var key = null;

      if (people) {
        key = people._id;
        content = _react["default"].createElement("div", {
          className: "_3lN-v"
        }, _react["default"].createElement("img", {
          className: "_1YUZY",
          src: people.avatar_url
        }), _react["default"].createElement("div", {
          className: "d-flex justify-content-between"
        }, _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
          to: "/people/".concat(people._id),
          className: "text-dark"
        }, _react["default"].createElement("b", null, people.nickname)), people.brief ? _react["default"].createElement("div", {
          className: "text-secondary"
        }, people.brief) : null, _react["default"].createElement("div", {
          className: "text-secondary _28PzR"
        }, people.posts_count ? _react["default"].createElement("small", null, "\u5E16\u5B50 ", people.posts_count) : null, people.comment_count ? _react["default"].createElement("small", null, "\u8BC4\u8BBA ", people.comment_count) : null, people.fans_count ? _react["default"].createElement("small", null, "\u7C89\u4E1D ", people.fans_count) : null, people.follow_people_count ? _react["default"].createElement("small", null, "\u5173\u6CE8\u7528\u6237 ", people.follow_people_count) : null, people.follow_posts_count ? _react["default"].createElement("small", null, "\u5173\u6CE8\u5E16\u5B50 ", people.follow_posts_count) : null, people.follow_topic_count ? _react["default"].createElement("small", null, "\u8BDD\u9898 ", people.follow_topic_count) : null)), _react["default"].createElement("div", {
          style: {
            minWidth: '70px',
            textAlign: 'right'
          }
        }, _react["default"].createElement(_follow3["default"], {
          user: people
        }))));
      }

      if (posts) {
        key = posts._id;
        content = _react["default"].createElement("div", null, _react["default"].createElement("div", {
          className: "d-flex justify-content-between"
        }, _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
          to: "/posts/".concat(posts._id),
          className: "text-dark"
        }, _react["default"].createElement("b", null, posts.title))), _react["default"].createElement("div", null, _react["default"].createElement(_follow3["default"], {
          posts: posts
        }))));
      }

      if (topic) {
        key = topic._id;
        content = _react["default"].createElement("div", null, _react["default"].createElement("div", {
          className: "d-flex justify-content-between"
        }, _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
          to: "/topic/".concat(topic._id),
          className: "text-dark"
        }, _react["default"].createElement("b", null, topic.name))), _react["default"].createElement("div", null, _react["default"].createElement(_follow3["default"], {
          topic: topic
        }))));
      }

      return _react["default"].createElement("div", {
        className: "card mb-0 border-0 border-bottom",
        key: key
      }, _react["default"].createElement("div", {
        className: "card-body"
      }, content));
    }
  }));
}

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"list": "_3F_XF",
	"people-item": "_3lN-v",
	"avatar": "_1YUZY",
	"people-status": "_28PzR",
	"link": "_1HFAc"
};

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"box": "_3fWML"
};

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getClassName2 = _interopRequireDefault(__webpack_require__(26));

var _react = _interopRequireDefault(__webpack_require__(3));

var _follow = _interopRequireDefault(__webpack_require__(130));

var _sendMessage = _interopRequireDefault(__webpack_require__(165));

var _moreMenu = _interopRequireDefault(__webpack_require__(152));

__webpack_require__(242);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// styles
var _styleModuleImportMap = {
  "./styles/index.scss": {
    "box": "_2Pf1c",
    "cover-image": "_2wiOl",
    "menu": "_2b5F_",
    "avatar": "EHeby",
    "actions": "kPGXW",
    "content": "_q8po",
    "male": "_1a7CE",
    "female": "_3JjFp",
    "brief": "_2BCCf",
    "nickname": "_3paEG",
    "other-info": "cOlPK"
  }
};

var _default = function _default(_ref) {
  var people = _ref.people;
  return _react["default"].createElement("div", {
    className: "card border-bottom _2Pf1c"
  }, _react["default"].createElement("div", {
    className: "_2wiOl",
    style: people.user_cover ? {
      backgroundImage: "url(".concat(people.user_cover, ")")
    } : null
  }), _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "text-center"
  }, _react["default"].createElement("img", {
    className: "mb-2 EHeby",
    src: people.avatar_url.replace('thumbnail/!50', 'thumbnail/!300')
  })), _react["default"].createElement("div", {
    className: "text-center _q8po"
  }, _react["default"].createElement("div", {
    className: "_3paEG"
  }, people.nickname, Reflect.has(people, 'gender') && people.gender != null ? _react["default"].createElement("span", {
    className: (0, _getClassName2["default"])(people.gender == 1 ? 'male' : 'female', _styleModuleImportMap)
  }) : null), _react["default"].createElement("div", {
    className: "_2BCCf"
  }, people.brief), _react["default"].createElement("div", {
    className: "text-muted"
  }, _react["default"].createElement("small", null, "\u6CE8\u518C\u4E8E", people._create_at))), _react["default"].createElement("div", {
    className: "text-center mt-3"
  }, _react["default"].createElement(_follow["default"], {
    user: people,
    className: "btn btn-outline-primary btn-sm rounded-pill"
  }), _react["default"].createElement(_sendMessage["default"], {
    people_id: people._id,
    className: "btn btn-outline-primary btn-sm rounded-pill ml-3"
  }), _react["default"].createElement(_moreMenu["default"], {
    user: people
  }, _react["default"].createElement("span", {
    className: "btn btn-outline-secondary btn-sm rounded-pill ml-3"
  }, _react["default"].createElement("svg", {
    width: "16px",
    height: "16px",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }, _react["default"].createElement("use", {
    xlinkHref: "/feather-sprite.svg#more-horizontal"
  }))))))));
};

exports["default"] = _default;

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"box": "_2Pf1c",
	"cover-image": "_2wiOl",
	"menu": "_2b5F_",
	"avatar": "EHeby",
	"actions": "kPGXW",
	"male": "_1a7CE",
	"female": "_3JjFp",
	"brief": "_2BCCf",
	"nickname": "_3paEG",
	"other-info": "cOlPK",
	"header": "_1h2qi",
	"profile": "_1gitd"
};

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

var _config = __webpack_require__(1);

var _reactRedux = __webpack_require__(7);

var _people = __webpack_require__(166);

var _people2 = __webpack_require__(31);

var _shell = _interopRequireDefault(__webpack_require__(117));

var _meta = _interopRequireDefault(__webpack_require__(118));

var _loading = _interopRequireDefault(__webpack_require__(122));

var _peopleActivities = _interopRequireDefault(__webpack_require__(237));

var _peopleProfileHeader = _interopRequireDefault(__webpack_require__(241));

var _singleColumns = _interopRequireDefault(__webpack_require__(120));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PeopleDetail = function PeopleDetail(_ref) {
  var setNotFound = _ref.setNotFound;

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      location = _useReactRouter.location,
      match = _useReactRouter.match;

  var id = match.params.id;
  var store = (0, _reactRedux.useStore)();

  var _loadPeopleList = function _loadPeopleList(args) {
    return (0, _people.loadPeopleList)(args)(store.dispatch, store.getState);
  };

  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _people2.getPeopleListById)(state, id);
  });

  var _ref2 = list || {},
      _ref2$data = _ref2.data,
      data = _ref2$data === void 0 ? [] : _ref2$data,
      loading = _ref2.loading,
      more = _ref2.more;

  var people = data[0] || null;
  (0, _react.useEffect)(function () {
    if (!people) {
      _loadPeopleList({
        id: id,
        args: {
          _id: id,
          blocked: false
        }
      }).then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            err = _ref4[0],
            res = _ref4[1];

        if (res && res.data && !res.data[0]) {
          setNotFound('该用户不存在');
        }
      });
    }
  }, []);
  if (!people || loading) return _react["default"].createElement("div", {
    className: "text-center"
  }, _react["default"].createElement(_loading["default"], null));
  return _react["default"].createElement(_singleColumns["default"], null, _react["default"].createElement(_meta["default"], {
    title: people.nickname
  }, _react["default"].createElement("meta", {
    property: "og:locale",
    content: "zh_CN"
  }), _react["default"].createElement("meta", {
    property: "og:type",
    content: "profile"
  }), _react["default"].createElement("meta", {
    property: "og:title",
    content: people.nickname
  }), people.brief ? _react["default"].createElement("meta", {
    name: "description",
    content: "".concat(people.brief)
  }) : null, _react["default"].createElement("meta", {
    property: "og:url",
    content: "".concat(_config.domainName, "/people/").concat(people._id)
  }), _react["default"].createElement("meta", {
    property: "og:site_name",
    content: _config.name
  }), _react["default"].createElement("meta", {
    property: "og:image",
    content: people.avatar_url ? 'https:' + people.avatar_url : _config.domainName + './512x512.png'
  })), _react["default"].createElement(_peopleProfileHeader["default"], {
    people: people
  }), _react["default"].createElement(_peopleActivities["default"], {
    people: people
  }));
};

PeopleDetail.loadDataOnServer =
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
            return (0, _people.loadPeopleList)({
              id: id,
              args: {
                _id: id,
                blocked: false
              }
            })(store.dispatch, store.getState);

          case 6:
            _ref7 = _context.sent;
            _ref8 = _slicedToArray(_ref7, 2);
            err = _ref8[0];
            data = _ref8[1];

            if (!(err || !data || data.length == 0)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", {
              code: 404,
              text: '该用户不存在'
            });

          case 14:
            return _context.abrupt("return", {
              code: 200
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

var _default = (0, _shell["default"])(PeopleDetail);

exports["default"] = _default;

/***/ })

};;