import Button from "react-bootstrap/Button";
import "./App.css";
import Display from "./components/Display/Display";
import { useState } from "react";
import Cart from "./components/Cart/Cart";

function App(props) {

  const [isShownCart,setIsShownCart]=useState(false)

  const cartHandler=()=>{
    setIsShownCart(true)
    
  }


  return (
    <div className="App">
      {isShownCart && <Cart/>}
      <Display onAdd={cartHandler}/>
    </div>
  );
}

export default App;
