export default ({ store }) => {
  if (process.client) {
    const token = localStorage.getItem('authToken')
    if (token) {
      store.commit('SET_USER', { token })
    }
  }
}
