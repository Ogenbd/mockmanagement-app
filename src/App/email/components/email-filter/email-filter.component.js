export default {
  name: 'email-filter',
  props: {
    emails: {
      required: true,
      type: Array
    }
  },

  data() {
    return {
      filter: { subject: ''},
      filteredEmails: []
    }
  },

  methods: {
    emailsToDisplay() {
      this.filteredEmails = this.emails.filter(email => {
        return email.subject.toLowerCase().includes(this.filter.subject.toLowerCase());
      })
      this.$emit('filterChanged', this.filteredEmails);
    }
  },

  watch: {
    emails: function () {
      this.emailsToDisplay();
    }
  }
}

