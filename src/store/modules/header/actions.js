import { take, timeout, go, CLOSED } from 'js-csp'
import * as types from '../../mutation_types'
import appChannels from '../app/channels'

function watchAppScroll(store) {
  go(function* () {
    while (appChannels.scrollChannel !== CLOSED) {
      let action = yield take(appChannels.scrollChannel)
      if (action === 'stop') {
        yield timeout(3000)
        store.commit(types.HEADER_HIDE)
      }
      if (action === 'up') {
        store.commit(types.HEADER_SHOW)
      }
    }
  })
}

export default {
  initHeader(store) {
    console.log('header started')
    watchAppScroll(store)
  }
}
