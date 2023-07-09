const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            url : 'https://www.google.com'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }
}).mount('#app')  

setTimeout(() => {
    vm.firstName = 'Bob'
    vm.lastName = 'Smith'
},2000)