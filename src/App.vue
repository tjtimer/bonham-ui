<template lang="pug">
  #app(:class="ready ? `ready ${layout}` : 'loading'")
    app-header
    router-view
</template>

<script>
import AppHeader from "./components/AppHeader";
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
      console.log(e, e.target);
      if (window.innerWidth <= 400) {
        console.log("now window.innerWidth is smaller than 400px");
      }
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize); // TODO: debounce
    setTimeout(() => {
      this.layout =
        window.innerWidth >= window.innerHeight ? "landscape" : "portrait";
      this.ready = true;
    }, 2500);
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

