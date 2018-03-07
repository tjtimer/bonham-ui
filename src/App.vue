<template lang="pug">
  #app(:class="ready ? `ready ${layout}` : 'loading'")
    app-header
    router-view
</template>

<script>
import AppHeader from "./components/layout/AppHeader";
export default {
  name: "app",
  components: {
    AppHeader
  },
  data() {
    return {
      layout: "",
      ready: false
    };
  },
  created() {
    this.$store.dispatch("notifications/setup");
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

