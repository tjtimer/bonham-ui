import * as types from '../../mutation_types'
export default {
  [types.CALENDAR_SET_CURRENT_YEAR](state, value) {
    console.log(value)
    state.currentDate = new Date(state.currentDate).setFullYear(value)
    console.log(state.currentDate)
  },
  [types.CALENDAR_SET_CURRENT_MONTH](state, value) {
    state.currentDate = new Date(state.currentDate).setMonth(value)
  },
  [types.CALENDAR_SET_CURRENT_DAY](state, value) {
    state.currentDate = new Date(state.currentDate).setDate(value)
  }
}
