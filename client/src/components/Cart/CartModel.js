import { useContext} from "react";
import classes from "./CartModel.module.css";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import CartWrapper from "../UI/CartWrapper";
import CartItem from "./CartItem";

const CartModel = (props) => {
    const cartData = useContext(CartContext);
    const totalAmount =cartData.cartItems.map(item => item.price * item.quantity).reduce((a,b) => a+b, 0);

    return(
        <>
            <div className={classes.backdrop}></div>
            <CartWrapper className={classes['cart-modal']}>
                <div>
                    {cartData.cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
                </div>
                <div className={classes['cart-total']}>
                    <label>Total Amount</label>
                    <p>${totalAmount.toFixed(2)}</p>
                </div>
                <footer className={classes['cart-modal__footer']}>
                    <Button className={classes['cart-modal__button']} onClick={props.onClick}>close</Button>
                    <Button className={classes['cart-modal__button']} onClick={props.onClick}>Order</Button>
                </footer>
            </CartWrapper>
         </>
    )
}

export default CartModel;