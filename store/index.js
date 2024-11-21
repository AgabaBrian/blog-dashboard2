export const state = () => ({
  user: null,  // Store user data (e.g., name, token)
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

export const actions = {
  async login({ commit }, { username, password }) {
    try {
      const res = await this.$axios.post('https://api.example.com/login', {
        username,
        password,
      })
      const { token, name } = res.data
      // Store user and token
      localStorage.setItem('authToken', token)
      commit('SET_USER', { name, token })
    } catch (error) {
      console.error("Error logging in:", error)
      throw new Error("Login failed")
    }
  },
  logout({ commit }) {
    localStorage.removeItem('authToken')
    commit('SET_USER', null)
  }
}
