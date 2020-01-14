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
  <img style={style} src={require('./images/demo-img.png')} alt="" />
</ReactZoomChildren>`;
class Demo extends React.Component {
  public render() {
    const style = {
      width: 300,
      height: 'auto'
    }
    return (
      <div className="row" >
        <ReactZoomChildren>
          <img style={style} src={require('./images/demo-img.png')} alt="" />
        </ReactZoomChildren>
        <Code>{sourceCode}</Code>
      </div>
    )
  }
}

export default Demo;
