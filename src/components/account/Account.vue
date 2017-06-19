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

<style scoped>
#account {
  position: relative;
  flex: 1 1 auto;
  display: flex;
  align-items: stretch;
  justify-content: center;
  align-self: stretch;
}
button {
  display: block;
  font-size: 2em;
  flex: 1 1 auto;
}
button:hover {
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
