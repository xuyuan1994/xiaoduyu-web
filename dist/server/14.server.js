exports.ids = [14];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

var _reactRedux = __webpack_require__(7);

var _session2 = __webpack_require__(136);

var _session3 = __webpack_require__(25);

var _shell = _interopRequireDefault(__webpack_require__(117));

var _meta = _interopRequireDefault(__webpack_require__(118));

var _messageList = _interopRequireDefault(__webpack_require__(253));

var _editorMessage = _interopRequireDefault(__webpack_require__(256));

var _singleColumns = _interopRequireDefault(__webpack_require__(120));

__webpack_require__(258);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = (0, _shell["default"])(function (_ref) {
  var setNotFound = _ref.setNotFound;

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      match = _useReactRouter.match;

  var _ref2 = match.params || {},
      id = _ref2.id; // const [ mount, setMount ] = useState(true);


  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      session = _useState2[0],
      setSession = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1]; // const [ unread_count, setUnreadCount ] = useState(0);


  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _session3.getSessionListById)(state, id);
  });
  var store = (0, _reactRedux.useStore)();

  var _loadList = function _loadList(args) {
    return (0, _session2.loadSessionList)(args)(store.dispatch, store.getState);
  };

  var _readSession = function _readSession(args) {
    return (0, _session2.readSession)(args)(store.dispatch, store.getState);
  };

  var run = function run(_session) {
    if (_session.unread_count > 0) {
      setTimeout(function () {
        _readSession({
          _id: id
        });
      }, 1000);
    }

    setSession(_session);
    setLoading(false);
    setTimeout(function () {
      var scrollHeight = $('#content').prop("scrollHeight");
      $('#content').scrollTop(scrollHeight, 200);
    }, 500);
  };

  (0, _react.useEffect)(function () {
    if (list && list.data && list.data[0]) {
      var _session = list && list.data ? list.data[0] : null; // setTimeout(()=>{


      if (run) run(_session); // }, 1000);
    } else {
      _loadList({
        id: id,
        args: {
          _id: id
        }
      }).then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            err = _ref4[0],
            res = _ref4[1];

        if (res && res.data && res.data[0]) {
          if (run) run(res.data[0]);
        }
      });
    }

    return function () {
      run = null;
    };
  }, [list]); // list && list.data && list.data[0] ? list.length : 0

  return _react["default"].createElement(_singleColumns["default"], null, _react["default"].createElement(_meta["default"], {
    title: session ? session.user_id.nickname : 'loading...'
  }), loading ? _react["default"].createElement("div", null, "loading...") : null, session ? _react["default"].createElement("div", {
    className: "card"
  }, _react["default"].createElement("div", {
    className: "card-header"
  }, _react["default"].createElement("div", {
    className: "card-title"
  }, session.user_id.nickname)), _react["default"].createElement("div", null, _react["default"].createElement("div", {
    id: "content",
    className: "_2jN7q"
  }, _react["default"].createElement(_messageList["default"], {
    id: id,
    query: {
      user_id: session.user_id._id + ',' + session.addressee_id._id,
      addressee_id: session.user_id._id + ',' + session.addressee_id._id,
      sort_by: 'create_at:-1'
    }
  })), !loading && session.user_id._id ? _react["default"].createElement("div", {
    className: "border-top"
  }, _react["default"].createElement(_editorMessage["default"], {
    addressee_id: session.user_id._id
  })) : null)) : null);
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

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _message = __webpack_require__(167);

var _message2 = __webpack_require__(42);

var _listItem = _interopRequireDefault(__webpack_require__(254));

var _list = _interopRequireDefault(__webpack_require__(123));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _default(props) {
  var id = props.id;
  var store = (0, _reactRedux.useStore)();
  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _message2.getMessageListById)(state, id);
  });
  return _react["default"].createElement(_list["default"], _extends({}, props, list, {
    load: function load(params) {
      return (0, _message.loadMessageList)(params)(store.dispatch, store.getState);
    },
    renderItem: function renderItem(item) {
      return _react["default"].createElement("div", {
        key: item._id
      }, item._create_at ? _react["default"].createElement("div", {
        className: "text-center text-secondary"
      }, item._create_at) : null, _react["default"].createElement(_listItem["default"], {
        message: item
      }));
    },
    renderHead: function renderHead(_ref) {
      var loadData = _ref.loadData;

      if (list && list.more) {
        return _react["default"].createElement("div", {
          className: "text-center pt-2 pb-2"
        }, _react["default"].createElement("span", {
          className: "a",
          onClick: function onClick() {
            loadData();
          }
        }, "\u52A0\u8F7D\u66F4\u591A"));
      } else {
        return null;
      }
    }
  }));
}

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getClassName2 = _interopRequireDefault(__webpack_require__(26));

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _htmlText = _interopRequireDefault(__webpack_require__(128));

__webpack_require__(255);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// style
var _styleModuleImportMap = {
  "./styles/index.scss": {
    "item": "_2IEru",
    "avatar": "_3SvuR",
    "nickname": "_2mleo",
    "action": "_2DaVG",
    "content": "_3pSNK",
    "right": "_3e8cl"
  }
};

