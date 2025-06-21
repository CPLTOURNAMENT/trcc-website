// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/global.css'; // optional if you use it

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // optional if using styles
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
