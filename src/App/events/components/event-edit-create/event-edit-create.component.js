export default {
        data() {
            return {
                event: {name: '', status: '', venue: '', date: '', link: '', description: ''},// Needs to be changed to match the data
                dataSaved: false,
            }
        },
        computed:{
            eventToEdit() {
                let obj = Object.assign({}, this.event);
                return obj;
            }
        },
       
        methods: {
            save() {
                let that = this;
                function handleResult(res) {
                    res.json()
                   .then(res => {
                           console.log("Result from server", res);
                        //    that.$emit('done')
                        this.dataSaved = true;
                        this.$router.push('/events');
                       }) 
                }

                console.log('Saving', this.eventToEdit);
                if (this.event.id)  this.$http.put(`events`, this.eventToEdit).then(handleResult);
                else this.$http.post('events', this.eventToEdit).then(handleResult);
            },
             loadEvent(eventId) {
                this.$http.get(`events/${eventId}`)
                    .then(res => res.json())
                    .then(event => this.event = event);
            }
        },
       
        created() {
            console.log('this component has been created');
             const eventId = this.$route.params.id
             console.log('Looked for eventId', eventId);
             if (eventId) {
             console.log('eventId is:',eventId);
              this.loadEvent(eventId);
             }  
        },
        // beforeRouteLeave(to, from, next) {
        //     if (this.dataSaved) return next();
        //     if (this.event.name  === this.carToEdit.name && 
        //         this.car.price === this.carToEdit.price) return next();

        //     const ans = confirm('Change will not save!');
        //     if (ans)        next();
        //     else            next(false)
            
        // }
       
    
    }