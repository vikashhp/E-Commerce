import Button from "react-bootstrap/esm/Button";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import CartItem from "./CartItem";

// const cartElements = [
//   {
//     title: "Colors",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

//     quantity: 2,
//   },

//   {
//     title: "Black and white Colors",

//     price: 50,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

//     quantity: 3,
//   },

//   {
//     title: "Yellow and Black Colors",

//     price: 70,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

//     quantity: 1,
//   },
// ];

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <Modal onClose={props.onClick}>
      <h2 style={{textAlign:"center"}}>CartItems</h2>
      {cartCtx.items.map((item) => (
        <CartItem
          title={item.title}
          imageUrl={item.imageUrl}
          price={item.price}
          key={item.id}
        />
      ))}
    </Modal>
  );
};

export default Cart;
