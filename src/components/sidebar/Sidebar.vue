<template lang="pug">
transition(name="fade" appear)
  div(class="sidebar" :class="(side === 'right') ? 'sidebar-right' : 'sidebar-left'")
    div(class="sidebar-headline")
      h2 Sidebar {{ side }}
      toggle-sidebar(:side="side" class="close" sym="close" @toggleSidebar="toggleSidebar")
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
import ToggleSidebar from './ToggleSidebar'
export default {
  name: 'sidebar',
  props: ['side'],
  components: {
    ToggleSidebar
  },
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
@import '../../assets/colors';
.sidebar {
  position: fixed;
  top: 0;
  display: block;
  min-width: 300px;
  max-width: 450px;
  width: 100%;
  overflow-y: auto;
  @media (min-width: 350px) and (max-width: 479px) {
    width: 75%;
  }
  @media (min-width: 480px) and (max-width: 655px) {
    width: 66%;
  }
  @media (min-width: 656px) and (max-width: 1199px) {
    width: 18%;
  }
  @media (min-width: 1200px) {
    width: 12.5%;
  }
  height: 100%;
  padding: 3px;
  background: rgba($dark, 0.9);
  color: $bright;
  &.sidebar-left {
    left: 0;
  }
  &.sidebar-right {
    right: 0;
  }
  .sidebar-headline {
    position: relative;
    display: flex;
    width: 100%;
    flex-flow: nowrap;
    h2 {
      flex: 1 9 90%;
    }
    .sidebar-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1 1 10%;
      &.close {
        position: relative;
        display: block;
        flex: 1 1 10%;
        button {
          transform: rotate(180deg);
        }
      }
      .material-icons {
        font-size: 36px;
      }
    }
  }
  .sidebar-content {
    display: flex;
    flex-flow: column;
    align-items: stretch;
    justify-content: stretch;
    flex: 1 1 100%;
    div {
      flex: 0 1 100%;
      display: block;
      padding: 3px 6px;
      text-align: center;
    }
  }
}
</style>
