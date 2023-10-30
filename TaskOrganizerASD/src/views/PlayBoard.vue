<template>
    <empty-board></empty-board>
    

</template>

<script>
import EmptyBoard from '../components/EmptyBoard.vue'
import {mapState, mapGetters} from "vuex"
import TaskList from '../components/TaskList.vue'
export default {
  name: "playBoard",
  components: { EmptyBoard, TaskList },
  computed: {
    ...mapState('board', ['tasks']),
    ...mapGetters ('board',{
                tasks: "allTasksInBoard",
            }),

  },
  

}
</script>

<style scoped>

</style>