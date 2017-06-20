import * as types from '../../mutation_types'
export default {
  [types.HEADER_HIDE](state) {
    state.isHidden = true
  },
  [types.HEADER_SHOW](state) {
    state.isHidden = false
  },
  [types.HEADER_SET_CLASS](state, classes) {
    state.classes = classes
  }
}
