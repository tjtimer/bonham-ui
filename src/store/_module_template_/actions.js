import * as mt from '../../mutation_types'

export default {
    async setup(store) {
        store.commit(mt.ON_SETUP)
    },
    async shutdown(store) {
        store.commit(mt.ON_SHUTDOWN)
    }
}