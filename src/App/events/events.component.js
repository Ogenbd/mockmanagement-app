import EventDetails from './components/event-details'
import EventList from './components/event-list'
import EventFilter from './components/event-filter'
import EventEditCreate from './components/event-edit-create'


export default {
  name: 'events',
  eventsFilter: { name: '' },
  props: [],
  mounted() {

  },
  data() {
    return {
      events: [],
      filterdEvents: [],
      eventToEdit: undefined,
      showEventEdit: false
    }
  },
  methods: {
    openDetails(eventId) {
      this.$router.push(`/events/${eventId}`);
      console.log('Pushing eventId to Router', eventId);
    },
    eventsFilter(val) {
      this.filterdEvents = val;
    },
    reloadEvents() {
      // fetch('http://localhost:3003/item')
      this.$http.get('events')
        .then(res => res.json())
        .then(events => {
          this.events = events;
        })
      // console.log(this.events);
      //  this.EventToEdit = undefined;   
      //  this.showEventEdit = false;
    }
  },
  computed: {

  },
  created() {
    this.reloadEvents();
  },
  components: {
    'event-details': EventDetails,
    'event-list': EventList,
    'event-filter': EventFilter,
    'event-edit-create': EventEditCreate

  },
}

