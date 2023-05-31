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
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Edit',
      name: 'Edit',
      component: () => import('../components/editProfile.vue')
    },
    {
      path: '/Profiles',
      name: 'Profiles',
      component: () => import('../components/seeProfiles.vue')
    },
  ]
})

export default router
