import React from 'react';
import '../Header/Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#home"><b>Home</b></a></li>
                    <li><a href="#about"><b>About</b></a></li>
                    <li><a href="#skills"><b>Skills</b></a></li>
                    <li><a href="#projects"><b>Projects</b></a></li>
                    <li><a href="#contact"><b>Contact</b></a></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
