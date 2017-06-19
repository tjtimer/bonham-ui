export default function() {
  return {
    isReady: false,
    showRegistration: false,
    formActive: 'login',
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
