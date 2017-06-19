import * as types from '../../mutation_types'

export default {
  [types.MODAL_OPEN](state) {
    state.showModal = true
  },
  [types.MODAL_CLOSE](state) {
    state.showModal = false
  }
}
