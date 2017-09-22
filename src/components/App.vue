<template lang="pug">
div(id="app" :class="`${appLayout} ${scrolling}`")
  app-header(
    class="app-header"
    :sidebarLeftVisible="showSidebarLeft"
    :sidebarRightVisible="showSidebarRight")
  router-view(class="app-main")
  sidebar(class="sidebar" v-if="showSidebarLeft" side="left")
  sidebar(class="sidebar" v-if="showSidebarRight" side="right")
    notifications-history(slot="sidebar-c-1")
  registration-overlay(v-if="account.showRegistration")
  notifications(v-if="activeNotificationsSet.length > 0"
  :notificationsSet="activeNotificationsSet")
  chat-room
  app-footer(class="app-footer" :time="app.now")
</template>

<script>
import { mapState } from 'vuex'

import AppHeader from '@/components/header/AppHeader'
import NavBar from '@/components/header/NavBar'
import Sidebar from '@/components/sidebar/Sidebar'
import AppFooter from '@/components/footer/AppFooter'
import Notifications from '@/components/notification/Notifications'
import NotificationsHistory from '@/components/notification/NotificationsHistory'
import RegistrationOverlay from '@/components/account/RegistrationOverlay'
import ChatRoom from '@/components/chat/ChatRoom'
export default {
  name: 'app',
  components: {
    'app-header': AppHeader,
    'nav-bar': NavBar,
    'sidebar': Sidebar,
    'app-footer': AppFooter,
    'notifications': Notifications,
    'notifications-history': NotificationsHistory,
    'registration-overlay': RegistrationOverlay,
    'chat-room': ChatRoom
  },
  data() {
    return {
      window
    }
  },
  computed: {
    ...mapState(['app', 'account', 'sidebar']),
    ...mapState({
      activeNotificationsSet: state => state.notification.notificationsActiveList.map(noteId => state.notification.notifications[noteId]),
      appLayout: state => state.app.size[0] > state.app.size[1] ? 'landscape' : 'portrait',
      scrolling: state => state.app.scrollY >= 100 ? 'scrolled' : '',
      showSidebarLeft: state => state.sidebar.showSidebarLeft || state.app.size[0] > 1369,
      showSidebarRight: state => state.sidebar.showSidebarRight || state.app.size[0] > 1369
    })
  },
  // hooks
  created() {
    this.$store.dispatch('app/initApp')
  }
}
</script>

<style lang="scss">
@import '../assets/helpers/_variables';
@import '../assets/layout/_app';

body {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
#app {
  @extend %app-grid;
  position: relative;
  text-align: left;
  background: $grey-dark;
  color: $blue-light;
  border: none;
}
</style>
