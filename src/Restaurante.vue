<template>
<div>
    <h1>Detalle del restaurante {{id}}</h1>
    <div id="restaurante-detail" v-if="restaurante != null">
        <h2 v-text="restaurante.nombre"></h2>
         <p v-text="restaurante.descripcion"></p>

    </div>
    <span v-else>
        Cargando restaurante
    </span>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'restaurante-detail',
    mounted() {
        // const vm =  this;// esto se ocupa si en lugar de una funcion flecha se ocupará function
        this.id = this.$route.params.id;
        console.log(this.id)
        axios.get('http://localhost/slim/restaurantes-api.php/restaurante/'+this.id)
        .then((respuesta) => { //haciendo uso de la funcion de flecha tenemos a acceso a la variable this a las propiedades que tenemos fuera
            console.log(respuesta)
            this.restaurante = respuesta.data.data;
        })
    },
    data(){
        return {
            id:null, 
            restaurante:null
        }
    }
}
</script>