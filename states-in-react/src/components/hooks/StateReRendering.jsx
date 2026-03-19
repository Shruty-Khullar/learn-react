import { useState } from "react";

export const StateReRendering = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count+1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click</button>
            <ChildStateComponent />
        </>
    )
}

const ChildStateComponent = () => {
    console.log("child Component Changed")
    return (
        <>
            <h1>Hi, I am Child Component</h1>
        </>
    )
}

export const SiblingComponent = () => {
    console.log("sibling Component Changed")
    return (
        <>
            <h1>Hi, I am Sibling Component</h1>
        </>
    )
}