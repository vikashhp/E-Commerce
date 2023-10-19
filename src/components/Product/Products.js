import { Fragment } from "react";
import AllProduct from "./AllProduct";
import Container from "react-bootstrap/Container";


const productsArr = [
  {
    title: "Colors",

    price: 100,

   imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = (props) => {
  return (
    <Fragment>
      <Container className="mt-5">
        {productsArr.map((item) => (
          <AllProduct
          
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            id={Math.random()}
            
          />
        ))}
      </Container>
    </Fragment>
  );
};

export default Products;
