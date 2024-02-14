import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function LastUser() {
  const [lastUser, setLastUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:3017/api/users')
      .then(response => response.json())
      .then(userData => {
        setLastUser(userData.data[userData.data.length - 1]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      {lastUser && (
        <div>
          <h2>Último usuario creado:</h2>
          <p>Nombre: {lastUser.name + " " + lastUser.lastname}</p>
          <p>Email: {lastUser.email}</p>
          <p>Fecha de creación: {lastUser.createdAt.slice(0, 10)}</p>
          <Link to={`/users/${lastUser.id}`}>Ver perfil</Link>
        </div>
      )}
    </div>
  );
}

export default LastUser;