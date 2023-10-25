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
    
   /*  const navigate = useNavigate() */
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
                    <div key={el.movie.id}>
                        <p>Produto{el.movie.name}</p>
                        <p>Cantidad {el.q}</p>
                        <button onClick={() => addOneItem(el.movie.id)}>Agregar uno</button>
                        <button onClick={()=>removeItem(el.movie.id)}>Eliminar Uno</button>
                        <button onClick={()=>clear()}>Eliminar Todo</button>
                    </div>
                ))
            }
        </div>
    )
    }



export default CartDetail