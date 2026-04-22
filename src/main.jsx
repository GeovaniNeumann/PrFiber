import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'  // ADICIONE esta linha
import './App.css'        
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>      {/* ADICIONE estas linhas */}
      <App />
    </HelmetProvider>     {/* ADICIONE estas linhas */}
  </StrictMode>,
)