import CartContext from "./CartContext";
import { useReducer } from "react";
import { useState } from "react";

const defaultCartState = {
  items: [],

  totalAmount: 0,
};

const reducerFn = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatch] = useReducer(reducerFn, defaultCartState);

  const initialState = localStorage.getItem("token");

  const [token, setToken] = useState(initialState);

  const userIsLoggedIn = !!token;

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const loginHandler = (token) => {
    setToken(token);

    localStorage.setItem("token", token);
  };

  const cart = {
    token:token,
    isLogin:userIsLoggedIn,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    login: loginHandler,
  };

  return (
    <CartContext.Provider value={cart}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;
