import { useState } from 'react';
import '../index.css'
export default function RegistrationFormHardWay() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    //whenever we are changing anything all fields are getting changed with that value
    // const handleInputChange = (e) => {
    //     console.log(e.target)
    //     setFirstName(e.target.value);
    //     setLastName(e.target.value);
    //     setEmail(e.target.value);
    //     setPassword(e.target.value);
    //     setPhoneNumber(e.target.value);
    // }
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        switch(name) {
            case 'firstName':
                setFirstName(value);
                break;

            case 'lastName':
                setLastName(value);
                break;

            case 'email':
                setEmail(value);
                break;
            
            case 'password':
                setPassword(value);
                break;
            
            case 'phoneNumber':
                setPhoneNumber(value);
                break;     
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName: firstName,
            lastName: lastName,
            //as key and value are of same name we can skip and use short notation
            email,
            password,
            phoneNumber
        }
        console.log(formData);
    }
    return (
        <>
            <p>My Name is {firstName} and email is {email}</p>
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
                        value={firstName}
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
                        value={lastName}
                        onChange={handleInputChange}
                    />

                    <label>
                        <b>Email</b>
                    </label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter your Email'
                        required
                        value={email}
                        onChange={handleInputChange}

                    />

                    <label>
                        <b>Password</b>
                    </label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter Password'
                        required
                        value={password}
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
                        value={phoneNumber}
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