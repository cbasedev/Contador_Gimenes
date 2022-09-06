Vue.component('mi-card', {
    
    props: {
        product: Object
    },

    template: 
        `<div>
            <img :src="product.image" class="card-img-top" :alt="product.description">
            <div class="card-body">
            <p class="card-text">{{product.description}}</p>
            <a href="#" class="btn btn-primary">Comprar <b>$ {{product.price}}</b></a>
            </div>
         </div>`

})

var app = new Vue({
    el: '#app',
    data:{
        cont: 0,
        foods: [
            {
                id: 1,
                description: 'Fideos con Salsa fileto',
                image: './assets/fideos.jpeg',
                price: 800.00
            },
            {
                id: 2,
                description: 'Milanesas con papas fritas',
                image: './assets/milanesa.jpeg',
                price: 950.00
            },
            {
                id: 3,
                description: 'Bife con puré',
                image: './assets/bife.jpeg',
                price: 880.00
            },
            {
                id: 4,
                description: 'Tortilla de papa',
                image: './assets/tortilla.png',
                price: 430.00
            },
        ]

    },

    methods:{
        restoCont(){
            this.cont--;
            return this.cont;
        },
        sumoCont(){
            this.cont++;
            return this.cont;
        },
    }

})