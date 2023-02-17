<template>
    <div class="scrollable">
      <ul class="list">
        <li v-for="task in tasks" :key="task.id" class="list__task"><img :src=urlPictograms+task.image></li>
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
  margin-right: 5px;

}

.list__task {
  list-style: none;
}

.list__task img {
  width: 100%;
  height: auto;
}
.scrollable {
    height: 500px;
    width: 25%;
    overflow-y: scroll;
    margin-top: 50px;
    padding: 5px;


  }

  /* WebKit-based browsers */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2774EA;
    border-radius: 5px;
  }




</style>