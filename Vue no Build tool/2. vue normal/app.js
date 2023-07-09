const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
        }
    }
}).mount('#app')  

setTimeout(() => {
    vm.firstName = 'Bob'
    vm.lastName = 'Smith'
},2000)