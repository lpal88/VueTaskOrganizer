<template>
    <form>
        <label>CORREO ELECTRÓNICO
            <input name="email" v-model="email" type="email" required></label>
        <label>CONTRASEÑA
            <input name="password" v-model="password" type="password" required></label>
        <button @click="register" >REGISTRAR</button>
    </form>
</template>

<script setup>
import {ref} from "vue"
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {useRouter} from "vue-router"
const email = ref("")
const password = ref("")
const router = useRouter()

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log(auth.currentUser)
        router.push('/login')
    })
    .catch((error) => {
        console.log(error.code)
        alert(error.message)
    })
}

</script>

<style scoped>

 form {
        font-family: 'Open Sans', sans-serif;

    }

    label {
        display: block;
        margin: 20px;
        font-weight: bold;
        color: #2774EA;
    }

    input {
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #F2F2F2;
    }

    input:focus {
        outline: none;
        box-shadow: 0 0 3px #51d1f6;
    }

    button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background-color: #E4007C;
        color: #FFFFFF;
        font-weight: bold;
        text-transform: uppercase;

    }

    button:hover {
        background-color: #ff2d81;
        cursor: pointer;
    }
</style>