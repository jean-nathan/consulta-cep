import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import QueryZipCode from '@/views/QueryZipCode.vue'


const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/consultar-cep',
    name: 'consultar-cep',
    component: QueryZipCode
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes 
})

export default router
