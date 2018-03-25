import Vue from 'vue'
import App from './App'
import VueCalendar from 'vue-flat-calendar'
import VueGeolocation from 'vue-browser-geolocation'
import VModal from 'vue-js-modal'
import axios from 'axios'

import './assets/style.css'
import '../node_modules/vue-flat-calendar/src/static/style.less'

Vue.config.productionTip = false
Vue.use(VueCalendar, { locale: 'en', weekStartOn: 6 })
Vue.use(VueGeolocation)
Vue.use(VModal)

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
