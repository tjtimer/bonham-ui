import { chan } from 'js-csp'

const resizeChannel = chan()
const scrollChannel = chan()

export default {
  resizeChannel,
  scrollChannel
}
