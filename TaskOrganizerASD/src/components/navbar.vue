<template>
  <div class="navbar__links">
    <router-link class="navbar__link" to="/">INICIO</router-link>
    <router-link class="navbar__link" to="/singup">REGISTRO</router-link>
    <router-link class="navbar__link" to="/login">MI ESPACIO</router-link>
    <button @click="handleSingOut" v-if="isLoggedIn">Cerrar Sesión</button>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import {useRouter} from "vue-router"
const router = useRouter()
const isLoggedIn = ref(false)
let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user){
      isLoggedIn.value = true
      console.log("logged")
    }else {
      isLoggedIn.value = false
    }  
  })
})
const handleSingOut = () => {
  signOut(auth).then(() => {
    console.log("cerrando sesion")
    router.push("/")
  })
}

</script>

<style scoped>

.navbar__links {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #2774EA;
  padding: 30px;

}

.navbar__link {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.navbar__link:hover {
  background-color:  #E4007C;
  color: #fff;
}

.navbar__link.active {
  background-color:#51d1f6;
  color: #fff;
}
button {
  justify-self: flex-end;
}

</style>
