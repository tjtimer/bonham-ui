import Home from "../views/Home";
import Contact from "../components/contact/Contact";
import ConcertView from "../components/concert/ConcertView";
import ConcertDetail from "../components/concert/ConcertDetail";

export default {
  mode: "history",
  base: "/",
  linkActiveClass: "iam-active",
  linkExactActiveClass: "its-me-exactly-active",
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/concert",
      name: "concert",
      component: ConcertView,
      children: [{
        path: "/concert/:date-:venue",
        name: "concert-details",
        component: ConcertDetail
      }]
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
};