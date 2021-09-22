import classes from "./CartWrapper.module.css";

const CartWrapper = (props) => {
    const styles = props.className + ' ' + classes['cart-wrapper'] ;
    return (
        <div className={styles}>{props.children}</div>
    )
}

export default CartWrapper;