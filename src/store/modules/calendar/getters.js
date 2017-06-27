export default {
  currentYear: state => new Date(state.currentDate).getFullYear(),
  currentMonth: state => new Date(state.currentDate).getMonth(),
  currentDay: state => new Date(state.currentDate).getDate(),
  currentWeekDay: state => new Date(state.currentDate).getDay(),
  currentDaysInMonth: state => new Date(new Date(state.currentDate).setDate(0)).getDate()
}
