Vue.createApp({
    data() {
        return {
            boxAselected: false,
            boxBselected: false,
            boxCselected: false,
        };
    },
    computed: {
        aBoxesSelected()  {
            return
        }
    },
    methods: {
        boxSelected(value) {
            if (value === 'A') {
                this.boxAselected = !this.boxAselected;
            } else if (value === 'B') {
                this.boxBselected = !this.boxBselected;
            } else if (value === 'C') {
                this.boxCselected = !this.boxCselected;
            }
        }
    },
}).mount("#styling");