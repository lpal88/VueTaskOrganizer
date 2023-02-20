export default {
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
                const res = await fetch('http://localhost:3001/api/users/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        name: name,
                        age: age,
                        email: email,
                        password: password
                    })
                })
                if (res.status === 401) {
                    await commit('setMessage', "El correo electrónico ya existe")
                }
                else{
                    await commit('setMessage', "¡Bienvenidx!")
                }
            } catch (error) {
                console.error(error.message);
            }
        },
    }
}