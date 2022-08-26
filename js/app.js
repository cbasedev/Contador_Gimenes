var app = new Vue({
    el: '#app',
    data:{
        cont: 0
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