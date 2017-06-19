<template lang="pug">
footer(class="footer")
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
