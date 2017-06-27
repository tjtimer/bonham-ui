import * as types from '../../mutation_types'

export default {
  next(store, key) {
    console.log('calendar next clicked: ', store)
    if (key === 'year') store.commit(types.CALENDAR_SET_CURRENT_YEAR, store.getters.currentYear + 1)
    else if (key === 'month') store.commit(types.CALENDAR_SET_CURRENT_MONTH, (store.getters.currentMonth + 1) % 12)
    else store.commit(types.CALENDAR_SET_CURRENT_DAY, (store.getters.currentDay) % store.getters.currentDaysInMonth + 1)
  },
  previous(store, key) {
    console.log('calendar previous clicked: ', store)
    if (key === 'year') store.commit(types.CALENDAR_SET_CURRENT_YEAR, store.getters.currentYear - 1)
    else if (key === 'month') store.commit(types.CALENDAR_SET_CURRENT_MONTH, (store.getters.currentMonth + 11) % 12) // adding one less than the modulo is as substract one
    else store.commit(types.CALENDAR_SET_CURRENT_DAY, (((store.getters.currentDay - 1) + (store.getters.currentDaysInMonth - 1)) % store.getters.currentDaysInMonth) + 1)
  }
}
