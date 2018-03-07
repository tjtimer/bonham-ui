import * as mt from '../../mutation_types'
import BaseChannel from './channel';

export default {
    async setup(store) {
        store.commit(mt.ON_SETUP)
    },
    async createChannel(store, topic) {
        const chan = new BaseChannel(store, topic).start()
        store.commit(mt.ON_CREATE_OBJECT, chan)
        return chan
    },
    async publish(store, msg) {
        await store.state.channels[msg.topic].publish(msg)
    },
    async shutdown(store) {
        store.commit(mt.ON_SHUTDOWN)
    }
}