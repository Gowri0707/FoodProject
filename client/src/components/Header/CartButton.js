import { useContext } from "react";
import CartIcon from "./HeaderCartIcon";
import CartContext from "../../store/cart-context";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cartData = useContext(CartContext);
  
  const quantity = cartData.cartItems
    .map((item) => item.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <button className={classes["cart-button"]} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes['cart-button__name']}>Your Cart</span>
      <span className={classes['cart-badge']}>{quantity}</span>
    </button>
  );
};

export default CartButton;
