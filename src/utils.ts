export const cursor = {
  default: 'auto',
  zoomIn: 'zoom-in',
  zoomOut: 'zoom-out',
  grab: 'grab',
  move: 'move'
}

export function listen(el, event, handler, add = true) {
  const options = { passive: false }

  if (add) {
    el.addEventListener(event, handler, options)
  } else {
    el.removeEventListener(event, handler, options)
  }
}

export function setStyle(el, styles, remember) {
  if (styles.transition) {
    const value = styles.transition
    delete styles.transition
    styles.transition = value
  }

  if (styles.transform) {
    const value = styles.transform
    delete styles.transform
    styles.transform = value
  }

  const s = el.style
  const original = {}

  Object.keys(styles).forEach(key => {
    if (remember) {
      original[key] = s[key] || ''
    }
    s[key] = styles[key]
  })
  return original
}

/** 获取变量类型
 * @param  {*} obj
 */
export function getType(obj) {
  const { toString } = Object.prototype;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  if (obj instanceof Element) {
    return 'element';
  }
  return map[toString.call(obj)];
}
