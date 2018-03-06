import * as mt from '../../mutation_types'

export default {
  [mt.ON_OPEN](state, index) {
    if (index === null) {
      state.active = {
        ...state.active,
        date: new Date(),
        hasChanged: false
      }
      state.activeIndex = state.concerts.length
    } else {
      state.active = {
        ...state.active,
        ...state.concerts[index],
        hasChanged: false
      }
      state.activeIndex = index
    }
  },
  [mt.ON_CLOSE](state) {
    state.active = {
      id: null,
      date: "",
      venue: "",
      city: "",
      info: "",
      cancelled: false,
      hasChanged: false
    }
    state.activeIndex = null
  },
  [mt.ON_UPDATE_FIELD](state, payload) {
    const [field, value] = payload
    state.active = {
      ...state.active,
      [field]: value,
      hasChanged: true
    }
  },
  [mt.ON_UPDATE_OBJECT](state) {
    const index = parseInt(state.activeIndex)
    const {
      id,
      date,
      venue,
      city,
      info,
      cancelled
    } = state.active
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