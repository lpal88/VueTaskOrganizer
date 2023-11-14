<template>
    <div>
        <div>
        <ul class="list">
            <li v-for="task in tasks" class="list__task" :key="task.newid">
                <img :src="fetchImage(task.image)" />
            </li>
        </ul>
        </div>
        <back-button @click="this.closeComponent"></back-button>
    </div>
</template>

<script>
import BackButton from './BackButton.vue'
import TaskList from '../components/TaskList.vue'
import {mapState, mapGetters} from "vuex"
export default {
    name: "playedBoard",
    components: { BackButton, TaskList },
    data() {
        return {
            urlPictograms: `http://localhost:3001/api/pictograms/`,
        }
    },
    methods: {
        closeComponent() {
            this.$emit("close") //envía un evento a un componente que lo engloba.
        },
        fetchImage(task) {
        return this.urlPictograms + task
      },
    },
    computed: {
    ...mapState('board', ['tasks']),
    ...mapGetters ('board',{
                tasks: "allTasksInBoard",
            }),

  },

}
</script>

<style lang="scss">
  
</style>