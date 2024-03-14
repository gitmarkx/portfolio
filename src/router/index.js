import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {title: 'Mark Maata | Portfolio'}
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Mark Ariel | Portfolio';
  next();
})

export default router
