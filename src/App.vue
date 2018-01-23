<template lang="pug">
  #app(:class="ready ? `ready ${layout}` : 'loading'")
    app-header(v-if="ready")
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
  created() {
    this.layout =
      window.innerWidth >= window.innerHeight ? "landscape" : "portrait";
    setTimeout(() => {
      this.ready = true;
    }, 2000);
  }
};
</script>

<style lang="scss">
body {
  padding: 0;
}
#app {
  background: #fff;
  color: #56b983;
  transition: all 2s;
  &.ready {
    background: #135;
  }
}
</style>

