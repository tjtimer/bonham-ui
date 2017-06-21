<template lang="pug">
  div(class="registration-overlay")
    div(class="registration-wrapper")
      h2(class="form-active") {{ account.formActive }}
      button(@click="toggleAccount" class="material-icons close") close
      div(class="switch-wrapper")
        button(class="switch" @click="switchForms('login')" :disabled="account.formActive === 'login'") Log In
        button(class="switch" @click="switchForms('signup')" :disabled="account.formActive === 'signup'") Sign Up
      form(class="registration-form" role="form" @submit.prevent="submitForm")
        fieldset(class="email")
          label Email:
          input(type="email" v-model="account.email" placeholder="email@example.com" autofocus autocomplete :class="account.isValidEmail ? 'valid' : 'invalid'")
        fieldset(class="password")
          label Password:
          input(type="password" v-model="account.password" :class="account.isValidPassword ? 'valid' : 'invalid'")
        fieldset(v-if="account.formActive !== 'login'" class="password")
          label Password again:
          input(type="password" v-model="account.password2" :class="account.isValidPassword2 ? 'valid' : 'invalid'")
        div(class="reset-submit-wrapper")
          button(class="reset-submit" type="reset") reset
          button(class="reset-submit" type="submit" @submit.prevent="submitForm") ok
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'registration',
  computed: {
    ...mapState(['account'])
  },
  methods: {
    ...mapActions({
      switchForms: 'account/switchForms',
      submitForm: 'account/submitForm',
      toggleAccount: 'account/toggleAccount'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/colors';
.registration-overlay {
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
}
.registration-wrapper {
  position: relative;
  display: flex;
  flex: 0 1 300px;
  flex-flow: column;
  justify-content: center;
  align-items: stretch;
  background: $secondary;
  color: $dark;
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
  .switch,
  .reset-submit {
    background: $dark;
    padding: 0.5em;
    &:disabled {
      background: darken($dark, 10%);
      color: lighten($dark, 20%);
    }
  }
  .close {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 1.2em;
    height: 1.2em;
    text-transform: none;
    font-variant: normal;
  }
  .registration-form {
    display: flex;
    flex: 1 1 100%;
    flex-flow: column;
    justify-content: center;
    align-items: stretch;
    box-shadow: inset 0 1px 3px rgba($dark, 0.5);
    padding: .5em;
  }
  fieldset {
    flex: 0 1 100%;
    border: none;
    color: $dark;
    text-align: left;
    margin-bottom: 3px;
    input {
      border: 1px solid $error;
      padding: 2px;
      &.valid {
        border: 1px solid $primary,
      }
    }
  }
  .password {
    position: relative;
    &::after {
      display: inline-block;
      position: absolute;
      content: "";
      top: -290%;
      left: 50%;
      padding: 0;
      font-size: 0;
      background: rgba(0, 0, 0, 0);
      color: rgba($secondary, 0);
      transition: all 0.3s ease-in-out;
      z-index: 0;
    }
    &:hover::after {
      content: "Password must be at least 8 characters long. It must contain upper- and lowercase letters, digits and special characters.";
      top: 110%;
      left: calc(-100%/3);
      right: calc(-100%/3);
      background: rgba($bright, 1);
      color: rgba($dark, 1);
      padding: 0.3em;
      z-index: 2;
      font-size: 1.4em;
      font-weight: 300;
      transition-delay: 1s;
    }
  }
}
</style>
