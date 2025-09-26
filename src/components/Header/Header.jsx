import React from 'react';
import './Header.css';
import logoImage from '../../assets/logo-penelope.png';

const navLinks = [
  // { label: 'Home', to: 'landing' },
  { label: 'Work', to: 'projects' },
  // { label: 'Tech', to: 'tech' },
  { label: 'About', to: 'about' },
  { label: 'Contact', to: 'contact' },
];

export default function Header() {
  const handleNav = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <img 
          src={logoImage}
          alt="Penelope Yang Logo" 
          className="logo"
        />
        <ul>
          {navLinks.map(link => (
            <li key={link.to}>
              <a href={`#${link.to}`} onClick={e => handleNav(e, link.to)}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 