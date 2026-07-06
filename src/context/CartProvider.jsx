'use client'
import React, { useState } from 'react';

export const CartContext = React.createContext();
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    const cartInfo = {
        cart,
        addToCart
    }
    return (
        <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
    );
};

export default CartProvider;