import Vue from 'vue'
import { putAsync } from 'js-csp'
import channels from '../../channels'
import * as types from '../../mutation_types'

export default {
  initAccount(store) {
    store.commit(types.ACCOUNT_READY)
  },
  toggleAccount(store) {
    if (store.state.isAuthenticating === true) return
    if (store.state.isAuthenticated === true) store.commit(types.ACCOUNT_TOGGLE_MENU)
    else store.commit(types.ACCOUNT_TOGGLE_REGISTRATION)
  },
  switchForms(store, form) {
    store.commit(types.ACCOUNT_SWITCH_FORMS, form)
  },
  updateCredentials(store, event) {
    store.commit(types.ACCOUNT_UPDATE_CREDENTIALS, {field: event.target.name, value: event.target.value})
    console.log(store.state)
  },
  clearError(store) {
    store.commit(types.CLEAR_AUTHENTICATION_ERROR)
  },
  submitForm(store, event) {
    store.commit(types.AUTHENTICATION_REQUEST)
    console.log(event)
    const data = new FormData(event.target)
    console.log(data.getAll())
    const credentials = {
      email: store.state.email,
      password: store.state.password
    }
    if (store.state.formActive === 'login') {
      store.dispatch('submitLogIn', credentials)
    } else {
      store.dispatch('submitSignUp', credentials)
    }
    store.commit(types.ACCOUNT_CLEAR_PASSWORDS)
    store.commit(types.ACCOUNT_TOGGLE_REGISTRATION)
  },
  submitLogIn(store, credentials) {
    Vue.http.put('auth/login/', credentials).then(response => {
      store.dispatch('handleAuthenticationSuccess', response)
    }, response => {
      store.dispatch('handleAuthenticationError', response)
    })
  },
  submitSignUp(store, credentials) {
    Vue.http.post('auth/sign-up/', credentials).then(response => {
      store.dispatch('handleAuthenticationSuccess', response)
    }, response => {
      store.dispatch('handleAuthenticationError', response)
    })
  },
  submitLogout({ commit, state }) {
    commit(types.LOGOUT_REQUEST)
    Vue.http.put('auth/logout/').then(response => {
      commit(types.LOGOUT_SUCCESS)
    }, response => {
      commit(types.LOGOUT_ERROR, response)
    })
  },
  handleAuthenticationSuccess(store, response) {
    store.commit(types.AUTHENTICATION_SUCCESS, response)
    putAsync(
      channels.notifications,
      {
        messageType: 'info',
        title: 'Auth Success',
        body: response.statusText
      }
    )
  },
  handleAuthenticationError(store, response) {
    setTimeout(() => store.commit(types.AUTHENTICATION_ERROR, response), 13000)
    putAsync(
      channels.notifications,
      {
        messageType: 'error',
        title: 'Auth Error',
        body: response.statusText
      }
    )
  }
}
