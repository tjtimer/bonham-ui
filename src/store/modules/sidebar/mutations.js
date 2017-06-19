import * as types from '../../mutation_types'
export default {
  [types.SIDEBARS_READY](state) {
    state.isReady = true
  },
  [types.SIDEBAR_TOGGLE](state, action) {
    console.log(action.payload, state)
    state.showSidebarLeft = (action.payload === 'left') ? !state.showSidebarLeft : false
    state.showSidebarRight = (action.payload === 'right') ? !state.showSidebarRight : false
  },
  [types.SIDEBARS_HIDE](state) {
    state.showSidebarLeft = false
    state.showSidebarRight = false
  }
}
