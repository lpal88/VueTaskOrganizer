<template>
    <navbar />
    <router-view :key="$route.path"/>
</template>

<script>
import Navbar from './components/navbar.vue'


  export default {
    components:  {Navbar}
}
</script>

<style scoped>

</style>