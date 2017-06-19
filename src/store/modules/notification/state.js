export default function() {
  return {
    notifications: {
      1: {
        id: 1,
        title: 'Blah',
        body: 'Foo',
        status: 'unread',
        messageType: 'error'
      },
      2: {
        id: 2,
        title: 'Foo 2',
        body: 'Blah 2',
        status: 'unread',
        messageType: 'warning'
      },
      3: {
        id: 3,
        title: 'Foo Baz 3',
        body: 'Blah 1',
        status: 'read',
        messageType: 'info'
      }
    },
    notificationsList: [1, 2, 3],
    notificationsActiveList: [],
    notificationsShow: true,
    notificationsShowStats: true,
    notificationsDisplayFilter: 'ALL',
    notificationActive: null
  }
}
