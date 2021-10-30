import { createContext } from 'react';

const CartContext = createContext({
    cartItems: [],
    totalAmount: 0,
    removeFromCart: ()=>{},
    addToCart : () => {},
    clearCart: ()=> {}
});

export const cartInitialstate = {
    cartItems: [],
    totalAmount: 0
}

export default CartContext;