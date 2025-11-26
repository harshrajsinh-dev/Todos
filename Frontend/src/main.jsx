import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import SiteContextProvider from './Context/SiteContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SiteContextProvider>
        <App />
      </SiteContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
