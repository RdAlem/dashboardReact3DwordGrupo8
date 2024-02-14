import React, { useEffect, useState } from 'react';
import Categories from './Categories';

function ProductsTable() {
    const [totalProducts, setTotalProducts] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3017/api/products');
            const productsData = await response.json(); // Pasamos la respuesta JSON

            setProducts(productsData.data);
            setTotalProducts(productsData.total);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const formatDate = (dateString) => {
        if (dateString) { 
            return dateString.slice(0, 10); 
        } else {
            return '';
        }
    };

    return (
        <div>
            <h1>Lista de Productos</h1>
            <div>
                <h2>Total de productos: {totalProducts}</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Fecha de Creacion</th>
                        <th>Precio</th>
                        <th>Imágenes</th>
                        <th>Categoria</th>
                        <th>Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{formatDate(product.createdAt)}</td>
                            <td>{product.price}</td>
                            <td>
                                <div>
                                    <a href={`products/${product.photo1}`}><img src={product.photo1} alt="img1" /></a>
                                    <a href={`products/${product.photo2}`}><img src={product.photo2} alt="img2" /></a>
                                    <a href={`products/${product.photo3}`}><img src={product.photo3} alt="img3" /></a>
                                    <a href={`products/${product.photo4}`}><img src={product.photo4} alt="img4" /></a>
                                </div>
                            </td>
                            <td>{product.size}</td>
                            <td>
                                <a href={`products/${product.id}`}>Ver detalle</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Categories/>
        </div>
    );
}

export default ProductsTable;