<template lang="pug">
  nav(id="nav-bar")
    ul(class="nav-bar row")
      li(v-for='route in $router.options.routes')
        router-link(:to="route.path" tag="div")
          a {{ route.name }}
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style lang="scss" scoped>
  nav {
    flex: 1 1 auto;
    line-height: 2em;
    display: flex;
    justify-content: inherit;
    ul {
      flex: 0 1 auto;
      display: flex;
      flex-flow: row;
      justify-content: flex-start;
    }
    li {
      flex: auto;
      display: flex;
    }
    div {
      flex: 1 1 auto;
      display: flex;
    }
    div.router-link-exact-active {
      border-bottom: inset 1px #42b526;
    }
    a {
      display: block;
      padding: 0 1em;
      &:hover {
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
      }
    }
  }
</style>
