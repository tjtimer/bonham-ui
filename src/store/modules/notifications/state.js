export default function () {
  return {
    namespaced: true,
    messages: {
      'notifications': {},
      'error': {},
      'warning': {},
      'debug': {},
      'log': {}
    },
    active: [],
    receiving: true,
    hidden: 'ALL',
    closing: false,
    closed: false
  }
}