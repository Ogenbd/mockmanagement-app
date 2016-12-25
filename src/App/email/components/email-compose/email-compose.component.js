export default {
  name: 'email-compose',
  data() {
    return {
      showCompose: false,
      email: {
        id: null,
        subject: '',
        body: '',
        isRead: false,
        isSelected: false
      }
    }
  },
  methods: {
    save() {
      this.$emit('save', this.email);
      this.showCompose = false
    }

  },
  computed: {

  }
}

