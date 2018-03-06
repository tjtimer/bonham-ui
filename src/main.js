import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App.vue'

import appRouter from './router'
import appStore from './store'

Vue.use(Router)
Vue.use(Vuex)

const router = new Router(appRouter)
const store = new Vuex.Store(appStore)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})