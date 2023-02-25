<template>
    <div class="emptyBoard">
        <ul :tasks="tasks">
            <li v-for="task in tasks" :key="task.id"><img :src=urlPictograms+task.image></li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
            urlPictograms: "https://apitaskorganizer-production.up.railway.app/api/pictograms/"
        }
        },
        props: {
            tasks: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            ...mapGetters ('board',{
                tasks: "allTasksInBoard",
            }),
            
        }

    }
</script>

<style scoped>
.emptyBoard {
    display: flex;
    flex-wrap: wrap;
    width: 48%;
    height: 400px;
    background-color: #F2F2F2;
    box-shadow: 5px 5px 5px grey;
    margin-top: 50px ;
}
  
</style>