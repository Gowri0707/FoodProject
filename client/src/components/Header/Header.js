import { useState } from "react";
import CartButton from "../Cart/CartButton";
import AboutReactMeal from "./AboutReactMeal";
import CartModel from "../Cart/CartModel";
import classes from "./Header.module.css";
import MealImage from "../../images/food.jpg";

const Header = (props) => {
  const [cartClicked, setCartClicked] = useState(false);

  const cartClickHandler = () => {
    setCartClicked(true);
  };

  const cartCloseHandler = () => {
    setCartClicked(false);
  };

  return (
    <>
      <header className={classes["meal-header"]}>
        <h2 className={classes["meal-header__title"]}>ReactMeals</h2>
        <CartButton onClick={cartClickHandler} />
      </header>
      {cartClicked && <CartModel onClick={cartCloseHandler} />}
      <div className={classes["meal-background"]}>
        <img src={MealImage} alt="Meal" />
        <AboutReactMeal />
      </div>
    </>
  );
};
export default Header;
