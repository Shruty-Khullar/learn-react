import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NormalVar } from './components/hooks/NormalVar.jsx'
import { StateAndHooks } from './components/hooks/StateAndHooks.jsx'
import { SiblingComponent, StateReRendering } from './components/hooks/StateReRendering.jsx'
import { M1, M2, M3, M4} from './components/hooks/UseStateWithObjects.jsx'
import {M6} from './components/hooks/DerivedState.jsx'
import {LiftingState} from './components/LiftingStateUp.jsx'

function App() {
  return (
    <>
     {/* <NormalVar /> */}
     {/* <StateAndHooks /> */}
     <StateReRendering />
     <SiblingComponent />
     <M1 />
     <M2 />
     <M3 />
     <M4 />
     <M6 />
     <LiftingState />
    </>
  )
}

export default App
