import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/mainLayout/MainLayout';
import Home from './components/pages/Home';
import CategoryNews from './components/pages/CategoryNews';
import AuthLayout from './components/layout/AuthLayout';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AuthProvider from './provider/AuthProvider';
import NewsDetails from './components/pages/NewsDetails';
import PrivateRoute from './components/layout/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '',
        element: <Navigate to={'/category/01'}></Navigate>
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: '/news/:id',
    element: <PrivateRoute>
      <NewsDetails></NewsDetails>
    </PrivateRoute>,
    loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
