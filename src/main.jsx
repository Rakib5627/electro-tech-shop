import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './components/AddProduct.jsx';
import MyCart from './components/MyCart.jsx';
import LogIn from './components/LogIn.jsx';
import Details from './components/Details.jsx';
import Main from './components/layouts/Main.jsx';
import Products from './components/Products.jsx';
import Update from './components/Update.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import SignUp from './components/SignUp.jsx';
import Users from './components/Users.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';
// import Brands from './components/Brands.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('/brands.json')
      },
      {
         path: "/products/:brand",
        element: <Products></Products>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`),
        
      },
      {
        path: "/add",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/update/:brand/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}/${params.id}`),
      },
      {
        path: "/carts",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader : () => fetch('http://localhost:5000/users')
      },
      {
        path: "/details/:brand/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}/${params.id}`),
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
