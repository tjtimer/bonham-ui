import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

import Home from './views/Home'
import Live from './views/Live'
import Contact from './views/Contact'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [{
    path: "/",
    name: "home",
    component: Home
  }, {
    path: "/live",
    name: "live",
    component: Live
  }, {
    path: "/contact",
    name: "contact",
    component: Contact
  }]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})