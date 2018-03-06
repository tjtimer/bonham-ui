import * as mt from '../../mutation_types'

export default {
  [mt.ON_OPEN](state, index) {
    const ls = localStorage
  },
  [mt.ON_CLOSE](state) {
    state = {
      ...state,
      active: false,
      activating: false,
      activeRequest: null,
      id: null,
      token: '',
      name: '',
      email: '',
      avatarURL: '',
      birthday: '',
      hasChanged: false
    }
  },
  [mt.ON_UPDATE_FIELD](state, payload) {
    const [field, value] = payload
    state = {
      ...state,
      [field]: value,
      hasChanged: true
    }
  },
  [mt.ON_SEND](state, request) {
    state = {
      ...state,
      activating: true,
      activeRequest: request
    }
  },
  [mt.ON_RECEIVE](state, response) {
    const {
      status,
      headers,
      data
    } = response
    state = {
      ...state,
      ...data,
      activating: false,
      active: status === 'OK',
      activeRequest: null,
      token: headers.get('auth-token') || ''
    }
  }
}