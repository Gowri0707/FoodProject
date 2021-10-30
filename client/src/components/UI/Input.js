import React from "react";
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const inputStyle = props.inputStyle ? props.inputStyle : classes['input__div'];
  return (
    <div className={inputStyle}>
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
        onBlur={props.onBlur}
      />
      {props.error && <p className={classes.errorText}>{props.errorText}</p>}
    </div>
  );
});

export default Input;
