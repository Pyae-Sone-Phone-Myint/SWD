import React from 'react'

const Product = ({title,image,price,description,key}) => {
  return (
    <div key={key} className=" basis-4/12 border rounded p-4">
      <img src={image} className=" w-[300px] h-[300px] object-contain"/>
      <h1>{title}</h1>
      <p>{description.substr(0,100)}...</p>
      <p>{price}</p>
      <div className="flex justify-between">
      <button className=' border-none bg-blue-400 rounded py-1 px-3'>Add to cart</button>
      <button className=' border-none bg-blue-400 rounded py-1 px-3'>Detail</button>
      </div>
    </div>
  )
}

export default Product
