<template lang="pug">
  div(class="calendar calendar-menu")
    h3 {{ calendar.viewType }} - View
    div(class="calendar switch" :class="calendar.viewType")
      button(class="previous material-icons" @click="previous") chevron_left
      span(v-if="calendar.viewType === 'day'" class="current current-day") {{ calendar.currentDay }}.
      span(class="current current-month") {{ calendar.monthNames[calendar.currentMonth] }}.
      span(class="current current-Year") {{ calendar.currentYear }}
      button(class="next material-icons" @click="next") chevron_right
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'calendar-menu',
  computed: {
    ...mapState(['calendar'])
  },
  methods: {
    ...mapActions({
      previous: 'calendar/previous',
      next: 'calendar/next'
    })
  }
}
</script>
<style lang="scss" scoped>
.calendar-menu {
  h3,
  .current-month {
    text-transform: capitalize;
  }
}
</style>
