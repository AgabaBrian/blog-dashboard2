<template>
  <form @submit.prevent="createPost">
    <input v-model="title" type="text" placeholder="Title" required />
    <textarea v-model="body" placeholder="Body" required></textarea>
    <button type="submit" :disabled="isSubmitting">Create Post</button>
    <div v-if="error" class="error">Error: {{ error }}</div>
    <div v-if="isSubmitting">Creating post...</div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: '',
      error: null,
      isSubmitting: false, // Track if the form is being submitted
    };
  },
  methods: {
    async createPost() {
      this.isSubmitting = true;
      this.error = null; // Reset error state
      try {
        const newPost = {
          title: this.title,
          body: this.body,
        };

        // Send POST request to the API
        const response = await this.$axios.post('/posts', newPost);
        // Redirect to the homepage or dashboard after successful post creation
        this.$router.push('/');
      } catch (err) {
        // Handle error and set error message
        console.error('Error creating post:', err);
        this.error = 'Failed to create post. Please try again later.';
      } finally {
        this.isSubmitting = false; // Reset submitting state after completion
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 10px;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>

  