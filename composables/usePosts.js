// composables/usePosts.js
import { ref, useContext } from '@nuxtjs/composition-api'

export default function usePosts() {
  const { $axios } = useContext()  // Get $axios directly from the context
  const posts = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchPosts = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await $axios.get('/posts') // Use $axios directly
      posts.value = response.data
    } catch (err) {
      error.value = 'Failed to fetch posts.'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    posts,
    loading,
    error,
    fetchPosts
  }
}



