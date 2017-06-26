<template lang="pug">
  nav(id="nav-bar")
    ul(class="nav-bar-wrapper")
      li(v-for='route in $router.options.routes' class="nav-bar-item")
        router-link(class="link link-navigation" :to="route.path") {{ route.name }}
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style lang="scss" scoped>
@import '../../assets/components/_links';
@import '../../assets/helpers/_variables';
#nav-bar {
  .nav-bar-wrapper {
    flex: 1 1 100%;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: stretch;
  }
  .nav-bar-item {
    flex: 0 1 auto;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    .link {
      @extend %link;
      padding: 0.5rem;
      border-bottom: 1px solid transparent;
      &.router-link-exact-active {
        padding: 0.5rem;
        border-bottom: 1px solid $blue-light;
      }
    }
  }
}
</style>
