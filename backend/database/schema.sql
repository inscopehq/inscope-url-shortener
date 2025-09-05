-- URL Shortener Database Schema
-- This file contains example SQL for the tables you might need
-- Your task is to implement these tables and any additional ones you need

-- Example table structure for storing URLs
-- TODO: Uncomment and modify as needed

-- CREATE TABLE IF NOT EXISTS urls (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   original_url TEXT NOT NULL,
--   short_code TEXT UNIQUE NOT NULL,
--   created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--   clicks INTEGER DEFAULT 0
-- );

-- You might also want to add indexes for better performance:
-- CREATE INDEX IF NOT EXISTS idx_short_code ON urls(short_code);
-- CREATE INDEX IF NOT EXISTS idx_created_at ON urls(created_at);

-- Additional tables you might consider:
-- - Analytics/tracking table
-- - User sessions (if you want to track per-user URLs)
-- - Rate limiting table
