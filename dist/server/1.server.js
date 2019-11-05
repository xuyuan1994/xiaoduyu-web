exports.ids = [1];
exports.modules = {

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var device = function () {
  var Device =
  /*#__PURE__*/
  function () {
    function Device() {
      _classCallCheck(this, Device);

      _defineProperty(this, "devices", void 0);

      _defineProperty(this, "show", void 0);

      this.devices = {
        1: 'unknow',
        2: 'windows',
        3: 'mac',
        4: 'ipad',
        5: 'iphone',
        6: 'android',
        7: 'ios-app',
        8: 'android-app'
      };
      this.show = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '通过 App iPhone 客户端',
        8: '通过 App Android 客户端'
      };
    }

    _createClass(Device, [{
      key: "getCurrentDeviceId",
      value: function getCurrentDeviceId() {
        // 如果是服务器，那么就不存在 window 和 document 全局变量，因此不继续执行
        if (typeof window == 'undefined' || typeof document == 'undefined') {
          return 1;
        }

        var dvicename = 'unknow';
        var p = navigator.platform;
        var sUserAgent = navigator.userAgent.toLowerCase();
        var system = {
          windows: p.indexOf("Win") == 0,
          mac: p.indexOf("Mac") == 0,
          ipad: sUserAgent.match(/ipad/i) == "ipad",
          iphone: sUserAgent.match(/iphone os/i) == "iphone os",
          android: sUserAgent.match(/android/i) == "android"
        };

        for (var i in system) {
          if (system[i]) {
            dvicename = i;
          }
        }

        for (var i in this.devices) {
          if (this.devices[i] == dvicename) {
            return parseInt(i);
          }
        }

        return 1;
      }
    }, {
      key: "getNameByDeviceId",
      value: function getNameByDeviceId(id) {
        return this.show[id];
      } // 是否是移动设备

    }, {
      key: "isMobileDevice",
      value: function isMobileDevice() {
        var id = this.getCurrentDeviceId();

        if (id == 5 || id == 6) {
          return true;
        }

        return false;
      }
    }]);

    return Device;
  }();

  return new Device();
}();

var _default = device;
exports["default"] = _default;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(3));

var _draftJs = __webpack_require__(94);

var _draftJsExportHtml = __webpack_require__(95);

var _showdown = _interopRequireDefault(__webpack_require__(96));

var _storage = _interopRequireDefault(__webpack_require__(23));

var _qiniuUploadImage = _interopRequireDefault(__webpack_require__(149));

__webpack_require__(182);

__webpack_require__(183);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';

    default:
      return null;
  }
}

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
}

var Link = function Link(props) {
  var _props$contentState$g = props.contentState.getEntity(props.entityKey).getData(),
      url = _props$contentState$g.url;

  return _react["default"].createElement("a", {
    href: url
  }, props.children);
};

var StyleButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StyleButton, _React$Component);

  function StyleButton() {
    var _this;

    _classCallCheck(this, StyleButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StyleButton).call(this));

    _this.onToggle = function (e) {
      e.preventDefault();

      _this.props.onToggle(_this.props.style);
    };

    return _this;
  }

  _createClass(StyleButton, [{
    key: "render",
    value: function render() {
      var className = 'RichEditor-styleButton';

      if (this.props.active) {
        className += ' RichEditor-activeButton';
      }

      return _react["default"].createElement("span", {
        className: className + ' ' + this.props.className,
        onMouseDown: this.onToggle
      });
    }
  }]);

  return StyleButton;
}(_react["default"].Component);

var BLOCK_TYPES = [// { className: 'title', label: 'H1', style: 'header-one'},
{
  className: 'title',
  label: 'H2',
  style: 'header-two'
}, // { className: 'title', label: 'H3', style: 'header-three'},
// { className: 'title', label: 'H4', style: 'header-four'},
// { className: 'title', label: 'H5', style: 'header-five'},
// { className: 'title', label: 'H6', style: 'header-six'},
// { className: 'title', label: 'Title', style: 'header-five'},
// { className: 'blockquote', label: 'Blockquote', style: 'blockquote'},
{
  className: 'ul',
  label: 'ul',
  style: 'unordered-list-item'
}, // { className: 'ol', label: 'ol', style: 'ordered-list-item'},
{
  className: 'code-block',
  label: 'code',
  style: 'code-block'
}];
var INLINE_STYLES = [{
  className: "bold",
  label: 'bold',
  style: 'BOLD'
}, {
  className: "italic",
  label: 'italic',
  style: 'ITALIC'
}, {
  className: "underline",
  label: 'underline',
  style: 'UNDERLINE'
}];
var BLOCK_TYPES_1 = [{
  className: 'code-block',
  label: 'code',
  style: 'code-block'
}]; // 编辑器控制器

