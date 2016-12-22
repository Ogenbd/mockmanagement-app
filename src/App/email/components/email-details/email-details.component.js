export default {
    name: 'email-details',
    showDetails: false,
    props: {
        selectedEmail: {
            required: true,
            type: Object,
        },
    },
    data() {
        return {

        }
    },
    methods: {
        deleteEmail() {
            this.$emit('deleteEmail', { emailId: this.selectedEmail.id });
        },
        markUnread() {
            this.$emit('markUnread', { emailId: this.selectedEmail.id });
        }
    },
    computed: {
        showDetails() {
            if (this.selectedEmail) return true;
        }
    }
}


