/* import React, { useState, useEffect, useContext } from 'react'
import CartContext from '../../context/cartContext/CartContext';
import { getOneDocument } from '../../services/firebaseService';
import MovieCard from './MovieCard';

const MovieDetail = ({ id }) => {
    const [item, setitem] = useState(null);
    const onAdd = (q) => {
        addItem(item, q)
    };
    
    const { addItem } = useContext(CartContext);
    useEffect( () => {
        getOneDocument("items",id)
        .then(res => setitem(res))
    }, [])
    return (
        <>
            {
                item !== null &&
                <MovieCard item={item} onAdd={onAdd} />

            }
        </>
    )
}

export default MovieDetail */