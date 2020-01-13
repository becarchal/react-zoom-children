import { mount, shallow, render } from 'enzyme';
import * as React from 'react';
import toJson from 'enzyme-to-json';
import ReactZoomChildren from '../src/';

describe('react-zoom-children', () => {
  let wrapper;
  it('custom prefix', () => {
    wrapper = mount(
      <ReactZoomChildren prefix={"custom"}>
        <span className="testChild">testChild</span>
      </ReactZoomChildren>,
    );
    const child = wrapper.find('.testChild').instance();
    expect(wrapper.props().prefix).toBe('custom');
    expect(child.parentNode.className).toBe('custom_hander');
    // update prefix
    wrapper.setProps({ prefix: 'rzc' });
    expect(wrapper.props().prefix).toBe('rzc');
    expect(child.parentNode.className).toBe('rzc_hander');
  });
  it('zoomIn', () => {
    wrapper = mount(
      <ReactZoomChildren>
        <span className="testChild">testChild</span>
      </ReactZoomChildren>,
    );
    const hander = wrapper.find('.rzc_hander');
    hander.simulate('click');
    const popDom = wrapper.find('.rzc_pop').instance();
    expect(popDom.style.cursor).toBe('zoom-out');
    expect(Number(popDom.style.zIndex)).toBe(999);
  });
  it('zoomOut', () => {
    wrapper = mount(
      <ReactZoomChildren>
        <span className="testChild">testChild</span>
      </ReactZoomChildren>,
    );
    const hander = wrapper.find('.rzc_hander');
    hander.simulate('click');
    expect(wrapper.state().open).toBe(true);
    const popDom = wrapper.find('.rzc_pop');
    popDom.simulate('click');
    expect(popDom.instance().style.transform).toBe('none');
  });
  it('zoomIn enlargedContent', () => {
    wrapper = mount(
      <ReactZoomChildren enlargedContent={'newChild'}>
        <span className="testChild">testChild</span>
      </ReactZoomChildren>,
    );
    const hander = wrapper.find('.rzc_hander');
    hander.simulate('click');
    const popDom = wrapper.find('.rzc_pop').instance();
    expect(popDom.style.cursor).toBe('zoom-out');
    expect(Number(popDom.style.zIndex)).toBe(999);
  });
  it('zoomIn customSize', () => {
    wrapper = mount(
      <ReactZoomChildren customSize={"100%"}>
        <span className="testChild">testChild</span>
      </ReactZoomChildren>,
    );
    const hander = wrapper.find('.rzc_hander');
    hander.simulate('click');
    const popDom = wrapper.find('.rzc_pop').instance();
    expect(popDom.style.cursor).toBe('zoom-out');
    expect(Number(popDom.style.zIndex)).toBe(999);
  });
  it('zoomIn onOpen', () => {
    wrapper = mount(
      <ReactZoomChildren onOpen={(ref) => { console.log(ref)}}>
        <span className="testChild">testChild</span>
      </ReactZoomChildren>,
    );
    const hander = wrapper.find('.rzc_hander');
    hander.simulate('click');
    const popDom = wrapper.find('.rzc_pop').instance();
    expect(popDom.style.cursor).toBe('zoom-out');
    expect(Number(popDom.style.zIndex)).toBe(999);
  });
});
