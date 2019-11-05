exports.ids = [15];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

var _reactRouterDom = __webpack_require__(9);

var _config = __webpack_require__(1);

var _reactRedux = __webpack_require__(7);

var _posts3 = __webpack_require__(129);

var _posts4 = __webpack_require__(24);

var _user = __webpack_require__(8);

var _hasReadPosts = __webpack_require__(171);

var _comment = __webpack_require__(138);

var _shell = _interopRequireDefault(__webpack_require__(117));

var _meta = _interopRequireDefault(__webpack_require__(118));

var _commentList = _interopRequireDefault(__webpack_require__(161));

var _detail = _interopRequireDefault(__webpack_require__(233));

var _pc = _interopRequireDefault(__webpack_require__(142));

var _h = _interopRequireDefault(__webpack_require__(172));

var _editorComment = _interopRequireDefault(__webpack_require__(147));

var _loading = _interopRequireDefault(__webpack_require__(122));

var _follow = _interopRequireDefault(__webpack_require__(130));

var _sendMessage = _interopRequireDefault(__webpack_require__(165));

var _twoColumns = _interopRequireDefault(__webpack_require__(134));

__webpack_require__(235);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PostsDetail = function PostsDetail(_ref) {
  var setNotFound = _ref.setNotFound;

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      match = _useReactRouter.match;

  var _ref2 = match.params || {},
      id = _ref2.id;

  var _isMember = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });

  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _posts4.getPostsListById)(state, id);
  });
  var store = (0, _reactRedux.useStore)();

  var _loadPostsList = function _loadPostsList(args) {
    return (0, _posts3.loadPostsList)(args)(store.dispatch, store.getState);
  };

  var _viewPostsById = function _viewPostsById(args) {
    return (0, _posts3.viewPostsById)(args)(store.dispatch, store.getState);
  };

  var _addHasRead = function _addHasRead(args) {
    return (0, _hasReadPosts.addHasRead)(args)(store.dispatch, store.getState);
  };

  var componentDidMount = function componentDidMount() {
    // 如果已经存在 list，说明redux已经存在该帖子数据，则可以不重新请求
    if (!list || !list.data) {
      _loadPostsList({
        id: id,
        args: {
          _id: id,
          deleted: false
        }
      }).then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            err = _ref4[0],
            res = _ref4[1];

        if (res && res.data && res.data[0]) {
          var _posts = res.data[0];
          var total = _posts.comment_count;

          _viewPostsById({
            id: _posts._id
          });

          _addHasRead({
            postsId: _posts._id,
            total: total
          });
        } else {
          setNotFound('帖子不存在');
        }
      });
    } else if (list && list.data && !list.data[0]) {
      setNotFound('404 帖子不存在');
    } else {
      var _posts2 = list.data[0];
      var total = _posts2.comment_count;

      _viewPostsById({
        id: _posts2._id
      });

      _addHasRead({
        postsId: _posts2._id,
        total: total
      });
    }
  };

  (0, _react.useEffect)(componentDidMount, [id]);

  var _ref5 = list || {},
      loading = _ref5.loading,
      data = _ref5.data;

  var posts = data && data[0] ? data[0] : null;

  if (loading || !posts) {
    return _react["default"].createElement("div", {
      className: "text-center"
    }, _react["default"].createElement(_loading["default"], null));
  }

  return _react["default"].createElement(_twoColumns["default"], null, _react["default"].createElement("div", null, _react["default"].createElement(_meta["default"], {
    title: posts.title
  }, _react["default"].createElement("meta", {
    name: "description",
    content: "".concat(posts.content_summary)
  }), _react["default"].createElement("link", {
    rel: "canonical",
    href: "".concat(_config.domainName, "/posts/").concat(posts._id)
  }), _react["default"].createElement("link", {
    rel: "amphtml",
    href: "".concat(_config.domainName, "/amp/posts/").concat(posts._id)
  }), _react["default"].createElement("meta", {
    property: "og:locale",
    content: "zh_CN"
  }), _react["default"].createElement("meta", {
    property: "og:type",
    content: "article"
  }), _react["default"].createElement("meta", {
    property: "og:title",
    content: posts.title
  }), _react["default"].createElement("meta", {
    property: "og:description",
    content: "".concat(posts.content_summary)
  }), _react["default"].createElement("meta", {
    property: "og:url",
    content: "".concat(_config.domainName, "/posts/").concat(posts._id)
  }), _react["default"].createElement("meta", {
    property: "og:site_name",
    content: _config.name
  }), _react["default"].createElement("meta", {
    property: "og:image",
    content: posts._coverImage ? 'https:' + posts._coverImage : _config.domainName + '/512x512.png'
  })), _react["default"].createElement(_detail["default"], {
    posts: posts
  }), _react["default"].createElement("div", {
    className: "mt-2"
  }), _react["default"].createElement("div", {
    className: ( true ? "card border-bottom-0 ".concat(_isMember ? 'mb-0' : '') + " " : undefined) + "_2FgGd"
  }, _react["default"].createElement("div", {
    className: "card-header",
    style: {
      borderBottom: 'none'
    }
  }, posts.comment_count > 0 ? _react["default"].createElement("div", null, posts.comment_count, "\u6761\u8BC4\u8BBA", posts.reply_count ? " / ".concat(posts.reply_count, "\u6761\u56DE\u590D") : '') : _react["default"].createElement("div", {
    className: "text-center"
  }, "\u6682\u65E0\u8BC4\u8BBA")), posts.comment_count > 0 ? _react["default"].createElement("div", {
    className: "card-body p-0"
  }, _react["default"].createElement(_commentList["default"], {
    id: posts._id,
    query: {
      deleted: false,
      weaken: false,
      posts_id: posts._id,
      parent_id: 'not-exists',
      reply_page_size: posts.comment_count > 10 ? 3 : 10,
      page_size: 100,
      page_number: Math.ceil(posts.comment_count / 100)
    },
    showPagination: true,
    postsAuthorId: posts.user_id._id
  })) : null), _isMember ? _react["default"].createElement("div", {
    className: "border-top"
  }, _react["default"].createElement("div", {
    className: "card border-top-0 UNcYe"
  }, _react["default"].createElement(_editorComment["default"], {
    posts_id: posts._id,
    forward: true
  }))) : null, _react["default"].createElement("div", {
    className: "d-block d-lg-none d-xl-none"
  }, _react["default"].createElement(_h["default"], {
    width: "100%",
    height: "200px"
  }))), _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement("div", {
    className: "_2BLm5"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/people/".concat(posts.user_id._id),
    className: "text-dark"
  }, _react["default"].createElement("img", {
    className: "_3TEns",
    src: posts.user_id.avatar_url
  }), _react["default"].createElement("div", {
    className: "_2MqnX"
  }, posts.user_id.nickname)), _react["default"].createElement("div", {
    className: "_1phrR"
  }, _react["default"].createElement("small", null, posts.user_id.brief || "")), _react["default"].createElement("div", {
    className: "mt-2"
  }, _react["default"].createElement(_follow["default"], {
    user: posts.user_id
  }), _react["default"].createElement(_sendMessage["default"], {
    people_id: posts.user_id._id,
    className: "btn btn-outline-primary btn-sm rounded-pill ml-3"
  }))), _react["default"].createElement("div", {
    className: "row border-top pt-3 mt-3"
  }, _react["default"].createElement("div", {
    className: "col-4 text-center"
  }, posts.user_id.follow_people_count, _react["default"].createElement("br", null), _react["default"].createElement("small", {
    className: "text-secondary"
  }, "\u5173\u6CE8")), _react["default"].createElement("div", {
    className: "col-4 text-center"
  }, posts.user_id.fans_count, _react["default"].createElement("br", null), _react["default"].createElement("small", {
    className: "text-secondary"
  }, "\u7C89\u4E1D")), _react["default"].createElement("div", {
    className: "col-4 text-center"
  }, posts.user_id.posts_count, _react["default"].createElement("br", null), _react["default"].createElement("small", {
    className: "text-secondary"
  }, "\u5E16\u5B50"))))), _react["default"].createElement(_pc["default"], {
    width: "250px",
    height: "250px"
  })));
};

