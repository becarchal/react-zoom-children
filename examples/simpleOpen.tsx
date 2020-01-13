/* eslint-disable no-console,react/no-multi-comp */
import * as React from 'react';
import * as ReactDom from 'react-dom';

import ReactZoomChildren from '../src';

import '../assets/index.less';
import './assets/index.less';

class SimpleOpen extends React.Component {
  public render() {
    const containerStyle = {
      height: window.innerHeight,
      width: window.innerWidth
    }
    return (
      <div style={containerStyle}>
        <ReactZoomChildren onOpen={(ref) => { console.log(ref)}}>
          <div>SimpleOpen</div>
        </ReactZoomChildren>
      </div>
    )
  }
}

export default SimpleOpen;
