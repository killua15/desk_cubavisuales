import Vue from 'vue'
import Router from 'vue-router'
import ListCategorias from '../components/Materiales/ListCategorias.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/list-categorias:id_tipo_material',
      //redirect: '/'
      name: 'list-categorias',
      component: require('@/components/Materiales/ListCategorias').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
