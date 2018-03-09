import * as mt from '../../mutation_types'
import {
  debugReceiver,
  infoReceiver,
  warningReceiver,
  errorReceiver
} from '../../channels'
import {
  wait
} from '../../utils'


export default {
  async setup(store) {
    console.log("initializing async insanity! :D", store)
    const channels = await Promise.all([
      debugReceiver.setup(store, 'handleMessage'),
      infoReceiver.setup(store, 'handleMessage'),
      warningReceiver.setup(store, 'handleMessage'),
      errorReceiver.setup(store, 'handleMessage')
    ])
    console.log("showing receiver: ", channels)
    store.commit(mt.ON_SETUP, channels)
  },
  async handleMessage(store, [topic, message]) {
    console.log("received message: ", message)
    store.commit(mt.ON_RECEIVE, message)
    await wait(store.state.timeoutActive[topic] || store.state.timeoutActive.default)
    console.log("closing active message: ", message)
    store.commit(mt.ON_CLOSE, [topic, message.id])
  },
  async shutdown(store) {
    store.state.channels.map(channel => channel.close)
    await Promise.all(store.state.channels.map(async channel => channel.done))
    console.log("shutdown success!", store.state)
  }
}