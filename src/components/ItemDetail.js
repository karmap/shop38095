import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/cartContext'

const ItemDetail = () => {
  
  const { id } = useParams()

  const [product, setProduct] = useState({})
  const {addToCart} = useCart()

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = () => {
    const db = getFirestore()
    const productsCollection = collection(db, 'products')
    const docRef = doc( productsCollection, id)
    getDoc( docRef ).then( res => {
        console.log( res.data() );
        setProduct(res.data())
    })
  }

  const addHandler = () => {
    addToCart(product)
  }

  return (
    <div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.description}</div>
        <img src={product.img} height={200}/>
        <button onClick={addHandler}>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail