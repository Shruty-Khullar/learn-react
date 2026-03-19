import { useRef } from "react"

export const UseRef = () => {
    const userName = useRef(null);
    const password = useRef(null);
    const SubmitButton = (e) => {
        e.preventDefault();
        console.log(userName.current.value)
        console.log(password.current.value)
    }
    return (
        <>
            <form onSubmit={SubmitButton}>
                <input type="text" placeholder="Enter Username" id='username' ref={userName}/>
                <br />
                <input type='password' placeholder="Enter Password" id='password' ref={password}/>
                <br />
                <button>Submit</button>
            </form>
        </>
    )
}


// 1️⃣ What happens during the first render
// const refHook = useRef(null);
// console.log(refHook.current)

// At this moment:
// refHook.current = null
// Because React has not yet created and attached the DOM elements.
// So the console prints:
// null

// 2️⃣ After React renders the DOM
// When React finishes rendering this:
// <input ref={refHook} />
// React assigns the DOM element to the ref:
// refHook.current = <input DOM element>
// But your console.log already ran earlier.

// Use useEffect, which runs after the component mounts.