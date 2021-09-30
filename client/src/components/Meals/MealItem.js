import { useContext} from "react";
import MealForm from "./MealForm";
import classes from "./MealItem.module.css";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const cartData = useContext(CartContext);
  const addItemHandler = (quantity) => {
    const item = {
      id: props.food.id,
      name: props.food.name,
      description: props.food.description,
      price: props.food.price,
      quantity: +quantity,
    };
    cartData.addToCart(item);
  };
  return (
    <div className={classes["meal-item"]}>
      <div className={classes["meal-list"]}>
        <div>
          <h2 className={classes["meal-title"]}>{props.food.name}</h2>
          <p className={classes["meal-description"]}>
            {props.food.description}
          </p>
          <p className={classes["meal-price"]}>${props.food.price}</p>
        </div>
        <MealForm onAdd={addItemHandler} id={props.food.id} />
      </div>
      <hr className={classes.hr} />
    </div>
  );
};

export default MealItem;
