<template lang="pug">
  div(class="calendar-menu")
    h3 {{ calendar.viewType }} - View
    div(class="switch-date" :class="calendar.viewType")
      p  {{ calendar.dayNames[currentWeekDay] }}
      switch-modulo(
        v-if="calendar.viewType === 'day' || calendar.viewType === 'month'"
        class="switch-day"
        @moduloNext="next('day')"
        @moduloPrevious="previous('day')"
        next="chevron_left"
        previous="chevron_right"
        direction="vertical"
        )
        span(slot="current") {{ currentDay }}.
      switch-modulo(
        class="switch-month"
        @moduloNext="next('month')"
        @moduloPrevious="previous('month')"
        next="chevron_left"
        previous="chevron_right"
        direction="vertical"
        )
        span(slot="current") {{ calendar.monthNames[currentMonth] }}.
      switch-modulo(
        class="switch-year"
        @moduloNext="next('year')"
        @moduloPrevious="previous('year')"
        next="chevron_left"
        previous="chevron_right"
        direction="vertical"
        )
        span(slot="current") {{ currentYear }}
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import SwitchModulo from '@/components/utils/SwitchModulo'
export default {
  name: 'calendar-menu',
  components: {
    SwitchModulo
  },
  computed: {
    ...mapState(['calendar']),
    ...mapGetters({
      currentYear: 'calendar/currentYear',
      currentMonth: 'calendar/currentMonth',
      currentDay: 'calendar/currentDay',
      currentWeekDay: 'calendar/currentWeekDay'
    })
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
@import '../../assets/helpers/_mixins';
.calendar-menu {
  @include flexparent(column, stretch, center);
  .switch-date {
    @include flexparent(nowrap, stretch, center);
  }
  .previous {}
}
</style>
