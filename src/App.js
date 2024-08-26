// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Project/Projects';
import Skills from './components/Skills/Skills';

import Contact from './components/Contact/Contact';
import StarField from './components/StarField/StarField';
import './App.css'; // Make sure to import your global styles
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <StarField />
            <div className="content">
                <Header />
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;

