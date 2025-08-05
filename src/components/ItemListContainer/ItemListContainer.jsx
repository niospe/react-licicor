import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2 className="welcome-message">{greeting}</h2>
      {/* Aquí irá el catálogo de productos en el futuro */}
      <div className="placeholder-products">
        Próximamente nuestro catálogo de productos de librería
      </div>
    </div>
  );
};

export default ItemListContainer;