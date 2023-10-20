import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import { Fragment, useContext } from "react";
import CartContext from "../store/CartContext";
import axios from "axios";

import { Link } from "react-router-dom";

const AllProduct = (props) => {
  const cartCtx = useContext(CartContext);
  const userEmail=localStorage.getItem('email')

  const addToCartHandler =  () => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      imageUrl: props.imageUrl,
      price: props.price,
      key: props.id,
    });

    const obj={email:userEmail}


   axios.post('https://crudcrud.com/api/2f808c1207c740b590df8c1f3ae42c3f/storedata',obj).then(res =>{
    console.log(res)
   }).catch(err =>{
    console.log(err)
   });

   

  };

  const price = `$${props.price}`;

  return (
    <div>
      <Link to="productPage">
        {" "}
        <img src={props.imageUrl} />
      </Link>
      <h2>{props.title}</h2>
      <p>{price}</p>
      <Container className="mb-3">
        <Button variant="primary" onClick={addToCartHandler}>
          Add To Cart
        </Button>
      </Container>
    </div>
  );
};

export default AllProduct;
