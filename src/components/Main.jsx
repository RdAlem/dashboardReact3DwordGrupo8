import React, { useEffect, useState } from 'react';

function Main() {
  const [totalUsers, setTotalUsers] = useState(0); 
  const [totalProducts, setTotalProducts] = useState(0); 

  useEffect(() => {
    fetchUsersData(); 
    fetchProductsData(); 
  }, []);

  const fetchUsersData = async () => {
    try {
      const response = await fetch('http://localhost:3017/api/users');
      const usersData = await response.json(); 

      setTotalUsers(usersData.total); 
    } catch (error) {
      console.error('Error fetching users data:', error);
    }
  };

  const fetchProductsData = async () => {
    try {
      const response = await fetch('http://localhost:3017/api/products');
      const productsData = await response.json(); 

      setTotalProducts(productsData.total); 
    } catch (error) {
      console.error('Error fetching products data:', error);
    }
  };

  return (
    <div>
      <h1>Bienvenido a 3DWord</h1>
      
      <div>
        <h2>Cantidad de usuarios en la base de datos: {totalUsers}</h2> 
      </div>

      <div>
        <h2>Cantidad de productos en la base de datos: {totalProducts}</h2> 
      </div>
    </div>
  );
}

export default Main;