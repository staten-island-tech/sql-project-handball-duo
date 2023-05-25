import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/Register',
      name: 'Register',
      component: () => import('../components/Register.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login.vue')
    }
  ]
})

export default router
