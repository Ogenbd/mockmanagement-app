import EmailList from './components/email-list'
import EmailDetails from './components/email-details'
import EmailStatus from './components/email-status'
import EmailCompose from './components/email-compose'
import EmailFilter from './components/email-filter'

export default {
  name: 'email',
  data() {
    return {
      title: 'Email App',
      emails: [],
      filteredEmails: [],
      showDetails: false,
      selectedEmail: null,
      showCompose: false
    }
  },
  components: {
    'email-list': EmailList,
    'email-details': EmailDetails,
    'email-status': EmailStatus,
    'email-compose': EmailCompose,
    'email-filter': EmailFilter,
  },

  created() {
    this.reloadEmails()
  },

  methods: {
    selectEmail(clickedEmail) {
      if (this.selectedEmail.id !== clickedEmail.id) {
        this.selectedEmail = clickedEmail;
        console.log('Selecting ', clickedEmail);
        this.emails.forEach(email => {
          if (email.id === clickedEmail.id) {
            email.isSelected = !email.isSelected;
            email.isRead = true;
            //***** updates isRead for email on server side so isRead property survives refresh
            this.$http.put('email', email);
          }
          else email.isSelected = false;
        });
        console.log('should be: ', clickedEmail.id, 'is: ', this.selectedEmail.id);
      }
    },

    deleteEmail(deleteReq) {
      console.log('Deleting Email:', deleteReq);
      this.$http.delete(`email/${deleteReq.emailId}`)
        .then(this.reloadEmails);
      // this.emails = this.emails.filter(email => email.id !== deleteReq.emailId);
      // this.selectEmail(this.emails[0].id)
    },
    showCompose() {
      console.log('modal opened');

    },
    //doesnt work yet
    // markUnread(emailId) {
    //   this.emails.forEach(email => {
    //     if (email.id === emailId) email.isRead = false;
    //   });
    //   console.log(this.selectedEmail.isRead);
    // },

    saveEmail(email, ) {
      console.log(email);
      this.$http.post('email', email)
        .then(this.reloadEmails);
      // email.id = this.emails[this.emails.length - 1].id + 1;
      // this.emails.push(email);
    },

    reloadEmails() {
      this.$http.get('email')
        .then(res => res.json())
        .then(emails => this.emails = emails)
    }

  },
  
  watch: {
    emails: function () {
      this.showDetails = true;
      this.selectedEmail = this.emails[0];
      this.emails[0].isSelected = true;
      this.emails[0].isRead = true;
    }
  }
}

