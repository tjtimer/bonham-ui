import * as mt from '../../mutation_types'

export default {
  [mt.ON_SETUP](state, channels) {
    state = {
      ...state,
      ...state.channels = [...channels],
      ...state.isReady = true
    }
  },
  [mt.ON_RECEIVE](state, note) {
    state.notes[note.topic] = {
      ...state.notes[note.topic],
      [note.id]: {
        ...note,
        archived: false
      }
    }
    state.activeNoteIds = [
      ...state.activeNoteIds, [note.topic, note.id]
    ]
  },
  [mt.ON_CLOSE](state, note) {
    const index = state.activeNoteIds.findIndex(elem => elem[0] === note.topic && elem[1] === note.id)
    state.activeNoteIds = [
      ...state.activeNoteIds.slice(0, index),
      ...state.activeNoteIds.slice(index + 1, state.activeNoteIds.length)
    ]
  },
  [mt.ON_OBJECT_UPDATE](state, [topic, id]) {
    state.notes[topic][id] = { ...state.notes[topic][id],
      archived: true
    }
  },
  [mt.ON_OBJECT_DELETE](state, [topic, id]) {
    delete state.notes[topic][id]
    state.notes[topic] = {
      ...state.notes[topic]
    }
  }
}