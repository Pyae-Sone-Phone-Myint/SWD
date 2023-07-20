import React from 'react'

const Product = (props) => {
    const {id, title,image,description} = props
  return (
    <div className=' flex flex-col p-7'>
      <img src={image} className=" w-[200px] h-[]300px] object-contain" alt="" />
      <h1>{title.substring(0,25)}...</h1>
      <button className=' bg-violet-700'>Add to cart</button>
    </div>
  )
}

export default Product
