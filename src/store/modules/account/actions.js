import * as mt from '../../mutation_types'
import axios from 'axios'

async function wait(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay)
  })
}
export default {
  async init(store) {
    const CancelToken = axios.CancelToken;
    const cTFactory = CancelToken.source();
    store.commit(mt.ON_UPDATE_FIELD, ['cTFactory', cTFactory])
    const authToken = store.ls.get('auth_token')
    if (authToken.length > 6) {
      const request = {
        method: 'post',
        url: '/token-auth',
        authToken
      }
      await store.dispatch('sendAuthRequest', request)
    }
    store.commit(mt.ON_OPEN, index)
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
  async sendAuthRequest(store, request) {
    store.commit(mt.ON_SEND, request)
    try {
      if (store.state.activeRequest)
        store.state.cTFactory.cancel('old request cancelled!')
      const response = await axios({
        ...request,
        config: {
          ...config,
          ...request.config,
          cancelToken: store.state.cTFactory.token
        },
        transformRequest: [function (data, headers) {
          // Do whatever you want to transform the data
          headers = {
            'Auth-Token': request.authToken,
            'X-Requested-With': 'XMLHttpRequest'
          }
          return data;
        }],
      })
      await store.dispatch('handleSuccessResponse', response)
    } catch (error) {
      if (error.response)
        await store.dispatch('handleErrorResponse', error.response)
      else if (error.request)
        await store.dispatch('handleErrorRequest', error.request)
      else
        await store.dispatch('handleErrorMessage', error.message)
    }
  },
  async handleSuccessResponse(store, response) {
    console.log('handleSuccessResponse: ', response)
    store.ls.set('auth-token', response.headers.get('auth-token'))
    store.commit(mt.ON_RECEIVE, response)
  },
  async handleErrorResponse(store, response) {
    console.log('handleErrorResponse: ', response)
  },
  async handleErrorRequest(store, request) {
    console.log('handleErrorRequest: ', request)
  },
  async handleErrorMessage(store, message) {
    console.log('handleErrorMessage: ', message)
  },
  async closeDetails(store) {
    console.log("close: ");
    if (store.state.active.hasChanged === true) {
      await store.dispatch('discardOrSave')
    }
    store.commit(mt.ON_CLOSE)
  },
  async discardOrSave(store) {
    console.log("discardOrSave")
  },
  async save(store) {
    console.log("save account")
  },
  async saveName(store, e) {
    console.log("save name: ", e);
    store.commit(mt.ON_UPDATE_FIELD, ['name', e])
  },
  async saveEmail(store, e) {
    console.log("save email: ", e);
    store.commit(mt.ON_UPDATE_FIELD, ['email', e])
  },
  async saveAvatarURL(store, e) {
    console.log("save avatar URL: ", e);
    store.commit(mt.ON_UPDATE_FIELD, ['avatarURL', e])
  }
}