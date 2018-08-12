var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'iPhone 7',
                price: 6188,
                count: 1
            },
            {
                id: 2,
                name: 'iPad Pro',
                price: 5888,
                count: 1
            },
            {
                id: 1,
                name: 'MacBook Pro',
                price: 21488,
                count: 1
            },
            {
                id: 1,
                name: 'Surface Book2',
                price: 19999,
                count: 1
            },
        ],
    },
    computed: {
        totalPrice: function() {
            let total = 0
            this.list.map(item => {
                total += item.price * item.count
            })

            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
        }
    },
    methods: {
        handleReduce: function(index) {
            if (this.list[index].count === 1) {
                return
            }
            else {
                this.list[index].count--
            }
        },
        handleAdd: function(index) {
            this.list[index].count++
        },
        handleRemove: function(index) {
            this.list.splice(index, 1)
        }
    },
})
