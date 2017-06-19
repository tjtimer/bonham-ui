<template lang="pug">
div(id="welcome")
  h1 {{ message }}
  div(v-for="n in 50" class="place")
    h2 {{ n }}
</template>

<script>
export default {
  name: 'welcome',
  data() {
    return {
      message: 'Welcome to tjtimer.com'
    }
  }
}
</script>
<style lang="scss" scoped>
.place {
  display: block;
  width: 100%;
  height: 120px;
  border: 2px solid #F5F;
}
</style>
