import * as types from '../../mutation_types'

export default {
  showModal({ commit }) {
    commit(types.MODAL_OPEN)
  },
  closeModal({ commit }) {
    commit(types.MODAL_CLOSE)
  }
}
