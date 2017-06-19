// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import store from './store'

import App from './App'

import Welcome from '@/views/Welcome'
import VueLinks from '@/views/VueLinks'

Vue.use(VueResource)
Vue.use(Router)

Vue.config.performance = true
Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  }, {
    path: '/vue-links',
    name: 'VueLinks',
    component: VueLinks
  }
]

const router = new Router({
  mode: 'history',
  base: '/',
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App />',
  components: { App }
})
