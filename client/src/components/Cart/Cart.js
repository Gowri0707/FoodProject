import { useContext } from "react";
import  CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartData = useContext(CartContext);
    const quantity =cartData.cartItems.map(item => item.quantity).reduce((a,b) => a+b, 0);

    return (
        <div className={classes['cart-select']} onClick={props.onClick}>
            {/* <img src={'shopping-cart.png'} /> */}
        <h2 >Your Cart</h2>
        <p>{quantity}</p>
        </div>
    )
}

export default Cart;