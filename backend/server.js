const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection (to be implemented)
// const db = require('./database/connection');

// Routes placeholder
app.get('/', (req, res) => {
  res.json({
    message: 'InScope URL Shortener API',
    status: 'Server is running!',
    instructions: [
      'This is the backend API for the URL shortener coding exercise.',
      'Your task is to design and implement the API endpoints needed for:',
      '- Creating shortened URLs from long URLs',
      '- Managing and retrieving shortened URLs',
      '- Redirecting short codes to their original destinations',
      'You will also need to set up the database tables and implement the logic.',
      'Think about what endpoints make sense for this service!'
    ]
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// TODO: Design and implement your API endpoints here!
// Think about:
// - What endpoints do you need for a URL shortener service?
// - What HTTP methods make sense for each operation?
// - How should you structure your routes?
// - What data should each endpoint return?
//
// Some ideas to consider:
// - How do users create short URLs?
// - How do users see their shortened URLs?
// - How do short URLs redirect to the original?
// - What about error handling?

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📖 Visit http://localhost:${PORT} for API documentation`);
});
