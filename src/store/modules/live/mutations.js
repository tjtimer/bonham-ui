import * as mt from '../../mutation_types'

export default {
  [mt.SET_ACTIVE](state, index) {
    state.currentActive = {
      ...state.currentActive,
      ...state.concerts[index],
      hasChanged: false
    }
    state.currentActiveIndex = index
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
    state.currentActiveIndex = null
  },
  [mt.SET_DETAIL_CHANGED](state, payload) {
    const [field, value] = payload
    state.currentActive = {
      ...state.currentActive,
      [field]: value,
      hasChanged: true
    }
  },
  [mt.UPDATE_ORIGINAL](state) {
    const index = parseInt(state.currentActiveIndex)
    const { date, venue, city, info, cancelled } = state.currentActive
    state.concerts = [
      ...state.concerts.slice(0, index),
      {...state.concerts[index], date, venue, city, info, cancelled},
      ...state.concerts.slice(index+1, state.concerts.length)
    ]
  }
}