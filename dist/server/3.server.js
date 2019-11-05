exports.ids = [3];
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

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeBlock = exports.addBlock = exports.loadBlockList = void 0;

var _graphql = _interopRequireDefault(__webpack_require__(2));

var _newGraphqlLoadList = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var loadBlockList = (0, _newGraphqlLoadList["default"])({
  reducerName: 'block',
  actionType: 'SET_BLOCK_LIST_BY_ID',
  api: 'blocks',
  fields: "\n    _id\n    deleted\n    create_at\n    ip\n    user_id\n    comment_id {\n      _id\n      content_html\n      posts_id\n      parent_id\n    }\n    people_id {\n      create_at\n      avatar\n      _id\n      nickname\n      avatar_url\n      id\n    }\n    posts_id {\n      title\n      _id\n    }\n  "
});
exports.loadBlockList = loadBlockList;

var addBlock = function addBlock(_ref) {
  var args = _ref.args;
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve) {
        var _ref3, _ref4, err, res, userInfo;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _graphql["default"])({
                  type: 'mutation',
                  apis: [{
                    api: 'addBlock',
                    args: args,
                    fields: "\n          success\n          _id  \n          "
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

                if (!(err || !res || !res.success)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return");

              case 9:
                userInfo = getState().user.userInfo; // 更新个人资料里面的累计数

                if (args.people_id) {
                  if (!userInfo.block_people_count) {
                    userInfo.block_people_count = 1;
                  } else {
                    userInfo.block_people_count += 1;
                  }
                } else if (args.posts_id) {
                  if (!userInfo.block_posts_count) {
                    userInfo.block_posts_count = 1;
                  } else {
                    userInfo.block_posts_count += 1;
                  }

                  dispatch({
                    type: 'REMOVE_POSTS_BY_ID',
                    id: args.posts_id
                  });
                } else if (args.comment_id) {
                  if (!userInfo.block_comment_count) {
                    userInfo.block_comment_count = 1;
                  } else {
                    userInfo.block_comment_count += 1;
                  }

                  dispatch({
                    type: 'REMOVE_COMMENT_BY_ID',
                    id: args.comment_id
                  });
                }

                dispatch({
                  type: 'SET_USER',
                  userinfo: userInfo
                });
                dispatch({
                  type: 'SET_BLOCK_STATE',
                  state: {}
                });

              case 13:
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

exports.addBlock = addBlock;

var removeBlock = function removeBlock(_ref5) {
  var args = _ref5.args,
      id = _ref5.id;
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(resolve) {
        var user, _ref7, _ref8, err, res;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                user = getState().user;
                _context2.next = 3;
                return (0, _graphql["default"])({
                  type: 'mutation',
                  apis: [{
                    api: 'removeBlock',
                    args: args,
                    fields: "success"
                  }],
                  headers: {
                    accessToken: user.accessToken
                  }
                });

              case 3:
                _ref7 = _context2.sent;
                _ref8 = _slicedToArray(_ref7, 2);
                err = _ref8[0];
                res = _ref8[1];
                resolve([err, res]);

                if (!(err || !res || !res.success)) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return");

              case 10:
                // 删除该条数据
                dispatch({
                  type: 'REMOVE_BLOCK_BY_ID',
                  id: id
                }); // 更新个人资料里面的累计数

                if (args.people_id) {
                  user.userInfo.block_people_count -= 1;
                } else if (args.posts_id) {
                  user.userInfo.block_posts_count -= 1;
                } else if (args.comment_id) {
                  user.userInfo.block_comment_count -= 1;
                }

                dispatch({
                  type: 'SET_USER',
                  userinfo: user.userInfo
                });

              case 13:
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
};

exports.removeBlock = removeBlock;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

var _singleColumns = _interopRequireDefault(__webpack_require__(120));

var _shell = _interopRequireDefault(__webpack_require__(117));

var _meta = _interopRequireDefault(__webpack_require__(118));

var _blockList = _interopRequireDefault(__webpack_require__(295));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// modules
var _default = (0, _shell["default"])(function () {
  var _useReactRouter = (0, _useReactRouter2["default"])(),
      history = _useReactRouter.history,
      location = _useReactRouter.location,
      match = _useReactRouter.match;

  var pathname = location.pathname;
  var query = {},
      title = '';

  if (pathname.indexOf('peoples') != -1) {
    title = '不感兴趣的用户';
    query.people_id = 'exists';
  }

  if (pathname.indexOf('posts') != -1) {
    title = '不感兴趣的话题';
    query.posts_id = 'exists';
  }

  if (pathname.indexOf('comments') != -1) {
    title = '不感兴趣的评论/回复';
    query.comment_id = 'exists';
  }

  return _react["default"].createElement(_singleColumns["default"], null, _react["default"].createElement(_meta["default"], {
    title: title
  }), _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, title)), _react["default"].createElement("div", {
    className: "card-body p-0"
  }, _react["default"].createElement(_blockList["default"], {
    id: pathname,
    query: query
  }))));
});

exports["default"] = _default;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _list = _interopRequireDefault(__webpack_require__(123));

var _htmlText = _interopRequireDefault(__webpack_require__(128));

var _reactRedux = __webpack_require__(7);

var _block = __webpack_require__(163);

var _block2 = __webpack_require__(41);

__webpack_require__(296);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default(props) {
  var id = props.id;
  var store = (0, _reactRedux.useStore)();
  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _block2.getBlockListById)(state, id);
  });

  var remove = function remove(item) {
    return (
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var params, _ref2, _ref3, err, res;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {};
                if (item.people_id) params.people_id = item.people_id._id;
                if (item.posts_id) params.posts_id = item.posts_id._id;
                if (item.comment_id) params.comment_id = item.comment_id._id;
                _context.next = 6;
                return (0, _block.removeBlock)({
                  args: params,
                  id: item._id
                })(store.dispatch, store.getState);

              case 6:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                err = _ref3[0];
                res = _ref3[1];

                if (res && res.success) {
                  Toastify({
                    text: '取消成功',
                    duration: 3000,
                    backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
                  }).showToast();
                } else if (err && err.message) {
                  Toastify({
                    text: err.message,
                    duration: 3000,
                    backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                  }).showToast();
                }

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))
    );
  };

  return _react["default"].createElement(_list["default"], _extends({}, props, list, {
    load: function load(params) {
      return (0, _block.loadBlockList)(params)(store.dispatch, store.getState);
    },
    renderItem: function renderItem(item) {
      return _react["default"].createElement("div", {
        key: item._id,
        className: "card-body border-bottom row"
      }, _react["default"].createElement("div", {
        className: "col-9 col-md-10"
      }, item.posts_id ? item.posts_id.title : null, item.people_id ? _react["default"].createElement("div", {
        className: "_7FV4Q"
      }, _react["default"].createElement("img", {
        src: item.people_id.avatar_url
      }), item.people_id.nickname) : null, item.comment_id ? _react["default"].createElement("div", null, _react["default"].createElement(_htmlText["default"], {
        content: item.comment_id.content_html
      })) : null), _react["default"].createElement("div", {
        className: "col-3 col-md-2 text-right"
      }, _react["default"].createElement("div", {
        className: "btn btn-outline-secondary btn-sm",
        onClick: remove(item)
      }, "\u53D6\u6D88")));
    }
  }));
}

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cancel": "_2VSfA",
	"people": "_7FV4Q"
};

/***/ })

};;