var Controls = function Controls(props) {
  var markdown = props.markdown,
      editorState = props.editorState,
      insertText = props.insertText;
  var selection = editorState.getSelection();
  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return _react["default"].createElement("div", {
    className: "RichEditor-controls"
  }, !markdown && props.expandControl && BLOCK_TYPES.map(function (type) {
    return _react["default"].createElement(StyleButton, {
      key: type.label,
      active: type.style === blockType,
      label: type.label,
      onToggle: props.toggleBlockType,
      className: type.className,
      style: type.style
    });
  }), !markdown && props.expandControl && INLINE_STYLES.map(function (type) {
    return _react["default"].createElement(StyleButton, {
      key: type.label,
      active: currentStyle.has(type.style),
      label: type.label,
      onToggle: props.toggleInlineStyle,
      className: type.className,
      style: type.style
    });
  }), _react["default"].createElement(_qiniuUploadImage["default"], {
    beforeUpload: function beforeUpload(files) {
      if (markdown) return;
      var s = [];
      files.map(function (item) {
        s.push({
          name: item.name,
          src: ''
        });
      });
      props.addImage(s);
    },
    upload: function upload(url, file) {
      // console.log(url);
      // console.log(file);
      if (markdown) {
        insertText("![".concat(file.name, "](").concat(url, " \"").concat(file.name, "\")"));
      } else {
        props.updateImage(url, file);
      }
    },
    text: _react["default"].createElement("span", {
      className: "RichEditor-styleButton image"
    })
  }));
};

