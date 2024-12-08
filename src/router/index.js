import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BranchView from '@/views/BranchView.vue'
import CarDetailsView from '@/views/CarDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/branch/:id',
    name: 'branch',
    component: BranchView,
    props: true
  },
  {
    path: '/cars/:id',
    name: 'car-details',
    component: CarDetailsView,
    props: true
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition

    }
    else {
      return { top: 0 }
    }
  }
})

export default router