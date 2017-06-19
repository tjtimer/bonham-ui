<template lang="pug">
  div(class="notification" :class="note.messageType")
    div(class="notification-header")
      h3 {{ note.title }} {{ note.id }}
    div(class="notification-body")
      p {{ note.body }}
        span(class="notification-created")  {{ note.created }}
    div(class="notification-menu")
      button(@click="$emit('notificationSetStatus', {id: note.id, status: (note.status === 'read') ? 'unread' : 'read'})") mark as {{ note.status === 'read' ? 'unread' : 'read'}}
      button(v-if="note.status !== 'archived'" @click="$emit('notificationSetStatus', {id: note.id, status: 'archived'})") add to archive
      button(@click="$emit('notificationDelete', note.id)") delete
</template>
<script>
  export default {
    name: 'notification',
    props: ['note']
  }
</script>
<style lang="scss" scoped>
@import '../../assets/colors';
  .notification {
    position: relative;
    display: flex;
    flex-flow: column;
    flex: 1 1 auto;
    padding: 2px 6px;
    background: $info;
    color: $dark;
    border-radius: 12px;
    h3 {
      padding: 0.5em;
    }
    &.error {
      background: $error;
      color: $bright;
    }
    &.warning {
      background: $warning;
      color: #014;
    }
    &.notification-body {
      font-size: 22px;
      line-height: 32px;
      .notification-created {
        font-size: 12px;
        line-height: 18px;
      }
    }
    .notification-menu {
      display: flex;
      flex-flow: nowrap;
      align-items: stretch;
      justify-content: space-around;
      padding: 0 3px 6px;
      button {
        display: block;
        flex: 1 1 33.330%;
        font-size: 18px;
        line-height: 24px;
        margin: 2px;
        padding: 3px;
        background: $dark;
        border-radius: 6px;
        &:hover {
          background: lighten($dark, 5%);
        }
      }
    }
  }
</style>
