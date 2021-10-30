import { useState } from "react";

const useInput = (validateFun) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isInputTouched, setIsInputTouched] = useState(false);

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
        setIsInputTouched(true);
    }

    const valueBlurHandler = (event) => {
        setIsInputTouched(true);
    }

    const resetInput = () => {
        setIsInputTouched(false);
        setEnteredValue('');
    }

    return {
        enteredValue,
        valueChangeHandler,
        valueBlurHandler,
        resetInput,
        error: isInputTouched && !validateFun(enteredValue),
        isValid: validateFun(enteredValue)
    }
}

export default useInput;