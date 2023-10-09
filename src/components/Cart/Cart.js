import Button from "react-bootstrap/esm/Button";
import Modal from "../Modal/Modal";


const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = (props) => {
  return (
    <Modal onClose={props.onClick}>
      <h2>CartItems</h2>
      {cartElements.map((item) => (
        <li>
          <div>
            <img src={item.imageUrl} />
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <Button variant="danger">Remove</Button>
          </div>
        </li>
      ))}
      
    </Modal>
  );
};

export default Cart;
