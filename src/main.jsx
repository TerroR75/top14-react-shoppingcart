import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/App';
import ErrorPage from './routes/errorPage';
import ShoppingPage from './routes/ShoppingPage';
import HomePage from './routes/HomePage';
import './styles/main.scss';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/products',
        element: <ShoppingPage />,
      },
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
