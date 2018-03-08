import * as mt from '../../mutation_types'


export default {
  async setup(store) {
    console.log("account setup store: ", store)
    store.commit(mt.ON_OPEN)
  },
  async handleLogin(store, data) {
    const request = {
      method: 'put',
      url: '/login',
      withCredentials: true,
      auth: data
    }
    await store.dispatch('sendAuthRequest', request)
  },
  async handleSignUp(store, data) {
    const request = {
      method: 'post',
      url: '/sign-up',
      withCredentials: true,
      auth: data
    }
    await store.dispatch('sendAuthRequest', request)
  },
  async handleLogout(store, data) {
    const request = {
      method: 'put',
      url: '/logout',
      withCredentials: no
    }
    await store.dispatch('sendAuthRequest', request)
  },
  async handleUpdate(store) {
    const request = {
      url: store.state.updateURL
    }
    await store.dispatch('sendAuthRequest', request)
  },
  async discardOrSave(store) {
    console.log("discardOrSave")
  },
  async saveAccount(store) {
    console.log("save account")
  },
  async saveName(store, e) {
    console.log("save name: ", e);
    store.commit(mt.ON_FIELD_UPDATE, ['name', e])
  },
  async saveEmail(store, e) {
    console.log("save email: ", e);
    store.commit(mt.ON_FIELD_UPDATE, ['email', e])
  },
  async saveAvatarURL(store, e) {
    console.log("save avatar URL: ", e);
    store.commit(mt.ON_FIELD_UPDATE, ['avatarURL', e])
  }
}