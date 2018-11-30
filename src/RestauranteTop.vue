<template>
    <h2>Esto es la home {{texto}} : {{id_restaurante}}</h2>
</template>


<script>
export default {
  name: 'restaurante-top', //este nombre puede ser cualquiera,
  mounted() {
    //para recoger el parametro de la url
      this.id_restaurante = this.$route.params.id; //asi lo recogemos y clo asignamos a la propiedad id_restaurante
  },
  data () {
    return {
      texto: 'Pagina restaurante destacado',
      id_restaurante: null, //guardamos en propiedad id_restaurante: el parametro de la url
    }
  }
}
</script>
