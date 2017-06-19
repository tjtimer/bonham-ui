export default function() {
  return {
    calendars: {
      1: {
        id: 1,
        created: '2017-05-04T12:33:31.403Z',
        lastUpdated: null,
        lastUpdatedBy: null,
        title: 'MyCalendar',
        color: '#0CF',
        owner: 1,
        admins: [],
        editors: [],
        privacy: 'private'
      },
      2: {
        id: 2,
        created: '2017-06-14T07:33:31.403Z',
        lastUpdated: null,
        lastUpdatedBy: null,
        title: 'MyOtherCalendar',
        color: '#FC0',
        owner: 1,
        admins: [],
        editors: [],
        privacy: 'public'
      }
    },
    calendarsEnabled: [1],
    entries: {
      1: {
        id: 1,
        calendarId: 1,
        created: '2017-06-14T07:33:31.403Z',
        createdBy: 1,
        lastUpdated: null,
        lastUpdatedBy: null,
        title: 'buy cigarettes',
        startDay: '2017-07-08',
        startTime: '8:30:00 PM',
        endDay: null,
        endTime: null,
        status: 'normal',
        description: 'Need to buy cigarettes for no reason.',
        privacy: 'private'
      }
    },
    entriesList: [],
    viewType: 'month',
    firstWeekDay: 'monday',
    currentYear: new Date(Date.now()).getYear(),
    currentMonth: new Date(Date.now()).getMonth(),
    currentDay: new Date(Date.now()).getDay()
  }
}
