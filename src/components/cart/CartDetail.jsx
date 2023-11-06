import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext/CartContext'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import FormComponent from '../form/FormComponent'

const CartDetail = () => {
    const {cart, removeItem, clear, addOneItem} = useContext(CartContext)

    const [alertMessage, setAlertMessage] = useState("");

    const [orderId, setOrderId] = useState("")

    const [buyer, setBuyer] = useState({
        name: "",
        email: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        email: ""
    })
    
    const addToCart = async () => {
        let total = 0;
    for (const item of cart) {
      total += item.movie.price * item.q;
    }
        const purchase = {
            buyer,
            items: cart,
            date: new Date(),
            total,
        };
        try {
                const db = getFirestore();
                const orderCollection = collection(db, "orders");
                const docRef = await addDoc(orderCollection, purchase);
                setAlertMessage(`Compra exitosa. Orden: ${docRef.id}, Comprador: ${buyer.name}`);
                clear();
        } catch (err) {
            console.log(err);
        }
        };
    const handleChange = (e) => {
        const { target } = e;
        setBuyer({
            ...buyer,
            [target.name] : target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const errorLocal = {};
        if(!buyer.name) {
            errorLocal.name = "El nombre es obligatorio"
        };
        if(!buyer.email) {
            errorLocal.email = "El email es obligatorio"
        };
        if (Object.keys(errorLocal).length === 0) {
            addToCart();
        } else {
            setErrors(errorLocal);
        }
    }
    return (
        <div>
            <FormComponent 
                formData={buyer}
                inputChange={handleChange}
                onSumbit={onSubmit}
            >
            </FormComponent>
            {alertMessage && (
            <div className="alert alert-success">{alertMessage}</div>
        )}
            Cart {
                cart.map (el=>(
                    <div className='flex bg-zinc-200 gap-4 justify-between items-center w-70 mt-5' key={el.movie.id}>
                        <div className='flex gap-15 items-center'>
                        <h2>Produto: {el.movie.name}</h2>
                        <h2>Cantidad: {el.q}</h2>
                        </div>
                        <div className='flex gap-3 items-center'>
                        <button className="bg-neutral-900 p-2 rounded-md text-white no-underline"onClick={() => addOneItem(el.movie.id)}>Agregar uno</button>
                        <button className="bg-neutral-900 p-2 rounded-md text-white no-underline"onClick={()=>removeItem(el.movie.id)}>Eliminar Uno</button>
                        <button className="bg-neutral-900 p-2 rounded-md text-white no-underline"onClick={()=>clear()}>Eliminar Todo</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
    }



export default CartDetail