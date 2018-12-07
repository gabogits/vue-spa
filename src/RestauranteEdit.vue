<template>
  <div id="restaurante-edit">
    <h2>Editar restaurante</h2>
    <form v-on:submit.prevent="guardarRestaurante">
      <p>
        <label>Nombre</label>
        <input type="text" v-model="restaurante.nombre">
        <!--cambiara la propiedad nombre del objeto restaurante-->
      </p>

      <p>
        <label>Direccion</label>
        <input type="text " v-model="restaurante.direccion">
      </p>

      <p>
        <label>Descripcion</label>
        <textarea type="text" v-model="restaurante.descripcion"></textarea>
      </p>

      <p>
        <label>Precio</label>
        <select v-model="restaurante.precio">
          <option value>Selecciona una opcion</option>
          <option value="bajo">Bajo</option>
          <option value="normal">Normal</option>
          <option value="alto">alto</option>
        </select>
      </p>

      <input type="submit" value="Guardar restaurante">
    </form>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "restaurante-edit",
  mounted() {
    this.id = this.$route.params.id; //el id que nos lleva al url
   
    axios
      .get("http://localhost/slim/restaurantes-api.php/restaurante/" + this.id)
      .then(respuesta => {
         
        this.restaurante = respuesta.data.data; //aqui con la informacion que nos regresa el get, se llena el modelo definido en el data y con las directivas de vue en el template, podemos verlo en la vista
        console.log(this.restaurante);
      });
  },
  data() {
    return {
      id: null,//este objeto ya estará relleno con los datos del get
      restaurante: { 
        nombre: "",
        direccion: "",
        descripcion: "",
        precio: "normal",
        imagen: ""
      }
    };
  },
  methods: {
    guardarRestaurante() {
   
      var router = this.$router;
      var params = "json=" + JSON.stringify(this.restaurante);
      var id = this.id; //es el identificador que mandamos al metodo update-restaurante/id, para el sepa cual es el que se va a modificar, recuerda que ya viene definido en el mounted
     axios
        .post("http://localhost/slim/restaurantes-api.php/update-restaurante/"+id, params) //update-restaurante son metodos con querys que tiene el archivo php restaurantes-api, igual manera mandamos params
        .then(respuesta => {
          if (respuesta.data.status == "success") {
          
            router.push("/restaurante/"+id); //aqui nos redirige a la pantalla del restaurante que hemos estando modificado
          }
        });
    }
  }
};
</script>