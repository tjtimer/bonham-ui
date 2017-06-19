import { chan, putAsync, timeout, go, operations } from 'js-csp'
import channels from '../../channels'
import * as types from '../../mutation_types'
import * as fn from '../../../utils/functions'

const watcherTimeout = parseFloat(1000 / 60)

function watchResize(store) {
  let [initial, actual] = [store.state.size, [0, 0]]
  go(function* () {
    while (1) {
      initial = fn.getElementSize(window)
      yield timeout(watcherTimeout)
      actual = fn.getElementSize(window)
      if (initial[0] === actual[0] && initial[1] === actual[1]) {
        store.commit(types.APP_RESIZE_STOP)
        return store.commit(types.APP_SET_SIZE, fn.getElementSize(window))
      }
      store.commit(types.APP_SET_SIZE, fn.getElementSize(window))
    }
  })
}

function watchScroll(store) {
  let initialOffset = store.state.scrollY
  go(function* () {
    while (1) {
      initialOffset = window.scrollY
      yield timeout(watcherTimeout)
      if (initialOffset === window.scrollY) {
        store.commit(types.APP_SCROLL_STOP)
        return store.commit(types.APP_SET_SCROLL_Y, window.scrollY)
      } else if (store.state.scrollDirection !== 'up' && initialOffset > window.scrollY) {
        store.commit(types.APP_SET_SCROLL_DIRECTION, 'up')
        store.commit(types.APP_SET_SCROLL_Y, window.scrollY)
      } else if (store.state.scrollDirection !== 'down' && initialOffset < window.scrollY) {
        store.commit(types.APP_SET_SCROLL_DIRECTION, 'down')
        store.commit(types.APP_SET_SCROLL_Y, window.scrollY)
      }
    }
  })
}

const appListener = chan()
const appMixer = operations.mix(appListener)
operations.mix.add(appMixer, channels.app)

export default {
  initApp({ dispatch }) {
    console.log('starting app')
    window.addEventListener('scroll', () => dispatch('handleScroll'))
    window.addEventListener('resize', () => dispatch('handleResize'))
    dispatch('appReady')
  },
  appReady(store) {
    store.commit(types.APP_READY)
    putAsync(
      channels.notifications,
      {
        messageType: 'info',
        title: 'App Ready',
        body: 'You\'re App is now ready!'
      }
    )
  },
  handleScroll(store) {
    if (store.state.isScrolling === true) { return }
    store.commit(types.APP_SCROLL_START)
    watchScroll(store)
  },
  handleResize(store) {
    if (store.state.isResizing === true) { return }
    store.commit(types.APP_RESIZE_START)
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
    putAsync(
      channels.app,
      {
        type: types.APP_CHANGE_LOCALE,
        payload: locale
      }
    )
  }
}
