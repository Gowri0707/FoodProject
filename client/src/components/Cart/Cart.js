import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartData = useContext(CartContext);
  const quantity = cartData.cartItems
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);
  const style = {  fill: "white", fontSize: "1.5em" }

  return (
    <div className={classes["cart-select"]} onClick={props.onClick}>
      <AiOutlineShoppingCart style={style} />
      <h2>Your Cart</h2>
      <p>{quantity}</p>
    </div>
  );
};

export default Cart;
