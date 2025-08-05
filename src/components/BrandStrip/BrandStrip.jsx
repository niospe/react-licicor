import React from 'react';
import './BrandStrip.css';


const BrandStrip = () => {
  return (
    <div className="brand-strip">
      <h3>Marcas que trabajamos</h3>
      <div className="brands-container">
        
        <img src="/path-to-brand1.png" alt="Marca 1" />
        <img src="/path-to-brand2.png" alt="Marca 2" />
        <img src="/path-to-brand3.png" alt="Marca 3" />
        <img src="/path-to-brand4.png" alt="Marca 4" />
      </div>
    </div>
  );
};

export default BrandStrip;