<template>
    <section>
    <empty-board />
    <button @click="playBoard">Reproducir</button>
    <!--TODO playBoard-->
    <task-list />
    </section>
</template>

<script>
import EmptyBoard from '../components/EmptyBoard.vue'
import TaskList from '../components/TaskList.vue'
import {mapActions, mapGetters} from "vuex"
export default {
  name: "CreateBoard",
  components: { TaskList, EmptyBoard },
  computed: {
    ...mapGetters ('board',{
                tasks: "allTasksInBoard",
            }),
  },
  methods: {
    ...mapActions('crudBoard',["addBoard"])
        } 
}
</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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

</style>