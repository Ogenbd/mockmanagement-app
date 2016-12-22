
import EmailPreview from '../email-preview'
    export default {
        name: 'email-list',
        props: {
            emails: {
                required: true,
                type: Array
            },
        },
        data(){
            return {
               
            }
        },
        methods: {
        },
        components: {
            'email-preview' : EmailPreview
        }
    

    }
