import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3017/api/users/${id}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    return (
      <div>
        {user && (
          <div>
            <h2>Perfil del usuario</h2>
            <p>Nombre: {user.data.name}</p>
            <p>Apellido: {user.data.lastname}</p>
            <p>Email: {user.data.email}</p>
            <p>Rol: {user.data.roles_id}</p>
            <p>Fecha de creación: {user.data.createdAt ? user.data.createdAt.slice(0, 10) : ''}</p>
            {/* Agregar más detalles según sea necesario */}
          </div>
        )}
      </div>
    );
  }
  
  export default Profile;