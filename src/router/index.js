import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ejemplor from '../views/Ejemplor.vue'
import Ejemplo2 from '../views/Ejemplo2.vue'
import Vfor from '../views/Vfor.vue'
import Vif from '../views/Vif.vue'
import Vmodel from '../views/Vmodel.vue'
import Von from '../views/Von.vue'
import Actualizar from '@/views/actualizar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Ejemplo2',
    component: Ejemplo2
  },
  {
    path: '/actualizar/:id',
    name: 'actualizar',
    component: Actualizar,
  },
  {
    path:'/Ejemplor',
    name:'Ejemplor',
    component:Ejemplor
  },
  {
    path:'/Ejemplo2',
    name:'Ejemplo2',
    component:Ejemplo2
  },
  {
    path:'/Vif',
    name:'Vif',
    component:Vif
  },
  {
    path:'/Vfor',
    name:'Vfor',
    component:Vfor
  },
  {
    path:'/Vmodel',
    name:'Vmodel',
    component:Vmodel
  },
  {
    path:'/Von',
    name:'Von',
    component:Von
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
