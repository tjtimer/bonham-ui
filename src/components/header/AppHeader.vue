<template lang="pug">
  div(class="header" :class="header.classes")
    button(class="toggle-sidebar toggle-left material-icons" @click="toggleSidebar('left')") menu
    div(class="logo")
      router-link(:to="this.$router.options.base")
        img(src="../../../static/img/neume-logo.png")
    div(class="navigation")
      nav-bar
    div(class="account")
      account
    button(class="toggle-sidebar toggle-right material-icons" @click="toggleSidebar('right')") menu
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
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/helpers/_mixins';
@import '../../assets/helpers/_placeholders';
@import '../../assets/layout/_header';
@import '../../assets/components/buttons';
.header {
  @extend %header-grid;
  text-align: center;
  box-shadow: 0 2px 3px rgba(black, 0.5);
  .logo {
    grid-area: logo;
    a,
    img {
      display: block;
      width: auto;
      height: 100%;
    }
  }
  .navigation {
    grid-area: navigation;
  }
  .account {
    grid-area: account;
  }
  button {
    @extend %button;
    &.toggle-left {
      grid-area: toggle-left;
    }
    &.toggle-right {
      grid-area: toggle-right;
    }
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
}
</style>
