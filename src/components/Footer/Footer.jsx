import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="footer-line" />
      <div className="footer-content">
      <p className="thanks">Thanks for visiting!</p>
      <p className="made-with">Made with passion, ice water, and a good playlist</p>
       <div className="copyright"> 
        Penelope Yang &copy;{new Date().getFullYear()} 
        </div> 
      </div>
    </footer>
  );
} 