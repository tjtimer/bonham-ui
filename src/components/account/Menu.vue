<template lang="pug">
  div(class="account-menu")
    div(class="account-data")
      h2 {{ $store.state.account.email }}
    div(class="logout")
      button(@click="submitLogout") logout
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'accountMenu',
  methods: {
    ...mapActions({
      submitLogout: 'account/submitLogout'
    })
  }
}
</script>

<style lang="scss" scoped>
  .account-menu {
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    flex-flow: column;
    background-color: #0C0;
    color: #334;
    padding: 1em;
  }
</style>
