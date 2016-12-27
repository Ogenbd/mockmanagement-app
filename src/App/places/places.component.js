import placeMap from './components/map'

export default {
  name: 'places',

created() {
  this.reloadPlaces();
},
  
  data() {
    return {
      places: []
    }
  },
  components: {
    'place-map': placeMap,
  },
  methods: {
    reloadPlaces() {
      this.$http.get('places')
        .then(res => res.json())
        .then(places => this.places = places)
    }
  }
}

