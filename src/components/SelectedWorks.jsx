import React from 'react';
import './SelectedWorks.css';

const projects = [
  {
    title: 'Digital Magazine Redesign',
    summary: 'Led the redesign of a major digital magazine, improving UX and increasing engagement by 30%.',
    details: 'Oversaw the full redesign process, from user research to launch. Collaborated with designers, developers, and editorial staff.'
  },
  {
    title: 'Interactive Storytelling Platform',
    summary: 'Developed a platform for immersive, multimedia storytelling used by 50+ writers.',
    details: 'Built with React and Node.js, featuring real-time collaboration and rich media support.'
  },
  {
    title: 'Portfolio Builder Tool',
    summary: 'Created a no-code tool for editors to build and share their portfolios online.',
    details: 'Focused on accessibility and ease of use. Enabled hundreds of editors to showcase their work.'
  }
];

export default function SelectedWorks({ openModal }) {
  return (
    <section id="works" className="works-section">
      <h2>Selected Works</h2>
      <div className="works-grid">
        {projects.map((project, idx) => (
          <div
            className="work-card"
            key={project.title}
            tabIndex={0}
            onClick={() => openModal(
              <div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p style={{ marginTop: 16, color: '#555' }}>{project.details}</p>
              </div>
            )}
            onKeyPress={e => {
              if (e.key === 'Enter') openModal(
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <p style={{ marginTop: 16, color: '#555' }}>{project.details}</p>
                </div>
              );
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 