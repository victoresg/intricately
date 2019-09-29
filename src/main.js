import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import core from './core'

core.inject()
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')