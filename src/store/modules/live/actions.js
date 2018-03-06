import * as mt from '../../mutation_types'

async function wait(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay)
  })
}
export default {
  async setCurrentActive(store, index) {
    store.commit(mt.SET_ACTIVE, index)

  },
  async closeDetails(store) {
    console.log("close: ");
    if (store.state.currentActive.hasChanged === true) {
      await store.dispatch('saveDetails')
    }
    store.commit(mt.SET_CLOSED)
  },
  async saveDetails(store) {
    store.commit(mt.UPDATE_ORIGINAL)
  },
  async saveDate(store, e) {
    console.log("save date: ", e);
    store.commit(mt.SET_DETAIL_CHANGED, ['date', e])
  },
  async saveVenue(store, e) {
    console.log("save venue: ", e);
    store.commit(mt.SET_DETAIL_CHANGED, ['venue', e])
  },
  async saveShortInfo(store, e) {
    console.log("save short info: ", e);
    store.commit(mt.SET_DETAIL_CHANGED, ['info', e])
  }
}