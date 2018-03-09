export default function () {
  return {
    isReady: false,
    channels: [],
    notes: {},
    activeNoteIds: [],
    timeoutActive: {
      'default': 25000
    },
    showType: 'ALL'
  }
}