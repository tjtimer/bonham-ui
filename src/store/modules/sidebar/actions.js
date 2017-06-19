import { chan, putAsync, operations, go, CLOSED } from 'js-csp'
import channels from '../../channels'
import * as types from '../../mutation_types'

const sidebarListener = chan()
const sidebarMixer = operations.mix(sidebarListener)
operations.mix.add(sidebarMixer, channels.sidebar)
operations.mix.add(sidebarMixer, channels.app)

function watchSidebars(store) {
  go(function* () {
    let action
    while (action !== CLOSED) {
      action = yield sidebarListener
      console.log('sidebar reveived ', action, store)
      store.commit(action.type, action)
    }
  })
}

export default {
  initSidebars(store) {
    if (store.state.isReady) { return }
    watchSidebars(store)
    store.commit(types.SIDEBARS_READY)
  },
  toggleSidebar(store, side) {
    putAsync(
      channels.sidebar,
      {
        payload: side,
        type: types.SIDEBAR_TOGGLE
      }
    )
  }
}
