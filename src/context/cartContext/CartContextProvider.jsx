import React, { useState } from 'react'
import CartContext from './CartContext'
const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    // const addItem = (item, quantity) => {
    //     const id = item.id
    //     if (!isInCart(id)) {
    //         setCart([
    //             ...cart,
    //             { item, quantity }
    //         ])
    //     } else {
    //         const updatedCart = cart.map((cartItem) => {
    //             if (cartItem.item.id === id) {
    //                 return {
    //                     ...cartItem,
    //                     quantity: cartItem.quantity + quantity
    //                 };
    //             }
    //             return cartItem;
    //         });
    //         setCart(updatedCart);
    //     }
    // }

    const addItem = (item, q) => {
        const { id } = item    
        if( isInCart(id)) {
            const newCart = cart.map(el => {
                if(el.id === id){
                    return {
                        ...el,
                        quantity: el.quantity + q
                    };
                }
                return el
            })
            setCart(newCart)
        }
        else {
            setCart([
                ...cart,
                {
                    ...item, quantity: q
                }
            ])
        }
    };
    const isInCart = (id) => {
        return cart.some(cartItem => cartItem.item.id === id)
    }

    



    const removeItem = (id, q) => {
        const newCart = cart.filter((el) => el.id !== id);
        setCart(newCart)
    };

    const clear = () => {
        setCart([])
    }

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
    }
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider