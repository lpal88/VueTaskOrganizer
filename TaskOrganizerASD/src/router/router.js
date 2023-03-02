import {createRouter, createWebHashHistory } from "vue-router"
import {getAuth, onAuthStateChanged} from "firebase/auth"

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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener(),
        resolve(user)
      },
      reject
    )
  })
}
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
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