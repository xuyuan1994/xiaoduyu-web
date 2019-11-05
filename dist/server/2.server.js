exports.ids = [2];
exports.modules = {

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

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

var _reactRedux = __webpack_require__(7);

var _block = __webpack_require__(163);

var _user = __webpack_require__(8);

__webpack_require__(228);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default(_ref) {
  var user = _ref.user,
      posts = _ref.posts,
      comment = _ref.comment,
      children = _ref.children;

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      history = _useReactRouter.history;

  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  var store = (0, _reactRedux.useStore)();

  var _addBlock = function _addBlock(args) {
    return (0, _block.addBlock)(args)(store.dispatch, store.getState);
  };

  if (!me) return null;

  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };

  var edit = function edit(e) {
    e.stopPropagation();

    if (comment) {
      $('#editor-comment-modal').modal({
        show: true
      }, {
        type: 'edit',
        comment: comment
      });
    } else {
      history.push("/new-posts?posts_id=".concat(posts._id));
    }
  };

  var block =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(e) {
      var args, _ref3, _ref4, err, res;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.stopPropagation();
              args = {};

              if (!posts) {
                _context.next = 6;
                break;
              }

              args.posts_id = posts._id;
              _context.next = 16;
              break;

            case 6:
              if (!user) {
                _context.next = 10;
                break;
              }

              args.people_id = user._id;
              _context.next = 16;
              break;

            case 10:
              if (!comment) {
                _context.next = 14;
                break;
              }

              args.comment_id = comment._id;
              _context.next = 16;
              break;

            case 14:
              Toastify({
                text: '缺少资源',
                duration: 3000,
                backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
              }).showToast();
              return _context.abrupt("return");

            case 16:
              _context.next = 18;
              return _addBlock({
                args: args
              });

            case 18:
              _ref3 = _context.sent;
              _ref4 = _slicedToArray(_ref3, 2);
              err = _ref4[0];
              res = _ref4[1];

              if (res && res.success) {
                Toastify({
                  text: '屏蔽成功',
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

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function block(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var report = function report(e) {
    e.stopPropagation();
    $('#report').modal({
      show: true
    }, {
      posts: posts,
      user: user,
      comment: comment
    });
  };

  var self = false;

  if (posts && posts.user_id._id == me._id || comment && comment.user_id._id == me._id || user && user._id == me._id) {
    self = true;
  }

  if (self && user) return null;
  return _react["default"].createElement("div", {
    className: "_1OE8F"
  }, _react["default"].createElement("span", {
    className: "a text-secondary _2zJLn",
    "data-toggle": "dropdown",
    onClick: stopPropagation
  }, children ? children : _react["default"].createElement("svg", null, _react["default"].createElement("use", {
    xlinkHref: "/feather-sprite.svg#more-horizontal"
  }))), _react["default"].createElement("div", {
    className: "dropdown-menu dropdown-menu-left"
  }, self && posts || self && comment ? _react["default"].createElement("span", {
    className: "a dropdown-item",
    onClick: edit
  }, "\u7F16\u8F91") : null, !self && posts || !self && comment || !self && user ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
    className: "a dropdown-item",
    onClick: block
  }, "\u4E0D\u611F\u5174\u8DA3"), _react["default"].createElement("span", {
    className: "a dropdown-item",
    onClick: report
  }, "\u4E3E\u62A5")) : null));
}

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _comment = __webpack_require__(32);

var _comment2 = __webpack_require__(138);

var _listItem = _interopRequireDefault(__webpack_require__(224));

var _textItem = _interopRequireDefault(__webpack_require__(231));

var _list = _interopRequireDefault(__webpack_require__(123));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _default(props) {
  var id = props.id,
      itemType = props.itemType;
  var store = (0, _reactRedux.useStore)();
  var list = (0, _reactRedux.useSelector)(function (state) {
    return (0, _comment.getCommentListById)(state, id);
  });
  return _react["default"].createElement(_list["default"], _extends({}, props, list, {
    load: function load(params) {
      return (0, _comment2.loadCommentList)(params)(store.dispatch, store.getState);
    },
    renderItem: function renderItem(item) {
      if (itemType == 'text') {
        return _react["default"].createElement(_textItem["default"], {
          key: item._id,
          item: item
        });
      }

      return _react["default"].createElement(_listItem["default"], {
        comment: item,
        key: item._id,
        postsAuthorId: props.postsAuthorId || ''
      });
    }
  }));
}

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

var _like = __webpack_require__(226);

var _loading = _interopRequireDefault(__webpack_require__(122));

__webpack_require__(227);

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
  var comment = _ref.comment,
      posts = _ref.posts,
      reply = _ref.reply;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var me = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });
  var store = (0, _reactRedux.useStore)();

  var _link = function _link(args) {
    return (0, _like.like)(args)(store.dispatch, store.getState);
  };

  var _unlike = function _unlike(args) {
    return (0, _like.unlike)(args)(store.dispatch, store.getState);
  };

  var target = comment || reply || posts; // console.log(target);
  // let text = target.like_count ? target.like_count+' 次赞' : '赞';

  if (me && target.user_id && target.user_id._id && target.user_id._id == me._id) return null;
  if (loading) return _react["default"].createElement(_loading["default"], null);

  var handleLike =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(e) {
      var target, status, count, targetId, type, _ref3, _ref4, err, res, _ref5, _ref6, _err, _res;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.stopPropagation();
              target = comment || reply || posts; // console.log(target);

              status = target.like, count = target.like_count, targetId = target._id;
              type = '';

              if (me) {
                _context.next = 7;
                break;
              }

              $('#sign').modal({
                show: true
              }, {
                'data-type': 'sign-in'
              });
              return _context.abrupt("return");

            case 7:
              if (comment) {
                type = 'comment';
              } else if (reply) {
                type = 'reply';
              } else {
                type = 'posts';
              }

              setLoading(true); // await new Promise(resolve=>{
              //   setTimeout(()=>{
              //     resolve();
              //   }, 1000);
              // });

              if (!status) {
                _context.next = 19;
                break;
              }

              _context.next = 12;
              return _unlike({
                type: type,
                target_id: targetId
              });

            case 12:
              _ref3 = _context.sent;
              _ref4 = _slicedToArray(_ref3, 2);
              err = _ref4[0];
              res = _ref4[1];

              if (err) {
                Toastify({
                  text: err,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              }

              _context.next = 26;
              break;

            case 19:
              _context.next = 21;
              return _link({
                type: type,
                target_id: targetId,
                mood: 1
              });

            case 21:
              _ref5 = _context.sent;
              _ref6 = _slicedToArray(_ref5, 2);
              _err = _ref6[0];
              _res = _ref6[1];

              if (_err) {
                Toastify({
                  text: _err,
                  duration: 3000,
                  backgroundColor: 'linear-gradient(to right, #ff6c6c, #f66262)'
                }).showToast();
              }

            case 26:
              setLoading(false);

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleLike(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return _react["default"].createElement("span", {
    onClick: handleLike,
    className: "a text-secondary"
  }, target.like ? '已赞' : '赞');
}

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

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _feature = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(225);

var _reactRedux = __webpack_require__(7);

var _comment = __webpack_require__(138);

var _like = _interopRequireDefault(__webpack_require__(162));

var _htmlText = _interopRequireDefault(__webpack_require__(128));

var _moreMenu = _interopRequireDefault(__webpack_require__(152));

var _button = _interopRequireDefault(__webpack_require__(229));

var _loading = _interopRequireDefault(__webpack_require__(122));

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
  var comment = _ref.comment,
      postsAuthorId = _ref.postsAuthorId;
  var store = (0, _reactRedux.useStore)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _loadMoreReply =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(comment) {
      var reply;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              reply = comment.reply[comment.reply.length - 1];
              _context.next = 4;
              return (0, _comment.loadMoreReply)({
                postsId: reply.posts_id._id || reply.posts_id,
                commentId: reply.parent_id._id || reply.parent_id
              })(store.dispatch, store.getState);

            case 4:
              setLoading(false);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function _loadMoreReply(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };

  var renderUserView = function renderUserView(comment, parent) {
    var reply_user = null;

    if (comment.reply_id && comment.reply_id.user_id && comment.reply_id.user_id._id) {
      reply_user = comment.reply_id.user_id;
    } //  


    return _react["default"].createElement("div", {
      key: comment._id,
      className: "border-top YWfdX"
    }, _react["default"].createElement("div", {
      className: "d-flex justify-content-between _2Jecs"
    }, _react["default"].createElement("div", null, _react["default"].createElement(_reactRouterDom.Link, {
      to: "/people/".concat(comment.user_id._id),
      className: "text-dark"
    }, _react["default"].createElement("div", {
      className: "load-demand _1lnrT",
      "data-load-demand": "<img width=\"48\" height=\"48\" src=\"".concat(comment.user_id.avatar_url, "\" />")
    }), _react["default"].createElement("b", {
      className: "_1eFKs"
    }, comment.user_id.nickname), postsAuthorId && comment.user_id._id == postsAuthorId ? _react["default"].createElement("small", null, " (\u697C\u4E3B)") : null), !parent && reply_user && reply_user._id != comment.user_id._id || parent && reply_user && parent.user_id._id != reply_user._id ? _react["default"].createElement("span", {
      className: "text-muted"
    }, _react["default"].createElement("svg", {
      width: "14",
      height: "14",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "ml-1 mr-1"
    }, _react["default"].createElement("use", {
      xlinkHref: "/feather-sprite.svg#chevron-right"
    })), _react["default"].createElement(_reactRouterDom.Link, {
      to: "/people/".concat(reply_user._id),
      onClick: stopPropagation,
      className: "text-dark"
    }, _react["default"].createElement("b", {
      className: "_1eFKs"
    }, reply_user.nickname))) : null)), comment.content_html ? _react["default"].createElement("div", {
      className: "_33PBL"
    }, _react["default"].createElement(_htmlText["default"], {
      content: comment.content_html,
      maxHeight: _feature["default"].comment.contentMaxHeight
    })) : null, _react["default"].createElement("div", {
      className: "_24tfM"
    }, _react["default"].createElement("div", {
      className: "d-flex justify-content-between"
    }, _react["default"].createElement("div", {
      className: "w-50 text-muted _1r4C2"
    }, !comment.parent_id ? _react["default"].createElement(_reactRouterDom.Link, {
      to: "/comment/".concat(comment._id),
      className: "text-muted"
    }, comment._create_at) : _react["default"].createElement("span", {
      className: "text-muted"
    }, comment._create_at), comment.like_count ? _react["default"].createElement("span", null, comment.like_count, " \u4EBA\u8D5E") : null), _react["default"].createElement("div", {
      className: "text-secondary _1PiHO"
    }, comment.parent_id ? _react["default"].createElement(_like["default"], {
      reply: comment
    }) : _react["default"].createElement(_like["default"], {
      comment: comment
    }), _react["default"].createElement(_button["default"], {
      comment: comment
    }), _react["default"].createElement(_moreMenu["default"], {
      comment: comment
    })))), comment.reply && comment.reply.length > 0 ? _react["default"].createElement("div", {
      className: "Oa08p"
    }, comment.reply.map(function (item) {
      return renderUserView(item, comment);
    }), !loading && comment.reply_count > comment.reply.length ? _react["default"].createElement("div", {
      className: "border-top _2RZkO"
    }, _react["default"].createElement("span", {
      className: "a text-primary",
      onClick: function onClick() {
        return _loadMoreReply(comment);
      }
    }, "\u8FD8\u6709 ", comment.reply_count - comment.reply.length, " \u6761\u8BC4\u8BBA")) : null, loading ? _react["default"].createElement(_loading["default"], null) : null) : null);
  };

  return renderUserView(comment);
}

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"item": "YWfdX",
	"item-head": "_2Jecs",
	"avatar": "_1lnrT",
	"item-body": "_33PBL",
	"item-footer": "_24tfM",
	"actions": "_1PiHO",
	"info": "_1r4C2",
	"reply-list": "Oa08p",
	"view-all-reply": "_2RZkO"
};

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unlike = exports.like = void 0;

var _graphql = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _like = function _like(status) {
  return function (data) {
    return function (dispatch, getState) {
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(resolve) {
          var _ref2, _ref3, err, res;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  data.status = status;
                  _context.next = 3;
                  return (0, _graphql["default"])({
                    type: 'mutation',
                    apis: [{
                      api: 'like',
                      args: data,
                      fields: "success"
                    }],
                    headers: {
                      accessToken: getState().user.accessToken
                    }
                  });

                case 3:
                  _ref2 = _context.sent;
                  _ref3 = _slicedToArray(_ref2, 2);
                  err = _ref3[0];
                  res = _ref3[1];

                  if (!err) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt("return", resolve([err ? err.message : '未知错误']));

                case 9:
                  if (data.type == 'comment' || data.type == 'reply') {
                    dispatch({
                      type: 'UPDATE_COMMENT_LIKE',
                      id: data.target_id,
                      status: status
                    });
                  } else if (data.type == 'posts') {
                    dispatch({
                      type: 'UPDATE_POSTS_LIKE_STATUS',
                      id: data.target_id,
                      status: status
                    });
                  }

                  resolve([null, res]);

                case 11:
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
    };
  };
}; // 关注


var like = _like(true); // 取消关注


exports.like = like;

var unlike = _like(false);

exports.unlike = unlike;

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "_1-Y6w",
	"active": "_3P_X-",
	"loading": "_1NT_I"
};

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "_1OE8F",
	"menu": "_2zJLn"
};

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRedux = __webpack_require__(7);

var _user = __webpack_require__(8);

__webpack_require__(230);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// redux
// style
function _default(_ref) {
  var reply = _ref.reply,
      comment = _ref.comment,
      posts = _ref.posts;
  var target = comment || reply || posts;

  var _isMember = (0, _reactRedux.useSelector)(function (state) {
    return (0, _user.getUserInfo)(state);
  });

  var onClick = function onClick(e) {
    e.stopPropagation();

    if (!_isMember) {
      $('#sign').modal({
        show: true
      }, {});
      return;
    }

    var type = 'reply';
    if (posts) type = 'comment';
    $('#editor-comment-modal').modal({
      show: true
    }, {
      type: type,
      comment: comment || reply || null,
      posts: posts
    });
  };

  var toSign = function toSign(e) {
    $('#sign').modal('show');
    e.stopPropagation();
  };

  var t = posts ? '评论' : '回复';
  return _react["default"].createElement("span", {
    className: "a text-secondary",
    onClick: _isMember ? onClick : toSign
  }, t);
}

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "_2VDvv"
};

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(__webpack_require__(3));

var _reactRouterDom = __webpack_require__(9);

var _useReactRouter2 = _interopRequireDefault(__webpack_require__(19));

__webpack_require__(232);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(_ref) {
  var item = _ref.item;

  var _useReactRouter = (0, _useReactRouter2["default"])(),
      history = _useReactRouter.history;

  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };

  var toDetail = function toDetail() {
    return history.push("/comment/".concat(item._id));
  };

  return _react["default"].createElement("div", {
    className: "card-body border-bottom",
    onClick: toDetail
  }, _react["default"].createElement("div", {
    className: "text-secondary"
  }, "\u8BC4\u8BBA\u4E86 ", _react["default"].createElement(_reactRouterDom.Link, {
    to: item.posts_id._id,
    className: "text-primary",
    onClick: stopPropagation
  }, item.posts_id.title)), item.content_summary, _react["default"].createElement("div", {
    className: "text-muted _1OrQa"
  }, _react["default"].createElement("span", null, item._create_at), item.reply_count ? _react["default"].createElement("span", null, item.reply_count, "\u4EBA\u56DE\u590D") : null, item.like_count ? _react["default"].createElement("span", null, item.like_count, "\u4EBA\u8D5E") : null));
}

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"other-info": "_1OrQa"
};

/***/ })

};;