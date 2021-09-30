import MealItem from "./MealItem";
import CartWrapper from "../UI/CartWrapper";
import classes from "./MealList.module.css";
// import { useContext, useEffect, useState } from "react";
// import CartContext from "../../store/cart-context";

const foodItems = [
  {
    id: 1,
    name: "Idli",
    description: "More sponchy and delicious",
    price: "2.99",
  },
  {
    id: 2,
    name: "Chicken Briyani",
    description: "Spicy and tasty",
    price: "3.99",
  },
  {
    id: 3,
    name: "Gulab Jamun",
    description: "Sweet to eat",
    price: "2.00",
  },
  {
    id: 4,
    name: "Meals",
    description: "Unlimited items to satisfy Lunch",
    price: "4.99",
  },
];

const MealList = (props) => {
  return (
    <CartWrapper className={classes["cart-list"]}>
      {foodItems.map((food) => (
        <MealItem key={food.id} food={food} />
      ))}
    </CartWrapper>
  );
};

export default MealList;