'use client'
import { CartContext } from '@/context/CartProvider';
import React, { use } from 'react';

const CartButton = ({food}) => {
    const [inCart, setInCart] = React.useState(false);
    const {addToCart} = use(CartContext)
    const handleAddToCart = () => {
        addToCart(food)
        setInCart(true);
    }
    return (
        <button
            onClick={handleAddToCart}
            disabled={inCart}
            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-xl transition-colors duration-200 shadow-sm disabled:text-gray-800 disabled:bg-gray-400"
        >
            {inCart? 'Added' : 'Add to Cart'}
        </button>
    );
};

export default CartButton;