import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext/CartContext'   
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import FormComponent from '../form/FormComponent'

const CartDetail = () => {
    const [buyer, setBuyer] = useState({
        name: "",
        email: ""
    })
    const [errors, setErrors] = useState({
        name: "",
        email: ""
    })
    const [orderId, setOrderId] = useState("")
    const { cart, removeItem, clear } = useContext(CartContext)
    const navigate = useNavigate()
    async function addToCart() {
        const purchase = {
            buyer,
            items: cart,
            date: new Date(),
            total: 1000
        };
    
        console.log(purchase);
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
    
        try {
            const docRef = await addDoc(orderCollection, purchase);
            navigate(`/checkout/${docRef.id}`);
        } catch (error) {
            console.error(error);
        }
    
        clear();
        
    }
    const handleChange = (e) => {
        const { target } = e;
        setBuyer({
            ...buyer,
            [target.name] : target.value
        })
    }
    const onSubmit = (e) => {
        // VALIDACION DE DATOS;
        e.preventDefault()
        const errorLocal = {};
        if(!buyer.name) {
            errorLocal.name = "El nombre es obligatorio"
        };
        if(!buyer.email) {
            errorLocal.email = "El email es obligatorio"
        };
      //  []
        if (Object.keys(errorLocal).length === 0) {
            // No hay errores, puedes realizar la acción deseada, como agregar al carrito
            addToCart();
        } else {
            // Hay errores, establece el estado de errores para mostrarlos al usuario
            setErrors(errorLocal);
        }
    }


    return (
        <div>
            CART
            <FormComponent 
                formData={buyer}
                inputChange={handleChange}
                onSumbit={onSubmit}
            >
            </FormComponent>

            {
                cart.map(el => (
                    <div className={styles.container} key={el.id}>
                        <div className={styles.cardBody}>
                            <p >Product: {el.name}</p>
                            <p >Cantidad: {el.quantity}</p>
                        </div>
                        <img src={el.image} className={styles.image} />
                        <button onClick={() => removeItem(el.id)} className={styles.cartButton}>Eliminar</button>
                    </div>
                ))
            }
            {
                cart.length > 0 &&
                <button className='btn btn-primary' onClick={onSubmit}>Create order</button>
            }
            {
                orderId && <span>Oreder created: {orderId}</span>
            }
        </div>
    )
}

export default CartDetail