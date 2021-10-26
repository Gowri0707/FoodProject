import classes from "./AboutReactMeal.module.css";
const AboutReactMeal = () => {
    return(
        <div className={classes["meal-description"]}>
            <h2>Delicious Food, Delivered to You</h2>
            <p>Choose your favourite meal from our broad selection of available meals and enjoy delicious
             lunch or dinner at home </p>
             <p>All our meals are cooked with high quality Ingrediants, just-in-time and ofcourse by 
                 our experienced Chefs! </p>
        </div>
    )
}

export default AboutReactMeal;