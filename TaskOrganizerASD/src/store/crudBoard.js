export default{
    namespace: true,
    state:{
        board: {},
    },
    actions:{
        async addBoardToUser({ state }) {
            const response = await fetch('http://localhost:3001/api/boards', {
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
        // TODO update, delete, getters
    }
}

        
