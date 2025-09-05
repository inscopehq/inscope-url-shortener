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
    initializeTables();
  }
});

// TODO: Design and implement your database tables
function initializeTables() {
  // Your task: Create the tables needed for a URL shortener service
  // Think about what data you need to store and how to structure it

  // db.run(`CREATE TABLE IF NOT EXISTS your_table_name (
  //   -- Define your columns here
  // )`);
}

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
