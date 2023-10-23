import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'

const CartDetail = () => {
    const {cart, removeItem, clear, addOneItem} = useContext(CartContext)
    return (
        <div>
            Cart {
                cart.map (el=>(
                    <div key={el.movie.id}>
                        <p>Produto{el.movie.name}</p>
                        <p>Cantidad {el.q}</p>
                        <button onClick={() => addOneItem(el.movie.id)}>Agregar uno</button>
                        <button onClick={()=>removeItem(el.movie.id)}>Eliminar Uno</button>
                        <button onClick={()=>clear()}>Eliminar Todo</button>
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