// initialize the Vue app on some div

Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
        }
    }
}).mount('#app')  // the #app is the id of the div in the html file



// vue doesn't work with class properties
// vue must be initialized on a one div only

Vue.createApp({
    data() {
        return {
            firstName: 'Jane',
            lastName: 'Doe',
        }
    }
}).mount('#app2')