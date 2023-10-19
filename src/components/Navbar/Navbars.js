import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/esm/Button";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { Link, NavLink } from "react-router-dom";


const Navbars = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.length;

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Nav.Link style={{ color: "white" }}><NavLink to='/Home'>Home</NavLink></Nav.Link>
        <Nav.Link style={{ color: "white" }}><NavLink to='/Display'>Store</NavLink></Nav.Link>
        <Nav.Link style={{ color: "white" }}><NavLink to='/About'>About</NavLink></Nav.Link>
        <Nav.Link style={{ color: "white" }}><NavLink to='/Contact'>Contact Us</NavLink></Nav.Link>
        <Nav.Link style={{ color: "white" }}><NavLink to='/Login'>Login</NavLink></Nav.Link>
        <Button onClick={props.onAdd}>Cart-{numberOfCartItems}</Button>
      </Container>
    </Navbar>
  );
};

export default Navbars;
