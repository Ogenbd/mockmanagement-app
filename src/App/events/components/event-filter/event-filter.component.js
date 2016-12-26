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
    resetFilter() {
      this.filter.str = '';
      this.emitFilter();
    },
    emitFilter() {
      let filtEvs = [];
      let filterBy = this.filter.focus.toLowerCase().substring(3);

      // If the filter input is empty than returns all the events in the database.
      if (this.filter.str === '') {
        filtEvs = this.eventsData;
      } else {

        let mutableSrc;
        filtEvs = this.eventsData.filter((event) => {
          switch (filterBy) {

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
          // RegEx that checks for numbers in a string.
          //(/\d/.test(this.filter.str))

          if (filterBy != 'date') {
            return (mutableSrc.toLowerCase().indexOf(this.filter.str.toLowerCase()) > -1);
          } else {
            let eventDate = new Date(mutableSrc);
            let srcDay = 1+ eventDate.getDay() + '';
            let srcMonth = 1+ eventDate.getMonth() + '';
            let srcYear = 1+ eventDate.getFullYear() + '';
            var filterDate = this.filter.str.split('-');
            let tgtDay = filterDate[2].slice(1) + '';
            let tgtMonth = filterDate[1] + '';
            let tgtYear = filterDate[0] + '';
            console.log('Event = Day: ', srcDay, ' Month: ', srcMonth, ' Year: ', srcYear);
            console.log('Filter = Day: ', tgtDay, ' Month: ', tgtMonth, ' Year: ', tgtYear);
            return ((srcDay === tgtDay) &&
                    (srcMonth === tgtMonth) &&
                    (srcYear === tgtYear)
            );
          }

        });
      }
      this.$emit('filterChanged', filtEvs);
    }
  },
  watch: {
    eventsData: function () {
      this.emitFilter();
    },
  }
}