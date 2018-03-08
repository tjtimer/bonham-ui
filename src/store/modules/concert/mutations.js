import * as mt from '../../mutation_types'

export default {
  [mt.ON_OPEN](state, id) {
    state.active = {
      ...state.concerts[id]
    }
  },
  [mt.ON_CLOSE](state) {
    state.active = null
  },
  [mt.ON_FIELD_UPDATE](state, [field, value]) {
    const hasChanged = state.concerts[state.active.id][field] ===  value
    state.active = {
      ...state.active,
      [field]: value,
      hasChanged: hasChanged
    }
  },
  [mt.ON_OBJECT_CREATE](state) {
    state.active = {
      id: Date.now(),
      date: new Date(),
      venue: '',
      city: '',
      info: '',
      status: 'tba'
    }
  },
  [mt.ON_OBJECT_UPDATE](state) {
    state.concerts[state.active.id] = {...state.active}
    state.saved = false
  },
  [mt.ON_OBJECT_DELETE](state, id) {
    delete state.concerts[id]
    state.concerts = {...state.concerts}
    state.deletedIds = [...state.deletedIds, id]
    state.saved = false
  },
  [mt.ON_SEND](state) {
    state.isSaving = true
  },
  [mt.ON_RECEIVE](state, status) {
    state.isSaving = false
    state.saved = status
  }
}