import * as mt from '../../mutation_types'

export default {
  [mt.SET_ACTIVE](state, item) {
    state.currentActive = item
  },
  [mt.SET_CLOSED](state) {
    state.currentActive = {
      id: null,
      date: "",
      venue: "",
      city: "",
      info: "",
      cancelled: false,
      hasChanged: false
    }
  },
  [mt.SET_DETAIL_CHANGED](state, payload) {
    const [field, value] = payload
    state.currentActive = {
      ...state.currentActive,
      [field]: value,
      hasChanged: true
    }
  },
  [mt.UPDATE_ORIGINAL](state, index) {
    const concertsUpdated = state.concerts
    concertsUpdated[index] = state.currentActive
    state.concerts = concertsUpdated
  }
}