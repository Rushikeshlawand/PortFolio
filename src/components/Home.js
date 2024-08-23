// src/components/Home.js
import React from 'react';
import './Home.css';  // Ensure you have this file for styles

const Home = () => {
    return (
        <section id="home">
            <div className="intro">
                <h1>Welcome to My Portfolio</h1>
                <p>Hi, I'm Rushikesh Lawand, a Front-End Developer with a passion for creating interactive and responsive web applications.</p>
                <p>With experience in React, HTML, CSS, and JavaScript, I strive to build seamless user experiences and visually appealing interfaces. My goal is to leverage my skills to contribute to innovative projects and grow as a developer.</p>
            </div>
            <div className="cta">
                <h2>What I Do</h2>
                <ul>
                    <li><strong>Front-End Development:</strong> Building dynamic, responsive websites with React and modern web technologies.</li>
                    <li><strong>UI/UX Design:</strong> Crafting user-friendly interfaces that are both functional and aesthetically pleasing.</li>
                    <li><strong>Problem Solving:</strong> Tackling complex challenges and finding efficient solutions with my problem-solving skills.</li>
                </ul>
                <a href="#contact" className="contact-link">Get in Touch</a>
            </div>
        </section>
    );
};

export default Home;
