<template lang="pug">
  div(class="registration-overlay")
    div(class="registration-wrapper")
      h4 {{ account.formActive }}
      button(@click="toggleAccount" class="material-icons close") close
      div(class="switch-wrapper")
        button(@click="switchForms('login')" :disabled="account.formActive === 'login'") Log In
        button(@click="switchForms('signup')" :disabled="account.formActive === 'signup'") Sign Up
      div(class="form-wrapper")
        form(class="registration-form" role="form" @submit.prevent="submitForm")
          fieldset(class="email")
            label Email:
            input(type="email" v-model="account.email" placeholder="email@example.com" autofocus autocomplete :class="account.isValidEmail ? 'valid' : 'invalid'")
          fieldset(class="password")
            label Password:
            input(type="password" v-model="account.password" :class="account.isValidPassword ? 'valid' : 'invalid'")
          transition(name="fade" mode="in-out" )
            fieldset(v-show="account.formActive !== 'login'" class="password")
              label Password again:
              input(type="password" v-model="account.password2" :class="account.isValidPassword2 ? 'valid' : 'invalid'")
          fieldset(class="submit")
            input(type="submit" value="OK" @submit.prevent="submitForm")
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
  background: rgba(0, 0, 0, 0.75);
}
.registration-wrapper {
  position: relative;
  display: flex;
  flex: 0 1 300px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: $secondary;
  padding: 1%;
  h4 {
    flex: 1 1 100%;
    align-self: stretch;
    text-transform: capitalize;
    text-align: left;
    color: $dark;
    line-height: 1.8em;
    font: {
      variant: small-caps;
      size: 1.5em;
    }
  }
  .close {
    position: absolute;
    top: 4px;
    right: 4px;
    display: block;
    width: auto;
    line-height: 1;
    &:hover {
      background: lighten($dark, 20%);
    }
  }
  .switch-wrapper {
    display: flex;
    flex: 1 1 100%;
    flex-flow: nowrap;
    align-self: stretch;
    align-items: stretch;
  }
  .form-wrapper {
    display: flex;
    flex: 1 1 100%;
    align-self: stretch;
    background: $secondary;
    border: none;
    box-shadow: inset 0 1px 3px rgba($dark, 0.5);
    padding: .5em;
    form {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: stretch;
    }
    fieldset {
      flex: 1 1 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      color: $dark;
      text-align: left;
      text-transform: capitalize;
      font-size: 18px;
      line-height: 30px;
      &.submit {
        margin-top: 6px;
      }
      &.password {
        position: relative;
        &::after {
          display: inline-block;
          position: absolute;
          content: "";
          top: -290%;
          left: -266.66667%;
          padding: 0;
          font-size: 0;
          background: rgba(0, 0, 0, 0);
          color: rgba($secondary, 0);
          transition-delay: 1.5s;
          transition: all 0.5s ease-in-out;
          z-index: 0;
        }
        &:hover::after {
          content: "Password must be at least 8 characters long. It must contain upper- and lowercase letters, digits and special characters.";
          top: -190%;
          left: -66.66667%;
          background: rgba($bright, 1);
          color: rgba($dark, 1);
          padding: 0.3em;
          z-index: 2;
          font-size: 1.4em;
          font-weight: 300;
        }
      }
    }
  }

  button, [type="submit"] {
    display: block;
    width: 100%;
    padding: .5em;
    text-align: center;
    background-color: #334;
    color: #ACF;
    border: 2px solid transparent;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .5);
    &:disabled {
      background-color: #223;
      color: #445;
      box-shadow: inset 0px -1px 1px rgba(0, 0, 0, 0.7);
    }
  }
  input {
    display: flex;
    flex: 1 1 100%;
    &.close {
      flex: 0 1 24px;
    }
    &.valid {
      border: 1px solid yellow,
    }
    &.submit {
      flex: 0 1 100%;
      margin: 0 auto;
      text-align: center;
    }
    &[type="email"],
    &[type="password"] {
      font-size: 20px;
      box-shadow: inset 0 -1px 1px rgba(0, 0, 0, .5);
      border: 1px solid red;
      padding: 4px;
      &::placeholder {
        text-transform: lowercase;
      }
    }
  }
}
</style>
