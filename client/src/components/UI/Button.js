import classes from "./Button.module.css";
const Button = (props) => {
    const styles = props.className + ' ' +classes.button;
    return (
        <button
        className={styles}
        onClick={props.onClick}
        >
        {props.children}
        </button>
    )
}

export default Button;