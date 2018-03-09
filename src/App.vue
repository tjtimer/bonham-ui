<template lang="pug">
  #app(:class="app.isReady ? `ready ${layout}` : 'loading'")
    app-header
    router-view
    active-notes
</template>

<script>
import { mapState, mapGetters } from "vuex";
import AppHeader from "./components/layout/AppHeader";
import ActiveNotes from "./components/notifications/ActiveNotes";
export default {
  name: "app",
  components: {
    AppHeader,
    ActiveNotes
  },
  computed: {
    ...mapState(["app"]),
    ...mapGetters({ layout: "app/layout" })
  },
  beforeMount() {
    this.$store.dispatch("app/setup");
  }
};
</script>

<style lang="scss">
@import "./assets/styles/_base";
#app {
  transition: all 2s;
  &.loading {
    background-color: #fff;
    color: #fff;
  }
  &.ready {
    background-color: $primary-bg;
    color: $primary-color;
  }
}
</style>

