<template lang="pug">
div(id="app" :class="appLayout")
  app-header(:appLayout="appLayout")
  router-view
  sidebar(v-show="showSidebarLeft" side="left")
    nav-bar(slot="sidebar-c-1")
  sidebar(v-show="showSidebarRight" side="right")
    notifications(slot="sidebar-c-1")
    div(slot="sidebar-c-2")
      p Hello My Dear
  app-footer(:time="now")
  transition(name="fade")
    registration(v-if="showRegistration")
  transition(name="fade")
    div(v-if="activeNotificationsShow" class="notifications-active")
      notification(
        v-for="(note, index) in activeNotificationsSet"
        :note="note" :key="note.id"
        @notificationSetStatus="notificationSetStatus"
        @notificationDelete="notificationDelete"
        )
  div(class="debug")
    p scrollY: {{ $store.state.app.scrollY }}
    p scrollDirection: {{ $store.state.app.scrollDirection }}
    p size: {{ $store.state.app.size }}
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
@import '/assets/colors';
* {
  transition: all 0.1s ease;
}
body {
  background-color: $dark;
  overflow-x: hidden;
}
#app {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  font: 500 24px/32px 'Teko', Arial, sans-serif;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
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
a, button, [type="submit"] {
  display: block;
  background: none;
  color: $secondary;
  flex: 1 1 auto;
  text-transform: capitalize;
  text-decoration: none;
  font-variant: small-caps;
  cursor: pointer;
  &.material-icons {
    text-transform: none;
    font-variant: normal;
  }
  &:hover {
    color: lighten($secondary, 20%);
    box-shadow: 0 2px 3px rgba($dark, 0.3);
  }
}
h1, h2 {
  font: {
    family: 'Work Sans', sans-serif;
    weight: 700;
    size: 24px;
    variant: small-caps;
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
.debug {
  position: fixed;
  top: 10%;
  left: 10%;
  display: none;
  width: auto;
  height: auto;
}
/* transitions */
.fade-enter-active, .fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter, .fade-leave-to {
  font-size: 0px;
  padding: 0px;
  background-color: #FFF;
  color: #FFF;
  opacity: 0;
  width: 0px;
  height: 0px;
}
</style>
