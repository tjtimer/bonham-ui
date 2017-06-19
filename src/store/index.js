import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import header from './modules/header'
import sidebar from './modules/sidebar'
import modal from './modules/modal'
import account from './modules/account'
import calendar from './modules/calendar'
import notification from './modules/notification'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const EventBus = new Vue()

export default new Vuex.Store({
  modules: {
    app,
    header,
    sidebar,
    modal,
    account,
    calendar,
    notification
  },
  strict: debug
})
