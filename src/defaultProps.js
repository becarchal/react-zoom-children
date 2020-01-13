const noop = () => {}

export default {
  /**
   * prefix class
   * @type {string}
  */
  prefix: 'rzc',
  /**
   * Enlarged content
   * @type {ReactElement|null}
  */
  enlargedContent: null,
   /**
   * Transition duration in seconds.
   * @type {number}
   */
  transitionDuration: 0.4,

  /**
   * Transition timing function.
   * @type {string}
   */
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0, 1)',

  /**
   * mask background color.
   * @type {string}
   */
  maskColor: 'rgb(255, 255, 255)',

  /**
   * mask background opacity.
   * @type {number}
   */
  maskOpacity: 1,
  /**
   * wrapper style.
   * @type {object}
   */
  style: {},
  /**
   * mask style.
   * @type {object}
   */
  maskStyle: {},
  /**
   * The base scale factor for zooming. By default scale to fit the window.
   * @type {number}
   */
  scaleBase: 1.0,
 /**
   * The z-index that the wrapper will be added with.
   * @type {number}
   */
  zIndex: 998,

  /**
   * Scale (zoom in) to given width and height. Ignore scaleBase if set.
   * Alternatively, provide a percentage value relative to the original image size.
   * @type {Object|String}
   * @example
   * customSize: { width: 800, height: 400 }
   * customSize: 100%
   */
  customSize: null,
  /**
   * A callback function that will be called when a target is opened and
   * transition has ended. It will get the target element as the argument.
   * @type {Function}
   */
  onOpen: noop,

  /**
   * Same as above, except fired when closed.
   * @type {Function}
   */
  onClose: noop,
  /**
   * A callback function that will be called before open.
   * @type {Function}
   */
  onBeforeOpen: noop,

  /**
   * A callback function that will be called before close.
   * @type {Function}
   */
  onBeforeClose: noop,

}