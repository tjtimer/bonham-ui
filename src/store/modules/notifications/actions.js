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

function getIndex(list, item) {
  const what = list.map((elem, index) => {
    if (elem[0] === item.topic && elem[1] === item.id) return index
  })
  console.log("getIndex", what)
  return what[0]
}
export default {
  async setup(store) {
    const channels = await Promise.all([
      debugReceiver.setup(store, 'handleMessage'),
      infoReceiver.setup(store, 'handleMessage'),
      warningReceiver.setup(store, 'handleMessage'),
      errorReceiver.setup(store, 'handleMessage')
    ])
    store.commit(mt.ON_SETUP, channels)
  },
  async handleMessage(store, note) {
    store.commit(mt.ON_RECEIVE, note)
    store.dispatch('waitAndRemove', note)
  },
  async waitAndRemove(store, note) {
    await wait(store.state.timeoutActive[note.topic] || store.state.timeoutActive.default)
    store.commit(mt.ON_CLOSE, note)
  },
  async archiveNote(store, note) {
    store.commit(mt.ON_CLOSE, note)
    store.commit(mt.ON_OBJECT_UPDATE, [note.topic, note.id])
  },
  async deleteNote(store, note) {
    store.commit(mt.ON_CLOSE, note)
    store.commit(mt.ON_OBJECT_DELETE, [note.topic, note.id])
  },
  async shutdown(store) {
    await Promise.all(store.state.channels.map(async channel => await channel.done))
    console.log("shutdown success!", store.state)
  }
}