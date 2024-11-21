export default async (req, res) => {
    // Check if the request method is POST
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' })
    }
  
    try {
      // Parse request body
      const { username, password } = req.body
  
      // Ensure username and password are provided
      if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' })
      }
  
      // Simulate an API call or database check
      if (username === 'test' && password === 'password') {
        // Send success response with token and user data
        return res.status(200).json({
          token: 'your-jwt-token',
          user: { name: 'Bravis Agaba' }
        })
      } else {
        // If credentials are wrong, send unauthorized error
        return res.status(401).json({ error: 'Invalid credentials' })
      }
    } catch (error) {
      // Handle any server errors
      console.error('Server error:', error) // Log the error for debugging
      return res.status(500).json({ error: 'Internal server error' })
    }
  }