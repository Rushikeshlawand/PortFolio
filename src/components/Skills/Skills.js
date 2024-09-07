import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faJava, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faBrain } from '@fortawesome/free-solid-svg-icons';

const skills = [
    { name: 'HTML', icon: faHtml5, levelSymbol: 'star', symbolColor: 'symbol-expert' },
    { name: 'CSS', icon: faCss3Alt, levelSymbol: 'star', symbolColor: 'symbol-expert' },
    { name: 'JavaScript', icon: faJsSquare, levelSymbol: 'intermediate', symbolColor: 'symbol-intermediate' },
    { name: 'React', icon: faReact, levelSymbol: 'star', symbolColor: 'symbol-expert' },
    { name: 'Java', icon: faJava, levelSymbol: 'star', symbolColor: 'symbol-expert' },
    { name: 'MySQL', icon: faDatabase, levelSymbol: 'intermediate', symbolColor: 'symbol-intermediate' },
    { name: 'Git', icon: faGithub, levelSymbol: 'star', symbolColor: 'symbol-expert' },
    { name: 'GitHub', icon: faGithub, levelSymbol: 'star', symbolColor: 'symbol-expert' },
    { name: 'Bootstrap', icon: faBootstrap, levelSymbol: 'intermediate', symbolColor: 'symbol-intermediate' },
    { name: 'Material UI', icon: faReact, levelSymbol: 'intermediate', symbolColor: 'symbol-intermediate' },
    { name: 'Problem Solving', icon: faBrain, levelSymbol: 'star', symbolColor: 'symbol-expert' },
    { name: 'DSA', icon: faCode, levelSymbol: 'intermediate', symbolColor: 'symbol-intermediate' },
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
                                <div className="skill-symbol">
                                    {skill.levelSymbol === 'star' && (
                                        <span className={`symbol symbol-star ${skill.symbolColor}`}>★</span>
                                    )}
                                    {skill.levelSymbol === 'intermediate' && (
                                        <span className={`symbol ${skill.symbolColor}`}>◆</span>
                                    )}
                                    {skill.levelSymbol === 'beginner' && (
                                        <span className={`symbol ${skill.symbolColor}`}>•</span>
                                    )}
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
