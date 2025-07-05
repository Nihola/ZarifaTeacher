import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n';
import { RouterProvider } from 'react-router-dom'
import { Router } from './routers/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={Router}/>
  </StrictMode>,
)
