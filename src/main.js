import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCogs,
  faBackspace,
  faKeyboard
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import ShortcutPlugin from './plugins/shortcut'
import './registerServiceWorker'

Vue.config.productionTip = false

const keyMap = new Map()
Vue.use(ShortcutPlugin, { keyMap })

library.add(faBackspace, faCogs, faKeyboard)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
