import * as types from '../../mutation_types'

export default {
  initSidebars(store) {
    if (store.state.isReady) { return }
    store.commit(types.SIDEBARS_READY)
  },
  toggleSidebar(store, side) {
    console.log('toggle sidebar ', side)
    store.commit(types.SIDEBAR_TOGGLE, side)
  }
}
