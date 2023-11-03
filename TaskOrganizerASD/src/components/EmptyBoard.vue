<template>
    <div class="emptyBoard">
      <ul class="list">
        <li v-for="task in tasks" :key="task.id" class="list__task">
          <img :src="fetchImage(task.image)" />
          {{ task.id }}
          <button @click="removeTaskFromBoard(task.id)">Borrar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        urlPictograms: `http://localhost:3001/api/pictograms/`
      }
    },

    computed: {
      ...mapGetters('board', {
        allTasksInBoard: 'allTasksInBoard'
      }),
      tasks() {
        return this.allTasksInBoard
      }
    },
    methods: {
      fetchImage(task) {
        return this.urlPictograms + task
      },
  
      ...mapActions('board', {
          removeTaskFromBoard: 'removeTaskFromBoard'
      })
    }
  }
  </script>
  

<style scoped>
.emptyBoard {
    width: 48%;
    height: 480px;
    background-color: #F2F2F2;
    box-shadow: 5px 5px 5px grey;
    margin-top: 50px ;
}

img {
    max-height: 150px;
    max-width: 150px;
}
  
</style>