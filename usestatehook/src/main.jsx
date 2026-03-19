import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CounterChallenge } from './components/Challenge.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterChallenge />
  </StrictMode>,
)
