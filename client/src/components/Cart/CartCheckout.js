import useInput from "../../hooks/use-input";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./CartCheckout.module.css";

const isEmpty = (value) => value.trim() !== '';
const isFiveChar = (value) => value.trim().length === 5;

const CartCheckout = (props) => {
  const {
    enteredValue: name,
    valueBlurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    error: nameError,
    isValid: nameValid
  } = useInput(isEmpty);
  const {
    enteredValue: address,
    valueBlurHandler: addressBlurHandler,
    valueChangeHandler: addressChangeHandler,
    error: addressError,
    isValid: addressValid
  } = useInput(isEmpty);
  const {
    enteredValue: city,
    valueBlurHandler: cityBlurHandler,
    valueChangeHandler: cityChangeHandler,
    error: cityError,
    isValid: cityValid
  } = useInput(isEmpty);
  const {
    enteredValue: zipcode,
    valueBlurHandler: zipcodeBlurHandler,
    valueChangeHandler: zipcodeChangeHandler,
    error: zipcodeError,
    isValid: zipcodeValid
  } = useInput(isFiveChar);

  const formIsValid = zipcodeValid && cityValid && nameValid && addressValid;

  const submitCheckoutHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
        props.onConfirm({name, address, city, zipcode});
    } 
  };

  return (
    <form className={classes["checkout-form"]} onSubmit={submitCheckoutHandler}>
      <Input
        inputStyle={classes["input-style"]}
        label={"Name"}
        type={"text"}
        onBlur={nameBlurHandler}
        onChange={nameChangeHandler}
        id={"name"}
        error={nameError}
        value={name}
        errorText={"Name should not be empty!!"}
      />
      <Input
        inputStyle={classes["input-style"]}
        label={"Address"}
        type={"text"}
        onChange={addressChangeHandler}
        onBlur={addressBlurHandler}
        id={"address"}
        value={address}
        error={addressError}
        errorText={"Address should not be empty!!"}
      />
       <Input
        inputStyle={classes["input-style"]}
        label={"City"}
        type={"text"}
        onBlur={cityBlurHandler}
        onChange={cityChangeHandler}
        id={"city"}
        value={city}
        error={cityError}
        errorText={"City should not be empty!!"}
      />
      <Input
        inputStyle={classes["input-style"]}
        label={"Zipcode"}
        type={"text"}
        onChange={zipcodeChangeHandler}
        onBlur={zipcodeBlurHandler}
        id={"zipcode"}
        value={zipcode}
        error={zipcodeError}
        errorText={"Zipcode should be 5 numbers!!"}
      />
      <div className={classes['checkout-div']}>
      <Button type="button" onClick={props.onClose}>cancel</Button>
      <Button type="submit" disabled={!formIsValid}>Confirm</Button>
      </div>
    </form>
  );
};

export default CartCheckout;
