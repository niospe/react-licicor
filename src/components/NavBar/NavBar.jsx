import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import logo from '../../assets/licicor-logo.png'; // Asegúrate de tener el logo en esta ruta

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Licicor - Artículos de Librería" />
        
      </div>
      <div className="navbar-links">
        <a href="#inicio">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#quienes-somos">Quiénes Somos</a>
        <a href="#mision">Misión</a>
        <a href="#contacto">Contacto</a>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;