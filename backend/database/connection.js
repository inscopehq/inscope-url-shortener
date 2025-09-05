const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Database file path
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'urls.db');

// Create database connection
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('📁 Connected to SQLite database at:', DB_PATH);
    
    // TODO: Initialize your database tables here!
    // Example:
    // initializeTables();
  }
});

// TODO: Implement your database initialization function
// function initializeTables() {
//   // Create your tables here
//   // Example:
//   // db.run(`CREATE TABLE IF NOT EXISTS urls (
//   //   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   //   original_url TEXT NOT NULL,
//   //   short_code TEXT UNIQUE NOT NULL,
//   //   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//   //   clicks INTEGER DEFAULT 0
//   // )`);
// }

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
});

module.exports = db;
