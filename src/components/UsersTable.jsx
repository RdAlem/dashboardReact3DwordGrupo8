import React, { useEffect, useState } from 'react';

function UsersTable() {
    const [totalUsers, setTotalUsers] = useState(0);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3017/api/users');
            const userData = await response.json();

            setUsers(userData.data);
            setTotalUsers(userData.total);
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
            <h1>Lista de Usuarios</h1>
            <div>
                <h2>Total de usuarios: {totalUsers}</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Fecha de Creación</th>
                        <th>Perfil</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.roles_id}</td>
                            <td>{formatDate(user.createdAt)}</td> 
                            <td>
                                <a href={`users/${user.id}`}>Ver perfil</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UsersTable;