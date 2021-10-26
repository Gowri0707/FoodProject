import CartButton from "./CartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes["meal-header"]}>
      <h2 className={classes["meal-header__title"]}>ReactMeals</h2>
      <CartButton onClick={props.onClick} />
    </header>
  );
};
export default Header;
