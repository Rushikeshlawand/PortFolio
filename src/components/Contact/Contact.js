// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-content">
                <h2>Contact</h2>
                <div className="contact-form">
                    <h3>Send Me a Message</h3>
                    <form action="https://formspree.io/f/{your-form-id}" method="POST">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                        
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
