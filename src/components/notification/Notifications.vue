<template lang="pug">
  div(class="notifications notifications-wrapper")
    notifications-menu(
      :show="notification.notificationsShow"
      )
    notification(
      v-for="(note, index) in notificationsSet"
      v-if="notification.notificationsShow && (notification.notificationsDisplayFilter === note.status || notification.notificationsDisplayFilter === 'ALL')"
      :note="note" :key="note.id"
      @notificationSetStatus="notificationSetStatus"
      @notificationDelete="notificationDelete"
      )
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Notification from '@/components/notification/Notification'
import NotificationsMenu from '@/components/notification/NotificationsMenu'
export default {
  name: 'notifications',
  components: {
    Notification,
    NotificationsMenu
  },
  computed: {
    notificationsSet: state => state.notification.notificationsList.map(noteId => state.notification.notifications[noteId]),
    ...mapState(['notification'])
  },
  methods: {
    ...mapActions({
      notificationSetStatus: 'notification/notificationSetStatus',
      notificationDelete: 'notification/notificationDelete'
    })
  },
  created: function() {
    this.$store.dispatch('notification/initNotifications')
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/colors';
.notifications {
  flex: 1 1 100%;
  display: flex;
  flex-flow: column;
  &.notifications-wrapper {
    background: none;
    min-width: 250px;
  }
  .notifications-options,
  .notifications-display-options {
    position: relative;
    flex: 1 1 auto;
    display: flex;
    flex-flow: nowrap;
    justify-content: flex-end;
    align-items: stretch;
    background-color: $secondary;
    color: $dark;
    margin: 0 6px;
    padding: 2px 6px;
    line-height: 24px;
    font-size: 16px;
    label,
    select,
    option {
      flex: 0 1 auto;
      display: flex;
      padding: 4px;
    }
    label,
    select {
      margin-right: 6px;
      padding: 2px 4px;
    }
    option {
      font-size: 20px;
      line-height: 28px;
      padding: 2px 4px;
    }
  }
  .notifications-list {
    position: relative;
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    padding: 0 6px;
    .note {
      position: relative;
      margin-top: 8px;
    }
  }
}
</style>
