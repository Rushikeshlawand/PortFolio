import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about-container">
            <div id="about">
                <h2>About Me</h2>
                <p>
                    I'm Rushikesh Lawand, a Software Engineer from Pune with a strong focus on front-end development using React.js. 
                    I hold a Bachelor's degree in Computer Science and have hands-on experience from my internship at Sciqus Infotech, 
                    where I built dynamic, user-friendly web applications. My skills include JavaScript, MySQL, and problem-solving, 
                    with over 110 problems solved on LeetCode. I'm passionate about creating seamless user experiences and continuously 
                    learning to enhance my expertise.
                </p>
            </div>

            <div className="education">
                <h3>Education</h3>
                <div className="edu-item">
                    <h4>B.Tech in Computer Science & Engineering</h4>
                    <p>MIT College Of Railway Engineering & Research, Barshi</p>
                    <p>University: Solapur University</p> {/* Added University name */}
                    <p>CGPA: 9.07</p>
                    <p>Year: 2019 - 2023</p>
                    <button>
                        <a href="https://drive.google.com/file/d/13vLO6CztPULAvgxn_jatxgZPvuFsDaV4/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            View Marksheet
                        </a>
                    </button>
                </div>
                <div className="edu-item">
                    <h4>Diploma in Computer Engineering</h4>
                    <p>Institute Of Petrochemical Engineering, Lonere</p>
                    <p>University: Dr.BATU University</p> {/* Added University name */}
                    <p>CGPA: 7.92</p>
                    <p>Year: 2016 - 2019</p>
                    <button>
                        <a href="https://drive.google.com/file/d/1CWR9ZCqlqG43Df-6K_51W5RUmZg-KH3f/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            View Marksheet
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
