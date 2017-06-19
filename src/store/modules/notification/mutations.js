import * as types from '../../mutation_types'
export default {
  [types.NOTIFICATION_ADD](state, note) {
    state.notifications[note.id] = note
    state.notificationsList = [...state.notificationsList, note.id]
    state.notificationsActiveList = [...state.notificationsActiveList, note.id]
  },
  [types.NOTIFICATION_SET_STATUS](state, payload) {
    state.notifications = {
      ...state.notifications,
      [payload.id]: {
        ...state.notifications[payload.id],
        status: payload.status
      }
    }
  },
  [types.NOTIFICATION_DELETE](state, index) {
    state.notificationsList = [
      ...state.notificationsList.slice(0, index),
      ...state.notificationsList.slice(index + 1, state.notificationsList.length)
    ]
  },
  [types.NOTIFICATIONS_TOGGLE](state) {
    state.notificationsShow = !state.notificationsShow
  },
  [types.NOTIFICATIONS_STATS_TOGGLE](state) {
    state.notificationsShowStats = state.notificationsShow = !state.notificationsShowStats
  },
  [types.NOTIFICATIONS_SET_FILTER](state, displayFilter) {
    state.notificationsDisplayFilter = displayFilter
  },
  [types.NOTIFICATION_REMOVE_FROM_ACTIVE](state, index) {
    console.log('Active Note will be removed', index)
    state.notificationsActiveList = [
      ...state.notificationsActiveList.slice(0, index),
      ...state.notificationsActiveList.slice(index + 1, state.notificationsActiveList.length)
    ]
  }
}
