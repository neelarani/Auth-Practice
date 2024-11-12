import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './mainLayout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Orders from './components/Orders/Orders.jsx';
import PrivetRoute from './Routes/PrivetRoute.jsx';
import Profile from './components/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>,
      },
      {
        path: 'orders',
        element: (
          <PrivetRoute>
            <Orders></Orders>
          </PrivetRoute>
        ),
      },

      {
        path: 'profile',
        element: (
          <PrivetRoute>
            <Profile></Profile>,
          </PrivetRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
