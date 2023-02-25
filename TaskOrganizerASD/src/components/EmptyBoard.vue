<template>
    <div class="emptyBoard">
      <ul class="list">
        <li v-for="task in tasks" :key="task.id" class="list__task">
          <img :src="fetchImage(task.image)" />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex'
  
  export default {
    data() {
      return {
        urlPictograms: `https://apitaskorganizer-production.up.railway.app/api/pictograms/`
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
        console.log(task)
        return this.urlPictograms + task
      }
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