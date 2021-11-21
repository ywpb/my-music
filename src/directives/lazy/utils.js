export const setAttr = (el, src, tag) => {
    if (tag === 'img') {
      el.src = src
    } else {
      el.style.backgroundImage = `url('${src}')`
    }
  }


  export const inViewport = (el) => {
    const rect = el.getBoundingClientRect()
    return rect.top > 0
      && rect.bottom < window.innerHeight
      && rect.left > 0
      && rect.right < window.innerWidth
  }
  