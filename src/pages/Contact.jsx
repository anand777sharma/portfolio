// import React from 'react'
// import { BsSend } from 'react-icons/bs'

// const Contact = () => {
//     return (
//         <article className="contact" data-page="contact">

//             <header>
//                 <h2 className="h2 article-title">Contact</h2>
//             </header>

//             <section className="mapbox" data-mapbox>
//                 {/* <figure> */}
//                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56961.73123754684!2d80.7973350281366!3d26.836510594960313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe5d323b520b%3A0x2f011730d8522686!2sRajajipuram%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1725487393405!5m2!1sen!2sin" width="400" height="400"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//             </section>

//             <section className="contact-form">

//                 <h3 className="h3 form-title">Contact Form</h3>

//                 <form action="https://api.web3forms.com/submit" method="POST" className="form" data-form>

//                     <div className="input-wrapper">
//                     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE"/>
//                         <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

//                         <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
//                     </div>

//                     <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

//                     <button className="form-btn" type="submit">
//                         <BsSend />
//                         <span>Send Message</span>
//                     </button>

//                 </form>

//             </section>

//         </article>
//     )
// }

// export default Contact


import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ fullname: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Disable the button and change the text to "Sending..."
        try {
            // const response = await axios.post('http://localhost:5000/send-mail', formData);
            const response = await axios.post('/.netlify/functions/send-mail', formData);
            alert(response.data.message);
            setFormData({ fullname: '', email: '', message: '' }); // Clear form fields
        } catch (error) {
            console.error(error);
            alert('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false); // Re-enable the button and reset the text
        }
    };

    return (
        <article className="contact" data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>
            <section className="mapbox" data-mapbox>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56961.73123754684!2d80.7973350281366!3d26.836510594960313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe5d323b520b%3A0x2f011730d8522686!2sRajajipuram%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1725487393405!5m2!1sen!2sin"
                    width="400"
                    height="400"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="fullname"
                            className="form-input"
                            placeholder="Full name"
                            required
                            value={formData.fullname}
                            onChange={handleChange}
                            disabled={isSubmitting} // Disable input while submitting
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isSubmitting} // Disable input while submitting
                        />
                    </div>
                    <textarea
                        name="message"
                        className="form-input"
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting} // Disable textarea while submitting
                    ></textarea>
                    <button className="form-btn" type="submit" disabled={isSubmitting}>
                        <BsSend />
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                </form>
            </section>
        </article>
    );
};

export default Contact;

