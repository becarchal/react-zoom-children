# react-zoom-children
---

[![NPM version][npm-image]][npm-url]
[![build status][circleci-image]][circleci-url]
[![codecov](https://codecov.io/gh/becarchal/react-zoom-children/branch/master/graph/badge.svg)](https://codecov.io/gh/becarchal/react-zoom-children)
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/react-zoom-children.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-zoom-children
[circleci-image]: https://img.shields.io/circleci/build/github/becarchal/react-zoom-children/master.svg?style=flat-square
[circleci-url]: https://circleci.com/gh/becarchal/react-zoom-children/tree/master
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/react-zoom-children.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-zoom-children

🔍zoom img or any childNode for react. (Inspired by [drawer](https://github.com/react-component/drawer), [zooming](https://github.com/kingdido999/zooming))
## Example

http://becarchal.github.io/react-zoom-children

## Usage

```js
import ReactZoomChildren from 'react-zoom-children';
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
  <ReactZoomChildren>
    {children}
  </ReactZoomChildren>
, mountNode);
```

## Install

[![react-zoom-children](https://nodei.co/npm/react-zoom-children.png)](https://npmjs.org/package/react-zoom-children)
```
npm install -S react-zoom-children
```

## Browser Support

|![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true)|
| --- | --- | --- | --- | --- |
| IE 10+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |

## API
| props      | type           | default | description    |
|------------|----------------|---------|----------------|
| prefix     |  string  | 'rzc' | prefix class |
| wrapperClassName | string | null | wrapper class name |
| enlargedContent | ReactElement\|null | null | Enlarged content |
| transitionDuration | number | 0.4 | Transition duration in seconds|
| transitionTimingFunction | string | 'cubic-bezier(0.4, 0, 0, 1)' | Transition timing function |
| maskColor | string | 'rgb(255, 255, 255)' | mask background color |
| maskOpacity | number | 1 | mask background opacity |
| style | object | {} | wrapper style |
| maskStyle | object  | {} | mask style |
| scaleBase | number | 1 | The base scale factor for zooming. By default scale to fit the window |
| zIndex | number | 998 | The z-index that the wrapper will be added with |
| customSize | object\|string\|null | null | Scale (zoom in) to given width and height. Ignore scaleBase if set. Alternatively, provide a percentage value relative to the original image size |
| onOpen | function | () => {} | A callback function that will be called when a target is opened and transition has ended. It will get the target element as the argument|
| onClose | function | () => {} | Same as above, except fired when closed |
| onBeforeOpen | function | () => {} | A callback function that will be called before open |
| onBeforeClose | function | () => {} | A callback function that will be called before close |

## Development

```
npm install
npm start
npm run coverage
```

## 欢迎参与贡献

发现了错误? 向我发起一个 [PR](https://github.com/becarchal/react-zoom-children/pulls) 吧!
参考 [Commit message 和 Change log 编写指南 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html) 提交 commit 即可。

## 致谢

- [father](https://github.com/umijs/father) Library toolkit based on rollup, docz, storybook, jest, prettier and eslint,整合工具包简化了开源包开发, 
- [drawer](https://github.com/react-component/drawer), [zooming](https://github.com/kingdido999/zooming)
