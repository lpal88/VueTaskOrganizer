export default {
    namespace: true,
    state: {
        board: {},
        tasks : []
    },
    mutations: {
        pushTaskToBoard(state, taskId) {
            state.tasks.push(taskId)
        },
      
    },
    actions: {
        async addBoard({ state }) {
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
        },
        addTaskToBoard({state, getters, commit, rootState, rootGetters}, task){
            console.log(task)
            const BoardTask = state.tasks.find(taskId => taskId === task.id)
            if (!BoardTask){
                commit("pushTaskToBoard", task.id)

            }
        },
    },
    getters: {
        getAllBoardsByUser(state, user) {
            return state.boards.filter(board => board.userId === user.id)
        },
        allTasksInBoard(state, getters, rootState, rootGetters){ 
            return state.tasks.map(taskInBoard => {
                const task = rootState.tasks.tasks.find(task => task.id === taskInBoard)
                return {
                    image: task.image
                }
            })
        },
        

    }
        // TODO update, delete, getters
    
}

        
