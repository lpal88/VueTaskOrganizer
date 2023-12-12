<template>
    <div>
<button @click="this.slideBack()" :disabled="this.disableSlideback">Anterior</button>

{{ taskInProgress }}
<img :src="fetchImage(this.taskInProgress.image)" alt="" v-if="this.taskInProgress"> <!-- v-if para que no de error cuando se carga el html antes del computed -->
<button @click="this.slideNext()">Siguiente</button>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import {mapState, mapGetters} from "vuex"

export default defineComponent({
    data() {
        return {
            urlPictograms: `http://localhost:3001/api/pictograms/`,
            index: 0,
            disableSlideback: true
        }
    },
  name: 'Carousel',
  components: {
  },
  methods: {
        fetchImage(task) {
          return this.urlPictograms + task
        },
        slideNext() {
          this.index = this.index + 1
          this.disableSlideback = false
        },
        slideBack() {
          this.index = this.index - 1
          if(this.index == 0) {
            this.disableSlideback = true
          }
        },
       
    },
  computed: {
    ...mapState('board', ['tasks']),
    ...mapGetters ('board',{
                tasks: "allTasksInBoard",
            }),
    taskInProgress() {
      return this.tasks[this.index]
    }

  },
})
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
  
</style>