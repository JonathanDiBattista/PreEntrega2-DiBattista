import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'

const CartDetail = () => {
    const {cart, removeItem} = useContext(CartContext)
    return (
        <div>
            Cart {
                cart.map (el=>(
                    <div>
                        <p>Produto{el.movie.name}</p>
                        <p>Cantidad {el.q}</p>
                        <button onClick={()=>removeItem(el.movie.id)}>eliminar</button>
                    </div>
                ))
            }
            {
                cart.length > 0 && 
                <button>Create Order</button>
            }
        </div>
    )
    }



export default CartDetail