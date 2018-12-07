<template>
  <div id="restaurante-add">
    <h2>Crear nuevo restaurante</h2>
    <form v-on:submit.prevent="guardarRestaurante">
      <p>
        <label>Nombre</label>
        <input type="text" v-model="restaurante.nombre" />  <!--cambiara la propiedad nombre del objeto restaurante-->
      </p>

       <p>
        <label>Direccion</label>
        <input type="text " v-model="restaurante.direccion"  />
      </p>

       <p>
        <label>Descripcion</label>
        <textarea type="text" v-model="restaurante.descripcion" ></textarea>
      </p>

      <p>
        <label>Precio</label>
        <select  v-model="restaurante.precio">
            <option value="">Selecciona una opcion</option>
            <option value="bajo">Bajo</option>
            <option value="normal">Normal</option>
            <option value="alto">alto</option>
        </select>
      </p>
     
      <input type="submit" value="Guardar restaurante" />
    </form>
  </div>
</template>


<script>
import axios from 'axios';
export default {
    name: 'restaurante-add',
    mounted() {
      
    },
    data(){
        return {
            restaurante: { //un objeto, que bajamos a modificar mientras rellenamos el formulario
              nombre: "",
              direccion: "",
              descripcion: "",
              precio: "normal",
              imagen: ""
            }, //esto nos va funcionar de modelo
        };
    },
     methods: {
               guardarRestaurante () { //conecta a la api, hace una peticion y guarda los dato
                 
                  var router = this.$router; //guardamos el router en una variable
                  var params = "json="+JSON.stringify(this.restaurante); 
                  //en params tendremos el objeto restaurantes con las propiedades del nuevo restaurante a guardar, recibido del formulario
                 
                  //restaurantes-api.php esta esperando el objeto del nuevo restaurante en este formato json
                   //JSON.stringify convierte el objeto json de javascript  a una cadena de texto en formato json
                    axios.post('http://localhost/slim/restaurantes-api.php/restaurantes', params) //axios nos va permitir guardar ese restaurante por el metodo post de http, como segundo parametro esta la cadena json con el nuevo restaurante a crear
                    .then((respuesta) => { 
                       if(respuesta.data.status == "success") { //en respuesta.data.status se guarda el dato de si la respuesta http fue correcta o no
                         //redirigir si se ha guardado todo de manera exitosa
                         router.push("/restaurantes") //con esto cambiamos de direccion
                       }
                    })


               }
    }
}
</script>