import React from 'react'
import { useState } from 'react'

const Counter = ({onAdd, text = "Agregar al carrito", q = 0}) => {
  const [count, setCount] = useState(q)

  const increment = () => {   
      setCount(count + 1)
  }
  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  }
return (
  <div>
      <button  className="bg-neutral-900 p-2 rounded-md text-white no-underline" onClick={increment}>Sumar</button>
      <span  className="bg-neutral-900 p-2 rounded-md text-white no-underline">{ count }</span>
      <button  className="bg-neutral-900 p-2 rounded-md text-white no-underline" onClick={decrement}>Restar</button>
      <button  className="bg-neutral-900 p-2 rounded-md text-white no-underline" onClick={() => onAdd(count) }>{text}</button>
  </div>
)
}

export default Counter