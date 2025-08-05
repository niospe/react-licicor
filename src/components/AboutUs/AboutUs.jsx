import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="quienes-somos" className="about-us">
      <h2>Quiénes Somos</h2>
      <div className="about-content">
        <p>
          Licicor es una empresa dedicada a la distribución de artículos de librería de alta calidad.
          Con más de 10 años en el mercado, nos especializamos en proveer productos para oficinas,
          escuelas y artistas.
        </p>
      </div>
      
      <div id="mision" className="mission">
        <h2>Nuestra Misión</h2>
        <p>
          Facilitar el acceso a materiales de librería de calidad, ofreciendo una amplia variedad
          de productos que inspiren la creatividad y hagan más eficiente el trabajo y estudio.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;