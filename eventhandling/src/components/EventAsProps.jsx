export const EventAsProp = () => {
    function handleWelcomeUser(user) {
        alert(`Hey, ${user}`)
    }
    const handleHover = ()=> {
        alert(`Hey thanks for hovering`)
    }
    return (
        <>
        {/* You are not sending an event handler yet
        👉 You are sending a function via props
        👉 It becomes an event handler only when it is attached to an event like onClick */}
        {/* Here we can name anything to onCLick and onMouseEnter as they are not event props they are just fncs being passed */}
            <WelcomeUser 
                onClick={()=>handleWelcomeUser("Shruty")}
                onMouseEnter={handleHover}
            />
        </>
    )

}

const WelcomeUser = (props) => {
    const {onClick, onMouseEnter} = props;
    const handleGreetings = () => {
        alert(`Hi User, Greetings`)
    }
    return (
        <>
            <div>
                <button onClick={onClick}>Click Me</button>
            </div>
            <br />

            <div>
                <button onMouseEnter={onMouseEnter}>Hover</button>
            </div>
            <br />

            <div>
                <button onClick={handleGreetings}>Greetings</button>
            </div>
            
        </>
    )
}


// In React:

// 👉 props (short for properties) is an object that contains data passed from a parent component to a child component.
// 🔹 In your parent component
// <WelcomeUser 
//     onClick={() => handleWelcomeUser("Shruty")}
//     onMouseEnter={handleHover}
// />

// Here you are passing two props:
// onClick
// onMouseEnter

// So React creates an object like:

// {
//   onClick: () => handleWelcomeUser("Shruty"),
//   onMouseEnter: handleHover
// }
// and sends it to WelcomeUser.

// Destructuring props
// const { onClick, onMouseEnter } = props;

// This extracts values from the object:

// Equivalent to:
// const onClick = props.onClick;
// const onMouseEnter = props.onMouseEnter;