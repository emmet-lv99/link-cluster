import { createWebHistory, createRouter } from 'vue-router'
import MainView from '../views/main/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
