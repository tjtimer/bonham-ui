<template lang="pug">
div(id="app" :class="app.size[0] > app.size[1] ? 'landscape' : 'portrait'")
  app-header
  router-view(class="main")
  sidebar(v-if="sidebar.showSidebarLeft" side="left")
    nav-bar(slot="sidebar-c-1")
  sidebar(v-if="sidebar.showSidebarRight" side="right")
    notifications-history(slot="sidebar-c-1")
    div(slot="sidebar-c-2")
      p Hello My Dear
  app-footer(:time="app.now")
  registration(v-if="account.showRegistration")
  notification(
    class="notifications-active"
    v-if="notification.notificationsActiveList.length > 0"
    v-for="(note, index) in activeNotificationsSet"
    :note="note" :key="note.id"
    @notificationSetStatus="notificationSetStatus"
    @notificationDelete="notificationDelete"
    )
</template>

<script>
import { mapState, mapActions } from 'vuex'

import AppHeader from '@/components/header/AppHeader'
import NavBar from '@/components/header/NavBar'
import Sidebar from '@/components/sidebar/Sidebar'
import AppFooter from '@/components/footer/AppFooter'
import Notification from '@/components/notification/Notification'
import NotificationsHistory from '@/components/notification/NotificationsHistory'
import Registration from '@/components/account/Registration'

export default {
  name: 'app',
  components: {
    AppHeader,
    NavBar,
    Sidebar,
    AppFooter,
    Notification,
    NotificationsHistory,
    Registration
  },
  computed: {
    ...mapState(['app', 'account', 'notification', 'sidebar']),
    ...mapState({
      activeNotificationsSet: state => state.notification.notificationsActiveList.map(noteId => state.notification.notifications[noteId])
    })
  },
  methods: {
    ...mapActions({
      notificationSetStatus: 'notification/notificationSetStatus',
      notificationDelete: 'notification/notificationDelete'
    })
  },
  // hooks
  created() {
    this.$store.dispatch('app/initApp')
  }
}
</script>

<style lang="scss">
@import '../assets/base';

#app {
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  text-align: center;
  color: $primary;
  border: none;
  .notifications-active {
    position: fixed;
    top: 13%;
    right: 6%;
    display: flex;
    flex-flow: column;
    padding: 3px 6px;
  }
}
</style>
