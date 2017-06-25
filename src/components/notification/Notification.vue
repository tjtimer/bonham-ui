<template lang="pug">
  div(class="notification" :class="note.messageType")
    div(class="header")
      h3 {{ note.title }}
    div(class="body")
      p {{ note.body }}
      p(class="created") created: {{ note.created }}
    div(class="menu")
      button(@click="notificationSetStatus({id: note.id, status: (note.status === 'read') ? 'unread' : 'read'})") mark as {{ note.status === 'read' ? 'unread' : 'read'}}
      button(v-if="note.status !== 'archived'" @click="notificationSetStatus({id: note.id, status: 'archived'})") add to archive
      button(@click="notificationDelete(note.id)") delete
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'notification',
  props: ['note'],
  methods: {
    ...mapActions({
      notificationSetStatus: 'notification/notificationSetStatus',
      notificationDelete: 'notification/notificationDelete'
    })
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/helpers/_placeholders';
@import '../../assets/components/_buttons';
  .notification {
    @extend %primary-color-combination;
    position: relative;
    display: flex;
    flex-flow: column;
    flex: 1 1 auto;
    padding: 2px 6px;
    border-radius: 12px;
    margin-bottom: 3px;
    &.error {
      @extend %error-color-combination;
    }
    &.warning {
      @extend %error-color-combination;
    }
    .body {
      font-size: 24px;
      .created {
        font-size: 12px;
      }
    }
    .menu {
      display: flex;
      flex-flow: nowrap;
      align-items: stretch;
      justify-content: space-around;
      padding: 0 3px 6px;
      .button {
        @extend %button;
        flex: 1 1 33.330%;
        font-size: 18px;
        line-height: 24px;
        margin: 2px;
        padding: 3px;
        background: $grey-dark;
        border-radius: 6px;
        &:hover {
          background: lighten($grey-dark, 5%);
        }
      }
    }
  }
</style>
