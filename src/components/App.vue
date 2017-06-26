<template lang="pug">
div(id="app" :class="`${appLayout} ${scrolling}`")
  app-header(class="app-header")
  router-view(class="app-main")
  sidebar(class="sidebar" v-if="sidebar.showSidebarLeft" side="left")
  sidebar(class="sidebar" v-if="sidebar.showSidebarRight" side="right")
    notifications-history(slot="sidebar-c-1")
  registration-overlay(v-if="account.showRegistration")
  notifications(v-if="activeNotificationsSet.length > 0" :notificationsSet="activeNotificationsSet")
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

export default {
  name: 'app',
  components: {
    AppHeader,
    NavBar,
    Sidebar,
    AppFooter,
    Notifications,
    NotificationsHistory,
    RegistrationOverlay
  },
  computed: {
    ...mapState(['app', 'account', 'sidebar']),
    ...mapState({
      activeNotificationsSet: state => state.notification.notificationsActiveList.map(noteId => state.notification.notifications[noteId]),
      appLayout: state => state.app.size[0] > state.app.size[1] ? 'landscape' : 'portrait',
      scrolling: state => state.app.scrollY >= 100 ? 'scrolled' : ''
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
