import { useState } from 'react'
import '../index.css'
export const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // const handleInput = (e) => {
    //     const { name, value } = e.target;
    //     switch(name){
    //         case 'username':
    //             setUserName(value);
    //             break;
    //         case 'password':
    //             setPassword(value)
    //             break;
    //     }
    // }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formatData = {
            username: userName,
            password: password
        }
        console.log(formatData)
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className='container'>
                    <h1>Login Form</h1>

                    <label>UserName</label>
                    <input
                        type='text'
                        name='username'
                        required
                        placeholder='Enter your user name'
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                    />

                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        required
                        placeholder='Enter a strong password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}
