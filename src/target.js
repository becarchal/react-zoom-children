import { cursor, setStyle, getType } from './utils';

const TRANSLATE_Z = 0;

export default class Target {
  constructor(targetDom, instance) {
    this.rect = targetDom.getBoundingClientRect();
    this.el = targetDom;
    this.instance = instance;
    this.translate = null
    this.scale = null
  }

  zoomIn() {
    const { 
      zIndex,
      transitionDuration,
      transitionTimingFunction
    } = this.instance.options;
    this.translate = this.calculateTranslate();
    this.scale = this.calculateScale();
    const styleOpen = {
      position: 'relative',
      zIndex: zIndex + 1,
      cursor: cursor.zoomOut,
      transition: `transform
        ${transitionDuration}s
        ${transitionTimingFunction}`,
      transform: `translate3d(${this.translate.x}px, ${
        this.translate.y
      }px, ${TRANSLATE_Z}px)
        scale(${this.scale.x},${this.scale.y})`,
      height: `${this.rect.height}px`,
      width: `${this.rect.width}px`
    }
    if (this.instance.contentRef) {
      this.instance.contentRef.style.cssText = `
        top: ${this.rect.top}px;
        left: ${this.rect.left}px;
        width: ${this.rect.width}px;
        height: ${this.rect.height}px;
        cursor: zoom-out;
      `;
      setStyle(this.instance.contentRef, styleOpen, true)
    }
  }

  zoomOut() {
    if (this.instance.contentRef)
      setStyle(this.instance.contentRef, { transform: 'none' })
  }

  calculateTranslate() {
    const windowCenter = getWindowCenter()
    const targetCenter = {
      x: this.rect.left + this.rect.width / 2,
      y: this.rect.top + this.rect.height / 2
    }

    // The vector to translate div to the window center
    return {
      x: windowCenter.x - targetCenter.x,
      y: windowCenter.y - targetCenter.y
    }
  }

  calculateScale() {
    const { customSize, scaleBase } = this.instance.options;
    if (getType(customSize) === 'object') {
      return {
        x: customSize.width / this.rect.width,
        y: customSize.height / this.rect.height
      }
    } else {
      const targetHalfWidth = this.rect.width / 2
      const targetHalfHeight = this.rect.height / 2
      const windowCenter = getWindowCenter()

      // The distance between target edge and window edge
      const targetEdgeToWindowEdge = {
        x: windowCenter.x - targetHalfWidth,
        y: windowCenter.y - targetHalfHeight
      }

      const scaleHorizontally = targetEdgeToWindowEdge.x / targetHalfWidth
      const scaleVertically = targetEdgeToWindowEdge.y / targetHalfHeight

      // The additional scale is based on the smaller value of
      // scaling horizontally and scaling vertically
      const scale = scaleBase + Math.min(scaleHorizontally, scaleVertically)

      if (getType(customSize) === 'string') {
        // Use zoomingWidth and zoomingHeight if available
        const { windowWidth, windowHeight } = getWindowCenter();
        const maxZoomingWidth =
          parseFloat(customSize) * windowWidth / (100 * this.rect.width)
        const maxZoomingHeight =
          parseFloat(customSize) * windowHeight / (100 * this.rect.height)

        // Only scale image up to the specified customSize percentage
        if (scale > maxZoomingWidth || scale > maxZoomingHeight) {
          return {
            x: maxZoomingWidth,
            y: maxZoomingHeight
          }
        }
      }

      return {
        x: scale,
        y: scale
      }
    }
  }
}

function getWindowCenter() {
  const docEl = document.documentElement
  const windowWidth = Math.min(docEl.clientWidth, window.innerWidth)
  const windowHeight = Math.min(docEl.clientHeight, window.innerHeight)

  return {
    x: windowWidth / 2,
    y: windowHeight / 2,
    windowWidth,
    windowHeight
  }
}
