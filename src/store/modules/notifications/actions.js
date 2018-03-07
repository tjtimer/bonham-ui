import {
  notificationChannel,
  errorChannel,
  warningChannel,
  debugChannel,
  logChannel,
} from '../../channel'
import * as mt from '../../mutation_types'
import {
  Channel
} from 'async-csp'
import {
  wait
} from '../concert/actions'

async function notificationHandler(store) {
  while (true) {
    const notification = await notificationChannel.take();
    if (notification === Channel.DONE) {
      break
    }
    await store.dispatch('handleNotification', notification)
  }
}

async function errorHandler(store) {
  while (true) {
    const error = await errorChannel.take();
    if (error === Channel.DONE) {
      return await store.dispatch('handleShutdown', errorChannel)
    }
    await store.dispatch('handleError', error)
  }
}

async function warningHandler(store) {
  while (true) {
    const warning = await warningChannel.take();
    if (warning === Channel.DONE) {
      return await store.dispatch('handleShutdown', warningChannel)
    }
    await store.dispatch('handleWarning', warning)
  }
}

async function debugHandler(store) {
  while (true) {
    const debug = await debugChannel.take();
    if (debug === Channel.DONE) {
      return await store.dispatch('handleShutdown', debugChannel)
    }
    await store.dispatch('handleDebug', debug)
  }
}

async function logHandler(store) {
  while (true) {
    const log = await logChannel.take();
    if (log === Channel.DONE) {
      return await store.dispatch('handleShutdown', logChannel)
    }
    await store.dispatch('handleLog', log)
  }
}
export default {
  async init(store) {
    console.log("initializing async insanity! :D")
    const messageHandler = {
      'notificationHandler': notificationHandler(store),
      'errorHandler': errorHandler(store),
      'warningHandler': warningHandler(store),
      'debugHandler': debugHandler(store),
      'logHandler': logHandler(store)
    }
    store.commit(mt.ON_OPEN, messageHandler)
  },
  async handleError(store, error) {
    console.log("handleError", error)
    store.commit(mt.ON_RECEIVE, error)
    await wait(5000)
    store.commit(mt.ON_CLOSE, ['error', error])
  },
  async handleWarning(store, message) {
    console.log("handleWarning", message)
    const warning = {
      message,
      type: 'warning',
      id: 'warning-' + Date.now(),
      received: new Date().toLocaleString('de'),
      unread: true,
      archived: false
    }
    store.commit(mt.ON_RECEIVE, warning)
    await wait(5000)
    console.log("closing warning")
    store.commit(mt.ON_CLOSE, warning)
  },
  async handleDebug(store, debug) {
    store.commit(mt.ON_RECEIVE, debug)
    await wait(500)
    store.commit(mt.ON_CLOSE, ['debug', debug])
  },
  async handleLog(store, log) {
    store.commit(mt.ON_RECEIVE, log)
    await wait(500)
    store.commit(mt.ON_CLOSE, ['log', log])
  },
  async handleNotification(store, notification) {
    store.commit(mt.ON_RECEIVE, notification)
    await wait(500)
    store.commit(mt.ON_CLOSE, ['notification', notification])
  },
  async subscribe(store, config) {
    store.commit(mt.ON_SUBSCRIBE, config)
  },
  async unsubscribe(store, config) {
    store.commit(mt.ON_UNSUBSCRIBE, config)
  },
  async publish(store, message) {
    store.commit(mt.ON_PUBLISH, message)
  },
  async handleShutdown() {},
  async shutdown(store) {
    await store.state.channels.map(async channel => {
      await channel.done()
      store.commit(mt.ON_CLOSE, channel)
    })
    console.log("shutdown success!", store.state)
  }
}