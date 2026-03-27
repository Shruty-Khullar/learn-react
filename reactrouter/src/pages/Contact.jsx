// Contact.jsx
import { useState } from 'react'
import './Contact.css'

export const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className="contact-container">
            <h2 className="contact-title">contact us</h2>
            <p className="contact-subtitle">Get in touch with us. We are always here to help you.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Abc@Thapa.Com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder="We Are Always Here To Help You"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                    />
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    )
}

