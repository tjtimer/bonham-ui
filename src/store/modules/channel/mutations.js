import * as mt from '../../mutation_types'

export default {
    [mt.ON_SETUP](state) {
        state = {
            ...state,
            isRunning: true
        }
    },
    [mt.ON_CREATE_OBJECT](state, chan){
        state.channels = {
            ...state.channels,
            [chan.id]: chan
        }
        state.idsActive = [...state.idsActive, chan.id]
    },
    [mt.ON_SHUTDOWN](state) {
        state = {
            ...state,
            isRunning: false
        }
    }
}