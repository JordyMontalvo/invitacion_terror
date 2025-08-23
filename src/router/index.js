import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Trailer from '../views/Trailer.vue'
import Sinopsis from '../views/Sinopsis.vue'
import Galeria from '../views/Galeria.vue'
import Invitacion from '../views/Invitacion.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trailer',
    name: 'Trailer',
    component: Trailer
  },
  {
    path: '/sinopsis',
    name: 'Sinopsis',
    component: Sinopsis
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: Galeria
  },
  {
    path: '/invitacion',
    name: 'Invitacion',
    component: Invitacion
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 