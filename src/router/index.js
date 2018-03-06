import Home from '../views/Home'
import Live from '../views/Live'
import Contact from '../views/Contact'
import ConcertDetail from '../components/ConcertDetail'

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
      component: ConcertDetail,
      props: true
    }, ]
  }, {
    path: "/contact",
    name: "contact",
    component: Contact
  }]
}