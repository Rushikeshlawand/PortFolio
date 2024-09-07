import React from 'react';
import './CertificatesAchievements.css';

const CertificatesAchievements = () => {
    return (
        <section id="certificates-achievements">
            <h2> Certificates & Extracurricular Activities</h2>
            <div className="extracurricular">
            <div className="activity">
                    <h4>Full Stack Development Course From upGrad</h4>
                    <p>
                        • An intensive course in Full Stack Development, gaining skills in front-end and back-end technologies.
                        <br />
                        • The course covered Java, DSA, HTML, CSS, JavaScript, React.JS, and MySQL, enabling end-to-end web application development.
                    </p>
                </div>
                <div className="activity">
                    
                    <h4>Social Media Manager At MIT College Instagram Account</h4>
                    <p>
                        • Oversaw content management for the college’s Instagram account, boosting engagement by 30%.
                        <br />
                        • Promoted events and competitions, reaching a broad audience.
                        <br />
                        • Designed and executed posts and stories, enhancing digital footprint and presence.
                    </p>
                </div>
                <div className="activity">
                    <h4>Social Media Manager At CloudWorld Institute</h4>
                    <p>
                        • Directed social media management for the institute, enhancing visibility and engagement.
                        <br />
                        • Launched campaigns for DevOps courses and events, increasing enrollment and participation.
                        <br />
                        • Utilized analytics and monitoring to optimize strategies and improve outreach.
                    </p>
                </div>
                {/* New card for Full Stack Development */}
                
            </div>
        </section>
    );
};

export default CertificatesAchievements;
