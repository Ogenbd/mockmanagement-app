import EventDetails from './components/event-details'
import EventList from './components/event-list'
import EventFilter from './components/event-filter'


export default  {
  name: 'events',
  eventsFilter: {name: ''},
  props: [],
  mounted() {
    
  },
  data() {
    return {
      events: [],
    }
  },
  methods: {
   openDetails(eventId) {
     this.$router.push(`/events/${eventId}`);
     console.log('Pushing eventId to Router', eventId);
   },
   reloadEvents() {
                // fetch('http://localhost:3003/item')
                 this.$http.get('events')
                    .then(res => res.json())
                    .then(events => this.events = events);
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
    'event-details' : EventDetails,
    'event-list' : EventList,
    'event-filter' : EventFilter,
    
  }
}

