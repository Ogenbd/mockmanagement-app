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
        console.log('event', this.event);     
    },
    // moment: function (date) {
    //   return moment(date);
    // }
  },
  created() {
    console.log('this.$route.params', this.$route.params);
    const eventId = this.$route.params.id;
    console.log('const eventId gives', eventId);
    this.loadEvent(eventId);

  }


}
