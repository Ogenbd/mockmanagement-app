export default  {
  name: 'email-details',
  props: {
            selectedEmail: {
                required: true,
                type: Object,
            },
        },
        data(){
            return {
               
            }
        },
        methods: {
            deleteEmail() {
                this.$emit('deleteEmail', {emailId: this.selectedEmail.id});
            }
        },
    }

