import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from '../data/productsData';
import ItemCount from './ItemCount';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = mockProducts.find(p => p.id === parseInt(itemId));
        resolve(foundProduct);
      }, 1000);
    });

    getProduct.then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [itemId]);

  if (loading) {
    return (
      <div className="item-detail-container">
        <div className="loading">Cargando producto...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="item-detail-container">
        <div className="not-found">Producto no encontrado</div>
      </div>
    );
  }

  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} unidades de ${product.title} al carrito`);
  };

  return (
    <div className="item-detail-container">
      <div className="product-detail">
        <img src={product.pictureUrl} alt={product.title} />
        <div className="product-info">
          <span className="category-badge">{product.category}</span>
          <h2>{product.title}</h2>
          <p className="brand">Marca: {product.brand}</p>
          <p className="price">${product.price.toLocaleString('es-AR')}</p>
          <p className="description">{product.description}</p>
          
          {product.features && (
            <div className="features">
              <h4>Características:</h4>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;