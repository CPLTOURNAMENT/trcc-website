// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Optional styles
import './index.css';           // Tailwind or base styles (if you use Tailwind)
import './styles/global.css';  // Your own global CSS (optional)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
