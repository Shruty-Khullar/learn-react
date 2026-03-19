import { useEffect, useState } from 'react'
import './index.css'
export const EffectChallenge = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(()=>{
        console.log(`My name is ${name}`)
    },[name])
    useEffect(()=>{
        document.title = `Count: ${count}`
    },[count])
    return (
        <div className="container effect-container">
            <h1>useEffect Challenge</h1>
            <p>
                Count: <span>{count}</span>
            </p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <p>
                Name: <span>{name}</span>
            </p>
            <input  
                type='text'
                required 
                name='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
        </div>    
    )
}

// Why are we using useEffect here? Why not just call setInterval directly?
// eg: function Counter() {
//   const [count, setCount] = useState(0);

//   setInterval(() => {
//     setCount(prev => prev + 1);
//   }, 1000);

//   return <h1>{count}</h1>;
// }

// Problem:
// Every time the component re-renders:
// setInterval runs again

// A NEW interval is created
// Multiple timers start running
// After 5 renders → 5 intervals
// After 10 renders → 10 intervals
// Your counter will go crazy 😅

// Why does this happen?

// Because React functions
// 👉 Run again on every render.
// Functional components are just functions.
// So anything outside useEffect runs every render.

// useEffect(() => {
//   const timer = setInterval(() => {
//     setCount(prev => prev + 1);
//   }, 1000);

//   return () => clearInterval(timer);
// }, []);
// [] means run only once (on mount)
// Interval created once
// Cleanup removes it on unmount
// Perfect control.

// Why React designed it this way
// React wants:
// Rendering → pure
// Side effects → separated
// setInterval is a side effect.
// Side effects must go inside useEffect.
// 👉 A side effect is anything your component does that affects something outside the render process.
// If your code changes something outside React’s UI calculation, it’s a side effect.