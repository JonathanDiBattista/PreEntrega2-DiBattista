import React, { useState } from 'react'
import CartContext from './CartContext'
const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    console.log("context", cart);
    const addItem = (movie, q) => {
    const existingProduct = cart.findIndex((item) => item.movie.id === movie.id);
    if (existingProduct !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingProduct].q += q;
        setCart(updatedCart);
    } else {
        setCart([...cart, { movie, q }]);
    }
    };

    const removeItem = (id) => {
        const updatedCart = cart.map((item) => {
        if (item.movie.id === id) {
            if (item.q > 1) {
            return { ...item, q: item.q - 1 };
            }
        }
        return item;
        });
        const newCart = updatedCart.filter((item) => item.q > 0);
        setCart(newCart);
};

const addOneItem = (id) => {
    const updatedCart = cart.map((item) => {
    if (item.movie.id === id) {
        return { ...item, q: item.q + 1 };
    }
    return item;
    });

    setCart(updatedCart);
};

    const clear = () => {
        setCart([])
    }

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        addOneItem
    }
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>

    )
}



export default CartContextProvider