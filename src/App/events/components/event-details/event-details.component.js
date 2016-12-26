import GoogleMapsLoader from 'google-maps'; 
GoogleMapsLoader.KEY = 'AIzaSyBhZ9wVZyGcpSG893EUEOKx1Fm9jP_Bh1Q';

export default {
  name: 'event-details',
  data() {
    return {
      event: null,
      // eventDate: moment(event.time).format('MMMM Do YYYY, h:mm:ss a'),
    }
  },
  methods: {
    // nextEvent(){
    //     const nextId = this.car.id+1;
    //     this.$router.push(`/car/${nextId}`);
    //     this.loadCar(this.car.id+1);
    // },
    loadEvent(eventId) {
      this.$http.get(`events/${eventId}`)
        .then(res => res.json())
        .then(event => this.event = event);
        console.log('load event:', this.event);     
    },
    editEvent() {
                this.$emit('doEdit', this.event);
            }
    // moment: function (date) {
    //   return moment(date);
    // }
  },
  created() {
    console.log('this.$route.params', this.$route.params);
    const eventId = this.$route.params.id;
    console.log('const eventId gives', eventId);
    this.loadEvent(eventId);

  },
  updated() {
      var uluru = {lat: this.event.venue.lat, lng: this.event.venue.lon};
      console.log(uluru);
      console.log(this.event);
      
      const options = {
                          zoom: 9,
                          center: uluru
                      };
      GoogleMapsLoader.load(google => {
          let map = new google.maps.Map(this.$refs.map, options);
          var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      });
  }


}
