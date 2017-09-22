<template lang="pug">
  div(class="calendar-menu")
    h3 {{ calendar.viewType }} - View
    div(class="switch-date")
      p(class="weekday-name") {{ calendar.dayNames[currentWeekDay] }}
      switch-modulo(
        class="switch-day"
        next="chevron_left"
        previous="chevron_right"
        direction="vertical"
        :showInput="calendar.showInput"
        :inputMin="1"
        :inputMax="currentDaysInMonth"
        :inputPlaceholder="currentDay"
        @moduloNext="next('day')"
        @moduloPrevious="previous('day')"
        @inputChange="dayChange"
        )
        span(slot="current" @click="toggleInput") {{ currentDay }}.
      switch-modulo(
        class="switch-month"
        next="chevron_left"
        previous="chevron_right"
        direction="vertical"
        :showInput="calendar.showInput"
        :inputMin="1"
        :inputMax="12"
        :inputPlaceholder="currentMonth"
        @moduloNext="next('month')"
        @moduloPrevious="previous('month')"
        @inputChange="monthChange"
        )
        span(slot="current" @click="toggleInput") {{ currentMonth + 1 }}.
      switch-modulo(
        class="switch-year"
        next="chevron_left"
        previous="chevron_right"
        direction="vertical"
        :showInput="calendar.showInput"
        :inputMin="1900"
        :inputMax="2500"
        :inputPlaceholder="currentYear"
        @moduloNext="next('year')"
        @moduloPrevious="previous('year')"
        @inputChange="yearChange"
        )
        span(slot="current" @click="toggleInput") {{ currentYear }}
      button(class="toggle-input button--primary" v-if="calendar.showInput" @click="toggleInput") done
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
      currentWeekDay: 'calendar/currentWeekDay',
      currentDaysInMonth: 'calendar/currentDaysInMonth'
    })
  },
  methods: {
    dayChange(value) {
      this.$store.dispatch('calendar/setDate', {key: 'day', value: value})
    },
    monthChange(value) {
      value = value - 1
      this.$store.dispatch('calendar/setDate', {key: 'month', value: value})
    },
    yearChange(value) {
      this.$store.dispatch('calendar/setDate', {key: 'year', value: value})
    },
    ...mapActions({
      previous: 'calendar/previous',
      next: 'calendar/next',
      setDate: 'calendar/setDate',
      toggleInput: 'calendar/toggleInput'
    })
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/helpers/_mixins';
@import '../../assets/components/_buttons';
.calendar-menu {
  @include flexparent(column, center, space-between);
  .switch-date {
    @include flexparent(nowrap, center, space-between);
    flex: 1 1 100%;
  }
  .previous {}
  .weekday-name {
    text-transform: capitalize;
  }
  button {
    @extend %button;
  }
  .toggle-input {}
}
</style>
