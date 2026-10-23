import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(

  <AuthProvider>

    <BrowserRouter>
      <StrictMode>

        <ThemeProvider>
          <ProductProvider>

            <App />
          </ProductProvider>

        </ThemeProvider>

      </StrictMode>
    </BrowserRouter>

  </AuthProvider>

)
