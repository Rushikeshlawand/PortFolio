// src/components/About.js
import React from 'react';
import './About.css'; // Optional: Create a CSS file for additional styling

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <p>
                Hello! I’m Rushikesh Lawand, a passionate front-end web developer with expertise in creating responsive and user-friendly designs. 
                I have a keen interest in technology and constantly strive to enhance my skills and knowledge in web development.
            </p>
            <h3>Education</h3>
            <div className="education">
                <div className="edu-item">
                    <h4>B.Tech in Computer Science & Engineering</h4>
                    <p>MIT College Of Railway Engineering & Research Barshi</p>
                    <p>CGPA: 9.07</p>
                </div>
                <div className="edu-item">
                    <h4>Diploma in Computer Engineering</h4>
                    <p>Institute Of Petrochemical Engineering Lonere</p>
                    <p>CGPA: 7.92</p>
                </div>
            </div>
            <h3>Skills & Expertise</h3>
            <p>
                I am skilled in HTML, CSS, JavaScript, and React. I have experience in developing dynamic web applications and creating engaging user interfaces.
                My projects include building responsive websites, implementing user authentication, and integrating APIs for enhanced functionality.
            </p>
            <h3>Professional Experience</h3>
            <p>
                I have worked on various projects that involve developing and maintaining web applications using modern technologies.
                My experience includes working on React.js projects and collaborating with teams to deliver high-quality software solutions.
            </p>
        </section>
    );
};

export default About;
