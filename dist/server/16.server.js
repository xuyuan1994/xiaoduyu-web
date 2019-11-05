exports.ids = [16];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

var _agora = _interopRequireDefault(__webpack_require__(259));

var browser = _interopRequireWildcard(__webpack_require__(174));

var _reactRedux = __webpack_require__(7);

var _live = __webpack_require__(151);

var _live2 = __webpack_require__(36);

var _shell = _interopRequireDefault(__webpack_require__(117));

var _meta = _interopRequireDefault(__webpack_require__(118));

var _loading = _interopRequireDefault(__webpack_require__(122));

var _share = _interopRequireDefault(__webpack_require__(153));

var _activeInfo = _interopRequireDefault(__webpack_require__(260));

var _talkRoom = _interopRequireDefault(__webpack_require__(261));

__webpack_require__(264);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var playControl = null;

var _default = (0, _shell["default"])(function (_ref) {
  var setNotFound = _ref.setNotFound;

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      match = _useReactRouter.match;

  var _ref2 = match.params || {},
      id = _ref2.id;

  var containerRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      supportWebRTC = _useState2[0],
      setSupportWebRTC = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      iOSWeChat = _useState4[0],
      setiOSWeChat = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      androidWeChat = _useState6[0],
      setAndroidWeChat = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showRoom = _useState8[0],
      setShowRoom = _useState8[1];

  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _live2.getLiveListById)(state, id);
  });
  var store = (0, _reactRedux.useStore)();

  var _loadLiveList = function _loadLiveList(args) {
    return (0, _live.loadLiveList)(args)(store.dispatch, store.getState);
  };

  var loadAgoraSDK = function loadAgoraSDK(_ref3) {
    var status = _ref3.status,
        _id = _ref3._id,
        user_id = _ref3.user_id;
    return new Promise(function (resolve) {
      if (!window.AgoraRTC) {
        var oHead = document.getElementsByTagName('head').item(0);
        var oScript = document.createElement("script");

        oScript.onload = function () {
          resolve((0, _agora["default"])(window.AgoraRTC, _id));
        };

        oScript.type = "text/javascript";
        oScript.src = "/agora/AgoraRTCSDK-2.8.0.js";
        oHead.appendChild(oScript);
      } else {
        resolve((0, _agora["default"])(window.AgoraRTC, _id));
      }
    });
  };

  var playLive = function playLive(live) {
    // 浏览器判断
    if (browser.isiOSWechat()) {
      setiOSWeChat(true);
      return;
    }

    if (browser.isAndroidWechat()) {
      setAndroidWeChat(true);
      return;
    } // 未进行直播


    if (!live.status) return;
    loadAgoraSDK(live).then(function (res) {
      // console.log(res);
      if (!res) {
        // 浏览器不支持 WebRTC
        setSupportWebRTC(false);
        return;
      }

      var play = res.play,
          stop = res.stop;

      if (browser.isSafari()) {
        playControl = play;
      } else {
        setShowRoom(true);
      }
    });
    /*
    // 网页直播
    // 申请麦克风和摄像头权限
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
    })
    .catch(function(err) {
      console.log(err);
    });
    */
  };

  var onResize = function onResize() {
    var width = $(window).width();
    var height = Math.ceil((width - 365) / 835 * 650);

    if (width <= 767) {
      $(containerRef.current).css("width", '');
      $(containerRef.current).css("height", '');
      $('#video').css("height", '');
    } else if (height < 650) {
      $(containerRef.current).css("width", width + 'px');
      $(containerRef.current).css("height", height + 'px');
      $('#video').css("height", height - 80 + 'px');
    } else {
      $(containerRef.current).css("width", '');
      $(containerRef.current).css("height", '650px');
      $('#video').css("height", 650 - 80 + 'px');
    }
  };

  (0, _react.useEffect)(function () {
    $(window).resize(function () {
      onResize();
    });
    setTimeout(function () {
      onResize();
    }, 500);
    var live = list && list.data && list.data[0] ? list.data[0] : null; // 如果已经存在 list，说明redux已经存在该帖子数据，则可以不重新请求

    if (!live) {
      _loadLiveList({
        id: id,
        args: {
          _id: id
        }
      }).then(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
            err = _ref5[0],
            res = _ref5[1];

        if (res && res.data && res.data[0]) {
          live = res.data[0];
          playLive(live);
        } else {
          setNotFound('live不存在');
        }
      });
    } else if (list && list.data && !list.data[0]) {
      setNotFound('404 live不存在');
    } else {
      live = list.data[0];
      playLive(live);
    }
  }, [id]);

  var _ref6 = list || {},
      loading = _ref6.loading,
      data = _ref6.data;

  var live = data && data[0] ? data[0] : null;

  if (loading || !live) {
    return _react["default"].createElement("div", {
      className: "text-center"
    }, _react["default"].createElement(_loading["default"], null));
  }

  if (iOSWeChat) {
    return _react["default"].createElement("div", {
      className: "container text-center"
    }, _react["default"].createElement("div", {
      style: {
        width: '240px',
        margin: '20px auto 20px auto'
      }
    }, "\u56E0\u5FAE\u4FE1\u5185\u7F6E\u6D4F\u89C8\u5668\u4E0D\u652F\u6301WebRCT\uFF0C\u9700\u8981\u4F7F\u7528\u624B\u673A\u81EA\u5E26\u6D4F\u89C8\u5668\u89C2\u770B\u76F4\u64AD\uFF0C\u64CD\u4F5C\u65B9\u6CD5\u5982\u4E0B\u56FE\u3002"), _react["default"].createElement("div", null, _react["default"].createElement("img", {
      style: {
        borderRadius: '8px'
      },
      src: "/share-to-safari.png",
      width: "200"
    })));
  }

  if (androidWeChat) {
    return _react["default"].createElement("div", {
      className: "container text-center"
    }, _react["default"].createElement("div", {
      style: {
        width: '240px',
        margin: '20px auto 20px auto'
      }
    }, "\u56E0\u5FAE\u4FE1\u5185\u7F6E\u6D4F\u89C8\u5668\u4E0D\u652F\u6301WebRCT\uFF0C\u9700\u8981\u4E0B\u8F7D\u5C0F\u5EA6\u9C7CAPP\uFF0C\u624D\u80FD\u89C2\u770B\u76F4\u64AD", _react["default"].createElement("div", null, _react["default"].createElement("a", {
      href: "/app/xiaoduyu/",
      className: "btn btn-primary mt-3"
    }, "\u4E0B\u8F7DAPP\uFF0C\u89C2\u770B\u76F4\u64AD"))));
  }

  if (!supportWebRTC) {
    return _react["default"].createElement("div", {
      className: "container"
    }, _react["default"].createElement("div", null, _react["default"].createElement("a", {
      href: "/app/xiaoduyu"
    }, "\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301WebRTC\uFF0C\u8BF7\u4F7F\u7528Chrome\u6216Safari\u6D4F\u89C8\u5668\uFF0C\u8BF7\u4E0B\u8F7DAPP\u89C2\u770B\u76F4\u64AD")));
  }

  return _react["default"].createElement("div", {
    className: "_2MxKD",
    ref: containerRef
  }, _react["default"].createElement(_meta["default"], {
    title: live.user_id.nickname + '直播间：' + live.title
  }), _react["default"].createElement("div", {
    className: "by-Py"
  }, _react["default"].createElement("div", {
    className: "card rounded-left mb-0"
  }, _react["default"].createElement("div", {
    className: "card-header p-0 d-flex justify-content-between"
  }, _react["default"].createElement("div", {
    className: "d-flex flex-row align-items-center"
  }, _react["default"].createElement("img", {
    className: "_pwnS",
    src: live.user_id.avatar_url
  }), _react["default"].createElement("div", null, _react["default"].createElement("div", null, _react["default"].createElement("b", null, live.user_id.nickname)), _react["default"].createElement("div", null, live.title), _react["default"].createElement(_activeInfo["default"], live))), _react["default"].createElement("div", {
    className: "pt-4 pr-3"
  }, _react["default"].createElement(_share["default"], {
    live: live
  }))), _react["default"].createElement("div", {
    className: "card-body p-0 _1aiQK",
    id: "video"
  }, live.status ? _react["default"].createElement("span", {
    className: "YJsrJ",
    onClick: function onClick() {
      playControl();
      setShowRoom(true);
    }
  }, _react["default"].createElement("svg", {
    width: "28",
    height: "28" // fill="none"
    ,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, _react["default"].createElement("use", {
    xlinkHref: "/feather-sprite.svg#play"
  }))) : _react["default"].createElement("div", {
    className: "xLF4_"
  }, _react["default"].createElement("h5", null, "\u76F4\u64AD\u9884\u544A"), _react["default"].createElement("div", null, live.notice))))), _react["default"].createElement("div", {
    className: "_2bvYp"
  }, _react["default"].createElement("div", {
    className: "card rounded-right border-left"
  }, _react["default"].createElement("div", {
    className: "card-body p-0"
  }, live.status && showRoom ? _react["default"].createElement(_talkRoom["default"], {
    liveId: live._id
  }) : null))));
});

