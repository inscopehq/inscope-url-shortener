# Interviewer Guide - InScope URL Shortener Exercise

## Overview
This coding exercise tests full-stack development skills through building a URL shortener service. The candidate will work with React, Express.js, and SQLite in a realistic development environment.

## Pre-Exercise Setup (5 minutes)
1. Ensure candidate has Node.js installed
2. Clone the repository and run `npm run install-all`
3. Start the servers with `npm run dev`
4. Verify setup with `npm run test-setup`

## Exercise Structure (60-90 minutes total)

### Phase 1: Database Design (15-20 minutes)
**What to look for:**
- Understanding of relational database concepts
- Appropriate field types and constraints
- Consideration of indexes for performance

**Key files to watch:**
- `backend/database/connection.js`
- `backend/database/schema.sql`

**Good signs:**
- Uses appropriate SQL data types
- Considers unique constraints on short codes
- Thinks about indexing for lookups
- Handles database connection errors

### Phase 2: Backend API Development (25-30 minutes)
**What to look for:**
- RESTful API design principles
- Error handling and validation
- Database integration
- Understanding of HTTP status codes

**Key files to watch:**
- `backend/server.js`
- `backend/utils/shortcode.js`
- `backend/utils/validation.js`

**Good signs:**
- Implements proper HTTP methods (POST for creation, GET for retrieval)
- Validates URLs before processing
- Handles database errors gracefully
- Uses appropriate HTTP status codes
- Implements unique short code generation

### Phase 3: Frontend Implementation (20-30 minutes)
**What to look for:**
- React component structure
- State management
- API integration
- User experience considerations

**Key files to watch:**
- `frontend/src/App.js`
- Any additional components they create

**Good signs:**
- Uses React hooks appropriately
- Handles loading and error states
- Makes proper API calls
- Considers user feedback (success/error messages)
- Implements responsive design basics

### Phase 4: Integration & Testing (5-10 minutes)
**What to look for:**
- End-to-end testing approach
- Debugging skills
- Edge case handling

## Key Technical Questions to Ask

### Database & Backend
1. "How would you ensure short codes are unique?"
2. "What happens if someone tries to shorten the same URL twice?"
3. "How would you handle very long URLs?"
4. "What security concerns should we consider?"

### Frontend
1. "How would you handle slow API responses?"
2. "What would you do if the API returns an error?"
3. "How would you make this mobile-friendly?"

### System Design
1. "How would this scale to handle millions of URLs?"
2. "What would you add for analytics and tracking?"
3. "How would you implement custom short codes?"

## Evaluation Rubric

### Technical Implementation (60%)
- **Database Design (20%)**: Proper schema, constraints, indexes
- **API Development (20%)**: RESTful design, error handling, validation
- **Frontend Development (20%)**: Component structure, state management, UX

### Problem Solving (25%)
- **Algorithm Design**: Short code generation approach
- **Edge Case Handling**: Invalid URLs, duplicates, errors
- **Debugging Skills**: Ability to troubleshoot issues

### Code Quality (15%)
- **Organization**: File structure, separation of concerns
- **Readability**: Clear variable names, comments where needed
- **Best Practices**: Following React/Express conventions

## Common Implementation Approaches

### Short Code Generation
1. **Random Generation**: Simple but requires collision checking
2. **Base62 Encoding**: Deterministic based on database ID
3. **Hash-based**: Using URL hash with collision handling

### Database Schema
```sql
CREATE TABLE urls (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  original_url TEXT NOT NULL,
  short_code TEXT UNIQUE NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  clicks INTEGER DEFAULT 0
);
```

### API Design
Candidates should design appropriate endpoints for:
- Creating short URLs from long URLs
- Retrieving/managing URLs
- Redirecting short codes to original URLs
- Handling errors and edge cases

## Red Flags to Watch For
- No input validation
- Poor error handling
- Hardcoded values instead of configuration
- No consideration for database errors
- Ignoring edge cases (empty inputs, invalid URLs)
- Poor separation of concerns

## Bonus Points
- URL validation beyond basic checks
- Custom short code support
- Click analytics
- Copy to clipboard functionality
- Responsive design
- Proper loading states

## Follow-up Discussion Topics
- Scaling strategies (caching, database sharding)
- Security considerations (rate limiting, malicious URLs)
- Analytics and monitoring
- Custom domains
- URL expiration
- Bulk URL shortening

## Time Management Tips
- If candidate is struggling with database setup, offer to help after 25 minutes
- If backend is taking too long, suggest focusing on core functionality
- If time is running short, prioritize end-to-end functionality over polish

## Success Indicators
By the end of the exercise, a successful candidate should have:
- ✅ Working database with proper schema
- ✅ Functional API endpoints
- ✅ React frontend that can create and display URLs
- ✅ End-to-end URL shortening and redirection
- ✅ Basic error handling

The exercise is designed to be challenging but achievable within the time limit. Focus on core functionality over perfect implementation.
