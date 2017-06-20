<template lang="pug">
  header(:class="header.classes")
    button(class="toggle-sidebar material-icons" @click="toggleSidebar('left')") menu
    div(class="logo")
      router-link(:to="this.$router.options.base")
        img(src="../../assets/neume-logo.png")
    div(class="navigation")
      nav-bar
    div(class="account")
      account
    button(class="toggle-sidebar material-icons" @click="toggleSidebar('right')") menu
</template>
<script>
import { mapState, mapActions } from 'vuex'
import navBar from './NavBar'
import account from '@/components/account/Account'

export default {
  name: 'app-header',
  components: {
    navBar,
    account
  },
  computed: {
    ...mapState(['app', 'header'])
  },
  methods: {
    ...mapActions({
      toggleSidebar: 'sidebar/toggleSidebar'
    })
  },
  created() {
    this.$store.dispatch('header/initHeader')
  },
  destroyed() {
    console.log('App gone down!')
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/colors';
header {
  position: sticky;
  top: -250px;
  left: 0;
  display: flex;
  flex-flow: wrap;
  align-items: stretch;
  justify-content: space-around;
  text-align: center;
  padding-bottom: 0.3em;
  box-shadow: 0 2px 3px rgba(black, 0.5);
  .logo {
    display: flex;
    flex: 1 3 15%;
    align-items: center;
  }
  .navigation {
    display: flex;
    flex: 1 11 55%;
    font-size: 1.4em;
    align-items: center;
  }
  .account {
    display: flex;
    flex: 1 3 15%;
    align-items: center;
    justify-content: center;
  }
  .toggle-sidebar {
    position: relative;
    display: block;
    flex: 0 1 60px;
    color: $secondary;
    font-size: 36px;
  }
  @media(max-width: 725px) {
    .logo {
      flex: 0 1 50%;
    }
    .navigation {
      order: 2;
      flex: 0 1 100%;
      justify-content: space-between;
    }
  }
  &.hidden {
    padding-top: 245px;
    visibility: hidden;
  }
  &.sticky {
    padding-top: 245px;
    background: rgba($secondary, 0.3);
    flex-flow: nowrap;
    font-size: 0.8em;
    a , button {
      color: $dark;
    }
    .logo {
      display: none;
    }
    .navigation {
      order: 0;
      flex: 1 1 60%;
    }
    .account {
      order: 0;
    }
    .toggle-sidebar {
      flex: 1 1 46px;
    }
  }
}
</style>