exports["default"] = _default;

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

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAudienceCount = exports.addAudienceCount = exports.loadLiveList = void 0;

var _date = __webpack_require__(13);

var _newGraphqlLoadList = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 加工一下数据
var processList = function processList(list, store, id) {
  list.map(function (posts) {
    if (posts.last_time) posts._last_time = (0, _date.dateDiff)(posts.last_time);
  });
  return list;
};

var loadLiveList = (0, _newGraphqlLoadList["default"])({
  reducerName: 'live',
  actionType: 'ADD_LIVE_LIST_BY_ID',
  processList: processList,
  api: 'live',
  fields: "\n    _id\n    user_id{\n      _id\n      nickname\n      avatar_url\n    }\n    title\n    notice\n    cover_image\n    create_at\n    last_time\n    status\n    audience_count\n    view_count\n    talk_count\n  "
});
exports.loadLiveList = loadLiveList;

var addAudienceCount = function addAudienceCount(liveId) {
  return function (dispatch, getState) {
    console.log('=================');
    dispatch({
      type: 'ADD_AUDIENCE_BY_LIVE_ID',
      id: liveId
    });
  };
};

exports.addAudienceCount = addAudienceCount;

var removeAudienceCount = function removeAudienceCount(liveId) {
  return function (dispatch, getState) {
    dispatch({
      type: 'REMOVE_AUDIENCE_BY_LIVE_ID',
      id: liveId
    });
  };
};

