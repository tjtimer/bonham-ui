import * as mt from '../../mutation_types'

export default {
  [mt.ON_OPEN](state, handler) {
    state = {
      ...state,
      ...handler
    }
  },
  [mt.ON_RECEIVE](state, message) {
    state = {
      ...state,
      receiving: true
    }
  },
  [mt.ON_CLOSE](state, message) {
    const [id, msg] = message
    state = {
      ...state,
      ...state.messages[id] = [...state.messages[id], msg],
      receiving: false
    }
  },
  [mt.ON_SUBSCRIBE](state, subscriber) {
    state = {
      ...state,
      [subscriber.handler]: [...state[subscriber.handler], subscriber.callback]
    }
  },

}