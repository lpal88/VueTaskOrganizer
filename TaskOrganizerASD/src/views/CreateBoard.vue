<template>
    <section>
    <PlayedBoard @close="this.playedBoard = false" v-show="this.playedBoard" />
    <EmptyBoard :tasks="tasks" v-show="!this.playedBoard"/>
    <div class="buttons" v-show="!this.playedBoard">
      <button class="button" @click="playBoard()">Reproducir</button>
      <router-link class="button" to="/login"  >Guardar</router-link>
    </div>
    <TaskList @addTaskToBoard="addTaskToBoard" v-show="!this.playedBoard"/>

    </section>
</template>

<script>
import EmptyBoard from '../components/EmptyBoard.vue'
import TaskList from '../components/TaskList.vue'
import PlayedBoard from '../components/PlayedBoard.vue'
import {mapActions, mapState, mapGetters} from "vuex"

export default {
  data() {
      return {
        playedBoard: false,
      }
    },

  name: "CreateBoard",

  components: { TaskList, EmptyBoard, PlayedBoard },

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