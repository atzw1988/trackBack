import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueStorage from 'vue-ls'
import { VueAxios } from './utils/request'
import Vant from 'vant'
import 'vant/lib/index.css'
import TrackButton from './components/TrackButton.vue'

import './permission'

Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(VueAxios)
Vue.use(VueStorage)

Vue.component('track-button', TrackButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
