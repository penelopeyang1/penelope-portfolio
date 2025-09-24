import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <hr className="footer-line" />
      <div className="footer-content">
        &copy; {new Date().getFullYear()} Penelope Yang
      </div>
    </footer>
  );
} 