exports.removeAudienceCount = removeAudienceCount;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _qrcode = _interopRequireDefault(__webpack_require__(91));

var _config = __webpack_require__(1);

var _weixin = _interopRequireDefault(__webpack_require__(144));

__webpack_require__(164);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(_ref) {
  var posts = _ref.posts,
      comment = _ref.comment,
      live = _ref.live,
      styleType = _ref.styleType;

  // const { location, match } = useReactRouter();
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      displayTips = _useState2[0],
      setDisplayTips = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showQrcode = _useState4[0],
      setShowQrcode = _useState4[1];

  var title = '',
      summary = '',
      pics = '',
      url = '';

  if (posts) {
    title = posts.title;
    summary = posts.content_summary;
    pics = posts._coverImage || '';
    url = _config.domainName + '/posts/' + posts._id;
  } else if (comment) {
    title = comment.posts_id.title;
    summary = comment.content_summary;
    pics = comment._coverImage || '';
    url = _config.domainName + '/comment/' + comment._id;
  } else if (live) {
    title = live.user_id.nickname + '的直播间';
    summary = live.title;
    pics = live.cover_image || '';
    url = _config.domainName + '/live/' + live._id;
  }

  var copyLink = function copyLink() {
    url = url + '?from_share=link';
    var element = $("<textarea>" + url + "</textarea>");
    $("body").append(element);
    element[0].select();
    document.execCommand("Copy");
    element.remove();
    Toastify({
      text: '复制成功',
      duration: 3000,
      backgroundColor: 'linear-gradient(to right, #50c64a, #40aa33)'
    }).showToast();
  };

  var shareToWeibo = function shareToWeibo() {
    url = url + '?from_share=weibo';
    window.open("http://service.weibo.com/share/share.php?url=".concat(encodeURIComponent(url), "&title=").concat(encodeURIComponent(title)), '_blank', 'width=550,height=370');
  }; // const shareToTwitter = function(e) {
  //   window.open(`https://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank', 'width=550,height=370');
  // }


  var shareToQzone = function shareToQzone() {
    url = url + '?from_share=qzone';
    window.open("https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=".concat(encodeURIComponent(url), "&title=").concat(encodeURIComponent(title), "&desc=").concat(encodeURIComponent('来自' + _config.name + ' ' + _config.domainName), "&summary=").concat(encodeURIComponent(summary), "&site=").concat(encodeURIComponent(_config.name)), '_blank', 'width=590,height=370');
  };

  var shareToQQ = function shareToQQ() {
    url = url + '?from_share=qq';
    window.open("https://connect.qq.com/widget/shareqq/index.html?url=".concat(encodeURIComponent(url), "&title=").concat(title, "&desc=&summary=").concat(encodeURIComponent(summary), "&site=").concat(encodeURIComponent(_config.name)), '_blank', 'width=770,height=620');
  };

  var shareToFacebook = function shareToFacebook() {
    url = url + '?from_share=facebook';
    window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(url), "&t=").concat(title), '_blank', 'width=770,height=620');
  };

  var shareToTwitter = function shareToTwitter() {
    url = url + '?from_share=twitter';
    window.open("https://twitter.com/intent/tweet?text=".concat(title, "&url=").concat(encodeURIComponent(url)), '_blank', 'width=770,height=620');
  };

  var shareToWeiXin = function shareToWeiXin() {
    if (_weixin["default"]["in"]) {
      setDisplayTips(true);
    } else {
      setShowQrcode(true);
    }
  };

  var handleShowQRcode = function handleShowQRcode(bl) {
    setShowQrcode(bl);
  };

  var handleShowTips = function handleShowTips(bl) {
    setDisplayTips(bl);
  };
  /*
  useEffect(()=>{
     const { path } = match;
    const { _s }: any = location && location.params ? location.params : {};
     if (path == '/posts/:id' && _s == 'weixin') {
      setDisplayTips(true);
    }
   }, [])
  */


  if (styleType == 'icons') {
    return _react["default"].createElement("div", null, _react["default"].createElement("div", {
      className: "_3bezE"
    }, _react["default"].createElement("span", {
      className: "a _1Hb5x",
      onClick: shareToWeiXin
    }), _react["default"].createElement("span", {
      className: "a _33lE4",
      onClick: shareToWeibo
    }), _react["default"].createElement("span", {
      className: "a _384yp",
      onClick: shareToQzone
    }), _react["default"].createElement("span", {
      className: "a _2Tml9",
      onClick: shareToQQ
    }), _react["default"].createElement("span", {
      className: "a _1zLkZ",
      onClick: shareToTwitter
    }), _react["default"].createElement("span", {
      className: "a _3mZlN",
      onClick: shareToFacebook
    })), _react["default"].createElement("div", null, showQrcode ? _react["default"].createElement("div", {
      className: "DsKCT",
      onClick: function onClick() {
        handleShowQRcode(false);
      }
    }) : null, showQrcode ? _react["default"].createElement("div", {
      className: "_2LUT8"
    }, _react["default"].createElement(_qrcode["default"], {
      value: "".concat(url, "?_s=weixin")
    }), _react["default"].createElement("div", null, "\u5FAE\u4FE1\u626B\u4E00\u626B\uFF0C\u5206\u4EAB")) : null, _react["default"].createElement("div", {
      className: "_3hzq5",
      style: {
        display: displayTips ? 'block' : 'none'
      },
      onClick: function onClick() {
        handleShowTips(false);
      }
    }, _react["default"].createElement("div", null, "\u70B9\u51FB\u53F3\u4E0A\u89D2 ... \u6309\u94AE\uFF0C", _react["default"].createElement("br", null), "\u5C06\u6B64\u9875\u9762\u5206\u4EAB\u7ED9\u4F60\u7684\u670B\u53CB\u6216\u670B\u53CB\u5708"))));
  } //  onClick={this.stopPropagation}


  return _react["default"].createElement("div", {
    className: "_1jwjw"
  }, _react["default"].createElement("span", {
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false",
    className: "a text-secondary"
  }, "\u5206\u4EAB"), _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "share-dropdown"
  }, _react["default"].createElement("span", {
    className: "a dropdown-item _1z7AA",
    onClick: copyLink
  }, "\u590D\u5236\u8FDE\u63A5"), _react["default"].createElement("span", {
    className: "a dropdown-item _1Hb5x",
    onClick: shareToWeiXin
  }, "\u5FAE\u4FE1"), _react["default"].createElement("span", {
    className: "a dropdown-item _33lE4",
    onClick: shareToWeibo
  }, "\u5FAE\u535A"), _react["default"].createElement("span", {
    className: "a dropdown-item _384yp",
    onClick: shareToQzone
  }, "QQ\u7A7A\u95F4"), _react["default"].createElement("span", {
    className: "a dropdown-item _2Tml9",
    onClick: shareToQQ
  }, "QQ\u597D\u53CB\u548C\u7FA4\u7EC4"), _react["default"].createElement("span", {
    className: "a dropdown-item _1zLkZ",
    onClick: shareToTwitter
  }, "Twitter"), _react["default"].createElement("span", {
    className: "a dropdown-item _3mZlN",
    onClick: shareToFacebook
  }, "Facebook")), showQrcode ? _react["default"].createElement("div", {
    className: "DsKCT",
    onClick: function onClick() {
      handleShowQRcode(false);
    }
  }) : null, showQrcode ? _react["default"].createElement("div", {
    className: "_2LUT8"
  }, _react["default"].createElement(_qrcode["default"], {
    value: "".concat(url, "?_s=weixin")
  }), _react["default"].createElement("div", null, "\u5FAE\u4FE1\u626B\u4E00\u626B\uFF0C\u5206\u4EAB")) : null, _react["default"].createElement("div", {
    className: "_3hzq5",
    style: {
      display: displayTips ? 'block' : 'none'
    },
    onClick: function onClick() {
      handleShowTips(false);
    }
  }, _react["default"].createElement("div", null, "\u70B9\u51FB\u53F3\u4E0A\u89D2 ... \u6309\u94AE\uFF0C", _react["default"].createElement("br", null), "\u5C06\u6B64\u9875\u9762\u5206\u4EAB\u7ED9\u4F60\u7684\u670B\u53CB\u6216\u670B\u53CB\u5708"))));
}

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "_1jwjw",
	"button": "_2azHo",
	"share": "y5Qcu",
	"mark": "DsKCT",
	"qrcode": "_2LUT8",
	"tips-weixin-share": "_3hzq5",
	"icon-box": "_3bezE",
	"icon": "_2wa78",
	"link": "_1z7AA",
	"weibo": "_33lE4",
	"qzone": "_384yp",
	"wechat": "_1Hb5x",
	"facebook": "_3mZlN",
	"twitter": "_1zLkZ",
	"qq": "_2Tml9"
};

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAndroidWechat = exports.isiOSWechat = exports.isWeChat = exports.isSafari = exports.isAndroid = exports.isiOS = void 0;

