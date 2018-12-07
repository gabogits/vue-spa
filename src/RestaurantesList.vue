<template>
  
  <div>
    <ul id="restaurantes-list" v-if="restaurantes != null">
        <li v-for="restaurante in restaurantes"  :key="restaurante.id">
          <strong>{{restaurante.nombre}}</strong>

          <p>
              <router-link :to="{name: 'restaurante', params: {id: restaurante.id}}">Ver</router-link>
              <router-link :to="{name: 'editar-restaurante', params: {id: restaurante.id}}">Editar</router-link>
              <span v-if="showBorrar != restaurante.id" style="cursor-pointer">
                  <a href="#" @click="borrarRestaurante(restaurante.id)">Eliminar</a>
              </span>
              <span v-else>
                  <p>Estas seguro de quere borrarlo</p>
                  <button @click="cancelarBorrado()">Cancelar</button>
                  <button @click="confirmarBorrado(restaurante.id)">Borrado</button>
              </span>
          </p>
        </li>
    </ul>
    <span v-else>Cargando restaurantes</span>

  </div>
</template>

<style lang="scss">
    #restaurantes-list {
        padding: 5px;
        li {
            margin-top: 10px;
            width: 30%;
            height: 120px;
            border: 1px solid #ddd;
            background: #eee;
            padding: 20px;
            overflow: hidden;
        }
    }
</style>

<script>
import axios from 'axios';

export default {
  name: 'restaurantes-list', //este nombre puede ser cualquiera
  mounted () {
      this.getRestaurantes();
  },
  data () {
    return {
      texto: 'Pagina restaurantes  list',
      restaurantes:null,
      showBorrar: null
    }
  },
  methods: {
      getRestaurantes() {
        axios.get('http://localhost/slim/restaurantes-api.php/restaurantes')
          .then((respuesta) => {
              this.restaurantes = respuesta.data.data;
          });
      },
      borrarRestaurante(id) {
          this.showBorrar = id; //aqui nos llega el id del restaurante
      },
      cancelarBorrado() {
           this.showBorrar = null;
      },
      confirmarBorrado (id){
        axios.get('http://localhost/slim/restaurantes-api.php/delete-restaurante/'+id)  //metodo get para llamar el metodo que borra el restaurante
                    .then((respuesta) => { 
                        this.showBorrar = null; //para resetear showBorrar antes de borrar
                         this.getRestaurantes(); //para que atualice la lista de restaurantes
                     
                    });
      }

  }
}
</script>
