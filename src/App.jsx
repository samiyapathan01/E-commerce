import React from 'react'
import ReactDOM from "react-dom/client"
import Navbar from './Components/Navbar'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import ProductDetails from "./Pages/ProductDetails"


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <> <Navbar /> <Hero /> </>,
    }, 
    {
      path: "/about",
      element: <> <Navbar /> <About /> </>,
    },
    {
      path: "/products",
      element: <> <Navbar /> <Products /> </>,
    },
    {
      path: "/products/:id",
      element: <> <Navbar /> <ProductDetails /> </>,
    },
    {
      path: "/contact",
      element: <> <Navbar /> <Contact /> </>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
