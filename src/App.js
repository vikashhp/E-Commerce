import Button from "react-bootstrap/Button";
import "./App.css";

import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/store/CartProvider";
import { Route, Switch, Redirect } from "react-router-dom";
import { Fragment } from "react";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbars from "./components/Navbar/Navbars";
import ContactUs from "./components/ContactUs/ContactUs";
import ProductPage from "./components/ProductPage/ProductPage";
import Login from "./components/Login/Login";
import CartContext from "./components/store/CartContext";
import { useContext } from "react";
import Products from "./components/Product/Products";

function App(props) {
  const [isShownCart, setIsShownCart] = useState(false);

  const cartCtx = useContext(CartContext);

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
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>

        <Route path="/products">
          <Products />
        </Route>

        <Route path="/Contact">
          <ContactUs />
        </Route>
        <Route path="/productPage">
          <ProductPage />
        </Route>

        <Route path="/Login">
          <Login />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>

      {isShownCart && <Cart onClick={hideCartHandler} />}
    </CartContextProvider>
  );
}

export default App;
