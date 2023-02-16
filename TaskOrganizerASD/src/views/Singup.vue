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
    height: 50vh;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

label {
    width: 40%;
}
button {
   margin-right: 50px;
}
</style>