import * as mt from '../../mutation_types'

export default {
  [mt.SET_ACTIVE](state, index) {
    if (index === null) {
      state.currentActive = {
        ...state.currentActive,
        id: Date.now(),
        date: new Date().toDateString(),
        hasChanged: false
      }
      state.currentActiveIndex = state.concerts.length
    } else {
      state.currentActive = {
        ...state.currentActive,
        ...state.concerts[index],
        hasChanged: false
      }
      state.currentActiveIndex = index
    }
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
    const { id, date, venue, city, info, cancelled } = state.currentActive
    state.concerts = [
      ...state.concerts.slice(0, index),
      {...state.concerts[index], id, date, venue, city, info, cancelled},
      ...state.concerts.slice(index+1, state.concerts.length)
    ]
  }
}