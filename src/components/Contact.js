import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Use solid icons

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-content">
                <h2>Contact</h2>
                <div className="contact-info">
                    <p>Email: <a href="mailto:rushilawand0@gmail.com">rushikeshlawand@yahoo.com</a></p>
                    <p>GitHub: <a href="https://github.com/rushikeshlawand" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} /> github.com/rushikeshlawand
                    </a></p>
                    <p>LinkedIn: <a href="https://linkedin.com/in/rushikesh-lawand" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} /> linkedin.com/in/rushikesh-lawand
                    </a></p>
                    <p>LeetCode: <a href="https://leetcode.com/rushikeshlawand" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCode} /> leetcode.com/rushikeshlawand
                    </a></p>
                </div>
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
