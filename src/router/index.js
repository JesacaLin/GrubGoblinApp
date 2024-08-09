import { createRouter, createWebHistory } from 'vue-router'
import AuthenticationView from '@/views/AuthenticationView.vue'
import HomeView from '@/views/HomeView.vue'
import store from '@/store/index'
import DealDetailsView from '@/views/DealDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: AuthenticationView
    },

    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },

    {
      path: '/dealdetails/:dealId',
      name: 'DealDetails',
      component: DealDetailsView,
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/home' && !store.getters.isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
