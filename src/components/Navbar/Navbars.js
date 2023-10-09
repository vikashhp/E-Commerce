import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/esm/Button";
import Cart from "../Cart/Cart";

const Navbars = (props) => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Nav.Link style={{ color: "white" }}>Home</Nav.Link>
        <Nav.Link style={{ color: "white" }}>Store</Nav.Link>
        <Nav.Link style={{ color: "white" }}>About</Nav.Link>
        <Button onClick={props.onClick}>Cart-0</Button>
      </Container>
    </Navbar>
  );
};

export default Navbars;
