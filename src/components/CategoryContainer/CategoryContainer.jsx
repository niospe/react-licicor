import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '../data/productsData';
import './CategoryContainer.css';

const CategoryContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        
        const filteredProducts = mockProducts.filter(p => p.category === categoryId);
        resolve(filteredProducts);
      }, 1000);
    });

    getProducts.then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [categoryId]); 

  
  const getCategoryName = (categoryId) => {
    const categories = {
      'escritura': 'Material de Escritura',
      'papel': 'Papelería y Cuadernos',
      'arte': 'Arte y Pintura',
      'oficina': 'Artículos de Oficina'
    };
    return categories[categoryId] || categoryId;
  };

  if (loading) {
    return (
      <div className="category-container">
        <h2>Categoría: {getCategoryName(categoryId)}</h2>
        <div className="loading">Cargando productos...</div>
      </div>
    );
  }

  return (
    <div className="category-container">
      <h2>Categoría: {getCategoryName(categoryId)}</h2>
      
      {products.length === 0 ? (
        <div className="no-products">
          <p>No hay productos en esta categoría</p>
          <Link to="/" className="back-link">Volver al catálogo principal</Link>
        </div>
      ) : (
        <>
          <p className="products-count">{products.length} producto{products.length !== 1 ? 's' : ''} encontrado{products.length !== 1 ? 's' : ''}</p>
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
        </>
      )}
    </div>
  );
};

export default CategoryContainer;