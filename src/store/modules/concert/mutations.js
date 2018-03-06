import * as mt from '../../mutation_types'

export default {
  [mt.ON_OPEN](state, index) {
    if (index === null) {
      state.currentActive = {
        ...state.currentActive,
        date: new Date(),
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
  [mt.ON_CLOSE](state) {
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
  [mt.ON_UPDATE_FIELD](state, payload) {
    const [field, value] = payload
    state.currentActive = {
      ...state.currentActive,
      [field]: value,
      hasChanged: true
    }
  },
  [mt.ON_UPDATE_OBJECT](state) {
    const index = parseInt(state.currentActiveIndex)
    const {
      id,
      date,
      venue,
      city,
      info,
      cancelled
    } = state.currentActive
    state.concerts = [
      ...state.concerts.slice(0, index),
      { ...state.concerts[index],
        id,
        date,
        venue,
        city,
        info,
        cancelled
      },
      ...state.concerts.slice(index + 1, state.concerts.length)
    ]
  }
}