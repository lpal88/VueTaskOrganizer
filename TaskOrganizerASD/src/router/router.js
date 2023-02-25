import {createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: '/',component: () => import('../views/Home.vue')},
    { path: '/login',component: () => import('../views/Login.vue')},
    { path: '/singup',  component: () => import('../views/Singup.vue') },
    { path: '/play', component: () => import('../views/PlayBoard.vue') },
    { path: '/list', component: () => import('../views/BoardList.vue') },
    { 
      path: '/create', 
      component: () => import('../views/CreateBoard.vue'),
      meta: {
        requiresAuth: true,
      }},
  ]
  
const router = createRouter({

history: createWebHashHistory(),
routes, 
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next()
    } else {
      alert("No tiene acceso")
      next("/")
    }

  } else {
    next()
  }
})
export default router