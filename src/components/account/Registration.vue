<template lang="pug">
  form(id="registration-form" role="form" @submit.prevent="")
    fieldset(class="email")
      label Email:
      input(
        type="email"
        name="email"
        v-model="email"
        placeholder="email@example.com"
        :class="account.isValidEmail ? 'valid' : 'invalid'"
        autofocus autocomplete)
    fieldset(class="password")
      label Password:
      input(
        type="password"
        name="password"
        v-model="password"
        :class="account.isValidPassword ? 'valid' : 'invalid'")
    fieldset(v-if="account.formActive !== 'login'" class="password")
      label Password again:
      input(
        type="password"
        name="password2"
        v-model="password2"
        :class="account.isValidPassword2 ? 'valid' : 'invalid'")
    div(class="reset-submit-wrapper")
      button(
        class="reset-submit button--primary"
        type="reset") reset
      button(
        class="reset-submit button--primary"
        type="submit"
        @click="submitForm({email, password, password2})"
        submit.prevent) ok
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'registration',
  data: function() {
    return {
      email: '',
      password: '',
      password2: ''
    }
  },
  computed: {
    ...mapState(['account'])
  },
  methods: {
    ...mapActions({
      submitForm: 'account/submitForm',
      updateCredentials: 'account/updateCredentials'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/helpers/_variables';
@import '../../assets/components/_buttons';
@import '../../assets/layout/forms';
#registration-form {
  @extend %form;
  padding: .5rem;
  button {
    @extend %button;
    width: 50%;
  }
  .invalid {
    border: 1px solid $red-light;
  }
  .valid {
    border: 1px solid $yellow-light,
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
      background: rgba(black, 0);
      color: rgba(white, 0);
      transition: all 0.3s ease-in-out;
      z-index: 0;
    }
    &:hover::after {
      content: "Password must be at least 8 characters long. It must contain upper- and lowercase letters, digits and special characters.";
      top: 110%;
      left: calc(-100%/3);
      right: calc(-100%/3);
      background: rgba(white, 1);
      color: rgba($grey-dark, 1);
      padding: calc(1rem / 3);
      z-index: 2;
      font-size: calc(4rem / 3);
      transition-delay: 1s;
    }
  }
  .reset-submit-wrapper {
    margin-top: calc(1rem / 3);
  }
}
</style>
