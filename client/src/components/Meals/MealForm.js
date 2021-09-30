import { useRef } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
  const inputRef = useRef();
 
  const addItemHandler = (event) => {
    event.preventDefault();
    props.onAdd(inputRef.current.value);
  };

  return (
    <form className={classes["meal-item__form"]} onSubmit={addItemHandler}>
      <Input
        ref={inputRef}
        id={props.id}
        label="Amount"
        type="number"
        // inputMode="numeric"
        min="1"
        max="5"
        defaultValue="1"
        // onChange={addAmountHandler}
      />
      <Button
        className={classes["add-button"]}
        type="submit"
      >
        + Add
      </Button>
    </form>
  );
};

export default MealForm;
