import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { PomodoroProvider } from './context/PomodoroProvider.jsx'

createRoot(document.getElementById('root')).render(
  <PomodoroProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </PomodoroProvider>
)
