import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logoImage from '../../assets/logo-penelope.png';
// import Logo from "../Logo/Logo.jsx";


const navLinks = [
  { label: 'Work', to: '/#projects', isRoute: false },
  { label: 'About', to: '/about', isRoute: true },
  { label: 'Resume', to: 'https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_FILE_ID/view', isRoute: false, isExternal: true },
];

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (e, id) => {
    e.preventDefault();
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img 
            src={logoImage}
            alt="Penelope Yang Logo" 
            className="logo"
          />
        </Link>
        {/* <Logo /> */}
        <ul>
          {navLinks.map(link => (
            <li key={link.to}>
              {link.isRoute ? (
                <Link to={link.to}>{link.label}</Link>
              ) : link.isExternal ? (
                <a href={link.to} target="_blank" rel="noopener noreferrer">{link.label}</a>
              ) : (
                <a href={link.to} onClick={e => handleNav(e, link.to.replace('/#', ''))}>{link.label}</a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 