var _default = function _default(_ref) {
  var message = _ref.message;
  var me = (0, _reactRedux.useSelector)(_user.getUserInfo);
  return _react["default"].createElement("div", {
    className: (0, _getClassName2["default"])("item ".concat(me && me._id == message.user_id._id ? 'right' : ''), _styleModuleImportMap)
  }, _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "_3SvuR"
  }, _react["default"].createElement("img", {
    src: message.user_id.avatar_url
  })), _react["default"].createElement("div", {
    className: "_3pSNK"
  }, _react["default"].createElement(_htmlText["default"], {
    content: message.content_html
  }))));
};

exports["default"] = _default;

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "_2IEru",
	"avatar": "_3SvuR",
	"nickname": "_2mleo",
	"action": "_2DaVG",
	"content": "_3pSNK",
	"right": "_3e8cl"
};

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _storage = _interopRequireDefault(__webpack_require__(23));

var _reactRedux = __webpack_require__(7);

var _message = __webpack_require__(167);

var _device = _interopRequireDefault(__webpack_require__(125));

var _editor = _interopRequireDefault(__webpack_require__(148));

__webpack_require__(257);

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
  var addressee_id = _ref.addressee_id,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '请输入...' : _ref$placeholder,
      _ref$successCallback = _ref.successCallback,
      successCallback = _ref$successCallback === void 0 ? function () {} : _ref$successCallback,
      _ref$getEditor = _ref.getEditor,
      _getEditor = _ref$getEditor === void 0 ? function (s) {} : _ref$getEditor;

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
      setEditor = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showFooter = _useState10[0],
      setShowFooter = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      submitting = _useState12[0],
      setSubmitting = _useState12[1];

  var store = (0, _reactRedux.useStore)();

  var _addMessage = function _addMessage(args) {
    return (0, _message.addMessage)(args)(store.dispatch, store.getState);
  };

  var submit =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _ref3, _ref4, err, res;

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
              if (!(contentHTML.indexOf('<img src="">') != -1)) {
                _context.next = 7;
                break;
              }

              Toastify({
                text: '有图片上传中，请等待上传完成后再提交',
                duration: 3000,
                backgroundColor: 'linear-gradient(to right, #0988fe, #1c75fb)'
              }).showToast();
              return _context.abrupt("return");

            case 7:
              setSubmitting(true);
              _context.next = 10;
              return _addMessage({
                addressee_id: addressee_id,
                type: 1,
                content: contentJSON,
                content_html: contentHTML,
                device: _device["default"].getCurrentDeviceId()
              });

            case 10:
              _ref3 = _context.sent;
              _ref4 = _slicedToArray(_ref3, 2);
              err = _ref4[0];
              res = _ref4[1];
              setSubmitting(false);

              if (!err) {
                setContent(_react["default"].createElement("div", {
                  key: new Date().getTime()
                }, _react["default"].createElement(_editor["default"], {
                  syncContent: syncContent,
                  content: '',
                  getEditor: function getEditor(editor) {
                    setEditor(editor); // self.setState({ editor })

                    _getEditor(editor);
                  },
                  displayControls: true
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

            case 16:
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
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(contentJSON, contentHTML) {
      var commentsDraft;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setContentJSON(contentJSON);
              setContentHTML(contentHTML);

              if (!showFooter && contentJSON) {
                setShowFooter(true);
              }

              _context2.next = 5;
              return _storage["default"].load({
                key: 'comments-draft'
              });

            case 5:
              commentsDraft = _context2.sent;
              // 只保留最新的10条草稿
              // let index = []
              // for (let i in commentsDraft) index.push(i)
              // if (index.length > 10) delete commentsDraft[index[0]]
              commentsDraft[addressee_id] = contentJSON;

              _storage["default"].save({
                key: 'comments-draft',
                data: commentsDraft
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function syncContent(_x, _x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var componentsDidMount =
  /*#__PURE__*/
  function () {
    var _ref6 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var commentsDraft, params;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // 从缓存中获取，评论草稿
              commentsDraft = {};
              _context3.prev = 1;
              _context3.next = 4;
              return _storage["default"].load({
                key: 'comments-draft'
              });

            case 4:
              _context3.t0 = _context3.sent;

              if (_context3.t0) {
                _context3.next = 7;
                break;
              }

              _context3.t0 = {};

            case 7:
              commentsDraft = _context3.t0;
              _context3.next = 14;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t1 = _context3["catch"](1);
              commentsDraft = {};
              console.log(_context3.t1);

            case 14:
              params = {
                content: commentsDraft[addressee_id] || '',
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

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 10]]);
    }));

    return function componentsDidMount() {
      return _ref6.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    componentsDidMount();
  }, []);
  return _react["default"].createElement("div", {
    className: "_3tHDN"
  }, _react["default"].createElement("div", {
    className: "_37ts_"
  }, content), showFooter ? _react["default"].createElement("div", {
    className: "V5D1N"
  }, _react["default"].createElement("button", {
    onClick: submit,
    type: "button",
    className: "btn btn-primary rounded-pill btn-sm pl-3 pr-3"
  }, submitting ? '提交中...' : '提交')) : null);
}

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"box": "_3tHDN",
	"content": "_37ts_",
	"footer": "V5D1N"
};

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"message-container": "_2jN7q"
};

/***/ })

};;