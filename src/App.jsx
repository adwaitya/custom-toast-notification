import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToastsContainer from './components/ToastsContainer'
import { useToast } from './hooks/useToast'

function App() {
  const toast = useToast();

  return (
    <>
     <div className="app">
      <div className="btn-container">
        <button
          className="success-btn"
          onClick={() => toast.success("Success toast notification")}
        >
          Success
        </button>
        <button
          className="info-btn"
          onClick={() => toast.info("Info toast notification")}
        >
          Info
        </button>
        <button
          className="warning-btn"
          onClick={() => toast.warning("Warning toast notification")}
        >
          Warning
        </button>
        <button
          className="error-btn"
          onClick={() => toast.error("Error toast notification")}
        >
          Error
        </button>
      </div>
    </div>
    </>
  )
}

export default App
