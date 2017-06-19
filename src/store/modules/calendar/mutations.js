import * as types from '../../mutation_types'
export default {
  [types.CALENDAR_SET_CURRENT_YEAR](state, value) {
    state.currentYear = value
  },
  [types.CALENDAR_SET_CURRENT_MONTH](state, value) {
    state.currentMonth = value
  },
  [types.CALENDAR_SET_CURRENT_DAY](state, value) {
    state.currentDay = value
  }
}
