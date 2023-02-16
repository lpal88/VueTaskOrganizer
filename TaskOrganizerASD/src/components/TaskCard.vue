<template>
    <div class="task__card">
        <img :src="task.imgExample"  class="card__img" :alt="description">
        <p class="card__description">{{ task.description }}</p>
        <button class="card__btn" @click="addTask">
            <img src="../assets/images/addition.png" alt="">
        </button>
        <button v-if="task.inBoard" @click="deleteTask">Delete</button>
    </div>
</template>

<script>
    export default {
        data(){
           return {
            task : {
                imgExample : 'https://static.arasaac.org/pictograms/2262/2262_300.png',
                description: 'AUTOBÚS',
                inBoard: false
            },
            tasks: []
           }
        },
    methods: {
        addTask() {
            console.log(this.tasks)
            this.tasks.push(this.task)
            this.task.inBoard = true
           
        },
        deleteTask() {
            this.tasks = this.tasks.filter((t) => t !== this.task)
            console.log(this.tasks)
        }
    }
}
</script>

<style>
.task__card {
    box-shadow: 5px 5px 5px gray;
    background-color: lightgrey;
    padding:20px;
    width: 70%;

}
.card__img {
    background-color: white;
}

.card__description {
    text-align: center;
    font-family:'Open Sans', sans-serif;
    font-size: 2rem;
}


</style>