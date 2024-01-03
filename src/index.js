// Import necessary modules from React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create a root using createRoot, passing in the root element
const root = createRoot(rootElement);

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
