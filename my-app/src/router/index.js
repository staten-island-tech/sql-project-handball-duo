import { createRouter, createWebHistory } from 'vue-router'
import { useProductsStore } from '../lib/ProductStore'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/LoginPage.vue'),
      
    },
    {
      path: '/edit',
      name: 'Edit',
      component: () => import('../components/editProfile.vue'),
    },
   
  ]
})
router.beforeEach((to, from, next)=>{
const auth = useProductsStore();
if(
  to.matched.some((record)=> record.meta.requireLogin),
auth.loggedIn === false
  ){
    next("/login")
  }else{
    next()
  }


  }
  
);
export default router
