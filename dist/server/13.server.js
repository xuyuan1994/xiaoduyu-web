exports.ids = [13];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _shell = _interopRequireDefault(__webpack_require__(117));

var _meta = _interopRequireDefault(__webpack_require__(118));

var _createPosts = _interopRequireDefault(__webpack_require__(271));

var _singleColumns = _interopRequireDefault(__webpack_require__(120));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// components
var _default = (0, _shell["default"])(function () {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_meta["default"], {
    title: '创建话题'
  }), _react["default"].createElement(_singleColumns["default"], null, _react["default"].createElement(_createPosts["default"], null)));
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

/***/ 124:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loading": "_3H7UH"
};

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _pangu = _interopRequireDefault(__webpack_require__(88));

__webpack_require__(131);

var _convert = _interopRequireDefault(__webpack_require__(132));

var _highlight = _interopRequireDefault(__webpack_require__(89));

var _javascript = _interopRequireDefault(__webpack_require__(90));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(_ref) {
  var content = _ref.content,
      maxHeight = _ref.maxHeight;
  if (!content) return null;

  var _useState = (0, _react.useState)(content),
      _useState2 = _slicedToArray(_useState, 2),
      html = _useState2[0],
      setHtml = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      expand = _useState4[0],
      setExpand = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      contentHeight = _useState6[0],
      setContentHeight = _useState6[1];

  var contentRef = (0, _react.createRef)();
  (0, _react.useEffect)(function () {
    setHtml((0, _convert["default"])(content));

    _highlight["default"].registerLanguage('javascript', _javascript["default"]);

    $('.markdown-body pre').each(function (i, block) {
      _highlight["default"].highlightBlock(block);
    });

    _pangu["default"].spacingElementByClassName('markdown-body');

    if (!contentHeight) {
      setContentHeight(contentRef && contentRef.current ? contentRef.current.offsetHeight : 0);
    }
  }, [content]);
  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    ref: contentRef,
    style: !expand && maxHeight && contentHeight > maxHeight ? {
      maxHeight: "".concat(maxHeight, "px"),
      overflow: 'hidden'
    } : null,
    className: "markdown-body _1_Fpd",
    dangerouslySetInnerHTML: {
      __html: html
    }
  }), function () {
    if (expand || !maxHeight || contentHeight < maxHeight) return null;
    return _react["default"].createElement("div", {
      className: "_2GBbo"
    }, _react["default"].createElement("span", {
      className: "btn btn-outline-primary btn-block btn-sm mt-3",
      onClick: function onClick(e) {
        e.stopPropagation();
        setExpand(expand ? false : true);
      }
    }, !expand && maxHeight && contentHeight > maxHeight ? '展开全部' : '收起'));
  }());
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

/***/ 131:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "_1_Fpd",
	"max-height": "_1MobS",
	"expand-button": "_2GBbo"
};

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// import pangu from 'pangu';
// 从html字符串中，获取所有图片地址
var abstractImagesFromHTML = function abstractImagesFromHTML(str) {
  var imgReg = /\<img(.*?)>/g;
  var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
  var result = [];
  var imgs = str.match(imgReg);

  if (imgs && imgs.length > 0) {
    imgs.map(function (img) {
      var _img = img.match(srcReg);

      if (_img && _img[1]) result.push(_img[1]);
    });
  }

  return result;
};

function randomString(len) {
  len = len || 32;
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/

  var maxPos = $chars.length;
  var pwd = '';

  for (var i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }

  return pwd;
}
/*
// 单曲
https://music.163.com/#/song?id=484849174
https://music.163.com/song?id=484849174
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=484849174&auto=1&height=66"></iframe>

// 歌单
https://music.163.com/#/playlist?id=2284177332
https://music.163.com/playlist?id=2284177332
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="//music.163.com/outchain/player?type=0&id=2284177332&auto=1&height=430"></iframe>

// 专辑
https://music.163.com/#/album?id=34420299
https://music.163.com/album?id=34420299
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="//music.163.com/outchain/player?type=1&id=34420299&auto=1&height=430"></iframe>

// 
https://music.163.com/dj?id=2061627437&userid=579158854
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=3&id=2061627437&auto=1&height=66"></iframe>

// 电台
https://music.163.com/radio/?id=349996062&userid=579158854
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="//music.163.com/outchain/player?type=4&id=349996062&auto=1&height=430"></iframe>
*/
// 解析网页中的网易音乐地址


