import * as mt from '../../mutation_types'

export default {
    [mt.ON_SETUP](state) {
        state.isReady = true
    },
    [mt.ON_SHUTDOWN](state) {}
}