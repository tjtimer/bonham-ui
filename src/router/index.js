import Home from "../views/Home";
import Contact from "../components/contact/Contact";
import concert from "../components/concert/ConcertView";

export default {
  mode: "history",
  base: "/",
  linkActiveClass: "iam-active",
  linkExactActiveClass: "its-me-exactly-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/concert",
      name: "concert",
      component: concert
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
};
