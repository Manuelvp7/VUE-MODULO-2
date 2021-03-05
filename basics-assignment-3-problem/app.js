Vue.createApp({

    data() {
        return {
            counter: 0
        }
    },
    watch: {
        counter() {

            setTimeout(() => this.counter = 0, 5000);
        }
    },
    computed: {
        result() {
            if (this.counter < 37) {
                return 'NOT THERE YET';
            } else if (this.counter == 37) {
                return this.counter;
            }
            return 'Too much!';
        }
    },
    methods: {
        add(value) {
            this.counter += value;
        }
    },

}).mount("#assignment");