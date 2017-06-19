<template lang="pug">
  div(class="calendar month-view")
      p body
</template>
<script>
export default {
  name: 'month-view'
}
</script>
<style lang="scss" scoped>
.month-view {
  display: flex;
  flex-flow: column;
  align-items: stretch;
  justify-content: space-between;
  .header {
    border: 2px solid green;
  }
  .body {
    border: 2px solid red;
  }
}
</style>
