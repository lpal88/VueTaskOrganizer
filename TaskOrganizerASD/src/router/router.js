import {createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: '/',component: () => import('../views/Home.vue')},
    { path: '/login',component: () => import('../views/Login.vue')},
    { path: '/welcome', component: () => import('../views/Welcome.vue') },
    { path: '/singup',  component: () => import('../views/Singup.vue') },
    { path: '/create', component: () => import('../views/CreateBoard.vue') },
    { path: '/play', component: () => import('../views/PlayBoard.vue') },
    { path: '/list', component: () => import('../views/BoardList.vue') },
  ]
  
const router = createRouter({

history: createWebHashHistory(),
routes, 
linkActiveClass: 'active-link'
})

export default router