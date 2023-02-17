<template>
    <div>
      <ul class="list">
        <li v-for="board in boards" :key="board.id" class="list-board">{{ board.label }}</li>
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
          const response = await fetch('http://localhost:3001/api/boards')
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

.list-board {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.list-board:last-child {
  border-bottom: none;
}
</style>