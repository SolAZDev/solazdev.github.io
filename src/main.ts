import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/bootstrap-vue'
import './plugins/vue-meta'
import App from './App.vue'
import router from './router'
import * as SiteMedia from './data'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
