
export default {
  install (Vue, { keyMap }) {
    Vue.directive('shortcut', {
      bind (el, binding, vnode) {
        const { value } = binding
        const {
          data: { on: { shortcut } }
        } = vnode

        keyMap.set(value, shortcut)
      },
      unbind (el, binding, vnode) {
        const { value } = binding
        keyMap.delete(value)
      }
    })

    document.addEventListener('keydown', (evt) => {
      const { code } = evt

      const handler = keyMap.get(code)
      if (!handler) return true

      handler(evt)
    })
  }
}
