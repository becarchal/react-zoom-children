/* eslint-disable no-console,react/no-multi-comp */
import * as React from 'react';
import * as ReactDom from 'react-dom';

import ReactZoomChildren from '../src/';

import '../assets/index.less';
import './assets/index.less';

import Code from './components/common/code-block';
const sourceCode = `\
import ReactZoomChildren from 'react-zoom-children';

<ReactZoomChildren>
  <div>this is a container demo</div>
</ReactZoomChildren>`;
class Demo extends React.Component {
  public render() {
    const containerStyle = {
      height: window.innerHeight,
      width: window.innerWidth
    }
    return (
      <div style={containerStyle}>
        <ReactZoomChildren>
          <div>this is a container demo</div>
        </ReactZoomChildren>
        <Code>{sourceCode}</Code>
      </div>
    )
  }
}

export default Demo;
