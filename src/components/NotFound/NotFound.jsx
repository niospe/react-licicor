import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2>404 - Página no encontrada</h2>
      <p>La página que estás buscando no existe.</p>
      <Link to="/" className="back-home">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;