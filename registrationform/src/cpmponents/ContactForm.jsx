import { useState } from "react"
import "../index.css"
export const ContactForm = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        password: ""
    });
    const handleInput = (e) => {
        const {name, value} = e.target;
        setContact((prev)=> {
            return {...prev, [name]: value}
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(contact)
    }

    return (
        <>
            {/* 1️⃣ send form data
            2️⃣ reload the page
            3️⃣ submit to the URL in action ( here we have no action - therefore to current page) */}
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>Contact Form</h1>

                    <label htmlFor="username">User Name</label>
                    <input
                        type='text'
                        name='username'
                        required
                        autoComplete="off"
                        value={contact.username}
                        onChange={handleInput}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type='email'
                        name='email'
                        required
                        autoComplete="off"
                        value={contact.email}
                        onChange={handleInput}
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        type="text"
                        name="message"
                        required
                        autoComplete="off"
                        rows="6"
                        value={contact.message}
                        onChange={handleInput}
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}
