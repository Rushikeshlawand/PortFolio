import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact, faJs, faGithub } from '@fortawesome/free-brands-svg-icons';
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
                        • Created dynamic user interfaces using React, enhancing user experience and boosting retention rates. Conducted
                        thorough code reviews and provided actionable feedback, improving overall code quality and maintainability.
                        <br />
                        • Managed database operations with MySQL, ensuring efficient data storage, retrieval, and query optimization.
                        <br />
                        • Utilized Git for version control, managing code versions, resolving conflicts, and collaborating with team members.
                    </p>
                    <a href="https://github.com/yourusername/customer-portal" target="_blank" rel="noopener noreferrer" className="github-link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
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
                    <a href="https://github.com/Rushikeshlawand/restaurants-management-system.git" target="_blank" rel="noopener noreferrer" className="github-link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <div className="project-card">
                    <h3>Real-Time Emotion Detection System</h3>
                    <p>
                        <FontAwesomeIcon icon={faPython} />
                        <br />
                        • Developed a Python-based application using OpenCV for real-time facial expression analysis, including face detection, feature extraction, image preprocessing, and emotion recognition.
                        <br />
                        • Implemented a deep learning model with TensorFlow to classify emotions such as happiness, sadness, anger, and surprise, achieving high accuracy, real-time performance, and reliable emotion detection for varied expressions.
                            <br/>
                        • Integrated machine learning algorithms for emotion classification, allowing analysis of video feeds and prediction of emotions with high accuracy.
                    </p>
                    
                    <a href="https://github.com/yourusername/real-time-emotion-detection" target="_blank" rel="noopener noreferrer" className="github-link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
