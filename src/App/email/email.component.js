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
      showDetails: false,
      selectedEmailId: null,
      selectedEmail: null,
      showCompose: false,
      emailFilter: { subject: '' },
      // this is my little cheat --ogen
      emails: [{ id: 0, subject: 'Hey', body: 'Bootstrapping responsive SpaceTeam food-truck actionable insight bootstrapping cortado pivot latte ship it disrupt grok. Pivot iterate co-working thinker-maker-doer physical computing user story pivot parallax minimum viable product convergence. Experiential co-working entrepreneur hacker piverate piverate driven thinker-maker-doer agile venture capital.', isRead: true, isSelected: true }],
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
    this.selectedEmail = this.emails[0];
    // console.log(this.selectedEmail);
  },

  methods: {
    selectEmail(emailId) {
      if (this.selectedEmailId !== emailId) {
        this.changeSelected(emailId);
        // maybe reduce is a better idea
        let selectedEmailArr = this.emails.filter(email => email.id === this.selectedEmailId);
        this.selectedEmail = selectedEmailArr[0];
        console.log('should be: ', emailId, 'is: ', this.selectedEmail.id);
      }
    },

    changeSelected(emailId) {
      console.log('Selecting ', emailId);
      this.emails.forEach(email => {
        if (email.id === emailId) {
          email.isSelected = !email.isSelected;
          email.isRead = true;
          this.selectedEmailId = email.id;
        }
        else email.isSelected = false;
      });
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
  computed: {
    emailsToDisplay() {
      return this.emails.filter(email => {
        return email.subject.toLowerCase().includes(this.emailFilter.subject.toLowerCase());
      })
    },
    selectedEmailIs() {
      this.emails.forEach(email => {
        if(email.isSelected) {
          this.selectedEmailId = email.id;
          this.selectedEmail = email;
        }
      })
    }
  }
}

