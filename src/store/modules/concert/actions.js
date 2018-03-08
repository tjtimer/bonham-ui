import * as mt from '../../mutation_types'

export default {
  async setup(store, index) {
    store.commit(mt.ON_OPEN, index)
  },
  async closeDetails(store) {
    console.log("close: ");
    if (store.state.active.hasChanged === true) {
      await store.dispatch('discardOrSave')
    }
    store.commit(mt.ON_CLOSE)
  },
  async discardOrSave(store) {
    console.log("discard or save: store -> ", store)
    await store.dispatch('saveObject')
  },
  async saveObject(store) {
    store.commit(mt.ON_OBJECT_UPDATE)
  },
  async delete(store, id) {
    store.commit(mt.ON_OBJECT_DELETE, id)
  },
  async saveDate(store, e) {
    console.log("save date: ", e);
    store.commit(mt.ON_FIELD_UPDATE, ['date', e])
  },
  async saveVenue(store, e) {
    console.log("save venue: ", e);
    store.commit(mt.ON_FIELD_UPDATE, ['venue', e])
  },
  async saveShortInfo(store, e) {
    console.log("save short info: ", e);
    store.commit(mt.ON_FIELD_UPDATE, ['info', e])
  },
  async saveCancelled(store, e) {
    console.log("save cancelled: ", e);
    store.commit(mt.ON_FIELD_UPDATE, ['cancelled', e])
  }
}