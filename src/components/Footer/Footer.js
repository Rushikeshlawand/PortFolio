// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import from solid icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Rushikesh Lawand. All rights reserved.</p>
                <div className="social-links">
                    <a href="mailto:rushikeshlawand@yahoo.com">
                        <FontAwesomeIcon icon={faEnvelope} /> 
                    </a>
                    <a href="https://github.com/rushikeshlawand" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/rushikesh-lawand" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} /> 
                    </a>
                    <a href="https://leetcode.com/rushikeshlawand" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCode} /> 
                    </a>
                    <a href="https://instagram.com/bhavdyaaa" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} /> 
                    </a>
                    <a href="https://twitter.com/RushikeshLawand" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} /> 
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
