export default {
  name: 'event-filter',
  props: [],
  mounted() {

  },
  data() {
    return {
      filter: { name: '' }
    }
  },
  methods: {
    emitFilter() {
      this.$emit('filterChanged', this.filter);
    }
  },
  computed: {

  }
}

