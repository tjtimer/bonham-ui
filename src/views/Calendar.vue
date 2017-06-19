<template lang="pug">
  div(class="calendar")
    div(class="header")
      calendar-menu(:view="calendar.viewType" :current="calendar.currentMonth")
    div(class="body")
      month-view(v-if="calendar.viewType === 'month'")
</template>
<script>
import { mapState } from 'vuex'
import CalendarMenu from '@/components/calendar/CalendarMenu'
import MonthView from '@/components/calendar/MonthView'
export default {
  name: 'calendar',
  components: {
    CalendarMenu,
    MonthView
  },
  computed: {
    ...mapState(['calendar'])
  }

}
</script>
