# InScope URL Shortener - Coding Exercise

Welcome to the InScope URL Shortener coding exercise! This repository contains a skeleton application with a React frontend, Express.js backend, and SQLite database. Your task is to implement a fully functional URL shortener service.

## 🎯 Exercise Overview

You'll be building a URL shortener service similar to bit.ly or tinyurl.com. The application should:

1. **Accept long URLs** and return shortened versions
2. **Redirect shortened URLs** to their original destinations
3. **Display a list** of previously shortened URLs
4. **Store data persistently** in a SQLite database

## 🏗️ Project Structure

```
inscope-url-shortener/
├── frontend/          # React application
│   ├── src/
│   │   ├── App.js     # Main component (modify this!)
│   │   └── ...
│   └── package.json
├── backend/           # Express.js API server
│   ├── server.js      # Main server file (add your endpoints!)
│   ├── database/
│   │   ├── connection.js  # Database setup (implement tables!)
│   │   └── schema.sql     # Example SQL schema
│   └── package.json
└── package.json       # Root package with dev scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation & Setup

1. **Fork this repository** to your own GitHub account:
   - Click the "Fork" button at the top-right of this GitHub page
   - This creates a copy under your GitHub account

2. **Clone your fork and install dependencies:**
   ```bash
   git clone https://github.com/[your-username]/inscope-url-shortener.git
   cd inscope-url-shortener
   npm run install-all
   ```

2. **Start the development servers:**
   ```bash
   npm run dev
   ```
   This starts both the React frontend (http://localhost:3000) and Express backend (http://localhost:3001) concurrently.

3. **Verify setup:**
   - Frontend: http://localhost:3000 (should show welcome page)
   - Backend: http://localhost:3001 (should show API documentation)


## 📋 Your Tasks (60-90 minutes)

### 1. Database Layer (15-20 minutes)
- [ ] Design and implement the data storage solution
- [ ] Set up the database schema and connections

### 2. Backend API (25-30 minutes)
- [ ] Build the server-side functionality for a URL shortener service
- [ ] Handle data persistence and retrieval

### 3. Frontend Interface (20-30 minutes)  
- [ ] Create the user interface for the URL shortener
- [ ] Connect the frontend to your backend API

### 4. Integration & Testing (5-10 minutes)
- [ ] Ensure the complete system works end-to-end

### 5. Bonus Features (Optional)
- [ ] Add any additional features you think would improve the service

## 🛠️ Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run client` - Start only the React frontend
- `npm run server` - Start only the Express backend
- `npm run install-all` - Install dependencies for all packages
- `npm run test-setup` - Verify that both servers are running correctly

## 🔧 Technical Considerations

Think about the fundamental requirements of a URL shortener:
- How do you store and retrieve URLs?
- How do you generate short, unique identifiers?
- How do you handle the core user workflows?
- What would make this a good user experience?

## 🎯 Success Criteria

Your implementation should:
1. ✅ Successfully shorten URLs and store them in the database
2. ✅ Redirect short URLs to their original destinations
3. ✅ Display a list of all shortened URLs in the React frontend
4. ✅ Handle errors gracefully (invalid URLs, database errors, etc.)
5. ✅ Work entirely offline without external services

## 💡 Tips

- The React app is configured to proxy API requests to the backend
- SQLite database file will be created automatically when you first run queries
- Use `console.log` for debugging

## 📊 What We're Looking For

### Technical Skills
- Database schema design and implementation
- RESTful API design and implementation
- React component structure and state management
- Error handling and validation
- Code organization and readability

### Problem Solving
- Approach to generating unique short codes
- Handling of edge cases and errors
- Understanding of the full stack flow

### Communication
- Ability to explain technical decisions
- Questions asked during implementation
- Clear thinking about trade-offs

Good luck! 🍀
