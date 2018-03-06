import * as mt from '../../mutation_types'

async function wait(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay)
  })
}
export default {
  async setCurrentActive(store, index) {
    store.commit(mt.ON_OPEN, index)
  },
  async closeDetails(store) {
    console.log("close: ");
    if (store.state.currentActive.hasChanged === true) {
      await store.dispatch('saveDetails')
    }
    store.commit(mt.ON_CLOSE)
  },
  async saveDetails(store) {
    store.commit(mt.ON_UPDATE_OBJECT)
  },
  async saveDate(store, e) {
    console.log("save date: ", e);
    store.commit(mt.ON_UPDATE_FIELD, ['date', e])
  },
  async saveVenue(store, e) {
    console.log("save venue: ", e);
    store.commit(mt.ON_UPDATE_FIELD, ['venue', e])
  },
  async saveShortInfo(store, e) {
    console.log("save short info: ", e);
    store.commit(mt.ON_UPDATE_FIELD, ['info', e])
  },
  async saveCancelled(store, e) {
    console.log("save cancelled: ", e);
    store.commit(mt.ON_UPDATE_FIELD, ['cancelled', e])
  }
}