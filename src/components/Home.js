// src/components/Home.js
import React from 'react';
import './Home.css';  // Ensure you have this file for styles
import myImage from '../assets/images/my-image.jpg'; // Adjust the path as necessary
import anotherImage from '../assets/images/another-image.jpg'; // Add path for new image

const Home = () => {
    return (
        <section id="home">
            <div className="header">
                <img src={myImage} alt="Rushikesh Lawand" className="profile-image" />
                <img src={anotherImage} alt="Additional Image" className="additional-image" />
            </div>
            <div className="intro">
            <h1>Hello,<br />I'm Rushikesh Lawand</h1>
                <p>Software Engineer From India</p>
            </div>
        </section>
    );
};

export default Home;
