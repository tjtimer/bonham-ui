import * as mt from "../../mutation_types";
import {
  debugReceiver,
  warningReceiver
} from "../../channels";

export default {
  async setup(store, router) {
    store.commit(mt.ON_SETUP);
  },
  async openDetails(store, concert) {
    await debugReceiver.put("opening concert details!");
    store.commit(mt.ON_OPEN, concert);
  },
  async closeDetails(store, discard = false) {
    await debugReceiver.put("closing concert details!");
    if (discard === false && store.state.active.hasChanged === true) {
      await store.dispatch("discardOrSave");
    }
    store.commit(mt.ON_CLOSE);
  },
  async discardOrSave(store) {
    await warningReceiver.put("discard or save?");
    // await store.dispatch('saveObject')
  },
  async saveObject(store) {
    store.commit(mt.ON_OBJECT_UPDATE);
  },
  async addConcert(store) {
    store.commit(mt.ON_OBJECT_CREATE);
  },
  async deleteConcert(store, id) {
    store.commit(mt.ON_OBJECT_DELETE, id);
  },
  async updateField(store, [field, value]) {
    console.log(`update ${field}: ${value}`);
    store.commit(mt.ON_FIELD_UPDATE, [field, value]);
  }
};