export const inViewport = (el) => {
    const rect = el.getBoundingClientRect()
    console.log('rect',rect.top > 0
        && rect.bottom < window.innerHeight
        && rect.left > 0
        && rect.right < window.innerWidth);
    return rect.top > 0
      && rect.bottom < window.innerHeight
      && rect.left > 0
      && rect.right < window.innerWidth
  }

export const setAttr = (el, src, tag) => {
    if (tag === 'img') {
        el.src = src
    } else {
        el.style.backgroundImage = `url('${src}')`
    }
}
  