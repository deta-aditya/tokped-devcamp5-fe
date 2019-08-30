import Vue from 'vue'
import App from './App.vue'
import './styles.css'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueQrcodeReader from "vue-qrcode-reader"

library.add(fas)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.use(VueQrcodeReader)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
