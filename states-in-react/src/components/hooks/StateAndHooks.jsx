import { useState } from "react"

export const StateAndHooks = () => {
    //const arr = useState(5)
    // [5, ƒ]0: 51: ƒ ()length: 2[[Prototype]]: Array(0)
    //console.log(arr);

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(()=> count+1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click</button>
        </>
    )
}