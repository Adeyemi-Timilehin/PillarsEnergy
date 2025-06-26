import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerPWA } from '../src/pwa.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

registerPWA((prompt) => (window.installPrompt = prompt));