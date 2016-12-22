export default  {
  name: 'email-preview',
  props:  {
            email: {
                required: true,
                type: Object
            }
          },
  mounted() {
    
  },
  data() {
    return {
      
    }
  },
  methods: {
    showEmailBody() {
                this.$emit('showEmailBody', this.email.id);
                console.log('shows email body', this.email.id);
		    }
  },
  computed: {

  }
}

