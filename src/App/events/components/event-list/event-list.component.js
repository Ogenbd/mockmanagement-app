import EventPreview from '../event-preview'

export default  {
  name: 'event-list',
  props: ['events'],
  mounted() {
    console.log('events in event-list', this.events);
  },
  data() {
    return {
      
    }
  },
  methods: {
   
  },
  computed: {

  },
  components: {
    'event-preview' : EventPreview
  }
}

