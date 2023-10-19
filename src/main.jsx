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
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/update/:brand/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}/${params.id}`),
      },
      {
        path: "/carts",
        element: <MyCart></MyCart>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/details",
        element: <Details></Details>,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
