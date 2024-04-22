import React from 'react'
import Header from './component/Header'
import Home from './component/Home';
import Product from './component/Product';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './component/Contact';

export default function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<>
      <Header />
      <Home />
    </>
  },
  {
    path:"/product",
    element:<>
      <Header/>
      <Product/>
    </>

  },
  {
    path:"/contact",
    element:<>
      <Header/>
      <Contact/>
    </>

  }
])
  return (
   <RouterProvider router={router}/>
  )
}
