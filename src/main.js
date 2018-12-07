import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import Contacto from './Contacto.vue'
import RestauranteList from './RestaurantesList.vue'
import RestauranteTop from './RestauranteTop.vue'
import Restaurante from './Restaurante.vue'
import RestauranteAdd from './RestauranteAdd.vue'
import RestauranteEdit from './RestauranteEdit.vue'

Vue.use(VueRouter) //aquí cargamos la libreria de vue router

const routes = [ //en este arreglo vienen las rutas de nuestra aplicación 
  {path: '/crear-restaurante', name: 'crear-restaurante',   component: RestauranteAdd},
  {path: '/restaurante/:id', name: 'restaurante',   component: Restaurante},
  {path: '/editar-restaurante/:id', name: 'editar-restaurante',   component: RestauranteEdit},
  {path: '/restaurante-destacado/:id', name: 'restaurante-destacado', component: RestauranteTop}, //cuando vayamos a restaurante destacado vamos a tener que recibir un parametro por la url y le pasamos un parametro en la ruta con name
  {path: '/restaurantes', component: RestauranteList},
  {path: '/contacto', component: Contacto},
  {path: '/home', component: Home},
  {path: '/', component: Home}
];

const router = new VueRouter({ //creamos una instancia de VueRouter y ahi le pasamos las rutas del arreglo de arriba
  routes,
  mode: 'history' // history, es para permitir una navegación más optimizada
})


Vue.component('home', Home)
Vue.component('contacto', Contacto)
new Vue({
    router, //y  aquí tambien tenemos que pasarle la instancia router para que lo cargue el framework
    el: '#app',
    render: h => h(App)
})