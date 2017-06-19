import jwt from 'jwt-decode'
import * as types from '../../mutation_types'

export default {
  [types.ACCOUNT_READY](state) {
    state.isReady = true
  },
  [types.ACCOUNT_TOGGLE_MENU](state) {
    state.showMenu = !state.showMenu
  },
  [types.ACCOUNT_TOGGLE_REGISTRATION](state) {
    state.showRegistration = !state.showRegistration
  },
  [types.ACCOUNT_SWITCH_FORMS](state, form) {
    state.formActive = form
  },
  [types.ACCOUNT_CLEAR_PASSWORDS](state) {
    state.password = state.password2 = ''
  },
  [types.AUTHENTICATION_REQUEST](state) {
    state.showLoader = true
    state.isAuthenticating = true
  },
  [types.AUTHENTICATION_SUCCESS](state, response) {
    const payload = jwt(response.headers.map['Access'][0])
    state.showLoader = false
    state.isAuthenticating = false
    state.isAuthenticated = true
    state.id = payload['id']
    state.email = payload['email']
    state.accessToken = response.headers.map['Access'][0]
    state.refreshToken = response.headers.map['Bearer'][0]
    state.authenticationError = ''
  },
  [types.AUTHENTICATION_ERROR](state, error) {
    state.showLoader = false
    state.isAuthenticating = false
    state.isAuthenticated = false
    state.authenticationError = error.statusText
  },
  [types.CLEAR_AUTHENTICATION_ERROR](state) {
    state.authenticationError = ''
  },
  [types.LOGOUT_REQUEST](state) {
    state = {
      loginActive: true,
      showLoader: false,
      showMenu: false,
      isAuthenticated: false,
      isAuthenticating: false,
      id: null,
      email: '',
      password: '',
      password2: '',
      accessToken: '',
      refreshToken: '',
      authenticationError: ''
    }
  }
}
