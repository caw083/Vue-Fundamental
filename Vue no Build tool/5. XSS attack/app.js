const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            raw_url : '<a href="https://www.google.com" target="_blank">Google</a>'
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