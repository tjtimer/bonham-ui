<template lang="pug">
  div(class="calendar calendar-menu")
    h3 {{ view }} - View
    div(class="calendar switch" :class="view")
      button(class="previous material-icons" @click="previous") chevron_left
      span(class="viewing" :class="view") {{ current }}
      button(class="next material-icons" @click="next") chevron_right
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'calendar-menu',
  props: ['view', 'current'],
  methods: {
    ...mapActions({
      previous: 'calendar/previous',
      next: 'calendar/next'
    })
  }
}
</script>
