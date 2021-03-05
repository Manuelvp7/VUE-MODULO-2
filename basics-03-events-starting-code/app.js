const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: ''
        };
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        submitForm() {
            alert('Submitted!');
        },
        confirmName() {

        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        },
        add(num) {
            this.counter += num;
        },
        extract(num) {
            this.counter -= num;
        }
    },
});

app.mount('#events');