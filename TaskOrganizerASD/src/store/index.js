import { createStore } from 'vuex'
import user from './modules/user'
import board from './modules/board'


const store = createStore({
    modules:{
      user,
      board,
    },})

export default store