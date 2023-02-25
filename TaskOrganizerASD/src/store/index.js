import { createStore } from 'vuex'
import user from './modules/user'
import board from './modules/board'
import task from './modules/task'

const store = createStore({
    modules:{
      user,
      board,
      task
    },})

export default store