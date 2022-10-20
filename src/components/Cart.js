import React from 'react'
import { useCart } from '../context/cartContext'

const Cart = () => {

  const {products, clearCart} = useCart()

  return (
    <div>
        <div>Carrito</div>
        { products.map( (p, i) => <li key={i}>{p.name}: {p.price}</li> ) }
        <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  )
}

export default Cart