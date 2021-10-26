import MealImage from "../../images/food.jpg";
import AboutReactMeal from "./AboutReactMeal";
import classes from "./MealOverview.module.css";

const MealOveriew = () => {
    return(
        <div className={classes["meal-background"]}>
        <img src={MealImage} alt="Meal" />
        <AboutReactMeal />
      </div>
    )
}

export default MealOveriew