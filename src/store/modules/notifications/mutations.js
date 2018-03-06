import * as mt from '../../mutation_types'

export default {
  [mt.ON_OPEN](state, handler) {
    state = {
      ...state,
      ...handler
    }
  },
  [mt.ON_SUBSCRIBE](state, subscriber) {
    state = {
      ...state,
      [subscriber.handler]: [...state[subscriber.handler], subscriber.callback]
    }
  },

}