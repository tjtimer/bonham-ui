import Home from '../views/Home'
import Contact from '../components/contact/Contact'
import concert from '../components/concert/ConcertView'
import ConcertDetail from '../components/concert/ConcertDetail'

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
    path: "/concert",
    name: "concert",
    component: concert,
    children: [{
      path: "/concert/:date-:venue",
      name: "concertDetail",
      component: ConcertDetail
    }, {
      path: "/concert/add-concert",
      name: "addConcert",
      component: ConcertDetail
    }, ]
  }, {
    path: "/contact",
    name: "contact",
    component: Contact
  }]
}