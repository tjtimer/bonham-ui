import { chan, putAsync, operations, go, CLOSED } from 'js-csp'
import channels from '../../channels'
import * as types from '../../mutation_types'

const notificationsListener = chan()
const notificationsMixer = operations.mix(notificationsListener)
operations.mix.add(notificationsMixer, channels.notifications)

export default {
  initNotifications(store) {
    go(function* () {
      let notification
      while (notification !== CLOSED) {
        notification = yield notificationsListener
        const _id = Date.now()
        const created = new Date(_id)
        const newNotification = {...notification, id: _id, created: created, status: 'unread'}
        store.commit(types.NOTIFICATION_ADD, newNotification)
        setTimeout(() => store.dispatch('notificationRemoveFromActive', _id), 8000)
      }
    })
  },
  notificationsShow({ commit, state }, filter) {
    commit(types.NOTIFICATIONS_SET_FILTER, filter)
    if (state.notificationsShow !== true) {
      commit(types.NOTIFICATIONS_TOGGLE)
    }
  },
  notificationsToggle({ commit }) {
    commit(types.NOTIFICATIONS_SET_FILTER, 'ALL')
    commit(types.NOTIFICATIONS_TOGGLE)
  },
  notificationsStatsToggle({ commit }) {
    commit(types.NOTIFICATIONS_STATS_TOGGLE)
  },
  notificationsToggleAll(store) {
    store.commit(types.NOTIFICATIONS_TOGGLE)
    store.commit(types.NOTIFICATIONS_STATS_TOGGLE)
    store.commit(types.NOTIFICATIONS_SET_FILTER, 'ALL')
  },
  notificationAdd(store, note) {
    putAsync(
      channels.notifications,
      note
    )
  },
  notificationSetStatus(store, payload) {
    const indexA = store.state.notificationsActiveList.indexOf(payload.id)
    store.commit(types.NOTIFICATION_SET_STATUS, payload)
    if (indexA >= 0) store.commit(types.NOTIFICATION_REMOVE_FROM_ACTIVE, indexA)
  },
  notificationDelete(store, _id) {
    const index = store.state.notificationsList.indexOf(_id)
    const indexA = store.state.notificationsActiveList.indexOf(_id)
    store.commit(types.NOTIFICATION_DELETE, index)
    if (indexA >= 0) store.commit(types.NOTIFICATION_REMOVE_FROM_ACTIVE, indexA)
  },
  notificationRemoveFromActive(store, _id) {
    const indexA = store.state.notificationsActiveList.indexOf(_id)
    if (indexA >= 0) store.commit(types.NOTIFICATION_REMOVE_FROM_ACTIVE, indexA)
  }
}
