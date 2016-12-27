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
    this.loadMap();
  },
  mounted() {
    // var codingAcademy = { lat: 32.088189, lng: 34.803140 };
    // const options = {
    //   zoom: 15,
    //   center: codingAcademy
    // };
    // GoogleMapsLoader.load(google => {
    //   this.map = new google.maps.Map(this.$refs.map, options);
    //     this.renderPlacesMarkers();
    //    });
    
      
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
        this.renderPlacesMarkers();
       });
    },
    renderPlacesMarkers() {
      this.places.forEach(place => {
        console.log('place:',place);
        let latLng = { lat: place.lat, lng: place.lng}
        console.log(latLng);
        let marker = new google.maps.Marker({
          position: latLng,
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
    }
  },
  computed: {

  },
  watch: {
    places: function() {
      
    }
  }
}

