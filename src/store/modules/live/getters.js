export default {
  currentIndex: (state) => state.concertIds.indexOf(state.currentActive.id) || null
}