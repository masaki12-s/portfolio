import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/portfolio',
    name: 'portfolio',
    component: HomeView
  },
  {
    path: '/works',
    name: 'works',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Works.vue')
  },
  {
    path: '/cv',
    name: 'cv',
    component: () => import('../views/CurriculumVitae.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
