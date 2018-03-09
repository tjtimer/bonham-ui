import * as mt from '../../mutation_types'

export default {
  [mt.ON_SETUP](state, payload) {
    state = {
      ...state,
      ...payload
    }
  },
  [mt.ON_RECEIVE](state, [topic, message]) {
    state.messages[topic] = {
      ...state.messages[topic],
      [message.id]: message
    }
    state.activeMessages = {
      ...state.activeMessages,
      ...state.activeMessages[topic] = [...state.activeMessages[topic], message.id]
    }
  },
  [mt.ON_CLOSE](state, [topic, id]) {
    const list = state.activeMessages[topic]
    const index = list.indexOf(id)
    state.activeMessages[topic] = [
      ...list.slice(0, index),
      ...list.slice(index + 1, list.length)
    ]
  }
}