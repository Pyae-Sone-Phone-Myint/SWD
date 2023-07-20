import React, { useEffect, useState } from 'react'
import Product from './Product';

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`)
    const data = await api.json();
    setItems(data)
  }
  return (
    <div className=' flex flex-wrap justify-between border rounded'>
      {items.map(item => {
       return <Product key={item.id} {...item}/>
      })}
    </div>
  )
}

export default Products
