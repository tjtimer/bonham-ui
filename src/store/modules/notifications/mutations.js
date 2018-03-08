import * as mt from '../../mutation_types'

export default {
  [mt.ON_SETUP](state, payload) {
    state = {...state, ...paload}
  },
  [mt.ON_RECEIVE](state, message) {
    state.messages[message.topic] = { ...state.messages[message.topic],
        [message.id]: message
      },
    state.idsActive = [...state.idsActive, message.id]
  },
  [mt.ON_CLOSE](state, id) {
    const idIndex = state.idsActive.indexOf(id)
    const len = state.idsActive.length
    state.idsActive = [
      ...state.idsActive.slice(0, idIndex),
      ...state.idsActive.slice(idIndex + 1, len)
    ]
  }
}