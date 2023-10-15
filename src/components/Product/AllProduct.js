import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import { Fragment, useContext } from "react";
import CartContext from "../store/CartContext";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import ProductPage from "../ProductPage/ProductPage";
import {Link} from 'react-router-dom'

const AllProduct = (props) => {


  const cartCtx = useContext(CartContext);

  const addToCartHandler=()=>{
    cartCtx.addItem({
      id:props.id,
      title:props.title,
      imageUrl:props.imageUrl,
      price:props.price,
      key:props.id
    })
  }

  const price = `$${props.price}`;

 

  return (
    <>
      <div>
       <Link to='productPage'> <img  src={props.imageUrl} /></Link>
        <h2>{props.title}</h2>
        <p>{price}</p>
        <Container className="mb-3">
          <Button variant="primary" onClick={addToCartHandler}>Add To Cart</Button>
        </Container>
      </div>
    </>
  );
};

export default AllProduct;
