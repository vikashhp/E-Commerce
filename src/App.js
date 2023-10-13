import Button from "react-bootstrap/Button";
import "./App.css";
import Display from "./components/Display/Display";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/store/CartProvider";
import { Route } from "react-router-dom";
import { Fragment } from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbars from "./components/Navbar/Navbars";
import ContactUs from "./components/ContactUs/ContactUs";

function App(props) {
  const [isShownCart, setIsShownCart] = useState(false);

  const showcartHandler = () => {
    setIsShownCart(true);
  };
  const hideCartHandler = () => {
    setIsShownCart(false);
  };

  return (
    <CartContextProvider>
      <header>
        <Navbars onAdd={showcartHandler} />
      </header>
      <Route path="/Home">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Display">
        <Display />
      </Route>
      <Route path="/Contact">
     <ContactUs/>
      </Route>

      {isShownCart && <Cart onClick={hideCartHandler} />}
    </CartContextProvider>
  );
}

export default App;
