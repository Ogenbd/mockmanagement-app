import EventPreview from '../event-preview'

export default  {
  name: 'event-list',
  props: { 
            events: {
                required: true,
                type: Array
            },
  },
  mounted() {
    
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

