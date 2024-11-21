export default ({ $axios, store, redirect }) => {
    if (process.client) {
      const token = localStorage.getItem('token')
      if (token) {
        store.commit('setToken', token)
        $axios.setToken(token, 'Bearer') // Ensure the token is used correctly
      } else {
        redirect('/login') // Redirect to login if no token
      }
    }
  }
  
  
  
  