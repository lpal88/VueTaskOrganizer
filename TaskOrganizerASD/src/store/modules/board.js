export default {
    namespaced: true,
    state: {
        board: {},
        tasks : []
    },
    mutations: {
        pushTaskToBoard(state, taskId) {
            taskId.id = Math.floor(Math.random() * 99999999) // PARA QUE CADA ITEM EN EL BOARD TENGA UN ID ÚNICO
            state.tasks.push(taskId)
        },
        deleteTaskFromBoard(state, taskId) {
            state.tasks = state.tasks.filter(task => task.id != taskId);
        },
      
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
            console.log(task)
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
                    image: taskInBoard.image
                }
            })
        },
        

    }
        // TODO update, delete, getters
    
}

        
