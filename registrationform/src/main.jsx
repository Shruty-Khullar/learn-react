import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RegistrationFormHardWay from './cpmponents/RegistrationFormHardWay.jsx'
import RegistrationFormRightWay from './cpmponents/RegistrationFormRightWay.jsx'
import { LoginForm } from './cpmponents/LoginForm.jsx'
import { ContactForm } from './cpmponents/ContactForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RegistrationFormRightWay /> */}
    {/* <LoginForm /> */}
    <ContactForm />
  </StrictMode>,
)