var isiOS = function isiOS() {
  var u = navigator.userAgent,
      app = navigator.appVersion;
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};

exports.isiOS = isiOS;

var isAndroid = function isAndroid() {
  var u = navigator.userAgent,
      app = navigator.appVersion;
  return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
}; // 是否是safari内核的浏览器


exports.isAndroid = isAndroid;

var isSafari = function isSafari() {
  return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
}; // 是否是微信浏览器


exports.isSafari = isSafari;

var isWeChat = function isWeChat() {
  var ua = navigator.userAgent.toLowerCase();

  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}; // ios 微信


exports.isWeChat = isWeChat;

var isiOSWechat = function isiOSWechat() {
  var ua = navigator.userAgent.toLowerCase();

  if (isWeChat() && isiOS()) {
    return true;
  } else {
    return false;
  }
}; // android 微信


exports.isiOSWechat = isiOSWechat;

var isAndroidWechat = function isAndroidWechat() {
  var ua = navigator.userAgent.toLowerCase();

  if (isWeChat() && isAndroid()) {
    return true;
  } else {
    return false;
  }
};

exports.isAndroidWechat = isAndroidWechat;

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _config = __webpack_require__(1);

var browser = _interopRequireWildcard(__webpack_require__(174));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _default(AgoraRTC, channel) {
  if (!AgoraRTC.checkSystemRequirements()) {
    // alert("你的浏览器不支持 WebRTC，无法观看直播!");
    return false;
  }

  var client,
      localStream,
      camera,
      microphone,
      // user token
  channel_key = null,
      streamList = [];
  client = AgoraRTC.createClient({
    mode: 'live'
  }); // 创建客户端

  client.init(_config.agora.appid, function () {
    // 加入频道
    client.join(channel_key, channel, null, function (uid) {// camera = videoSource.value;
      // microphone = audioSource.value;
      // localStream = AgoraRTC.createStream({streamID: uid, audio: true, cameraId: camera, microphoneId: microphone, video: document.getElementById("video").checked, screen: false});
      // AgoraRTC.getDevices(function (devices: any) {
      //   localStream = AgoraRTC.createStream({streamID: uid, audio: true, cameraId: null, microphoneId: devices[0].deviceId, video: false, screen: false});
      //   localStream.on("accessAllowed", function() {
      //     console.log('---');
      //     console.log("accessAllowed");
      //   });
      //   localStream.on("accessDenied", function() {
      //     console.log('---');
      //     console.log("accessDenied");
      //   });
      // });

      /*
      if (document.getElementById("video").checked) {
        camera = videoSource.value;
        microphone = audioSource.value;
        localStream = AgoraRTC.createStream({streamID: uid, audio: true, cameraId: camera, microphoneId: microphone, video: document.getElementById("video").checked, screen: false});
        //localStream = AgoraRTC.createStream({streamID: uid, audio: false, cameraId: camera, microphoneId: microphone, video: false, screen: true, extensionId: 'minllpmhdgpndnkomcoccfekfegnlikg'});
        if (document.getElementById("video").checked) {
          localStream.setVideoProfile('720p_3');
          // localStream.setVideoProfile('720P_6');
        }
         // The user has granted access to the camera and mic.
        localStream.on("accessAllowed", function() {
          console.log("accessAllowed");
        });
         // The user has denied access to the camera and mic.
        localStream.on("accessDenied", function() {
          console.log("accessDenied");
        });
         localStream.init(function() {
          console.log("getUserMedia successfully");
          localStream.play('agora_local');
           client.publish(localStream, function (err) {
            console.log("Publish local stream error: " + err);
          });
           client.on('stream-published', function (evt) {
            console.log("Publish local stream successfully");
          });
        }, function (err) {
          console.log("getUserMedia failed", err);
        });
      }
      */
    }, function (err) {
      console.log("Join channel failed", err);
    });
  }, function (err) {
    console.log("AgoraRTC client init failed", err);
  });
  /*
  channelKey = "";
  client.on('error', function(err) {
    console.log("Got error msg:", err.reason);
    if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
      client.renewChannelKey(channelKey, function(){
        console.log("Renew channel key successfully");
      }, function(err){
        console.log("Renew channel key failed: ", err);
      });
    }
  });
  */

  client.on('stream-added', function (evt) {
    var stream = evt.stream;
    console.log("New stream added: " + stream.getId());
    console.log("Subscribe ", stream); // client.subscribe(stream, null, function(err){
    //   console.log("Subscribe stream failed", err);
    // });

    client.subscribe(stream, function (err) {
      console.log("Subscribe stream failed", err);
    }); // client.enableAudio();
    // console.log(client.unmuteAudio);
    // unmuteAudio
  });
  client.on('stream-subscribed', function (evt) {
    var stream = evt.stream; // console.log('订阅=======');
    // console.log(stream);
    // console.log("Subscribe remote stream successfully: " + stream.getId());

    if ($('div#video #agora_remote' + stream.getId()).length === 0) {
      var style = '';
      if (!stream.video) style = 'display:none'; //  style="float:left; width:810px;height:607px;display:inline-block;"

      $('div#video').append('<div id="agora_remote' + stream.getId() + '" style="' + style + '"></div>');
    }

    if (browser.isSafari()) {
      streamList.push(stream);
    } else {
      stream.play('agora_remote' + stream.getId());
    }
  });
  client.on('stream-removed', function (evt) {
    var stream = evt.stream;
    stream.stop();
    $('#agora_remote' + stream.getId()).remove();
    console.log("Remote stream is removed " + stream.getId());
  });
  client.on('peer-leave', function (evt) {
    var stream = evt.stream;

    if (stream) {
      stream.stop();
      $('#agora_remote' + stream.getId()).remove();
      console.log(evt.uid + " leaved from this channel");
    }
  });
  client.on("first-audio-frame-decode", function (evt) {
    console.log('音频回调函数'); // var stream = evt.stream;
    // setTimeout(()=>{
    //   $('audio');
    //   console.log($('audio'))
    // }, 2000);
  });
  return {
    play: function play() {
      // console.log(streamList);
      streamList.map(function (stream) {
        stream.play('agora_remote' + stream.getId());
      });
    },
    stop: function stop() {
      streamList.map(function (stream) {
        stream.stop();
      });
    }
  };
}

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(_ref) {
  var view_count = _ref.view_count,
      talk_count = _ref.talk_count,
      audience_count = _ref.audience_count;
  return _react["default"].createElement("div", {
    className: "text-secondary"
  }, view_count ? _react["default"].createElement("span", {
    className: "mr-3"
  }, _react["default"].createElement(SVG, {
    name: "eye"
  }), view_count) : null, talk_count ? _react["default"].createElement("span", {
    className: "mr-3"
  }, _react["default"].createElement(SVG, {
    name: "message-square"
  }), talk_count) : null, audience_count ? _react["default"].createElement("span", {
    className: "mr-3"
  }, _react["default"].createElement(SVG, {
    name: "user"
  }), audience_count) : null);
}

