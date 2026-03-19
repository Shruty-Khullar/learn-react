import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { EffectChallenge } from './components/hooks/UseEffect/EffectChallenge.jsx'
import { CleanUp } from './components/hooks/UseEffect/CleanUp.jsx'
import { HowNotToFetchAPi } from './components/hooks/UseEffect/HowNotToFetchApi.jsx'
import { HowToFetchAPi } from './components/hooks/UseEffect/HowToFetchAPI.jsx'
import { HowToFetchAPIPokemon } from './components/hooks/UseEffect/HowToFetchAPIPokemon.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <EffectChallenge /> */}
    {/* <CleanUp /> */}
    {/* <HowNotToFetchAPi /> */}
    {/* <HowToFetchAPi /> */}
    <HowToFetchAPIPokemon/>
  </StrictMode>,
)
