import * as mt from '../mutation_types'
import BaseChannel from './channel';

export default {
    async setup(store) {
        store.commit(mt.ON_SETUP)
    },
    async addChannel(store, topic) {
        const chan = new BaseChannel(store, topic)
    },
    async shutdown(store) {
        store.commit(mt.ON_SHUTDOWN)
    }
}