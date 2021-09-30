import { useReducer } from "react";
import CartContext, { cartInitialstate } from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems = [...state.cartItems];
    const totalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.item.id
    );
    if (existingCartItemIndex >= 0) {
      const existingCartItem = updatedItems[existingCartItemIndex];
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = updatedItems.concat(action.item);
    }
    return { cartItems: updatedItems, totalAmount: totalAmount };
  } else if (action.type === "REMOVE") {
    let updatedItems = [...state.cartItems];
    const totalAmount = state.totalAmount - action.item.price;
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];
    if (existingCartItem.quantity === 1) {
      updatedItems = updatedItems.filter((item) => item.id !== action.item.id);
    } else {
      const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity - 1 };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { cartItems: updatedItems, totalAmount: totalAmount };
  } else {
    return cartInitialstate;
  }
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, cartInitialstate);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemHandler = (item) => {
    dispatchCart({ type: "REMOVE", item: item });
  };

  const cartData = {
    cartItems: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    removeFromCart: removeItemHandler,
    addToCart: addItemHandler,
  };

  return (
    <CartContext.Provider value={cartData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
