import { useState } from "react";
import "./App.css";
import CartContextProvider from "./store/CartContextProvider";
import Header from "./components/Header/Header";
import CartModel from "./components/Cart/CartModel";
import MealList from "./components/Meals/MealList";
import MealOveriew from "./components/Meals/MealOverview";

function App() {
  const [cartClicked, setCartClicked] = useState(false);

  const cartClickHandler = () => {
    setCartClicked(true);
  };

  const cartCloseHandler = () => {
    setCartClicked(false);
  };
  return (
    <div className="app">
      <CartContextProvider>
        <Header onClick={cartClickHandler} />
        {cartClicked && <CartModel onClick={cartCloseHandler} />}
        <MealOveriew />
        <MealList />
      </CartContextProvider>
    </div>
  );
}

export default App;
