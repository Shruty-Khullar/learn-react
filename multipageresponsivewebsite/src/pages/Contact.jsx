export const Contact = () => {
    const handleFormSubmit = (formData) => {
        console.log(formData)
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container ">
                <form action={handleFormSubmit}>
                    <input
                        type='text'
                        required
                        autoComplete="off"
                        placeholder="Enter Your Name"
                        name="username"
                    />
                    <input
                        type='email'
                        required
                        className="form-control"
                        name='email'
                        placeholder="Enter Your Email"
                        autoComplete="off"
                    />
                    <textarea
                        className="form-control"
                        name= 'message'
                        rows='10'
                        placeholder="Enter Your Message"
                        required
                        autoComplete="false"
                    >
                    </textarea>
                    <button type="submit" value="send">Send</button>
                </form>
            </div>
        </section>
    )
}