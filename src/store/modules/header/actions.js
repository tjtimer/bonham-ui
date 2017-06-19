import { take, timeout, go, CLOSED } from 'js-csp'
import xducers from 'transducers'
import * as types from '../../mutation_types'
import appChannels from '../app/channels'

function watchAppScroll(store) {
  go(function* () {
    while (appChannels.scrollChannel !== CLOSED) {
      let action = yield take(appChannels.scrollChannel)
      console.log('header watchAppScroll actions: ', action)
      if (action === 'stop') {
        yield timeout(3000)
        store.commit(types.HEADER_HIDE)
      }
      if (action === 'up') {
        console.log('timeout', action)
        store.commit(types.HEADER_SHOW)
      }
    }
  })
}

export default {
  initHeader(store) {
    console.log('header started', xducers)
    watchAppScroll(store)
  }
}
