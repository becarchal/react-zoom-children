/* eslint-disable no-console,react/no-multi-comp */
import * as React from 'react';
import * as ReactDom from 'react-dom';

import ReactZoomChildren from '../src/';

import '../assets/index.less';
import './assets/index.less';

import Code from './components/common/code-block';
const sourceCode = `\
import ReactZoomChildren from 'react-zoom-children';

<ReactZoomChildren enlargedContent={'otherContent'}>
  <div>ZoomOtherContent</div>
</ReactZoomChildren>`;

class ZoomOtherContent extends React.Component {
  public render() {
    return (
      <div>
        <ReactZoomChildren enlargedContent={'otherContent'}>
          <div>ZoomOtherContent</div>
        </ReactZoomChildren>
        <Code>{sourceCode}</Code>
      </div>
    )
  }
}

export default ZoomOtherContent;
