import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BranchView from '../views/BranchView.vue'
import CarDetailsView from '../views/CarDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/branch/',
      name: 'branch',
      component: BranchView
    },
    {
      path: '/cars/:id',
      name: 'car-details',
      component: CarDetailsView
    }
  ]
})

export default router