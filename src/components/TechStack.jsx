import React from 'react';
import './TechStack.css';

const techs = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'HTML5', icon: '🟧' },
  { name: 'Figma', icon: '🎴' },
  { name: 'Git', icon: '🔧' },
  { name: 'Vite', icon: '⚡' },
];

export default function TechStack() {
  return (
    <section id="tech" className="tech-section">
      <h2>Tech Stack</h2>
      <div className="tech-carousel-container">
        <div className="tech-carousel">
          {/* First set of tech items */}
          {techs.map(tech => (
            <div className="tech-item" key={`${tech.name}-1`}>
              <span className="tech-icon" aria-label={tech.name}>{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {techs.map(tech => (
            <div className="tech-item" key={`${tech.name}-2`}>
              <span className="tech-icon" aria-label={tech.name}>{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 