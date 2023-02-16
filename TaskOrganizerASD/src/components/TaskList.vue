<template>
    <h2>CLICKA EN EL PICTOGRAMA QUE NECESITES</h2>
    <button class="taskList__btn" @click="showHomeTasks">Home</button>
    <button class="taskList__btn" @click="showSchoolTasks">School</button>
    <button class="taskList__btn" @click="showOutsideTasks">Outside</button>
    <div v-if="home" class="taskList__home">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
    <div v-else-if="school" class="taskList__home">
        <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
        </ul>
    </div>
    <div v-else-if="outside" class="taskList__home">
        <ul>
            <li>*</li>
            <li>/</li>
            <li>-</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                home: false,
                school: false,
                outside: false
                }
  },
  methods: {
    showHomeTasks() {
        console.log("home tasks")
        this.home = true
        this.school = false
    },
    showSchoolTasks() {
        console.log("school tasks")
      this.home = false
      this.school = true
    },
    showOutsideTasks() {
        console.log("outside tasks")
      this.home = false
      this.school = false
      this.outside = true
    }
  }
        
    }
</script>

<style>
.taskList {
    border: 3px solid black;
    display:flex;
    flex-wrap: wrap;
}
.taskList__task {
    width: 45%;
}

.taskList__btn {

}

</style>