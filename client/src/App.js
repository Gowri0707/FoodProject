import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CartContext from "./store/cart-context";
import CartList from "./components/Cart/CartList";

function App() {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
    setCartItems((prevState) => {
      const items = prevState.filter((prevItem) => prevItem.id !== item.id);
      return [...items, item];
    });
  };

  console.log('items', cartItems)
  return (
    <div className="app">
      <CartContext.Provider value={{ cartItems: cartItems, addToCart: addToCart}}>
        <Header />
        <CartList />
      </CartContext.Provider>
    </div>
  );
}

export default App;
