export default {
  activeNotes: state => state.activeNoteIds.map((note) => {
    if (note.length === 2) return state.notes[note[0]][note[1]]
  })
}