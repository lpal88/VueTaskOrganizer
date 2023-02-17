<template>
    <div>
      <ul class="list">
        <li v-for="task in tasks" :key="task.id" class="list-task"><img :src=urlPictograms+task.image></li>
      </ul>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        tasks: [],
        urlPictograms: "http://localhost:3001/api/pictograms/"
      };
    },
    mounted() {
      this.getData()
    },
    methods: {
      async getData() {
        try {
          const response = await fetch('http://localhost:3001/api/tasks')
          const data = await response.json()
          this.tasks = data
        } catch (error) {
          console.log(error)
        }
      },
    },
  };
  </script>
  


<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 20px;
}

.list-task {
  list-style: none;
}

.list-task img {
  width: 100%;
  height: auto;
}
</style>