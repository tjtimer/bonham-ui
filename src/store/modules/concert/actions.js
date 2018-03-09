import * as mt from '../../mutation_types'
import {
  warningReceiver
} from '../../channels'

export default {
  async setup(store) {
    store.commit(mt.ON_SETUP)
  },
  async openDetails(store, concert) {
    await warningReceiver.put("opening concert details!")
    store.commit(mt.ON_OPEN, concert)
  },
  async closeDetails(store, discard = false) {
    console.log("close: ");
    if (discard === false && store.state.active.hasChanged === true) {
      await store.dispatch('discardOrSave')
    }
    store.commit(mt.ON_CLOSE)
  },
  async discardOrSave(store) {
    console.log("discard or save: store -> ", store)
    // await store.dispatch('saveObject')
  },
  async saveObject(store) {
    store.commit(mt.ON_OBJECT_UPDATE)
  },
  async deleteObject(store, id) {
    store.commit(mt.ON_OBJECT_DELETE, id)
  },
  async updateDate(store, value) {
    console.log("save date: ", value);
    store.commit(mt.ON_FIELD_UPDATE, ['date', value])
  },
  async updateVenue(store, value) {
    console.log("save venue: ", value);
    store.commit(mt.ON_FIELD_UPDATE, ['venue', value])
  },
  async updateInfo(store, value) {
    console.log("save short info: ", value);
    store.commit(mt.ON_FIELD_UPDATE, ['info', value])
  },
  async updateStatus(store, value) {
    console.log("save status: ", value);
    store.commit(mt.ON_FIELD_UPDATE, ['status', value])
  }
}