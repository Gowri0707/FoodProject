import classes from "./Button.module.css";
const Button = (props) => {
    const styles = props.className + ' ' +classes.button;
    return (
        <button
        className={styles}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
        >
        {props.children}
        </button>
    )
}

export default Button;