var SVG = function SVG(_ref2) {
  var name = _ref2.name;
  return _react["default"].createElement("svg", {
    width: "14",
    height: "14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "mr-1"
  }, _react["default"].createElement("use", {
    xlinkHref: "/feather-sprite.svg#".concat(name)
  }));
};

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _reactRedux = __webpack_require__(7);

var socket = _interopRequireWildcard(__webpack_require__(262));

var _user = __webpack_require__(8);

var _live = __webpack_require__(151);

__webpack_require__(263);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initialState = [{
  type: 'notice',
  text: '系统公告：禁止低俗、暴露、辱骂他人、宗教、邪教迷信、直播聚众闹事、集会等。违规一律封号。'
}];

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      var max = 100;
      state.push(action.data);

      if (state.length > max) {
        state = state.splice(state.length - max, max);
      }

      return JSON.parse(JSON.stringify(state));
  }
}

function _default(_ref) {
  var liveId = _ref.liveId;
  var store = (0, _reactRedux.useStore)();
  var inputRef = (0, _react.useRef)();

  var _useReducer = (0, _react.useReducer)(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      list = _useReducer2[0],
      dispatch = _useReducer2[1];

  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      mousewheel = _useState2[0],
      setMousewheel = _useState2[1];

  var sendMessage = function sendMessage(_ref2) {
    var _ref2$type = _ref2.type,
        type = _ref2$type === void 0 ? 'text' : _ref2$type,
        messageText = _ref2.messageText;
    if (!me) return;
    socket.emit('message', {
      target: liveId,
      data: {
        type: type,
        user: {
          _id: me._id,
          nickname: me.nickname,
          avatar_url: me.avatar_url
        },
        text: messageText
      }
    });
  };

  (0, _react.useEffect)(function () {
    if (!liveId) return;
    socket.emit('live', {
      type: 'join-room',
      liveId: liveId
    });
    sendMessage({
      type: 'welcome'
    });
    var scrollBottom = true;
    $("#live-".concat(liveId)).on('mousewheel', function () {
      var nScrollHight = $("#live-".concat(liveId)).prop("scrollHeight");
      var nScrollTop = $("#live-".concat(liveId)).scrollTop();
      var height = $("#live-".concat(liveId)).height();

      if (nScrollTop + height + 70 >= nScrollHight) {
        scrollBottom = true;
      } else {
        scrollBottom = false;
      }
    }); // 添加live监听

    socket.addListener(liveId, function (res) {
      if (res && res.type == 'add-audience') {
        (0, _live.addAudienceCount)(liveId)(store.dispatch, store.getState);
        return;
      } else if (res && res.type == 'remove-audience') {
        (0, _live.removeAudienceCount)(liveId)(store.dispatch, store.getState);
        return;
      }

      try {
        dispatch({
          type: 'add',
          data: res
        });
        var scrollHeight = $("#live-".concat(liveId)).prop("scrollHeight"); // 如果滚动条不在最底部，不置底

        if (!scrollBottom) return;
        $("#live-".concat(liveId)).scrollTop(scrollHeight, 200);
      } catch (err) {
        console.log(err);
      }
    });
    return function () {
      if (liveId) {
        socket.emit('live', {
          type: 'leave-room',
          liveId: liveId
        });
      }
    };
  }, []);

  var onSubmit = function onSubmit(event) {
    if (event) event.preventDefault();
    var value = inputRef.current.value;

    if (value) {
      if (value.length > 60) {
        alert('发言内容，最多30个字符');
        return;
      }

      sendMessage({
        messageText: value
      });
      inputRef.current.value = '';
    } else {
      inputRef.current.focus();
    }
  };

  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    id: "live-".concat(liveId),
    className: "_3k7D7"
  }, list.map(function (item, index) {
    if (!item || !item.type) return;
    var content = null;

    switch (item.type) {
      case 'text':
        content = _react["default"].createElement(_react["default"].Fragment, null, item.user ? _react["default"].createElement("span", null, _react["default"].createElement("img", {
          className: "_3_vo3",
          src: item.user.avatar_url
        }), _react["default"].createElement(_reactRouterDom.Link, {
          to: "/people/".concat(item.user._id),
          className: "text-primary"
        }, item.user.nickname), ": ") : null, item.text);
        break;

      case 'welcome':
        content = "\u6B22\u8FCE ".concat(item.user ? item.user.nickname : '未知', " \u52A0\u5165\u76F4\u64AD\u95F4\uFF01");
        break;

      case 'notice':
        content = _react["default"].createElement("div", {
          className: "text-danger"
        }, item.text);
        break;
    }

    return _react["default"].createElement("div", {
      key: index
    }, content);
  })), me ? _react["default"].createElement("form", {
    className: "border-top _3DLme",
    onSubmit: onSubmit
  }, _react["default"].createElement("input", {
    type: "text",
    className: "_2mUvM",
    ref: inputRef
  }), _react["default"].createElement("button", {
    className: "btn btn-primary mL3C3"
  }, "\u53D1\u9001")) : _react["default"].createElement("div", {
    className: "d-flex align-items-center justify-content-center border-top _3DLme"
  }, _react["default"].createElement("span", {
    "data-toggle": "modal",
    "data-target": "#sign",
    "data-type": "sign-up",
    className: "a text-primary"
  }, "\u767B\u5F55\u53D1\u8A00\uFF0C\u53C2\u4E0E\u4EA4\u6D41")));
}

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emit = exports.removeListener = exports.addListener = exports.close = exports.connect = void 0;

