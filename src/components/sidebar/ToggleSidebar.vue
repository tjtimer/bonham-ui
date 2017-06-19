<template lang="pug">
div(class="sidebar-toggle")
  button(@click="$emit('toggleSidebar', side)" class="material-icons") {{ sym }}
</template>
<script>
  export default {
    name: 'toggle-sidebar',
    props: ['side', 'sym']
  }
</script>
