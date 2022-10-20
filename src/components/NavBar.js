import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'

const NavBar = () => {

  const { count } = useCart()

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/cart'>Cart { count }</Link>
    </div>
  )
}

export default NavBar