var _socket = _interopRequireDefault(__webpack_require__(105));

var _index = __webpack_require__(1);

var _website = __webpack_require__(27);

var _user = __webpack_require__(8);

var _tips = __webpack_require__(127);

var _session = __webpack_require__(136);

var _message = __webpack_require__(167);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// config
// redux actions
var socket;

var connect = function connect(_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;
  // 用于判断是否登录
  var me = getState().user.userInfo;
  var accessToken = (0, _user.getAccessToken)(getState());

  var handleActions = function handleActions(action) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    action(params)(dispatch, getState);
  };

  var handleNotification = function handleNotification(notification) {
    try {
      if (typeof notification == 'string') {
        notification = JSON.parse(notification);
      }
    } catch (err) {
      notification = '';
      console.log(err);
    }

    if (!notification || !notification.type) return;
    var _notification = notification,
        type = _notification.type,
        data = _notification.data;

    switch (type) {
      case 'online-user':
        handleActions(_website.setOnlineUserCount, data);
        break;

      case 'discover':
        if (!me) {
          // 如果是游客，因为有缓存，所以延迟1分钟拉新
          setTimeout(function () {
            handleActions(_tips.loadTips, 'discover');
          }, 1000 * 60);
        } else {
          handleActions(_tips.loadTips, 'discover');
        }

        break;
      // 有新通知

      case 'notification':
        handleActions(_tips.loadTips, 'notification'); // 发送浏览器通知

        if (data && data.comment_id && data.type == 'comment' || data && data.comment_id && data.type == 'reply') {
          var body = data.comment_id.content_html;
          body = body.replace(/<[^>]+>/g, '');
          body = body.replace(/\r\n/g, '');
          body = body.replace(/\n/g, '');
          handleActions(_website.sendNotification, {
            content: data.sender_id.nickname,
            option: {
              body: body,
              icon: 'https:' + data.sender_id.avatar_url,
              image: 'https:' + data.sender_id.avatar_url,
              tag: 'comment',
              data: data
            }
          });
        }

        break;

      case 'new-feed':
        handleActions(_tips.loadTips, 'new-feed');
        break;

      case 'recommend-posts':
        handleActions(_tips.loadTips);
        break;

      case 'new-session':
        handleActions(_tips.loadTips, 'new-session');
        handleActions(_session.updateSession, data.sessionId);
        handleActions(_message.addMessagesToList, data);
        break;
    }
  };

  socket = (0, _socket["default"])(_index.api.socket, {
    // 是否自动重新连接
    reconnection: true,
    // 自动重连10次后放弃
    reconnectionAttempts: 15,
    // 自动重连间隔时间
    reconnectionDelay: 3000,
    // 发送参数给服务器，服务端获取参数 socket.handshake.query
    query: {
      accessToken: accessToken
    }
  });
  socket.on("connect", function () {
    console.log('socket connect success.'); // 更新在线用户

    socket.on("all", handleNotification); // 与用户自己相关的消息

    if (me) socket.on(me._id, handleNotification); // 会员消息

    if (me) socket.on('member', handleNotification);
  }); // 如果断开了连接，尝试重新连接

  socket.on('disconnect', function () {
    console.log('socket has disconnect.');
  }); // 加载未读消息、通知、等等红点提醒

  if (me && me._id) {
    handleActions(_tips.loadTips);
  }
}; // 关闭 socket


exports.connect = connect;

var close = function close() {
  if (socket) {
    socket.close();
    socket = null;
  }
}; // 添加监听器


exports.close = close;

var addListener = function addListener(target, callback) {
  // console.log(target);
  socket.on(target, callback);
};

exports.addListener = addListener;

var removeListener = function removeListener(target) {};

exports.removeListener = removeListener;

var emit = function emit(target, params) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
  socket.emit(target, params, callback); // socket.emit(target, JSON.stringify(params), callback);
};

exports.emit = emit;

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"box": "_3k7D7",
	"avatar": "_3_vo3",
	"input": "_2mUvM",
	"submit": "mL3C3",
	"chat-footer": "_3DLme"
};

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "_2MxKD",
	"left": "by-Py",
	"right": "_2bvYp",
	"avatar": "_pwnS",
	"live-container": "_1aiQK",
	"author-info": "_3eEFu",
	"nickname": "_2zA_m",
	"chat-list": "_3ZVMc",
	"input": "_3GLui",
	"submit": "_3s0s5",
	"chat-footer": "qWwd0",
	"play": "YJsrJ",
	"notice-box": "xLF4_"
};

/***/ })

};;