function count(state, status) {
  let count = 0
  for (let _id of state.notificationsList) {
    if (state.notifications[_id].status === status) { count += 1 }
  }
  return count
}
export default {
  notificationsSet: state => state.notificationsList.map(notificationId => state.notifications[notificationId]),
  notificationsRead: state => count(state, 'read'),
  notificationsUnread: state => count(state, 'unread'),
  notificationsArchived: state => count(state, 'archived'),
  showNotifications: state => (state.notificationsShow && state.notificationsShowStats),
  notificationsDisplayFilter: state => state.notificationsDisplayFilter
}
