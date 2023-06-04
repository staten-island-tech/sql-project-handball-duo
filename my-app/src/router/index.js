import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    
    {
      path: '/Edit',
      name: 'Edit',
      component: () => import('../components/editProfile.vue')
    },
   
  ]
})

export default router
