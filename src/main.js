import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
