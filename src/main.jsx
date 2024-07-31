import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cartContext.jsx'
import { FiltersProvider } from './context/FilterBooksContext.jsx'
import { AuthProvider } from './context/AuthContex.jsx'
import { ApiStatusProvider } from './context/ApiStatusContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ApiStatusProvider>
  <AuthProvider>
   
  <FiltersProvider>
  <CartProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartProvider>
  </FiltersProvider>
  
  </AuthProvider>
  </ApiStatusProvider>
 </BrowserRouter>
)
