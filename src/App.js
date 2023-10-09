import Button from "react-bootstrap/Button";
import "./App.css";
import Display from "./components/Display/Display";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/store/CartProvider";

function App(props) {

  const [isShownCart,setIsShownCart]=useState(false)

  const cartHandler=()=>{
    setIsShownCart(true)
    
  }
  const hideCartHandler=()=>{
    setIsShownCart(false)
  }


  return (
    <CartContextProvider>
      {isShownCart && <Cart onClick={hideCartHandler}/>}
      <Display onAdd={cartHandler}/>
    </CartContextProvider>
  );
}

export default App;
