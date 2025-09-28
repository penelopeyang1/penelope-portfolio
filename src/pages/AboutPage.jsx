import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About Me</h1>
            <p className="about-hero-subtitle">
              Creative technologist, editor, and storyteller passionate about the intersection of technology and human experience.
            </p>
          </div>
        </section>

        <section className="about-content">
          <div className="about-container">
            <div className="about-main">
              <div className="about-text">
                <h2>My Story</h2>
                <p>
                  I'm Penelope Yang, a creative technologist and editor passionate about the intersection of storytelling and technology. With a background in digital publishing and product design, I help teams craft engaging, accessible, and impactful digital experiences.
                </p>
                <p>
                  My journey began in the world of editorial design, where I discovered my love for creating meaningful connections between content and audiences. This passion led me to explore the technical side of digital experiences, where I now bridge the gap between creative vision and technical implementation.
                </p>
                <p>
                  I believe that the best digital products are those that not only function flawlessly but also tell compelling stories and create genuine human connections. Whether I'm building AI systems, designing user interfaces, or crafting editorial content, my goal is always to create experiences that matter.
                </p>
              </div>

              <div className="about-skills">
                <h3>What I Do</h3>
                <div className="skills-grid">
                  <div className="skill-category">
                    <h4>Development</h4>
                    <ul>
                      <li>Full-stack web applications</li>
                      <li>AI systems and machine learning</li>
                      <li>React & modern JavaScript</li>
                      <li>Python & data analysis</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h4>Design</h4>
                    <ul>
                      <li>User experience design</li>
                      <li>Editorial design</li>
                      <li>Brand identity</li>
                      <li>Visual storytelling</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h4>Content</h4>
                    <ul>
                      <li>Technical writing</li>
                      <li>Content strategy</li>
                      <li>Digital publishing</li>
                      <li>Story development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-sidebar">
              <div className="about-card">
                <h3>Let's Connect</h3>
                <p>I'm always interested in new opportunities and collaborations.</p>
                <div className="contact-links">
                  <a href="mailto:penelope@example.com" className="contact-link">
                    <span className="contact-icon">✉</span>
                    Email Me
                  </a>
                  <a href="https://linkedin.com/in/penelope-yang" className="contact-link" target="_blank" rel="noopener noreferrer">
                    <span className="contact-icon">💼</span>
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="about-card">
                <h3>Currently</h3>
                <ul>
                  <li>Building AI-powered tools for content creators</li>
                  <li>Exploring the future of digital storytelling</li>
                  <li>Mentoring emerging developers</li>
                  <li>Writing about technology and creativity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
