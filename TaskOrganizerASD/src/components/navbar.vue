<template>
  <div class="navbar__links">
    <router-link class="navbar__link" to="/singup">Registro</router-link>
    <router-link class="navbar__link" to="/login">Mi espacio</router-link>
    <router-link class="navbar__link" to="/create">Crear un tablero</router-link>
  </div>
</template>

<script>
    export default {
        
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

</style>
