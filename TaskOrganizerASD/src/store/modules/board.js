export default {
    namespaced: true,
    state: {
        board: {},
        tasks : []
    },
    mutations: {
        pushTaskToBoard(state, task) {
            const newTask = Object.assign({}, task) // HACE UNA COPIA DEL ITEM, SINO MODIFICA SIEMPRE EL OBJETO ORIGINAL
            newTask.newid = Math.floor(Math.random() * 99999999) // PARA QUE CADA ITEM EN EL BOARD TENGA UN ID ÚNICO
            state.tasks.push(newTask)
        },
        deleteTaskFromBoard(state, taskId) {
            state.tasks = state.tasks.filter(task => task.newid != taskId);
        },
        updateTasks(state, tasks) { // PARA ACTUALIZAR LA LISTA AL HACER DRAG&DORP
            state.tasks = tasks
        }
      
    },
    actions: {
 /*        async addBoard({ state }) {
            const response = await fetch('https://apitaskorganizer-production.up.railway.app/api/boards', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                state
                })
            })
        }, */
        addTaskToBoard({state, getters, commit, rootState, rootGetters}, task){
            const BoardTask = state.tasks.find(taskId => taskId === task.id)
            if (state.tasks.length >= 15){
                return
            } else if (!BoardTask){
                commit("pushTaskToBoard", task)
            }
        },
        removeTaskFromBoard({state, getters, commit, rootState, rootGetters}, taskId){
            commit("deleteTaskFromBoard", taskId)
        },
        modifyTasks ({state, getters, commit, rootState, rootGetters}, tasks) {
            commit("updateTasks", tasks)
        }
    },
    getters: {
        getAllBoardsByUser(state, user) {
            return state.boards.filter(board => board.userId === user.id)
        },
        allTasksInBoard(state, getters, rootState, rootGetters){ 
            return state.tasks.map(taskInBoard => {
                const task = rootState.board.tasks.find(task => task.id === taskInBoard.data)
                return {
                    id: taskInBoard.id,
                    newid : taskInBoard.newid,
                    image: taskInBoard.image
                }
            })
        },
        

    }
        // TODO update, delete, getters
    
}

        
