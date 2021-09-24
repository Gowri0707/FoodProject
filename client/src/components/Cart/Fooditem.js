import { useState } from "react";
import Button from "../UI/Button";
import classes from "./FoodItem.module.css";

const FoodItem = (props) => {
    const [amount, setAmount] = useState(1);

    const addAmountHandler = (event) => {
        setAmount(event.target.value);
    }

    const addItemHandler = () => {
        const item = {
            id: props.food.id,
            name: props.food.name,
            price: props.food.price,
            quantity: +amount,
        }
        props.addItem(item);
    }

    return (
        <div className={classes['food-item']}>
        <div className={classes['food-list']}>
            <div>
                <h2 className={classes['food-title']}>{props.food.name}</h2>
                <p className={classes['food-description']}>{props.food.description}</p>
                <p className={classes['food-price']}>${props.food.price}</p>
            </div>
            <div className={classes['food-item__form']}>
                <div className={classes['food-item__input']}>
                <label htmlFor="Amount">Amount</label>
                <input type="text" inputMode="numeric" min="1" value={props.food.quantity} onChange={addAmountHandler} />
                </div>
                <Button className={classes['add-button']} type="button" onClick={addItemHandler}>+ Add</Button>
            </div>
        </div>
        <hr className={classes.hr}/>
        </div>
    )
}

export default FoodItem;
