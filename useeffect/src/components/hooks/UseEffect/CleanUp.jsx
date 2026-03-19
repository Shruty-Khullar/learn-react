import { useState, useEffect } from "react";
export const CleanUp = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount((prev)=> prev+1);
        }, 1000)

        //cleanUp function to avoid memory leak
        return () => clearInterval(timer)
    }, [])
    return (
        <div className="contanier">
            <h1>My Subscribers on Youtube</h1>
            <div>{count}</div>
            <h1><b>Subscribers Realtime Counter</b></h1>
        </div>
    )
}