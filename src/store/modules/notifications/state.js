export default function () {
  return {
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