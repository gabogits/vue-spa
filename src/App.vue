<template>
  <div id="app" class="violen">
    <img src="./assets/logo.png">
    <h2>{{ msg }}</h2>

    <ul>
      <li><router-link to="/home">Home</router-link>  </li>
      <!--con la etiqueta router-link navegamos entre las diferentes vistas de nuestra aplicacion-->
      <li><router-link to="/restaurantes">Restaurantes</router-link></li>
      <!--vamos a ver como pasarle un parametro a una ruta, aqui la directiva ti, va igual  de esta manera  :to="{name:'restaurante-destacado', params:{id:16}}"-->
      <li><router-link :to="{name:'restaurante-destacado', params:{id:16}}">Restaurantes destacados</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>

    </ul>
    <!-- el router-view es una etiqueta donde se van a ir cargando los componentes en funcion de la url-->
    <router-view></router-view> 


     <!--Cargando componente

    <home></home>
    <contacto></contacto>
    -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'RestaurantesAPP'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
