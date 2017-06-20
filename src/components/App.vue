<template lang="pug">
div(id="app" :class="appLayout")
  app-header
  router-view
  sidebar(v-if="showSidebarLeft" side="left")
    nav-bar(slot="sidebar-c-1")
  sidebar(v-if="showSidebarRight" side="right")
    notifications(slot="sidebar-c-1")
    div(slot="sidebar-c-2")
      p Hello My Dear
  app-footer(:time="now")
  registration(v-if="showRegistration")
  notification(
    class="notifications-active"
    v-if="activeNotificationsShow"
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
import Notifications from '@/components/notification/Notifications'
import Registration from '@/components/account/Registration'

export default {
  name: 'app',
  components: {
    AppHeader,
    NavBar,
    Sidebar,
    AppFooter,
    Notification,
    Notifications,
    Registration
  },
  computed: {
    ...mapState({
      appLayout: state => state.app.size[0] > state.app.size[1] ? 'landscape' : 'portrait',
      showSidebarLeft: state => state.sidebar.showSidebarLeft,
      showSidebarRight: state => state.sidebar.showSidebarRight,
      showRegistration: state => state.account.showRegistration,
      now: state => state.app.now,
      activeNotificationsShow: state => state.notification.notificationsActiveList.length > 0,
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
@import '../assets/colors';
body {
  background-color: $dark;
  overflow-x: hidden;
  font: 500 24px/32px 'Teko', Arial, sans-serif;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2 {
  font: {
    family: 'Work Sans', sans-serif;
    weight: 700;
    size: 24px;
    variant: small-caps;
  }
}
a, button, [type="submit"] {
  display: block;
  background: none;
  color: $secondary;
  flex: 1 1 auto;
  text-transform: capitalize;
  text-decoration: none;
  font-variant: small-caps;
  cursor: pointer;
  &:hover {
    color: lighten($secondary, 20%);
    box-shadow: 0 2px 3px rgba($dark, 0.3);
  }
}
.material-icons {
  text-transform: none;
  font-variant: normal;
}
#app {
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  text-align: center;
  color: $primary;
  border: none;
  .close {
    background: $dark;
    border-radius: 2px;
    border: 2px solid transparent;
    &:hover {
      background: lighten($dark, 5%);
    }
  }
}


img {
  display: block;
  max-width: 100%;
  height: auto;
  filter: invert(75%) contrast(1.5);
}
.notifications-active {
  position: fixed;
  top: 13%;
  right: 6%;
  display: flex;
  flex-flow: column;
  width: 88%;
}
</style>
