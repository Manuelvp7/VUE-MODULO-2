Vue.createApp({

    data() {
        return {
            output: '',
        }
    },
    methods: {
        buttonCLicked() {
            alert('button already clicked');
        },
        updateOutput(event) {
            this.output = event.target.value;
        }

    },
}).mount("#assignment");