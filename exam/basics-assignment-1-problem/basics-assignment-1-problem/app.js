const APP = Vue.createApp({
    data() {
        return {
            name: "JUAN MANUEL VILCHIS PINEDA",
            age: 24,
            src_image: "https://www.google.com/search?q=vue&tbm=isch&ved=2ahUKEwiFvo71wOLsAhXti60KHaG8AbYQ2-cCegQIABAA&oq=vue&gs_lcp=CgNpbWcQAzIECAAQQzIECAAQQzIECAAQQzIECAAQQzICCAAyAggAMgIIADICCAAyAggAMgIIADoHCCMQ6gIQJzoECCMQJzoFCAAQsQM6BwgAELEDEENQgBNYghtgsh5oAXAAeACAAXqIAeUCkgEDMC4zmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=yUWfX8W1Ne2XtgWh-YawCw&bih=888&biw=1873#imgrc=WFyYd0BNcJLx9M",
            randomNumber2: 5,
        };
    },
    methods: {
        randomNumber() {
            return Math.random();
        }
    },
});

APP.mount("#assignment");