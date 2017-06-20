<template lang="pug">
  div(class="notifications-menu")
    input(type="button" value="notifications" @click="notificationsToggleAll")
    div(v-if="notificationsShowStats" class="notifications-count")
      ul(class="notifications-count-table")
        li
          button(
            @click="showNotifications('read')"
            )
            h4 Read
            p {{ notificationsRead }}
        li
          button(
            @click="showNotifications('unread')"
            )
            h4 Unread
            p {{ notificationsUnread }}
        li
          button(
            @click="showNotifications('archived')"
            )
            h4 Archived
            p {{ notificationsArchived }}
        li
          button(
            @click="showNotifications('ALL')"
            )
            h4 All
            p {{ notificationsRead +  notificationsUnread + notificationsArchived }}
    div(v-if="notificationsShowStats" class="notifications-toggle")
      button(
        @click="toggleNotifications"
        ) {{ show ? 'Hide' : 'Show' }} All
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'show-notifications',
  props: ['show'],
  computed: {
    ...mapState({
      notificationsShowStats: state => state.notification.notificationsShowStats
    }),
    ...mapGetters({
      notificationsRead: 'notification/notificationsRead',
      notificationsUnread: 'notification/notificationsUnread',
      notificationsArchived: 'notification/notificationsArchived'
    })
  },
  methods: {
    ...mapActions({
      showNotifications: 'notification/notificationsShow',
      toggleNotifications: 'notification/notificationsToggle',
      notificationsToggleAll: 'notification/notificationsToggleAll'
    })
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/colors';
.notifications-menu {
  display: flex;
  flex-flow: column;
  padding: 3px;
  h2, h4 {
    line-height: 1.5em;
    text-decoration: underline;
  }
  .notifications-count-table {
    display: flex;
    flex-flow: wrap;
    li {
      display: flex;
      flex-flow: column;
      flex: 1 1 33%;
      text-align: center;
      h4 {
        font-variant: small-caps;
        text-decoration: underline;
        background: rgba(0, 0, 0, 0.75);
        border-bottom: 1px solid black;
        box-shadow: 1px 2px 3px rgba($dark, 0.3);
      }
      button {
        display: block;
        background: rgba(0, 0, 0, 0.3);
        color: $secondary;
        width: 100%;
        padding: 6px;
        margin: 0 auto;
        font-size: 24px;
        line-height: 36px;
        &:hover {
          background: rgba(0, 0, 0, 0.5);
          color: lighten($secondary, 20%);
        }
      }
    }
  }
  .notifications-toggle button {
    display: block;
    width: 100%;
    padding: 6px;
    font-size: 24px;
    line-height: 36px;
  }
}
</style>
