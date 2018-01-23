import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

import Home from './components/Home'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [{
    path: "/",
    name: "Home",
    component: Home
  }]
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})