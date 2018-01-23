<template lang="pug">
  #app
    h1 {{ msg }}
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome To The Jungle!"
    };
  }
};
</script>

<style lang="scss">
#app {
  color: #56b983;
}
</style>

