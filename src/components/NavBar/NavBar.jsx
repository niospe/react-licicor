import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="nav-links left-links">
          <Link to="/">Inicio</Link>
          <Link to="/category/escritura">Escritura</Link>
          <Link to="/category/papel">Papel</Link>
          <Link to="/category/arte">Arte</Link>
          <Link to="/category/oficina">Oficina</Link>
        </div>
        
        <div className={`logo-container ${scrolled ? 'scrolled' : ''}`}>
          <Link to="/" className="logo">Licicor</Link>
          <div className="logo-background"></div>
        </div>
        
        <div className="nav-links right-links">
          <Link to="/about">Nosotros</Link>
          <Link to="/contact">Contacto</Link>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;