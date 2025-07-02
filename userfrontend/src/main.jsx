import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import Storecontextprovider from './context/Storecontext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Storecontextprovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </Storecontextprovider>
)
