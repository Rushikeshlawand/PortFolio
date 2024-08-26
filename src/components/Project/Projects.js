// src/components/Projects.js
import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-container">
            <div className="project-card">
                    <h3>Customer Portal (Internship)</h3>
                    <p>
                        <FontAwesomeIcon icon={faReact} /> <FontAwesomeIcon icon={faDatabase} /> <FontAwesomeIcon icon={faJs} />
                        <br />
                        • Implemented a new feature, Content Delivery Network, resulting in a 20% reduction in total page load times.
                        <br />
                        • Utilized React to create user interfaces for enhanced user experience and responsiveness, leading to increased user retention rates.
                        <br />
                        • Partnered with designers, QA engineers, and other developers to ensure seamless project delivery, boosting project efficiency by 20% with the use of GitHub.
                    </p>
                </div>
                <div className="project-card">
                    <h3>Restaurant Management System</h3>
                    <p>
                        <FontAwesomeIcon icon={faReact} /> <FontAwesomeIcon icon={faJs} /> <FontAwesomeIcon icon={faDatabase} />
                        <br />
                        • Utilized React.JS to build dynamic user interfaces, providing a seamless and interactive experience for customers, admins, and chefs.
                        <br />
                        • Implemented Node.JS for server-side logic, handling API requests and integrating with the MySQL database.
                        <br />
                        • Developed robust database operations with MySQL, including schema design and query optimization.
                        <br />
                        • Created a real-time order processing system using WebSocket technology in Node.JS to ensure instantaneous updates and smooth communication between customers, chefs, and admins.
                    </p>
                </div>
                <div className="project-card">
                    <h3>Real-Time Emotion Detection System</h3>
                    <p>
                        <FontAwesomeIcon icon={faPython} />
                        <br />
                        • Developed a Python-based application using OpenCV for real-time facial expression analysis, including face detection, feature extraction, image preprocessing, and emotion recognition.
                        <br />
                        • Integrated machine learning algorithms for emotion classification, allowing analysis of video feeds and prediction of emotions with high accuracy.
                    </p>
                </div>
              
            </div>
        </section>
    );
};

export default Projects;
