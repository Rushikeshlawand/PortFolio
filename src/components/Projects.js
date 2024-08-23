// src/components/Projects.js
import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-card">
                <h3>Real Time Emotion Detection System </h3>
                <p>
                    <FontAwesomeIcon icon={faPython} /> 
                    <br />
                    • Developed a Python-based system for real-time emotion detection, analyzing facial expressions from video feeds.
                    <br />
                    • Utilized OpenCV for computer vision tasks, including face detection, feature extraction, and image preprocessing.
                    <br />
                    • Integrated the system into a user-friendly interface, allowing for seamless real-time emotion analysis and visualization and achieving significant improvements in detection speed and accuracy.
                    <br />
                    • Implemented a deep learning model using TensorFlow to classify emotions such as happiness, sadness, anger, and surprise with high accuracy.
                </p>
            </div>
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
                    <br />
                </p>
            </div>
        </section>
    );
};

export default Projects;
