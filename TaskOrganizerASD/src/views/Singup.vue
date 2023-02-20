<template>
    <form @submit.prevent="singup({ name: this.name, age: this.age, email: this.email, password: this.password})">
        <label>NOMBRE
            <input name="name" v-model="name" type="text" required></label>
        <label>EDAD
            <input name="age" v-model="age" type="number"></label>
        <label>CORREO ELECTRÓNICO
            <input name="email" v-model="email" type="email" required></label>
        <label>CONTRASEÑA
            <input name="password" v-model="password" type="password" required></label>
        <label>CONFIRMAR CONTRASEÑA
            <input name="confirmPassword" v-model="confirmPassword" type="password" required></label>
        <button type="submit">REGISTRAR</button>
    </form>
    <span v-if="message"> {{ message }}</span>
</template>

<script>
import { mapState, mapActions } from "vuex"
    export default {
        data() {
        return {
            name:'',
            age: null,
            email: null,
            password: null,
            confirmPassword: '',
        }
    },
        computed:{
            ...mapState('user', {
                user: state => state.userData,
                message: state => state.message,
            }),
        },
        methods: {
            ...mapActions('user', {
                singup: "singup"
            })
    }
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