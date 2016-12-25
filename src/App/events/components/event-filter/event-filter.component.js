export default {
  name: 'event-filter',
  props: ['eventsData'],
  mounted() {

  },
  data() {
    return {
      filter: { str: '', focus: 'By Name' }
    }
  },
  methods: {
    emitFilter() {
      let filtEvs = [];
      let filterBy = this.filter.focus.toLowerCase().substring(3);

      // If the filter input is empty than returns all the events in the database.
      if(!this.filter.str){
        filtEvs = this.eventsData;
      } else {

        let mutableSrc;
        filtEvs = this.eventsData.filter( (event) => {
        switch(filterBy) {
          
          case 'name':
          mutableSrc = event.name;        
          break;

          case 'venue':
          mutableSrc = event.venue.name + " " + event.venue.address_1 + " " + event.venue.city + " " + event.venue.country + " " + event.venue.localized_country_name;
          break;

          case 'date':
          mutableSrc = event.time;
          break;
        }
            return (mutableSrc.toLowerCase().indexOf(this.filter.str.toLowerCase()) > -1);
          });
        
      }
      this.$emit('filterChanged', filtEvs);
    }
  },

  // watch:{
  //   filter: function(){
  //     console.log('watch filter');
  //   }
  // }
}

