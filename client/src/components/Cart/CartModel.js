import { useContext, useState } from "react";
import classes from "./CartModel.module.css";
import CartContext from "../../store/cart-context";
import useHttp from "../../hooks/use-http";
import Button from "../UI/Button";
import CartWrapper from "../UI/CartWrapper";
import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";

const CartModel = (props) => {
  const cartData = useContext(CartContext);
  const { sendRequest, isLoading: isSubmitting, error } = useHttp();
  const [isOrderButtonClicked, setOrderButtonClicked] = useState(false);
  const [isSubmissionCompleted, setSubmissionCompleted] = useState(false);

  const orderClickHandler = () => {
    setOrderButtonClicked(true);
  };

  const responseHandler = (responseData) => {
    if (responseData) {
      setSubmissionCompleted(true);
      cartData.clearCart();
    }
  };

  const confirmEventHandler = (userData) => {
    sendRequest(
      {
        method: "POST",
        URL: "https://foodorder-6e2a9-default-rtdb.firebaseio.com/orders.json",
        data: {
          user: {
            ...userData,
          },
          orderedItems: cartData.cartItems,
        },
      },
      responseHandler
    );
  };

  const modalButtons = (
    <footer className={classes["cart-modal__footer"]}>
      <Button className={classes["cart-modal__button"]} onClick={props.onClick}>
        close
      </Button>
      <Button
        className={classes["cart-modal__button"]}
        onClick={orderClickHandler}
      >
        Order
      </Button>
    </footer>
  );

  const CartModalActions = (
    <>
      <div>
        {cartData.cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <div className={classes["cart-total"]}>
        <label>Total Amount</label>
        <p>${cartData.totalAmount.toFixed(2)}</p>
      </div>
      {!isOrderButtonClicked && modalButtons}
      {isOrderButtonClicked && (
        <CartCheckout onConfirm={confirmEventHandler} onClose={props.onClick} />
      )}
    </>
  );

  const successAction = (
    <>
    <p> Successfully Order saved, You will receive the food sooner!!!</p>
    <Button onClick={props.onClick}>Close</Button>
    </>
  )

  return (
    <>
      <div className={classes.backdrop} onClick={props.onClick}></div>
      <CartWrapper className={classes["cart-modal"]}>
        {!isSubmitting && isSubmissionCompleted &&  successAction}
        {!isSubmitting && !isSubmissionCompleted && CartModalActions}
        {!isSubmitting && error && <p>Something went Wrong, Please Try again after a minute!</p>}
        {isSubmitting && <p>Order Data is sent to server</p>}
      </CartWrapper>
    </>
  );
};

export default CartModel;
