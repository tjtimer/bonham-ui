import * as types from '../../mutation_types'

export default {
  [types.APP_READY](state) {
    state.size = [window.innerWidth, window.innerHeight]
    state.isReady = true
  },
  [types.APP_RESIZE_START](state) {
    state.isResizing = true
  },
  [types.APP_SET_SIZE](state) {
    state.size = [window.innerWidth, window.innerHeight]
  },
  [types.APP_RESIZE_STOP](state) {
    state.isResizing = false
  },
  [types.APP_SCROLL_START](state) {
    state.isScrolling = true
  },
  [types.APP_SET_SCROLL_DIRECTION](state, direction) {
    state.scrollDirection = direction
  },
  [types.APP_SET_SCROLL_Y](state) {
    state.scrollY = window.scrollY
  },
  [types.APP_SCROLL_STOP](state) {
    state.isScrolling = false
  },
  [types.APP_ADD_HEARTBEAT](state, payload) {
    state.heartbeats = {
      ...state.heartbeats,
      [payload.heartbeatId]: payload.heartbeat
    }
  },
  [types.APP_REMOVE_HEARTBEAT](state, heartbeatId) {
    const newBeats = state.heartbeats
    delete newBeats[heartbeatId]
    state.heartbeats = newBeats
  },
  [types.APP_UPDATE_HEATMAP](state, position) {
    state.heatMap[position] = state.heatMap[position] === undefined ? 1 : state.heatMap[position]++
  }
}
