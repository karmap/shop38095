import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Card = ( {id, name, price, img} ) => {
  return (
    <Link to={`/detail/${id}`}>
        <div>{name}</div>
        <div>{price}</div>
        <img src={img} height={200}/>
    </Link>
  )
}

const ListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    const db = getFirestore()
    const productsCollection = collection(db, 'products')
    getDocs( productsCollection ).then( res => {
      const productsData = res.docs.map( d => ({id: d.id, ...d.data()}) )
      console.log( productsData );
      setProducts( productsData )
      setLoading(false)
    })
  }

  return (
    <div>
      { loading ? <h1> Cargando... </h1>
        :
        products.map( p => <Card key={p.id} {...p} /> )
      }
    </div>
  )
}

export default ListContainer