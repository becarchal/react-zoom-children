/* eslint-disable no-console,react/no-multi-comp */
import * as React from 'react';
import * as ReactDom from 'react-dom';

import ReactZoomChildren from '../src/';

import '../assets/index.less';
import './assets/index.less';

class Demo extends React.Component {
  public render() {
    const style = {
      width: 300,
      height: 'auto'
    }
    const containerStyle = {
      height: window.innerHeight,
      width: window.innerWidth,
      padding: '600px',
    }
    return (
      <div style={containerStyle} className="row" >
        <ReactZoomChildren>
          <img style={style} src={require('./images/demo-img.png')} alt="" />
        </ReactZoomChildren>
      </div>
    )
  }
}

export default Demo;
