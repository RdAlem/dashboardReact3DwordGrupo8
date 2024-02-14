import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function LastProduct() {
  const [lastProduct, setLastProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3017/api/products');
      const productData = await response.json();

      setLastProduct(productData.data[productData.data.length - 1]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {lastProduct && (
        <div>
          <h2>Último producto creado:</h2>
          <p>Nombre: {lastProduct.name}</p>
          <p>Categoría: {lastProduct.size}</p>
          <p>Fecha de creación: {lastProduct.createdAt.slice(0, 10)}</p>
          <Link to={`/products/${lastProduct.id}`}>Ver detalle</Link>
        </div>
      )}
    </div>
  );
}

export default LastProduct;