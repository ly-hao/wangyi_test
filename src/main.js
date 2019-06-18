
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
