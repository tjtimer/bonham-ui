import Channel from 'async-csp';

import state from './state'
import actions from './actions'
import mutations from './mutations'


const notificationChannel = new Channel()
const errorChannel = new Channel()
const warningChannel = new Channel()
const debugChannel = new Channel()
const logChannel = new Channel()

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  notificationChannel,
  errorChannel,
  warningChannel,
  debugChannel,
  logChannel
}