// Event handling in React means responding to user actions like:
// ✅ clicking a button
// ✅ typing in an input
// ✅ hovering over elements
// ✅ submitting a form
import './EventHandling.css'
export const EventHandling = () => {
    // function handleButtonClick(event) {
    //     alert("Hey I am onClick Event")
    //     console.log(event.target)
    // } 
    const handleButtonClick = (event) => {
        alert("Hey I am onClick Event");
        console.log(event)
        console.log(event.target)
    }
    const handleWelcomeUser = (user) => {
        alert(`Welcome, ${user}`);
    }
    return (
        <>  
            {/* Functional Component with Named function */}
            {/* ✔ React calls your function
            ✔ React passes the event object automatically
            ✔ no new function created each render
            ✔ better performance
            onClick = function(event) {
                handleButtonClick(event);
            } */}
            <div>
                 <button onClick={handleButtonClick}>Click Me</button>
            </div>
            <br />
            {/* 👉 When clicked → arrow function runs → calls your function
            ✔ a new function is created
            ✔ your function is called inside it
            ✔ event is NOT passed automatically
            ✔ slightly less efficient
            onClick = function() {
                handleButtonClick();
                } */}
            <div>
                <button onClick={(event) => handleButtonClick(event)}>Click me again</button>
            </div>
            <br />
            <div>
                {/* Inline Event Handler */}
                <button onClick={(event) => console.log(event) }>Inline Button</button>
            </div>
            <br /> 
             <div>
                {/* Whenever we want to pass arguments to a handler fn, we always use arrow fn instead of passing ref to fn */}
                <button onClick={() => handleWelcomeUser("Shruty") }>Inline Button</button>
            </div>
        </>
    )
}

//Props (short for properties) are how you pass data from one component to another in React.is it They make components reusable and dynamic.
//onClick is a  prop in react, handleClick → value passed to that prop React passes this prop to the button element and attaches the event handler.
// Q: 👉 Where does event come from? 
// we do NOT pass it manually. React automatically sends the event object to your handler when the event occurs.
// So when the button is clicked:
// 1️⃣ User clicks button
// 2️⃣ React detects the click
// 3️⃣ React creates an event object
// 4️⃣ React calls your function
// 5️⃣ React passes the event as the first argument
// It contains information about what happened.
// 🔍 Accessing the clicked element -> (event.target)

// React uses Synthetic Events. React wraps the browser event inside a SyntheticEvent for consistency across browsers.

// //        <div>
//                  <button onClick={handleButtonClick()}>Click Me</button>
//             </div>
//             handleButtonClick() is executed immediately when the component renders.




// onClick
// onClick is a React synthetic event handler prop.
// It maps to the browser’s native click DOM event.
// React listens for the click and triggers the handler.
// 👉 Type: event prop
// 👉 Expected value: a function reference

// 🔹 handleButtonClick
// handleButtonClick is a function reference defined in your component.
// It is passed to onClick as the event callback.
// React calls it when the click event occurs.
// Type: callback function