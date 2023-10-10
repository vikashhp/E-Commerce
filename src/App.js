import Button from "react-bootstrap/Button";
import "./App.css";
import Display from "./components/Display/Display";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/store/CartProvider";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { Fragment } from "react";
import About from "./components/About/About";

function App(props) {

  const [isShownCart,setIsShownCart]=useState(false)

  const cartHandler=()=>{
    setIsShownCart(true)
    
  }
  const hideCartHandler=()=>{
    setIsShownCart(false)
  }

  const router =createBrowserRouter([
    {path:'/About',element:<About/>},
    {path:'/',element:<Display/>},
    
  ])


  return (

    <RouterProvider router={router}>
    <CartContextProvider>
      {isShownCart && <Cart onClick={hideCartHandler}/>}
      <Display onAdd={cartHandler}/>
    </CartContextProvider>
    </RouterProvider>
  );
}

export default App;
