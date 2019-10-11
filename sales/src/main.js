import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/css/reset.css'
import './assets/iconfont/iconcss/iconfont.css'
import './assets/iconfont/iconcss/iconfont.js'
import './assets/iconfont2/iconfont.css'
import './assets/iconfont2/iconfont.js'
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
