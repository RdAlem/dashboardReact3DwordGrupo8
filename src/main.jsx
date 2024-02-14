import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App';
import UsersTable from './components/UsersTable';
import LastUser from './components/LastUser';
import ProductsTable from './components/ProductsTable';
import LastProduct from './components/LastProduct';
import Profile from './components/Profile';
import ProductDetail from './components/ProductDetail';
import Main from './components/Main';
import Search from './components/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main/>
      },
      {
        path: '/users',
        element: <UsersTable />
      },
      {
        path: '/users/:id',
        element: <Profile />
      },
      {
        path: '/lastUser',
        element: <LastUser />
      },
      {
        path: '/products',
        element: <ProductsTable />
      },
      {
        path: '/products/:id',
        element: <ProductDetail />
      },
      {
        path: '/lastProduct',
        element: <LastProduct />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
