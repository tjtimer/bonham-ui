import * as types from '../../mutation_types'
export default {
  [types.SIDEBARS_READY](state) {
    state.isReady = true
  },
  [types.SIDEBAR_TOGGLE](state, side) {
    state.showSidebarLeft = (side === 'left') ? !state.showSidebarLeft : false
    state.showSidebarRight = (side === 'right') ? !state.showSidebarRight : false
  },
  [types.SIDEBARS_HIDE](state) {
    state.showSidebarLeft = false
    state.showSidebarRight = false
  }
}
