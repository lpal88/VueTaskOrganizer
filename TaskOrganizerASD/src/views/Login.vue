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
        <button type="submit">ENTRAR</button>
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