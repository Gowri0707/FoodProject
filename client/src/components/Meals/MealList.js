import { useCallback, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import MealItem from "./MealItem";
import CartWrapper from "../UI/CartWrapper";
import classes from "./MealList.module.css";

const MealList = (props) => {
  const { isLoading, error , sendRequest } = useHttp();
  const [foodItems, setFoodItems] = useState([]);
  const fetchMeals = useCallback((responseData) => {
    if(responseData.data) {
      setFoodItems(responseData.data);
    }
  }, []);

  useEffect(() => {
    sendRequest(
      {
        method: "GET",
        URL: "https://foodorder-6e2a9-default-rtdb.firebaseio.com/meals.json",
      },
      fetchMeals
    );
  }, [fetchMeals, sendRequest]);

  let content = <h4 className={classes.alignment}>No Meals Found</h4>;
  if(isLoading) {
    content = <h4 className={classes.alignment}>Loading Meals Data....</h4>;
  }
  if(error) {
    content = <h4 className={classes.alignment}>Something went Wrong</h4>;
  } 
  if(foodItems.length) {
    content = foodItems.map((food) => (
      <MealItem key={food.id} food={food} />
    ))
  }

  return (
    <CartWrapper className={classes["cart-list"]}>
      {content}
    </CartWrapper>
  );
};

export default MealList;
