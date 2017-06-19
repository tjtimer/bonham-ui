import * as types from '../../mutation_types'
export default {
  next(store) {
    console.log('calendar next clicked: ', store)
    if (store.state.viewType === 'month') store.commit(types.CALENDAR_SET_CURRENT_YEAR, store.state.currentYear + 1)
    else if (store.state.viewType === 'month') store.commit(types.CALENDAR_SET_CURRENT_MONTH, store.state.currentMonth + 1)
    else store.commit(types.CALENDAR_SET_CURRENT_DAY, store.state.currentDay + 1)
  },
  previous(store) {
    console.log('calendar previous clicked: ', store)
    if (store.state.viewType === 'month') store.commit(types.CALENDAR_SET_CURRENT_YEAR, store.state.currentYear - 1)
    else if (store.state.viewType === 'month') store.commit(types.CALENDAR_SET_CURRENT_MONTH, store.state.currentMonth - 1)
    else store.commit(types.CALENDAR_SET_CURRENT_DAY, store.state.currentDay - 1)
  }
}
