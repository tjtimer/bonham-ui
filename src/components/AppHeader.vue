<template lang="pug">
  header#app-header
    h1 App Header
    nav(v-if="showNav")
      ul.row
        li(v-for="route, index in $router.options.routes" :key="index")
          router-link.view-link(:to="route.path") {{ index }}: {{ route.name }}
    button.toggle-nav(@click="toggleNav") open nav
</template>
<script>
export default {
  name: "app-header",
  data() {
    return {
      showNav: false
    };
  },
  methods: {
    toggleNav: function() {
      this.showNav = !this.showNav;
    }
  }
};
</script>
<style lang="scss" scoped>
#app-header {
  nav {
    display: block;
    width: 100%;
    max-width: 400px;
    .row {
      align-items: flex-start;
      li {
        flex: 1 auto;
      }
      .view-link {
        display: block;
        width: 100%;
        font-size: 1.3rem;
        line-height: 1.6rem;
        padding: 0.4rem;
      }
    }
  }
}
</style>
