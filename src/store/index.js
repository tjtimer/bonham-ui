import channel from './channel'
import account from './modules/account'
import concert from './modules/concert'
import notifications from './modules/notifications'


export default {
  modules: {
    account,
    concert,
    channel,
    notifications
  },
  strict: true,
  ls: localStorage
}