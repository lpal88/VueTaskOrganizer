<template>
    <div>
        <Carousel>
            <Slide v-for="task in tasks" :key="task.newid">
                <div class="carousel__item">
                    <img :src="fetchImage(task.image)" />
                </div>
            </Slide>

            <template #addons>
            <Navigation />
            <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import {mapState, mapGetters} from "vuex"
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    data() {
        return {
            urlPictograms: `http://localhost:3001/api/pictograms/`,
        }
    },
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
        fetchImage(task) {
        return this.urlPictograms + task
        },
    },
  computed: {
    ...mapState('board', ['tasks']),
    ...mapGetters ('board',{
                tasks: "allTasksInBoard",
            }),

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