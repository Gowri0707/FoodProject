import React from "react";
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes['input__div']}>
      <label>{props.label}</label>
      <input
        ref={ref}
        key={props.id}
        type={props.type}
        // inputMode={props.inputMode}
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  );
});

export default Input;