PostsDetail.loadDataOnServer =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref6) {
    var store, match, res, req, user, id, _ref8, _ref9, err, data, posts;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref6.store, match = _ref6.match, res = _ref6.res, req = _ref6.req, user = _ref6.user;

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
            return (0, _posts3.loadPostsList)({
              id: id,
              args: {
                _id: id,
                deleted: false
              }
            })(store.dispatch, store.getState);

          case 6:
            _ref8 = _context.sent;
            _ref9 = _slicedToArray(_ref8, 2);
            err = _ref9[0];
            data = _ref9[1];

            if (!(data && data.data && data.data.length > 0)) {
              _context.next = 17;
              break;
            }

            posts = data.data[0];
            _context.next = 14;
            return (0, _comment.loadCommentList)({
              id: posts._id,
              args: {
                deleted: false,
                weaken: false,
                posts_id: posts._id,
                parent_id: 'not-exists',
                reply_page_size: posts.comment_count > 10 ? 3 : 10,
                page_size: 100,
                page_number: Math.ceil(posts.comment_count / 100)
              }
            })(store.dispatch, store.getState);

          case 14:
            return _context.abrupt("return", {
              code: 200
            });

          case 17:
            return _context.abrupt("return", {
              code: 404
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref7.apply(this, arguments);
  };
}();

var _default = (0, _shell["default"])(PostsDetail);

exports["default"] = _default;

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

/***/ 142:
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
  if (!_config.googleAdSense || !_config.googleAdSense.client || !_config.googleAdSense.slot || !_config.googleAdSense.slot.pc) return null;
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
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-body",
    style: {
      padding: '19px'
    }
  }, _react["default"].createElement(_adsbygoogle["default"], props))));
}

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

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _feature = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(234);

