import { createWebHistory, createRouter } from 'vue-router'
import MainView from '../views/main/MainView.vue'
import MakeCard from '../views/makeCard/MakeCard.vue'

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView,
  },
  {
    path: '/make-card',
    name: 'MainCard',
    component: MakeCard,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
