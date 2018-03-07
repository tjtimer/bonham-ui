<template lang="pug">
  #active-notes
    ul.column
      li(v-for="id in notification.idsActive")
        .note
          h1 {{ notification.messages[id] }}
</template>
