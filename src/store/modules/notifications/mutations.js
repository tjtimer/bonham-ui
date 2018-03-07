import * as mt from '../../mutation_types'

export default {
  [mt.ON_OPEN](state, channel) {
    state = {
      ...state,
      channel
    }
  },
  [mt.ON_RECEIVE](state, message) {
    state = {
      ...state,
      ...state.messages[message.type] = { ...state.messages[message.type],
        [message.id]: message
      },
      ...state.idsActive = [...state.idsActive, message.id]
    }
  },
  [mt.ON_CLOSE](state, message) {
    const idIndex = state.idsActive.indexOf(message.id)
    const len = state.idsActive.length
    state.idsActive = [
      ...state.idsActive.slice(0, idIndex),
      ...state.idsActive.slice(idIndex + 1, len)
    ]
  },
  [mt.ON_SUBSCRIBE](state, subscriber) {
    state = {
      ...state,
      [subscriber.handler]: [...state[subscriber.handler], subscriber.callback]
    }
  },

}