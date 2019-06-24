// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/css/function.css'
import '@/assets/css/custom.css'
import '@/assets/css/iconfont/iconfont.css'
import axios from './axios'
import store from './store'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(MintUI)
//axios.defaults.baseURL = 'http://localhost:8080/api'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
