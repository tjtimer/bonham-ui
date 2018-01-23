<template lang="pug">
  header#app-header
    h1 App Header
    nav
      ul
        li(v-for="route, index in $router.options.routes" :key="index")
          router-link(:to="route.path") {{ index }}: {{ route.name }}
</template>
<script>
export default {
  name: "app-header"
};
</script>
<style lang="scss" scoped>
#app-header {
  display: flex;
  flex-flow: wrap;
}
</style>
