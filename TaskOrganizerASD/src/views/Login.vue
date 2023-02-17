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
form {
  display: flex;
  flex-direction: wrap;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;
  padding: 50px;
  border-radius: 5px;

}

label {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 5px;
  color: #2774EA;
  padding: 10px;
}

input {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color:#2774EA;
  font-size: 16px;
  padding: 10px;
  margin: 20px;
  border: 1px solid #51d1f6;
  border-radius: 5px;
  transition: #E4007C 0.3s ease;
}

input:focus {
  border-color: #2774EA;
}

button {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  padding: 10px 20px;
  margin: 30px;
  color: #fff;
  background-color: #2774EA;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #E4007C;
}

button:active {
  transform: translateY(1px);
  box-shadow: none;
}

.navbar__link {
    text-decoration: none;
    color: #fff;
}

</style>