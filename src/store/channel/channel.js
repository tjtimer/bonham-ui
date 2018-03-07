import  Channel, { STATE } from 'async-csp'
import { ChannelSubscribeError } from '../exceptions'


export default class BaseChannel extends Channel {
    constructor(store, topic, ...args) {
        super(...args)
        this._store = store
        this._id = Date.now()
        this._topic = topic
        this._created = new Date()
        this._subscriber = new List()
    }
    get id() {
        return this._id
    }
    get topic() {
        return this._topic
    }
    get name() {
      return this._id + "-" + this._topic
    }
    get created() {
        return this._created
    }
    get isRunning() {
        return this[STATE] === STATE.OPEN
    }
    get isClosing() {
        return this[STATE] === STATE.CLOSED
    }
    get isClosed() {
        return this[STATE] === STATE.ENDED
    }
    toString() {
        return `<MessageChannel id=${this._id} topic=${this._topic} isRunning=${this._isRunning}>`
    }
    subscribe(action) {
        if (this.isClosed === true || this.isClosing === true) {
            throw new ChannelSubscribeError(`${this.name} does not accept further subscriptions.`)
        }
        this._subscriber = [...this._subscriber, action]
    }
    start() {
      return this._run()
    }
    stop() {
      return this._shutdown()
    }
    async _dispatch(msg) {
      const tasks = this._subscriber.map(
        subscriber => this._store.dispatch(subscriber, msg)
      )
      return await Promise.all(tasks)
    }
    async _run() {
      while (true) {
        msg = await this.take()
        if (msg === this.DONE) {
            return await this._shutdown()
        }
        await this._dispatch(msg)
      }
    }
    async _shutdown() {
      this.close()
      await this._dispatch(CLOSE)
      await this.done()
      return this
    }
}