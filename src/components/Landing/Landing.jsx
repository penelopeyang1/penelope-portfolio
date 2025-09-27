import React from 'react';
import './Landing.css';
import Signature from '../Signature/Signature'; 
import polaroidImage from '../../assets/pixel-polaroid.png';
import welcomeNote from '../../assets/welcome-note.png';

export default function Landing() {
  return (
    <section id="landing" className="landing-section">
      <div className="landing-content">
        <div className="welcome-note">
          <img src={welcomeNote} alt="Welcome Note" />
        </div>
        <div className="landing-intro">
          <p className="greeting-text">Hello, my name is</p>
          {/* <Signature />  */}
          <p className='name'>Penelope Yang</p>
          <p className="description">A software engineer building things she wished existed, combining creativity with experience in AI systems, full-stack apps, and business tools.</p>
        </div>
        <div className="polaroid">
          <img src={polaroidImage} alt="Polaroid" />
        </div>
      </div>
    </section>
  );
} 