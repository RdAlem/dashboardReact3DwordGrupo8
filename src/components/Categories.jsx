import React, { useState, useEffect } from 'react';

function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3017/api/products');
            const productsData = await response.json();

            // Crear un objeto para almacenar la cantidad de productos por categoría
            const categoryCount = {
                'Categoria1': 0,
                'Categoria2': 0,
                'Categoria3': 0,
                'Categoria4': 0
            };

            // Calcular la cantidad de productos por categoría
            productsData.data.forEach(product => {
                if (categoryCount.hasOwnProperty(product.size)) {
                    categoryCount[product.size]++;
                }
            });

            // Crear una lista de categorías con su cantidad de productos
            const categoriesWithCount = Object.entries(categoryCount).map(([category, count]) => ({ category, count }));

            setCategories(categoriesWithCount);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h3>Cantidad de productos por categoría</h3>
            <table>
                <thead>
                    <tr>
                        <th>Categoría</th>
                        <th>Cantidad de Productos</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(({ category, count }) => (
                        <tr key={category}>
                            <td>{category}</td>
                            <td>{count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Categories;