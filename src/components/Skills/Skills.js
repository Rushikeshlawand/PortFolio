import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faJava, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faBrain } from '@fortawesome/free-solid-svg-icons'; // faCode and faBrain for Problem Solving & DSA

const skills = [
    { name: 'HTML', level: 90, icon: faHtml5 },
    { name: 'CSS', level: 85, icon: faCss3Alt },
    { name: 'JavaScript', level: 75, icon: faJsSquare },
    { name: 'React', level: 80, icon: faReact },
    { name: 'Java', level: 90, icon: faJava },
    { name: 'MySQL', level: 70, icon: faDatabase },
    { name: 'Git', level: 85, icon: faGithub }, // Using GitHub icon for Git

    { name: 'GitHub', level: 90, icon: faGithub },
    { name: 'Bootstrap', level: 80, icon: faBootstrap },
    { name: 'Material UI', level: 75, icon: faReact }, // Using React icon for Material UI
    { name: 'Problem Solving', level: 85, icon: faBrain },
    { name: 'DSA', level: 80, icon: faCode },
];

const Skills = () => {
    return (
        <section id="skills">
            <h2>My Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-card-inner">
                            <div className="skill-card-front">
                                <FontAwesomeIcon icon={skill.icon} size="3x" />
                                <h3>{skill.name}</h3>
                            </div>
                            <div className="skill-card-back">
                                <p>{skill.name}</p>
                                <div className="skill-level">
                                    <div className="skill-bar">
                                        <span style={{ width: `${skill.level}%` }}>{skill.level}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
