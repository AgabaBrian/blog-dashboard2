<template>
  <div>
    <h1>Blog Posts</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="!loading && posts.length">
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import usePosts from '~/composables/usePosts'

export default {
  setup(context) {
    // Ensure you pass context here so composable can access $axios
    const { posts, loading, error, fetchPosts } = usePosts()

    // Fetch posts when component is setup
    fetchPosts(context)  // Pass context to the composable

    return { posts, loading, error }
  },
}
</script>






