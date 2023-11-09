<template>
    <section>
    <PlayedBoard v-show="playedBoard" />
    <EmptyBoard :tasks="tasks" />
    <div class="buttons">
      <router-link class="button" to="/play">Reproducir</router-link>
      <router-link class="button" to="/login"  @click="playBoard()">Guardar</router-link>
    </div>
    <TaskList @addTaskToBoard="addTaskToBoard" />

    </section>
</template>

<script>
import EmptyBoard from '../components/EmptyBoard.vue'
import TaskList from '../components/TaskList.vue'
import {mapActions, mapState, mapGetters} from "vuex"

export default {
  data() {
      return {
        playedBoard: false,
      }
    },

  name: "CreateBoard",

  components: { TaskList, EmptyBoard },

  computed: {
    ...mapState('board', ['tasks']),
    ...mapGetters ('board',{
                tasks: "allTasksInBoard",
            }),
  },

  methods: {
    ...mapActions('crudBoard',["addBoard"]) ,
    ...mapActions('board', ['addTaskToBoard']),

    playBoard() {
      this.playedBoard = true
    }
}
}
</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.buttons {
  align-self: flex-end;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-end;
}
.button {
  width: 40%;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  padding: 10px 20px;
  margin: 30px;
  color: #fff;
  background-color: #2774EA;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: #E4007C;
}

.button:active {
  transform: translateY(1px);
  box-shadow: none;
}

</style>