var MyEditor =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(MyEditor, _React$Component2);

  function MyEditor(props) {
    var _this2;

    _classCallCheck(this, MyEditor);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MyEditor).call(this, props));
    var _this2$props = _this2.props,
        syncContent = _this2$props.syncContent,
        content = _this2$props.content,
        placeholder = _this2$props.placeholder,
        expandControl = _this2$props.expandControl;
    var decorator = new _draftJs.CompositeDecorator([{
      strategy: findLinkEntities,
      component: Link
    }]);
    _this2.state = {
      syncContent: syncContent,
      // 编辑器改变的时候，调给外部组件使用
      editorState: content ? _draftJs.EditorState.createWithContent((0, _draftJs.convertFromRaw)(JSON.parse(content)), decorator) : _draftJs.EditorState.createEmpty(decorator),
      placeholder: placeholder,
      // 展开控制栏
      expandControl: expandControl || false,
      markdown: false
    }; // this.markdownRef = useRef();

    _this2.onChange = _this2._onChange.bind(_assertThisInitialized(_this2));

    _this2.toggleBlockType = function (type) {
      return _this2._toggleBlockType(type);
    };

    _this2.toggleInlineStyle = function (style) {
      return _this2._toggleInlineStyle(style);
    };

    _this2.addImage = _this2._addImage.bind(_assertThisInitialized(_this2));
    _this2.addLink = _this2._addLink.bind(_assertThisInitialized(_this2));
    _this2.updateImage = _this2._updateImage.bind(_assertThisInitialized(_this2));
    _this2.handleKeyCommand = _this2._handleKeyCommand.bind(_assertThisInitialized(_this2));
    _this2.mapKeyToEditorCommand = _this2._mapKeyToEditorCommand.bind(_assertThisInitialized(_this2));
    _this2.mediaBlockRenderer = _this2.mediaBlockRenderer.bind(_assertThisInitialized(_this2));
    _this2.media = _this2._media.bind(_assertThisInitialized(_this2));
    _this2.setMarkdown = _this2.setMarkdown.bind(_assertThisInitialized(_this2));
    _this2.insertText = _this2.insertText.bind(_assertThisInitialized(_this2)); // this.checkUpload = this.checkUpload.bind(this);

    return _this2;
  }

  _createClass(MyEditor, [{
    key: "setMarkdown",
    value: function setMarkdown() {
      var _this3 = this;

      this.setState({
        markdown: this.state.markdown ? false : true
      }, function () {
        _storage["default"].save({
          key: 'markdown',
          data: _this3.state.markdown
        });

        _this3._onChange(_this3.state.editorState);
      });
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var markdown;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.onChange(this.state.editorState);
                this.props.getEditor(this.refs.editor);
                _context.next = 4;
                return _storage["default"].load({
                  key: 'markdown'
                });

              case 4:
                markdown = _context.sent;

                if (this.refs.markdown && markdown) {
                  this.refs.markdown.checked = true;
                  this.setState({
                    markdown: true
                  });
                } // this.props.getCheckUpload(this.checkUpload);


              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "insertText",
    value: function insertText(text) {
      var editorState = this.state.editorState;
      var contentState = editorState.getCurrentContent();

      var content = _draftJs.Modifier.insertText(contentState, editorState.getSelection(), text);

      var newEditorState = _draftJs.EditorState.push(editorState, content, 'insert-characters');

      this.onChange(newEditorState);
    }
  }, {
    key: "_onChange",
    value: function _onChange(editorState) {
      var that = this;
      this.setState({
        editorState: editorState
      }, function () {});
      var _this$state = this.state,
          syncContent = _this$state.syncContent,
          markdown = _this$state.markdown;

      if (syncContent) {
        var content = editorState.getCurrentContent();
        var options = {
          blockRenderers: {
            'code-block': function codeBlock(block) {
              // let data = block.getData();
              // console.log(data);
              var blockKey = block.getKey(),
                  contentState = editorState.getCurrentContent(),
                  previousBlock = contentState.getBlockBefore(blockKey),
                  nextBlock = contentState.getBlockAfter(blockKey),
                  previousBlockType = previousBlock && previousBlock.getType(),
                  nextBlockType = nextBlock && nextBlock.getType(); // console.log(previousBlockType + '/' + nextBlockType);

              var text = encodeContent(block.getText()); // If the previous block wasn't a code-block and the next block is, just
              // start the code-block block.

              if (previousBlockType !== 'code-block' && nextBlockType === 'code-block') {
                return '<pre>' + text;
              } // If the previous block was a code-block and the next block isn't,
              // complete the code-block block.


              if (previousBlockType === 'code-block' && nextBlockType !== 'code-block') {
                return text + '</pre>';
              }
              /*        
              // If the blocks on either side are code-block blocks, just return the text.
              if(previousBlockType === 'code-block' && nextBlockType === 'code-block') {
                return '<code>'+text+'</code>';
              }
                       // If the previous block wasn't a code-block and the next block is, just
              // start the code-block block.
              if(previousBlockType !== 'code-block' && nextBlockType === 'code-block') {
                return '<pre><code>' + text+'</code>';
              }
                       // If the previous block was a code-block and the next block isn't,
              // complete the code-block block.
              if(previousBlockType === 'code-block' && nextBlockType !== 'code-block') {
                return '<code>'+text + '</code></pre>';
              }
              */


              function encodeContent(text) {
                return text.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('\xA0').join('&nbsp;').split('\n').join('<br>' + '\n');
              }

              function encodeAttr(text) {
                return text.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('"').join('&quot;');
              } // return block.getText();
              // Otherwise, this is a one line code-block.


              return text;
            }
          }
        };
        var html = (0, _draftJsExportHtml.stateToHTML)(content, options);

        var _html = html.replace(/<p>/gmi, '');

        _html = _html.replace(/<\/p>/gmi, '');

        if (!_html) {
          syncContent('', '');
          return;
        } // console.log(html);


        if (markdown) {
          html = html.replace(/\<\/p\>\<p\>/g, '');
          html = html.replace(/\<\/p\>/g, '');
          html = html.replace(/<[^>]+>/g, "");
          html = html.replace(/\&lt\;/g, '<');
          html = html.replace(/\&gt\;/g, '>');
          html = html.replace(/\&nbsp\;/g, ' ');
          html = html.replace(/\&amp\;/g, '&'); // console.log(html);

          var converter = new _showdown["default"].Converter();
          converter.setOption('tables', true);
          converter.setOption('simpleLineBreaks', true);
          html = converter.makeHtml(html); // console.log(html);
        } // console.log(html);
        // let imgReg = /(<pre>)[\s\S]*?(<\/pre>)/gi;
        // let preList = html.match(/(<pre>)[\s\S]*?(<\/pre>)/gi);
        // preList


        html = encodeURIComponent(html);
        syncContent(JSON.stringify((0, _draftJs.convertToRaw)(content)), html);
      }
    }
  }, {
    key: "_toggleBlockType",
    value: function _toggleBlockType(blockType) {
      this.onChange(_draftJs.RichUtils.toggleBlockType(this.state.editorState, blockType));
    }
  }, {
    key: "_toggleInlineStyle",
    value: function _toggleInlineStyle(inlineStyle) {
      this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    }
  }, {
    key: "_addLink",
    value: function _addLink(e) {
      var editorState = this.state.editorState;
      var selection = editorState.getSelection();

      if (!selection.isCollapsed()) {
        var url = prompt("请输入url地址以http://或https://开头", "");
        if (!url) return;
        var contentState = editorState.getCurrentContent();
        var contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {
          url: url
        });
        var entityKey = contentStateWithEntity.getLastCreatedEntityKey();

        var newEditorState = _draftJs.EditorState.set(editorState, {
          currentContent: contentStateWithEntity
        });

        this.onChange(_draftJs.RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey));
      } else {
        alert('请先选取需要添加链接的文字内容');
      }
    }
  }, {
    key: "_addImage",
    value: function _addImage(data) {
      this._promptForMedia('image', data);
    }
  }, {
    key: "_updateImage",
    value: function _updateImage(url, file) {
      var self = this;
      var editorState = self.state.editorState;
      var contentState = editorState.getCurrentContent();
      contentState.blockMap.map(function (item) {
        item.findEntityRanges(function (i) {
          var key = i.getEntity();

          if (key) {
            var type = contentState.getEntity(key).getType();

            if (type == 'image') {
              var data = contentState.getEntity(key).getData();

              if (data.name == file.name) {
                data.src = url;
                contentState.replaceEntityData(key, data);
              }
            }
          }
        });
      });
      this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, null)); // self.refs.editor.blur();
      // self.refs.editor.focus();
    }
  }, {
    key: "_promptForMedia",
    value: function _promptForMedia(type, data) {
      var editorState = this.state.editorState;
      var oldEditorState = editorState;
      var entityKey = null;
      data.map(function (item) {
        var contentState = oldEditorState.getCurrentContent();
        var contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', item);
        entityKey = contentStateWithEntity.getLastCreatedEntityKey();

        var newEditorState = _draftJs.AtomicBlockUtils.insertAtomicBlock(oldEditorState, entityKey, ' ');

        oldEditorState = newEditorState;
      });
      this.onChange(oldEditorState);
    }
  }, {
    key: "_handleKeyCommand",
    value: function _handleKeyCommand(command) {
      var editorState = this.state.editorState;
      var that = this;

      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);

      if (newState) {
        this.onChange(newState);
        return true;
      }

      return false;
    }
  }, {
    key: "_mapKeyToEditorCommand",
    value: function _mapKeyToEditorCommand(e) {
      switch (e.keyCode) {
        case 9:
          // TAB
          var newEditorState = _draftJs.RichUtils.onTab(e, this.state.editorState, 4
          /* maxDepth */
          );

          if (newEditorState !== this.state.editorState) {
            this.onChange(newEditorState);
          }

          return;
      }

      return (0, _draftJs.getDefaultKeyBinding)(e);
    }
  }, {
    key: "_media",
    value: function _media(props) {
      var editorState = this.state.editorState;
      var contentState = editorState.getCurrentContent();
      var entity = contentState.getEntity(props.block.getEntityAt(0)); // console.log(entity.getData());

      var _entity$getData = entity.getData(),
          src = _entity$getData.src;

      var type = entity.getType();
      var media; // if (type === 'text-image') {
      //   media = src;
      // } else 

      if (type === 'link') {
        media = _react["default"].createElement("a", {
          href: src,
          target: "_blank",
          rel: "nofollow"
        }, src);
      } else if (type === 'image') {
        media = _react["default"].createElement("img", {
          src: src
        });
      }
      /*
      else if (type === 'youtube') {
        let url = 'https://www.youtube.com/embed/' + src;
        media = <iframe src={url}></iframe>
      } else if (type === 'youku') {
        let url = 'https://player.youku.com/embed/' + src;
        media = <iframe src={url}></iframe>;
      } else if (type === 'qq') {
        let url = "https://v.qq.com/iframe/player.html?vid="+src+"&tiny=0&auto=0";
        media = <iframe src={url} width="auto" height="auto"></iframe>;
      } else if (type === '163-music-song') {
        let url = "//music.163.com/outchain/player?type=2&id="+src+"&auto=1&height=66";
        media = <iframe src={url} width="auto" height="86"></iframe>;
      } else if (type === '163-music-playlist') {
        let url = "//music.163.com/outchain/player?type=0&id="+src+"&auto=1&height=430";
        media = <iframe src={url} width="auto" height="450"></iframe>;
      }
      */


      return media;
    } // 拦截渲染

  }, {
    key: "mediaBlockRenderer",
    value: function mediaBlockRenderer(block) {
      switch (block.getType()) {
        case 'atomic':
          return {
            component: this.media,
            editable: false,
            props: {
              foo: 'bar'
            }
          };
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state2 = this.state,
          editorState = _this$state2.editorState,
          placeholder = _this$state2.placeholder,
          expandControl = _this$state2.expandControl,
          markdown = _this$state2.markdown;
      var _this$props = this.props,
          displayControls = _this$props.displayControls,
          showMarkdown = _this$props.showMarkdown;
      return _react["default"].createElement("div", {
        className: "RichEditor-editor"
      }, displayControls ? _react["default"].createElement("div", {
        className: "d-flex justify-content-between border-bottom"
      }, _react["default"].createElement(Controls, {
        markdown: markdown,
        editorState: editorState,
        toggleBlockType: this.toggleBlockType,
        toggleInlineStyle: this.toggleInlineStyle,
        addImage: this.addImage,
        addLink: this.addLink,
        insertText: this.insertText,
        updateImage: this.updateImage,
        expandControl: expandControl,
        handleExpandControl: function handleExpandControl() {
          _this4.setState({
            expandControl: _this4.state.expandControl ? false : true
          });
        }
      }), showMarkdown ? _react["default"].createElement("div", {
        style: {
          display: 'block-inline',
          height: '40px',
          lineHeight: '40px',
          marginRight: '15px'
        }
      }, _react["default"].createElement("input", {
        ref: "markdown",
        type: "checkbox",
        id: "markdown-input",
        className: "form-check-input",
        onChange: this.setMarkdown,
        style: {
          marginTop: '14px'
        }
      }), _react["default"].createElement("label", {
        className: "form-check-label text-secondary",
        htmlFor: "markdown-input"
      }, "MarkDown")) : null) : null, _react["default"].createElement(_draftJs.Editor, {
        blockRendererFn: this.mediaBlockRenderer,
        editorState: editorState,
        blockStyleFn: getBlockStyle,
        onChange: this.onChange,
        handleKeyCommand: this.handleKeyCommand,
        keyBindingFn: this.mapKeyToEditorCommand,
        placeholder: placeholder,
        ref: "editor" // 清除复制文本样式
        ,
        stripPastedStyles: true,
        spellCheck: true
      }));
    }
  }]);

  return MyEditor;
}(_react["default"].Component);

