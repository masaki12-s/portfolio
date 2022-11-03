import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/portfolio',
    name: 'portfolio',
    component: HomeView
  },
  {
    path: '/portfolio/cv',
    name: 'cv',
    component: () => import('../views/CurriculumVitae.vue')
  },
  {
    path: '/portfolio/skills',
    name: 'skills',
    component: () => import('../views/Skills.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
