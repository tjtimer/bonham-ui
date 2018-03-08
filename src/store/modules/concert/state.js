export default function () {
  return {
    concerts: {
      1: {
        id: 1,
        date: '01.04.2018',
        venue: 'Jägerklause',
        city: 'Berlin',
        info: 'special guest: Operators',
        status: 'published',
        hasChanged: false
      },
      2: {
        id: 2,
        date: '02.04.2018',
        venue: 'Astrastube',
        city: 'Hamburg',
        info: 'special guest: Operators',
        status: 'published',
        hasChanged: false
      },
      3: {
        id: 3,
        date: '03.04.2018',
        venue: 'Medusa',
        city: 'Kiel',
        info: 'special guest: Operators',
        status: 'cancelled',
        hasChanged: false
      }
    },
    statusTypes: ['tba', 'requested', 'cancelled', 'published'],
    concertIds: [1, 2, 3],
    deletedIds: [],
    active: null,
    saved: true,
    saving: false
  }
}