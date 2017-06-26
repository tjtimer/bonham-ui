<template lang="pug">
div(id="app-footer")
  p footer
  div(class="footer footer-copyrights")
    p copyrights {{ time }}
</template>
<script>
  export default {
    name: 'app-footer',
    props: ['time']
  }
</script>
<style lang="scss" scoped>
@import '../../assets/layout/_footer';
#app-footer {
  @extend %footer;
}
</style>
