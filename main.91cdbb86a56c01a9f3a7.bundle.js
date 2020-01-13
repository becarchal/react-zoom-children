(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(110);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _default=_interopRequireDefault(__webpack_require__(918)).default;exports.default=_default},156:function(module,exports,__webpack_require__){var api=__webpack_require__(364),content=__webpack_require__(901);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(module.i,content,options),content.locals?content.locals:{});module.exports=exported},157:function(module,exports,__webpack_require__){var api=__webpack_require__(364),content=__webpack_require__(902);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1},exported=(api(module.i,content,options),content.locals?content.locals:{});module.exports=exported},225:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# react-zoom-children\n---\n\n[![NPM version][npm-image]][npm-url]\n[![build status][circleci-image]][circleci-url]\n[![codecov](https://codecov.io/gh/becarchal/react-zoom-children/branch/master/graph/badge.svg)](https://codecov.io/gh/becarchal/react-zoom-children)\n[![node version][node-image]][node-url]\n[![npm download][download-image]][download-url]\n\n[npm-image]: http://img.shields.io/npm/v/react-zoom-children.svg?style=flat-square\n[npm-url]: http://npmjs.org/package/react-zoom-children\n[circleci-image]: https://img.shields.io/circleci/build/github/becarchal/react-zoom-children/master.svg?style=flat-square\n[circleci-url]: https://circleci.com/gh/becarchal/react-zoom-children/tree/master\n[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square\n[node-url]: http://nodejs.org/download/\n[download-image]: https://img.shields.io/npm/dm/react-zoom-children.svg?style=flat-square\n[download-url]: https://npmjs.org/package/react-zoom-children\n\n## Example\n\nhttp://react-zoom-children.github.io/react-zoom-children/examples/\n\n## Usage\n\n```js\nimport ReactZoomChildren from 'react-zoom-children';\nimport React from 'react';\nimport ReactDom from 'react-dom';\n\nReactDom.render(\n  <ReactZoomChildren>\n    {children}\n  </ReactZoomChildren>\n, mountNode);\n```\n\n## Install\n\n[![react-zoom-children](https://nodei.co/npm/react-zoom-children.png)](https://npmjs.org/package/react-zoom-children)\n\n## Browser Support\n\n|![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true)|\n| --- | --- | --- | --- | --- |\n| IE 10+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |\n\n## API\n| props      | type           | default | description    |\n|------------|----------------|---------|----------------|\n| prefix     |  string  | 'rzc' | prefix class |\n| wrapperClassName | string | null | wrapper class name |\n| enlargedContent | ReactElement\\|null | null | Enlarged content |\n| transitionDuration | number | 0.4 | Transition duration in seconds|\n| transitionTimingFunction | string | 'cubic-bezier(0.4, 0, 0, 1)' | Transition timing function |\n| maskColor | string | 'rgb(255, 255, 255)' | mask background color |\n| maskOpacity | number | 1 | mask background opacity |\n| style | object | {} | wrapper style |\n| maskStyle | object  | {} | mask style |\n| scaleBase | number | 1 | The base scale factor for zooming. By default scale to fit the window |\n| zIndex | number | 998 | The z-index that the wrapper will be added with |\n| customSize | object\\|string\\|null | null | Scale (zoom in) to given width and height. Ignore scaleBase if set. Alternatively, provide a percentage value relative to the original image size |\n| onOpen | function | () => {} | A callback function that will be called when a target is opened and transition has ended. It will get the target element as the argument|\n| onClose | function | () => {} | Same as above, except fired when closed |\n| onBeforeOpen | function | () => {} | A callback function that will be called before open |\n| onBeforeClose | function | () => {} | A callback function that will be called before close |\n\n## Development\n\n```\nnpm install\nnpm start\n```\n\n## 欢迎参与贡献\n\n发现了错误? 向我发起一个 [PR](https://github.com/becarchal/react-zoom-children/pulls) 吧!\n参考 [Commit message 和 Change log 编写指南 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html) 提交 commit 即可。\n\n## 致谢\n\n- [father](https://github.com/umijs/father) Library toolkit based on rollup, docz, storybook, jest, prettier and eslint,整合工具包简化了开源包开发, \n- [drawer](https://github.com/react-component/drawer), [zooming](https://github.com/kingdido999/zooming)\n"},36:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.listen=function listen(el,event,handler){var add=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],options={passive:!1};add?el.addEventListener(event,handler,options):el.removeEventListener(event,handler,options)},exports.setStyle=function setStyle(el,styles,remember){if(styles.transition){var value=styles.transition;delete styles.transition,styles.transition=value}if(styles.transform){var _value=styles.transform;delete styles.transform,styles.transform=_value}var s=el.style,original={};return Object.keys(styles).forEach((function(key){remember&&(original[key]=s[key]||""),s[key]=styles[key]})),original},exports.getType=function getType(obj){var toString=Object.prototype.toString;if(obj instanceof Element)return"element";return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[toString.call(obj)]},exports.cursor=void 0;exports.cursor={default:"auto",zoomIn:"zoom-in",zoomOut:"zoom-out",grab:"grab",move:"move"}},378:function(module,exports){module.exports="/* eslint-disable no-console,react/no-multi-comp */\nimport * as React from 'react';\nimport * as ReactDom from 'react-dom';\n\nimport ReactZoomChildren from '../src/';\n\nimport '../assets/index.less';\nimport './assets/index.less';\n\nclass Demo extends React.Component {\n  public render() {\n    const style = {\n      width: 300,\n      height: 'auto'\n    }\n    const containerStyle = {\n      height: window.innerHeight,\n      width: window.innerWidth,\n      padding: '600px',\n    }\n    return (\n      <div style={containerStyle} className=\"row\" >\n        <ReactZoomChildren>\n          <img style={style} src={require('./images/demo-img.png')} alt=\"\" />\n        </ReactZoomChildren>\n      </div>\n    )\n  }\n}\n\nexport default Demo;\n"},379:function(module,exports){module.exports="/* eslint-disable no-console,react/no-multi-comp */\nimport * as React from 'react';\nimport * as ReactDom from 'react-dom';\n\nimport ReactZoomChildren from '../src/';\n\nimport '../assets/index.less';\nimport './assets/index.less';\n\nclass Demo extends React.Component {\n  public render() {\n    const containerStyle = {\n      height: window.innerHeight,\n      width: window.innerWidth\n    }\n    return (\n      <div style={containerStyle}>\n        <ReactZoomChildren>\n          <div>this is a container demo</div>\n        </ReactZoomChildren>\n      </div>\n    )\n  }\n}\n\nexport default Demo;\n"},380:function(module,exports){module.exports="/* eslint-disable no-console,react/no-multi-comp */\nimport * as React from 'react';\nimport * as ReactDom from 'react-dom';\n\nimport ReactZoomChildren from '../src';\n\nimport '../assets/index.less';\nimport './assets/index.less';\n\nclass SimpleOpen extends React.Component {\n  public render() {\n    const containerStyle = {\n      height: window.innerHeight,\n      width: window.innerWidth\n    }\n    return (\n      <div style={containerStyle}>\n        <ReactZoomChildren onOpen={(ref) => { console.log(ref)}}>\n          <div>SimpleOpen</div>\n        </ReactZoomChildren>\n      </div>\n    )\n  }\n}\n\nexport default SimpleOpen;\n"},381:function(module,exports){module.exports="/* eslint-disable no-console,react/no-multi-comp */\nimport * as React from 'react';\nimport * as ReactDom from 'react-dom';\n\nimport ReactZoomChildren from '../src/';\n\nimport '../assets/index.less';\nimport './assets/index.less';\n\nclass ZoomOtherContent extends React.Component {\n  public render() {\n    const containerStyle = {\n      height: window.innerHeight,\n      width: window.innerWidth\n    }\n    return (\n      <div style={containerStyle}>\n        <ReactZoomChildren enlargedContent={'otherContent'}>\n          <div>ZoomOtherContent</div>\n        </ReactZoomChildren>\n      </div>\n    )\n  }\n}\n\nexport default ZoomOtherContent;\n"},382:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__(149),_interopRequireDefault=__webpack_require__(110);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(150)),_createClass2=_interopRequireDefault(__webpack_require__(151)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(152)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(153)),_inherits2=_interopRequireDefault(__webpack_require__(154)),React=_interopRequireWildcard(__webpack_require__(0)),_src=_interopRequireDefault(__webpack_require__(155));__webpack_require__(156),__webpack_require__(157);var _default=function(_React$Component){function Demo(){return(0,_classCallCheck2.default)(this,Demo),(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Demo).apply(this,arguments))}return(0,_inherits2.default)(Demo,_React$Component),(0,_createClass2.default)(Demo,[{key:"render",value:function render(){var containerStyle={height:window.innerHeight,width:window.innerWidth,padding:"600px"};return React.createElement("div",{style:containerStyle,className:"row"},React.createElement(_src.default,null,React.createElement("img",{style:{width:300,height:"auto"},src:__webpack_require__(903),alt:""})))}}]),Demo}(React.Component);exports.default=_default},384:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__(149),_interopRequireDefault=__webpack_require__(110);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(150)),_createClass2=_interopRequireDefault(__webpack_require__(151)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(152)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(153)),_inherits2=_interopRequireDefault(__webpack_require__(154)),React=_interopRequireWildcard(__webpack_require__(0)),_src=_interopRequireDefault(__webpack_require__(155));__webpack_require__(156),__webpack_require__(157);var _default=function(_React$Component){function Demo(){return(0,_classCallCheck2.default)(this,Demo),(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Demo).apply(this,arguments))}return(0,_inherits2.default)(Demo,_React$Component),(0,_createClass2.default)(Demo,[{key:"render",value:function render(){var containerStyle={height:window.innerHeight,width:window.innerWidth};return React.createElement("div",{style:containerStyle},React.createElement(_src.default,null,React.createElement("div",null,"this is a container demo")))}}]),Demo}(React.Component);exports.default=_default},385:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__(149),_interopRequireDefault=__webpack_require__(110);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(150)),_createClass2=_interopRequireDefault(__webpack_require__(151)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(152)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(153)),_inherits2=_interopRequireDefault(__webpack_require__(154)),React=_interopRequireWildcard(__webpack_require__(0)),_src=_interopRequireDefault(__webpack_require__(155));__webpack_require__(156),__webpack_require__(157);var _default=function(_React$Component){function SimpleOpen(){return(0,_classCallCheck2.default)(this,SimpleOpen),(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(SimpleOpen).apply(this,arguments))}return(0,_inherits2.default)(SimpleOpen,_React$Component),(0,_createClass2.default)(SimpleOpen,[{key:"render",value:function render(){var containerStyle={height:window.innerHeight,width:window.innerWidth};return React.createElement("div",{style:containerStyle},React.createElement(_src.default,{onOpen:function onOpen(ref){console.log(ref)}},React.createElement("div",null,"SimpleOpen")))}}]),SimpleOpen}(React.Component);exports.default=_default},386:function(module,exports,__webpack_require__){"use strict";var _interopRequireWildcard=__webpack_require__(149),_interopRequireDefault=__webpack_require__(110);Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(150)),_createClass2=_interopRequireDefault(__webpack_require__(151)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(152)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(153)),_inherits2=_interopRequireDefault(__webpack_require__(154)),React=_interopRequireWildcard(__webpack_require__(0)),_src=_interopRequireDefault(__webpack_require__(155));__webpack_require__(156),__webpack_require__(157);var _default=function(_React$Component){function ZoomOtherContent(){return(0,_classCallCheck2.default)(this,ZoomOtherContent),(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(ZoomOtherContent).apply(this,arguments))}return(0,_inherits2.default)(ZoomOtherContent,_React$Component),(0,_createClass2.default)(ZoomOtherContent,[{key:"render",value:function render(){var containerStyle={height:window.innerHeight,width:window.innerWidth};return React.createElement("div",{style:containerStyle},React.createElement(_src.default,{enlargedContent:"otherContent"},React.createElement("div",null,"ZoomOtherContent")))}}]),ZoomOtherContent}(React.Component);exports.default=_default},391:function(module,exports,__webpack_require__){__webpack_require__(392),__webpack_require__(534),module.exports=__webpack_require__(535)},453:function(module,exports){},535:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(72),_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(373),storybook_addon_source__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(774),__webpack_require__(374)),storybook_addon_source__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(storybook_addon_source__WEBPACK_IMPORTED_MODULE_3__);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(storybook_addon_source__WEBPACK_IMPORTED_MODULE_3___default.a),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(776)}),module)}.call(this,__webpack_require__(273)(module))},776:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_markdown__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(375),react_markdown__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(376),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(72),_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(377),rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(378),rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_5__),rc_source_loader_examples_simpleDiv__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(379),rc_source_loader_examples_simpleDiv__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(rc_source_loader_examples_simpleDiv__WEBPACK_IMPORTED_MODULE_6__),rc_source_loader_examples_simpleOpen__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(380),rc_source_loader_examples_simpleOpen__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(rc_source_loader_examples_simpleOpen__WEBPACK_IMPORTED_MODULE_7__),rc_source_loader_examples_zoomOtherContent__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(381),rc_source_loader_examples_zoomOtherContent__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(rc_source_loader_examples_zoomOtherContent__WEBPACK_IMPORTED_MODULE_8__),_examples_simple__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(382),_examples_simple__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_examples_simple__WEBPACK_IMPORTED_MODULE_9__),_examples_simpleDiv__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(384),_examples_simpleDiv__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_examples_simpleDiv__WEBPACK_IMPORTED_MODULE_10__),_examples_simpleOpen__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(385),_examples_simpleOpen__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_examples_simpleOpen__WEBPACK_IMPORTED_MODULE_11__),_examples_zoomOtherContent__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(386),_examples_zoomOtherContent__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_examples_zoomOtherContent__WEBPACK_IMPORTED_MODULE_12__),_storybook_theming__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(387),_README_md__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(225);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.addParameters)({options:{theme:_storybook_theming__WEBPACK_IMPORTED_MODULE_13__.themes.light,name:"react-zoom-children",url:"https://github.com/becarchal/react-zoom-children",title:"react-zoom-children"}});var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a,{escapeHtml:!1,source:_README_md__WEBPACK_IMPORTED_MODULE_14__.a}),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_examples_simple__WEBPACK_IMPORTED_MODULE_9___default.a,null),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_examples_simpleDiv__WEBPACK_IMPORTED_MODULE_10___default.a,null),_ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_examples_simpleOpen__WEBPACK_IMPORTED_MODULE_11___default.a,null),_ref5=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_examples_zoomOtherContent__WEBPACK_IMPORTED_MODULE_12___default.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("react-zoom-children",module).addDecorator(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_2__.withA11y).addDecorator((function(storyFn,context){return Object(_storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__.withConsole)()(storyFn)(context)})).add("README",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"markdown-body entry-content",style:{padding:24}},_ref)}),{source:{code:_README_md__WEBPACK_IMPORTED_MODULE_14__.a}}).add("simple",(function(){return _ref2}),{source:{code:rc_source_loader_examples_simple__WEBPACK_IMPORTED_MODULE_5___default.a}}).add("simpleDiv",(function(){return _ref3}),{source:{code:rc_source_loader_examples_simpleDiv__WEBPACK_IMPORTED_MODULE_6___default.a}}).add("simpleOpen",(function(){return _ref4}),{source:{code:rc_source_loader_examples_simpleOpen__WEBPACK_IMPORTED_MODULE_7___default.a}}).add("zoomOtherContent",(function(){return _ref5}),{source:{code:rc_source_loader_examples_zoomOtherContent__WEBPACK_IMPORTED_MODULE_8___default.a}})}.call(this,__webpack_require__(273)(module))},901:function(module,exports,__webpack_require__){(exports=__webpack_require__(365)(!1)).push([module.i,".rzc_hander {\n  cursor: zoom-in;\n  display: inline-block;\n}\n.rzc_wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.rzc_mask {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.rzc_pop {\n  position: absolute;\n  cursor: 'zoom-in';\n}\n.rzc_center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n",""]),module.exports=exports},902:function(module,exports,__webpack_require__){(exports=__webpack_require__(365)(!1)).push([module.i,".row {\n  display: flex;\n  flex-direction: column;\n}\n",""]),module.exports=exports},903:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/demo-img.1b333c55.png"},918:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(13),__webpack_require__(19),__webpack_require__(20),__webpack_require__(99),__webpack_require__(26),__webpack_require__(107),__webpack_require__(17),__webpack_require__(140),__webpack_require__(79),__webpack_require__(40),__webpack_require__(359),__webpack_require__(360),__webpack_require__(97),__webpack_require__(27),__webpack_require__(142),__webpack_require__(12),__webpack_require__(21),__webpack_require__(28),__webpack_require__(22);var PortalWrapper=__webpack_require__(383),PortalWrapper_default=__webpack_require__.n(PortalWrapper),react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_lifecycles_compat_es=__webpack_require__(224),utils=(__webpack_require__(18),__webpack_require__(882),__webpack_require__(24),__webpack_require__(899),__webpack_require__(36));function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}var target_Target=function(){function Target(targetDom,instance){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Target),this.rect=targetDom.getBoundingClientRect(),this.el=targetDom,this.instance=instance,this.translate=null,this.scale=null}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Target,[{key:"zoomIn",value:function zoomIn(){var _this$instance$option=this.instance.options,zIndex=_this$instance$option.zIndex,transitionDuration=_this$instance$option.transitionDuration,transitionTimingFunction=_this$instance$option.transitionTimingFunction;this.translate=this.calculateTranslate(),this.scale=this.calculateScale();var styleOpen={position:"relative",zIndex:zIndex+1,cursor:utils.cursor.zoomOut,transition:"transform\n        ".concat(transitionDuration,"s\n        ").concat(transitionTimingFunction),transform:"translate3d(".concat(this.translate.x,"px, ").concat(this.translate.y,"px, ").concat(0,"px)\n        scale(").concat(this.scale.x,",").concat(this.scale.y,")"),height:"".concat(this.rect.height,"px"),width:"".concat(this.rect.width,"px")};this.instance.contentRef&&(this.instance.contentRef.style.cssText="\n        top: ".concat(this.rect.top,"px;\n        left: ").concat(this.rect.left,"px;\n        width: ").concat(this.rect.width,"px;\n        height: ").concat(this.rect.height,"px;\n        cursor: zoom-out;\n      "),Object(utils.setStyle)(this.instance.contentRef,styleOpen,!0))}},{key:"zoomOut",value:function zoomOut(){this.instance.contentRef&&Object(utils.setStyle)(this.instance.contentRef,{transform:"none"})}},{key:"calculateTranslate",value:function calculateTranslate(){var windowCenter=getWindowCenter(),targetCenter_x=this.rect.left+this.rect.width/2,targetCenter_y=this.rect.top+this.rect.height/2;return{x:windowCenter.x-targetCenter_x,y:windowCenter.y-targetCenter_y}}},{key:"calculateScale",value:function calculateScale(){var _this$instance$option2=this.instance.options,customSize=_this$instance$option2.customSize,scaleBase=_this$instance$option2.scaleBase;if("object"===Object(utils.getType)(customSize))return{x:customSize.width/this.rect.width,y:customSize.height/this.rect.height};var targetHalfWidth=this.rect.width/2,targetHalfHeight=this.rect.height/2,windowCenter=getWindowCenter(),targetEdgeToWindowEdge={x:windowCenter.x-targetHalfWidth,y:windowCenter.y-targetHalfHeight},scaleHorizontally=targetEdgeToWindowEdge.x/targetHalfWidth,scaleVertically=targetEdgeToWindowEdge.y/targetHalfHeight,scale=scaleBase+Math.min(scaleHorizontally,scaleVertically);if("string"===Object(utils.getType)(customSize)){var _getWindowCenter=getWindowCenter(),windowWidth=_getWindowCenter.windowWidth,windowHeight=_getWindowCenter.windowHeight,maxZoomingWidth=parseFloat(customSize)*windowWidth/(100*this.rect.width),maxZoomingHeight=parseFloat(customSize)*windowHeight/(100*this.rect.height);if(scale>maxZoomingWidth||scale>maxZoomingHeight)return{x:maxZoomingWidth,y:maxZoomingHeight}}return{x:scale,y:scale}}}]),Target}();function getWindowCenter(){var docEl=document.documentElement,windowWidth=Math.min(docEl.clientWidth,window.innerWidth),windowHeight=Math.min(docEl.clientHeight,window.innerHeight);return{x:windowWidth/2,y:windowHeight/2,windowWidth:windowWidth,windowHeight:windowHeight}}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Child_defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Child_Child=function(_Component){function Child(props){var _this;return function Child_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Child),_this=function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?_assertThisInitialized(self):call}(this,_getPrototypeOf(Child).call(this,props)),_defineProperty(_assertThisInitialized(_this),"zoomIn",(function(dom){var cb=1<arguments.length&&void 0!==arguments[1]?arguments[1]:_this.options.onOpen;if(_this.contentRef&&0!==dom.children.length){_this.target=new target_Target(dom.children[0],_assertThisInitialized(_this)),"function"==typeof _this.options.onBeforeClose&&_this.options.onBeforeOpen(_this.contentRef),_this.target.zoomIn();var onOpenEnd=function(){Object(utils.listen)(_this.contentRef,"transitionend",onOpenEnd,!1),cb(_this.contentRef)};Object(utils.listen)(_this.contentRef,"transitionend",onOpenEnd)}})),_defineProperty(_assertThisInitialized(_this),"zoomOut",(function(){var cb=0<arguments.length&&void 0!==arguments[0]?arguments[0]:_this.options.onClose;if(_this.target.zoomOut(),_this.contentRef&&"function"==typeof _this.options.onBeforeClose&&_this.options.onBeforeClose(_this.contentRef),_this.contentRef){var onCloseEnd=function(){Object(utils.listen)(_this.contentRef,"transitionend",onCloseEnd,!1),cb(_this.contentRef)};Object(utils.listen)(_this.contentRef,"transitionend",onCloseEnd)}_this.timer=setTimeout((function(){"function"==typeof _this.props.onClose&&_this.props.onClose()}),300)})),_this.state={_self:_assertThisInitialized(_this)},_this}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Child,_Component),function Child_createClass(Constructor,protoProps,staticProps){return protoProps&&Child_defineProperties(Constructor.prototype,protoProps),staticProps&&Child_defineProperties(Constructor,staticProps),Constructor}(Child,[{key:"componentDidMount",value:function componentDidMount(){var _this$props=this.props,open=_this$props.open,handlerRef=_this$props.handlerRef;open&&handlerRef&&this.zoomIn(handlerRef())}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var _this$props2=this.props,open=_this$props2.open,handlerRef=_this$props2.handlerRef;open!==prevProps.open&&open&&handlerRef&&this.zoomIn(handlerRef())}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.timer&&clearTimeout(this.timer)}},{key:"render",value:function render(){var _this2=this,_this$props3=this.props,_this$props3$prefix=_this$props3.prefix,prefix=void 0===_this$props3$prefix?"rzc":_this$props3$prefix,style=_this$props3.style,_this$props3$maskStyl=_this$props3.maskStyle,maskStyleProps=void 0===_this$props3$maskStyl?{}:_this$props3$maskStyl,_this$options=this.options,enlargedContent=_this$options.enlargedContent,maskStyle=function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}({backgroundColor:_this$options.maskColor,opacity:_this$options.maskOpacity},maskStyleProps);return react_default.a.createElement("div",{className:"".concat(prefix,"_wrapper"),style:style},react_default.a.createElement("div",{style:maskStyle,className:"".concat(prefix,"_mask")}),react_default.a.createElement("div",{className:"".concat(prefix,"_pop"),onClick:this.zoomOut,ref:function ref(i){return _this2.contentRef=i}},enlargedContent?react_default.a.createElement("div",{className:"".concat(prefix,"_center")},enlargedContent):this.props.children))}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(props,_ref){return _ref._self.options=Object.assign({},props.options),{prevProps:props}}}]),Child}(react.Component);Child_Child.displayName="Child",Child_Child.__docgenInfo={description:"",methods:[{name:"zoomIn",docblock:null,modifiers:[],params:[{name:"dom",type:null},{name:"cb",type:null}],returns:null},{name:"zoomOut",docblock:null,modifiers:[],params:[{name:"cb",type:null}],returns:null}],displayName:"Child"};var src_Child=Child_Child;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Child.js"]={name:"Child",docgenInfo:Child_Child.__docgenInfo,path:"src/Child.js"});var noop=function(){},defaultProps={prefix:"rzc",enlargedContent:null,transitionDuration:.4,transitionTimingFunction:"cubic-bezier(0.4, 0, 0, 1)",maskColor:"rgb(255, 255, 255)",maskOpacity:1,style:{},maskStyle:{},scaleBase:1,zIndex:998,customSize:null,onOpen:noop,onClose:noop,onBeforeOpen:noop,onBeforeClose:noop};function ReactZoomChildren_typeof(obj){return(ReactZoomChildren_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function ReactZoomChildren_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function ReactZoomChildren_objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ReactZoomChildren_ownKeys(Object(source),!0).forEach((function(key){ReactZoomChildren_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ReactZoomChildren_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function ReactZoomChildren_defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function ReactZoomChildren_getPrototypeOf(o){return(ReactZoomChildren_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function ReactZoomChildren_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function ReactZoomChildren_setPrototypeOf(o,p){return(ReactZoomChildren_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}function ReactZoomChildren_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ReactZoomChildren_DrawerWrapper=function(_React$Component){function DrawerWrapper(props){var _this;return function ReactZoomChildren_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DrawerWrapper),_this=function ReactZoomChildren_possibleConstructorReturn(self,call){return!call||"object"!==ReactZoomChildren_typeof(call)&&"function"!=typeof call?ReactZoomChildren_assertThisInitialized(self):call}(this,ReactZoomChildren_getPrototypeOf(DrawerWrapper).call(this,props)),ReactZoomChildren_defineProperty(ReactZoomChildren_assertThisInitialized(_this),"onHandleClick",(function(){_this.setState({open:!0,getContainer:"body"})})),ReactZoomChildren_defineProperty(ReactZoomChildren_assertThisInitialized(_this),"onClose",(function(){_this.setState({open:!1,getContainer:""})})),_this.state={open:!1,getContainer:""},_this}return function ReactZoomChildren_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&ReactZoomChildren_setPrototypeOf(subClass,superClass)}(DrawerWrapper,_React$Component),function ReactZoomChildren_createClass(Constructor,protoProps,staticProps){return protoProps&&ReactZoomChildren_defineProperties(Constructor.prototype,protoProps),staticProps&&ReactZoomChildren_defineProperties(Constructor,staticProps),Constructor}(DrawerWrapper,[{key:"render",value:function render(){var _this2=this,_this$props=this.props,wrapperClassName=_this$props.wrapperClassName,style=_this$props.style,maskStyle=_this$props.maskStyle,zIndex=_this$props.zIndex,prefix=_this$props.prefix,props=_objectWithoutProperties(_this$props,["wrapperClassName","style","maskStyle","zIndex","prefix"]),_this$state=this.state,open=_this$state.open,getContainer=_this$state.getContainer;return react.createElement(react.Fragment,null,react.createElement("div",{onClick:this.onHandleClick,className:"".concat(prefix,"_hander"),ref:function ref(i){return _this2.handlerRef=i}},this.props.children),react.createElement(PortalWrapper_default.a,{visible:open,wrapperClassName:wrapperClassName,getContainer:getContainer},(function(_ref){var visible=_ref.visible;return(react.createElement(src_Child,{style:ReactZoomChildren_objectSpread({},style,{zIndex:zIndex}),maskStyle:maskStyle,prefix:prefix,options:ReactZoomChildren_objectSpread({},props,{zIndex:zIndex}),open:void 0!==visible?visible:open,onClose:_this2.onClose,handlerRef:function handlerRef(){return _this2.handlerRef}},_this2.props.children))})))}}]),DrawerWrapper}(react.Component);ReactZoomChildren_DrawerWrapper.displayName="DrawerWrapper",ReactZoomChildren_defineProperty(ReactZoomChildren_DrawerWrapper,"defaultProps",defaultProps),ReactZoomChildren_DrawerWrapper.__docgenInfo={description:"",methods:[{name:"onHandleClick",docblock:null,modifiers:[],params:[],returns:null},{name:"onClose",docblock:null,modifiers:[],params:[],returns:null}],displayName:"DrawerWrapper"};__webpack_exports__.default=Object(react_lifecycles_compat_es.polyfill)(ReactZoomChildren_DrawerWrapper);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ReactZoomChildren.js"]={name:"DrawerWrapper",docgenInfo:ReactZoomChildren_DrawerWrapper.__docgenInfo,path:"src/ReactZoomChildren.js"})}},[[391,1,2]]]);
//# sourceMappingURL=main.91cdbb86a56c01a9f3a7.bundle.js.map