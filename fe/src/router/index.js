import { createWebHistory, createRouter } from 'vue-router'
import MainView from '../views/main/MainView.vue'
import MakeCard from '../views/makeCard/MakeCard.vue'
import EditProfile from '../views/editProfile/EditProfile.vue'
import AddSns from '../views/addSns/AddSns.vue'

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
  {
    path: '/edit-profile',
    name: 'EditProfile',
    component: EditProfile,
  },
  {
    path: '/add-sns',
    name: 'AddSns',
    component: AddSns,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
