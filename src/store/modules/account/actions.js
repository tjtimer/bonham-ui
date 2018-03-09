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
      withCredentials: false
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
  async saveObject(store) {
    store.commit(mt.ON_OBJECT_UPDATE);
  },
  async updateField(store, [field, value]) {
    store.commit(mt.ON_FIELD_UPDATE, [field, value]);
  }
}