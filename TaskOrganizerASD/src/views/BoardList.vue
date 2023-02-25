<template>
    <div>
      <ul class="list">
        <li v-for="board in boards" :key="board.id" class="list__board">{{ board.label }}</li>
      </ul>
    </div>
  </template>
  
  <script>
import TaskList from '../components/TaskList.vue';
  export default {
  components: { TaskList },
    data() {
      return {
        boards: []
      };
    },
    mounted() {
      this.getData()
    },
    methods: {
      async getData() {
        try {
          const response = await fetch('https://apitaskorganizer-production.up.railway.app/api/boards')
          const data = await response.json()
          this.boards = data;
        } catch (error) {
          console.log(error)
        }
      },
    },
  };
  </script>


<style scoped>
.list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.list__board {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.list__board:last-child {
  border-bottom: none;
}
</style>