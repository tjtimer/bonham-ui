<template lang="pug">
transition(name="fade" appear)
  div(class="sidebar" :class="(side === 'right') ? 'sidebar-right' : 'sidebar-left'")
    div(class="sidebar-headline")
      h2 Sidebar {{ side }}
      button(class="material-icons button--close" @click="toggleSidebar(side)") close
    div(class="sidebar-content")
      div(class="sidebar-c-1")
        slot(name="sidebar-c-1")
      div(class="sidebar-c-2")
        slot(name="sidebar-c-2")
      div(class="sidebar-c-3")
        slot(name="sidebar-c-3")
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'sidebar',
  props: ['side'],
  methods: {
    ...mapActions({
      toggleSidebar: 'sidebar/toggleSidebar'
    })
  },
  created: function() {
    this.$store.dispatch('sidebar/initSidebars')
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/layout/sidebars';
</style>
