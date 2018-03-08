import * as mt from '../../mutation_types'
import {
  debugReceiver,
  infoReceiver,
  warningReceiver,
  errorReceiver
} from '../../channels'
import { wait } from '../../utils'


export default {
  async setup(store) {
    console.log("initializing async insanity! :D", store)
    const receiver = await Promise.all([
      debugReceiver.setup(store, this.handleMessage),
      infoReceiver.setup(store, this.handleMessage),
      warningReceiver.setup(store, this.handleMessage),
      errorReceiver.setup(store, this.handleMessage)
    ])
    console.log("showing receiver: ", receiver)
    store.commit(mt.ON_SETUP, receiver)
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