exports["default"] = MyEditor;

_defineProperty(MyEditor, "defaultProps", {
  displayControls: true,
  syncContent: null,
  content: '',
  getEditor: function getEditor(editor) {},
  placeholder: '请输入正文',
  showMarkdown: false
});

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _qiniu = _interopRequireDefault(__webpack_require__(156));

var _reactRedux = __webpack_require__(7);

var _qiniu2 = __webpack_require__(158);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? '上传图片' : _ref$text,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? true : _ref$multiple,
      _ref$beforeUpload = _ref.beforeUpload,
      beforeUpload = _ref$beforeUpload === void 0 ? function () {} : _ref$beforeUpload,
      _ref$upload = _ref.upload,
      upload = _ref$upload === void 0 ? function () {} : _ref$upload;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      token = _useState2[0],
      setToken = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      url = _useState4[0],
      setUrl = _useState4[1];

  var store = (0, _reactRedux.useStore)();

  var _getQiNiuToken = function _getQiNiuToken() {
    return (0, _qiniu2.getQiNiuToken)()(store.dispatch, store.getState);
  };

  (0, _react.useEffect)(function () {
    if (token) return;

    _getQiNiuToken().then(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          err = _ref3[0],
          res = _ref3[1];

      if (res) {
        setToken(res.token);
        setUrl(res.url);
      }
    });
  });

  var HandleOnUpload = function HandleOnUpload(files) {
    beforeUpload(files);
    files.map(function (item) {
      item.upload().then(function (res) {
        res.text().then(function (res) {
          res = JSON.parse(res);
          upload(url + '/' + res.key, item);
        });
      });
    });
  };

  if (!token) return _react["default"].createElement("span", null);
  return _react["default"].createElement(_qiniu["default"], {
    text: text // onDrop={this.onDrop}
    // size={100}
    ,
    multiple: multiple,
    accept: "image/*",
    token: token // uploadKey={this.state.uploadKey}
    // maxSize="1Mb"
    ,
    onUpload: HandleOnUpload
  });
}

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(__webpack_require__(3));

