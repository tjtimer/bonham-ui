/**
* broadcasting channels
*
* usage:
*   import { chan, putAsync, operations, go, CLOSED} from 'js-csp'
*   import channels from 'store/channels'
*
*   create your listener
*   const myListenerChannel = chan()
*   const myListenerMixer = operations.mix(myListenerChannel)
*
*   mix/add input channels
*   operations.mix.add(myListenerMixer, channels.<anyChannel>)
*   operations.mix.add(myListenerMixer, channels.<anyOtherChannel>)
*
*   use your channel
*   go(function* () {
*     let value
*     while (value !== CLOSED) {
*       value = yield myListenerChannel
*       console.log("myListenerChannel received ", value)
*     }
*   })
*
*   to publish something to a channel
*   putAsync(channels.<anyChannel>, <MyPayload>)
*/
import { chan } from 'js-csp'

const app = chan() // payload: {}
const header = chan() // payload: {}
const notifications = chan()  // payload: {title, body, messageType}
const log = chan()  // payload: {sourceName, logLevel, message}
const sidebar = chan()  // payload: {side}

export default {
  app,
  header,
  notifications,
  log,
  sidebar
}
