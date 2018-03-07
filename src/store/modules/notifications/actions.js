import * as mt from '../../mutation_types'
import BaseChannel from '../../channel/channel'

export default {
  async setup(store) {
    console.log("initializing async insanity! :D")
    store.commit(mt.ON_OPEN)
  },
  async handleMessage(store, message) {
    console.log("received message: ", message)
    store.commit(mt.ON_RECEIVE, message)
    await wait(500)
    console.log("closing active message: ", message)
    store.commit(mt.ON_CLOSE, message.id)
  },
  async shutdown(store) {
    store.state.channels.map(channel=>channel.close)
    await Promise.all(store.state.channels.map(async channel=>channel.done))
    console.log("shutdown success!", store.state)
  }
}