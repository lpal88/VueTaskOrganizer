export default {
    namespaced: true,
    state() {
        return {
            userData: null,
            message: null,
        }
    },
    mutations: {
        setUser(state, user) {
            state.userData = user
        },
        setMessage(state, message){
            state.message = message
        }
    },
    actions: {
        async singup({ commit }, { name, age, email, password }) {
            try {
                const response = await fetch('http://localhost:3001/api/users/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        name: name,
                        age: age,
                        email: email,
                        password: password
                    })
                })
                if (response.status === 401) {
                    await commit('setMessage', "El correo electrónico ya existe")
                }
                else{
                    await commit('setMessage', "¡Bienvenidx!")
                }
            } catch (error) {
                console.error(error.message)
            }
        },
        async login({ commit }, { name, password }) {
            try {
                const response = await fetch('http://localhost:3001/api/users/login', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        name: name,
                        password: password
                    })
                })
                if (response.status !== 200) {
                    await commit('setMessage', "Los datos no son correctos")
                }
                else{
                    const data = await response.json()
                    const user = data.user
                    await commit('setUser', user)
                    await commit('setMessage', "Iniciando sesión...")
                }
                
            }
            catch (error) {
                console.error(error.message)
            }
        },
    }
}