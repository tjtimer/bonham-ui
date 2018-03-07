<template lang="pug">
  #active-notes
    ul.column
      li(v-for="id in notification.active")
        .note
          h1 notification.messages
</template>
