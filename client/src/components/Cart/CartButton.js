import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from "../../store/cart-context";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartData = useContext(CartContext);
  
  const quantity = cartData.cartItems
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);
  const style = {  fill: "white", fontSize: "1.5em" }

  return (
    <button className={classes["cart-button"]} onClick={props.onClick}>
      <span>
        <AiOutlineShoppingCart style={style} />
      </span>
      <span className={classes['cart-button__name']}>Your Cart</span>
      <span className={classes['cart-badge']}>{quantity}</span>
    </button>
  );
};

export default CartButton;
