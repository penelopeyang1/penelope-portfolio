import React from 'react';
import './Landing.css';
import Signature from './Signature'; // Import the Signature component

export default function Landing() {
  return (
    <section id="landing" className="landing-section">
      <div className="landing-content">
        <p className="greeting-text">Hello, my name is</p>
        <Signature /> 
        <p className="intro">Creative technologist, editor, and storyteller. I build digital experiences that connect ideas and people.</p>
      </div>
    </section>
  );
} 