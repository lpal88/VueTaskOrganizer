<template>
    <div>
      <ul class="list">
        <li v-for="item in items" :key="item.id" class="list-item">{{ item.label }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: []
      };
    },
    mounted() {
      this.getData()
    },
    methods: {
      async getData() {
        try {
          const response = await fetch('http:/localhost:3001/api/boards', {mode : 'no-cors'})
          const data = await response.json()
          this.items = data;
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

.list-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.list-item:last-child {
  border-bottom: none;
}
</style>