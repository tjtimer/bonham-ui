import { put, putAsync, timeout, go, CLOSED } from 'js-csp'
import channels from './channels'
import * as types from '../../mutation_types'
import * as fn from '../../../utils/functions'

const watcherTimeout = parseFloat(1000 / 60)

function watchMouseMove(store) {
  go(function* () {
    let value = yield channels.mouseMoveChannel
    while (value !== CLOSED) {
      store.dispatch('updateHeatMap', value)
      yield timeout(watcherTimeout)
      value = yield channels.mouseMoveChannel
    }
  })
}

function broadcastMouseMove(event) {
  let position
  go(function* () {
    position = [event.clientX, event.clientY]
    yield put(channels.mouseMoveChannel, position)
  })
}

function handleResize(store) {
  go(function* () {
    let initial, actual
    while (true) {
      [initial, actual] = [store.state.size, fn.getElementSize(window)]
      if (!store.state.isResizing && (initial[0] !== actual[0] || initial[1] !== actual[1])) {
        store.dispatch('resizeStart')
      } else if (store.state.isResizing) {
        actual = fn.getElementSize(window)
        if (initial[0] === actual[0] && initial[1] === actual[1]) {
          store.dispatch('resizeStop')
        }
        store.dispatch('setSize')
      }
      yield timeout(50)
    }
  })
}

function handleScroll(store) {
  let initialOffset
  go(function* () {
    initialOffset = store.state.scrollY
    while (true) {
      if (!store.state.isScrolling) {
        if (initialOffset !== window.scrollY) {
          store.dispatch('scrollStart')
        }
      } else {
        if (initialOffset === window.scrollY) {
          store.dispatch('scrollStop')
        } else if (store.state.scrollDirection !== 'up' && initialOffset > window.scrollY) {
          store.dispatch('scrollUp', window.scrollY)
        } else if (store.state.scrollDirection !== 'down' && initialOffset < window.scrollY) {
          store.dispatch('scrollDown', window.scrollY)
        }
      }
      initialOffset = window.scrollY
      yield timeout(250) // wait 500ms before resuming the while loop
    }
  })
}

export default {
  initApp(store) {
    console.log('starting app', store)
    document.addEventListener('mousemove', broadcastMouseMove)
    handleResize(store)
    handleScroll(store)
    watchMouseMove(store)
    store.dispatch('appReady')
  },
  appReady(store) {
    store.commit(types.APP_READY)
  },
  addHeartbeat(store, payload) {
    payload['heartbeatId'] = Date.now()
    store.commit(types.APP_ADD_HEARTBEAT, payload)
  },
  removeHeartbeat(store, heartbeatId) {
    store.commit(types.APP_REMOVE_HEARTBEAT, heartbeatId)
  },
  changeLocale(store, locale) {
    store.commit(types.APP_CHANGE_LOCALE, locale)
  },
  resizeStart(store) {
    store.commit(types.APP_RESIZE_START)
    putAsync(
      channels.resizeChannel,
      'start'
    )
  },
  setSize(store) {
    store.commit(types.APP_SET_SIZE)
  },
  resizeStop(store) {
    store.commit(types.APP_RESIZE_STOP)
    putAsync(
      channels.resizeChannel,
      'stop'
    )
    store.commit(types.APP_SET_SIZE, fn.getElementSize(window))
    console.log(store.state)
  },
  scrollStart(store) {
    console.log('scroll start')
    store.commit(types.APP_SCROLL_START)
    putAsync(
      channels.scrollChannel,
      'start'
    )
  },
  scrollStop(store) {
    console.log('scroll stop')
    putAsync(
      channels.scrollChannel,
      'stop'
    )
    store.commit(types.APP_SCROLL_STOP)
    store.commit(types.APP_SET_SCROLL_Y, window.scrollY)
    setTimeout(() => store.commit(types.APP_SET_SCROLL_DIRECTION, ''), 1500)
  },
  scrollUp(store, offset) {
    console.log('scroll up')
    store.commit(types.APP_SET_SCROLL_DIRECTION, 'up')
    putAsync(
      channels.scrollChannel,
      'up'
    )
    store.commit(types.APP_SET_SCROLL_Y, offset)
  },
  scrollDown(store, offset) {
    console.log('scroll down')
    store.commit(types.APP_SET_SCROLL_DIRECTION, 'down')
    putAsync(
      channels.scrollChannel,
      'down'
    )
    store.commit(types.APP_SET_SCROLL_Y, offset)
  },
  updateHeatMap(store, value) {
    if (store.state.heatMap[value] === undefined) {
      store.state.heatMap[value] = 1
    } else {
      store.state.heatMap[value] += 1
    }
  }
}
