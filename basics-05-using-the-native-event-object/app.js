const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: ""
        };
    },
    watch: {
        counter(value) {
            if (value > 50) {
                setTimeout(() => this.counter = 0, 2000);
            }
        }
    },




    computed: {
        fullName() {

            if (this.name == "" || this.lastName == "") {
                return "";
            } else {
                return this.name + " " + this.lastName;
            }

        }
    },

    methods: {
        resetInput() {
            this.name = "";
        },
        setName(event, lastName) {
            this.name = event.target.value + " " + lastName;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
    },
});

app.mount('#events');