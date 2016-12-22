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
      user: { name: 'Aaron' },
      selectedEmailId: null,
      selectedEmail: null,
      showCompose: false,
      emailFilter: { subject: '' },
      emails: [
        { id: 0, subject: 'Hey', body: 'Bootstrapping responsive SpaceTeam food-truck actionable insight bootstrapping cortado pivot latte ship it disrupt grok. Pivot iterate co-working thinker-maker-doer physical computing user story pivot parallax minimum viable product convergence. Experiential co-working entrepreneur hacker piverate piverate driven thinker-maker-doer agile venture capital.', isRead: true, isSelected: true },
        { id: 1, subject: 'Super Urgent', body: 'Co-working pitch deck thought leader waterfall is so 2000 and late long shadow user centered design SpaceTeam ideate convergence minimum viable product ship it experiential food-truck. Hacker minimum viable product fund human-centered design thinker-maker-doer human-centered design user story pivot unicorn.', isRead: false, isSelected: false },
        { id: 2, subject: 'You should be...', body: 'Waterfall is so 2000 and late co-working Steve Jobs user story integrate fund big data earned media responsive', isRead: false, isSelected: false },
        { id: 3, subject: 'Learn JS in 5 days flat or your money back', body: 'Pitch deck iterate cortado earned media user story cortado affordances Steve Jobs paradigm bootstrapping intuitive experiential integrate. Workflow entrepreneur co-working long shadow agile venture capital food-truck minimum viable product personas sticky note disrupt engaging. Prototype moleskine workflow bootstrapping disrupt convergence viral grok Steve Jobs. Pair programming ', isRead: false, isSelected: false },
        { id: 4, subject: 'Yo', body: 'Pitch deck innovate thought leader thought leader parallax thought leader viral pair programming responsive pair programming physical computing parallax engaging. Actionable insight venture capital quantitative vs. qualitative co-working convergence big data pair programming venture capital', isRead: false, isSelected: false },
        { id: 5, subject: 'Nigerian Prince', body: 'Physical computing human-centered design thinker-maker-doer user centered design hacker paradigm ship it co-working. Waterfall is so 2000 and late 360 campaign viral waterfall is so 2000 and late ideate paradigm venture capital user centered design parallax pivot physical computing waterfall is so 2000 and late.', isRead: false, isSelected: false },
        { id: 6, subject: 'Let\'s get coffee', body: 'Affordances convergence pitch deck unicorn thought leader thought leader Steve Jobs food-truck. Workflow food-truck intuitive earned media bootstrapping user centered design earned media long shadow cortado 360 campaign', isRead: false, isSelected: false },
        { id: 7, subject: 'Aaron <> Elon', body: 'Latte SpaceTeam long shadow Steve Jobs minimum viable product innovate Steve Jobs minimum viable product. Experiential affordances responsive actionable insight iterate thinker-maker-doer pair programming piverate quantitative vs. qualitative integrate disrupt. Iterate pivot pair programming parallax innovate agile', isRead: false, isSelected: false },
      ]
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
    this.selectedEmailId = 0;
    this.selectedEmail = this.emails[0];
  },
  methods: {
    selectEmail(emailId) {
      if(this.selectedEmailId !== emailId) {
        this.changeSelected(emailId);
        // maybe reduce is a better idea
        let selectedEmailArr = this.emails.filter(email => email.id === this.selectedEmailId); 
        this.selectedEmail = selectedEmailArr[0];    //[this.selectedEmailId];
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
      this.emails = this.emails.filter(email => email.id !== deleteReq.emailId);
      this.selectEmail(this.emails[0].id)
    },
    showCompose() {
      console.log('modal opened');

    },
    //doesnt work yet
    markUnread(emailId) {
      this.emails.forEach(email => {
        if(email.id === emailId) email.isRead = false;
      });
      console.log(this.selectedEmail.isRead);
    },
    saveEmail(email) {
      email.id = this.emails[this.emails.length - 1].id + 1;
      this.emails.push(email);
    }

  },
  computed: {
    emailsToDisplay() {
      return this.emails.filter(email => {
        return email.subject.toLowerCase().includes(this.emailFilter.subject.toLowerCase());
      })
    }
  }
}

