import React from 'react';
import './Landing.css';
import Signature from '../Signature/Signature'; // Import the Signature component

export default function Landing() {
  return (
    <section id="landing" className="landing-section">
      <div className="landing-content">
        <p className="greeting-text">Hello, my name is</p>
        {/* <Signature />  */}
        <p className='name'>Penelope Yang</p>
        <p className="intro">A software engineer building things she wished existed, combining creativity with experience in AI systems, full-stack apps, and business tools.</p>
      </div>
    </section>
  );
} 