const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            age: 20
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        },
        increment() {
            this.age++
        },
        updateLastName(event) {
            this.lastName = event.target.value
        }

    }
}).mount('#app')  
