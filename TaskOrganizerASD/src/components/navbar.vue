<template>
    <div>
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
div {
    height: 10vh;
    width: 100%;
    margin-top: 0;
}
.navbar__link {
 margin: 10px;
}
.router-link-active {
    color: darkcyan;
}

</style>
