// src/components/CertificatesAchievements.js
import React from 'react';
import './CertificatesAchievements.css';

const CertificatesAchievements = () => {
    return (
        <section id="certificates-achievements">
            <h2>Certificates & Achievements</h2>
            <div className="achievement">
                <h3>Solved 80+ Problems on LeetCode</h3>
                <p>
                    Successfully solved over 80+ problems on LeetCode, demonstrating problem-solving skills and proficiency in various algorithms and data structures.
                </p>
            </div>
            <div className="certificates">
                <div className="certificate">
                    <h3>Fundamentals of Java</h3>
                    <p>SkillsUp</p>
                </div>
                <div className="certificate">
                    <h3>Web Development</h3>
                    <p>Coursera</p>
                </div>
            </div>
            <div className="extracurricular">
                <h3>Extracurricular Activities</h3>
                <div className="activity">
                    <h4>Social Media Manager | MIT College Instagram Account</h4>
                    <p>
                        • Oversaw content management for the college’s Instagram account, boosting engagement by 30%.
                        <br />
                        • Promoted events and competitions, reaching a broad audience.
                        <br />
                        • Designed and executed posts and stories, enhancing digital footprint and presence.
                    </p>
                </div>
                <div className="activity">
                    <h4>Social Media Manager | CloudWorld Institute</h4>
                    <p>
                        • Directed social media management for the institute, enhancing visibility and engagement.
                        <br />
                        • Launched campaigns for DevOps courses and events, increasing enrollment and participation.
                        <br />
                        • Utilized analytics and monitoring to optimize strategies and improve outreach.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CertificatesAchievements;