function music163(html) {
  var re = /(http:\/\/music\.163\.com|https:\/\/music\.163\.com|music\.163\.com)\/(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi;
  var musics = html.match(re);

  if (musics && musics.length > 0) {
    musics.map(function (str) {
      var type = -1,
          id;

      if (str.indexOf('/song?') != -1) {
        type = 2;
      } else if (str.indexOf('/playlist?') != -1) {
        type = 0;
      } else if (str.indexOf('/album?') != -1) {
        type = 1;
      } else if (str.indexOf('/dj?') != -1) {
        type = 3;
      } else if (str.indexOf('/radio/?') != -1) {
        type = 4;
      }

      try {
        str.split('?')[1].split('&').map(function (s) {
          var arr = s.split('=');
          if (arr[0] == 'id') id = arr[1];
        });
      } catch (err) {
        console.log(err);
      }

      if (type != -1 && id) {
        if (type == 2) {
          var url = "//music.163.com/outchain/player?type=2&id=".concat(id, "&auto=0&height=66");
          html = html.replace(str, "<iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86 src=\"".concat(url, "\"></iframe>"));
        } else if (type == 3) {
          var _url = "//music.163.com/outchain/player?type=3&id=".concat(id, "&auto=1&height=66");

          html = html.replace(str, "<iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=86 src=\"".concat(_url, "\"></iframe>"));
        } else if (type == 4) {
          var _url2 = "//music.163.com/outchain/player?type=4&id=".concat(id, "&auto=1&height=430");

          html = html.replace(str, "<iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=330 height=450 src=\"".concat(_url2, "\"></iframe>"));
        } else {
          var _url3 = "//music.163.com/outchain/player?type=".concat(type, "&id=").concat(id, "&height=430");

          html = html.replace(str, "<iframe type=\"music\" src=\"".concat(_url3, "\" height=\"430\"></iframe>"));
        }
      }
    });
  }

  return html;
}
/**
 * http://v.youku.com/v_show/id_XMzkyMzA5MDg0MA==.html?spm=a2hww.11359951.m_26673_c_32078.5~5!3~5!3~5~5~A
* <iframe height=498 width=510 src='http://player.youku.com/embed/XMzkyMzA5MDg0MA==' frameborder=0 'allowfullscreen'></iframe>
 */


function youku(html) {
  var re = /(http:\/\/v\.youku\.com|https:\/\/v\.youku\.com|v\.youku\.com)\/v\_show\/id\_(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi;
  var arr = html.match(re);
  if (!arr || arr.length == 0) return html;
  arr.map(function (str) {
    var id;

    try {
      id = str.split('v.youku.com/v_show/id_')[1].split('.')[0];
      id = id.split('?')[0];
    } catch (err) {
      console.log(err);
    }

    if (id) {
      var url = "//player.youku.com/embed/".concat(id);
      html = html.replace(str, "<iframe width='100%' src='".concat(url, "' frameborder=0 'allowfullscreen'></iframe>"));
    }
  });
  return html;
}
/*
https://www.bilibili.com/video/av36317487/?spm_id_from=333.334.b_63686965665f7265636f6d6d656e64.17
<iframe src="//player.bilibili.com/player.html?aid=36317487&cid=63759446&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
*/


function bilibili(html) {
  var re = /(https:\/\/www\.bilibili\.com|https:\/\/bilibili\.com|http:\/\/www.bilibili\.com|http:\/\/bilibili\.com|www\.bilibili\.com|bilibili\.com)\/video\/av(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi;
  var arr = html.match(re);
  if (!arr || arr.length == 0) return html;
  arr.map(function (str) {
    var id;

    try {
      id = str.split('bilibili.com/video/av')[1].split('/')[0];
      id = id.split('?')[0];
    } catch (err) {
      console.log(err);
    }

    if (id) {
      var url = "//player.bilibili.com/player.html?aid=".concat(id);
      html = html.replace(str, "<iframe src=\"".concat(url, "\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>"));
    }
  });
  return html;
}
/*
https://www.acfun.cn/v/ac5005427
<iframe style="min-width: 500px;min-height: 300px"   src="https://www.acfun.cn/player/ac5005427" id="ACFlashPlayer-re"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
*/


function acfun(html) {
  var re = /(https:\/\/www\.acfun\.cn|https:\/\/acfun\.cn|http:\/\/www.acfun\.cn|http:\/\/acfun\.cn|www\.acfun\.cn|acfun\.cn)\/v\/(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi;
  var arr = html.match(re);
  if (!arr || arr.length == 0) return html;
  arr.map(function (str) {
    var id;

    try {
      id = str.split('acfun.cn/v/')[1].split('/')[0];
      id = id.split('?')[0];
    } catch (err) {
      console.log(err);
    }

    if (id) {
      var url = "https://www.acfun.cn/player/".concat(id);
      html = html.replace(str, "<iframe src=\"".concat(url, "\" id=\"ACFlashPlayer-re\"  scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\"></iframe>"));
    }
  });
  return html;
}
/**
 * https://www.youtube.com/watch?v=c_WCKfQCQuk
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/c_WCKfQCQuk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */


function youtube(html) {
  var re = /(https:\/\/www\.youtube\.com|https:\/\/youtube\.com|http:\/\/www.youtube\.com|http:\/\/youtube\.com|www\.youtube\.com|youtube\.com)\/watch\?v\=(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi;
  var arr = html.match(re);
  if (!arr || arr.length == 0) return html;
  arr.map(function (str) {
    var id;

    try {
      str.split('?')[1].split('&').map(function (item) {
        var arr = item.split('=');

        if (arr && arr[0] == 'v') {
          id = arr[1];
        }
      });
    } catch (err) {
      console.log(err);
    }

    if (id) {
      var url = "//www.youtube.com/embed/".concat(id);
      html = html.replace(str, "<iframe width=\"100%\" style=\"background:#f9f9f9;\" src=\"".concat(url, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"));
    }
  });
  return html;
}
/**
 * https://v.qq.com/x/cover/l19x9qoetxc5rh8/h0028rgy2x5.html(可以匹配)
 * https://v.qq.com/x/cover/i5w51tl7vbl5mid.html(不能匹配)
 * https://v.qq.com/x/page/e0887umbbap.html
 * <iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=h0028rgy2x5" allowFullScreen="true"></iframe>
 */


function vqq(html) {
  var re = /(https:\/\/v\.|http:\/\/v\.|v\.)qq\.com\/x\/(page|cover)\/(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi;
  var arr = html.match(re); // console.log(arr);

  if (!arr || arr.length == 0) return html;
  arr.map(function (str) {
    var id;

    try {
      var urlArr = str.split('?')[0].split('.');
      urlArr = urlArr[urlArr.length - 2].split('/');
      id = str.split('?')[0].split('/').pop().split('.')[0];
    } catch (err) {
      console.log(err);
    }

    if (id) {
      var url = "//v.qq.com/txp/iframe/player.html?vid=".concat(id);
      html = html.replace(str, "<iframe frameborder=\"0\" src=\"".concat(url, "\" allowFullScreen=\"true\"></iframe>"));
    }
  });
  return html;
}

var link = function link(str) {
  if (!str) return '';
  str = str.replace('&nbsp;', ' ');
  var imgReg = /(<a(.*?)>(.*?)<\/a>|<img(.*?)>|<ifram(.*?)>)/gi;
  var aList = [];
  var arr = str.match(imgReg);

  if (arr && arr.length > 0) {
    str.match(imgReg).map(function (item) {
      var id = '#' + randomString(18) + '#';
      aList.push({
        id: id,
        value: item
      });
      str = str.replace(item, id);
    });
  }

  var linkReg = /(http:\/\/>http:\/\/|http:\/\/|https:\/\/|www\.|magnet\:\?xt\=)(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|\"|\'|$)/gi;
  var links = str.match(linkReg); // console.log(links);

  if (links && links.length > 0) {
    links = links.sort(function (a, b) {
      return b.length - a.length;
    });
    var _links = [];
    links.map(function (item) {
      /*
      switch (true) {
        case item.indexOf('youtube.com') != -1:
          return;
        case item.indexOf('youku.com') != -1:
          return;
        case item.indexOf('bilibli.com') != -1:
          return;
        case item.indexOf('music.163.com') != -1:
          return;
        // case item.indexOf('v.qq.com') != -1:
          // return;
      }
      */
      var id = '#' + randomString(18) + '#';

      _links.push({
        id: id,
        value: item
      });

      str = str.replace(item, id);
    });

    _links.map(function (item) {
      // if (Device.isMobileDevice()) {
      // str = str.replace(item.id, `<a href=${item.value} rel="nofollow">${item.value}</a>`);
      // } else {
      var href = item.value.indexOf('http') == -1 ? 'http:' + item.value : item.value;
      str = str.replace(item.id, "<a href=".concat(href, " target=\"_blank\" rel=\"nofollow\">").concat(item.value, "</a>")); // }
    });
  }

  if (aList.length > 0) {
    aList.map(function (item) {
      str = str.replace(item.id, item.value);
    });
  }

  return str;
};

var image = function image(html) {
  var imgReg = /\<img(.*?)>/g; // let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
  // let result:Array<string> = [];

  var imgs = html.match(imgReg); // // 图片处理
  // let re = /\<img src\=\"(.*?)\"\>/g;
  // let imgs = html.match(re);
  // console.log(imgs);
  // 获取页面中所有的图片

  var allImage = abstractImagesFromHTML(html);
  allImage.map(function (item, index) {
    allImage[index] = item.split('?')[0];
  });
  allImage = "['" + allImage.join("','") + "']";

  if (imgs && imgs.length > 0) {
    imgs.map(function (img, index) {
      var _img = img; // 如果url中包含“?”,需要将其转译成字符串

      _img = _img.replace(/\?/g, "\\?"); // img = encodeURIComponent(img);

      html = html.replace(new RegExp(_img, "gm"), '<div onclick=\"webPictureViewer(' + allImage + ',' + index + ');\">' + img + '</div>'); // html = html.replace(new RegExp(_img,"gm"), '<div onclick=\"webPictureViewer('+allImage+','+index+');\" class=\"load-demand\" data-load-demand=\''+img+'\'></div>');
    });
  }

  return html;
}; // 修剪整理html


var trimHtml = function trimHtml(html) {
  // 取出页面中代码的部分，使其保留原始html
  var imgReg = /\<pre>(.*?)<\/pre>/g;
  var preArr = html.match(imgReg);
  var aList = [];

  if (preArr && preArr.length > 0) {
    preArr.map(function (item) {
      var id = '#' + randomString(18) + '#';
      aList.push({
        id: id,
        value: item
      });
      html = html.replace(item, id);
    });
  } // 删除所有换行符


  html = html.replace(/([\r\n])/g, "");
  var arr = html.split('<p><br></p>'); // 修剪有多行的换行符，变成一行

  var trim = function trim(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) == -1) {
        newArr.push(arr[i]);
      }
    }

    if (newArr.length > 0 && !newArr[0]) {
      newArr.splice(0, 1);
    }

    if (newArr.length > 0 && !newArr[newArr.length - 1]) {
      newArr.splice(newArr.length - 1, 1);
    }

    return newArr;
  };

  arr = trim(arr);
  html = arr.join('<p><br></p>'); // 将pre代码部分还原回去

  if (aList.length > 0) {
    aList.map(function (item) {
      html = html.replace(item.id, item.value);
    });
  }

  return html;
};

var _default = function _default(html) {
  if (!html) return '';
  html = trimHtml(html);
  html = music163(html);
  html = youku(html);
  html = bilibili(html);
  html = acfun(html);
  html = youtube(html);
  html = vqq(html);
  html = link(html);
  html = image(html);
  return html;
};

exports["default"] = _default;

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

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

var _reactRedux = __webpack_require__(7);

var _posts = __webpack_require__(129);

var _editorPosts = _interopRequireDefault(__webpack_require__(272));

var _loading = _interopRequireDefault(__webpack_require__(122));

var _singleColumns = _interopRequireDefault(__webpack_require__(120));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default() {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      posts = _useState2[0],
      setPosts = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var store = (0, _reactRedux.useStore)();

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      history = _useReactRouter.history,
      location = _useReactRouter.location,
      match = _useReactRouter.match;

  (0, _react.useEffect)(function () {
    var posts_id = location.params.posts_id;

    if (!posts_id || posts) {
      setLoading(false);
      return;
    }

    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var err, res, result, _result;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoading(true);
                _context.next = 3;
                return (0, _posts.loadPostsList)({
                  id: 'edit_' + posts_id,
                  args: {
                    _id: posts_id
                  },
                  fields: "\n          _id\n          title\n          content\n          content_html\n          topic_id{\n            _id\n            name\n          }\n        "
                  /*
                  filters: {
                    variables: { _id: posts_id },
                    select: `
                    _id
                    title
                    content
                    content_html
                    topic_id{
                      _id
                      name
                    }
                    `
                  }
                  */

                })(store.dispatch, store.getState);

              case 3:
                result = _context.sent;
                _result = _slicedToArray(result, 2);
                err = _result[0];
                res = _result[1];

                if (!res || !res.data || !res.data[0]) {} else {
                  setPosts(res.data[0]);
                  setLoading(false);
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, []);

  var successCallback = function successCallback(posts) {
    history.push("/posts/".concat(posts._id));
  };

  if (loading) return _react["default"].createElement(_loading["default"], null);
  return _react["default"].createElement(_singleColumns["default"], null, posts ? _react["default"].createElement(_editorPosts["default"], _extends({
    successCallback: successCallback
  }, posts)) : _react["default"].createElement(_editorPosts["default"], {
    successCallback: successCallback
  }));
}

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _getClassName2 = _interopRequireDefault(__webpack_require__(26));

var _react = _interopRequireWildcard(__webpack_require__(3));

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

var _storage = _interopRequireDefault(__webpack_require__(23));

var _reactRedux = __webpack_require__(7);

var _posts = __webpack_require__(129);

var _topic = __webpack_require__(29);

var _topic2 = __webpack_require__(16);

var _device = _interopRequireDefault(__webpack_require__(125));

var _to = _interopRequireDefault(__webpack_require__(15));

var _editor = _interopRequireDefault(__webpack_require__(148));

var _modal = _interopRequireDefault(__webpack_require__(137));

var _htmlText = _interopRequireDefault(__webpack_require__(128));

__webpack_require__(273);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _styleModuleImportMap = {
  "./styles/index.scss": {
    "node-selector": "_3-FAU",
    "topics-container": "_4Aq4e",
    "close": "kyEO5",
    "head": "pGwtz",
    "topic": "c-kRP",
    "active": "_2cZUf",
    "mask": "_1-Hs0",
    "choose-topic-button": "_7_5h3",
    "title": "_3QU-z",
    "editor": "_1Iz2E",
    "button": "_2BgsM"
  }
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(props) {
  var _id = props._id,
      successCallback = props.successCallback;

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      location = _useReactRouter.location;

  var titleRef = (0, _react.useRef)(); // const [ mount, setMount ] = useState(true);

  var _useState = (0, _react.useState)(props.content || ''),
      _useState2 = _slicedToArray(_useState, 2),
      contentStateJSON = _useState2[0],
      setContentStateJSON = _useState2[1];

  var _useState3 = (0, _react.useState)(props.content_html || ''),
      _useState4 = _slicedToArray(_useState3, 2),
      contentHTML = _useState4[0],
      setContentHTML = _useState4[1];

  var _useState5 = (0, _react.useState)(props.topic_id || null),
      _useState6 = _slicedToArray(_useState5, 2),
      topic = _useState6[0],
      setTopic = _useState6[1];

  var _useState7 = (0, _react.useState)(_react["default"].createElement("div", null)),
      _useState8 = _slicedToArray(_useState7, 2),
      editor = _useState8[0],
      setEditor = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      editorElement = _useState12[0],
      setEditorElement = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      preview = _useState14[0],
      setPreview = _useState14[1]; // redux


  var topicList = (0, _reactRedux.useSelector)(function (state) {
    return (0, _topic2.getTopicListById)(state, 'new-posts');
  });
  var store = (0, _reactRedux.useStore)();

  var _addPosts = function _addPosts(args) {
    return (0, _posts.addPosts)(args)(store.dispatch, store.getState);
  };

  var _loadTopicList = function _loadTopicList(args) {
    return (0, _topic.loadTopicList)(args)(store.dispatch, store.getState);
  };

  var _updatePosts = function _updatePosts(args) {
    return (0, _posts.updatePosts)(args)(store.dispatch, store.getState);
  }; // 标题发生变化


  var onTitleChange = function onTitleChange() {
    if (_id) return;

    _storage["default"].save({
      key: 'posts-title',
      data: titleRef.current.value
    });
  }; // 话题发生变化


  var onSelectTopic = function onSelectTopic(topic) {
    setTopic(topic);
    $('#topics-modal').modal('hide');
  }; // 内容发生变化


  var onContentChange = function onContentChange(contentStateJSON, contentHTML) {
    // console.log(contentHTML);
    setContentStateJSON(contentStateJSON);
    setContentHTML(contentHTML);
    if (_id) return;

    _storage["default"].save({
      key: 'posts-content',
      data: contentStateJSON
    });
  }; // 提交/创建与更新


  var submit =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var title, err, res, _result, _result2, result, _result3;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              title = titleRef.current;

              if (!loading) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              if (topic) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", alert('您还未选择话题'));

            case 5:
              if (title.value) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", title.focus());

            case 7:
              if (!(contentHTML.indexOf('<img src="">') != -1)) {
                _context.next = 10;
                break;
              }

              Toastify({
                text: '有图片上传中，请等待上传完成后再提交',
                duration: 3000,
                backgroundColor: 'linear-gradient(to right, #0988fe, #1c75fb)'
              }).showToast();
              return _context.abrupt("return");

            case 10:
              setLoading(true);

              if (!_id) {
                _context.next = 21;
                break;
              }

              _context.next = 14;
              return (0, _to["default"])(_updatePosts({
                id: _id,
                // type: type._id,
                topicId: topic._id,
                topicName: topic.name,
                title: title.value,
                detail: contentStateJSON,
                detailHTML: contentHTML
              }));

            case 14:
              _result = _context.sent;
              _result2 = _slicedToArray(_result, 2);
              err = _result2[0];
              res = _result2[1];
              setLoading(false);

              if (err) {
                Toastify({
                  text: err.message || '提交失败，请重新尝试',
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              } else {
                successCallback({
                  _id: _id
                });
              }

              return _context.abrupt("return");

            case 21:
              _context.next = 23;
              return _addPosts({
                title: title.value,
                detail: contentStateJSON,
                detailHTML: contentHTML,
                topicId: topic._id,
                device: _device["default"].getCurrentDeviceId(),
                type: 1
              });

            case 23:
              result = _context.sent;
              _result3 = _slicedToArray(result, 2);
              err = _result3[0];
              res = _result3[1];

              if (res && res.success) {
                setTimeout(function () {
                  _storage["default"].save({
                    key: 'posts-title',
                    data: ''
                  });

                  _storage["default"].save({
                    key: 'posts-content',
                    data: ''
                  });
                }, 200);
                setTimeout(function () {
                  setLoading(false);
                  successCallback(res);
                  Toastify({
                    text: '提交成功',
                    duration: 3000,
                    backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
                  }).showToast();
                }, 1500);
              } else {
                setLoading(false);
                Toastify({
                  text: err.message,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              }

            case 28:
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

  var start =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var list, topic_id, _content, _title;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (topicList) {
                _context2.next = 3;
                break;
              }

              _context2.next = 3;
              return _loadTopicList({
                id: 'new-posts',
                args: {
                  sort_by: 'sort:-1',
                  parent_id: 'not-exists',
                  page_size: 1000
                }
              });

            case 3:
              list = (0, _topic2.getTopicListById)(store.getState(), 'new-posts');
              topic_id = location.params.topic_id; // 如果url中有topic，那么设置它为默认topic

              if (topic_id && !topic && list && list.data && list.data[0]) {
                list.data.map(function (item) {
                  item.children.map(function (item) {
                    if (item._id == topic_id) setTopic(item);
                  });
                });
              }

              _content = '', _title = '';

              if (!_id) {
                _context2.next = 11;
                break;
              }

              _content = contentStateJSON;
              _context2.next = 17;
              break;

            case 11:
              _context2.next = 13;
              return _storage["default"].load({
                key: 'posts-content'
              });

            case 13:
              _context2.t0 = _context2.sent;

              if (_context2.t0) {
                _context2.next = 16;
                break;
              }

              _context2.t0 = '';

            case 16:
              _content = _context2.t0;

            case 17:
              if (!_id) {
                _context2.next = 21;
                break;
              }

              _title = props.title || '';
              _context2.next = 27;
              break;

            case 21:
              _context2.next = 23;
              return _storage["default"].load({
                key: 'posts-title'
              });

            case 23:
              _context2.t1 = _context2.sent;

              if (_context2.t1) {
                _context2.next = 26;
                break;
              }

              _context2.t1 = '';

            case 26:
              _title = _context2.t1;

            case 27:
              // _id ? contentStateJSON : await storage.load({ key: 'posts-content' }) || '';
              // _title = _id ? props.title : await storage.load({ key: 'posts-title' }) || '';
              // const _content = _id ? contentStateJSON : (reactLocalStorage.get('posts-content') || ''),
              // _title = _id ? props.title : (reactLocalStorage.get('posts-title') || '');
              // console.log(await storage.load({ key: 'posts-content' }));
              // console.log(_title)
              // let mount = true;
              setEditor(_react["default"].createElement("div", null, _react["default"].createElement(_editor["default"], {
                syncContent: function syncContent(json, html) {
                  // if (!mount) return;
                  onContentChange(json, html);
                },
                content: _content,
                placeholder: '请输入正文',
                expandControl: true,
                getEditor: function getEditor(editor) {
                  setEditorElement(editor);
                },
                showMarkdown: true
              })));
              titleRef.current.value = _title;

            case 29:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function start() {
      return _ref2.apply(this, arguments);
    };
  }(); // const componentDidMount = async function() {
  // }


  (0, _react.useEffect)(function () {
    start(); // return () => {
    // mount = false;
    // }
  }, []);
  return _react["default"].createElement("div", null, _react["default"].createElement(_modal["default"], {
    id: "topics-modal",
    header: "\u8BF7\u9009\u62E9\u4E00\u4E2A\u8BDD\u9898",
    body: _react["default"].createElement("div", {
      className: "_4Aq4e"
    }, topicList && topicList.data.map(function (item) {
      return _react["default"].createElement("div", {
        key: item._id
      }, _react["default"].createElement("div", {
        className: "text-secondary mt-3"
      }, item.name), _react["default"].createElement("div", null, item.children && item.children.map(function (item) {
        return _react["default"].createElement("div", {
          key: item._id,
          onClick: function onClick() {
            onSelectTopic(item);
          },
          className: (0, _getClassName2["default"])(topic && topic._id == item._id ? 'active' : 'topic', _styleModuleImportMap)
        }, item.name);
      })));
    }))
  }), _react["default"].createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, _react["default"].createElement("div", {
    className: "row"
  }, _react["default"].createElement("div", {
    className: "col-md-2 col-3 pr-0"
  }, _react["default"].createElement("span", {
    className: "a card border-right rounded-left border-0 _7_5h3",
    "data-toggle": "modal",
    "data-target": "#topics-modal"
  }, topic ? topic.name : '选择话题')), _react["default"].createElement("div", {
    className: "col-md-10 col-9 pl-0"
  }, _react["default"].createElement("input", {
    className: "card rounded-right _3QU-z",
    ref: titleRef,
    type: "text",
    onChange: onTitleChange,
    placeholder: "\u8BF7\u8F93\u5165\u6807\u9898"
  })))), _react["default"].createElement("div", {
    className: "card"
  }, editor, _react["default"].createElement("div", {
    className: "card-footer"
  }, _react["default"].createElement("div", {
    className: "d-flex justify-content-between"
  }, _react["default"].createElement("div", null, _react["default"].createElement("button", {
    type: "button",
    className: "btn btn-link btn-sm",
    onClick: function onClick() {
      return setPreview(preview ? false : true);
    }
  }, preview ? '关闭' : '', "\u9884\u89C8")), _react["default"].createElement("div", null, _react["default"].createElement("button", {
    className: "btn btn-block btn-primary rounded-pill btn-sm pl-3 pr-3",
    onClick: submit
  }, loading ? '发布中...' : '发布'))))), preview ? _react["default"].createElement("div", {
    className: "card mt-2"
  }, _react["default"].createElement("div", {
    className: "card-body"
  }, _react["default"].createElement(_htmlText["default"], {
    content: decodeURIComponent(contentHTML)
  }))) : null);
}

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"node-selector": "_3-FAU",
	"topics-container": "_4Aq4e",
	"close": "kyEO5",
	"head": "pGwtz",
	"topic": "c-kRP",
	"active": "_2cZUf",
	"mask": "_1-Hs0",
	"choose-topic-button": "_7_5h3",
	"title": "_3QU-z",
	"editor": "_1Iz2E",
	"button": "_2BgsM"
};

/***/ })

};;