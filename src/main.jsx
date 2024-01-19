import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContextProvider } from './contexts/ToastContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContextProvider>
        <App/>
    </ToastContextProvider>
    
  </React.StrictMode>,
)
