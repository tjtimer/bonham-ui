export default function() {
  return {
    concerts: {
      1: {
        id: 1,
        date: "01.04.2018",
        venue: "Jägerklause",
        city: "Berlin",
        info: "special guest: Operators",
        status: "published"
      },
      2: {
        id: 2,
        date: "02.04.2018",
        venue: "Astrastube",
        city: "Hamburg",
        info: "special guest: Operators",
        status: "published"
      },
      3: {
        id: 3,
        date: "03.04.2018",
        venue: "Medusa",
        city: "Kiel",
        info: "special guest: Operators",
        status: "cancelled"
      }
    },
    active: {},
    statusTypes: ["tba", "requested", "cancelled", "published"],
    saving: false
  };
}
