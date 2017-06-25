import { chan } from 'js-csp'

const mouseMoveChannel = chan()
const resizeChannel = chan()
const scrollChannel = chan()

export default {
  mouseMoveChannel,
  resizeChannel,
  scrollChannel
}
