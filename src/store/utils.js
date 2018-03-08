import  Channel, { STATES } from 'async-csp'
import { ChannelSubscribeError } from './exceptions'

export async function wait(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay)
  })
}

export default class Receiver extends Channel {
    constructor(topic, ...args) {
        super(...args)
        this._store = null
        this._topic = topic
        this._handler = null
        this._id = Date.now()
        this.state = STATES.ENDED
    }
    get id() {
        return this._id
    }
    get topic() {
        return this._topic
    }
    get name() {
      return this._topic + "-" + this._id
    }
    get isRunning() {
        return this.state === STATES.OPEN
    }
    get isClosing() {
        return this.state === STATES.CLOSED
    }
    get isClosed() {
        return this.state === STATES.ENDED
    }
    toString() {
        return `<Receiver 
                    id=${this._id} 
                    topic=${this._topic} 
                    isRunning=${this._isRunning}>`
    }
    async setup(store, handler) {
      this._store = store
      this._handler = handler
      this.state = STATES.OPEN
      this._run()
      return this
    }
    async _run() {
      while (true) {
        msg = await this.take()
        if (msg === this.DONE) {
            return await this._shutdown()
        }
        await this._store.dispatch(this._handler, msg)
      }
    }
    async _shutdown() {
      await this._dispatch(CLOSE)
      await this.done()
      return this
    }
}