import * as mt from "../../mutation_types";
import { warningReceiver } from "../../channels";
import ConcertDetail from "../../../components/concert/ConcertDetail";

export default {
  async setup(store, router) {
    router.addRoutes([
      {
        path: "/concert/:date-:venue",
        name: "concertDetail",
        component: ConcertDetail
      },
      {
        path: "/concert/add-concert/:id",
        name: "addConcert",
        component: ConcertDetail
      }
    ]);
    store.commit(mt.ON_SETUP);
  },
  async openDetails(store, concert) {
    await warningReceiver.put("opening concert details!");
    store.commit(mt.ON_OPEN, concert);
  },
  async closeDetails(store, discard = false) {
    console.log("close: ");
    if (discard === false && store.state.active.hasChanged === true) {
      await store.dispatch("discardOrSave");
    }
    store.commit(mt.ON_CLOSE);
  },
  async discardOrSave(store) {
    console.log("discard or save: store -> ", store);
    // await store.dispatch('saveObject')
  },
  async saveObject(store) {
    store.commit(mt.ON_OBJECT_UPDATE);
  },
  async deleteObject(store, id) {
    store.commit(mt.ON_OBJECT_DELETE, id);
  },
  async updateField(store, [field, value]) {
    console.log(`update ${field}: ${value}`);
    store.commit(mt.ON_FIELD_UPDATE, [field, value]);
  }
};
