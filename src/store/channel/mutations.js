import * as mt from '../mutation_types'

export default {
    [mt.ON_SETUP](state) {
        state = {
            ...state,
            isRunning: true
        }
    },
    [mt.ON_SHUTDOWN](state) {
        state = {
            ...state,
            isRunning: false
        }
    }
}