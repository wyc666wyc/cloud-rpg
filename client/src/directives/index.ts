import { Directive } from 'vue'
export const vMasory = {

}

export const vPermit: Directive = {
  created() {

  },
  mounted(el, binding, vnode) {

  }
}

export const vShake: Directive = {
  created() {

  },
  mounted(el, binding, vnode) {
    let timer: number | null = null
    const time = 1000
    el.addEventListener('mousedown', () => {
      el.classList.add('shake')
      timer = setTimeout(() => {
        el.classList.remove('shake')
        el.classList.add('finish')
      }, time)
    })
    el.addEventListener('mouseup', () => {
      el.classList.remove('shake')
      clearTimeout(timer!)
    })
  }
}