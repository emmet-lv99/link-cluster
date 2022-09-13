import { createWebHistory, createRouter } from 'vue-router'
import InitialUserId from '../views/initialUserId/InitialUserId.vue'
import InitialUserPath from '../views/initialUserPath/InitialUserPath.vue'
import MainView from '../views/main/MainView.vue'
import MakeCard from '../views/makeCard/MakeCard.vue'
import EditProfile from '../views/editProfile/EditProfile.vue'
import AddSns from '../views/addSns/AddSns.vue'
import PreviewPage from '../views/previewPage/PreviewPage.vue'

const routes = [
  {
    path: '/',
    name: 'InitialUserId',
    component: InitialUserId,
  },
  {
    path: '/path',
    name: 'InitialUserPath',
    component: InitialUserPath,
  },
  {
    path: '/main',
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
  {
    path: '/preview-page',
    name: 'PreviewPage',
    component: PreviewPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
