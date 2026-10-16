import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { NoteProvider } from './context/NoteContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 

    <AuthProvider>
      <NoteProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
      </NoteProvider>
     </AuthProvider>
  
   
  </StrictMode>,
)
