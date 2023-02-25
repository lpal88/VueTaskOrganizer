<template>
    <div class="emptyBoard">
        <ul>
            <li v-for="task in tasks" :key="task.id">{{ task.image }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            tasks: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>

.emptyBoard {
    display: flex;
    flex-wrap: wrap;
    width: 48%;
    height: 400px;
    background-color: #F2F2F2;
    box-shadow: 5px 5px 5px grey;
    margin-top: 50px ;
}

  

</style>