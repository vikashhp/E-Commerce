import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";

const AllProduct = (props) => {
  const price = `$${props.price}`;
  return (
    <>
      <div>
        <img src={props.imageUrl} />
        <h2>{props.title}</h2>
        <p>{price}</p>
        <Container className="mb-3">
          <Button variant="primary">Add To Cart</Button>
        </Container>
      </div>
    </>
  );
};

export default AllProduct;
