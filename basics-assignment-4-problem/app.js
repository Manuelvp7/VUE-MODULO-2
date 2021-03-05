Vue.createApp({
    data() {
        return {
            inputClass: '',
            paragraphIsHidden: false,
            inputBackgroundColor: ''
        }
    },
    computed: {
        paraClasses() {
            return {
                user1: this.inputClass === "user1",
                user2: this.inputClass === "user2",
                hidden: this.paragraphIsHidden,
                visible: !this.paragraphIsHidden,
            };
        }
    },
    methods: {
        toggleParagraphVisibility() {
            this.paragraphIsHidden = !this.paragraphIsHidden;
        }
    },
}).mount("#assignment");