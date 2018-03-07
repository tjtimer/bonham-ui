import * as mt from '../../mutation_types'

export default {
  [mt.ON_OPEN](state, handler) {
    state = {
      ...state,
      ...handler,
      receiving: true
    }
  },
  [mt.ON_RECEIVE](state, message) {
    state = {
      ...state,
      ...state.messages[message.type] = { ...state.messages[message.type],
        [message.id]: message
      },
      ...state.active = [...state.active, message.id]
    }
  },
  [mt.ON_CLOSE](state, message) {
    const idIndex = state.active.indexOf(message.id)
    const len = state.active.length
    state.active = [
      ...state.active.slice(0, idIndex),
      ...state.active.slice(idIndex + 1, len)
    ]
  },
  [mt.ON_SUBSCRIBE](state, subscriber) {
    state = {
      ...state,
      [subscriber.handler]: [...state[subscriber.handler], subscriber.callback]
    }
  },

}