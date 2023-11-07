<template>
    <div class="emptyBoard" >
      <ul class="list">
        <li v-for="(task,index) in tasks" 
        class="list__task" 
        :key="task.newid" 
        :index="index" 
        :draggable="true" 
        @dragstart="handleDragStart(index)" 
        @dragover="handleDragOver" 
        @drop="handleDrop(index)">
          <img :src="fetchImage(task.image)" />
          <button @click="removeTaskFromBoard(task.newid)">Borrar</button>
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
        urlPictograms: `http://localhost:3001/api/pictograms/`,
        draggedItem: null
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

      //EVENTOS DRAG&DROP:
      handleDragStart(index) {
        console.log(index)
        return this.draggedItem = index
      },

      handleDragOver(event) {
        return event.preventDefault()
      }, 

      handleDrop(index) {
        const droppedItem = this.tasks.splice(this.draggedItem, 1)[0]
        console.log(droppedItem)
        this.tasks.splice(index, 0, droppedItem)
        this.draggedItem = null
        this.modifyTasks(this.tasks)
      },
  
      ...mapActions('board', {
        removeTaskFromBoard: 'removeTaskFromBoard',
        modifyTasks: 'modifyTasks'
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