var _nodeFetch = _interopRequireDefault(__webpack_require__(92));

var _index = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(157);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _default(_ref) {
  var token = _ref.token,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '上传图片' : _ref$text,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 1024 * 1024 * 2 : _ref$size,
      _ref$accept = _ref.accept,
      accept = _ref$accept === void 0 ? '*' : _ref$accept,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? true : _ref$multiple,
      _ref$onUpload = _ref.onUpload,
      onUpload = _ref$onUpload === void 0 ? function (file) {} : _ref$onUpload;

  var _useState = (0, _react.useState)(_index["default"].qiniu.uploadUrl.http),
      _useState2 = _slicedToArray(_useState, 2),
      uploadUrl = _useState2[0],
      setUploadUrl = _useState2[1];

  (0, _react.useEffect)(function () {
    if (window.location.protocol === 'https:') {
      setUploadUrl(_index["default"].qiniu.uploadUrl.https);
    }
  }, []);

  var upload = function upload(file) {
    if (!file || file.size === 0) return null;
    var key = file.preview.split('/').pop() + '.' + file.name.split('.').pop();
    return new Promise(function (resolve) {
      // const input = document.querySelector('input[type="file"]');
      var data = new FormData();
      data.append('file', file);
      data.append('token', token);
      data.append('key', key);
      data.append('x:filename', file.name);
      data.append('x:size', file.size);
      (0, _nodeFetch["default"])(uploadUrl, {
        method: 'POST',
        body: data
      }).then(function (data) {
        resolve(data);
      })["catch"](function (error) {
        resolve(error);
      });
    });
  };

  var onChange = function onChange(e) {
    e.preventDefault();
    var files;

    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    var maxFiles = multiple ? files.length : 1;
    var arr = [];

    for (var i = 0; i < maxFiles; i++) {
      files[i].preview = URL.createObjectURL(files[i]);

      files[i].upload = function (file) {
        return function () {
          return upload(file);
        };
      }(files[i]);

      arr.push(files[i]);
    }

    onUpload(arr);
  };

  return _react["default"].createElement("span", {
    className: "_1Ic4W"
  }, text, _react["default"].createElement("input", {
    className: "a",
    type: "file",
    accept: accept,
    multiple: multiple,
    onChange: onChange
  }));
}

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

// Exports
module.exports = {
	"file": "_1Ic4W"
};

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQiNiuToken = getQiNiuToken;

var _graphql = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getQiNiuToken() {
  return function (dispatch, getState) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(resolve, reject) {
        var _ref2, _ref3, err, res;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _graphql["default"])({
                  apis: [{
                    api: 'qiniuToken',
                    // args,
                    fields: "\n            token\n            url\n          "
                  }],
                  headers: {
                    accessToken: getState().user.accessToken
                  },
                  cache: true
                });

              case 2:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 2);
                err = _ref3[0];
                res = _ref3[1];

                if (err) {
                  resolve([err]);
                } else {
                  resolve([null, res]);
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  };
}

/***/ }),

/***/ 182:
/***/ (function(module, exports) {



/***/ }),

/***/ 183:
/***/ (function(module, exports) {



/***/ })

};;