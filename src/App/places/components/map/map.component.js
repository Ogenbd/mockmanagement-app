import GoogleMapsLoader from 'google-maps';
GoogleMapsLoader.KEY = 'AIzaSyA0sVNvuL2BJAj8Hn4yr_w-j8CHamvKboc';

export default {
  name: 'map',
  props: {
    places: {
      required: true,
      type: Array
    },
  },
  created() {
  
},
  mounted() {
    this.loadMap();
  },
  data() {
    return {
      map: null,
    }
  },
  methods: {
    loadMap() {
      var codingAcademy = { lat: 32.088189, lng: 34.803140 };
      const options = {
        zoom: 15,
        center: codingAcademy
      };
      GoogleMapsLoader.load(google => {
        this.map = new google.maps.Map(this.$refs.map, options);
        this.renderPlaceMarkers();

        this.map.addListener('click', e => {
          console.log('whatever e is: ', e);
          this.placeMarkerAndPanTo(e.latLng);
        });
      });
    },
    
    renderPlaceMarkers() {
      this.places.forEach(place => {
        // console.log('place:',place);
        let placeLatLng = { lat: place.lat, lng: place.lng }
        // console.log(latLng);
        let marker = new google.maps.Marker({
          position: placeLatLng,
          title: place.title,
          map: this.map
        })
        var infowindow = new google.maps.InfoWindow({
          content: place.title
        });
        marker.addListener('click', () => {
          infowindow.open(this.map, marker);
        })
      })
    },

    placeMarkerAndPanTo(latLng) {
      var marker = new google.maps.Marker({
        position: latLng,
        map: this.map
      });
      this.map.panTo(latLng);
    }
  },
  computed: {

  },
  watch: {
    // places: function() {

    // }
  }
}

