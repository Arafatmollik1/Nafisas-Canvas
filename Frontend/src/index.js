

import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter } from 'react-router-dom'; 
import App from './App';
import './index.css';

const container = document.getElementById('root'); // Get the root container
const root = createRoot(container); // Create a root

root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
