import "./App.css";
import CartContextProvider from "./store/CartContextProvider";
import Header from "./components/Header/Header";
import MealList from "./components/Meals/MealList";

function App() {
  return (
    <div className="app">
      <CartContextProvider>
        <Header />
        <MealList />
      </CartContextProvider>
    </div>
  );
}

export default App;
