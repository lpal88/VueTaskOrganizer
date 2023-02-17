<template>
    <form>
        <label>NOMBRE
        <input type="text" v-model="name">
        </label>
        <p>{{ name }}</p>
        <label>CONTRASEÑA
        <input type="password" v-model="password">
        </label>
        <p>{{ name }}</p>
        <button type="submit"><router-link class="navbar__link" to="/list">ENTRAR</router-link></button>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                name: "",
                password: ""
            }
            
        }
        
    }
</script>

<style scoped>

</style>