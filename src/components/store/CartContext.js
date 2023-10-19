import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  token: "",
  isLogin: false,
  login: () => {},
});

export default CartContext;
