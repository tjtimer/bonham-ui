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
      button(:disabled="account.isAuthenticated" class="reset-submit button--primary" type="reset") reset
      button(class="reset-submit button--primary" @click="submitForm({email, password, password2})" submit.prevent) ok
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
@import '../../assets/helpers/_placeholders';
@import '../../assets/helpers/_variables';
@import '../../assets/components/_buttons';
#registration-form {
  display: flex;
  flex: 1 1 100%;
  flex-flow: column;
  justify-content: center;
  align-items: stretch;
  box-shadow: inset 0 1px 3px rgba($grey-dark, 0.5);
  padding: .5em;
  button {
    @extend %button;
    width: 50%;
  }
}
fieldset {
  flex: 0 1 100%;
  border: none;
  color: $grey-dark;
  text-align: left;
  margin-bottom: 3px;
  input {
    border: 1px solid $red-light;
    padding: 2px;
    &.valid {
      border: 1px solid $green-light,
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
    color: rgba($green-light, 0);
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
    padding: 0.3em;
    z-index: 2;
    font-size: 1.4em;
    font-weight: 300;
    transition-delay: 1s;
  }
}
</style>
