import { useState } from "react";
import Cart from "../Cart/Cart";
import AboutReactMeal from "./AboutReactMeal";
import CartModel from "../Cart/CartModel";
import classes from "./Header.module.css";

const Header = (props) => {
    const [cartClicked, setCartClicked] = useState(false);

    const cartClickHandler = () => {
        setCartClicked(true);
    }

    const cartCloseHandler = () => {
        console.log('here');
        setCartClicked(false);
    }

    return (
    <div className={classes['meal-background']}>
        <div className={classes["meal-header"]}>
            <h2 className={classes["meal-header__title"]}>ReactMeals</h2>
            <Cart onClick={cartClickHandler} />
        </div>
        {cartClicked && <CartModel onClick={cartCloseHandler} />}
        <AboutReactMeal />
    </div>
    );
}
export default Header;
