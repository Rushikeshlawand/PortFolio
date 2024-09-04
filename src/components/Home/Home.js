import React, { useState, useEffect } from 'react';
import './Home.css';  // Ensure you have this file for styles
import anotherImage from '../Images/my-image.jpg'; // Add path for new image

const Home = () => {
    const [text, setText] = useState("Software Engineer From India");

    useEffect(() => {
        const texts = [
            "I'm Software Engineer",
            "I'm Full Stack Developer",
            "I'm React Enthusiast",
            "I'm Lifelong Learner",
            "I'm Car Enthusiast",
            "I'm Front-End Developer",
        ];
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % texts.length;
            setText(texts[index]);
        }, 2000); // Change every 2 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="home">
            <div className="header">
                <img src={anotherImage} alt="Additional Image" className="additional-image" />
            </div>
            <div className="intro">
                <h1>Hello,<br />I'm Rushikesh Lawand</h1>
                <p>{text}</p> {/* Display the dynamic text */}
            </div>
        </section>
    );
};

export default Home;
