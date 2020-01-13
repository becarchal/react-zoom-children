import PortalWrapper from 'rc-util/lib/PortalWrapper';
import * as React from 'react';
import { polyfill } from 'react-lifecycles-compat';
import Child from './Child';
import defaultProps from './defaultProps';

class DrawerWrapper extends React.Component {
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      getContainer: '',
    };
  }

  onHandleClick = () => {
    this.setState({
      open: true,
      getContainer: 'body'
    });
  }

  onClose = () => {
    this.setState({
      open: false,
      getContainer: '',
    });
  }

  render() {
    const {
      wrapperClassName,
      style,
      maskStyle,
      zIndex,
      prefix,
      ...props
    } = this.props;
    const { open, getContainer } = this.state;
  
    return (
      <React.Fragment>
        <div
          onClick={this.onHandleClick}
          className={`${prefix}_hander`}
          ref={i => this.handlerRef = i}
        >
          {this.props.children}
        </div>
        <PortalWrapper
          visible={open}
          wrapperClassName={wrapperClassName}
          getContainer={getContainer}
        >
          {({ visible }) => (
            // react 15，componentWillUnmount 时 Portal 返回 afterClose, visible.
            <Child  
              style={{ ...style, zIndex }}
              maskStyle={maskStyle}
              prefix={prefix}
              options={{...props, zIndex}}
              open={visible !== undefined ? visible : open}
              onClose={this.onClose}
              handlerRef={() => this.handlerRef }
            >{this.props.children}</Child>
          )}
        </PortalWrapper>
      </React.Fragment>
    );
  }
}

export default polyfill(DrawerWrapper);
