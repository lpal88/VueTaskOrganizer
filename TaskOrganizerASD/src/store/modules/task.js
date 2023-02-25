export default{
    namespace: true,
    state:{
/*         task: {}, */
        tasks: []
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks
        },
    },
    actions:{
        async getAllTasks({ state }) {
            const response = await fetch('https://apitaskorganizer-production.up.railway.app/api/tasks')
            const tasks = await response.json()
            await commit('setTasks', tasks)
        },
        // TODO getOneTask
    }

}