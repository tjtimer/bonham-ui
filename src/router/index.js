import Home from '../views/Home'
import Contact from '../views/Contact'
import Live from '../components/live/ConcertView'
import ConcertDetail from '../components/live/ConcertDetail'

export default {
  mode: 'history',
  base: '/',
  linkActiveClass: '',
  linkExactActiveClass: 'its-me',
  routes: [{
    path: "/",
    name: "home",
    component: Home
  }, {
    path: "/live",
    name: "live",
    component: Live,
    children: [{
      path: "/live/:date-:venue",
      name: "concertDetail",
      component: ConcertDetail
    }, {
      path: "/live/add-concert",
      name: "addConcert",
      component: ConcertDetail
    }, ]
  }, {
    path: "/contact",
    name: "contact",
    component: Contact
  }]
}