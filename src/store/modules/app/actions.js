import { put, timeout, go } from 'js-csp'
import channels from './channels'
import * as types from '../../mutation_types'
import * as fn from '../../../utils/functions'

const watcherTimeout = parseFloat(1000 / 60)

function watchResize(store) {
  go(function* () {
    let [initial, actual] = [store.state.size, [0, 0]]
    store.commit(types.APP_RESIZE_START)
    yield put(
      channels.resizeChannel,
      {
        topic: 'resize',
        action: 'start'
      }
    )
    while (store.state.isResizing) {
      initial = fn.getElementSize(window)
      yield timeout(watcherTimeout)
      actual = fn.getElementSize(window)
      if (initial[0] === actual[0] && initial[1] === actual[1]) {
        store.commit(types.APP_RESIZE_STOP)
        yield put(
          channels.resizeChannel,
          {
            topic: 'resize',
            action: 'stop'
          }
        )
        return store.commit(types.APP_SET_SIZE, fn.getElementSize(window))
      }
      store.commit(types.APP_SET_SIZE, fn.getElementSize(window))
    }
  })
}

function watchScroll(store) {
  let initialOffset
  go(function* () {
    initialOffset = store.state.scrollY
    while (true) {
      if (!store.state.isScrolling) {
        if (initialOffset !== window.scrollY) {
          console.log('scroll start')
          store.commit(types.APP_SCROLL_START)
          yield put(
            channels.scrollChannel,
            'start'
          )
        }
      } else {
        if (initialOffset === window.scrollY) {
          console.log('scroll stop')
          yield put(
            channels.scrollChannel,
            'stop'
          )
          store.commit(types.APP_SET_SCROLL_Y, window.scrollY)
          store.commit(types.APP_SCROLL_STOP)
        } else if (store.state.scrollDirection !== 'up' && initialOffset > window.scrollY) {
          console.log('scroll up')
          store.commit(types.APP_SET_SCROLL_DIRECTION, 'up')
          yield put(
            channels.scrollChannel,
            'up'
          )
          initialOffset = window.scrollY
          store.commit(types.APP_SET_SCROLL_Y, initialOffset)
        } else if (store.state.scrollDirection !== 'down' && initialOffset < window.scrollY) {
          console.log('scroll down')
          store.commit(types.APP_SET_SCROLL_DIRECTION, 'down')
          yield put(
            channels.scrollChannel,
            'down'
          )
          initialOffset = window.scrollY
          store.commit(types.APP_SET_SCROLL_Y, initialOffset)
        }
      }
      initialOffset = window.scrollY
      yield timeout(500)
    }
  })
}

export default {
  initApp: store => {
    console.log('starting app', this)
    window.addEventListener('resize', () => store.dispatch('handleResize'))
    window.addEventListener('scroll', watchScroll(store), 'once')
    store.dispatch('appReady')
  },
  appReady(store) {
    store.commit(types.APP_READY)
  },
  handleScroll(store) {
    watchScroll(store)
  },
  handleResize(store) {
    if (store.state.isResizing === true) { return }
    watchResize(store)
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
  }
}
