import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/esm/Button";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import { Link } from "react-router-dom";

const Navbars = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.length;

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Nav.Link style={{ color: "white" }}>
          {" "}
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link style={{ color: "white" }}>Store</Nav.Link>
        <Nav.Link style={{ color: "white" }}>
          <Link to="/About">About</Link>
        </Nav.Link>
        <Button onClick={props.onClick}>Cart-{numberOfCartItems}</Button>
      </Container>
    </Navbar>
  );
};

export default Navbars;
