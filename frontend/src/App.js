import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>InScope URL Shortener</h1>
        <p>Welcome to the coding exercise!</p>
        <p>
          Your task is to build a URL shortener service with the following features:
        </p>
        <ul className="feature-list">
          <li>Accept a long URL and return a shortened version</li>
          <li>Redirect shortened URLs to their original destination</li>
          <li>Display a list of previously shortened URLs</li>
          <li>Store data in a database</li>
        </ul>
        <div className="placeholder">
          <p>🚧 This is where your URL shortener component will go! 🚧</p>
          <p>
            Create your components, connect to the API, and implement the functionality.
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
