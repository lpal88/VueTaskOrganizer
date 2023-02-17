<template>
    <form>
        <label>NOMBRE
            <input type="text">
        </label>
        <label>EDAD
            <input type="number">
        </label>
        <label>CORREO ELECTRÓNICO
            <input type="email">
        </label>
        <label>CONTRASEÑA
            <input type="password">
        </label>
        <label>CONFIRMAR CONTRASEÑA
            <input type="password">
        </label>
        <button type="submit">REGISTRAR</button>
    </form>
</template>

<script>
    export default {
        
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