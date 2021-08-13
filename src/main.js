import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
