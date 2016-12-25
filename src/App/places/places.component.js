import GoogleMapsLoader from 'google-maps';
GoogleMapsLoader.KEY = 'AIzaSyA0sVNvuL2BJAj8Hn4yr_w-j8CHamvKboc';

export default {
  name: 'places',

  mounted() {
    var codingAcademy = { lat: 32.088, lng: 34.803 };
    const options = {
      zoom: 13,
      center: codingAcademy
    };
    GoogleMapsLoader.load(google => {
      new google.maps.Map(this.$refs.map, options);
    });
  }
}