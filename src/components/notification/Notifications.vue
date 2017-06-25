<template lang="pug">
  div(class="notifications")
    ul
      li(v-for="(note, index) in notificationsSet")
        notification(:note="note" :key="note.id")
</template>
<script>
export default {
  name: 'notifications',
  props: ['notificationsSet']
}
</script>
<style lang="scss">
</style>
