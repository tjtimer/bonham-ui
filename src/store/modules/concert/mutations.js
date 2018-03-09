import * as mt from "../../mutation_types";

export default {
  [mt.ON_SETUP](state) {
    state = {
      ...state
    };
  },
  [mt.ON_OPEN](state, concert) {
    state.active = {
      ...concert
    };
  },
  [mt.ON_CLOSE](state) {
    state.active = {};
  },
  [mt.ON_FIELD_UPDATE](state, [field, value]) {
    state.active = {
      ...state.active,
      [field]: value,
      hasChanged: true
    };
  },
  [mt.ON_OBJECT_CREATE](state) {
    state.active = {
      id: Date.now(),
      date: "",
      venue: "",
      city: "",
      info: "",
      status: "requested"
    };
  },
  [mt.ON_OBJECT_UPDATE](state) {
    state.concerts[state.active.id] = {
      ...state.active
    };
    state.saved = false;
  },
  [mt.ON_OBJECT_DELETE](state, id) {
    delete state.concerts[id];
    state.concerts = {
      ...state.concerts
    };
    state.saved = false;
  },
  [mt.ON_SEND](state) {
    state.isSaving = true;
  },
  [mt.ON_RECEIVE](state, status) {
    state.isSaving = false;
    state.saved = status;
  }
};