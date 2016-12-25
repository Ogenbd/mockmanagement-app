
export default {
  name: 'event-filter',
  props: ['eventsData'],
  mounted() {

  },
  data() {
    return {
      filter: { str: '' }
    }
  },
  methods: {
    emitFilter() {
      let filtEvs = [];

      // this.eventsData.forEach( (event) => {
      //   let res = event.name.indexOf(this.filter.str);
      //   if (res != -1) filtEvs.push(event);
      // });
      if(!this.filter.str){
        filtEvs = this.eventsData
      } else {
        filtEvs = this.eventsData.filter( (event) => {
          return (event.name.indexOf(this.filter.str) > -1);
        });
      }

      console.log('filteremitting', filtEvs);

      this.$emit('filterChanged', filtEvs);
    }
  },

  watch:{
    filter: function(){
      console.log('watch filter');
    }
  }
}
