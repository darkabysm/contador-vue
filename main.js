const app = Vue.createApp({
    data(){
        return {
            title: 'App contador - Vue',
            count: 0
        }
    },
    methods: {
        modificar(instruccion = "+", limite = 1){
            if(instruccion === '-') this.count -= limite
            else this.count += limite
        }
    }
})
