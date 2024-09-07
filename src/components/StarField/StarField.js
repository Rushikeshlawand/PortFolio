
import React, { useEffect, useState } from 'react';
import './StarField.css';

const StarField = () => {
  const [cometStyle, setCometStyle] = useState({});

  useEffect(() => {
    const randomPosition = () => {
      // Randomly set the top and left positions
      const top = Math.random() * 100; // percentage of viewport height
      const left = Math.random() * 100; // percentage of viewport width
      return { top: `${top}%`, left: `${left}%` };
    };

    setCometStyle(randomPosition());
  }, []);
  return (
    <>
      <div className="bg"></div>
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="comet" style={cometStyle}></div> {/* Comet with random position */}
        <div className="comet2"></div> {/* Comet */}
        <div className="sun"></div> {/* Sun element */}
        <div className="planet earth"></div>
        <div className="planet mars"></div>
      </div>
    </>
  );
};

export default StarField;
