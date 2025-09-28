import React from 'react';
import './Footer.css';
import roundStar from '../../assets/round-star.png';

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="footer-line" />
      <div className="footer-content">
        <div className="footer-left">
          <div className="thanks-container">
            <img src={roundStar} alt="Round Star" className="round-star" />
            <p className="thanks">Thanks for visiting!</p>
          </div>
          <p className="made-with">Made with passion, ice water, and The Marias setlist &lt;3</p>
          <div className="copyright"> 
            Penelope Yang &copy;{new Date().getFullYear()} 
          </div> 
        </div>
        
        <div className="footer-right">
          <div className="footer-section">
            <h3 className="section-title">Contact Me</h3>
            <div className="contact-links">
              <a href="mailto:penelope@example.com" className="contact-link">
                Email
              </a>
              <a href="https://linkedin.com/in/penelope-yang" className="contact-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/penelopeyang1" className="contact-link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 