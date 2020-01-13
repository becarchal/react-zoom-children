import React, { Component } from 'react';
import Target from './target';
import { listen } from './utils';

class Child extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _self: this,
    };
  }

  static getDerivedStateFromProps(props, { /* prevProps, */ _self }) {
    const nextState = {
      prevProps: props,
    };
    _self.options = Object.assign({}, props.options)
    return nextState;
  }

  componentDidMount() {
    const { open, handlerRef } = this.props;
    if (open && handlerRef) {
      this.zoomIn(handlerRef());
    }
  }

  componentDidUpdate(prevProps/* , prevState */) {
    const { open, handlerRef } = this.props;
    if (open !== prevProps.open) {
      if (open && handlerRef) {
        this.zoomIn(handlerRef());
      }
    }
  }

  componentWillUnmount() {
    if (this.timer)
      clearTimeout(this.timer)
  }

  // 放大
  zoomIn = (dom, cb = this.options.onOpen) => {
    if (this.contentRef && dom.children.length !== 0) {
      this.target = new Target(dom.children[0], this);
      if (typeof this.options.onBeforeClose === 'function')
        this.options.onBeforeOpen(this.contentRef);
      this.target.zoomIn();
      const onOpenEnd = () => {
        listen(this.contentRef, 'transitionend', onOpenEnd, false);
        cb(this.contentRef);
      }
      listen(this.contentRef, 'transitionend', onOpenEnd)
    }
  }

  // 缩小
  zoomOut = (cb = this.options.onClose) => {
    this.target.zoomOut();
    if (this.contentRef && typeof this.options.onBeforeClose === 'function')
      this.options.onBeforeClose(this.contentRef);
    if (this.contentRef) {
      const onCloseEnd = () => {
        listen(this.contentRef, 'transitionend', onCloseEnd, false);
        cb(this.contentRef);
      }
      listen(this.contentRef, 'transitionend', onCloseEnd);
    }
    this.timer = setTimeout(() => {
      if (typeof this.props.onClose === 'function')
        this.props.onClose();
    }, 300);
  }

  render() {
    const { prefix = 'rzc', style, maskStyle: maskStyleProps = {} } = this.props;
    const { enlargedContent, maskColor, maskOpacity } = this.options;
    const maskStyle = {
      backgroundColor: maskColor,
      opacity: maskOpacity,
      ...maskStyleProps
    }
    return (
      <div className={`${prefix}_wrapper`} style={style}>
        <div style={maskStyle} className={`${prefix}_mask`} />
        <div 
          className={`${prefix}_pop`}
          onClick={this.zoomOut} 
          ref={i => this.contentRef = i}>
            {enlargedContent 
              ? <div className={`${prefix}_center`}>{enlargedContent}</div> 
              : this.props.children
            }
        </div>
      </div>
    );
  }
}

export default Child;