export default {
  name: 'email-status',
  props: {
    emails: {
      required: true,
      type: Array
    },
  },
  data() {
    return {
      // numEmails: this.emails.length,
      // readEmails: null,


    }
  },
  methods: {
  },
  computed: {
    readEmails: function () {
      return this.emails.filter(email => email.isRead === true).length;
    }
  }
}

