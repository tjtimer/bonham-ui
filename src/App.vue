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
  methods: {
    handleResize: function(e) {
      window.removeEventListener("resize", this.handleResize);
      if (window.innerWidth <= 400) {
        console.log("now window.innerWidth is smaller than 400px");
      }
      setTimeout(() => {
        window.addEventListener("resize", this.handleResize);
      }, 1500);
    }
  },
  created() {
    this.$store.dispatch("app/init");
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

