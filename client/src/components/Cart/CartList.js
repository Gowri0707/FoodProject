import FoodItem from "./Fooditem";
import CartWrapper from "../UI/CartWrapper";
import classes from "./CartList.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const foodData = [{
    id: 1,
    name: 'Idli',
    description: 'More sponchy and delicious',
    price: '2.99',
    quantity: 1
},
{
    id: 2,
    name: 'Chicken Briyani',
    description: 'Spicy and tasty',
    price: '3.99',
    quantity: 1
},
{
    id: 3,
    name: 'Gulab Jamun',
    description: 'Sweet to eat',
    price: '2.00',
    quantity: 1
},
{
    id : 4,
    name: 'Meals',
    description: 'Unlimited items to satisfy Lunch',
    price: '4.99',
    quantity: 1
}
]

const CartList = (props) => {
    const [foodItems, setFoodItems] = useState(foodData);
    const cartData = useContext(CartContext);
    useEffect(() => {
        if(cartData.cartItems.length) {
            setFoodItems(prevState => {
                const resultArr = prevState.filter((data)=>{
                    const exists = cartData.cartItems.map(item => item.id).includes(data.id);
                    return !exists;
                  });
                return [...resultArr, ...cartData.cartItems].sort((a,b) => a.id > b.id ? 1 : -1);
            });
        }
    }, [cartData.cartItems])

return (
    <CartWrapper className={classes['cart-list']}>
        {foodItems.map(food => <FoodItem key={food.id} food={food} addItem={cartData.addToCart} />)}
    </CartWrapper>
 )

}

export default CartList;