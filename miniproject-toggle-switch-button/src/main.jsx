import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToggleSwitch, ToggleSwitch2 } from './ToggleSwitch'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleSwitch />
    {/* <ToggleSwitch2 /> */}
  </StrictMode>,
)
