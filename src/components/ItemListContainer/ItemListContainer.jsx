import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../data/productsData';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 2000);
    });

    getProducts.then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="item-list-container">
        <h2 className="greeting">{greeting}</h2>
        <div className="loading">Cargando productos...</div>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <h2 className="greeting">{greeting}</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.pictureUrl} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="brand">{product.brand}</p>
            <p className="price">${product.price.toLocaleString('es-AR')}</p>
            <Link to={`/item/${product.id}`} className="detail-link">Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;