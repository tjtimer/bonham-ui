<template lang="pug">
  div(id="registration-overlay")
    div(class="registration-wrapper")
      h2(class="form-active") {{ account.formActive }}
      button(@click="toggleAccount" class="material-icons button--close") close
      div(class="switch-wrapper")
        button(
          class="switch button--primary"
          @click="switchForms('login')"
          :disabled="account.formActive === 'login'") Log In
        button(
          class="switch button--primary"
          @click="switchForms('signup')"
          :disabled="account.formActive === 'signup'") Sign Up
      registration
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Registration from './Registration.vue'
export default {
  name: 'registration-overlay',
  components: {
    Registration
  },
  computed: {
    ...mapState(['account'])
  },
  methods: {
    ...mapActions({
      switchForms: 'account/switchForms',
      toggleAccount: 'account/toggleAccount'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/helpers/_placeholders';
@import '../../assets/helpers/_variables';
@import '../../assets/components/_buttons';
#registration-overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(black, 0.7);
  .registration-wrapper {
    @extend %secondary-color-combination;
    position: relative;
    display: flex;
    flex: 1 1 30rem;
    flex-flow: column;
    justify-content: center;
    align-items: stretch;
    padding: 0.5em;
    .form-active {
      flex: 1 1 100%;
      align-self: stretch;
      text-transform: capitalize;
      text-align: left;
      font: {
        family: Helvetica, sans-serif;
        variant: small-caps;
        size: 1.5em;
      }
    }
    .switch-wrapper,
    .reset-submit-wrapper {
      display: flex;
      flex: 0 1 100%;
      flex-flow: nowrap;
    }
    button {
      @extend %button;
      &.switch {
        padding: 0.5rem;
      }
    }
  }
}
</style>
