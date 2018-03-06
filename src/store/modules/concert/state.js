export default function () {
  return {
    concerts: [{
        id: 1,
        date: "01.04.2018",
        venue: "Jägerklause",
        city: "Berlin",
        info: "special guest: Operators",
        cancelled: false
      },
      {
        id: 2,
        date: "02.04.2018",
        venue: "Astrastube",
        city: "Hamburg",
        info: "special guest: Operators",
        cancelled: false
      },
      {
        id: 3,
        date: "03.04.2018",
        venue: "Medusa",
        city: "Kiel",
        info: "special guest: Operators",
        cancelled: true
      }
    ],
    currentActive: {
      id: null,
      date: "",
      venue: "",
      city: "",
      info: "",
      cancelled: false,
      hasChanged: false
    },
    currentActiveIndex: null
  }
}