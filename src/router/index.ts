import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/cv',
    name: 'cv',
    component: () => import('../views/CurriculumVitae.vue'),
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/Skills.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
