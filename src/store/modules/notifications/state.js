export default function () {
  return {
    namespaced: true,
    notificationHandler: {},
    errorHandler: {},
    warningHandler: {},
    debugHandler: {},
    logHandler: {},
    messages: {
      'notifications': [],
      'error': [],
      'warning': [],
      'debug': [],
      'log': []
    },
    active: [],
    receiving: true,
    hidden: 'ALL',
    closing: false,
    closed: false,
    defaultMessage: {
      id: null,
      sender: '',
      read: false,
      dateTimeReceived: null,
      archived: false,
      reminderCallbacks: []
    }
  }
}