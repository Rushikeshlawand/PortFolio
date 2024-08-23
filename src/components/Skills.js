// src/components/Skills.js
import React from 'react';
import './Skills.css';

const skills = [
    { name: 'HTML', description: 'HyperText Markup Language for structuring web pages.' },
    { name: 'CSS', description: 'Cascading Style Sheets for styling web pages.' },
    { name: 'JavaScript', description: 'Programming language for interactive web pages.' },
    { name: 'React', description: 'JavaScript library for building user interfaces.' },
];

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <div className="skill-card-inner">
                            <div className="skill-card-front">
                                <h3>{skill.name}</h3>
                            </div>
                            <div className="skill-card-back">
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
