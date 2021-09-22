import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import classes from "./CartItem.module.css";


const CartItem = (props) => {
    const cartData = useContext(CartContext);
    const addQuantityHandler = () => {
        cartData.addToCart({...props.cartItem, quantity: props.cartItem.quantity + 1});
    }

    const subtractQuantityHandler = () => {
        cartData.addToCart({...props.cartItem, quantity: props.cartItem.quantity - 1})
    }

    return (
        <div className={classes['cart-item']}>
            <div className={classes['cart-item__details']}>
                <div className={classes['cart-item__description']}>
                    <h2>{props.cartItem.name}</h2>
                    <div className={classes['cart-item__quantity__price']}>
                        <p>${props.cartItem.price}</p>
                        <p className={classes['cart-item__multiplier']}>x {props.cartItem.quantity}</p>
                    </div>
                </div>
                <div>
                    <Button onClick={subtractQuantityHandler} className={classes['cart-modal__button']}>-</Button>
                    <Button onClick={addQuantityHandler} className={classes['cart-modal__button']}>+</Button>
                </div>
            </div> 
            <hr className={classes.hr}/>  
        </div>
    )
}

export default CartItem;