var _htmlText = _interopRequireDefault(__webpack_require__(128));

var _like = _interopRequireDefault(__webpack_require__(162));

var _moreMenu = _interopRequireDefault(__webpack_require__(152));

var _follow = _interopRequireDefault(__webpack_require__(130));

var _share = _interopRequireDefault(__webpack_require__(153));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// style
// components
// import WechatShareTips from '@app/components/wechat-share-tips';
function _default(_ref) {
  var posts = _ref.posts;
  return _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "d-block d-md-none"
  }, _react["default"].createElement("div", {
    className: "d-flex justify-content-between align-items-center border-bottom _3VNQY"
  }, _react["default"].createElement("div", {
    className: "w-50"
  }, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/people/".concat(posts.user_id._id),
    className: "text-dark"
  }, _react["default"].createElement("img", {
    className: "Ic5sG",
    src: posts.user_id.avatar_url
  }), _react["default"].createElement("b", null, posts.user_id.nickname)), _react["default"].createElement("div", {
    className: "_1K_H8"
  }, posts.user_id.brief || "...")), _react["default"].createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, _react["default"].createElement(_follow["default"], {
    user: posts.user_id
  })))), _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement("div", {
    className: "_1p8Id"
  }, _react["default"].createElement("div", {
    className: "text-secondary mb-2 _1muop"
  }, _react["default"].createElement("span", null, _react["default"].createElement(_reactRouterDom.Link, {
    to: "/topic/".concat(posts.topic_id.parent_id._id),
    className: "text-secondary"
  }, posts.topic_id.parent_id.name), _react["default"].createElement("span", {
    className: "text-muted mr-1 ml-1"
  }, "\u203A"), _react["default"].createElement(_reactRouterDom.Link, {
    to: "/topic/".concat(posts.topic_id._id),
    className: "text-secondary"
  }, posts.topic_id.name))), _react["default"].createElement("h1", {
    className: "_3NCvr"
  }, posts.title))), posts.content_html ? _react["default"].createElement("div", {
    className: "card-body border-top _2s7Nm"
  }, _react["default"].createElement(_htmlText["default"], {
    content: posts.content_html,
    maxHeight: _feature["default"].posts.contentMaxHeight
  })) : null, _react["default"].createElement("div", {
    className: "card-footer d-flex justify-content-between"
  }, _react["default"].createElement("div", {
    className: "w-50 text-muted _21nLR"
  }, _react["default"].createElement("span", null, posts._create_at), posts.view_count ? _react["default"].createElement("span", null, posts.view_count, "\u6B21\u9605\u8BFB") : null, posts.like_count ? _react["default"].createElement("span", null, posts.like_count, "\u4EBA\u8D5E") : null, posts.follow_count ? _react["default"].createElement("span", null, posts.follow_count, "\u4EBA\u6536\u85CF") : null), _react["default"].createElement("div", {
    className: "JdpMw"
  }, _react["default"].createElement(_like["default"], {
    posts: posts,
    displayNumber: false
  }), _react["default"].createElement(_follow["default"], {
    posts: posts,
    className: "a text-secondary",
    activeClassName: "a text-secondary"
  }), _react["default"].createElement(_share["default"], {
    posts: posts
  }), _react["default"].createElement(_moreMenu["default"], {
    posts: posts
  }))));
}

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"action-bar": "_1KxDL",
	"follow": "vVgC-",
	"active": "_1Skxp",
	"menu": "_1XOXO",
	"posts": "_2Z11S",
	"header": "_1p8Id",
	"author-avatar": "Ic5sG",
	"brief": "_1K_H8",
	"h1": "_3NCvr",
	"head": "_3VNQY",
	"posts-other-info": "_1muop",
	"title": "h2sBI",
	"detail": "_2s7Nm",
	"other": "_2n6u6",
	"info": "_21nLR",
	"actions": "JdpMw",
	"comment-editor": "_1LGjX"
};

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"comment-list": "_2FgGd",
	"editor-comment": "UNcYe",
	"author-info": "_2BLm5",
	"nickname": "_2MqnX",
	"brief": "_1phrR",
	"avatar": "_3TEns"
};

/***/ })

};;