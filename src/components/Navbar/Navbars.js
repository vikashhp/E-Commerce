import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/esm/Button";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const Navbars = (props) => {
  const cartCtx = useContext(CartContext);

 const numberOfCartItems=cartCtx.items.length

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Nav.Link style={{ color: "white" }}>Home</Nav.Link>
        <Nav.Link style={{ color: "white" }}>Store</Nav.Link>
        <Nav.Link style={{ color: "white" }}>About</Nav.Link>
        <Button onClick={props.onClick}>Cart-{numberOfCartItems}</Button>
      </Container>
    </Navbar>
  );
};

export default Navbars;
