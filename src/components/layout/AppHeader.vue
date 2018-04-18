<template lang="pug">
  header#app-header
    h1 App Header
    nav
      button.toggle-nav(@click="toggleNav") 
        x-square-icon(v-if="showNav")
        menu-icon(v-else)
      ul.row(v-if="showNav")
        li(v-for="route, index in $router.options.routes" :key="index")
          router-link.view-link(:to="route.path") {{ index }}: {{ route.name }}
</template>
<script>
import { XSquare, Menu } from "vue-feather-icon";
export default {
  name: "app-header",
  components: {
    "x-square-icon": XSquare,
    "menu-icon": Menu
  },
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
  display: flex;
  width: 100%;
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
