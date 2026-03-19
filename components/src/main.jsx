import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { Practise } from './Practise.jsx'

// When Strict Mode is ON (development only), React:

// ✅ renders components twice
// ✅ runs functions twice
// ✅ checks for side-effects & bugs

// This helps developers catch mistakes early.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Practise />
  </StrictMode>,
)
