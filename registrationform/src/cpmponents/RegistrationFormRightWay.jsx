import { useState } from 'react';
import '../index.css'
export default function RegistrationFormRightWay() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""
    });

    const handleInputChange = (e) => {
        const {value, name} = e.target;
        // here [name] is applied to hightlight difference is about dynamic property names vs literal property names.
        //The square brackets tell JavaScript: use the value stored in the variable name and not the literal word "name"
        //If name is firstName and value is Shruty it will set firstName: "Shruty"
        //If we do name: value, it will add a new property to an object name: "Shruty"
        setUser((prev)=>({...prev, [name]: value}))
        
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return (
        <>
            <p>My Name is {user.firstName} and user.email is {user.email}</p>
            <form onSubmit={handleFormSubmit}>
                <div className='container'>
                    <h1>Sign Up</h1>
                    <p>Please fill in the form to create an Account</p>

                    <label>
                        <b>First Name</b>
                    </label>
                    <input 
                        type='text'
                        name="firstName"
                        placeholder='Enter first name'
                        required
                        value={user.firstName}
                        onChange={handleInputChange}
                    />

                    <label>
                        <b>Last Name</b>
                    </label>
                    <input
                        type='text'
                        name='lastName'
                        placeholder='Enter Last Name'
                        required
                        value={user.lastName}
                        onChange={handleInputChange}
                    />

                    <label>
                        <b>user.email</b>
                    </label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        required
                        value={user.email}
                        onChange={handleInputChange}

                    />

                    <label>
                        <b>user.password</b>
                    </label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        required
                        value={user.password}
                        onChange={handleInputChange}
                    />
                    
                    <label>
                        <b>Phone Number</b>
                    </label>
                    <input
                        type='phone'
                        name='phoneNumber'
                        placeholder='Enter your phone number'
                        required
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                    />

                    <p>
                       By creating an account you agree to our  
                       <a href="#" style={{ color: "dodgerblue" }}>
                            Terms & Privacy
                        </a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>


                </div>
            </form>
        </>
    )
}