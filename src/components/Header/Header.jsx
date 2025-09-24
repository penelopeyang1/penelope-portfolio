import React from 'react';
import './Header.css';

const navLinks = [
  { label: 'Home', to: 'landing' },
  { label: 'Works', to: 'works' },
  { label: 'Tech', to: 'tech' },
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
        <span className="logo">Penelope Yang</span>
        <ul>
          {navLinks.map(link => (
            <li key={link.to}>
              <a href={`#${link.to}`} onClick={e => handleNav(e, link.to)}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <hr className="header-line" />
    </header>
  );
} 