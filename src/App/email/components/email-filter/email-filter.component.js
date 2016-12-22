export default {
  name: 'email-filter',
  props: [],
  mounted() {

  },
  data() {
    return {
      filter: { subject: '' }
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

