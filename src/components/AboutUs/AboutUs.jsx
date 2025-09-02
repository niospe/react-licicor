import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>Sobre Nosotros</h1>
        
        <div className="about-section">
          <h2>Nuestra Historia</h2>
          <p>
            Licicor es una librería argentina con más de 20 años de experiencia 
            en el rubro. Nos especializamos en proveer productos de librería 
            de la más alta calidad para estudiantes, profesionales y artistas.
          </p>
        </div>

        <div className="about-section">
          <h2>Nuestra Misión</h2>
          <p>
            Ofrecer a nuestros clientes los mejores productos de librería 
            con atención personalizada y precios competitivos. Trabajamos 
            con las marcas más reconocidas del mercado.
          </p>
        </div>

        <div className="about-section">
          <h2>Marcas que Representamos</h2>
          <div className="brands-grid">
            <div className="brand-card">Faber-Castell</div>
            <div className="brand-card">Ledesma</div>
            <div className="brand-card">Bic</div>
            <div className="brand-card">Stabilo</div>
            <div className="brand-card">Rivadavia</div>
            <div className="brand-card">Pelikan</div>
            <div className="brand-card">Alba</div>
            <div className="brand-card">Office Plus</div>
          </div>
        </div>

        <div className="about-section">
          <h2>Visítanos</h2>
          <p>
            📍 Av. Siempre Viva 1234, Córdoba<br/>
            📞 (011) 1234-5678<br/>
            ✉️ info@licicor.com.ar<br/>
            🕒 Lunes a Viernes: 9:00 - 18:00<br/>
            🕒 Sábados: 9:00 - 13:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;