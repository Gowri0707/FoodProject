import { createContext } from 'react';

const CartContext = createContext({
    cartItems: [],
    totalAmount: 0,
    removeToCart: ()=>{},
    addToCart : () => {}
});

export const cartInitialstate = {
    cartItems: [],
    totalAmount: 0
}

export default CartContext;