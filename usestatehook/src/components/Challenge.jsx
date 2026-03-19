import { useState } from "react"
import './Challenge.css'

export const CounterChallenge = () => {
    const [count, setCount] = useState(0);
    const [steps, setSteps] = useState(1);
    return (
        <section className="card">
            <h1 className="title">useState Challenge</h1>
            <div className="row">
                <span className="count-value">Count: {count}</span>
            </div>
            <div className="row">
                <span>Steps</span>
                {/* e.target.value gives the current value of the input as a string. */}
                <input className="step-input" type="number" value={steps} onChange={(e)=>setSteps(Number(e.target.value))}/>
            </div>
            {/* {count>100 ? setCount(0) : count}
            {count<0 ? setCount(0) : count } */}
            <div className="btn-group">
                <button className="btn" onClick={()=>setCount(count+steps)} disabled={count>=100}>Increment</button>
                <button className="btn" onClick={()=>setCount(count-steps)} disabled={count<=0}>Decrement</button>
                <button className="btn" onClick={()=>setCount(0)}>Reset</button>
            </div>
        </section>
    )
}

// const result = setCount(count - 1)  // runs immediately
// onClick={result}                     // result is undefined
// When you write:
// jsxonClick={() => setCount(count - 1)}
// You're passing a function definition — not calling it. React stores that function and only calls it when the button is clicked.

// Simple analogy:
// js// Calling the function — runs now
// setCount(count - 1)

// // Defining a function — runs later when invoked
// () => setCount(count - 1)
// Think of () => as saying "do this later" rather than "do this now".
// This is why your component was crashing on render — setCount was firing during render, which updated state, which triggered another render, which fired setCount again → infinite loop.



// give an example where i can directky call fn in onclick

// 00:21
// When you have a pre-defined function reference that doesn't need any arguments:

// jsx
// const handleIncrement = () => setCount(count + steps)

// // ✅ directly passing the function reference — not calling it
// <button onClick={handleIncrement}>Increment</button>
// Why this works:

// js
// // These are identical in behaviour
// onClick={handleIncrement}
// onClick={() => handleIncrement()}
// React sees handleIncrement as a function and calls it on click.