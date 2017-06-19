export default function() {
  return {
    started: new Date(Date.now()),
    isReady: false,
    locale: 'en_US',
    now: new Date(Date.now()).toLocaleString(),
    size: [0, 0],
    isResizing: false,
    scrollY: 0,
    isScrolling: false,
    scrollDirection: ''
  }
}
