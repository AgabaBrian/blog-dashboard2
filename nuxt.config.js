export default {
  // Global page headers
  head: {
    title: 'blog-dashboard',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A blog dashboard for managing posts' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (Tailwind CSS setup)
  css: [
    '~/assets/css/tailwind.css', // Ensure Tailwind CSS is properly configured
  ],

  // Middleware for authentication
  router: {
    middleware: ['auth'], // Make sure you create an 'auth' middleware for authentication checks
  },

  // Plugins to run before rendering page
  plugins: [
    '~/plugins/auth.js', // Ensure that auth.js exists in the 'plugins' directory
  ],

  // Auto import components
  components: true,

  // Build and development modules
  buildModules: [
    '@nuxtjs/tailwindcss', // Tailwind CSS support in Nuxt
    '@nuxtjs/composition-api/module', // Composition API (useful for Vue 2)
  ],

  // Modules for HTTP requests
  modules: [
    '@nuxtjs/axios', // Axios module to make API requests
  ],

  // Axios configuration (API base URL and headers)
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com', // Base URL for the JSONPlaceholder API
    headers: {
      common: {
        Accept: 'application/json', // Accept JSON responses
      },
    },
  },

  // Build configuration
  build: {
    // You can add custom build configurations here if needed
  },

  // Environment variables (optional, for production use)
  env: {
    // Example: API URL stored in environment variable
    API_URL: process.env.API_URL || 'https://jsonplaceholder.typicode.com',
  },

  // Other configurations (if any)
};

