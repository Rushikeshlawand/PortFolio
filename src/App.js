// src/App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import StarField from './components/StarField';
import './App.css'; // Make sure to import your global styles
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <StarField />
            <div className="content">
                <Header />
                <Home />
                <About />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;

