import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3017/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const productData = await response.json();
        setProduct(productData.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {product && (
        <div>
          <h2>Detalle del Producto</h2>
          <p>Nombre: {product.name}</p>
          <p>Descripción: {product.description}</p>
          <p>Precio: {product.price}</p>
          <p>Categoria: {product.size}</p>
          <p>Fecha de creación: {product.createdAt && product.createdAt.slice(0, 10)}</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;