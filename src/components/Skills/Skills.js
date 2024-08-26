// src/components/Skills.js
import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faJava, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const skills = [
    { name: 'HTML', level: 90, icon: faHtml5 },
    { name: 'CSS', level: 85, icon: faCss3Alt },
    { name: 'JavaScript', level: 75, icon: faJsSquare },
    { name: 'React', level: 80, icon: faReact },
    { name: 'Java', level: 90, icon: faJava },
    { name: 'MySQL', level: 70, icon: faDatabase },
    { name: 'GitHub', level: 90, icon: faGithub },
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
