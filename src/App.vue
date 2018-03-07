<template lang="pug">
  #app(:class="ready ? `ready ${layout}` : 'loading'")
    app-header
    router-view
</template>

<script>
import AppHeader from "./components/layout/AppHeader";
import { mapActions } from "vuex";
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
  methods: {
    handleResize: function(e) {
      window.removeEventListener("resize", this.handleResize);
      if (window.innerWidth <= 400) {
        console.log("now window.innerWidth is smaller than 400px");
      }
      setTimeout(() => {
        window.addEventListener("resize", this.handleResize);
      }, 1500);
    },
    ...mapActions(["notifications"])
  },
  created() {
    console.log("They created an app!");
    // this.$store.dispatch("app/init");
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

