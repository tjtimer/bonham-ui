<template lang="pug">
  div(id="account")
    transition(name="fade" mode="out-in")
      loading(v-if="account.isAuthenticating" animationType="random")
    button(v-if="!account.isAuthenticating" class="material-icons toggle-button account" @click="toggleAccount") account_circle
    account-menu(v-if="!account.isAuthenticating && account.showMenu")
</template>

<script>
import { mapActions, mapState } from 'vuex'
import loading from '../loader/loading-indicator'
import modal from '../modal/Modal'
import accountMenu from './Menu'
import registration from './Registration'
export default {
  name: 'account',
  components: {
    loading,
    accountMenu,
    modal,
    registration
  },
  computed: {
    ...mapState(['account'])
  },
  methods: {
    ...mapActions({
      toggleAccount: 'account/toggleAccount'
    })
  },
  created: function() {
    this.$store.dispatch('account/initAccount')
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/helpers/_mixins';
@import '../../assets/components/_buttons';
#account {
  position: relative;
  @include size(100%);
  display: flex;
  align-items: stretch;
  justify-content: center;
  button {
    @extend %button;
    @include size(100%);
    display: block;
    font-size: 2em;
    flex: 1 1 auto;
  }
}

</style>
