<template>
    <section>
    <empty-board />
    <task-list />
    </section>
</template>

<script>
import EmptyBoard from '../components/EmptyBoard.vue'
import TaskList from '../components/TaskList.vue'
    export default {
  components: { TaskList, EmptyBoard },
        
    }
</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>